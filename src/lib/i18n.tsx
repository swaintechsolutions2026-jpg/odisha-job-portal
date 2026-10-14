"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "or";

const DICT = {
  "nav.home": { en: "Home", or: "ମୂଳପୃଷ୍ଠା" },
  "nav.jobs": { en: "Find Jobs", or: "ଚାକିରି ଖୋଜନ୍ତୁ" },
  "nav.private": { en: "Private Jobs", or: "ଘରୋଇ ଚାକିରି" },
  "nav.government": { en: "Government Notices", or: "ସରକାରୀ ବିଜ୍ଞପ୍ତି" },
  "nav.districts": { en: "Districts", or: "ଜିଲ୍ଲା" },
  "nav.about": { en: "About", or: "ଆମ ବିଷୟରେ" },
  "nav.contact": { en: "Contact", or: "ଯୋଗାଯୋଗ" },
  "nav.login": { en: "Login", or: "ଲଗଇନ୍" },
  "nav.register": { en: "Register", or: "ପଞ୍ଜୀକରଣ" },
  "nav.search": { en: "Search", or: "ଖୋଜ" },
  "nav.saved": { en: "Saved", or: "ସଞ୍ଚିତ" },
  "nav.profile": { en: "Account", or: "ଖାତା" },
  "hero.eyebrow": { en: "Odisha-first career platform", or: "ଓଡ଼ିଶା ପାଇଁ କ୍ୟାରିୟର ପ୍ଲାଟଫର୍ମ" },
  "hero.title": { en: "Your Next Opportunity Starts Here.", or: "ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ସୁଯୋଗ ଏଠାରୁ ଆରମ୍ଭ।" },
  "hero.highlight": { en: "Explore Jobs Across Odisha.", or: "ସମଗ୍ର ଓଡ଼ିଶାରେ ଚାକିରି ଖୋଜନ୍ତୁ।" },
  "hero.sub": { en: "Discover career opportunities by district, qualification, experience and job category.", or: "ଜିଲ୍ଲା, ଯୋଗ୍ୟତା, ଅଭିଜ୍ଞତା ଓ ଚାକିରି ବର୍ଗ ଅନୁସାରେ କ୍ୟାରିୟର ସୁଯୋଗ ଖୋଜନ୍ତୁ।" },
  "search.keyword": { en: "Job title, skill or keyword", or: "ଚାକିରି ନାମ, ଦକ୍ଷତା ବା ଶବ୍ଦ" },
  "search.district": { en: "All districts", or: "ସମସ୍ତ ଜିଲ୍ଲା" },
  "search.qualification": { en: "Any qualification", or: "ଯେକୌଣସି ଯୋଗ୍ୟତା" },
  "search.find": { en: "Find Jobs", or: "ଚାକିରି ଖୋଜନ୍ତୁ" },
  "search.how": { en: "How It Works", or: "ଏହା କିପରି କାମ କରେ" },
  "search.popular": { en: "Popular", or: "ଲୋକପ୍ରିୟ" },
  "sec.categories": { en: "Browse Jobs by Category", or: "ବର୍ଗ ଅନୁସାରେ ଚାକିରି" },
  "sec.categories.sub": { en: "Pick a field to see matching openings and filters.", or: "ଉପଯୁକ୍ତ ଚାକିରି ଦେଖିବା ପାଇଁ ଏକ ବର୍ଗ ବାଛନ୍ତୁ।" },
  "sec.latest": { en: "Latest Published Jobs", or: "ସଦ୍ୟତମ ପ୍ରକାଶିତ ଚାକିରି" },
  "sec.latest.sub": { en: "Only listings that passed manual verification are published.", or: "କେବଳ ଯାଞ୍ଚ ହୋଇଥିବା ଚାକିରି ପ୍ରକାଶିତ ହୁଏ।" },
  "sec.districts": { en: "Browse Jobs by Odisha District", or: "ଓଡ଼ିଶା ଜିଲ୍ଲା ଅନୁସାରେ ଚାକିରି" },
  "sec.districts.sub": { en: "All 30 districts — city and district searched separately.", or: "ସମସ୍ତ ୩୦ ଜିଲ୍ଲା — ସହର ଓ ଜିଲ୍ଲା ଅଲଗା ଭାବେ।" },
  "sec.qualification": { en: "Jobs by Qualification", or: "ଯୋଗ୍ୟତା ଅନୁସାରେ ଚାକିରି" },
  "sec.private": { en: "Private Jobs", or: "ଘରୋଇ ଚାକିରି" },
  "sec.government": { en: "Official Government Notifications", or: "ଆଧିକାରିକ ସରକାରୀ ବିଜ୍ଞପ୍ତି" },
  "sec.featured": { en: "Featured Career Categories", or: "ବିଶେଷ କ୍ୟାରିୟର ବର୍ଗ" },
  "sec.how": { en: "How to Apply", or: "କିପରି ଆବେଦନ କରିବେ" },
  "sec.safety": { en: "Recruitment Safety Information", or: "ନିଯୁକ୍ତି ସୁରକ୍ଷା ସୂଚନା" },
  "sec.about": { en: "About Odisha Job Alert", or: "ଓଡ଼ିଶା ଜବ୍ ଆଲର୍ଟ ବିଷୟରେ" },
  "sec.faq": { en: "Frequently Asked Questions", or: "ବାରମ୍ବାର ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନ" },
  "sec.contact": { en: "Talk to Odisha Job Alert", or: "ଓଡ଼ିଶା ଜବ୍ ଆଲର୍ଟ ସହ କଥା ହୁଅନ୍ତୁ" },
  "cta.viewAll": { en: "View all jobs", or: "ସମସ୍ତ ଚାକିରି ଦେଖନ୍ତୁ" },
  "cta.details": { en: "View Details", or: "ବିବରଣୀ ଦେଖନ୍ତୁ" },
  "cta.save": { en: "Save", or: "ସଞ୍ଚୟ" },
  "cta.saved": { en: "Saved", or: "ସଞ୍ଚିତ" },
  "cta.apply": { en: "Apply Now", or: "ବର୍ତ୍ତମାନ ଆବେଦନ" },
  "cta.whatsapp": { en: "WhatsApp Enquiry", or: "ହ୍ୱାଟସଆପ୍ ପଚାରନ୍ତୁ" },
  "cta.call": { en: "Call Now", or: "ଫୋନ୍ କରନ୍ତୁ" },
  "cta.updates": { en: "Get Job Updates", or: "ଚାକିରି ଅପଡେଟ୍ ପାଆନ୍ତୁ" },
  "empty.title": { en: "Jobs are being verified", or: "ଚାକିରି ଯାଞ୍ଚ ଚାଲିଛି" },
  "empty.body": { en: "We publish a vacancy only after confirming the employer, salary and application route. Join updates to hear first.", or: "ନିଯୁକ୍ତିଦାତା, ଦରମା ଓ ଆବେଦନ ପ୍ରକ୍ରିୟା ନିଶ୍ଚିତ କରିବା ପରେ ହିଁ ଚାକିରି ପ୍ରକାଶ କରାଯାଏ। ପ୍ରଥମେ ଜାଣିବା ପାଇଁ ଅପଡେଟ୍ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ।" },
  "demo.banner": { en: "Design preview: these are sample DEMO listings, not real vacancies.", or: "ଡିଜାଇନ୍ ପ୍ରିଭ୍ୟୁ: ଏଗୁଡ଼ିକ ନମୁନା DEMO ତାଲିକା, ପ୍ରକୃତ ଚାକିରି ନୁହେଁ।" },
  "filters.title": { en: "Filters", or: "ଫିଲ୍ଟର" },
  "filters.reset": { en: "Reset", or: "ପୁନଃସେଟ୍" },
  "filters.apply": { en: "Show results", or: "ଫଳାଫଳ ଦେଖନ୍ତୁ" },
  "results.count": { en: "jobs found", or: "ଟି ଚାକିରି ମିଳିଲା" },
  "footer.disclaimer": { en: "Odisha Job Alert is an independent recruitment-information platform. It is not a government website and is not affiliated with any employer unless stated on a verified listing.", or: "ଓଡ଼ିଶା ଜବ୍ ଆଲର୍ଟ ଏକ ସ୍ୱାଧୀନ ନିଯୁକ୍ତି-ସୂଚନା ପ୍ଲାଟଫର୍ମ। ଏହା ସରକାରୀ ୱେବସାଇଟ୍ ନୁହେଁ ଏବଂ ଯାଞ୍ଚିତ ତାଲିକାରେ ଉଲ୍ଲେଖ ନଥିଲେ କୌଣସି ନିଯୁକ୍ତିଦାତା ସହ ସମ୍ପୃକ୍ତ ନୁହେଁ।" },
  "safety.nofee": { en: "Never pay a fee to get a job", or: "ଚାକିରି ପାଇଁ କେବେ ଟଙ୍କା ଦିଅନ୍ତୁ ନାହିଁ" },
} as const;

export type DictKey = keyof typeof DICT;

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
  /** Pick between an English and an optional Odia value (falls back to English). */
  pick: (en: string, or?: string) => string;
}

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("oja-lang");
    if (saved === "or" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "or" ? "or" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("oja-lang", l);
  }, []);

  const t = useCallback((k: DictKey) => DICT[k][lang], [lang]);
  const pick = useCallback((en: string, or?: string) => (lang === "or" && or ? or : en), [lang]);

  return <LangContext.Provider value={{ lang, setLang, t, pick }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

/** Inline translated text for use inside server components. */
export function T({ k }: { k: DictKey }) {
  return <>{useLang().t(k)}</>;
}
