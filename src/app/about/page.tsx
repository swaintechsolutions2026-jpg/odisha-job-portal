import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About", description: "Odisha Job Alert is an independent recruitment-information platform for job seekers across Odisha.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <ProsePage eyebrow="About" title="About Odisha Job Alert" sub="From an Instagram job-information channel to a structured, transparent career platform for Odisha.">
      <h2>Who we are</h2>
      <p>Odisha Job Alert started on Instagram as {SITE.instagramHandle} under the social branding “{SITE.socialBranding}”, sharing job information with candidates across Odisha. This website is the next step: a searchable platform where every published listing shows where it came from and how to apply.</p>
      <h2>What we do</h2>
      <ul>
        <li>Publish job opportunities across all 30 districts of Odisha, organised by category, district and qualification.</li>
        <li>Check the employer or authorised agency, salary type, role and application route before a listing goes live.</li>
        <li>Link government recruitment notices to their official source — you apply on the official website.</li>
        <li>Offer candidate accounts so site-managed applications can be tracked with a reference ID.</li>
      </ul>
      <h2>What we are not</h2>
      <p>Odisha Job Alert is an independent recruitment-information platform. We are not a government website, we are not the employer for listed jobs unless clearly stated, and we do not guarantee interviews or selection.</p>
      <h2>Who we serve</h2>
      <p>Candidates who are 10th pass, +2 pass, ITI and Diploma holders, graduates and engineers — freshers and experienced professionals alike.</p>
    </ProsePage>
  );
}
