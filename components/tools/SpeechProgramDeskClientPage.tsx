"use client";

import { useState } from "react";
import Link from "next/link";

type ToneType = "formal" | "warm" | "inspiring";

const toneOptions: { value: ToneType; label: string }[] = [
  { value: "formal", label: "Formal" },
  { value: "warm", label: "Warm" },
  { value: "inspiring", label: "Inspiring" },
];

const quickTemplates = [
  {
    label: "School annual program speech",
    programType: "School annual day / वार्षिक कार्यक्रम",
    speakerRole: "कार्यक्रम संयोजक / शिक्षक",
    audienceType: "विद्यार्थी, अभिभावक, शिक्षक",
    occasion: "विद्यालयको वार्षिक दिवस कार्यक्रम",
    keyPoints:
      "विद्यालयको वर्षभरिेको यात्रा, विद्यार्थीको सहभागिता, धन्यवाद, आगामी वर्षको आशा",
    tone: "warm" as ToneType,
    length: "३–५ मिनेट",
  },
  {
    label: "Welcome speech for chief guest",
    programType: "औपचारिक उद्घाटन कार्यक्रम",
    speakerRole: "सञ्चालक / कार्यक्रम प्रमुख",
    audienceType: "अतिथिहरू, संस्थाका प्रतिनिधि, समुदाय",
    occasion: "मुख्य अतिथिको स्वागत र कार्यक्रम उद्घाटन",
    keyPoints:
      "मुख्य अतिथिको परिचय, उपस्थित सबैलाई स्वागत, कार्यक्रमको उद्देश्य संक्षेपमा",
    tone: "formal" as ToneType,
    length: "२–३ मिनेट",
  },
  {
    label: "Vote of thanks",
    programType: "समापन कार्यक्रम",
    speakerRole: "कार्यक्रम संयोजक / सञ्चालक",
    audienceType: "अतिथिहरू, सहभागी, आयोजक टिम",
    occasion: "कार्यक्रमको समापन धन्यवाद ज्ञापन",
    keyPoints:
      "मुख्य अतिथि, अतिथिहरू, सहभागी, प्राविधिक टिम र सहयोगी संस्थाप्रति धन्यवाद",
    tone: "warm" as ToneType,
    length: "२–३ मिनेट",
  },
  {
    label: "Ward chair public address",
    programType: "सार्वजनिक भेला / स्थानीय कार्यक्रम",
    speakerRole: "वडा अध्यक्ष",
    audienceType: "स्थानीय बासिन्दा, समुदाय प्रतिनिधि",
    occasion: "वडाको काम, योजना र जवाफदेहिताको सन्दर्भमा सम्बोधन",
    keyPoints:
      "वडामा गरिएको कामको संक्षिप्त विवरण, आगामी योजना, नागरिकसँगको साझेदारी",
    tone: "formal" as ToneType,
    length: "५–७ मिनेट",
  },
  {
    label: "Youth event speech",
    programType: "युवा कार्यक्रम / वर्कशप",
    speakerRole: "कार्यक्रम सह–संयोजक / युवा अगुवा",
    audienceType: "युवा सहभागी, समुदाय प्रतिनिधि",
    occasion: "युवा सहभागिता, सिकाइ र समुदायमा योगदान",
    keyPoints:
      "युवाको क्षमता, सिकाइको अनुभव, समुदायमा बनाउन सकिने साना परिवर्तन",
    tone: "inspiring" as ToneType,
    length: "३–५ मिनेट",
  },
  {
    label: "Inauguration speech",
    programType: "उद्घाटन समारोह",
    speakerRole: "मुख्य वक्ता / आयोजक प्रतिनिधि",
    audienceType: "अतिथिहरू, सरोकारवाला, समुदाय",
    occasion: "नयाँ कार्यक्रम/पूर्वाधार/सेवा सुरु गर्ने अवसर",
    keyPoints:
      "परियोजनाको पृष्ठभूमि, समुदायका लागि महत्व, धन्यवाद र सहकार्यको आह्वान",
    tone: "formal" as ToneType,
    length: "४–६ मिनेट",
  },
];

export function SpeechProgramDeskClientPage() {
  const [programType, setProgramType] = useState("");
  const [speakerRole, setSpeakerRole] = useState("");
  const [audienceType, setAudienceType] = useState("");
  const [occasion, setOccasion] = useState("");
  const [keyPoints, setKeyPoints] = useState("");
  const [tone, setTone] = useState<ToneType>("formal");
  const [length, setLength] = useState("");
  const [names, setNames] = useState("");
  const [dateVenue, setDateVenue] = useState("");

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

    const combinedKeyPoints = [
      `कार्यक्रमको प्रकार: ${programType || "उल्लेख नगरिएको"}`,
      `वक्ताको भूमिका: ${speakerRole || "उल्लेख नगरिएको"}`,
      `श्रोता/दर्शक: ${audienceType || "उल्लेख नगरिएको"}`,
      occasion && `अवसर/थीम: ${occasion}`,
      keyPoints && `मुख्य बुँदाहरू: ${keyPoints}`,
      tone && `आवश्यक टोन: ${toneOptions.find((t) => t.value === tone)?.label}`,
      length && `अवधि: ${length}`,
      names && `महत्वपूर्ण नाम/संस्था/मुख्य अतिथि: ${names}`,
      dateVenue && `मिति/स्थान (यदि बोल्न मिल्ने भए): ${dateVenue}`,
      "कृपया उद्घाटन, मुख्य भाग र समापन स्पष्ट शीर्षकसहित संरचित गर्नुस्, र जहाँ सान्दर्भिक हुन्छ, हल्का स्टेज–क्यू (जस्तै: [तालीको अनुरोध], [छोटो विराम]) पनि राख्न सकिन्छ।",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/tools/speech-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: programType || occasion || "कार्यक्रम",
          audience: audienceType || "सार्वजनिक श्रोता",
          duration: length || undefined,
          keyPoints: combinedKeyPoints,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Could not generate script.");
      }
      const base = typeof data.text === "string" ? data.text : "";
      setOutput(base);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unexpected error while generating the script.",
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
    doc.save("speech-program-script.pdf");
  }

  return (
    <div className="page-shell space-y-10 pb-24 pt-10 md:space-y-14 md:pt-16">
      <section className="section-shell border-b border-white/10 pb-10 pt-4 md:pb-14">
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Public Tools · Speeches
          </p>
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
            Speech &amp; Program Script Desk
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-[0.95rem]">
            A civic writing desk for preparing clear, respectful, and well-structured
            speeches, welcome notes, vote-of-thanks messages, and stage scripts for
            public programs in Nepal.
          </p>
          <p className="text-[0.7rem] text-zinc-500">
            Output is AI-assisted and should be reviewed before delivery. This tool does
            not replace institutional or legal guidance.
          </p>
          <div className="mt-4 space-y-1 text-sm text-zinc-300">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Who uses this desk
            </p>
            <ul className="mt-1 grid gap-1 text-[0.8rem] text-zinc-300 md:grid-cols-2">
              <li>• Teachers and school leaders</li>
              <li>• Local representatives and ward chairs</li>
              <li>• Community organizers and NGOs</li>
              <li>• Youth event hosts and emcees</li>
              <li>• Cultural and festival committees</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.4fr)] md:items-start">
          {/* Form */}
          <form
            onSubmit={handleGenerate}
            className="space-y-4 rounded-3xl border border-white/12 bg-white/[0.03] p-5 text-sm text-zinc-100 md:p-6"
          >
            {/* Quick start templates */}
            <div className="space-y-1">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                Quick start templates
              </p>
              <div className="flex flex-wrap gap-2">
                {quickTemplates.map((qt) => (
                  <button
                    key={qt.label}
                    type="button"
                    onClick={() => {
                      setProgramType(qt.programType);
                      setSpeakerRole(qt.speakerRole);
                      setAudienceType(qt.audienceType);
                      setOccasion(qt.occasion);
                      setKeyPoints(qt.keyPoints);
                      setTone(qt.tone);
                      setLength(qt.length);
                    }}
                    className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium text-zinc-100 hover:border-white/40"
                  >
                    {qt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                Program type
              </label>
              <input
                value={programType}
                onChange={(e) => setProgramType(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                placeholder="जस्तै: विद्यालय वार्षिक कार्यक्रम, उद्घाटन, सम्मान कार्यक्रम…"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                  Speaker role
                </label>
                <input
                  value={speakerRole}
                  onChange={(e) => setSpeakerRole(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                  placeholder="जस्तै: कार्यक्रम संयोजक, वडा अध्यक्ष, प्रधानाध्यापक…"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                  Audience type
                </label>
                <input
                  value={audienceType}
                  onChange={(e) => setAudienceType(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                  placeholder="जस्तै: विद्यार्थी, अभिभावक, समुदायका बासिन्दा…"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                Occasion / theme
              </label>
              <input
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                placeholder="जस्तै: शिक्षक दिवस, युवा नेतृत्व कार्यक्रम, सार्वजनिक भेला…"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                Key points to mention
              </label>
              <textarea
                value={keyPoints}
                onChange={(e) => setKeyPoints(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                placeholder="सम्बोधनमा समावेश गर्नुपर्ने मुख्य बुँदाहरू, उदाहरण, सन्देशहरू…"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value as ToneType)}
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                >
                  {toneOptions.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                  Length
                </label>
                <input
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                  placeholder="जस्तै: ३–५ मिनेट, ५–७ मिनेट…"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                  Optional date / venue
                </label>
                <input
                  value={dateVenue}
                  onChange={(e) => setDateVenue(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                  placeholder="जस्तै: मिति, स्थान, हलको नाम…"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-400">
                Optional names / institutions / chief guest
              </label>
              <input
                value={names}
                onChange={(e) => setNames(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-zinc-100 outline-none"
                placeholder="जस्तै: मुख्य अतिथि, सह–आयोजक संस्था, विशेष पाहुना…"
              />
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
                {loading ? "Generating…" : "Generate script"}
              </button>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!output}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-100 disabled:opacity-40"
              >
                {copied ? "Copied" : "Copy text"}
              </button>
              <button
                type="button"
                onClick={handleCopyWithCredit}
                disabled={!output}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-100 disabled:opacity-40"
              >
                {creditCopied ? "Copied with credit" : "Copy with credit"}
              </button>
              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={!output}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-100 disabled:opacity-40"
              >
                Download PDF
              </button>
            </div>
          </form>

          {/* Output */}
          <div className="space-y-4 rounded-3xl border border-white/12 bg-black/40 p-5 text-sm text-zinc-100 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                  Generated script
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Structured with greeting, body, closing, and optional stage cues where
                  relevant.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-zinc-100"
              >
                {linkCopied ? "Link copied" : "Share template link"}
              </button>
            </div>
            <div className="min-h-[260px] rounded-2xl border border-white/10 bg-black/60 p-4 text-sm leading-relaxed text-zinc-100">
              {output ? (
                <pre className="whitespace-pre-wrap font-sans text-sm text-zinc-100">
                  {output}
                </pre>
              ) : (
                <p className="text-xs text-zinc-500">
                  Fill the fields on the left or start with a template to generate a
                  Nepali speech or program script. The desk will include greeting,
                  structured body, respectful closing, and, where useful, light stage cues
                  for delivery.
                </p>
              )}
            </div>
            <div className="space-y-2 border-t border-white/10 pt-4 text-xs text-zinc-300">
              <p className="text-[0.7rem] text-zinc-500">
                Optional footer for shared drafts: “Draft prepared via Janak AI Public
                Desk – JanakKhadka.com”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="space-y-2 text-xs text-zinc-400">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Related Codex nodes
          </p>
          <ul className="mt-1 space-y-1">
            <li>
              <Link
                href="/blog/speech-structure-in-public-programs"
                className="underline-offset-4 hover:text-zinc-200 hover:underline"
              >
                Speech Structure in Public Programs
              </Link>
            </li>
            <li>
              <Link
                href="/blog/voice-and-respect-on-stage"
                className="underline-offset-4 hover:text-zinc-200 hover:underline"
              >
                Voice, Tempo, and Respect on Stage
              </Link>
            </li>
            <li>
              <Link
                href="/blog/civic-speaking-in-nepali-contexts"
                className="underline-offset-4 hover:text-zinc-200 hover:underline"
              >
                Civic Speaking in Nepali Contexts
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

