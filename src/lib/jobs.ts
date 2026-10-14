/**
 * Job listing data access — MILESTONE 1 STUB.
 *
 * PUBLISHED_JOBS is intentionally empty: none of the imported Instagram poster
 * claims have been verified, so nothing is live. DEMO_JOBS are fictional sample
 * listings used only to preview the interface; every one is flagged `isDemo`
 * and rendered with a DEMO label. Set NEXT_PUBLIC_SHOW_DEMO_LISTINGS=false to
 * hide them. Milestone 2 replaces this module with Netlify Database queries.
 */

export type JobSector = "private" | "government";
export type ApplicationMode = "site" | "official" | "enquiry";
export type SalaryType = "per-month gross" | "per-month take-home" | "CTC" | "stipend" | "daily" | "unknown";

export interface Job {
  id: string;
  ref: string;
  slug: string;
  title: string;
  titleOr?: string;
  categorySlug: string;
  districtSlug: string;
  city: string;
  employer: string;
  employerVerified: boolean;
  recruiterNote: string;
  sector: JobSector;
  employmentType: "Full-time" | "Part-time" | "Contract";
  qualifications: string[];
  experience: "fresher" | "1-2" | "3-5" | "5+";
  salaryMin?: number;
  salaryMax?: number;
  salaryType: SalaryType;
  shift: "Day" | "Night" | "Rotational" | "General";
  workingHours: string;
  vacancies?: number;
  responsibilities: string[];
  benefits: string[];
  applicationMode: ApplicationMode;
  applicationSteps: string[];
  officialUrl?: string;
  lastDate?: string;
  source: string;
  publishedAt: string;
  verifiedAt: string;
  isDemo: boolean;
}

const daysAgo = (n: number) => new Date(Date.now() - n * 86_400_000).toISOString();

export const PUBLISHED_JOBS: Job[] = [];

const DEMO_COMMON = {
  employer: "Sample Employer (Demo)",
  employerVerified: false,
  recruiterNote: "Demo listing for design preview. Real listings show the verified employer or authorised recruitment agency here.",
  source: "Demo data — not a real vacancy",
  isDemo: true,
} as const;

export const DEMO_JOBS: Job[] = [
  {
    ...DEMO_COMMON,
    id: "demo-1", ref: "OJA-DEMO-101", slug: "demo-warehouse-associate-bhubaneswar",
    title: "Warehouse Associate", titleOr: "ଗୋଦାମ ସହଯୋଗୀ",
    categorySlug: "warehouse-logistics", districtSlug: "khordha", city: "Bhubaneswar",
    sector: "private", employmentType: "Full-time", qualifications: ["10th", "plus2"], experience: "fresher",
    salaryMin: 13500, salaryMax: 15500, salaryType: "per-month gross", shift: "Day",
    workingHours: "9 hours per day, 6 days a week", vacancies: 12,
    responsibilities: ["Pick, pack and label customer orders", "Scan inbound and outbound parcels", "Keep the work area clean and organised"],
    benefits: ["PF and ESIC as per law"],
    applicationMode: "site",
    applicationSteps: ["Create a free candidate account", "Complete your profile and upload a resume (optional)", "Submit the application and track its status in your dashboard"],
    publishedAt: daysAgo(1), verifiedAt: daysAgo(1),
  },
  {
    ...DEMO_COMMON,
    id: "demo-2", ref: "OJA-DEMO-102", slug: "demo-security-guard-cuttack",
    title: "Security Guard", titleOr: "ସୁରକ୍ଷା ରକ୍ଷୀ",
    categorySlug: "security-guard", districtSlug: "cuttack", city: "Cuttack",
    sector: "private", employmentType: "Full-time", qualifications: ["10th"], experience: "fresher",
    salaryMin: 14000, salaryMax: 16000, salaryType: "per-month gross", shift: "Rotational",
    workingHours: "8-hour rotational shifts", vacancies: 8,
    responsibilities: ["Monitor entry and exit points", "Maintain visitor register", "Patrol premises and report incidents"],
    benefits: ["Uniform provided"],
    applicationMode: "site",
    applicationSteps: ["Create a free candidate account", "Submit the application online", "The verified agency contacts shortlisted candidates"],
    publishedAt: daysAgo(2), verifiedAt: daysAgo(2),
  },
  {
    ...DEMO_COMMON,
    id: "demo-3", ref: "OJA-DEMO-103", slug: "demo-data-entry-operator-berhampur",
    title: "Data Entry Operator", titleOr: "ଡାଟା ଏଣ୍ଟ୍ରି ଅପରେଟର",
    categorySlug: "data-entry", districtSlug: "ganjam", city: "Berhampur",
    sector: "private", employmentType: "Full-time", qualifications: ["plus2", "graduate"], experience: "fresher",
    salaryMin: 12000, salaryMax: 14000, salaryType: "per-month take-home", shift: "General",
    workingHours: "10 AM – 6 PM, Monday to Saturday", vacancies: 4,
    responsibilities: ["Enter and verify records in the office system", "Prepare daily MIS reports", "Maintain digital and paper files"],
    benefits: [],
    applicationMode: "site",
    applicationSteps: ["Create a free candidate account", "Submit the application online", "Typing test at the office for shortlisted candidates"],
    publishedAt: daysAgo(4), verifiedAt: daysAgo(4),
  },
  {
    ...DEMO_COMMON,
    id: "demo-4", ref: "OJA-DEMO-104", slug: "demo-iti-electrician-rourkela",
    title: "ITI Electrician", titleOr: "ITI ଇଲେକ୍ଟ୍ରିସିଆନ",
    categorySlug: "electrical-mechanical", districtSlug: "sundargarh", city: "Rourkela",
    sector: "private", employmentType: "Contract", qualifications: ["iti", "diploma"], experience: "1-2",
    salaryMin: 18000, salaryMax: 22000, salaryType: "per-month gross", shift: "Rotational",
    workingHours: "8-hour shifts, rotational", vacancies: 6,
    responsibilities: ["Maintain plant electrical panels", "Carry out preventive maintenance", "Follow safety and lock-out procedures"],
    benefits: ["Safety equipment provided", "Overtime as per policy"],
    applicationMode: "enquiry",
    applicationSteps: ["Send an enquiry on WhatsApp quoting the job reference", "The authorised agency shares the interview venue", "Carry original certificates to the interview"],
    publishedAt: daysAgo(6), verifiedAt: daysAgo(6),
  },
  {
    ...DEMO_COMMON,
    id: "demo-5", ref: "OJA-DEMO-105", slug: "demo-hospital-front-desk-executive-cuttack",
    title: "Hospital Front Desk Executive", titleOr: "ହସ୍ପିଟାଲ ଫ୍ରଣ୍ଟ ଡେସ୍କ ଏକ୍ଜିକ୍ୟୁଟିଭ",
    categorySlug: "healthcare", districtSlug: "cuttack", city: "Cuttack",
    sector: "private", employmentType: "Full-time", qualifications: ["graduate"], experience: "1-2",
    salaryMin: 16000, salaryMax: 19000, salaryType: "per-month gross", shift: "Rotational",
    workingHours: "9-hour rotational shifts", vacancies: 3,
    responsibilities: ["Register patients and manage appointments", "Coordinate with doctors and billing", "Handle patient queries courteously"],
    benefits: ["Medical cover for self"],
    applicationMode: "site",
    applicationSteps: ["Create a free candidate account", "Submit the application online", "Interview at the hospital HR office"],
    publishedAt: daysAgo(9), verifiedAt: daysAgo(9),
  },
  {
    ...DEMO_COMMON,
    id: "demo-6", ref: "OJA-DEMO-106", slug: "demo-delivery-partner-puri",
    title: "Delivery Partner", titleOr: "ଡେଲିଭରି ପାର୍ଟନର",
    categorySlug: "delivery", districtSlug: "puri", city: "Puri",
    sector: "private", employmentType: "Part-time", qualifications: ["10th", "any"], experience: "fresher",
    salaryMin: 9000, salaryMax: 14000, salaryType: "per-month take-home", shift: "Day",
    workingHours: "Flexible 5–7 hour slots", vacancies: 10,
    responsibilities: ["Deliver parcels within the assigned area", "Collect delivery confirmation", "Maintain a valid two-wheeler licence"],
    benefits: ["Fuel allowance as per policy"],
    applicationMode: "enquiry",
    applicationSteps: ["Send an enquiry on WhatsApp quoting the job reference", "Visit the hub for document check", "Never pay any fee to get this job"],
    publishedAt: daysAgo(12), verifiedAt: daysAgo(12),
  },
  {
    ...DEMO_COMMON,
    id: "demo-7", ref: "OJA-DEMO-107", slug: "demo-junior-site-engineer-paradeep",
    title: "Junior Site Engineer (Civil)", titleOr: "ଜୁନିଅର ସାଇଟ୍ ଇଞ୍ଜିନିୟର (ସିଭିଲ୍)",
    categorySlug: "engineering", districtSlug: "jagatsinghpur", city: "Paradeep",
    sector: "private", employmentType: "Full-time", qualifications: ["diploma", "btech"], experience: "1-2",
    salaryMin: 22000, salaryMax: 28000, salaryType: "CTC", shift: "General",
    workingHours: "9 AM – 6 PM, site-based", vacancies: 2,
    responsibilities: ["Supervise site execution and labour", "Maintain measurement books", "Coordinate material and quality checks"],
    benefits: ["Site accommodation as per policy"],
    applicationMode: "site",
    applicationSteps: ["Create a free candidate account", "Upload your resume", "Technical interview with the employer"],
    publishedAt: daysAgo(15), verifiedAt: daysAgo(15),
  },
  {
    ...DEMO_COMMON,
    id: "demo-8", ref: "OJA-DEMO-108", slug: "demo-hotel-service-staff-puri",
    title: "Hotel Service Staff", titleOr: "ହୋଟେଲ ସେବା କର୍ମଚାରୀ",
    categorySlug: "hospitality", districtSlug: "puri", city: "Konark",
    sector: "private", employmentType: "Full-time", qualifications: ["10th", "plus2"], experience: "fresher",
    salaryMin: 11000, salaryMax: 13000, salaryType: "per-month gross", shift: "Rotational",
    workingHours: "9-hour shifts, one weekly off", vacancies: 5,
    responsibilities: ["Serve guests in the restaurant", "Maintain table and service hygiene", "Assist the banquet team during events"],
    benefits: ["Meals on duty"],
    applicationMode: "site",
    applicationSteps: ["Create a free candidate account", "Submit the application online", "Walk-in interview details shared after shortlisting"],
    publishedAt: daysAgo(20), verifiedAt: daysAgo(20),
  },
];

export const SHOW_DEMO = process.env.NEXT_PUBLIC_SHOW_DEMO_LISTINGS !== "false";

/** Jobs visible to the public: verified & published, or labelled demos while none exist. */
export function getPublicJobs(): { jobs: Job[]; isDemo: boolean } {
  if (PUBLISHED_JOBS.length > 0) return { jobs: PUBLISHED_JOBS, isDemo: false };
  return SHOW_DEMO ? { jobs: DEMO_JOBS, isDemo: true } : { jobs: [], isDemo: false };
}

/** Official government notices: never demo-filled — require a real official source. */
export function getGovernmentNotices(): Job[] {
  return PUBLISHED_JOBS.filter((j) => j.sector === "government" && j.officialUrl);
}

export function getJobBySlug(slug: string) {
  return [...PUBLISHED_JOBS, ...(SHOW_DEMO ? DEMO_JOBS : [])].find((j) => j.slug === slug);
}

export interface JobFilters {
  q?: string;
  district?: string;
  category?: string;
  qualification?: string;
  salary?: string;
  experience?: string;
  type?: string;
  sector?: string;
  posted?: string;
  shift?: string;
  sort?: string;
}

export const FILTER_KEYS: (keyof JobFilters)[] = ["q", "district", "category", "qualification", "salary", "experience", "type", "sector", "posted", "shift", "sort"];

export function filterJobs(jobs: Job[], f: JobFilters): Job[] {
  const q = f.q?.trim().toLowerCase();
  let out = jobs.filter((j) => {
    if (q) {
      const hay = `${j.title} ${j.titleOr ?? ""} ${j.city} ${j.employer} ${j.responsibilities.join(" ")} ${j.categorySlug}`.toLowerCase();
      if (!q.split(/\s+/).every((w) => hay.includes(w))) return false;
    }
    if (f.district && j.districtSlug !== f.district) return false;
    if (f.category && j.categorySlug !== f.category) return false;
    if (f.qualification && !j.qualifications.includes(f.qualification)) return false;
    if (f.experience && j.experience !== f.experience) return false;
    if (f.type && j.employmentType !== f.type) return false;
    if (f.sector && j.sector !== f.sector) return false;
    if (f.shift && j.shift !== f.shift) return false;
    if (f.salary) {
      const [lo, hi] = f.salary.split("-");
      const min = Number(lo);
      const max = hi === "up" ? Infinity : Number(hi);
      const top = j.salaryMax ?? j.salaryMin;
      const bottom = j.salaryMin ?? j.salaryMax;
      if (top === undefined || bottom === undefined || top < min || bottom > max) return false;
    }
    if (f.posted) {
      const age = (Date.now() - new Date(j.publishedAt).getTime()) / 86_400_000;
      if (age > Number(f.posted)) return false;
    }
    return true;
  });
  if (f.sort === "salary") out = [...out].sort((a, b) => (b.salaryMax ?? 0) - (a.salaryMax ?? 0));
  else out = [...out].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return out;
}

/** Summary of the imported research file (data/research). All records are held. */
export const RESEARCH_SUMMARY = {
  posters: 54,
  roleClaims: 80,
  highRisk: 25,
  verified: 0,
  published: 0,
};
