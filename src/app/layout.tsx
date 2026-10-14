import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Odisha Job Alert — Explore Jobs Across Odisha",
    template: "%s · Odisha Job Alert",
  },
  description:
    "Discover career opportunities across Odisha by district, qualification, experience and job category. An independent recruitment-information platform.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Odisha Job Alert",
    title: "Odisha Job Alert — Explore Jobs Across Odisha",
    description: "Search jobs across all 30 Odisha districts by category, qualification and experience.",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1931",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Oriya:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-dvh">
        <LanguageProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="pb-20 lg:pb-0">{children}</main>
          <SiteFooter />
          <MobileBottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
