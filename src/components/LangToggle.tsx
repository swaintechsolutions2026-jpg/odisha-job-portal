"use client";

import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function LangToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1 rounded-full p-1 text-xs font-semibold ${dark ? "bg-white/10 text-white" : "bg-mist text-navy ring-1 ring-line"}`}
    >
      <Languages className="ml-1.5 size-3.5 opacity-60" aria-hidden />
      {(["en", "or"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 transition ${lang === l ? "bg-orange text-white shadow-sm" : "opacity-70 hover:opacity-100"}`}
        >
          {l === "en" ? "EN" : "ଓଡ଼ିଆ"}
        </button>
      ))}
    </div>
  );
}
