# Balance LinkedIn sign-in deployment

The code reuses the browser Supabase client. No LinkedIn secret belongs in the frontend, repository or VITE variables.

1. Supabase Authentication → Providers: enable LinkedIn (OIDC) and save its Client ID and secret.
2. LinkedIn Auth: allow the exact Supabase callback URL displayed by Supabase.
3. Supabase Authentication → URL Configuration: add `https://pthfndr.org/balance` to Redirect URLs. Keep the existing Site URL and other redirects.
4. Confirm `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` are available during the Azure build (existing login uses them).
5. Before enabling, finalise the Balance privacy notice: Supabase project region, applicable cross-border arrangements, account/backup retention, deletion process and lawful basis. Check existing database new-user triggers so LinkedIn-created accounts are handled correctly without unintended programme enrolment.
6. Set build-time `VITE_BALANCE_LINKEDIN_ENABLED=true` and rebuild/deploy. Until then, optional login displays as coming soon and the puzzle works normally.

Acceptance: approve login and return to /balance; decline login and confirm a recoverable message; reload and restore the account session; sign out locally; confirm game progress remains local and no score/profile is sent to a leaderboard. Check sign-in using an existing PthFndR account and a new LinkedIn account. Do not copy callback tokens into logs or screenshots.

Sign-out uses Supabase local scope: it ends the current browser PthFndR session, not other devices. It does not delete the account. Sharing continues to use copy/paste, not LinkedIn posting permissions.
