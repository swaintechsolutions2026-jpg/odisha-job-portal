import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/AuthCard";

export const metadata: Metadata = { title: "Create Account", robots: { index: false } };

export default function SignupPage() {
  return (
    <AuthCard
      title="Create your candidate account"
      sub="Apply online, upload a private resume and follow your application status."
      fields={[
        { name: "name", label: "Full name", autoComplete: "name" },
        { name: "email", label: "Email", type: "email", autoComplete: "email" },
        { name: "phone", label: "Mobile number", type: "tel", autoComplete: "tel" },
        { name: "password", label: "Password", type: "password", autoComplete: "new-password" },
      ]}
      submit="Create account"
      footer={<>Already registered? <Link href="/login" className="font-semibold text-orange">Log in</Link></>}
    />
  );
}
