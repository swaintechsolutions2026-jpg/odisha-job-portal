"use client";

import Link from "next/link";
import {
  ArrowRight, BadgeCheck, Building, ChevronDown, FileSearch, Landmark, ListChecks, MapPinned, Phone,
  ShieldAlert, Signal, ScrollText,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CATEGORIES, DISTRICTS, POPULAR_DISTRICTS, QUALIFICATIONS } from "@/lib/taxonomy";
import { getPublicJobs, getGovernmentNotices } from "@/lib/jobs";
import { FAQS, HOW_TO_APPLY, SAFETY_POINTS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { SearchBar } from "./SearchBar";
import { HeroVisual } from "./HeroVisual";
import { JobCard } from "./JobCard";
import { CategoryIcon, InstagramIcon } from "./Icons";
import { DemoBanner, EmptyState, SectionHeading, WhatsAppButton } from "./ui";

const CHIPS = [
  { label: "10th Pass", href: "/jobs?qualification=10th" },
  { label: "+2 Pass", href: "/jobs?qualification=plus2" },
  { label: "ITI / Diploma", href: "/categories/iti-diploma" },
  { label: "Graduate", href: "/jobs?qualification=graduate" },
  { label: "Warehouse", href: "/categories/warehouse-logistics" },
  { label: "Security", href: "/categories/security-guard" },
  { label: "Data Entry", href: "/categories/data-entry" },
  { label: "Engineering", href: "/categories/engineering" },
];

export function Home() {
  const { t, pick } = useLang();
  const { jobs, isDemo } = getPublicJobs();
  const latest = jobs.slice(0, 6);
  const privateJobs = jobs.filter((j) => j.sector === "private").slice(0, 3);
  const notices = getGovernmentNotices();

  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-48 -left-40 size-[560px] rounded-full bg-teal/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 -bottom-56 size-[560px] rounded-full bg-orange/25 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 pt-8 pb-10 sm:pt-14 sm:pb-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-[11.5px] font-semibold tracking-[0.12em] text-white/80 uppercase ring-1 ring-white/12">
              <span className="size-1.5 rounded-full bg-orange" /> {t("hero.eyebrow")}
            </p>
            <h1 className="mt-4 text-[34px] leading-[1.06] font-extrabold sm:text-[52px] lg:text-[60px]">
              {t("hero.title")}
              <span className="mt-1 block bg-gradient-to-r from-orange via-[#ff9a6b] to-teal bg-clip-text text-transparent">
                {t("hero.highlight")}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-[15.5px] leading-7 text-white/70 sm:text-[17px]">{t("hero.sub")}</p>

            <div className="mt-7 max-w-3xl text-navy">
              <SearchBar />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-[12.5px] font-semibold text-white/50">{t("search.popular")}:</span>
              <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 sm:flex-wrap">
                {CHIPS.map((c) => (
                  <Link key={c.label} href={c.href} className="shrink-0 rounded-full bg-white/8 px-3 py-1.5 text-[12.5px] font-medium text-white/85 ring-1 ring-white/12 transition hover:bg-white/15">
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-7 hidden sm:block">
              <Link href="/how-it-works" className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white/85 hover:text-white">
                {t("search.how")} <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Trust strip — describes built features only */}
      <section className="border-b border-line bg-white">
        <div className="container-page no-scrollbar flex gap-6 overflow-x-auto py-4 text-[13.5px] font-medium text-navy sm:justify-between">
          {[
            { Icon: MapPinned, l: "District-based search" },
            { Icon: ListChecks, l: "Clear application steps" },
            { Icon: Signal, l: "Status tracking" },
            { Icon: FileSearch, l: "Job-source transparency" },
          ].map(({ Icon, l }) => (
            <span key={l} className="flex shrink-0 items-center gap-2"><Icon className="size-4 text-teal" aria-hidden />{l}</span>
          ))}
        </div>
      </section>

      {/* 2 — Categories */}
      <section className="container-page py-14 sm:py-20">
        <SectionHeading eyebrow="Explore" k="sec.categories" subK="sec.categories.sub"
          action={<Link href="/categories" className="text-[14px] font-semibold text-orange hover:underline">All categories →</Link>} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {CATEGORIES.slice(0, 16).map((c) => (
            <Link key={c.slug} href={`/categories/${c.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lift sm:flex-row sm:items-center sm:p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal transition group-hover:bg-teal group-hover:text-white">
                <CategoryIcon name={c.icon} className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[14.5px] leading-snug font-bold text-navy">{pick(c.en, c.or)}</span>
                <span className="mt-0.5 hidden text-[12.5px] leading-5 text-slate-ink sm:block">{c.blurb}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3 — Latest jobs */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Openings" k="sec.latest" subK="sec.latest.sub"
            action={<Link href="/jobs" className="inline-flex h-11 items-center gap-2 rounded-xl px-4 text-[14px] font-semibold text-navy ring-1 ring-line hover:bg-mist">{t("cta.viewAll")} <ArrowRight className="size-4" /></Link>} />
          {latest.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {isDemo && <DemoBanner />}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{latest.map((j) => <JobCard key={j.id} job={j} />)}</div>
            </>
          )}
        </div>
      </section>

      {/* 4 — Districts */}
      <section className="container-page py-14 sm:py-20">
        <SectionHeading eyebrow="Odisha" k="sec.districts" subK="sec.districts.sub"
          action={<Link href="/districts" className="text-[14px] font-semibold text-orange hover:underline">All 30 districts →</Link>} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {POPULAR_DISTRICTS.map((s) => {
            const d = DISTRICTS.find((x) => x.slug === s)!;
            return (
              <Link key={s} href={`/districts/${s}`} className="group rounded-2xl border border-line bg-white p-4 shadow-soft transition hover:border-orange/40 hover:shadow-lift">
                <span className="block font-display text-[15.5px] font-bold text-navy group-hover:text-orange">{pick(d.en, d.or)}</span>
                <span className="mt-1 block truncate text-[12.5px] text-slate-ink">{d.cities.join(" · ")}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5 — Qualifications */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Eligibility" k="sec.qualification" sub="From 10th pass to engineering — see roles that match your education." />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {QUALIFICATIONS.map((q, i) => (
              <Link key={q.slug} href={`/jobs?qualification=${q.slug}`}
                className={`flex h-24 flex-col justify-between rounded-2xl p-4 transition hover:-translate-y-0.5 ${i % 3 === 0 ? "bg-navy text-white" : i % 3 === 1 ? "bg-teal-50 text-navy ring-1 ring-teal/15" : "bg-orange-50 text-navy ring-1 ring-orange/15"}`}>
                <span className="text-[11px] font-semibold tracking-wider uppercase opacity-60">Level</span>
                <span className="font-display text-[16px] font-bold">{pick(q.en, q.or)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6 & 7 — Private jobs and Government notices */}
      <section className="container-page grid gap-6 py-14 sm:py-20 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-orange-50 text-orange"><Building className="size-5" /></span>
            <h2 className="text-[22px] font-extrabold">{t("sec.private")}</h2>
          </div>
          <p className="mt-3 text-[14.5px] leading-6 text-slate-ink">Roles with private employers and authorised agencies. Each verified listing names who actually employs you.</p>
          <ul className="mt-5 divide-y divide-line">
            {privateJobs.map((j) => (
              <li key={j.id}>
                <Link href={`/jobs/${j.slug}`} className="flex items-center justify-between gap-3 py-3 hover:text-orange">
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-semibold">{pick(j.title, j.titleOr)} {j.isDemo && <span className="ml-1 text-[10px] font-bold text-orange-600">DEMO</span>}</span>
                    <span className="text-[12.5px] text-slate-ink">{j.city}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0" />
                </Link>
              </li>
            ))}
            {privateJobs.length === 0 && <li className="py-3 text-[14px] text-slate-ink">{t("empty.title")}.</li>}
          </ul>
          <Link href="/private-jobs" className="mt-5 inline-flex h-11 items-center gap-2 rounded-xl bg-navy px-4 text-[14px] font-semibold text-white hover:bg-navy-700">Browse private jobs <ArrowRight className="size-4" /></Link>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-8">
          <div className="pointer-events-none absolute -right-20 -bottom-24 size-72 rounded-full bg-teal/25 blur-3xl" />
          <div className="relative flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-teal"><Landmark className="size-5" /></span>
            <h2 className="text-[22px] font-extrabold">{t("sec.government")}</h2>
          </div>
          <p className="relative mt-3 text-[14.5px] leading-6 text-white/70">
            We list a government recruitment only when its official notification can be verified. You always apply on the official website — never through us.
          </p>
          <div className="relative mt-5 rounded-2xl bg-white/6 p-5 ring-1 ring-white/10">
            {notices.length === 0 ? (
              <div className="flex items-start gap-3">
                <ScrollText className="mt-0.5 size-5 shrink-0 text-orange" />
                <p className="text-[14px] leading-6 text-white/80">No official notices are published yet. Posters using government logos are not treated as notices until the official source is confirmed.</p>
              </div>
            ) : (
              <p className="text-[14px]">{notices.length} official notices</p>
            )}
          </div>
          <Link href="/government-jobs" className="relative mt-5 inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-[14px] font-semibold text-navy hover:bg-mist">View government notices <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      {/* 8 — Featured categories */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Careers" k="sec.featured" sub="Fields with steady demand across Odisha's industrial and service hubs." />
          <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
            {CATEGORIES.filter((c) => c.featured).slice(0, 8).map((c, i) => (
              <Link key={c.slug} href={`/categories/${c.slug}`}
                className={`relative w-64 shrink-0 snap-start overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 sm:w-auto ${i % 2 === 0 ? "bg-gradient-to-br from-navy to-navy-700 text-white" : "bg-gradient-to-br from-mist to-white text-navy ring-1 ring-line"}`}>
                <CategoryIcon name={c.icon} className={`size-8 ${i % 2 === 0 ? "text-orange" : "text-teal"}`} />
                <h3 className="mt-8 text-[18px] font-bold">{pick(c.en, c.or)}</h3>
                <p className={`mt-1.5 text-[13px] leading-5 ${i % 2 === 0 ? "text-white/65" : "text-slate-ink"}`}>{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold">Explore <ArrowRight className="size-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — How to apply */}
      <section className="container-page py-14 sm:py-20">
        <SectionHeading eyebrow="Process" k="sec.how"
          action={<Link href="/how-it-works" className="text-[14px] font-semibold text-orange hover:underline">Full guide →</Link>} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_TO_APPLY.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-line bg-white p-6 shadow-soft">
              <span className="font-display text-[44px] leading-none font-extrabold text-orange/20">0{i + 1}</span>
              <h3 className="mt-3 text-[17px] font-bold">{pick(s.title, s.titleOr)}</h3>
              <p className="mt-1.5 text-[14px] leading-6 text-slate-ink">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 10 — Safety */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="grid size-12 place-items-center rounded-2xl bg-orange-50 text-orange"><ShieldAlert className="size-6" /></span>
            <h2 className="mt-5 text-[28px] leading-tight font-extrabold sm:text-[34px]">{t("sec.safety")}</h2>
            <p className="mt-3 text-[15px] leading-7 text-slate-ink">Fake job offers often copy big brand logos and government seals. Here is how to stay safe while job hunting.</p>
            <Link href="/fraud-awareness" className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-navy px-5 font-semibold text-white hover:bg-navy-700">Read the fraud-awareness guide <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {SAFETY_POINTS.map((p) => (
              <div key={p.title} className="rounded-2xl bg-mist p-5 ring-1 ring-line">
                <BadgeCheck className="size-5 text-teal" />
                <h3 className="mt-3 text-[16px] font-bold">{p.title}</h3>
                <p className="mt-1 text-[14px] leading-6 text-slate-ink">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — About */}
      <section className="container-page py-14 sm:py-20">
        <div className="grid items-center gap-10 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-bold tracking-[0.16em] text-orange uppercase">Who we are</p>
            <h2 className="mt-2 text-[28px] leading-tight font-extrabold sm:text-[34px]">{t("sec.about")}</h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-ink">
              Odisha Job Alert began as an Instagram job-information channel ({SITE.instagramHandle}, known as {SITE.socialBranding}). This website turns it into a structured, searchable platform with clear sources, so candidates across Odisha can find work with more confidence.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-slate-ink">We are an independent platform — not a government body and not an employer — and we do not guarantee selection.</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-orange hover:underline">More about us <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: "30", l: "Odisha districts covered in search" },
              { k: "17", l: "Job categories to browse" },
              { k: "EN · ଓଡ଼ିଆ", l: "Bilingual interface" },
              { k: "9", l: "Search filters for precise results" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-mist p-5 ring-1 ring-line">
                <p className="font-display text-[26px] font-extrabold text-navy">{s.k}</p>
                <p className="mt-1 text-[13px] leading-5 text-slate-ink">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Help" k="sec.faq" sub="Straight answers about how Odisha Job Alert works." />
          <div className="divide-y divide-line rounded-2xl border border-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group px-5 py-1 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15.5px] font-semibold text-navy">
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-slate-ink transition group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-[14.5px] leading-7 text-slate-ink">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — Contact */}
      <section className="container-page py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-800 to-navy-700 p-6 text-white sm:p-12">
          <div className="pointer-events-none absolute -top-24 right-10 size-72 rounded-full bg-orange/25 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-[28px] leading-tight font-extrabold sm:text-[36px]">{t("sec.contact")}</h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-white/70">
                Questions about a listing or how to apply? Call or message us. Please don&apos;t send resumes or ID documents on WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={SITE.phoneTel} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 font-semibold text-navy hover:bg-mist">
                <Phone className="size-4" /> {t("cta.call")} · {SITE.phoneDisplay}
              </a>
              <WhatsAppButton message="Hello Odisha Job Alert, I have a question." />
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 font-semibold text-white ring-1 ring-white/25 hover:bg-white/10">
                <InstagramIcon className="size-4" /> {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
