import type { Metadata } from "next";
import { JobsExplorer } from "@/components/JobsExplorer";
import { PageHero } from "@/components/ui";
import { getPublicJobs } from "@/lib/jobs";
import { readFilters, type SearchParams } from "@/lib/params";

export const metadata: Metadata = {
  title: "Find Jobs in Odisha",
  description: "Search published jobs across Odisha by district, category, qualification, salary, experience and shift.",
  alternates: { canonical: "/jobs" },
};

export default async function JobsPage({ searchParams }: { searchParams: SearchParams }) {
  const initial = await readFilters(searchParams);
  const { jobs, isDemo } = getPublicJobs();
  return (
    <>
      <PageHero eyebrow="Job search" title="Find jobs across Odisha" sub="Filter by district, category, qualification, salary, experience, employment type and shift." />
      <JobsExplorer jobs={jobs} isDemo={isDemo} initial={initial} />
    </>
  );
}
