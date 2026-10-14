"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Search, Bookmark, MapPin, UserRound } from "lucide-react";
import { useLang, type DictKey } from "@/lib/i18n";

const ITEMS: { href: string; k: DictKey; Icon: typeof House }[] = [
  { href: "/", k: "nav.home", Icon: House },
  { href: "/jobs", k: "nav.search", Icon: Search },
  { href: "/districts", k: "nav.districts", Icon: MapPin },
  { href: "/saved", k: "nav.saved", Icon: Bookmark },
  { href: "/login", k: "nav.profile", Icon: UserRound },
];

export function MobileBottomNav() {
  const { t } = useLang();
  const pathname = usePathname();
  if (pathname.startsWith("/jobs/")) return null; // detail page has its own sticky actions

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
    >
      <ul className="grid grid-cols-5">
        {ITEMS.map(({ href, k, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex h-16 flex-col items-center justify-center gap-1 text-[11px] font-semibold ${active ? "text-orange" : "text-slate-ink"}`}
              >
                <Icon className="size-5" strokeWidth={active ? 2.4 : 1.8} aria-hidden />
                {t(k)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
