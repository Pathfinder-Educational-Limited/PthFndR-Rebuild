-- Guardian consent requests for 13-17 year olds engaging with PthFndR
-- (e.g. via the free assessment, contact form, or opportunity applications).
--
-- Design: we collect the minimum needed to ask a parent/guardian to confirm,
-- and do NOT treat the young person's record as active/contactable until
-- `status = 'confirmed'`. Run this once in the Supabase SQL editor.

create table if not exists guardian_consents (
  id uuid primary key default gen_random_uuid(),
  token uuid not null default gen_random_uuid() unique,

  -- The young person (13-17)
  minor_name text not null,
  minor_email text not null,

  -- The parent/guardian being asked to confirm
  guardian_name text not null,
  guardian_email text not null,

  -- Where this request came from, e.g. 'assessment', 'contact', 'opportunity-application'
  source text not null,

  -- Free-form context to apply once confirmed (e.g. assessment pattern/scores,
  -- which opportunity they applied for, contact message, etc.)
  payload jsonb,

  status text not null default 'pending' check (status in ('pending', 'confirmed', 'expired', 'declined')),

  created_at timestamptz not null default now(),
  confirmed_at timestamptz,
  expires_at timestamptz not null default (now() + interval '14 days')
);

create index if not exists guardian_consents_token_idx on guardian_consents (token);
create index if not exists guardian_consents_status_idx on guardian_consents (status);

-- Row Level Security: only the service role (used server-side) should touch this table directly.
alter table guardian_consents enable row level security;
