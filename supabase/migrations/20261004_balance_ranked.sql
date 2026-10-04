-- Run in the dedicated Balance project SQL Editor, not PthFndR communications.
begin;
create schema if not exists balance_private;
revoke all on schema balance_private from public, anon, authenticated;
create table if not exists balance_private.puzzles (
  slot integer primary key check (slot between 0 and 29),
  puzzle_id text not null unique,
  nums integer[] not null check (cardinality(nums)=16),
  anchors integer[] not null check (cardinality(anchors)=4),
  target integer not null check (target>0),
  solution integer[] not null check (cardinality(solution)=16)
);
create table if not exists balance_private.attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  play_date date not null,
  puzzle_id text not null references balance_private.puzzles(puzzle_id),
  started_at timestamptz not null default clock_timestamp(),
  finished_at timestamptz,
  elapsed_seconds integer check (elapsed_seconds>=0),
  alias text not null check (alias ~ '^[A-Za-z0-9 _-]{2,24}$'),
  visible boolean not null default false,
  primary key(user_id,play_date)
);
alter table balance_private.puzzles enable row level security;
alter table balance_private.attempts enable row level security;
revoke all on all tables in schema balance_private from public, anon, authenticated;

insert into balance_private.puzzles(slot,puzzle_id,nums,anchors,target,solution) values
(0, 'balance-001', ARRAY[5,5,3,9,2,4,1,1,6,7,2,5,1,2,9,2], ARRAY[0,3,12,15], 16, ARRAY[0,0,1,1,0,0,1,1,2,2,1,3,2,2,3,3]),
(1, 'balance-002', ARRAY[2,16,7,1,1,4,3,2,6,4,5,9,3,8,11,6], ARRAY[0,3,12,15], 22, ARRAY[0,0,1,1,2,0,1,1,2,2,3,1,2,2,3,3]),
(2, 'balance-003', ARRAY[2,7,1,7,1,1,2,1,1,2,1,4,1,2,1,6], ARRAY[0,3,12,15], 10, ARRAY[0,0,0,1,2,2,1,1,2,2,2,3,2,2,2,3]),
(3, 'balance-004', ARRAY[5,3,6,5,2,9,2,3,4,7,6,1,1,4,3,3], ARRAY[2,5,7,9], 16, ARRAY[1,0,0,0,1,1,0,2,3,3,2,2,3,3,2,2]),
(4, 'balance-005', ARRAY[3,1,1,2,2,2,1,1,8,1,1,2,2,1,7,5], ARRAY[5,10,11,14], 10, ARRAY[0,0,0,2,0,0,0,2,1,1,1,2,3,3,3,2]),
(5, 'balance-006', ARRAY[2,6,1,3,2,4,1,4,8,3,1,4,1,2,1,5], ARRAY[5,8,10,12], 12, ARRAY[1,0,0,2,1,0,0,2,1,3,2,2,3,3,3,3]),
(6, 'balance-007', ARRAY[5,7,3,2,2,2,1,3,4,9,6,7,1,7,4,1], ARRAY[3,4,8,10], 16, ARRAY[1,1,0,0,1,1,3,0,2,3,3,0,2,2,2,0]),
(7, 'balance-008', ARRAY[4,6,3,10,6,1,6,5,6,6,8,5,4,2,6,2], ARRAY[0,3,6,7], 20, ARRAY[0,1,1,1,0,1,2,3,0,2,2,3,0,3,3,3]),
(8, 'balance-009', ARRAY[3,4,3,1,1,3,2,1,2,2,6,1,1,3,6,1], ARRAY[1,4,11,15], 10, ARRAY[1,0,0,0,1,1,0,2,1,2,2,2,1,3,3,3]),
(9, 'balance-010', ARRAY[3,3,3,2,6,1,6,4,1,7,1,4,6,12,11,2], ARRAY[3,4,11,13], 18, ARRAY[1,0,0,0,1,1,0,0,1,1,2,2,3,3,2,2]),
(10, 'balance-011', ARRAY[6,4,4,1,1,1,1,4,3,1,4,1,1,2,2,4], ARRAY[1,5,6,13], 10, ARRAY[0,0,2,2,1,1,2,2,1,1,1,3,3,3,3,3]),
(11, 'balance-012', ARRAY[2,5,3,2,7,3,6,4,1,3,10,2,7,1,1,7], ARRAY[2,5,9,13], 16, ARRAY[0,0,0,0,1,1,1,0,2,2,2,2,3,3,3,3]),
(12, 'balance-013', ARRAY[2,10,1,2,2,4,1,4,4,3,4,1,2,1,4,3], ARRAY[1,4,5,10], 12, ARRAY[0,0,2,2,1,2,2,2,1,1,3,3,1,1,3,3]),
(13, 'balance-014', ARRAY[1,2,3,12,6,2,1,1,3,1,3,4,3,6,1,7], ARRAY[1,3,9,11], 14, ARRAY[0,0,0,1,0,0,1,1,2,2,3,3,2,2,2,3]),
(14, 'balance-015', ARRAY[2,1,5,1,1,3,2,3,5,3,2,4,5,9,4,6], ARRAY[5,7,9,13], 14, ARRAY[0,0,0,1,0,0,0,1,2,2,2,1,3,3,2,1]),
(15, 'balance-016', ARRAY[5,1,1,2,11,1,6,4,4,4,1,8,5,4,3,4], ARRAY[0,1,11,15], 16, ARRAY[0,1,2,2,0,1,1,2,1,1,2,2,3,3,3,3]),
(16, 'balance-017', ARRAY[6,5,6,12,1,5,1,4,1,3,1,9,2,3,4,1], ARRAY[3,5,9,10], 16, ARRAY[2,1,1,0,2,1,3,0,2,2,3,3,2,2,3,3]),
(17, 'balance-018', ARRAY[3,2,3,1,3,2,4,4,7,11,3,10,3,2,5,1], ARRAY[7,8,9,11], 16, ARRAY[1,0,0,0,1,0,0,0,1,2,2,3,1,2,3,3]),
(18, 'balance-019', ARRAY[9,3,1,1,1,5,1,7,1,5,1,1,2,2,3,5], ARRAY[0,8,11,15], 12, ARRAY[0,0,2,2,1,1,2,2,1,1,2,2,3,3,3,3]),
(19, 'balance-020', ARRAY[3,4,1,2,1,1,11,1,4,3,2,3,12,2,9,5], ARRAY[6,12,13,15], 16, ARRAY[0,3,3,3,0,0,0,3,1,2,2,3,1,2,2,3]),
(20, 'balance-021', ARRAY[3,6,4,1,8,4,3,6,5,10,9,2,10,8,4,5], ARRAY[0,8,10,12], 22, ARRAY[0,0,0,0,0,1,1,2,1,1,2,2,3,3,3,2]),
(21, 'balance-022', ARRAY[4,7,6,3,1,2,11,4,1,7,8,3,4,1,1,9], ARRAY[3,7,12,14], 18, ARRAY[2,0,0,0,2,0,1,1,2,2,3,1,2,2,3,3]),
(22, 'balance-023', ARRAY[5,3,1,4,3,5,4,3,1,7,8,1,3,1,5,10], ARRAY[1,6,8,14], 16, ARRAY[0,0,0,0,0,2,1,1,2,2,1,1,2,3,3,3]),
(23, 'balance-024', ARRAY[1,1,5,3,5,2,2,4,1,2,3,3,1,3,2,2], ARRAY[0,4,6,10], 10, ARRAY[0,0,0,0,1,2,2,2,1,2,3,3,1,1,3,3]),
(24, 'balance-025', ARRAY[8,4,8,2,2,1,4,1,2,8,1,3,2,2,6,2], ARRAY[4,8,10,14], 14, ARRAY[0,0,2,3,0,2,2,3,1,1,2,3,1,1,3,3]),
(25, 'balance-026', ARRAY[1,4,1,5,2,1,4,3,3,1,1,1,3,3,1,6], ARRAY[1,4,5,13], 10, ARRAY[1,0,0,0,1,2,2,2,1,1,2,2,1,3,3,3]),
(26, 'balance-027', ARRAY[1,5,1,5,6,2,5,1,12,2,1,1,1,4,7,2], ARRAY[1,2,9,13], 14, ARRAY[0,0,1,1,0,0,1,1,2,2,1,1,3,3,3,3]),
(27, 'balance-028', ARRAY[1,4,3,1,3,3,1,4,8,4,6,2,1,1,2,4], ARRAY[3,4,6,9], 12, ARRAY[1,0,0,0,1,2,2,0,1,3,2,2,3,3,3,3]),
(28, 'balance-029', ARRAY[4,3,1,3,1,3,3,1,2,2,1,8,3,9,2,2], ARRAY[7,10,13,15], 12, ARRAY[0,0,0,0,1,1,1,0,1,1,1,3,2,2,3,3]),
(29, 'balance-030', ARRAY[3,8,9,4,6,1,8,2,1,1,5,11,7,1,4,1], ARRAY[1,2,3,12], 18, ARRAY[0,0,1,2,0,1,1,2,0,3,3,2,3,3,3,2])
on conflict (slot) do nothing;

create or replace function public.balance_daily_state() returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  today date := (clock_timestamp() at time zone 'UTC')::date;
  chosen integer;
  p balance_private.puzzles%rowtype;
  a balance_private.attempts%rowtype;
begin
  chosen := (((today-date '2026-10-04'+3)%30)+30)%30;
  select * into a from balance_private.attempts where user_id=auth.uid() and play_date=today;
  if found then select * into p from balance_private.puzzles where puzzle_id=a.puzzle_id;
  else select * into p from balance_private.puzzles where slot=chosen;
  end if;
  if p.puzzle_id is null then raise exception 'Daily puzzle unavailable'; end if;
  return jsonb_build_object('date',today,'server_now',clock_timestamp(),'puzzle_id',p.puzzle_id,'nums',p.nums,'anchors',p.anchors,'target',p.target,
    'started_at',a.started_at,'finished_at',a.finished_at,'elapsed_seconds',a.elapsed_seconds,'alias',a.alias,'visible',coalesce(a.visible,false));
end $$;

create or replace function public.balance_start_daily(player_alias text, publish_score boolean) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  uid uuid := auth.uid();
  today date := (clock_timestamp() at time zone 'UTC')::date;
  chosen integer := (((today-date '2026-10-04'+3)%30)+30)%30;
  pid text;
begin
  if uid is null then raise exception 'Sign in to save a daily score'; end if;
  if player_alias is null or btrim(player_alias) !~ '^[A-Za-z0-9 _-]{2,24}$' then raise exception 'Use a 2–24 character alias: letters, numbers, spaces, hyphens or underscores'; end if;
  select puzzle_id into pid from balance_private.puzzles where slot=chosen;
  if pid is null then raise exception 'Daily puzzle unavailable'; end if;
  insert into balance_private.attempts(user_id,play_date,puzzle_id,alias,visible)
  values(uid,today,pid,btrim(player_alias),coalesce(publish_score,false)) on conflict(user_id,play_date) do nothing;
  return public.balance_daily_state();
end $$;

create or replace function public.balance_finish_daily(expected_date date, assignment integer[]) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare
  uid uuid := auth.uid();
  today date := (clock_timestamp() at time zone 'UTC')::date;
  a balance_private.attempts%rowtype;
  answer integer[];
  finished timestamptz;
begin
  if uid is null then raise exception 'Sign in to save a daily score'; end if;
  if expected_date is distinct from today then raise exception 'A new daily puzzle is available. Refresh to start it.'; end if;
  select * into a from balance_private.attempts where user_id=uid and play_date=today for update;
  if not found then raise exception 'Start your saved daily attempt first'; end if;
  if a.finished_at is not null then return public.balance_daily_state(); end if;
  select solution into answer from balance_private.puzzles where puzzle_id=a.puzzle_id;
  if assignment is null or cardinality(assignment)<>16 or assignment is distinct from answer then raise exception 'The submitted board is not the valid solution'; end if;
  finished := clock_timestamp();
  update balance_private.attempts set finished_at=finished,elapsed_seconds=greatest(0,floor(extract(epoch from (finished-a.started_at)))::integer)
    where user_id=uid and play_date=today;
  return public.balance_daily_state();
end $$;

create or replace function public.balance_set_visibility(expected_date date, publish_score boolean) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if auth.uid() is null then raise exception 'Sign in first'; end if;
  update balance_private.attempts set visible=coalesce(publish_score,false) where user_id=auth.uid() and play_date=expected_date;
end $$;

create or replace function public.balance_leaderboard() returns jsonb
language sql security definer set search_path = '' as $$
  select coalesce(jsonb_agg(jsonb_build_object('rank',q.position,'alias',q.alias,'seconds',q.elapsed_seconds,'is_you',coalesce(q.user_id=auth.uid(),false)) order by q.elapsed_seconds,q.finished_at,q.user_id),'[]'::jsonb)
  from (select a.*,rank() over(order by elapsed_seconds) as position from balance_private.attempts a
    where play_date=(clock_timestamp() at time zone 'UTC')::date and visible and finished_at is not null
    order by elapsed_seconds,finished_at,user_id limit 100) q;
$$;

revoke all on function public.balance_daily_state() from public, anon, authenticated;
revoke all on function public.balance_start_daily(text,boolean) from public, anon, authenticated;
revoke all on function public.balance_finish_daily(date,integer[]) from public, anon, authenticated;
revoke all on function public.balance_set_visibility(date,boolean) from public, anon, authenticated;
revoke all on function public.balance_leaderboard() from public, anon, authenticated;
grant execute on function public.balance_daily_state() to authenticated;
grant execute on function public.balance_start_daily(text,boolean) to authenticated;
grant execute on function public.balance_finish_daily(date,integer[]) to authenticated;
grant execute on function public.balance_set_visibility(date,boolean) to authenticated;
grant execute on function public.balance_leaderboard() to anon, authenticated;
notify pgrst, 'reload schema';
commit;
