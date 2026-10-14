"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { CATEGORIES, DISTRICTS } from "@/lib/taxonomy";
import { CategoryIcon } from "./Icons";

export function CategoryGrid() {
  const { pick } = useLang();
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {CATEGORIES.map((c) => (
        <Link key={c.slug} href={`/categories/${c.slug}`} className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-lift">
          <span className="grid size-12 place-items-center rounded-xl bg-teal-50 text-teal transition group-hover:bg-teal group-hover:text-white">
            <CategoryIcon name={c.icon} className="size-5" />
          </span>
          <h2 className="mt-4 text-[15.5px] leading-snug font-bold text-navy">{pick(c.en, c.or)}</h2>
          <p className="mt-1 hidden text-[13px] leading-5 text-slate-ink sm:block">{c.blurb}</p>
          <span className="mt-auto pt-4 text-[13px] font-semibold text-orange">View jobs <ArrowRight className="inline size-3.5" /></span>
        </Link>
      ))}
    </div>
  );
}

export function DistrictGrid() {
  const { pick } = useLang();
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {DISTRICTS.map((d) => (
        <Link key={d.slug} href={`/districts/${d.slug}`} className="group rounded-2xl border border-line bg-white p-4 shadow-soft transition hover:border-orange/40 hover:shadow-lift">
          <span className="flex items-center gap-1.5 font-display text-[16px] font-bold text-navy group-hover:text-orange">
            <MapPin className="size-4 text-teal" aria-hidden /> {pick(d.en, d.or)}
          </span>
          <span className="mt-1 block text-[12.5px] text-slate-ink">HQ: {d.hq}</span>
          <span className="mt-0.5 block truncate text-[12.5px] text-slate-ink">{d.cities.join(" · ")}</span>
        </Link>
      ))}
    </div>
  );
}
