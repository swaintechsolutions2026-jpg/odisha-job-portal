import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page grid min-h-[60dvh] place-items-center py-16 text-center">
      <div>
        <p className="font-display text-[64px] font-extrabold text-orange/30">404</p>
        <h1 className="text-[26px] font-extrabold">This page isn&apos;t available</h1>
        <p className="mt-2 text-[15px] text-slate-ink">The job may have closed, or the link may be incorrect.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/jobs" className="inline-flex h-12 items-center rounded-xl bg-navy px-5 font-semibold text-white">Find jobs</Link>
          <Link href="/" className="inline-flex h-12 items-center rounded-xl px-5 font-semibold ring-1 ring-line">Home</Link>
        </div>
      </div>
    </div>
  );
}
