import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = { title: "Disclaimer", alternates: { canonical: "/disclaimer" } };

export default function DisclaimerPage() {
  return (
    <ProsePage eyebrow="Legal" title="Disclaimer" pending="Final wording to be approved by the owner and legal adviser.">
      <h2>Independent platform</h2>
      <p>Odisha Job Alert is an independent recruitment-information platform. It is not a government website and is not affiliated with, endorsed by, or acting for any government department, bank or company unless a specific verified listing states otherwise.</p>
      <h2>Brand names and logos</h2>
      <p>Company or institution names that appear in job information identify the reported employer only. Their appearance does not imply partnership or authorisation.</p>
      <h2>Accuracy</h2>
      <p>We check listings before publishing, but employers may change vacancies, salaries or deadlines. Always confirm details with the employer or the official notification before acting.</p>
      <h2>External links</h2>
      <p>Official application links lead to third-party websites that we do not control.</p>
    </ProsePage>
  );
}
