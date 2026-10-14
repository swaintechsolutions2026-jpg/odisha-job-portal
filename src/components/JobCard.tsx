"use client";

import Link from "next/link";
import { Bookmark, BookmarkCheck, Briefcase, Clock, GraduationCap, IndianRupee, MapPin } from "lucide-react";
import type { Job } from "@/lib/jobs";
import { useLang } from "@/lib/i18n";
import { useSavedJobs } from "@/lib/saved";
import { formatSalary } from "@/lib/site";
import { EXPERIENCE_OPTIONS, getCategory, getDistrict, getQualification } from "@/lib/taxonomy";
import { CategoryIcon } from "./Icons";

function relativeDays(iso: string) {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (d <= 0) return "Today";
  if (d === 1) return "Yesterday";
  return `${d} days ago`;
}

export function JobCard({ job }: { job: Job }) {
  const { t, pick } = useLang();
  const { isSaved, toggle } = useSavedJobs();
  const cat = getCategory(job.categorySlug);
  const district = getDistrict(job.districtSlug);
  const saved = isSaved(job.id);
  const exp = EXPERIENCE_OPTIONS.find((e) => e.slug === job.experience);

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-navy/15 hover:shadow-lift">
      <div className="flex items-start gap-3.5">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-mist text-navy ring-1 ring-line">
          {cat && <CategoryIcon name={cat.icon} className="size-5" />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            {job.isDemo && (
              <span className="rounded-md bg-orange-50 px-1.5 py-0.5 text-[10.5px] font-bold tracking-wider text-orange-600 ring-1 ring-orange/30">DEMO</span>
            )}
            <span className="rounded-md bg-mist px-1.5 py-0.5 text-[11px] font-medium text-slate-ink">{job.employmentType}</span>
          </div>
          <h3 className="text-[17px] leading-snug font-bold text-navy">
            <Link href={`/jobs/${job.slug}`} className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none">
              {pick(job.title, job.titleOr)}
            </Link>
          </h3>
          <p className="mt-0.5 truncate text-[13.5px] text-slate-ink">{job.employer}</p>
        </div>
        <button
          type="button"
          onClick={() => toggle(job.id)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`}
          className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-xl transition ${saved ? "bg-orange-50 text-orange" : "text-slate-ink hover:bg-mist"}`}
        >
          {saved ? <BookmarkCheck className="size-5" /> : <Bookmark className="size-5" />}
        </button>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5 text-[13.5px]">
        <div className="flex items-center gap-2 text-navy">
          <MapPin className="size-4 shrink-0 text-teal" aria-hidden />
          <dt className="sr-only">Location</dt>
          <dd className="truncate">{job.city}, {district ? pick(district.en, district.or) : ""}</dd>
        </div>
        <div className="flex items-center gap-2 font-semibold text-navy">
          <IndianRupee className="size-4 shrink-0 text-teal" aria-hidden />
          <dt className="sr-only">Salary</dt>
          <dd className="truncate">{formatSalary(job.salaryMin, job.salaryMax).replace(/₹/g, "")}<span className="font-normal text-slate-ink"> /mo</span></dd>
        </div>
        <div className="flex items-center gap-2 text-navy">
          <GraduationCap className="size-4 shrink-0 text-teal" aria-hidden />
          <dt className="sr-only">Qualification</dt>
          <dd className="truncate">{job.qualifications.map((q) => getQualification(q)?.en).join(" / ")}</dd>
        </div>
        <div className="flex items-center gap-2 text-navy">
          <Briefcase className="size-4 shrink-0 text-teal" aria-hidden />
          <dt className="sr-only">Experience</dt>
          <dd className="truncate">{exp ? pick(exp.en, exp.or) : ""}</dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <span suppressHydrationWarning className="flex items-center gap-1.5 text-[12.5px] text-slate-ink">
          <Clock className="size-3.5" aria-hidden />
          {job.isDemo ? "Sample · " : "Published · "}
          {relativeDays(job.publishedAt)}
        </span>
        <span className="text-[13.5px] font-semibold text-orange transition group-hover:translate-x-0.5">{t("cta.details")} →</span>
      </div>
    </article>
  );
}
