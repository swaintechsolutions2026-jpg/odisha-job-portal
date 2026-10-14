"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { getPublicJobs } from "@/lib/jobs";
import { useSavedJobs } from "@/lib/saved";
import { JobCard } from "./JobCard";

export function SavedJobs() {
  const { saved } = useSavedJobs();
  const jobs = getPublicJobs().jobs.filter((j) => saved.includes(j.id));
  return (
    <div className="container-page py-10">
      {jobs.length === 0 ? (
        <div className="rounded-3xl border border-line bg-white px-6 py-14 text-center shadow-soft">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-orange-50 text-orange"><Bookmark className="size-6" /></span>
          <h2 className="mt-5 text-xl font-bold">No saved jobs yet</h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-slate-ink">Tap the bookmark on any job card to keep it here for later.</p>
          <Link href="/jobs" className="mt-6 inline-flex h-12 items-center rounded-xl bg-navy px-5 font-semibold text-white">Find jobs</Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{jobs.map((j) => <JobCard key={j.id} job={j} />)}</div>
      )}
    </div>
  );
}
