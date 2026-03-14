"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type TemplateType =
  | "application"
  | "request"
  | "complaint"
  | "recommendation"
  | "statement";

const templates: { value: TemplateType; label: string }[] = [
  { value: "application", label: "Application letter (निवेदन)" },
  { value: "request", label: "Request letter (अनुरोध)" },
  { value: "complaint", label: "Complaint letter (गुनासो/उजुरी)" },
  { value: "recommendation", label: "Recommendation request (सिफारिस)" },
  { value: "statement", label: "Press / public statement (प्रेस वक्तव्य)" },
];

type ContextType =
  | "school"
  | "local-government"
  | "ministry"
  | "institution"
  | "press";

const contextOptions: { value: ContextType; label: string }[] = [
  { value: "school", label: "School / College" },
  { value: "local-government", label: "Local Government (Ward / Municipality)" },
  { value: "ministry", label: "Government Office / Ministry" },
  { value: "institution", label: "Public Institution" },
  { value: "press", label: "Press / Media" },
];

const quickTemplates = [
  {
    label: "Scholarship request",
    context: "school" as ContextType,
    template: "application" as TemplateType,
    recipient: "विद्यालय प्रशासन",
    subject: "विद्यार्थी छात्रवृत्तिको लागि निवेदन।",
    purpose:
      "आर्थिक रूपमा कमजोर अवस्थाका कारण छात्रवृत्तिको माध्यमबाट अध्ययन जारी राख्न सहयोगको लागि निवेदन गर्न लागिएको हो।",
  },
  {
    label: "Ward recommendation request",
    context: "local-government" as ContextType,
    template: "request" as TemplateType,
    recipient: "वडा कार्यालय",
    subject: "सिफारिस पत्रको लागि अनुरोध।",
    purpose:
      "नागरिकता/नयाँ राहदानी/अन्य औपचारिक कामका लागि आवश्यक पर्ने सिफारिस पत्र प्रदान गरिदिन अनुरोध गर्न लागिएको हो।",
  },
  {
    label: "Road complaint",
    context: "local-government" as ContextType,
    template: "complaint" as TemplateType,
    recipient: "वडा कार्यालय",
    subject: "सडक मर्मतको सम्बन्धमा गुनासो।",
    purpose:
      "वडाभित्र रहेको सडक लामो समयदेखि बिग्रिएको र सर्वसाधारणको आवतजावतमा कठिनाइ आएको विषयमा ध्यानाकर्षण गराउन गुनासो प्रस्तुत गर्न लागिएको हो।",
  },
  {
    label: "Leave application",
    context: "school" as ContextType,
    template: "application" as TemplateType,
    recipient: "विद्यालय प्रशासन",
    subject: "विदा स्वीकृतिका लागि निवेदन।",
    purpose:
      "स्वास्थ्य/परिवारजन्य कारणले केही दिन कक्षामा उपस्थित हुन नसक्ने भएका कारण सो अवधिका लागि विदा स्वीकृतिका लागि विनम्रतापूर्वक निवेदन गर्न लागिएको हो।",
  },
  {
    label: "Event permission request",
    context: "institution" as ContextType,
    template: "request" as TemplateType,
    recipient: "सार्वजनिक संस्था / स्थानीय निकाय",
    subject: "सार्वजनिक कार्यक्रम आयोजना गर्ने अनुमति सम्बन्धमा।",
    purpose:
      "समुदायलाई लक्षित सांस्कृतिक/शैक्षिक कार्यक्रम आयोजना गर्न सार्वजनिक स्थानको प्रयोग अनुमति प्रदान गरिदिन अनुरोध गर्न लागिएको हो।",
  },
];

export function NivedanLetterDeskPage() {
  const [senderName, setSenderName] = useState("");
  const [address, setAddress] = useState("");
  const [recipientOffice, setRecipientOffice] = useState("");
  const [subject, setSubject] = useState("");
  const [purpose, setPurpose] = useState("");
  const [details, setDetails] = useState("");
  const [attachments, setAttachments] = useState("");
  const [date, setDate] = useState("");
  const [template, setTemplate] = useState<TemplateType>("application");

  const [context, setContext] = useState<ContextType>("school");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [creditCopied, setCreditCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCopied(false);
    setCreditCopied(false);
    setLinkCopied(false);

    const letterTypeLabel = templates.find((t) => t.value === template)?.label ?? "formal letter";

    const contextLabel =
      contextOptions.find((c) => c.value === context)?.label ?? "General context";

    const combinedDetails = [
      `पत्र सन्दर्भ: ${contextLabel}`,
      `पत्र प्रकार: ${letterTypeLabel}`,
      senderName && `प्रेषक: ${senderName}`,
      address && `ठेगाना: ${address}`,
      purpose && `मुख्य उद्देश्य/निवेदन: ${purpose}`,
      details && `थप विवरण: ${details}`,
      attachments && `संलग्न कागजात/सन्दर्भ: ${attachments}`,
      date && `मिति (इच्छानुसार): ${date}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/tools/formal-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          letterType: letterTypeLabel,
          recipient: recipientOffice,
          subject,
          details: combinedDetails,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Could not generate letter.");
      }
      const base = typeof data.text === "string" ? data.text : "";
      setOutput(base);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unexpected error while generating the letter.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function handleCopyWithCredit() {
    if (!output) return;
    const credit =
      "\n\n---\nDraft prepared via Janak AI Public Desk – JanakKhadka.com";
    try {
      await navigator.clipboard.writeText(output + credit);
      setCreditCopied(true);
      setTimeout(() => setCreditCopied(false), 2000);
    } catch {
      setCreditCopied(false);
    }
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(false);
    }
  }

  async function handleDownloadPdf() {
    if (!output) return;
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });
    const margin = 56;
    const maxWidth = 500;
    const lines = doc.splitTextToSize(output, maxWidth);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(lines, margin, margin);
    doc.save("nivedan-letter.pdf");
  }

  return (
    <div className="page-shell space-y-10 pb-24 pt-10 md:space-y-14 md:pt-16">
      <section className="section-shell border-b border-gray-2000 pb-10 pt-4 md:pb-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Public Desk", href: "/public-desk" },
            { label: "Nivedan Letter Architect" },
          ]}
          className="mb-4"
        />
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-500">
            Public Tools · Formal Letters
          </p>
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-50 md:text-3xl">
            Nivedan &amp; Bureaucratic Letter Architect
          </h1>
          <p className="text-sm leading-relaxed text-gray-300 md:text-[0.95rem]">
            A professional civic writing tool to help you draft clear, respectful, and
            properly structured formal Nepali letters for government offices,
            institutions, and public requests.
          </p>
          <p className="text-[0.7rem] text-gray-500">
            Output is AI-assisted and should be reviewed before submission. This tool does
            not replace legal advice.
          </p>
          <div className="mt-4 space-y-1 text-sm text-gray-300">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-500">
              Who uses this desk
            </p>
            <ul className="mt-1 grid gap-1 text-[0.8rem] text-gray-300 md:grid-cols-2">
              <li>• Students</li>
              <li>• Local government staff</li>
              <li>• NGO workers</li>
              <li>• Community leaders</li>
              <li>• Event organizers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.4fr)] md:items-start">
          {/* Form */}
          <form
            onSubmit={handleGenerate}
            className="space-y-4 rounded-3xl border border-gray-2000 bg-white/[0.03] p-5 text-sm text-gray-900 md:p-6"
          >
            {/* Context selector */}
            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                Letter context
              </label>
              <select
                value={context}
                onChange={(e) => setContext(e.target.value as ContextType)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
              >
                {contextOptions.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick start templates */}
            <div className="space-y-1">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                Quick start templates
              </p>
              <div className="flex flex-wrap gap-2">
                {quickTemplates.map((qt) => (
                  <button
                    key={qt.label}
                    type="button"
                    onClick={() => {
                      setContext(qt.context);
                      setTemplate(qt.template);
                      setRecipientOffice(qt.recipient);
                      setSubject(qt.subject);
                      setPurpose(qt.purpose);
                    }}
                    className="rounded-full border border-gray-200 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium text-gray-900 hover:border-gray-300"
                  >
                    {qt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                Letter template
              </label>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value as TemplateType)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
              >
                {templates.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                  Sender name
                </label>
                <input
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                  placeholder="Your name / organization"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                  Address
                </label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                  placeholder="Ward, municipality, district"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                Recipient office
              </label>
              <input
                value={recipientOffice}
                onChange={(e) => setRecipientOffice(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                placeholder="जस्तो: वडा कार्यालय, विद्यालय, मन्त्रालय…"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                placeholder="पत्रको विषय"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                Purpose / request
              </label>
              <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                placeholder="के माग/निवेदन गर्न लागिएको हो? छोटकरीमा लेख्नुहोस्।"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                Supporting details
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                placeholder="सन्दर्भ, पृष्ठभूमि, सम्बन्धित मिति, पहिल्यै भएका कुराहरू…"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                  Optional attachments reference
                </label>
                <input
                  value={attachments}
                  onChange={(e) => setAttachments(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                  placeholder="जस्तै: नागरिकता प्रतिलिपि, सिफारिस, प्रमाणपत्र…"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                  Date (optional)
                </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                  placeholder="मिति (यदि उल्लेख गर्न चाहनुहुन्छ भने)"
                />
              </div>
            </div>

            {error && (
              <p className="text-[0.75rem] text-red-300">
                {error}
              </p>
            )}

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black shadow-[0_14px_40px_rgba(0,0,0,0.85)] disabled:opacity-60"
              >
                {loading ? "Generating…" : "Generate letter"}
              </button>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!output}
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-900 disabled:opacity-40"
              >
                {copied ? "Copied" : "Copy text"}
              </button>
              <button
                type="button"
                onClick={handleCopyWithCredit}
                disabled={!output}
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-900 disabled:opacity-40"
              >
                {creditCopied ? "Copied with credit" : "Copy with credit"}
              </button>
              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={!output}
                className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-900 disabled:opacity-40"
              >
                Download PDF
              </button>
            </div>
          </form>

          {/* Output */}
          <div className="space-y-4 rounded-3xl border border-gray-2000 bg-gray-50 p-5 text-sm text-gray-900 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-500">
                  Generated letter
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Structured in formal Nepali with subject, body, and closing.
                </p>
              </div>
            </div>
            <div className="min-h-[260px] rounded-2xl border border-gray-2000 bg-gray-100 p-4 text-sm leading-relaxed text-gray-900">
              {output ? (
                <pre className="whitespace-pre-wrap font-sans text-sm text-gray-900">
                  {output}
                </pre>
              ) : (
                <p className="text-xs text-gray-500">
                  Fill the fields on the left and select a template to generate a formal
                  Nepali letter. The architect will include subject, opening line, body,
                  formal closing, and placeholders for signature and date.
                </p>
              )}
            </div>

            {/* Example block */}
            <div className="space-y-2 border-t border-gray-2000 pt-4 text-xs text-gray-300">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-500">
                Example scenario
              </p>
              <p>
                जस्तै: विद्यार्थीले विद्यालय प्रशासनलाई परीक्षा शुल्क किस्ता किस्ता तिर्न
                अनुमति मागदैँ निवेदन पत्र लेख्नुपर्ने स्थिति, वा स्थानीय वडा कार्यालयलाई
                सिफारिस पत्रको लागि अनुरोध गर्ने स्थिति।
              </p>
              <p className="text-[0.7rem] text-gray-500">
                यो स्थानमा केही चिनारी मात्र दिइएको हो। वास्तविक पत्रहरू तपाईंको
                विवरणअनुसार ताजा बनाइनेछन्।
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/5 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-900"
                >
                  {linkCopied ? "Link copied" : "Share template link"}
                </button>
                <p className="text-[0.65rem] text-gray-500">
                  Optional footer for shared drafts: “Draft prepared via Janak AI Public Desk – JanakKhadka.com”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell border-b-0">
        <div className="space-y-2 text-xs text-gray-400">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-500">
            Related Codex nodes
          </p>
          <ul className="mt-1 space-y-1">
            <li>
              <Link
                href="/blog/language-of-nepali-formal-letters"
                className="underline-offset-4 hover:text-royal-primary hover:underline"
              >
                Language of Nepali Formal Letters
              </Link>
            </li>
            <li>
              <Link
                href="/blog/civic-writing-in-public-institutions"
                className="underline-offset-4 hover:text-royal-primary hover:underline"
              >
                Civic Writing in Public Institutions
              </Link>
            </li>
            <li>
              <Link
                href="/blog/respectful-communication-with-government-offices"
                className="underline-offset-4 hover:text-royal-primary hover:underline"
              >
                Respectful Communication with Government Offices
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

