-- ============================================================================
-- skill_evidence_record — Skills Passport Step 3: Evidence Capture (Aug 31 2026)
--
-- Records that a specific young person demonstrated a specific skill, at what
-- proficiency level, with what evidence. Supports retroactive admin entry for
-- real young people who completed work experience before this system existed
-- (opportunity_id is nullable for exactly this reason — their original
-- completions predate any formal opportunities table row).
--
-- Deliberately: young people can VIEW their own evidence (their passport) but
-- can never write to it directly. All evidence is entered by an admin (or,
-- later, through a verified completion flow) — never self-reported by the
-- young person — so the passport stays trustworthy.
-- ============================================================================

create table if not exists skill_evidence_record (
  id uuid primary key default gen_random_uuid(),
  young_person_id uuid not null references young_people(id) on delete cascade,
  skill_id text not null references skills(skill_id),
  opportunity_id uuid references opportunities(id) on delete set null,
  proficiency_level text not null check (proficiency_level in ('Explore', 'Practise', 'Demonstrate', 'Apply')),
  evidence_description text not null,
  evidence_source text not null default 'admin_entry' check (evidence_source in ('admin_entry', 'self_reported', 'opportunity_completion')),
  entered_by uuid references admin_users(user_id),
  occurred_at date,
  created_at timestamptz not null default now()
);

create index if not exists skill_evidence_record_young_person_idx on skill_evidence_record (young_person_id);
create index if not exists skill_evidence_record_skill_idx on skill_evidence_record (skill_id);

alter table skill_evidence_record enable row level security;

create policy "Young people can view own evidence"
  on skill_evidence_record for select
  using (auth.uid() = young_person_id);

create policy "Admins can manage all evidence"
  on skill_evidence_record for all
  using (is_admin());
