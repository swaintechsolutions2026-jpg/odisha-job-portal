"use client";

import Link from "next/link";
import { Phone, ShieldAlert } from "lucide-react";
import { InstagramIcon, Logo, WhatsAppIcon } from "./Icons";
import { useLang } from "@/lib/i18n";
import { CATEGORIES, DISTRICTS, POPULAR_DISTRICTS } from "@/lib/taxonomy";
import { SITE, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  const { t, pick } = useLang();
  const cols = [
    {
      title: "Explore",
      links: [
        { href: "/jobs", label: t("nav.jobs") },
        { href: "/private-jobs", label: t("nav.private") },
        { href: "/government-jobs", label: t("nav.government") },
        { href: "/categories", label: "All categories" },
        { href: "/districts", label: t("nav.districts") },
        { href: "/saved", label: "Saved jobs" },
      ],
    },
    {
      title: "Categories",
      links: CATEGORIES.filter((c) => c.featured).slice(0, 6).map((c) => ({ href: `/categories/${c.slug}`, label: pick(c.en, c.or) })),
    },
    {
      title: "Districts",
      links: POPULAR_DISTRICTS.slice(0, 6).map((s) => {
        const d = DISTRICTS.find((x) => x.slug === s)!;
        return { href: `/districts/${d.slug}`, label: pick(d.en, d.or) };
      }),
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: t("nav.about") },
        { href: "/how-it-works", label: t("search.how") },
        { href: "/fraud-awareness", label: "Fraud awareness" },
        { href: "/contact", label: t("nav.contact") },
        { href: "/privacy", label: "Privacy policy" },
        { href: "/terms", label: "Terms of use" },
        { href: "/disclaimer", label: "Disclaimer" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full bg-orange/10 blur-3xl" />
      <div className="container-page relative pt-16 pb-28 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[14px] leading-6 text-white/65">{SITE.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={SITE.phoneTel} className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/8 px-3.5 text-sm font-medium ring-1 ring-white/10 hover:bg-white/12">
                <Phone className="size-4" aria-hidden /> {SITE.phoneDisplay}
              </a>
              <a href={whatsappLink("Hello Odisha Job Alert, I have a question.")} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg bg-teal px-3.5 text-sm font-semibold hover:bg-teal-700">
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/8 px-3.5 text-sm font-medium ring-1 ring-white/10 hover:bg-white/12">
                <InstagramIcon className="size-4" /> {SITE.instagramHandle}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-[12px] font-semibold tracking-[0.14em] text-white/45 uppercase">{c.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[14px] text-white/75 transition hover:text-white">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:flex-row sm:items-start">
          <ShieldAlert className="size-5 shrink-0 text-orange" aria-hidden />
          <p className="text-[13px] leading-6 text-white/65">
            {t("footer.disclaimer")} <strong className="text-white">{t("safety.nofee")}.</strong>
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[12.5px] text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Odisha Job Alert. Social branding: {SITE.socialBranding}.</p>
          <p>Independent job-information platform · Not a government website</p>
        </div>
      </div>
    </footer>
  );
}
