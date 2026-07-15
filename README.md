# PthFndR — Rebuild

Marketing and platform site for **PthFndR**, a mission-led social innovation education company
closing the underemployment gap through dignity-infused learning.

Built with **Vite + React 19 + TypeScript + Tailwind CSS v4**, with a small **Express** server
(`server.ts`) that serves the SPA and handles the contact API (Resend + Supabase).

## Run locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in any keys you need (all optional for local dev —
   the contact form degrades gracefully without them):
   ```
   RESEND_API_KEY=...
   SUPABASE_URL=...
   SUPABASE_SERVICE_ROLE_KEY=...
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   The app runs on `http://localhost:3000` (override with `PORT=3100 npm run dev`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Express + Vite middleware) |
| `npm run build` | Production build (client + bundled server) |
| `npm run start` | Run the production server from `dist/` |
| `npm run lint` | Type-check with `tsc --noEmit` |

## Project structure

```
src/
  components/      Shared UI (Header, Footer, SEO, SEOSchemas, ui/ primitives)
  pages/           Route pages
  content/         Page copy (data-driven content)
  config/          Colours, routes
  constants/       Contact details, shared copy
  index.css        Tailwind v4 theme tokens + fonts (Fraunces + Inter)
public/            Static assets, robots.txt, sitemap.xml
server.ts          Express server (SPA + /api/contact)
```

## Design system

- **Type:** Fraunces (headings) + Inter (body).
- **Palette:** navy `#004890`, deep navy `#0C2A5C`, cyan `#0097b2`, green `#40D478`,
  warm ivory `#FBF4EC` — defined as `@theme` tokens in `src/index.css`.
- Reusable primitives live in `src/components/ui/` (`Eyebrow`, `TriangleMotif`).

## SEO

- Per-page `<title>`/meta/canonical via `src/components/SEO.tsx` (React 19 head hoisting).
- JSON-LD structured data via `src/components/SEOSchemas.tsx`.
- `public/robots.txt` and `public/sitemap.xml`.
