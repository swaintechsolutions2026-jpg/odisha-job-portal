"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft, Bookmark, BookmarkCheck, Briefcase, Building, CalendarDays, CircleCheck, Clock, ExternalLink, FileText,
  FlaskConical, GraduationCap, IndianRupee, Info, MapPin, ShieldAlert, Users, X,
} from "lucide-react";
import type { Job } from "@/lib/jobs";
import { useLang } from "@/lib/i18n";
import { useSavedJobs } from "@/lib/saved";
import { formatDate, formatSalary, jobEnquiryMessage, whatsappLink } from "@/lib/site";
import { EXPERIENCE_OPTIONS, getCategory, getDistrict, getQualification } from "@/lib/taxonomy";
import { CategoryIcon, WhatsAppIcon } from "./Icons";
import { JobCard } from "./JobCard";

export function JobDetail({ job, related }: { job: Job; related: Job[] }) {
  const { t, pick } = useLang();
  const { isSaved, toggle } = useSavedJobs();
  const [applyOpen, setApplyOpen] = useState(false);
  const cat = getCategory(job.categorySlug);
  const district = getDistrict(job.districtSlug);
  const exp = EXPERIENCE_OPTIONS.find((e) => e.slug === job.experience);
  const saved = isSaved(job.id);
  const wa = whatsappLink(jobEnquiryMessage(job.ref, job.title));

  const facts = [
    { Icon: MapPin, l: "Location", v: `${job.city}, ${district?.en ?? ""} district` },
    { Icon: IndianRupee, l: "Salary", v: `${formatSalary(job.salaryMin, job.salaryMax)} · ${job.salaryType}` },
    { Icon: GraduationCap, l: "Qualification", v: job.qualifications.map((q) => getQualification(q)?.en).join(" / ") },
    { Icon: Briefcase, l: "Experience", v: exp?.en ?? "" },
    { Icon: Clock, l: "Working hours", v: `${job.workingHours} · ${job.shift} shift` },
    { Icon: Users, l: "Vacancies", v: job.vacancies ? `${job.vacancies} (as confirmed)` : "Not confirmed" },
    { Icon: CalendarDays, l: "Last date", v: job.lastDate ? formatDate(job.lastDate) : "Not specified" },
    { Icon: FileText, l: "Employment type", v: job.employmentType },
  ];

  const primary =
    job.applicationMode === "official" && job.officialUrl ? (
      <a href={job.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange px-5 font-bold text-white hover:bg-orange-600">
        Apply on Official Site <ExternalLink className="size-4" />
      </a>
    ) : job.applicationMode === "site" ? (
      <button type="button" onClick={() => setApplyOpen(true)} className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-orange px-5 font-bold text-white hover:bg-orange-600">
        {t("cta.apply")}
      </button>
    ) : (
      <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-orange px-5 font-bold text-white hover:bg-orange-600">
        Ask About This Job
      </a>
    );

  return (
    <div className="pb-24 lg:pb-0">
      <section className="border-b border-line bg-white">
        <div className="container-page py-6 sm:py-10">
          <Link href="/jobs" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-slate-ink hover:text-navy">
            <ArrowLeft className="size-4" /> Back to jobs
          </Link>

          {job.isDemo && (
            <div role="note" className="mt-5 flex items-start gap-3 rounded-2xl border border-dashed border-orange/50 bg-orange-50 px-4 py-3 text-[13.5px]">
              <FlaskConical className="mt-0.5 size-4 shrink-0 text-orange" />
              <p><strong>DEMO listing.</strong> This page previews how a verified job will look. The employer, salary and vacancy details are fictional — please don&apos;t apply or enquire about it.</p>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy text-white sm:size-16">
                {cat && <CategoryIcon name={cat.icon} className="size-6" />}
              </span>
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {job.isDemo && <span className="rounded-md bg-orange-50 px-1.5 py-0.5 text-[11px] font-bold text-orange-600 ring-1 ring-orange/30">DEMO</span>}
                  <span className="rounded-md bg-teal-50 px-1.5 py-0.5 text-[11px] font-semibold text-teal-700">{job.sector === "government" ? "Official notice" : "Private"}</span>
                  <span className="rounded-md bg-mist px-1.5 py-0.5 text-[11px] font-medium text-slate-ink">Ref {job.ref}</span>
                </div>
                <h1 className="mt-2 text-[28px] leading-tight font-extrabold sm:text-[38px]">{pick(job.title, job.titleOr)}</h1>
                <p className="mt-1 text-[15px] text-slate-ink">{job.employer} · {job.city}</p>
              </div>
            </div>
            <div className="hidden w-80 shrink-0 flex-col gap-2.5 lg:flex">
              <div className="flex gap-2.5">
                {primary}
                <button type="button" onClick={() => toggle(job.id)} aria-pressed={saved} aria-label={saved ? "Remove from saved" : "Save job"}
                  className={`grid size-12 place-items-center rounded-xl ring-1 ring-line ${saved ? "bg-orange-50 text-orange" : "text-navy hover:bg-mist"}`}>
                  {saved ? <BookmarkCheck className="size-5" /> : <Bookmark className="size-5" />}
                </button>
              </div>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal font-semibold text-white hover:bg-teal-700">
                <WhatsAppIcon className="size-4" /> {t("cta.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_340px] lg:py-12">
        <div className="space-y-6">
          <dl className="grid gap-3 sm:grid-cols-2">
            {facts.map(({ Icon, l, v }) => (
              <div key={l} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft">
                <Icon className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden />
                <div>
                  <dt className="text-[12px] font-semibold tracking-wide text-slate-ink uppercase">{l}</dt>
                  <dd className="mt-0.5 text-[14.5px] font-medium text-navy">{v}</dd>
                </div>
              </div>
            ))}
          </dl>

          <section className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="text-[19px] font-bold">Role and responsibilities</h2>
            <ul className="mt-4 space-y-2.5">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-2.5 text-[15px] leading-6 text-slate-ink"><CircleCheck className="mt-0.5 size-[18px] shrink-0 text-teal" />{r}</li>
              ))}
            </ul>
            {job.benefits.length > 0 && (
              <>
                <h3 className="mt-6 text-[16px] font-bold">Benefits (where confirmed)</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.benefits.map((b) => <li key={b} className="rounded-full bg-teal-50 px-3 py-1 text-[13px] font-medium text-teal-700">{b}</li>)}
                </ul>
              </>
            )}
          </section>

          <section className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <h2 className="text-[19px] font-bold">How to apply</h2>
            <ol className="mt-4 space-y-3">
              {job.applicationSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-[15px] leading-6 text-slate-ink">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-navy text-[12.5px] font-bold text-white">{i + 1}</span>{s}
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-start gap-2 rounded-xl bg-mist p-3.5 text-[13.5px] leading-6 text-slate-ink">
              <Info className="mt-0.5 size-4 shrink-0 text-navy" />
              WhatsApp enquiries share only the job reference. Please don&apos;t send your resume, Aadhaar or bank details on WhatsApp.
            </p>
          </section>
        </div>

        <aside className="space-y-4">
          <section className="rounded-2xl border border-line bg-white p-5 shadow-soft">
            <h2 className="flex items-center gap-2 text-[16px] font-bold"><Building className="size-4 text-teal" /> Employer &amp; recruiter</h2>
            <p className="mt-3 text-[15px] font-semibold">{job.employer}</p>
            <p className="mt-1 text-[13.5px] leading-6 text-slate-ink">{job.recruiterNote}</p>
            <dl className="mt-4 space-y-2 border-t border-line pt-4 text-[13.5px]">
              <div className="flex justify-between gap-3"><dt className="text-slate-ink">Recruitment source</dt><dd className="text-right font-medium">{job.source}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-slate-ink">Employer verified</dt><dd className="font-medium">{job.employerVerified ? "Yes" : "No"}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-slate-ink">{job.isDemo ? "Sample date" : "Published"}</dt><dd className="font-medium" suppressHydrationWarning>{formatDate(job.publishedAt)}</dd></div>
            </dl>
          </section>
          <section className="rounded-2xl bg-navy p-5 text-white">
            <h2 className="flex items-center gap-2 text-[16px] font-bold"><ShieldAlert className="size-4 text-orange" /> Stay safe</h2>
            <p className="mt-2 text-[13.5px] leading-6 text-white/70">Never pay to get a job. Odisha Job Alert is an independent information platform and does not guarantee selection.</p>
            <Link href="/fraud-awareness" className="mt-3 inline-block text-[13.5px] font-semibold text-orange hover:underline">Fraud-awareness guide →</Link>
          </section>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="container-page pb-14">
          <h2 className="mb-5 text-[22px] font-extrabold">Related listings</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{related.map((j) => <JobCard key={j.id} job={j} />)}</div>
        </section>
      )}

      {/* Sticky mobile actions — detail page only */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
        <button type="button" onClick={() => toggle(job.id)} aria-pressed={saved} aria-label={saved ? "Remove from saved" : "Save job"}
          className={`grid size-12 shrink-0 place-items-center rounded-xl ring-1 ring-line ${saved ? "bg-orange-50 text-orange" : "text-navy"}`}>
          {saved ? <BookmarkCheck className="size-5" /> : <Bookmark className="size-5" />}
        </button>
        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={t("cta.whatsapp")} className="grid size-12 shrink-0 place-items-center rounded-xl bg-teal text-white">
          <WhatsAppIcon className="size-5" />
        </a>
        {primary}
      </div>

      {applyOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-end sm:place-items-center" role="dialog" aria-modal="true" aria-labelledby="apply-title">
          <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={() => setApplyOpen(false)} />
          <div className="relative w-full max-w-md rounded-t-3xl bg-white p-6 shadow-lift animate-rise sm:rounded-3xl">
            <button type="button" onClick={() => setApplyOpen(false)} aria-label="Close" className="absolute top-4 right-4 grid size-10 place-items-center rounded-xl ring-1 ring-line"><X className="size-5" /></button>
            <h2 id="apply-title" className="pr-10 text-[20px] font-extrabold">{job.isDemo ? "Applications are disabled for demo listings" : "Sign in to apply"}</h2>
            <p className="mt-2 text-[14.5px] leading-6 text-slate-ink">
              {job.isDemo
                ? "This is a sample listing used to preview the website. No application was submitted."
                : "Applications are stored securely in your candidate account so you can track their status. Online accounts are being connected — no application has been submitted."}
            </p>
            <div className="mt-5 grid gap-2.5">
              <Link href="/signup" className="grid h-12 place-items-center rounded-xl bg-navy font-semibold text-white">Create a candidate account</Link>
              <Link href="/jobs" className="grid h-12 place-items-center rounded-xl font-semibold text-navy ring-1 ring-line">Browse more jobs</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
