export default function Loading() {
  return (
    <div className="container-page py-10" aria-busy="true" aria-label="Loading">
      <div className="h-40 animate-pulse rounded-3xl bg-white" />
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-52 animate-pulse rounded-2xl bg-white" />)}
      </div>
    </div>
  );
}
