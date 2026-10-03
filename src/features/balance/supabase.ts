import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let balanceClient: SupabaseClient | null = null;

// Dedicated Balance project and session: never reuse PthFndR communications credentials.
// Only the browser-safe publishable key belongs here; secrets remain in Supabase.
export function getBalanceSupabaseClient(): SupabaseClient {
  if (!balanceClient) {
    const url = import.meta.env.VITE_BALANCE_SUPABASE_URL;
    const key = import.meta.env.VITE_BALANCE_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error('Balance authentication is not configured');
    balanceClient = createClient(url, key, {
      auth: { storageKey: 'balance-auth-session', persistSession: true, detectSessionInUrl: true },
    });
  }
  return balanceClient;
}
