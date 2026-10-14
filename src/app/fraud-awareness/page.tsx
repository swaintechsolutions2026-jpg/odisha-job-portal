import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Fraud Awareness", description: "How to recognise fake job offers, fee scams and document fraud.", alternates: { canonical: "/fraud-awareness" } };

export default function FraudPage() {
  return (
    <ProsePage eyebrow="Safety" title="Fraud awareness" sub="Fake job offers are common. These warning signs help you stay safe.">
      <h2>Warning signs of a fake job</h2>
      <ul>
        <li>You are asked to pay a registration, training, uniform, security-deposit or “confirmation” fee.</li>
        <li>The offer uses a big company or government logo but gives no official notice, website or verifiable contact.</li>
        <li>“Direct joining” or selection without any interview or document check.</li>
        <li>Pressure to decide immediately or to keep the offer secret.</li>
        <li>Requests for OTPs, bank passwords, ATM PINs or UPI approvals.</li>
      </ul>
      <h2>Government jobs</h2>
      <p>Genuine government recruitment is announced through an official notification with an advertisement number, published on the department&apos;s or commission&apos;s official website. Apply only on that official website. Social-media posters are not official notices.</p>
      <h2>Protect your documents</h2>
      <p>Do not share Aadhaar, PAN, bank passbook or certificates at the first enquiry stage. Share documents only after you have confirmed the employer, and only through the official or secure channel the verified employer specifies.</p>
      <h2>Report a suspicious post</h2>
      <p>If you see a suspicious job post using the Odisha Job Alert name, contact us on {SITE.phoneDisplay}. For financial fraud, report it at the national cyber-crime portal (cybercrime.gov.in) or call 1930.</p>
    </ProsePage>
  );
}
