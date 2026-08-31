# Skills Passport — Step 1: Taxonomy v1.0 Table + Seed
Following the exact recommended build sequence and MVP requirements from
PthFndR_Skills_Taxonomy_v1.0.pdf. This step is fully self-contained — it doesn't depend on
young-person accounts or the guardian-consent work, so it's safe to build now regardless of
how the account-related phases get sequenced later.

Per the source document's design principles: canonical skill IDs are fixed and versioned,
aliases/activity_triggers support future AI mapping, and this table must never have
AI-generated free-text skills inserted into it — only the 25 controlled skills below, with
new versions added deliberately, not automatically.

---

## Run this in the Supabase SQL editor

```sql
-- Canonical skills taxonomy (PthFndR Skills Taxonomy v1.0). Do not insert free-text or
-- AI-generated skills into this table — only controlled, versioned entries.

create table if not exists skills (
  skill_id text primary key,
  name text not null,
  pathway text not null,
  definition text not null,
  aliases jsonb not null default '[]'::jsonb,
  activity_triggers jsonb not null default '[]'::jsonb,
  evidence_types jsonb not null default '[]'::jsonb,
  external_mappings jsonb not null default '{}'::jsonb,
  taxonomy_version text not null default '1.0',
  created_at timestamptz not null default now()
);

alter table skills enable row level security;

create policy "Anyone can view skills"
  on skills for select
  using (true);

create policy "Admins can manage skills"
  on skills for all
  using (is_admin());


insert into skills (skill_id, name, pathway, definition, aliases, activity_triggers, evidence_types) values

('PD01', 'User Research', 'Product Design', 'Investigate people, their needs, behaviours and experiences to inform decisions.',
  '["interview users","survey users","user needs","personas","gather feedback"]',
  '[]', '["Interview notes","survey","research summary","personas"]'),

('PD02', 'UX Evaluation', 'Product Design', 'Evaluate how easy, useful and intuitive a digital product or service is to use.',
  '["UX review","website review","usability review","user experience review","usability testing","experience audit"]',
  '["review our website","tell us what is confusing","test how easy the website is","identify usability issues"]',
  '["UX audit","annotated screenshots","usability findings","presentation"]'),

('PD03', 'UI Evaluation', 'Product Design', 'Assess the clarity, consistency and effectiveness of a digital interface.',
  '["design review","layout review","buttons","colours","typography","navigation","interface critique"]',
  '[]', '["UI audit","annotated designs","recommendations"]'),

('PD04', 'User Journey Analysis', 'Product Design', 'Analyse the steps someone takes to achieve a goal and identify barriers or friction.',
  '["customer journey","application process","checkout flow","sign-up journey","navigation flow"]',
  '[]', '["Journey map","pain-point analysis","flow diagram"]'),

('PD05', 'Accessibility & Inclusive Design', 'Product Design', 'Evaluate or design digital experiences so people with different needs can use them.',
  '["accessibility review","inclusive design","contrast","screen reader","readability"]',
  '[]', '["Accessibility audit","recommendations","design changes"]'),

('PD06', 'Ideation & Prototyping', 'Product Design', 'Generate, develop and communicate possible solutions to a problem.',
  '["brainstorm","sketch","mock-up","wireframe","prototype","redesign"]',
  '["redesign the page"]', '["Sketch","wireframe","prototype","concept presentation"]'),

('PD07', 'Product Prioritisation', 'Product Design', 'Compare needs and potential improvements and decide what should be addressed first.',
  '["rank issues","prioritise features","backlog","impact vs effort"]',
  '[]', '["Prioritised recommendations","backlog","impact matrix"]'),

('SD01', 'Requirements Analysis', 'Software Development', 'Turn a problem, user need or brief into clear requirements for a digital solution.',
  '["brief","user story","acceptance criteria","functional requirement","specification"]',
  '[]', '["Requirements document","user stories","acceptance criteria"]'),

('SD02', 'Software Testing & QA', 'Software Development', 'Systematically test digital products to identify faults and confirm expected behaviour.',
  '["test website","broken links","test form","QA","test scenarios","bug testing"]',
  '["test whether all buttons work"]', '["Test cases","bug report","testing log"]'),

('SD03', 'Debugging & Technical Problem Solving', 'Software Development', 'Investigate technical problems, identify causes and develop appropriate solutions.',
  '["troubleshoot","fix bug","diagnose issue","debug","resolve error"]',
  '[]', '["Bug fix","diagnostic notes","before/after demonstration"]'),

('SD04', 'Interface Implementation', 'Software Development', 'Build or modify the user-facing parts of digital products.',
  '["HTML","CSS","React","front-end","webpage build","responsive design"]',
  '["build the redesign"]', '["Working webpage","code","deployed feature"]'),

('SD05', 'Version Control & Collaborative Development', 'Software Development', 'Manage changes to digital work and collaborate safely with others.',
  '["Git","GitHub","branches","pull request","commits","merge"]',
  '[]', '["Repository history","pull request","commits"]'),

('SD06', 'Technical Documentation', 'Software Development', 'Explain technical work clearly so others can understand, use or maintain it.',
  '["README","document code","technical notes","implementation notes","handover"]',
  '[]', '["README","documentation","technical handover"]'),

('DM01', 'Audience Research', 'Digital Marketing', 'Research and understand the people a communication, product or campaign needs to reach.',
  '["target audience","customer research","demographics","audience insight","market research"]',
  '[]', '["Audience profile","research findings","survey"]'),

('DM02', 'Content Evaluation', 'Digital Marketing', 'Assess whether content is clear, relevant, accurate and effective for its intended audience.',
  '["content audit","website copy review","messaging review","proofreading","critique content"]',
  '[]', '["Content audit","annotated webpage","recommendations"]'),

('DM03', 'Copywriting', 'Digital Marketing', 'Write clear and persuasive content designed to achieve a communication objective.',
  '["website copy","CTA","caption","headline","blog copy","email copy"]',
  '["rewrite our homepage"]', '["Rewritten webpage","campaign copy","captions"]'),

('DM04', 'Content Creation', 'Digital Marketing', 'Develop appropriate digital content using text, imagery, video, audio or other formats.',
  '["video","photography","social posts","graphics","reels","blog","campaign assets"]',
  '["make TikToks"]', '["Video","graphics","photography","social post"]'),

('DM05', 'Campaign & Channel Planning', 'Digital Marketing', 'Plan how content and messages will reach an audience through appropriate channels.',
  '["social campaign","channel strategy","content calendar","marketing plan"]',
  '[]', '["Campaign plan","content calendar","channel recommendation"]'),

('DM06', 'Digital Analytics & Performance', 'Digital Marketing', 'Use data to assess digital activity and recommend improvements.',
  '["engagement","analytics","conversion","traffic","insights","metrics"]',
  '["look at our Instagram insights"]', '["Analytics report","dashboard","recommendations"]'),

('CE01', 'Research & Information Literacy', 'Core Employability', 'Find, evaluate, organise and use information from appropriate sources.',
  '["desk research","online research","find examples","investigate","compare sources"]',
  '["look at our competitors"]', '["Research notes","sources","research summary"]'),

('CE02', 'Critical Thinking', 'Core Employability', 'Evaluate information, assumptions and alternatives to reach reasoned conclusions.',
  '["critique","analyse","evaluate","challenge","justify","compare"]',
  '["tell us why users leave"]', '["Analysis","rationale","recommendations"]'),

('CE03', 'Problem Solving', 'Core Employability', 'Identify a problem, investigate its causes and develop workable solutions.',
  '["identify issues","find solution","resolve problem","recommend improvements"]',
  '[]', '["Problem statement","options","proposed solution"]'),

('CE04', 'Collaboration', 'Core Employability', 'Work productively with others towards a shared outcome.',
  '["teamwork","group work","pair work","divide tasks","collaborate"]',
  '["work in groups of three"]', '["Team artefact","peer feedback","facilitator observation"]'),

('CE05', 'Giving & Receiving Feedback', 'Core Employability', 'Give constructive feedback and use feedback to improve work.',
  '["peer review","critique work","respond to feedback","design critique"]',
  '["review each other''s ideas"]', '["Peer-review notes","revisions","reflective record"]'),

('CE06', 'Presentation & Stakeholder Communication', 'Core Employability', 'Communicate ideas, evidence and recommendations appropriately to other people.',
  '["pitch","present findings","client meeting","explain recommendations","answer questions"]',
  '["present recommendations"]', '["Presentation","recording","stakeholder feedback"]')

on conflict (skill_id) do nothing;
```

## Verify

```sql
select pathway, count(*) from skills group by pathway order by pathway;
```
Should show exactly: Core Employability 6, Digital Marketing 6, Product Design 7, Software
Development 6 — 25 total.

```sql
select skill_id, name from skills order by skill_id;
```
Spot-check a few against the source document to confirm no typos crept in during transcription.

---

## Not yet built, per the recommended sequence (this step only covers Step 1 of 7)

- `opportunity_skill` (Step 2 — tagging opportunities with skills)
- `skill_evidence_record` (Step 3 — evidence capture)
- The Skills Passport UI itself (Step 4)
- AI opportunity-to-skill parser (Step 5 — explicitly deferred; per the document's own
  governance rules, AI must map to existing skill IDs only, never create new ones)
- Participant-to-opportunity matching (Step 6)
- Taxonomy analytics / v1.1 updates (Step 7)

Confirm this step lands correctly before moving to Step 2.
