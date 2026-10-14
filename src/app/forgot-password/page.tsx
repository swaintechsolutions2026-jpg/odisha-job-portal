import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/AuthCard";

export const metadata: Metadata = { title: "Reset Password", robots: { index: false } };

export default function ForgotPage() {
  return (
    <AuthCard
      title="Reset your password"
      sub="We'll email you a secure link to set a new password."
      fields={[{ name: "email", label: "Email", type: "email", autoComplete: "email" }]}
      submit="Send reset link"
      footer={<Link href="/login" className="font-semibold text-orange">Back to login</Link>}
    />
  );
}
