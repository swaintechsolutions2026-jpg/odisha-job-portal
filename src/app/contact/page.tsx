import type { Metadata } from "next";
import { Clock, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { PageHero } from "@/components/ui";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Call or WhatsApp Odisha Job Alert at +91 95565 02571.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  const channels: { Icon: React.ComponentType<{ className?: string }>; t: string; v: string; href: string; ext: boolean }[] = [
    { Icon: Phone, t: "Call", v: SITE.phoneDisplay, href: SITE.phoneTel, ext: false },
    { Icon: WhatsAppIcon, t: "WhatsApp", v: SITE.phoneDisplay, href: whatsappLink("Hello Odisha Job Alert, I have a question."), ext: true },
    { Icon: InstagramIcon, t: "Instagram", v: SITE.instagramHandle, href: SITE.instagramUrl, ext: true },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to Odisha Job Alert" sub="Questions about a listing, the application process, or a suspicious job post — reach us by phone or WhatsApp." />
      <div className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3">
          {channels.map(({ Icon, t, v, href, ext }) => (
            <a key={t} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:border-teal/40 hover:shadow-lift">
              <span className="grid size-12 place-items-center rounded-xl bg-teal-50 text-teal"><Icon className="size-5" /></span>
              <span><span className="block text-[13px] text-slate-ink">{t}</span><span className="block text-[16px] font-bold">{v}</span></span>
            </a>
          ))}
          <div className="flex items-start gap-3 rounded-2xl bg-mist p-5 ring-1 ring-line">
            <Clock className="mt-0.5 size-5 shrink-0 text-navy" />
            <p className="text-[14px] leading-6 text-slate-ink">Support hours, office address and contact email will be published here once confirmed by the owner.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
