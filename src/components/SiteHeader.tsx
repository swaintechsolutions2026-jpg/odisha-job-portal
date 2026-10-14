"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo, WhatsAppIcon } from "./Icons";
import { LangToggle } from "./LangToggle";
import { useLang, type DictKey } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";

const NAV: { href: string; k: DictKey }[] = [
  { href: "/", k: "nav.home" },
  { href: "/jobs", k: "nav.jobs" },
  { href: "/private-jobs", k: "nav.private" },
  { href: "/government-jobs", k: "nav.government" },
  { href: "/districts", k: "nav.districts" },
  { href: "/about", k: "nav.about" },
];

export function SiteHeader() {
  const { t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Odisha Job Alert home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-lg px-3 py-2 text-[14px] font-medium transition ${isActive(n.href) ? "bg-mist text-navy" : "text-slate-ink hover:text-navy"}`}
            >
              {t(n.k)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <Link href="/login" className="text-[14px] font-semibold text-navy hover:text-orange">
            {t("nav.login")}
          </Link>
          <Link href="/signup" className="rounded-xl bg-navy px-4 py-2.5 text-[14px] font-semibold text-white shadow-soft transition hover:bg-navy-700">
            {t("nav.register")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-xl text-navy ring-1 ring-line"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-4">
            {[...NAV, { href: "/contact", k: "nav.contact" as DictKey }].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`flex h-13 items-center rounded-xl px-4 text-[16px] font-semibold ${isActive(n.href) ? "bg-mist text-navy" : "text-navy/80"}`}
              >
                {t(n.k)}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link href="/login" className="grid h-12 place-items-center rounded-xl font-semibold text-navy ring-1 ring-line">{t("nav.login")}</Link>
              <Link href="/signup" className="grid h-12 place-items-center rounded-xl bg-navy font-semibold text-white">{t("nav.register")}</Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-6">
              <a href={SITE.phoneTel} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-mist font-semibold text-navy">
                <Phone className="size-4" /> {t("cta.call")}
              </a>
              <a href={whatsappLink("Hello Odisha Job Alert, I have a question.")} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-teal font-semibold text-white">
                <WhatsAppIcon className="size-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
