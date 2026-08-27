import { createClient, SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

// Client-safe Supabase client for browser-side code (admin UI, public forms).
// Uses the publishable/anon key, which is SAFE to expose — unlike the service-role
// key in services/supabase.ts, which must only ever be used server-side (server.ts).
// This client respects Row Level Security; it cannot bypass RLS policies.
export function getSupabaseClient(): SupabaseClient {
  if (!browserClient) {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      throw new Error("VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are required");
    }

    browserClient = createClient(url, key);
  }
  return browserClient;
}

// Checks whether the currently signed-in user is a real admin (has a row in admin_users),
// via the is_admin() database function. Returns false if not signed in or not an admin —
// never throws, so callers can treat any non-true result as "not authorized."
export async function checkIsAdmin(): Promise<boolean> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.rpc("is_admin");
    if (error) return false;
    return data === true;
  } catch {
    return false;
  }
}
