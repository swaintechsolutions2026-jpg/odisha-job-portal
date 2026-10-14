import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { DistrictGrid } from "@/components/Grids";

export const metadata: Metadata = {
  title: "Jobs by Odisha District",
  description: "Find jobs in all 30 districts of Odisha, from Khordha and Cuttack to Sundargarh, Ganjam and Mayurbhanj.",
  alternates: { canonical: "/districts" },
};

export default function DistrictsPage() {
  return (
    <>
      <PageHero eyebrow="All 30 districts" title="Jobs by Odisha district" sub="Districts and cities are listed separately — for example, Bhubaneswar is in Khordha and Rourkela is in Sundargarh." />
      <div className="container-page py-10"><DistrictGrid /></div>
    </>
  );
}
