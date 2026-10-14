import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { SavedJobs } from "@/components/SavedJobs";

export const metadata: Metadata = { title: "Saved Jobs", robots: { index: false } };

export default function SavedPage() {
  return (
    <>
      <PageHero eyebrow="Your shortlist" title="Saved jobs" sub="Jobs you save are kept on this device. Once candidate accounts launch, saves sync to your profile." />
      <SavedJobs />
    </>
  );
}
