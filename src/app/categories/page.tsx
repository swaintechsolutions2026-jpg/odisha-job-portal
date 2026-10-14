import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { CategoryGrid } from "@/components/Grids";

export const metadata: Metadata = {
  title: "Job Categories",
  description: "Browse Odisha jobs by category — warehouse, delivery, security, data entry, healthcare, engineering, ITI/Diploma and more.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <>
      <PageHero eyebrow="Categories" title="Browse jobs by category" sub="Seventeen fields covering entry-level, trade, technical and graduate roles across Odisha." />
      <div className="container-page py-10"><CategoryGrid /></div>
    </>
  );
}
