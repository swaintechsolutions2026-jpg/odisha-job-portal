import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/AuthCard";

export const metadata: Metadata = { title: "Login", robots: { index: false } };

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      sub="Log in to track applications and manage your profile."
      fields={[{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "password", label: "Password", type: "password", autoComplete: "current-password" }]}
      submit="Log in"
      footer={<>New here? <Link href="/signup" className="font-semibold text-orange">Create an account</Link> · <Link href="/forgot-password" className="font-semibold text-navy">Forgot password?</Link></>}
    />
  );
}
