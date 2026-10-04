# Saved daily scores and global leaderboard

## Deploy in order

1. Use the dedicated **Balance** Supabase project `mrsvzbxaeizdtgovnvzc`.
2. Open SQL Editor → New query. Paste and run the complete `supabase/migrations/20261004_balance_ranked.sql` migration. It runs in one transaction and can be rerun. It seeds 30 puzzles, creates private RLS-protected tables and grants access only to named RPC functions. Do not expose the `balance_private` schema or grant table access.
3. With automatic table exposure disabled, confirm the `public` schema is included in Data API settings. The migration grants execution explicitly; no direct tables need exposure. If custom automatic-exposure controls block function execution, permit the five `public.balance_*` functions only.
4. Add GitHub repository variable `VITE_BALANCE_RANKED_ENABLED=true`.
5. Merge this PR into `content-fixes-aug-2026`. Azure's GitHub Actions build reads the variable. No private database credentials or service-role key are needed in the browser or workflow.
6. Test `/balance` → sign in → Saved daily. Choose an alias and decide whether to publish it. Start once, solve, submit and reload to confirm the same saved score. Sign out to check public results; hide a score to confirm it disappears. Test a second account to confirm isolation.

The feature defaults off when the variable is absent. If the SQL is not installed, the UI reports that saved play is unavailable while casual Daily and Practice still work.

## Behaviour and limits

- UTC date and timing come from PostgreSQL. Start is idempotent; finish locks the attempt and preserves the first completion, including duplicate network retries. Client times are never accepted.
- Every submission must match the independently verified unique solution for that attempt's pinned puzzle. No user ID or arbitrary puzzle ID is accepted from the client.
- Completed scores and the running timer are available on another device. In-progress cell placement stays locally in that browser, isolated by account/date/puzzle. Account deletion cascades to attempts.
- Alias and time appear publicly only when the player chooses visibility. Aliases need not be unique. Exact equal second times share rank. The list shows up to 100 opted-in results for the current day.
- A 30-puzzle bank rotates. This PR includes the previously prepared bank so it works even if the separate bank PR has not been merged. Practice labels remain provisional.
- These are casual pilot comparisons: the same bank can be practised or inspected, and bots or multiple accounts are not prevented. Server validation rejects invented times and invalid solutions; it is not proof of unaided human play.
- Global leaderboard only in this release. Invite-based friend leagues and direct LinkedIn publishing are not included. Copy/paste sharing remains available.
- Hiding changes public visibility, not storage. Deletion requests go to privacy@pthfndr.org. The privacy page explains retention and sharing.

## Validation

`npm run lint`, `npm run build`, `npm run test:balance`.

Database tests use PGlite (real PostgreSQL WASM) with mocked Supabase auth roles/claims. They exercise SQL execution, access controls, immutable starts/finishes, invalid solutions, date rollover, cross-user isolation, public projection, visibility and cascade deletion. The live Supabase Data API settings, role defaults and OAuth flow still need the deployment acceptance check.
