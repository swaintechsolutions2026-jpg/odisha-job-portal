import Link from "next/link";
import { Lock } from "lucide-react";
import { Logo } from "./Icons";

export interface Field { name: string; label: string; type?: string; autoComplete?: string }

/** Account form shell. Submission stays disabled until candidate accounts are connected. */
export function AuthCard({ title, sub, fields, submit, footer }: {
  title: string; sub: string; fields: Field[]; submit: string; footer: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[calc(100dvh-4rem)] overflow-hidden bg-navy px-4 py-10 sm:py-16">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 -right-20 size-[460px] rounded-full bg-orange/20 blur-3xl" />
      <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-lift sm:p-8">
        <Logo />
        <h1 className="mt-6 text-[26px] font-extrabold">{title}</h1>
        <p className="mt-1 text-[14.5px] text-slate-ink">{sub}</p>

        <div role="status" className="mt-5 flex items-start gap-3 rounded-2xl bg-teal-50 p-4 text-[13.5px] leading-6 text-navy ring-1 ring-teal/20">
          <Lock className="mt-0.5 size-4 shrink-0 text-teal" />
          <p>Secure candidate accounts are being connected. Until then this form is disabled and nothing is submitted. You can still browse, save jobs on this device and enquire on WhatsApp.</p>
        </div>

        <form className="mt-5 space-y-4" aria-disabled="true">
          <fieldset disabled className="space-y-4">
            {fields.map((f) => (
              <label key={f.name} className="block">
                <span className="mb-1.5 block text-[13px] font-semibold">{f.label}</span>
                <input name={f.name} type={f.type ?? "text"} autoComplete={f.autoComplete} className="input-base disabled:bg-mist" />
              </label>
            ))}
            <button type="submit" className="h-12 w-full rounded-xl bg-orange font-semibold text-white disabled:opacity-50">{submit}</button>
          </fieldset>
        </form>
        <div className="mt-5 text-center text-[14px] text-slate-ink">{footer}</div>
        <p className="mt-4 text-center text-[12.5px] text-slate-ink">
          <Link href="/jobs" className="font-semibold text-navy hover:underline">Continue browsing jobs →</Link>
        </p>
      </div>
    </div>
  );
}
