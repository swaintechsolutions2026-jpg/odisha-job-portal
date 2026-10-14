# Odisha Job Alert

A premium, bilingual (English / ଓଡ଼ିଆ) recruitment and job-information platform for job seekers across Odisha — evolving the **@chandannn_babu** (“ODISHA JOB KING”) Instagram channel into a searchable, transparent career site.

## What's live now
- Homepage with search, categories, latest jobs, districts, qualifications, private jobs, official government notices, how-to-apply, safety, about, FAQ and contact sections.
- `/jobs` search with district, category, qualification, salary, experience, employment type, sector, published date and shift filters (URL-persisted).
- Category, district, private-jobs and government-notice pages; individual job pages.
- Contact (call / WhatsApp +91 95565 02571), fraud-awareness and draft legal pages.
- Account, dashboard and admin screens in preview state (forms disabled; no fake data).

No real vacancies are published yet: the imported Instagram research is held for verification. Clearly labelled **DEMO** listings preview the design; hide them with `NEXT_PUBLIC_SHOW_DEMO_LISTINGS=false`.

## Tech
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · lucide-react · deployed on Netlify (Next.js runtime auto-detected).

## Run locally
```bash
npm install
npm run dev          # http://localhost:3000
# or, with Netlify emulation:
netlify dev
```

## Project data
- `src/lib/taxonomy.ts` — categories, all 30 Odisha districts (with cities), qualifications, filter options.
- `src/lib/jobs.ts` — listing data access (currently stub/demo data).
- `data/research/` — owner-supplied poster extraction CSV and audit workbook (54 posters, 80 role claims, all unverified) for the import milestone.

## Roadmap
See [PLAN.md](PLAN.md): database, candidate accounts, applications & private resumes, admin dashboard, research import, content manager and launch hardening.

## Pending from the owner
Legal entity name, office address, contact email, logo, WhatsApp channel URL, fee/refund policy, support hours, privacy contact, final domain, and evidence for any employer listings.
