import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <ProsePage eyebrow="Legal" title="Terms of use" pending="The operating entity's legal name, governing jurisdiction, fee/refund policy and dispute-resolution terms must be confirmed by the owner.">
      <h2>About the service</h2>
      <p>Odisha Job Alert provides job information and, for some listings, a way to apply through this website. Employers and recruiters make all hiring decisions.</p>
      <h2>No guarantee of employment</h2>
      <p>We do not guarantee interviews, selection, salary or joining. Listing details come from employers, agencies or official notices and are checked before publishing, but may change.</p>
      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate information in your profile and applications.</li>
        <li>Use the site lawfully and do not post false or misleading content.</li>
        <li>Keep your login details private.</li>
      </ul>
      <h2>Government recruitment</h2>
      <p>For government notices we link to official websites. Applications, fees (if any) and results are handled solely by the official recruiting body.</p>
    </ProsePage>
  );
}
