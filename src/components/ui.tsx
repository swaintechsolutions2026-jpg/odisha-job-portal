"use client";

import Link from "next/link";
import { BellRing, FlaskConical, ShieldCheck } from "lucide-react";
import { useLang, type DictKey } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export function SectionHeading({
  eyebrow, k, title, sub, subK, action,
}: { eyebrow?: string; k?: DictKey; title?: string; sub?: string; subK?: DictKey; action?: React.ReactNode }) {
  const { t } = useLang();
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-2 text-[12px] font-bold tracking-[0.16em] text-orange uppercase">{eyebrow}</p>}
        <h2 className="text-[26px] leading-tight font-extrabold text-navy sm:text-[32px]">{k ? t(k) : title}</h2>
        {(sub || subK) && <p className="mt-2 text-[15px] leading-6 text-slate-ink">{subK ? t(subK) : sub}</p>}
      </div>
      {action}
    </div>
  );
}

export function DemoBanner() {
  const { t } = useLang();
  return (
    <div role="note" className="mb-6 flex items-start gap-3 rounded-2xl border border-dashed border-orange/50 bg-orange-50 px-4 py-3 text-[13.5px] text-navy">
      <FlaskConical className="mt-0.5 size-4 shrink-0 text-orange" aria-hidden />
      <p>
        <strong className="font-semibold">{t("demo.banner")}</strong>{" "}
        <span className="text-slate-ink">Real, verified vacancies will replace them once the owner approves listings.</span>
      </p>
    </div>
  );
}

export function EmptyState({ title, body, compact = false }: { title?: string; body?: string; compact?: boolean }) {
  const { t } = useLang();
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-line bg-white text-center shadow-soft ${compact ? "px-6 py-10" : "px-6 py-14 sm:px-12"}`}>
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto size-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-teal-50 text-teal ring-8 ring-teal-50/50">
        <ShieldCheck className="size-7" aria-hidden />
      </div>
      <h3 className="relative mt-5 text-xl font-bold text-navy">{title ?? t("empty.title")}</h3>
      <p className="relative mx-auto mt-2 max-w-lg text-[15px] leading-6 text-slate-ink">{body ?? t("empty.body")}</p>
      <div className="relative mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={whatsappLink("Hello Odisha Job Alert, please add me to job updates.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal px-5 font-semibold text-white hover:bg-teal-700"
        >
          <BellRing className="size-4" aria-hidden /> {t("cta.updates")}
        </a>
        <Link href="/categories" className="inline-flex h-12 items-center justify-center rounded-xl px-5 font-semibold text-navy ring-1 ring-line hover:bg-mist">
          Browse categories
        </Link>
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 -bottom-40 size-[420px] rounded-full bg-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-40 -left-20 size-[380px] rounded-full bg-teal/20 blur-3xl" />
      <div className="container-page relative py-12 sm:py-16">
        {eyebrow && <p className="text-[12px] font-bold tracking-[0.16em] text-orange uppercase">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-[30px] leading-[1.1] font-extrabold sm:text-[44px]">{title}</h1>
        {sub && <p className="mt-3 max-w-2xl text-[15.5px] leading-7 text-white/70">{sub}</p>}
        {children}
      </div>
    </section>
  );
}

export function WhatsAppButton({ message, label, className = "" }: { message: string; label?: string; className?: string }) {
  const { t } = useLang();
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal px-5 font-semibold text-white transition hover:bg-teal-700 ${className}`}
    >
      <WhatsAppIcon className="size-4" /> {label ?? t("cta.whatsapp")}
    </a>
  );
}
