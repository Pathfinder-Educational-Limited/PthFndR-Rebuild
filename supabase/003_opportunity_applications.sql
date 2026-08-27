-- Opportunity applications from young people
-- Data is collected when a young person applies for a micro-opportunity,
-- and is managed by admin staff through the private /admin/applications dashboard.
-- Run this once in the Supabase SQL editor.

create table if not exists opportunity_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- The opportunity being applied for
  opportunity_id text not null,

  -- Applicant contact details
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,

  -- Applicant context
  age smallint,
  postcode text,

  -- Application content
  why_applying text not null,
  what_you_bring text,
  availability text,

  -- Admin tracking
  status text not null default 'pending' check (status in ('pending', 'reviewing', 'accepted', 'declined')),
  admin_notes text
);

create index if not exists opportunity_applications_opportunity_id_idx on opportunity_applications (opportunity_id);
create index if not exists opportunity_applications_status_idx on opportunity_applications (status);
create index if not exists opportunity_applications_email_idx on opportunity_applications (email);

-- Row Level Security: open insert (anyone can apply), but select/update restricted to authenticated admins
alter table opportunity_applications enable row level security;

-- Anyone can insert (apply without auth)
create policy "Anyone can apply"
  on opportunity_applications for insert
  with check (true);

-- Only authenticated users (admins) can read
create policy "Admins can read applications"
  on opportunity_applications for select
  using (auth.role() = 'authenticated');

-- Only authenticated users (admins) can update
create policy "Admins can update applications"
  on opportunity_applications for update
  using (auth.role() = 'authenticated');
