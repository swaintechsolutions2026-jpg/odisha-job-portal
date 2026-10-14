import { FILTER_KEYS, type JobFilters } from "./jobs";

export type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function readFilters(searchParams: SearchParams): Promise<JobFilters> {
  const sp = await searchParams;
  const out: JobFilters = {};
  for (const k of FILTER_KEYS) {
    const v = sp[k];
    const s = Array.isArray(v) ? v[0] : v;
    if (s) out[k] = s;
  }
  return out;
}
