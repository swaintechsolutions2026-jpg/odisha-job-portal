# Odisha Job Alert — Product Roadmap

Odisha Job Alert is a multi-part platform (public job search, candidate accounts, an admin verification workflow). It is being delivered in milestones so each piece can be reviewed and used before the next one builds on it.

**Backend direction:** the request named Supabase. The roadmap uses Netlify's built-in equivalents, which cover the same needs without a separate account or keys to manage: **Netlify Database** (managed Postgres + Drizzle ORM) for all records, **Netlify Identity** for signup/login and admin roles, and **Netlify Blobs** (private store) for resumes and verification evidence. Access control is enforced in server functions; no privileged credential reaches the browser. If the owner prefers Supabase, milestones 2–5 can be pointed at it instead with the same data model.

## ✅ Milestone 1 — Public product surface (done)
- Premium responsive UI in the brand palette: homepage with all 13 sections, header, mobile bottom nav, footer.
- Working English / Odia switch for navigation, hero, section headings and core CTAs.
- `/jobs` advanced search with 9 filters + sort, URL-persisted, mobile filter drawer.
- Category (17), district (30), private-jobs and government-notice pages.
- Job detail page with sticky mobile actions, job-specific WhatsApp enquiry and honest apply dialog.
- About, How it works, Contact (WhatsApp-composed enquiry), Fraud awareness, Privacy/Terms/Disclaimer drafts.
- Login/Signup/Reset forms (disabled until accounts exist), dashboard and admin previews with no fake data.
- Sitemap, robots, canonical URLs, JobPosting structured data gated to verified non-demo jobs.
- Stub data lives only in `src/lib/jobs.ts`; demo listings are labelled DEMO and can be hidden with `NEXT_PUBLIC_SHOW_DEMO_LISTINGS=false`.

## Milestone 2 — Data model & published-jobs database
- Drizzle schema in `db/schema.ts`: districts, cities, categories, employers, recruitment_agencies, source_posters, role_claims, jobs, job_verification_events, verification_documents, applications, application_status_history, saved_jobs, contact_enquiries, job_alert_subscriptions, site_settings, admin_audit_logs, user_roles, profiles.
- Job fields per the brief: `company_named_in_poster` vs `actual_employer_id`, `source_type`, `employment_relationship`, `verification_status`, `publication_status`, `job_type`, `salary_type`, `official_notification_no`, `source_official_url`, `expires_at`.
- Seed districts/categories/qualifications from `src/lib/taxonomy.ts`.
- Replace `src/lib/jobs.ts` with server queries that return only verified + published + unexpired jobs (government jobs additionally require an official URL).

## Milestone 3 — Candidate accounts
- Netlify Identity signup, email verification, login, password reset; protected `/dashboard`.
- Profile, qualification & skills, account settings, language preference.
- Saved jobs move from device storage to the database per user.

## Milestone 4 — Applications & resumes
- Application form (validated server-side, consent checkbox, no Aadhaar/PAN/fees) only for open, verified, site-managed jobs.
- Unique `OJA-APP-…` reference IDs, duplicate prevention, withdraw option.
- Private resume upload (PDF/DOC/DOCX, size limits) to Netlify Blobs; access only by the owner candidate and admins via short-lived server links.
- Status history: Submitted, Under Review, Shortlisted, Interview Scheduled, Selected, Not Selected, Withdrawn, Closed.

## Milestone 5 — Admin dashboard
- Role-protected `/admin` (server-side role check; signup never grants admin; bootstrap first admin by invite).
- Job management: create/edit/duplicate/archive, salary & type, locations, vacancies, images with rights notes, publish/pause/close/expire.
- Verification queue with checklist and evidence uploads; publishing blocked until verified.
- Applications: filter, review resumes securely, update status, internal notes, CSV export.
- Audit log of imports, verification, publication, status changes and exports.

## Milestone 6 — Research import (54 posters / 80 role claims)
- Import `data/research/Odisha_Job_Alert_54_Poster_Extraction.csv` (and the audit workbook) into `source_posters` and `role_claims`, preserving source IDs and original claimed text.
- Every record starts NOT VERIFIED / HOLD — NOT PUBLISHED; zero public jobs after import.
- Flag high-risk claims (bank, government, university branding) for official-source checks.

## Milestone 7 — Content manager, leads & notifications
- Admin-editable hero text, banners, FAQs, categories, district text, announcements, legal pages and Odia strings.
- Pending owner settings: legal name, address, email, logo, WhatsApp channel URL, fee policy, support hours.
- Database-backed contact/lead inbox with spam protection; job-alert subscriptions; scheduled expiry of stale listings.

## Milestone 8 — Launch hardening
- Rate limiting, bot protection on forms, accessibility and 320px–1440px QA, acceptance tests from the brief, custom domain.
