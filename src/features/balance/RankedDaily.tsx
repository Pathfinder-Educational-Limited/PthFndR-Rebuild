import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { getBalanceSupabaseClient } from './supabase';
import { dayKey, formatTime } from './logic';

type Daily = { date: string; server_now: string; puzzle_id: string; nums: number[]; anchors: number[]; target: number; started_at: string | null; finished_at: string | null; elapsed_seconds: number | null; alias: string | null; visible: boolean };
type Row = { rank: number; alias: string; seconds: number; is_you: boolean };
const letters = ['A', 'B', 'C', 'D'];
const fills = ['bg-[#d7e8dd]', 'bg-[#e9dfce]', 'bg-[#dddfee]', 'bg-[#efdad5]'];
const button = 'min-h-11 rounded-xl border border-slate-300 px-4 py-2 focus-visible:outline focus-visible:outline-2 disabled:opacity-40';
const enabled = import.meta.env.VITE_BALANCE_RANKED_ENABLED === 'true';

export default function RankedDaily() {
  const [user, setUser] = useState<User | null>(null);
  const [daily, setDaily] = useState<Daily | null>(null);
  const [board, setBoard] = useState<number[]>([]);
  const [history, setHistory] = useState<number[][]>([]);
  const [region, setRegion] = useState(0);
  const [alias, setAlias] = useState('');
  const [publish, setPublish] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState(dayKey());
  const [refresh, setRefresh] = useState(0);
  const [share, setShare] = useState('');

  const key = (d: Daily, uid: string) => `balance:ranked:${uid}:${d.date}:${d.puzzle_id}`;
  function applyDaily(d: Daily, uid: string) {
    setDaily(d); setAlias(d.alias ?? ''); setPublish(d.visible); setShare('');
    const fresh = d.nums.map((_, i) => d.anchors.includes(i) ? d.anchors.indexOf(i) : -1);
    try {
      const saved = JSON.parse(localStorage.getItem(key(d, uid)) ?? 'null');
      if (Array.isArray(saved) && saved.length === 16 && saved.every(r => Number.isInteger(r) && r >= -1 && r <= 3) && d.anchors.every((i, r) => saved[i] === r)) setBoard(saved);
      else setBoard(fresh);
    } catch { setBoard(fresh); }
    setHistory([]);
  }
  useEffect(() => {
    const timer = window.setInterval(() => setDate(dayKey()), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!enabled) return;
    let active = true;
    try {
      const client = getBalanceSupabaseClient();
      const { data } = client.auth.onAuthStateChange((_event, session) => { if (active) setUser(session?.user ?? null); });
      client.auth.getSession().then(({ data }) => { if (active) setUser(data.session?.user ?? null); }).catch(() => { if (active) setMessage('Sign-in is unavailable. Casual play still works.'); });
      return () => { active = false; data.subscription.unsubscribe(); };
    } catch { setMessage('Balance connection is not configured.'); }
    return () => { active = false; };
  }, []);
  useEffect(() => {
    if (!enabled) return;
    let active = true;
    setDaily(null); setBoard([]); setMessage(''); setBusy(true);
    async function load() {
      try {
        const client = getBalanceSupabaseClient();
        const leaderboard = await client.rpc('balance_leaderboard');
        if (leaderboard.error) throw leaderboard.error;
        if (active) setRows(leaderboard.data ?? []);
        if (user) {
          const state = await client.rpc('balance_daily_state');
          if (state.error) throw state.error;
          if (active) applyDaily(state.data, user.id);
        }
      } catch { if (active) setMessage('Saved play is not available yet. Retry after the database setup, or play Daily / Practice.'); }
      finally { if (active) setBusy(false); }
    }
    void load();
    return () => { active = false; };
  }, [user?.id, date, refresh]);
  useEffect(() => {
    if (!daily?.started_at) { setSeconds(0); return; }
    if (daily.finished_at) { setSeconds(daily.elapsed_seconds ?? 0); return; }
    const base = Math.max(0, Date.parse(daily.server_now) - Date.parse(daily.started_at));
    const received = Date.now();
    const tick = () => setSeconds(Math.floor((base + Math.max(0, Date.now() - received)) / 1000));
    tick(); const timer = window.setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [daily]);

  async function start() {
    if (!user || busy) return;
    setBusy(true); setMessage('');
    try {
      const { data, error } = await getBalanceSupabaseClient().rpc('balance_start_daily', { player_alias: alias.trim(), publish_score: publish });
      if (error) throw error;
      applyDaily(data, user.id);
    } catch { setMessage('Could not start. Use a 2–24 character alias with letters, numbers, spaces, hyphens or underscores, then retry.'); }
    finally { setBusy(false); }
  }
  async function finish() {
    if (!daily || !user || busy) return;
    if (board.some(r => r < 0)) { setMessage('Assign every cell before checking.'); return; }
    setBusy(true); setMessage('');
    try {
      const { data, error } = await getBalanceSupabaseClient().rpc('balance_finish_daily', { expected_date: daily.date, assignment: board });
      if (error) throw error;
      applyDaily(data, user.id);
      setMessage('Balanced! Your server-timed result is saved.');
      const leaderboard = await getBalanceSupabaseClient().rpc('balance_leaderboard');
      if (!leaderboard.error) setRows(leaderboard.data ?? []);
    } catch { setMessage('Not saved: check each connected region and its total, then retry. If the UTC day changed, refresh the game.'); }
    finally { setBusy(false); }
  }
  function assign(i: number) {
    if (!daily || !user || !daily.started_at || daily.finished_at || busy) return;
    if (daily.anchors.includes(i)) { setRegion(daily.anchors.indexOf(i)); return; }
    setHistory(h => [...h, [...board]]);
    const next = [...board]; next[i] = next[i] === region ? -1 : region;
    setBoard(next); try { localStorage.setItem(key(daily, user.id), JSON.stringify(next)); } catch { setMessage('Local progress cannot be saved. Your final score can still be submitted.'); }
  }
  async function visibility() {
    if (!daily || busy) return;
    setBusy(true);
    try {
      const { error } = await getBalanceSupabaseClient().rpc('balance_set_visibility', { expected_date: daily.date, publish_score: !daily.visible });
      if (error) throw error;
      setRefresh(v => v + 1);
    } catch { setMessage('Could not change score visibility. Please retry.'); }
    finally { setBusy(false); }
  }
  async function copyResult() {
    if (!daily?.finished_at) return;
    const text = `Balance · ${daily.date} UTC\nSaved daily result: ${formatTime(daily.elapsed_seconds ?? 0)}\nFour regions. One balance.\nhttps://pthfndr.org/balance`;
    setShare(text);
    try { await navigator.clipboard.writeText(text); setMessage('Result copied. Paste it into a LinkedIn post.'); } catch { setMessage('Copy the result below.'); }
  }

  if (!enabled) return <p className="mt-6 text-sm">Saved daily scores and leaderboards are being prepared. Daily and Practice are available now.</p>;
  return <section className="mt-6" aria-label="Saved daily play">
    <h2 className="text-2xl font-semibold">Saved daily challenge</h2>
    <p className="mt-2 text-sm">One saved result per account per UTC day. Timer starts when you press Start and includes time away. The server checks the solution and records the time.</p>
    {!user && <p className="mt-4">Sign in above to start. You can view today’s leaderboard below.</p>}
    {user && daily && !daily.started_at && <div className="mt-5 space-y-4">
      <label className="block text-sm">Leaderboard alias<input value={alias} onChange={e => setAlias(e.target.value)} maxLength={24} autoComplete="off" className="mt-2 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-base" placeholder="Choose a nickname" /></label>
      <label className="flex items-center gap-3 text-sm"><input type="checkbox" checked={publish} onChange={e => setPublish(e.target.checked)} className="h-5 w-5" />Show my alias and time on the public leaderboard</label>
      <button type="button" disabled={busy || !/^[A-Za-z0-9 _-]{2,24}$/.test(alias.trim())} onClick={start} className={`${button} w-full bg-[#24342f] text-white`}>Start saved daily</button>
    </div>}
    {daily?.started_at && !daily.finished_at && <>
      <div className="mt-5 flex justify-between"><strong>Each region: {daily.target}</strong><span className="tabular-nums">{formatTime(seconds)}</span></div>
      <div className="mt-4 grid grid-cols-4 gap-2">{letters.map((l,r) => <button type="button" key={l} aria-pressed={region === r} onClick={() => setRegion(r)} className={`${button} ${region === r ? 'bg-[#24342f] text-white' : fills[r]}`}>{l}</button>)}</div>
      <p className="mt-3 text-sm">Choose A, B, C or D, then tap squares. Each group must connect along edges to its matching ★ square and reach the target. Use every square.</p>
      <div className="mt-3 grid grid-cols-4 gap-2" role="group" aria-label="Saved daily board">{daily.nums.map((n,i) => <button type="button" key={i} onClick={() => assign(i)} disabled={busy} aria-label={`Row ${Math.floor(i/4)+1}, column ${i%4+1}, value ${n}, ${letters[board[i]] ?? 'unassigned'}${daily.anchors.includes(i) ? ', fixed anchor' : ''}`} className={`relative aspect-square rounded-xl border border-slate-300 text-2xl font-semibold focus-visible:outline focus-visible:outline-2 ${board[i]>=0 ? fills[board[i]] : 'bg-white'}`}><span className="absolute left-2 top-1 text-xs">{letters[board[i]]}{daily.anchors.includes(i) ? ' ★' : ''}</span>{n}</button>)}</div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center text-sm">{letters.map((l,r) => <span key={l}>{l}: {daily.nums.reduce((sum,n,i)=>sum+(board[i]===r?n:0),0)}/{daily.target}</span>)}</div>
      <div className="mt-4 flex gap-2"><button type="button" disabled={busy || !history.length} className={`${button} flex-1 bg-white`} onClick={() => { const next=history[history.length-1];setBoard(next);setHistory(h=>h.slice(0,-1));try{localStorage.setItem(key(daily,user!.id),JSON.stringify(next));}catch{} }}>Undo</button><button type="button" onClick={finish} disabled={busy} className={`${button} flex-1 bg-[#24342f] text-white`}>{busy ? 'Checking…' : 'Check and save'}</button></div>
    </>}
    {daily?.finished_at && <div className="mt-5 rounded-xl border border-slate-300 bg-white p-4"><h3 className="text-xl font-semibold">Result saved · {formatTime(daily.elapsed_seconds ?? 0)}</h3><p className="mt-2 text-sm">{daily.visible ? `Listed as ${daily.alias}.` : 'Your score is private.'} Come back after midnight UTC for the next challenge.</p><button type="button" onClick={copyResult} className={`${button} mt-3 w-full`}>Copy LinkedIn share result</button>{share && <textarea value={share} readOnly aria-label="Share result" className="mt-3 min-h-28 w-full rounded-lg border border-slate-300 p-3 text-base" />}</div>}
    {daily?.started_at && <button type="button" disabled={busy} onClick={visibility} className={`${button} mt-3 w-full bg-white`}>{daily.visible ? 'Hide my score from leaderboard' : 'Show my score on leaderboard'}</button>}
    <p role="status" className="mt-4 text-sm">{busy ? 'Connecting…' : message}</p>
    <div className="mt-7 border-t border-slate-300 pt-5"><div className="flex items-center justify-between gap-3"><h3 className="text-xl font-semibold">Today’s global leaderboard</h3><button type="button" disabled={busy} onClick={() => setRefresh(v => v+1)} className={button}>Refresh</button></div><p className="mt-2 text-sm">Top 100 opted-in results. Equal times share a rank.</p>{rows.length ? <table className="mt-4 w-full text-sm"><caption className="sr-only">Daily leaderboard showing rank, alias and completion time</caption><thead><tr><th scope="col" className="py-2 text-left">Rank</th><th scope="col" className="text-left">Player</th><th scope="col" className="text-right">Time</th></tr></thead><tbody>{rows.map((row,i)=><tr key={i} className="border-t border-slate-200"><td className="py-3">{row.rank}</td><td className="break-words">{row.alias}{row.is_you ? ' (you)' : ''}</td><td className="text-right tabular-nums">{formatTime(row.seconds)}</td></tr>)}</tbody></table> : <p className="mt-4 text-sm">No public results yet.</p>}</div>
    <p className="mt-6 text-sm text-slate-600">Casual pilot rankings: the puzzle bank is also available in Practice, so prior familiarity can affect times. These are not tournament-grade anti-cheat scores.</p>
  </section>;
}
