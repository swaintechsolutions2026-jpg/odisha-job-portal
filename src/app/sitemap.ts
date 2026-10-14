import type { MetadataRoute } from "next";
import { PUBLISHED_JOBS } from "@/lib/jobs";
import { SITE } from "@/lib/site";
import { CATEGORIES, DISTRICTS } from "@/lib/taxonomy";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/jobs", "/private-jobs", "/government-jobs", "/categories", "/districts", "/about", "/how-it-works", "/contact", "/fraud-awareness", "/privacy", "/terms", "/disclaimer"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "daily" as const })),
    ...CATEGORIES.filter((c) => c.slug !== "government-notices").map((c) => ({ url: `${SITE.url}/categories/${c.slug}` })),
    ...DISTRICTS.map((d) => ({ url: `${SITE.url}/districts/${d.slug}` })),
    // Only genuinely published, verified jobs — never demo listings.
    ...PUBLISHED_JOBS.map((j) => ({ url: `${SITE.url}/jobs/${j.slug}`, lastModified: j.verifiedAt })),
  ];
}
