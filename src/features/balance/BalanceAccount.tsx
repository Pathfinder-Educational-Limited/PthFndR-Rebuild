import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
import { getBalanceSupabaseClient } from './supabase';

export default function BalanceAccount() {
  const [user, setUser] = useState<User | null>(null);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const enabled = import.meta.env.VITE_BALANCE_LINKEDIN_ENABLED === 'true';

  useEffect(() => {
    if (!enabled) { setBusy(false); return; }
    let active = true;
    let unsubscribe = () => {};
    try {
      const client = getBalanceSupabaseClient();
      const params = new URLSearchParams(window.location.hash.slice(1));
      if (params.has('error')) {
        setError('LinkedIn sign-in was cancelled or could not complete. You can try again or keep playing.');
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      const { data } = client.auth.onAuthStateChange((_event, session) => {
        if (active) { setUser(session?.user ?? null); setBusy(false); }
      });
      unsubscribe = () => data.subscription.unsubscribe();
      client.auth.getSession().then(({ data, error }) => {
        if (!active) return;
        if (error) setError('Could not restore your sign-in. Please try again.');
        else setUser(data.session?.user ?? null);
        setBusy(false);
      }).catch(() => { if (active) { setError('Sign-in is unavailable. You can still play.'); setBusy(false); } });
    } catch { setError('Sign-in is not configured yet. You can still play.'); setBusy(false); }
    return () => { active = false; unsubscribe(); };
  }, [enabled]);

  async function signIn() {
    setBusy(true); setError('');
    try {
      const { error } = await getBalanceSupabaseClient().auth.signInWithOAuth({
        provider: 'linkedin_oidc',
        options: { redirectTo: `${window.location.origin}/balance`, scopes: 'openid profile email' },
      });
      if (error) throw error;
    } catch { setError('Could not start LinkedIn sign-in. Please try again.'); setBusy(false); }
  }
  async function signOut() {
    setBusy(true); setError('');
    try {
      const { error } = await getBalanceSupabaseClient().auth.signOut({ scope: 'local' });
      if (error) throw error;
      setUser(null);
    } catch { setError('Could not sign out. Please try again.'); }
    finally { setBusy(false); }
  }
  const name = typeof user?.user_metadata?.name === 'string' ? user.user_metadata.name : typeof user?.user_metadata?.full_name === 'string' ? user.user_metadata.full_name : 'Player';
  return <section aria-label="Balance account" className="mt-5 rounded-xl border border-slate-300 bg-white p-4 text-sm">
    {user ? <div className="flex flex-wrap items-center justify-between gap-3"><p>Signed in as <strong>{name}</strong></p><button type="button" onClick={signOut} disabled={busy} className="min-h-11 rounded-lg border border-slate-300 px-4 focus-visible:outline focus-visible:outline-2 disabled:opacity-50">Sign out</button></div> : <><button type="button" onClick={signIn} disabled={!enabled || busy} className="min-h-11 w-full rounded-lg bg-[#0a66c2] px-4 py-2 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50">{!enabled ? 'LinkedIn sign-in coming soon' : busy ? 'Connecting…' : 'Continue with LinkedIn'}</button><p className="mt-2">Optional sign-in creates or uses your Balance account. You can keep playing without it.</p></>}
    <p className="mt-2 text-slate-600">Scores still stay in this browser. Signing in does not yet sync progress or publish results.</p>
    <Link className="mt-2 inline-block underline underline-offset-4" to="/balance/privacy">How account information is used</Link>
    {error && <p className="mt-3" role="alert">{error}</p>}
  </section>;
}
