"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { DISTRICTS } from "@/lib/taxonomy";
import { whatsappLink } from "@/lib/site";

const TOPICS = ["Question about a job listing", "How to apply", "Report a suspicious job post", "Employer: list a vacancy", "Other"];

/**
 * Composes the enquiry into a WhatsApp message the visitor sends themselves.
 * Nothing is stored on the server; a database-backed lead inbox arrives with the admin panel.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2 || message.trim().length < 5) {
      setError("Please enter your name and a short message.");
      return;
    }
    setError("");
    const d = DISTRICTS.find((x) => x.slug === district)?.en;
    const text = `Hello Odisha Job Alert,\nName: ${name.trim()}\n${d ? `District: ${d}\n` : ""}Topic: ${topic}\n\n${message.trim()}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold">Your name</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="input-base" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold">District (optional)</span>
          <select value={district} onChange={(e) => setDistrict(e.target.value)} className="input-base">
            <option value="">Select district</option>
            {DISTRICTS.map((d) => <option key={d.slug} value={d.slug}>{d.en}</option>)}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-[13px] font-semibold">Topic</span>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} className="input-base">
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[13px] font-semibold">Message</span>
        <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="input-base h-auto py-3" placeholder="Include a job reference if you have one (e.g. OJA-1024)." />
      </label>
      {error && <p role="alert" className="text-[13.5px] font-medium text-orange-600">{error}</p>}
      <p className="text-[12.5px] leading-5 text-slate-ink">This opens WhatsApp with your message ready to send. Please don&apos;t include Aadhaar, PAN, bank details or your resume.</p>
      <button type="submit" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange font-semibold text-white hover:bg-orange-600 sm:w-auto sm:px-6">
        <Send className="size-4" /> Continue on WhatsApp
      </button>
    </form>
  );
}
