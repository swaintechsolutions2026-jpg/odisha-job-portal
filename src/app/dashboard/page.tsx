import type { Metadata } from "next";
import Link from "next/link";
import { Bell, Bookmark, FileText, Lock, Settings, UserRound } from "lucide-react";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Candidate Dashboard", robots: { index: false, follow: false } };

const MODULES = [
  { Icon: UserRound, t: "Profile, qualification & skills", b: "Your details, education and experience in one place." },
  { Icon: FileText, t: "Resume & applications", b: "Private resume upload, reference IDs and real status updates." },
  { Icon: Bookmark, t: "Saved jobs", b: "Your shortlist, synced across devices." },
  { Icon: Bell, t: "Job notifications", b: "Alerts for new verified jobs matching your district and skills." },
  { Icon: Settings, t: "Account settings", b: "Password, language, privacy and data-deletion requests." },
];

export default function DashboardPage() {
  return (
    <>
      <PageHero eyebrow="Candidate portal" title="Your dashboard" sub="Track applications and manage your profile — available once you sign in." />
      <div className="container-page py-10">
        <div className="mb-6 flex items-start gap-3 rounded-2xl bg-teal-50 p-4 text-[14px] text-navy ring-1 ring-teal/20">
          <Lock className="mt-0.5 size-4 shrink-0 text-teal" />
          <p>Sign-in is required to view a dashboard. Secure accounts are being connected; no candidate data is shown on this page. <Link href="/saved" className="font-semibold text-teal-700 underline">View jobs saved on this device</Link>.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ Icon, t, b }) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <Icon className="size-5 text-teal" />
              <h2 className="mt-3 text-[16px] font-bold">{t}</h2>
              <p className="mt-1 text-[14px] leading-6 text-slate-ink">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
