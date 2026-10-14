import type { Metadata } from "next";
import { ProsePage } from "@/components/Prose";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <ProsePage eyebrow="Legal" title="Privacy policy" pending="The data-controller's legal name, address, contact email, retention periods and grievance officer details must be confirmed by the owner before launch.">
      <h2>Information we collect</h2>
      <ul>
        <li>Account details you provide: name, phone, email, district, qualification, skills and experience.</li>
        <li>Resumes you choose to upload, stored in private storage.</li>
        <li>Applications you submit and their status history.</li>
        <li>Basic technical data needed to run the site securely.</li>
      </ul>
      <h2>How we use it</h2>
      <p>To operate your account, share your application with the named recruiter or employer of the job you applied to (with your consent), show you your application status, and keep the platform secure.</p>
      <h2>What we never ask for at application stage</h2>
      <p>Aadhaar, PAN, bank account credentials, OTPs or application fees.</p>
      <h2>Your choices</h2>
      <p>You can update your profile, withdraw an application, and request deletion of your account and data, subject to legally required retention.</p>
      <h2>Resume privacy</h2>
      <p>Resumes are never public. They can be accessed only by you and authorised administrators through short-lived secure links.</p>
    </ProsePage>
  );
}
