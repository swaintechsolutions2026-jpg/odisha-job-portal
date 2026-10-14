import type { Metadata } from "next";
import { JobsExplorer } from "@/components/JobsExplorer";
import { PageHero } from "@/components/ui";
import { getPublicJobs } from "@/lib/jobs";
import { readFilters, type SearchParams } from "@/lib/params";

export const metadata: Metadata = {
  title: "Private Jobs in Odisha",
  description: "Private-sector and agency roles across Odisha, published after verification.",
  alternates: { canonical: "/private-jobs" },
};

export default async function PrivateJobsPage({ searchParams }: { searchParams: SearchParams }) {
  const initial = await readFilters(searchParams);
  const { jobs, isDemo } = getPublicJobs();
  return (
    <>
      <PageHero eyebrow="Private sector" title="Private jobs in Odisha" sub="Roles with private employers and authorised recruitment agencies. Verified listings name the actual employer and employment relationship." />
      <JobsExplorer jobs={jobs.filter((j) => j.sector === "private")} isDemo={isDemo} initial={initial} locked={{ sector: "private" }} />
    </>
  );
}
