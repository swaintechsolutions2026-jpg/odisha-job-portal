import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = { title: "How It Works", description: "How to search, check and apply for jobs safely on Odisha Job Alert.", alternates: { canonical: "/how-it-works" } };

export default function HowItWorksPage() {
  return (
    <ProsePage eyebrow="Guide" title="How Odisha Job Alert works" sub="Search, check the source, apply the right way and track your application.">
      <h2>1. Search</h2>
      <p>Use the search bar and filters to narrow jobs by district, city, category, qualification, salary, experience, employment type, sector, publish date and shift. Your filters stay in the page address, so you can share or bookmark a search.</p>
      <h2>2. Check the details</h2>
      <p>Every job page shows the employer or recruiter, location, salary and salary type, eligibility, working hours, and the recruitment source. Details that haven&apos;t been confirmed are marked as such.</p>
      <h2>3. Apply the right way</h2>
      <ul>
        <li><strong>Apply Now</strong> — the employer accepts applications through this website. You&apos;ll need a free candidate account.</li>
        <li><strong>Ask About This Job</strong> — send a WhatsApp enquiry quoting the job reference; the listing explains where the actual application happens.</li>
        <li><strong>Apply on Official Site</strong> — for government notices, you are sent to the official recruitment website.</li>
      </ul>
      <h2>4. Track your application</h2>
      <p>Applications made on this website receive a unique reference ID. Your dashboard shows the real status set by the recruiting team: Submitted, Under Review, Shortlisted, Interview Scheduled, Selected, Not Selected or Closed.</p>
      <h2>How listings are verified</h2>
      <p>Before publishing, the team confirms the actual employer or authorised agency, the role, location, salary type, qualification, vacancy count where available, working hours and application route. Social-media posters are treated as unverified claims until this check is complete.</p>
    </ProsePage>
  );
}
