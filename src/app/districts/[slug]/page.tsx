import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobsExplorer } from "@/components/JobsExplorer";
import { PageHero } from "@/components/ui";
import { getPublicJobs } from "@/lib/jobs";
import { readFilters, type SearchParams } from "@/lib/params";
import { DISTRICTS, getDistrict } from "@/lib/taxonomy";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return DISTRICTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const d = getDistrict((await params).slug);
  if (!d) return {};
  return {
    title: `Jobs in ${d.en} District, Odisha`,
    description: `Find jobs in ${d.en} district including ${d.cities.join(", ")}. Filter by category, qualification and salary.`,
    alternates: { canonical: `/districts/${d.slug}` },
  };
}

export default async function DistrictPage({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const d = getDistrict((await params).slug);
  if (!d) notFound();
  const initial = await readFilters(searchParams);
  const { jobs, isDemo } = getPublicJobs();
  return (
    <>
      <PageHero eyebrow={`${d.en} · ${d.or}`} title={`Jobs in ${d.en} district`} sub={`District HQ: ${d.hq}. Popular locations: ${d.cities.join(", ")}.`} />
      <JobsExplorer jobs={jobs} isDemo={isDemo} initial={initial} locked={{ district: d.slug }} />
    </>
  );
}
