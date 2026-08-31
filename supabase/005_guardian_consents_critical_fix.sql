-- ============================================================================
-- guardian_consents table — CRITICAL FIX (Aug 31 2026)
--
-- BACKGROUND: server.ts and src/services/supabase.ts (createGuardianConsentRequest,
-- getGuardianConsentByToken, confirmGuardianConsent) have referenced this table since
-- the Assessment.tsx flow redesign. The table was never actually created in Supabase.
-- Every guardian consent request submitted through the Assessment (16-17 year old
-- pathway) since that redesign would have thrown a database error, caught silently
-- by the route's try/catch, meaning the guardian likely never received a working
-- confirmation link and no pending consent record was ever created — while the
-- young person's own UI appeared to work normally.
--
-- Discovered and fixed Aug 31 2026, verified end-to-end with a real test: a real
-- guardian consent request was submitted, a real confirmation email was received
-- and clicked, and a real row landed in this table with status 'confirmed'.
--
-- This table is written to and read exclusively by the server (service-role key,
-- via server.ts). It is never accessed directly from the browser, so no public RLS
-- policies are needed — same reasoning already used for the `contacts` table.
-- ============================================================================

create table if not exists guardian_consents (
  id uuid primary key default gen_random_uuid(),
  minor_name text not null,
  minor_email text not null,
  guardian_name text not null,
  guardian_email text not null,
  source text not null,
  payload jsonb,
  token uuid not null default gen_random_uuid() unique,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'expired')),
  expires_at timestamptz not null default (now() + interval '14 days'),
  confirmed_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists guardian_consents_token_idx on guardian_consents (token);

alter table guardian_consents enable row level security;

-- No public policies — server-only access via the service-role key, matching the
-- same pattern already used for the `contacts` table.
