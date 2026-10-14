"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { filterJobs, FILTER_KEYS, type Job, type JobFilters } from "@/lib/jobs";
import { useLang } from "@/lib/i18n";
import {
  CATEGORIES, DISTRICTS, EMPLOYMENT_TYPES, EXPERIENCE_OPTIONS, POSTED_WITHIN, QUALIFICATIONS, SALARY_BANDS, SECTORS, SHIFTS,
} from "@/lib/taxonomy";
import { JobCard } from "./JobCard";
import { DemoBanner, EmptyState } from "./ui";

type Locked = Partial<Record<keyof JobFilters, string>>;

interface Props {
  jobs: Job[];
  isDemo: boolean;
  initial: JobFilters;
  /** Filters fixed by the page (e.g. a category or district page). */
  locked?: Locked;
}

function FilterSelect({ label, value, onChange, options, disabled }: {
  label: string; value?: string; onChange: (v: string) => void; options: { value: string; label: string }[]; disabled?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-navy">{label}</span>
      <select value={value ?? ""} disabled={disabled} onChange={(e) => onChange(e.target.value)} className="input-base h-11 appearance-none text-[14px] disabled:bg-mist disabled:text-slate-ink">
        <option value="">Any</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

export function JobsExplorer({ jobs, isDemo, initial, locked = {} }: Props) {
  const { t, pick } = useLang();
  const pathname = usePathname();
  const [filters, setFilters] = useState<JobFilters>({ ...initial, ...locked });
  const [q, setQ] = useState(initial.q ?? "");
  const [drawer, setDrawer] = useState(false);

  // Persist filters to the URL (excluding locked ones, which come from the path).
  useEffect(() => {
    const p = new URLSearchParams();
    for (const k of FILTER_KEYS) {
      const v = filters[k];
      if (v && !locked[k]) p.set(k, v);
    }
    const qs = p.toString();
    window.history.replaceState(null, "", `${pathname}${qs ? `?${qs}` : ""}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const results = useMemo(() => filterJobs(jobs, filters), [jobs, filters]);
  const set = (k: keyof JobFilters) => (v: string) => setFilters((f) => ({ ...f, [k]: v || undefined }));
  const activeCount = FILTER_KEYS.filter((k) => k !== "q" && k !== "sort" && filters[k] && !locked[k]).length;
  const reset = () => { setQ(""); setFilters({ ...locked }); };

  const panel = (
    <div className="space-y-4">
      <FilterSelect label="District" value={filters.district} onChange={set("district")} disabled={!!locked.district}
        options={DISTRICTS.map((d) => ({ value: d.slug, label: pick(d.en, d.or) }))} />
      <FilterSelect label="Job category" value={filters.category} onChange={set("category")} disabled={!!locked.category}
        options={CATEGORIES.map((c) => ({ value: c.slug, label: pick(c.en, c.or) }))} />
      <FilterSelect label="Qualification" value={filters.qualification} onChange={set("qualification")}
        options={QUALIFICATIONS.map((x) => ({ value: x.slug, label: pick(x.en, x.or) }))} />
      <FilterSelect label="Salary (per month)" value={filters.salary} onChange={set("salary")}
        options={SALARY_BANDS.map((s) => ({ value: s.slug, label: s.en }))} />
      <FilterSelect label="Experience" value={filters.experience} onChange={set("experience")}
        options={EXPERIENCE_OPTIONS.map((e) => ({ value: e.slug, label: pick(e.en, e.or) }))} />
      <FilterSelect label="Employment type" value={filters.type} onChange={set("type")}
        options={EMPLOYMENT_TYPES.map((e) => ({ value: e, label: e }))} />
      <FilterSelect label="Government / Private" value={filters.sector} onChange={set("sector")} disabled={!!locked.sector}
        options={SECTORS.map((s) => ({ value: s.slug, label: pick(s.en, s.or) }))} />
      <FilterSelect label="Published" value={filters.posted} onChange={set("posted")}
        options={POSTED_WITHIN.map((p) => ({ value: p.slug, label: p.en }))} />
      <FilterSelect label="Work shift" value={filters.shift} onChange={set("shift")}
        options={SHIFTS.map((s) => ({ value: s, label: s }))} />
    </div>
  );

  return (
    <div className="container-page py-8 sm:py-10">
      <form
        role="search"
        onSubmit={(e) => { e.preventDefault(); setFilters((f) => ({ ...f, q: q.trim() || undefined })); }}
        className="flex gap-2"
      >
        <label className="relative flex-1">
          <span className="sr-only">{t("search.keyword")}</span>
          <Search className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-slate-ink/60" aria-hidden />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search.keyword")} className="input-base pl-11 shadow-soft" />
        </label>
        <button type="submit" className="h-12 rounded-xl bg-orange px-5 font-semibold text-white hover:bg-orange-600">{t("nav.search")}</button>
      </form>

      <div className="mt-6 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block" aria-label={t("filters.title")}>
          <div className="sticky top-24 rounded-2xl border border-line bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-[15px] font-bold"><SlidersHorizontal className="size-4" /> {t("filters.title")}</h2>
              <button type="button" onClick={reset} className="text-[13px] font-semibold text-orange hover:underline">{t("filters.reset")}</button>
            </div>
            {panel}
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-[14px] text-slate-ink" aria-live="polite">
              <strong className="text-navy">{results.length}</strong> {isDemo ? "sample" : ""} {t("results.count")}
            </p>
            <div className="flex items-center gap-2">
              <label className="hidden items-center gap-2 text-[13px] text-slate-ink sm:flex">
                Sort
                <select value={filters.sort ?? ""} onChange={(e) => set("sort")(e.target.value)} className="h-10 rounded-lg border border-line bg-white px-2 text-[13.5px] text-navy">
                  <option value="">Newest</option>
                  <option value="salary">Highest salary</option>
                </select>
              </label>
              <button type="button" onClick={() => setDrawer(true)} className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-[14px] font-semibold text-navy ring-1 ring-line lg:hidden">
                <SlidersHorizontal className="size-4" /> {t("filters.title")}
                {activeCount > 0 && <span className="grid size-5 place-items-center rounded-full bg-orange text-[11px] text-white">{activeCount}</span>}
              </button>
            </div>
          </div>

          {isDemo && jobs.length > 0 && <DemoBanner />}

          {jobs.length === 0 ? (
            <EmptyState />
          ) : results.length === 0 ? (
            <EmptyState compact title="No matching jobs" body="Try removing a filter or searching a nearby district." />
          ) : (
            <div className="grid gap-4 md:grid-cols-2">{results.map((j) => <JobCard key={j.id} job={j} />)}</div>
          )}
        </div>
      </div>

      {drawer && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label={t("filters.title")}>
          <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={() => setDrawer(false)} />
          <div className="absolute inset-x-0 bottom-0 flex max-h-[92dvh] flex-col rounded-t-3xl bg-white animate-rise">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-[17px] font-bold">{t("filters.title")}</h2>
              <button type="button" onClick={() => setDrawer(false)} aria-label="Close filters" className="grid size-10 place-items-center rounded-xl ring-1 ring-line"><X className="size-5" /></button>
            </div>
            <div className="overflow-y-auto px-5 py-5">
              <label className="mb-4 block sm:hidden">
                <span className="mb-1.5 block text-[12.5px] font-semibold text-navy">Sort</span>
                <select value={filters.sort ?? ""} onChange={(e) => set("sort")(e.target.value)} className="input-base h-11 text-[14px]">
                  <option value="">Newest</option>
                  <option value="salary">Highest salary</option>
                </select>
              </label>
              {panel}
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-line px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <button type="button" onClick={reset} className="h-12 rounded-xl font-semibold text-navy ring-1 ring-line">{t("filters.reset")}</button>
              <button type="button" onClick={() => setDrawer(false)} className="h-12 rounded-xl bg-orange font-semibold text-white">{t("filters.apply")} ({results.length})</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
