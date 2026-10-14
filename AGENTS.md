# AGENTS.md — Odisha Job Alert

Continue from **PLAN.md** — Milestone 1 (UI surface) is complete; next is Milestone 2 (database).

## Architecture
- Next.js 15 App Router in `src/app`, deployed to Netlify (no custom adapter config; `netlify.toml` only sets build command/publish).
- Pages are server components that read data and pass it to client components in `src/components` (most UI is client-side because of the language switch).
- `src/lib/i18n.tsx` — `LanguageProvider`, `useLang()` → `t(key)` for dictionary strings and `pick(en, or)` for data with optional Odia. Language persisted in localStorage (`oja-lang`).
- `src/lib/jobs.ts` — the ONLY stub data module. `PUBLISHED_JOBS` is empty; `DEMO_JOBS` are fictional and flagged `isDemo`. `getPublicJobs()`, `getGovernmentNotices()`, `getJobBySlug()`, `filterJobs()` are the seams to replace with database queries.
- `src/lib/taxonomy.ts` — reference lists (seed data for later). `src/lib/site.ts` — contact constants, WhatsApp link builder, formatters.
- `src/lib/saved.ts` — device-local saved jobs (temporary until accounts).
- `data/research/` — raw owner research files; never publish from these directly.

## Conventions
- Tailwind 4 theme tokens in `src/app/globals.css` (`navy`, `mist`, `line`, `slate-ink`, `orange`, `teal`, `shadow-soft`, `shadow-lift`, `container-page`).
- Fonts: Plus Jakarta Sans (display), Inter (body), Noto Sans Oriya (Odia) via Google Fonts link in layout.
- Icons: lucide-react (v1 — no brand icons; Instagram/WhatsApp are custom SVGs in `components/Icons.tsx`).
- Mobile: bottom nav (`MobileBottomNav`) hidden on `/jobs/[slug]`, which has its own sticky action bar. Keep `pb-20` on main for clearance.

## Truth rules (non-negotiable)
- Never show unverified poster claims as jobs; imported records start NOT VERIFIED / HOLD.
- Government listings require an official URL and apply externally.
- No invented counts, testimonials, partnerships, guarantees or fake success states. Disabled forms must say nothing was submitted.
- JobPosting JSON-LD and sitemap entries only for verified, non-demo jobs.
- WhatsApp messages contain only a job reference — never personal documents.

## Backend direction
Use Netlify Database (Drizzle, `db/schema.ts`), Netlify Identity (roles in `app_metadata`), and Netlify Blobs for private resumes. Read the Netlify skills before implementing.
