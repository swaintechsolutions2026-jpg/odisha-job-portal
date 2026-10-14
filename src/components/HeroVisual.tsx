import { BadgeCheck, Bell, MapPin, SlidersHorizontal, Search } from "lucide-react";

/** Decorative job-search interface composition for the desktop hero (no real data). */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[520px] select-none">
      <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-teal/25 via-transparent to-orange/25 blur-2xl" />

      <div className="relative rounded-[28px] bg-white/95 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-orange/70" />
            <span className="size-2.5 rounded-full bg-teal/60" />
            <span className="size-2.5 rounded-full bg-line" />
          </div>
          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-orange-600">ILLUSTRATION</span>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl bg-mist px-3.5 py-3 text-[13px] text-slate-ink">
          <Search className="size-4" /> Data entry · Bhubaneswar
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Khordha", "+2 Pass", "Full-time", "Day shift"].map((c, i) => (
            <span key={c} className={`rounded-full px-2.5 py-1 text-[11.5px] font-medium ${i === 0 ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-line"}`}>{c}</span>
          ))}
          <span className="ml-auto grid size-7 place-items-center rounded-lg bg-mist"><SlidersHorizontal className="size-3.5 text-navy" /></span>
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            { w1: "w-36", w2: "w-24", tone: "bg-teal-50 text-teal" },
            { w1: "w-44", w2: "w-20", tone: "bg-orange-50 text-orange" },
            { w1: "w-32", w2: "w-28", tone: "bg-mist text-navy" },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl border border-line p-3.5">
              <span className={`grid size-10 place-items-center rounded-xl ${r.tone}`}><MapPin className="size-4" /></span>
              <div className="flex-1 space-y-2">
                <div className={`h-2.5 rounded-full bg-navy/80 ${r.w1}`} />
                <div className={`h-2 rounded-full bg-navy/15 ${r.w2}`} />
              </div>
              <div className="h-7 w-16 rounded-lg bg-mist" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-lift ring-1 ring-black/5 animate-rise [animation-delay:300ms]">
        <span className="grid size-10 place-items-center rounded-xl bg-teal text-white"><BadgeCheck className="size-5" /></span>
        <div>
          <p className="text-[12.5px] font-bold text-navy">Source checked</p>
          <p className="text-[11px] text-slate-ink">Verified before publishing</p>
        </div>
      </div>
      <div className="absolute -top-5 -right-5 flex items-center gap-2.5 rounded-2xl bg-navy p-3 pr-4 text-white shadow-lift ring-1 ring-white/15 animate-rise [animation-delay:500ms]">
        <span className="grid size-8 place-items-center rounded-lg bg-orange"><Bell className="size-4" /></span>
        <p className="text-[12px] font-semibold">Status tracking</p>
      </div>
    </div>
  );
}
