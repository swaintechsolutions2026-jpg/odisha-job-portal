"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GraduationCap, MapPin, Search } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { DISTRICTS, QUALIFICATIONS } from "@/lib/taxonomy";

export function SearchBar({ initial }: { initial?: { q?: string; district?: string; qualification?: string } }) {
  const { t, pick } = useLang();
  const router = useRouter();
  const [q, setQ] = useState(initial?.q ?? "");
  const [district, setDistrict] = useState(initial?.district ?? "");
  const [qualification, setQualification] = useState(initial?.qualification ?? "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const p = new URLSearchParams();
    if (q.trim()) p.set("q", q.trim());
    if (district) p.set("district", district);
    if (qualification) p.set("qualification", qualification);
    const qs = p.toString();
    router.push(`/jobs${qs ? `?${qs}` : ""}`);
  }

  return (
    <form
      onSubmit={submit}
      role="search"
      className="grid gap-2 rounded-2xl bg-white p-2 shadow-lift ring-1 ring-black/5 md:grid-cols-[1.5fr_1fr_1fr_auto]"
    >
      <label className="relative block">
        <span className="sr-only">{t("search.keyword")}</span>
        <Search className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-slate-ink/60" aria-hidden />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("search.keyword")}
          className="h-13 w-full rounded-xl bg-mist pr-3 pl-11 text-[15px] text-navy placeholder:text-slate-ink/60 focus:bg-white focus:ring-2 focus:ring-teal/30 focus:outline-none md:bg-transparent"
        />
      </label>
      <div className="grid grid-cols-2 gap-2 md:contents">
        <label className="relative block md:border-l md:border-line">
          <span className="sr-only">District</span>
          <MapPin className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-teal" aria-hidden />
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="h-13 w-full appearance-none truncate rounded-xl bg-mist pr-3 pl-9 text-[14.5px] text-navy focus:ring-2 focus:ring-teal/30 focus:outline-none md:bg-transparent"
          >
            <option value="">{t("search.district")}</option>
            {DISTRICTS.map((d) => (
              <option key={d.slug} value={d.slug}>{pick(d.en, d.or)}</option>
            ))}
          </select>
        </label>
        <label className="relative block md:border-l md:border-line">
          <span className="sr-only">Qualification</span>
          <GraduationCap className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-teal" aria-hidden />
          <select
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="h-13 w-full appearance-none truncate rounded-xl bg-mist pr-3 pl-9 text-[14.5px] text-navy focus:ring-2 focus:ring-teal/30 focus:outline-none md:bg-transparent"
          >
            <option value="">{t("search.qualification")}</option>
            {QUALIFICATIONS.map((x) => (
              <option key={x.slug} value={x.slug}>{pick(x.en, x.or)}</option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-orange px-7 text-[15px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(243,109,57,0.8)] transition hover:bg-orange-600"
      >
        <Search className="size-4" aria-hidden /> {t("search.find")}
      </button>
    </form>
  );
}
