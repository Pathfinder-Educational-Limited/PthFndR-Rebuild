import BalanceHowTo from '../features/balance/BalanceHowTo';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BalanceAccount from '../features/balance/BalanceAccount';
import RankedDaily from '../features/balance/RankedDaily';
import { puzzles } from '../features/balance/puzzles';
import { dayKey, formatTime, validateBoard, dailyPuzzleIndex } from '../features/balance/logic';

type Run = { assignment: number[]; started: number | null; seconds: number; done: boolean; revealed: boolean };
const letters = ['A', 'B', 'C', 'D'];
const tones = ['bg-[#d7e8dd]', 'bg-[#e9dfce]', 'bg-[#dddfee]', 'bg-[#efdad5]'];
const control = 'min-h-11 rounded-xl border border-slate-300 px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:opacity-40';

export default function Balance() {
  const [mode, setMode] = useState<'daily' | 'ranked' | 'practice'>('daily');
  const [level, setLevel] = useState(0);
  const [date, setDate] = useState(dayKey());
  const index = mode === 'daily' ? dailyPuzzleIndex(date, puzzles.length) : level;
  const puzzle = puzzles[index];
  const key = `balance:v1:${mode === 'daily' ? date : `practice-${level}`}`;
  const blank = (): Run => ({ assignment: Array.from({ length: 16 }, (_, i) => puzzle.anchors.includes(i) ? puzzle.anchors.indexOf(i) : -1), started: null, seconds: 0, done: false, revealed: false });
  const [run, setRun] = useState<Run>(blank);
  const [selected, setSelected] = useState(0);
  const [history, setHistory] = useState<number[][]>([]);
  const [message, setMessage] = useState('Select a region, then tap cells.');
  const [ready, setReady] = useState(false);
  const [loadedKey, setLoadedKey] = useState('');
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [shareText, setShareText] = useState('');

  useEffect(() => {
    setReady(false);
    let next = blank();
    if (mode === 'daily') {
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const saved = JSON.parse(raw);
          if (Array.isArray(saved.assignment) && saved.assignment.length === 16 && saved.assignment.every((r: unknown) => Number.isInteger(r) && Number(r) >= -1 && Number(r) <= 3) && puzzle.anchors.every((i, r) => saved.assignment[i] === r) && (saved.started === null || (Number.isFinite(saved.started) && saved.started > 0)) && Number.isFinite(saved.seconds) && saved.seconds >= 0 && typeof saved.done === 'boolean' && (!saved.done || validateBoard(puzzle.nums, puzzle.anchors, puzzle.target, saved.assignment))) next = { ...saved, revealed: false };
        }
      } catch { setStorageAvailable(false); }
    }
    setLoadedKey(key); setRun(next); setSelected(0); setHistory([]); setShareText(''); setMessage('Select a region, then tap cells.'); setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready || loadedKey !== key || mode !== 'daily') return;
    try { localStorage.setItem(key, JSON.stringify(run)); } catch { setStorageAvailable(false); }
  }, [run, key, ready, mode, loadedKey]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const today = dayKey();
      if (today !== date) { setReady(false); setDate(today); return; }
      if (run.started && !run.done) setRun(current => ({ ...current, seconds: Math.max(0, Math.floor((Date.now() - current.started!) / 1000)) }));
    }, 1000);
    return () => clearInterval(timer);
  }, [run.started, run.done, date]);

  function assign(i: number) {
    if (!ready || run.done) return;
    if (puzzle.anchors.includes(i)) { setSelected(puzzle.anchors.indexOf(i)); return; }
    setHistory(h => [...h, [...run.assignment]]);
    const assignment = [...run.assignment]; assignment[i] = assignment[i] === selected ? -1 : selected;
    setRun(r => ({ ...r, assignment, started: r.started ?? Date.now() })); setMessage('');
  }
  function check() {
    if (validateBoard(puzzle.nums, puzzle.anchors, puzzle.target, run.assignment)) {
      setRun(r => ({ ...r, done: true, seconds: r.started ? Math.max(0, Math.floor((Date.now() - r.started) / 1000)) : 0 }));
      setMessage(run.revealed ? 'Solution explored. Try another practice board.' : 'Balanced. Nicely done!');
    } else setMessage('Not balanced yet. Every region needs connected cells totalling ' + puzzle.target + '.');
  }
  async function share() {
    const text = `Balance · ${mode === 'daily' ? date + ' UTC' : 'Practice'}\n${run.revealed ? 'Solution explored' : 'Solved in ' + formatTime(run.seconds)}\nFour regions. One balance.\nhttps://pthfndr.org/balance`;
    setShareText(text);
    try { await navigator.clipboard.writeText(text); setMessage('Result copied. Paste it into your LinkedIn post.'); } catch { setMessage('Copy the result below to share.'); }
  }

  return <>
    <SEO title="Balance | Daily logic puzzle" description="Four connected regions. One equal total. Play Balance by Pathfinder Educational Limited." url="https://pthfndr.org/balance" image="https://pthfndr.org/logos/balance-logo.png" />
    <div className="bg-[#fcfaf6] px-4 py-12 text-[#24342f]">
      <div className="mx-auto max-w-md">
        <header className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><img src="/logos/balance-logo.png" alt="" width="40" height="40" className="rounded-xl" /><h1 className="text-3xl font-semibold tracking-tight">balance</h1></div><span className="text-sm">Pilot edition</span></header>
        <BalanceAccount />
        <div className="mt-6 flex gap-2" aria-label="Game mode">{(['daily', 'ranked', 'practice'] as const).map(m => <button key={m} type="button" aria-pressed={mode === m} onClick={() => { if (mode !== m) { setReady(false); setMode(m); } }} className={`${control} flex-1 ${mode === m ? 'bg-[#24342f] text-white' : 'bg-white'}`}>{m === 'daily' ? 'Daily' : m === 'ranked' ? 'Saved daily' : 'Practice'}</button>)}</div>
        <BalanceHowTo />
        {mode === 'ranked' ? <RankedDaily /> : <>
        {mode === 'practice' ? <label className="mt-4 flex items-center justify-between gap-3 text-sm">Board<select value={level} onChange={e => { setReady(false); setLevel(Number(e.target.value)); }} className={`${control} bg-white`}>{puzzles.map((p, i) => <option key={p.id} value={i}>Board {i+1} · {p.difficulty} (provisional)</option>)}</select></label> : <p className="mt-4 text-sm">{date} · Resets at midnight UTC</p>}
        <h2 className="mt-7 text-2xl font-semibold">Find your balance.</h2>
        <p className="mt-2 leading-relaxed">Make four connected regions, each totalling <strong>{puzzle.target}</strong>. Each group includes its matching ★ square. Join squares along edges, not diagonals, and use every square.</p>
        <div className="mt-5 flex items-center justify-between text-sm"><span>Target: {puzzle.target}</span><span className="tabular-nums" aria-label="Elapsed time">{formatTime(run.seconds)}</span></div>
        <div className="mt-4 grid grid-cols-4 gap-2" aria-label="Select region">{letters.map((l, r) => <button type="button" key={l} aria-pressed={selected === r} onClick={() => setSelected(r)} className={`${control} font-semibold ${selected === r ? 'bg-[#24342f] text-white' : tones[r]}`}>{l}</button>)}</div>
        <div className="mt-4 grid grid-cols-4 gap-2" role="group" aria-label="Puzzle board">{puzzle.nums.map((n, i) => <button type="button" key={i} disabled={!ready || run.done} onClick={() => assign(i)} aria-label={`Row ${Math.floor(i / 4) + 1}, column ${i % 4 + 1}, value ${n}, ${letters[run.assignment[i]] ?? 'unassigned'}${puzzle.anchors.includes(i) ? ', fixed anchor' : ''}`} className={`relative aspect-square rounded-xl border border-slate-300 text-2xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${run.assignment[i] >= 0 ? tones[run.assignment[i]] : 'bg-white'}`}><span className="absolute left-2 top-1 text-xs">{letters[run.assignment[i]]}{puzzle.anchors.includes(i) ? ' ★' : ''}</span>{n}</button>)}</div>
        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-sm" aria-label="Region totals">{letters.map((l, r) => <span key={l}>{l}: {puzzle.nums.reduce((s, n, i) => s + (run.assignment[i] === r ? n : 0), 0)}/{puzzle.target}</span>)}</div>
        <div className="mt-6 flex gap-2"><button type="button" className={`${control} flex-1 bg-white`} disabled={!history.length || run.done} onClick={() => { const previous = history[history.length - 1]; setRun(r => ({ ...r, assignment: previous })); setHistory(h => h.slice(0, -1)); setMessage('Move undone.'); }}>Undo</button><button type="button" className={`${control} flex-1 bg-[#24342f] text-white`} disabled={!ready || run.done} onClick={check}>Check balance</button></div>
        <p className="mt-4 min-h-12 text-sm" role="status">{message}</p>
        {run.done && <div className="rounded-2xl border border-slate-300 bg-white p-5"><h2 className="text-xl font-semibold">{run.revealed ? 'Solution explored' : 'Balance found'}</h2><p className="mt-2">{!run.revealed && `Your time: ${formatTime(run.seconds)}. `}For a server-timed score and leaderboard, use Saved daily.</p><button className={`${control} mt-4 w-full bg-[#24342f] text-white`} type="button" onClick={share}>Copy share result</button>{shareText && <textarea aria-label="Share result" readOnly value={shareText} className="mt-3 min-h-28 w-full rounded-lg border border-slate-300 p-3 text-base" />}</div>}
        {mode === 'practice' && <div className="mt-4 flex flex-wrap gap-2"><button type="button" className={control} onClick={() => { setRun(blank()); setHistory([]); setShareText(''); setMessage('Practice restarted.'); }}>Restart</button><button type="button" className={control} disabled={run.done} onClick={() => { setRun(r => ({ ...r, assignment: [...puzzle.solution], revealed: true, done: true })); setMessage('Solution revealed. Restart to try again.'); }}>Reveal solution</button></div>}
        <p className="mt-6 text-sm text-slate-600">Pilot: 30 verified puzzles rotate daily. Daily progress stays in this browser; it is not an account-enforced competitive score. The timer includes time away after your first move.</p>
        {!storageAvailable && <p role="alert" className="mt-3 text-sm">Browser storage is unavailable. Progress cannot be saved.</p>}
        </>}
        <footer className="mt-8 border-t border-slate-300 pt-4 text-sm"><Link className="underline underline-offset-4" to="/balance/privacy">Balance privacy</Link><p className="mt-2">By Pathfinder Educational Limited</p></footer>
      </div>
    </div>
  </>;
}
