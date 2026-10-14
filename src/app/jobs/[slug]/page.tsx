import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobDetail } from "@/components/JobDetail";
import { getJobBySlug, getPublicJobs } from "@/lib/jobs";
import { getDistrict } from "@/lib/taxonomy";
import { SITE } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const job = getJobBySlug((await params).slug);
  if (!job) return {};
  return {
    title: `${job.title} — ${job.city}${job.isDemo ? " (Demo)" : ""}`,
    description: `${job.title} in ${job.city}, Odisha. ${job.responsibilities[0]}.`,
    alternates: { canonical: `/jobs/${job.slug}` },
    // Demo listings are previews, never indexed.
    robots: job.isDemo ? { index: false, follow: true } : undefined,
  };
}

export default async function JobPage({ params }: { params: Params }) {
  const job = getJobBySlug((await params).slug);
  if (!job) notFound();
  const related = getPublicJobs().jobs.filter((j) => j.id !== job.id && (j.categorySlug === job.categorySlug || j.districtSlug === job.districtSlug)).slice(0, 3);

  // JobPosting structured data only for genuinely verified, published, non-demo listings.
  const structured = !job.isDemo && job.employerVerified
    ? {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: job.responsibilities.join(". "),
        datePosted: job.publishedAt,
        ...(job.lastDate ? { validThrough: job.lastDate } : {}),
        employmentType: job.employmentType.toUpperCase().replace("-", "_"),
        hiringOrganization: { "@type": "Organization", name: job.employer },
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: job.city, addressRegion: getDistrict(job.districtSlug)?.en ?? "Odisha", addressCountry: "IN" },
        },
        ...(job.salaryMin
          ? { baseSalary: { "@type": "MonetaryAmount", currency: "INR", value: { "@type": "QuantitativeValue", minValue: job.salaryMin, maxValue: job.salaryMax ?? job.salaryMin, unitText: "MONTH" } } }
          : {}),
        url: `${SITE.url}/jobs/${job.slug}`,
      }
    : null;

  return (
    <>
      {structured && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />}
      <JobDetail job={job} related={related} />
    </>
  );
}
