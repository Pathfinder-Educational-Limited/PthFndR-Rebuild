# Skills Passport — Step 2: Opportunity Skill Tagging
Following PthFndR_Skills_Taxonomy_v1.0.pdf's recommended schema (Section 7: Opportunity →
Skills Model). This links real opportunities to real canonical skills, with metadata about
how each skill is expected to be used and evidenced — not just a flat list.

`mapping_source` is included now (manual / AI_suggested / PthFndR_reviewed) even though the
AI parser (Step 5) isn't built yet, per the document's explicit requirement: "Design the data
model so AI parsing can be added without changing canonical skill IDs or existing evidence."
Every row created through this step will have `mapping_source = 'manual'`.

---

## Run this in the Supabase SQL editor

```sql
create table if not exists opportunity_skill (
  opportunity_id uuid not null references opportunities(id) on delete cascade,
  skill_id text not null references skills(skill_id),
  is_primary_skill boolean not null default false,
  expected_activity text,
  evidence_requirement text,
  target_level text check (target_level in ('Explore', 'Practise', 'Demonstrate', 'Apply')),
  maximum_level_achievable text check (maximum_level_achievable in ('Explore', 'Practise', 'Demonstrate', 'Apply')),
  mapping_source text not null default 'manual' check (mapping_source in ('manual', 'AI_suggested', 'PthFndR_reviewed')),
  organisation_confirmed boolean not null default true,
  confidence_score numeric,
  created_at timestamptz not null default now(),
  primary key (opportunity_id, skill_id)
);

alter table opportunity_skill enable row level security;

-- Organisations can tag skills on their own opportunities.
create policy "Organisations can manage skills on own opportunities"
  on opportunity_skill for all
  using (
    exists (
      select 1 from opportunities
      where opportunities.id = opportunity_skill.opportunity_id
      and opportunities.organisation_id = auth.uid()
    )
  );

-- The public can see which skills are tagged on approved opportunities (needed for the
-- public opportunity detail page to show real skill data instead of free text).
create policy "Anyone can view skills for approved opportunities"
  on opportunity_skill for select
  using (
    exists (
      select 1 from opportunities
      where opportunities.id = opportunity_skill.opportunity_id
      and opportunities.status = 'approved'
    )
  );

-- Admins can see and manage everything.
create policy "Admins can manage all opportunity skills"
  on opportunity_skill for all
  using (is_admin());
```

## Verify

```sql
select table_name, column_name, data_type from information_schema.columns where table_name = 'opportunity_skill' order by ordinal_position;
```

```sql
select policyname from pg_policies where tablename = 'opportunity_skill';
```

---

## What this does NOT do yet, deliberately

- **Does not touch `PostOpportunity.tsx`'s existing free-text `skills_developed` field.** That
  field stays as-is for now (still used by the current UI and by `OpportunityDetail.tsx`'s
  display). This step only adds the real, canonical tagging table alongside it — migrating the
  actual posting form to select from the 25 real skills (instead of free text) is a real,
  separate UI change, worth its own careful pass rather than bundling into this schema step.
- **No AI mapping.** `mapping_source` will only ever be `'manual'` from anything built right
  now — the AI parser is explicitly Step 5 in the document's sequence, deliberately deferred.

Confirm this lands correctly, then we can decide: move to Step 3 (evidence capture — the
`skill_evidence_record` table), or pause here to actually rebuild `PostOpportunity.tsx`'s
skills field to use this real taxonomy before going further.
