import {
  Warehouse, Truck, ShieldCheck, Cctv, Keyboard, BriefcaseBusiness, Landmark, Hospital, Hotel,
  HardHat, Factory, Zap, Sparkles, Car, Wrench, GraduationCap, ScrollText, type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/taxonomy";

const MAP = {
  warehouse: Warehouse, truck: Truck, shield: ShieldCheck, cctv: Cctv, keyboard: Keyboard,
  briefcase: BriefcaseBusiness, landmark: Landmark, hospital: Hospital, hotel: Hotel, hardhat: HardHat,
  factory: Factory, zap: Zap, sparkles: Sparkles, car: Car, wrench: Wrench, graduation: GraduationCap, scroll: ScrollText,
} as const;

export function CategoryIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = MAP[name];
  return <Icon aria-hidden {...props} />;
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.92 9.92 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.31-1.96 1.36-.5.05-1.13.07-1.83-.12-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.59.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.62-.07.17-.2.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.67.79 1.96.93.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid size-9 place-items-center rounded-xl bg-navy text-white shadow-soft ring-1 ring-white/10">
        <span className="font-display text-[11px] font-extrabold tracking-wider">OJA</span>
        <span className="absolute -top-1 -right-1 size-3 rounded-full border-2 border-white bg-orange" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[15px] font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
          ODISHA JOB ALERT
        </span>
        <span className={`mt-1 block text-[10.5px] font-medium tracking-[0.14em] uppercase ${light ? "text-white/60" : "text-slate-ink"}`}>
          Opportunities across Odisha
        </span>
      </span>
    </span>
  );
}
