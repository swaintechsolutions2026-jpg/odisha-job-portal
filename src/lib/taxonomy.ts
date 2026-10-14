/**
 * Reference data: categories, Odisha districts, qualifications and filter options.
 * These are stable lookup lists (later seeded into the database), not job claims.
 */

export type IconName =
  | "warehouse" | "truck" | "shield" | "cctv" | "keyboard" | "briefcase"
  | "landmark" | "hospital" | "hotel" | "hardhat" | "factory" | "zap"
  | "sparkles" | "car" | "wrench" | "graduation" | "scroll";

export interface Category {
  slug: string;
  en: string;
  or: string;
  icon: IconName;
  blurb: string;
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  { slug: "warehouse-logistics", en: "Warehouse & Logistics", or: "ଗୋଦାମ ଓ ଲଜିଷ୍ଟିକ୍ସ", icon: "warehouse", blurb: "Packing, sorting, scanning and dispatch roles.", featured: true },
  { slug: "delivery", en: "Delivery Jobs", or: "ଡେଲିଭରି ଚାକିରି", icon: "truck", blurb: "Bike, van and last-mile delivery partners.", featured: true },
  { slug: "security-guard", en: "Security Guard", or: "ସୁରକ୍ଷା ରକ୍ଷୀ", icon: "shield", blurb: "Site, campus and facility security staff.", featured: true },
  { slug: "cctv-operator", en: "CCTV Operator", or: "CCTV ଅପରେଟର", icon: "cctv", blurb: "Control-room monitoring and surveillance." },
  { slug: "data-entry", en: "Data Entry Operator", or: "ଡାଟା ଏଣ୍ଟ୍ରି ଅପରେଟର", icon: "keyboard", blurb: "Computer-based records and back-office work.", featured: true },
  { slug: "office-assistant", en: "Office Assistant", or: "ଅଫିସ୍ ସହାୟକ", icon: "briefcase", blurb: "Front office, filing and administrative support." },
  { slug: "banking-support", en: "Banking Support", or: "ବ୍ୟାଙ୍କିଙ୍ଗ ସହାୟତା", icon: "landmark", blurb: "Field verification, collections and support roles." },
  { slug: "healthcare", en: "Hospital & Healthcare", or: "ହସ୍ପିଟାଲ ଓ ସ୍ୱାସ୍ଥ୍ୟସେବା", icon: "hospital", blurb: "Ward, front-desk and allied healthcare roles.", featured: true },
  { slug: "hospitality", en: "Hotel & Hospitality", or: "ହୋଟେଲ ଓ ଆତିଥ୍ୟ", icon: "hotel", blurb: "Service, kitchen and guest-relations staff." },
  { slug: "engineering", en: "Engineering", or: "ଇଞ୍ଜିନିୟରିଂ", icon: "hardhat", blurb: "Site, design and maintenance engineers.", featured: true },
  { slug: "manufacturing", en: "Manufacturing & Industrial", or: "ଉତ୍ପାଦନ ଓ ଶିଳ୍ପ", icon: "factory", blurb: "Plant operators, helpers and quality staff." },
  { slug: "electrical-mechanical", en: "Electrical & Mechanical", or: "ବୈଦ୍ୟୁତିକ ଓ ଯାନ୍ତ୍ରିକ", icon: "zap", blurb: "Electricians, fitters and technicians." },
  { slug: "housekeeping", en: "Housekeeping", or: "ହାଉସକିପିଂ", icon: "sparkles", blurb: "Facility cleaning and upkeep teams." },
  { slug: "driver", en: "Driver", or: "ଡ୍ରାଇଭର", icon: "car", blurb: "LMV, HMV and company drivers." },
  { slug: "iti-diploma", en: "ITI / Diploma", or: "ITI / ଡିପ୍ଲୋମା", icon: "wrench", blurb: "Trade and technical roles for ITI & Diploma holders.", featured: true },
  { slug: "graduate", en: "Graduate Jobs", or: "ସ୍ନାତକ ଚାକିରି", icon: "graduation", blurb: "Roles for +3, B.Com, B.Sc and B.A. graduates." },
  { slug: "government-notices", en: "Official Government Recruitment Notices", or: "ସରକାରୀ ନିଯୁକ୍ତି ବିଜ୍ଞପ୍ତି", icon: "scroll", blurb: "Only notices with a verifiable official source.", featured: true },
];

export interface District {
  slug: string;
  en: string;
  or: string;
  hq: string;
  /** Familiar towns/cities searched by candidates (city ≠ district). */
  cities: string[];
}

export const DISTRICTS: District[] = [
  { slug: "angul", en: "Angul", or: "ଅନୁଗୋଳ", hq: "Angul", cities: ["Angul", "Talcher"] },
  { slug: "balangir", en: "Balangir", or: "ବଲାଙ୍ଗିର", hq: "Balangir", cities: ["Balangir", "Titlagarh"] },
  { slug: "balasore", en: "Balasore", or: "ବାଲେଶ୍ୱର", hq: "Balasore", cities: ["Balasore", "Jaleswar"] },
  { slug: "bargarh", en: "Bargarh", or: "ବରଗଡ଼", hq: "Bargarh", cities: ["Bargarh"] },
  { slug: "bhadrak", en: "Bhadrak", or: "ଭଦ୍ରକ", hq: "Bhadrak", cities: ["Bhadrak"] },
  { slug: "boudh", en: "Boudh", or: "ବୌଦ୍ଧ", hq: "Boudh", cities: ["Boudh"] },
  { slug: "cuttack", en: "Cuttack", or: "କଟକ", hq: "Cuttack", cities: ["Cuttack", "Choudwar"] },
  { slug: "deogarh", en: "Deogarh", or: "ଦେବଗଡ଼", hq: "Deogarh", cities: ["Deogarh"] },
  { slug: "dhenkanal", en: "Dhenkanal", or: "ଢେଙ୍କାନାଳ", hq: "Dhenkanal", cities: ["Dhenkanal"] },
  { slug: "gajapati", en: "Gajapati", or: "ଗଜପତି", hq: "Paralakhemundi", cities: ["Paralakhemundi"] },
  { slug: "ganjam", en: "Ganjam", or: "ଗଞ୍ଜାମ", hq: "Chhatrapur", cities: ["Berhampur", "Chhatrapur"] },
  { slug: "jagatsinghpur", en: "Jagatsinghpur", or: "ଜଗତସିଂହପୁର", hq: "Jagatsinghpur", cities: ["Paradeep", "Jagatsinghpur"] },
  { slug: "jajpur", en: "Jajpur", or: "ଯାଜପୁର", hq: "Jajpur", cities: ["Jajpur Road", "Kalinga Nagar"] },
  { slug: "jharsuguda", en: "Jharsuguda", or: "ଝାରସୁଗୁଡ଼ା", hq: "Jharsuguda", cities: ["Jharsuguda", "Brajarajnagar"] },
  { slug: "kalahandi", en: "Kalahandi", or: "କଳାହାଣ୍ଡି", hq: "Bhawanipatna", cities: ["Bhawanipatna"] },
  { slug: "kandhamal", en: "Kandhamal", or: "କନ୍ଧମାଳ", hq: "Phulbani", cities: ["Phulbani"] },
  { slug: "kendrapara", en: "Kendrapara", or: "କେନ୍ଦ୍ରାପଡ଼ା", hq: "Kendrapara", cities: ["Kendrapara"] },
  { slug: "kendujhar", en: "Kendujhar", or: "କେନ୍ଦୁଝର", hq: "Kendujhar", cities: ["Kendujhar", "Barbil", "Joda"] },
  { slug: "khordha", en: "Khordha", or: "ଖୋର୍ଦ୍ଧା", hq: "Khordha", cities: ["Bhubaneswar", "Khordha", "Jatni"] },
  { slug: "koraput", en: "Koraput", or: "କୋରାପୁଟ", hq: "Koraput", cities: ["Koraput", "Jeypore", "Sunabeda"] },
  { slug: "malkangiri", en: "Malkangiri", or: "ମାଲକାନଗିରି", hq: "Malkangiri", cities: ["Malkangiri"] },
  { slug: "mayurbhanj", en: "Mayurbhanj", or: "ମୟୂରଭଞ୍ଜ", hq: "Baripada", cities: ["Baripada"] },
  { slug: "nabarangpur", en: "Nabarangpur", or: "ନବରଙ୍ଗପୁର", hq: "Nabarangpur", cities: ["Nabarangpur"] },
  { slug: "nayagarh", en: "Nayagarh", or: "ନୟାଗଡ଼", hq: "Nayagarh", cities: ["Nayagarh"] },
  { slug: "nuapada", en: "Nuapada", or: "ନୂଆପଡ଼ା", hq: "Nuapada", cities: ["Nuapada", "Khariar"] },
  { slug: "puri", en: "Puri", or: "ପୁରୀ", hq: "Puri", cities: ["Puri", "Konark", "Pipili"] },
  { slug: "rayagada", en: "Rayagada", or: "ରାୟଗଡ଼ା", hq: "Rayagada", cities: ["Rayagada"] },
  { slug: "sambalpur", en: "Sambalpur", or: "ସମ୍ବଲପୁର", hq: "Sambalpur", cities: ["Sambalpur", "Burla"] },
  { slug: "subarnapur", en: "Subarnapur", or: "ସୁବର୍ଣ୍ଣପୁର", hq: "Sonepur", cities: ["Sonepur"] },
  { slug: "sundargarh", en: "Sundargarh", or: "ସୁନ୍ଦରଗଡ଼", hq: "Sundargarh", cities: ["Rourkela", "Sundargarh"] },
];

export const POPULAR_DISTRICTS = ["khordha", "cuttack", "ganjam", "sundargarh", "balasore", "puri", "jajpur", "sambalpur", "jagatsinghpur", "jharsuguda", "bhadrak", "mayurbhanj"];

export interface Qualification { slug: string; en: string; or: string }

export const QUALIFICATIONS: Qualification[] = [
  { slug: "10th", en: "10th Pass", or: "ଦଶମ ପାସ୍" },
  { slug: "plus2", en: "+2 Pass", or: "+୨ ପାସ୍" },
  { slug: "iti", en: "ITI", or: "ITI" },
  { slug: "diploma", en: "Diploma", or: "ଡିପ୍ଲୋମା" },
  { slug: "graduate", en: "Graduate", or: "ସ୍ନାତକ" },
  { slug: "btech", en: "B.Tech / Engineering", or: "B.Tech / ଇଞ୍ଜିନିୟରିଂ" },
  { slug: "any", en: "Any Qualification", or: "ଯେକୌଣସି ଯୋଗ୍ୟତା" },
];

export const EXPERIENCE_OPTIONS = [
  { slug: "fresher", en: "Fresher", or: "ନୂତନ" },
  { slug: "1-2", en: "1–2 years", or: "୧–୨ ବର୍ଷ" },
  { slug: "3-5", en: "3–5 years", or: "୩–୫ ବର୍ଷ" },
  { slug: "5+", en: "5+ years", or: "୫+ ବର୍ଷ" },
] as const;

export const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Contract"] as const;
export const SECTORS = [
  { slug: "private", en: "Private", or: "ଘରୋଇ" },
  { slug: "government", en: "Government (official notice)", or: "ସରକାରୀ (ଆଧିକାରିକ ବିଜ୍ଞପ୍ତି)" },
] as const;
export const SHIFTS = ["Day", "Night", "Rotational", "General"] as const;
export const SALARY_BANDS = [
  { slug: "0-12000", en: "Up to ₹12,000", min: 0, max: 12000 },
  { slug: "12000-18000", en: "₹12,000 – ₹18,000", min: 12000, max: 18000 },
  { slug: "18000-25000", en: "₹18,000 – ₹25,000", min: 18000, max: 25000 },
  { slug: "25000-up", en: "₹25,000+", min: 25000, max: Infinity },
] as const;
export const POSTED_WITHIN = [
  { slug: "1", en: "Last 24 hours" },
  { slug: "7", en: "Last 7 days" },
  { slug: "30", en: "Last 30 days" },
] as const;

export const getCategory = (slug?: string) => CATEGORIES.find((c) => c.slug === slug);
export const getDistrict = (slug?: string) => DISTRICTS.find((d) => d.slug === slug);
export const getQualification = (slug?: string) => QUALIFICATIONS.find((q) => q.slug === slug);
