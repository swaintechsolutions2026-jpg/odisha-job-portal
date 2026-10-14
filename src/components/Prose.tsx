import { TriangleAlert } from "lucide-react";
import { PageHero } from "./ui";

export function ProsePage({ eyebrow, title, sub, pending, children }: {
  eyebrow?: string; title: string; sub?: string; pending?: string; children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} sub={sub} />
      <div className="container-page py-10">
        <article className="prose-legal mx-auto max-w-3xl rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-10">
          {pending && (
            <div role="note" className="mb-8 flex items-start gap-3 rounded-2xl border border-dashed border-orange/50 bg-orange-50 p-4 text-[14px] text-navy">
              <TriangleAlert className="mt-0.5 size-4 shrink-0 text-orange" />
              <p className="!text-navy"><strong>Draft — pending owner/legal review.</strong> {pending}</p>
            </div>
          )}
          {children}
        </article>
      </div>
    </>
  );
}
