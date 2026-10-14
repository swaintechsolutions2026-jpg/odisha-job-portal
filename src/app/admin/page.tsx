import type { Metadata } from "next";
import { ClipboardCheck, Database, FileExclamationPoint, Lock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui";
import { PUBLISHED_JOBS, RESEARCH_SUMMARY } from "@/lib/jobs";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

export default function AdminPage() {
  const stats = [
    { Icon: ShieldCheck, l: "Published verified jobs", v: PUBLISHED_JOBS.length },
    { Icon: Database, l: "Poster sources imported (held)", v: RESEARCH_SUMMARY.posters },
    { Icon: ClipboardCheck, l: "Role claims awaiting verification", v: RESEARCH_SUMMARY.roleClaims },
    { Icon: FileExclamationPoint, l: "Flagged high-risk claims", v: RESEARCH_SUMMARY.highRisk },
  ];
  return (
    <>
      <PageHero eyebrow="Restricted" title="Admin dashboard" sub="Job management, verification queue, candidate applications and website content — protected by server-side admin roles." />
      <div className="container-page py-10">
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-dashed border-orange/50 bg-orange-50 p-4 text-[14px] text-navy">
          <Lock className="mt-0.5 size-4 shrink-0 text-orange" />
          <p>Admin sign-in and editing tools are not yet enabled, so no records can be changed here. The figures below are counts from the owner-supplied research file — every imported claim is <strong>NOT VERIFIED</strong> and <strong>HOLD — NOT PUBLISHED</strong>.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ Icon, l, v }) => (
            <div key={l} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <Icon className="size-5 text-teal" />
              <p className="mt-4 font-display text-[34px] leading-none font-extrabold">{v}</p>
              <p className="mt-2 text-[13.5px] text-slate-ink">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
