import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, FileCheck, Landmark, ScrollText, ShieldAlert } from "lucide-react";
import { EmptyState, PageHero } from "@/components/ui";
import { getGovernmentNotices } from "@/lib/jobs";
import { formatDate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Official Government Recruitment Notices",
  description: "Government recruitment notices for Odisha, listed only with a verifiable official source. Apply on the official website.",
  alternates: { canonical: "/government-jobs" },
};

export default function GovernmentJobsPage() {
  const notices = getGovernmentNotices();
  return (
    <>
      <PageHero eyebrow="Official notices only" title="Government recruitment notices" sub="We list a government vacancy only when its official notification, notification number and official application website can be verified. Applications always happen on the official site." />
      <div className="container-page py-10">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            { Icon: FileCheck, t: "Official source required", b: "Every notice links to the authentic recruiting body's notification or PDF." },
            { Icon: ExternalLink, t: "Apply on the official site", b: "We never accept applications or fees for government posts." },
            { Icon: ShieldAlert, t: "Logos aren't proof", b: "Posters using seals or department names stay hidden until officially confirmed." },
          ].map(({ Icon, t, b }) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
              <Icon className="size-5 text-teal" aria-hidden />
              <h2 className="mt-3 text-[16px] font-bold">{t}</h2>
              <p className="mt-1 text-[14px] leading-6 text-slate-ink">{b}</p>
            </div>
          ))}
        </div>

        {notices.length === 0 ? (
          <EmptyState
            title="No official notices published yet"
            body="Government-branded job claims are being checked against official sources. Only confirmed notices will appear here — with a direct link to the official recruitment website."
          />
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {notices.map((n) => (
              <li key={n.id} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <Landmark className="size-5 text-teal" />
                  <div>
                    <Link href={`/jobs/${n.slug}`} className="text-[17px] font-bold hover:text-orange">{n.title}</Link>
                    <p className="text-[13.5px] text-slate-ink">{n.employer}</p>
                    {n.lastDate && <p className="mt-2 text-[13px]"><ScrollText className="mr-1 inline size-3.5" />Last date: {formatDate(n.lastDate)}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
