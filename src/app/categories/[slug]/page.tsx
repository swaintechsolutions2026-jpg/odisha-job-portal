import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { JobsExplorer } from "@/components/JobsExplorer";
import { PageHero } from "@/components/ui";
import { getPublicJobs } from "@/lib/jobs";
import { readFilters, type SearchParams } from "@/lib/params";
import { CATEGORIES, getCategory } from "@/lib/taxonomy";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const c = getCategory((await params).slug);
  if (!c) return {};
  return {
    title: `${c.en} Jobs in Odisha`,
    description: `${c.blurb} Browse ${c.en.toLowerCase()} jobs across Odisha by district, qualification and salary.`,
    alternates: { canonical: `/categories/${c.slug}` },
  };
}

export default async function CategoryPage({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const { slug } = await params;
  if (slug === "government-notices") redirect("/government-jobs");
  const c = getCategory(slug);
  if (!c) notFound();
  const initial = await readFilters(searchParams);
  const { jobs, isDemo } = getPublicJobs();
  return (
    <>
      <PageHero eyebrow="Category" title={`${c.en} jobs in Odisha`} sub={c.blurb} />
      <JobsExplorer jobs={jobs} isDemo={isDemo} initial={initial} locked={{ category: c.slug }} />
    </>
  );
}
