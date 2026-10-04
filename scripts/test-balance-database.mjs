import { PGlite } from '@electric-sql/pglite';
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const db = new PGlite();
await db.exec(`create role anon; create role authenticated; create schema auth;
create table auth.users(id uuid primary key);
create function auth.uid() returns uuid language sql as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
grant usage on schema auth to anon, authenticated; grant execute on function auth.uid() to anon, authenticated;`);
const migration = await readFile(new URL('../supabase/migrations/20261004_balance_ranked.sql', import.meta.url), 'utf8');
await db.exec(migration);
await db.exec(migration); // Safe re-run does not reset attempts or replace published puzzles.
assert.equal((await db.query('select count(*)::int as n from balance_private.puzzles')).rows[0].n,30);
const alice='00000000-0000-4000-8000-000000000001',bob='00000000-0000-4000-8000-000000000002';
await db.query('insert into auth.users values ($1),($2)',[alice,bob]);
async function role(user) { await db.exec('reset role');await db.query("select set_config('request.jwt.claim.sub',$1,false)",[user??'']);await db.exec(user?'set role authenticated':'set role anon'); }
async function rpc(name,args=[]) {return (await db.query(`select public.${name}(${args.map((_,i)=>'$'+(i+1)).join(',')}) as value`,args)).rows[0].value;}
await role(null);
assert.deepEqual(await rpc('balance_leaderboard'),[]);
await assert.rejects(()=>rpc('balance_start_daily',['Anonymous',true]),/permission denied/);
await assert.rejects(()=>db.query('select * from balance_private.puzzles'),/permission denied/);
await role(alice);
await assert.rejects(()=>db.query('select * from balance_private.attempts'),/permission denied/);
await assert.rejects(()=>rpc('balance_start_daily',['<script>',true]),/alias/);
const fresh=await rpc('balance_daily_state');assert.equal(fresh.started_at,null);assert.equal(fresh.solution,undefined);
const started=await rpc('balance_start_daily',['Alice',true]);
const repeated=await rpc('balance_start_daily',['Changed',false]);assert.equal(repeated.started_at,started.started_at);assert.equal(repeated.alias,'Alice');
await assert.rejects(()=>rpc('balance_finish_daily',[started.date,Array(16).fill(0)]),/valid solution/);
await assert.rejects(()=>rpc('balance_finish_daily',['2000-01-01',Array(16).fill(0)]),/new daily/);
await db.exec('reset role');
const answer=(await db.query('select solution from balance_private.puzzles where puzzle_id=$1',[started.puzzle_id])).rows[0].solution;
await role(bob);
await assert.rejects(()=>rpc('balance_finish_daily',[started.date,answer]),/Start your/);
assert.equal((await rpc('balance_daily_state')).started_at,null);
await role(alice);
const finished=await rpc('balance_finish_daily',[started.date,answer]);assert(finished.finished_at);assert(finished.elapsed_seconds>=0);
const again=await rpc('balance_finish_daily',[started.date,answer]);assert.equal(again.finished_at,finished.finished_at);assert.equal(again.elapsed_seconds,finished.elapsed_seconds);
let board=await rpc('balance_leaderboard');assert.equal(board.length,1);assert.equal(board[0].alias,'Alice');assert.equal(board[0].is_you,true);assert.equal(board[0].user_id,undefined);
await rpc('balance_set_visibility',[started.date,false]);assert.deepEqual(await rpc('balance_leaderboard'),[]);
await rpc('balance_set_visibility',[started.date,true]);
await role(null);board=await rpc('balance_leaderboard');assert.equal(board.length,1);assert.equal(board[0].is_you,false);
await db.exec('reset role');await db.query('delete from auth.users where id=$1',[alice]);assert.equal((await db.query('select count(*)::int as n from balance_private.attempts')).rows[0].n,0);
await db.close();
console.log('Database tests passed: 30 seeds, repeat migration, access restrictions, unique attempt, invalid/stale solutions, cross-user isolation, idempotent finish, visibility, deletion cascade.');
