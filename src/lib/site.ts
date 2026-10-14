export const SITE = {
  name: "ODISHA JOB ALERT",
  shortName: "OJA",
  tagline: "Opportunities Across Odisha. Apply With Confidence.",
  socialBranding: "ODISHA JOB KING",
  phoneDisplay: "+91 95565 02571",
  phoneTel: "tel:+919556502571",
  whatsappBase: "https://wa.me/919556502571",
  instagramHandle: "@chandannn_babu",
  instagramUrl: "https://www.instagram.com/chandannn_babu/",
  url: process.env.URL ?? "https://odisha-job-portal.netlify.app",
} as const;

/** Builds a wa.me link with a short, non-sensitive context message. */
export function whatsappLink(message?: string) {
  if (!message) return SITE.whatsappBase;
  return `${SITE.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function jobEnquiryMessage(ref: string, title: string) {
  return `Hello Odisha Job Alert, I have a question about job reference ${ref} (${title}).`;
}

export function formatSalary(min?: number, max?: number) {
  const f = (n: number) => `₹${n.toLocaleString("en-IN")}`;
  if (min && max && min !== max) return `${f(min)} – ${f(max)}`;
  if (min || max) return f((min ?? max)!);
  return "Salary not confirmed";
}

export function formatDate(iso: string, locale: "en" | "or" = "en") {
  return new Date(iso).toLocaleDateString(locale === "or" ? "or-IN" : "en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
