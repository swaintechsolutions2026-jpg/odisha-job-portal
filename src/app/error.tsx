"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="container-page grid min-h-[60dvh] place-items-center py-16 text-center">
      <div>
        <h1 className="text-[26px] font-extrabold">Something went wrong</h1>
        <p className="mt-2 text-[15px] text-slate-ink">Please try again. If the problem continues, contact us on WhatsApp.</p>
        <button type="button" onClick={reset} className="mt-6 h-12 rounded-xl bg-orange px-6 font-semibold text-white">Try again</button>
      </div>
    </div>
  );
}
