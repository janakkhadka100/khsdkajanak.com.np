"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type ToolId =
  | "janak-chat"
  | "caption"
  | "letter"
  | "speech"
  | "press"
  | "bio"
  | "tribute"
  | "proposal";

type ToolMeta = {
  id: ToolId;
  label: string;
  description: string;
  category: "conversation" | "civic" | "planning";
  featured?: boolean;
};

const tools: ToolMeta[] = [
  {
    id: "janak-chat",
    label: "Ask Janak AI",
    description:
      "Conversations about films, ideas, public messaging, creativity, and Nepal.",
    category: "conversation",
    featured: true,
  },
  {
    id: "caption",
    label: "Caption Desk",
    description: "Nepali captions for events, tributes, posts, and announcements.",
    category: "civic",
  },
  {
    id: "letter",
    label: "Formal Letter Desk",
    description: "Draft letters for offices, institutions, and civic requests.",
    category: "civic",
  },
  {
    id: "speech",
    label: "Speech & Program Desk",
    description: "Stage-ready scripts for programs and public addresses.",
    category: "civic",
  },
  {
    id: "press",
    label: "Press Desk",
    description: "Press notes and news-style announcements for media use.",
    category: "civic",
  },
  {
    id: "bio",
    label: "Biography Desk",
    description: "Public bios for artists, organizers, and public figures.",
    category: "civic",
  },
  {
    id: "tribute",
    label: "Tribute Desk",
    description: "Dignified tributes, congratulations, and condolences.",
    category: "civic",
  },
  {
    id: "proposal",
    label: "Project Proposal Helper",
    description: "Turn ideas into structured project or campaign concepts.",
    category: "planning",
  },
];

const categoryLabels: Record<string, string> = {
  conversation: "Start here",
  civic: "Civic writing desks",
  planning: "Planning & ideas",
};

export default function AiToolsPage() {
  const [activeTool, setActiveTool] = useState<ToolId>("janak-chat");

  return (
    <div className="page-shell space-y-12 pb-24 pt-10 md:space-y-16 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4 md:pb-12">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AI Tools" }]} className="mb-4" />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Janak AI Public Desk
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Practical AI tools for Nepali public life.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          Civic writing desks and conversation tools for letters, speeches, captions,
          tributes, and announcements. All outputs are drafting assistants—review and
          edit before use.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-3xl">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-600">
              Use cases
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gray-700">
              Students writing applications; organizers preparing scripts; citizens
              drafting ward letters; NGOs announcing programs. For everyday public
              writing in Nepal.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-600">
              Limitations
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gray-700">
              Not legal, medical, or financial advice. Drafts only—use your judgment.
              For full-featured letter and speech desks, see the{" "}
              <Link href="/public-desk" className="text-gray-900 underline underline-offset-2 hover:text-royal-accent">
                Public Desk
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="grid gap-6 md:grid-cols-[280px_minmax(0,1fr)]">
          <div className="md:hidden">
            <label htmlFor="tool-select" className="sr-only">
              Select tool
            </label>
            <select
              id="tool-select"
              value={activeTool}
              onChange={(e) => {
                const id = e.target.value as ToolId;
                trackEvent("tool_opened", { tool_id: id });
                setActiveTool(id);
              }}
              className="w-full min-h-[44px] rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none"
            >
              {tools.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.featured ? `${t.label} (Featured)` : t.label}
                </option>
              ))}
            </select>
          </div>
          <aside className="hidden space-y-4 rounded-xl border border-gray-200 bg-white shadow-sm p-4 md:block">
            {(["conversation", "civic", "planning"] as const).map((cat) => {
              const catTools = tools.filter((t) => t.category === cat);
              return (
                <div key={cat} className="space-y-2">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-600">
                    {categoryLabels[cat]}
                  </p>
                  {catTools.map((tool) => (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => {
                        trackEvent("tool_opened", { tool_id: tool.id });
                        setActiveTool(tool.id);
                      }}
                      className={`w-full min-h-[44px] rounded-xl border px-3 py-3 text-left transition ${
                        activeTool === tool.id
                          ? "border-royal-accent/50 bg-royal-accent/5"
                          : "border-gray-200 bg-transparent hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[0.75rem] font-medium text-gray-900">
                          {tool.label}
                        </span>
                        {tool.featured && (
                          <span className="rounded bg-[#f5b048]/20 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-royal-accent">
                            Featured
                          </span>
                        )}
                      </span>
                      <p className="mt-1 text-[0.7rem] leading-snug text-gray-600">
                        {tool.description}
                      </p>
                    </button>
                  ))}
                </div>
              );
            })}
          </aside>

          <div className="min-w-0 space-y-6">
            {activeTool === "janak-chat" && <JanakChatPanel />}
            {activeTool === "caption" && <CaptionPanel />}
            {activeTool === "letter" && <LetterPanel />}
            {activeTool === "speech" && <SpeechPanel />}
            {activeTool === "press" && <PressPanel />}
            {activeTool === "bio" && <BioWriterPanel />}
            {activeTool === "tribute" && <TributePanel />}
            {activeTool === "proposal" && <ProposalPanel />}
          </div>
        </div>
      </section>
    </div>
  );
}

function JanakChatPanel() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    setReply("");

    try {
      const res = await fetch("/api/tools/janak-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unexpected error");
      }
      setReply(data.reply as string);
      trackEvent("tool_generated", { tool_id: "janak-chat", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not reach Janak AI right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card-elevated relative overflow-hidden p-6 text-sm text-gray-900 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,176,72,0.16),transparent_55%)]" />
      <div className="relative space-y-4">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-700">
            Janak AI Chat
          </p>
          <p className="mt-2 text-sm text-gray-900">
            Ask about films, creative direction, public messaging, strategy for
            Nepal, or soft life questions. Responses are{" "}
            <span className="font-medium text-gray-900">
              AI-assisted, not personal advice
            </span>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Write in Nepali or English. Example: ‘मेरो सानो फिल्म परियोजनाको लागि कुन किसिमको कथा संरचना राम्रो हुन्छ?’"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
          >
            {loading ? "Thinking..." : "Ask Janak AI"}
          </button>
        </form>

        {error && (
          <p className="text-[0.75rem] text-red-300">Error: {error}</p>
        )}
        {reply && (
          <div className="mt-3 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Response
            </p>
            <p className="whitespace-pre-line text-sm text-gray-900">
              {reply}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function CaptionPanel() {
  const [postType, setPostType] = useState("");
  const [tone, setTone] = useState("");
  const [keyPoints, setKeyPoints] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!postType.trim()) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/nepali-caption", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postType, tone, keyPoints }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("tool_generated", { tool_id: "caption", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not generate captions right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
        Nepali Caption Studio
      </p>
      <p className="mt-2 text-sm text-gray-700">
        For Facebook posts, event announcements, tributes, congratulations,
        condolences, and public notes.
      </p>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Post type / context
          </label>
          <input
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Example: फिल्म प्रिमियरको निम्तो, शिक्षकलाई धन्यवाद, कार्यक्रमको फोटो पोस्ट"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Tone (optional)
          </label>
          <input
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Example: सम्मानजनक, औपचारिक, आत्मीय, रमाइलो"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Key points (optional)
          </label>
          <textarea
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            rows={3}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="नाम, स्थान, मिति, विशेष धन्यवाद दिनुपर्ने व्यक्तिहरू..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate captions"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[0.75rem] text-red-300">Error: {error}</p>
      )}
      {result && (
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Suggestions
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

function LetterPanel() {
  const [letterType, setLetterType] = useState("अनुरोध पत्र");
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!letterType || !recipient || !subject) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/formal-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ letterType, recipient, subject, details }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("tool_generated", { tool_id: "letter", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not generate letter right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Formal Letter Desk
          </p>
          <p className="mt-2 text-sm text-gray-700">
            For offices, institutions, municipalities, colleges, and public organizations.
          </p>
        </div>
        <Link
          href="/tools/nivedan-letter-architect"
          className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gray-600 underline-offset-2 hover:text-gray-900"
        >
          Full desk →
        </Link>
      </div>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Letter type
            </label>
            <select
              value={letterType}
              onChange={(e) => setLetterType(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
            >
              <option value="अनुरोध पत्र">अनुरोध पत्र</option>
              <option value="सिफारिस पत्र">सिफारिस पत्र</option>
              <option value="अनुमति पत्र">अनुमति पत्र</option>
              <option value="सूचना पत्र">सूचना / नोटिस</option>
              <option value="निमन्त्रण पत्र">निमन्त्रण पत्र</option>
              <option value="स्पष्टीकरण पत्र">स्पष्टीकरण पत्र</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Recipient
            </label>
            <input
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="जस्तो: वडा कार्यालय, विद्यालयको प्राचार्य, संस्थाको अध्यक्ष..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="के विषयमा पत्र लेख्दै हुनुहुन्छ?"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Details (optional)
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="तपाईंको प्रसंग, मिति, संख्या, र विशेष जानकारीहरू लेख्नुहोस्।"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate letter"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[0.75rem] text-red-300">Error: {error}</p>
      )}
      {result && (
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Draft
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

function SpeechPanel() {
  const [eventType, setEventType] = useState("");
  const [audience, setAudience] = useState("");
  const [duration, setDuration] = useState("");
  const [keyPoints, setKeyPoints] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!eventType || !audience) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/speech-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventType, audience, duration, keyPoints }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("tool_generated", { tool_id: "speech", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not generate speech right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Speech & Program Script
          </p>
          <p className="mt-2 text-sm text-gray-700">
            For events, school and college programs, inaugurations, and public addresses.
          </p>
        </div>
        <Link
          href="/tools/speech-program-desk"
          className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gray-600 underline-offset-2 hover:text-gray-900"
        >
          Full desk →
        </Link>
      </div>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Event type
            </label>
            <input
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="जस्तो: उद्घाटन कार्यक्रम, सम्मान समारोह, विद्यार्थी भेला..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Audience
            </label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="जस्तो: विद्यार्थी, कलाकार, समुदायका अगुवा, पत्रकार..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Approx. duration (optional)
          </label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="उदाहरण: ३–५ मिनेट"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Key points (optional)
          </label>
          <textarea
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="समावेश गर्नुपर्ने मुख्य सन्देश, व्यक्तिहरू, धन्यवाद..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate script"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[0.75rem] text-red-300">Error: {error}</p>
      )}
      {result && (
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Draft
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

function PressPanel() {
  const [announcementType, setAnnouncementType] = useState("");
  const [organization, setOrganization] = useState("");
  const [headlineIdea, setHeadlineIdea] = useState("");
  const [keyDetails, setKeyDetails] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!announcementType || !organization) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/press-note", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          announcementType,
          organization,
          headlineIdea,
          keyDetails,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("tool_generated", { tool_id: "press", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not generate press note right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
        Press Note & Headline
      </p>
      <p className="mt-2 text-sm text-gray-700">
        For organizations, events, campaigns, and announcements that need media
        clarity.
      </p>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Announcement type
            </label>
            <input
              value={announcementType}
              onChange={(e) => setAnnouncementType(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="जस्तो: नयाँ कार्यक्रम, फिल्म प्रदर्शन, पुरस्कार घोषणा..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Organization / team
            </label>
            <input
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="सम्बन्धित संस्था, टिम वा समूह"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Headline idea (optional)
          </label>
          <input
            value={headlineIdea}
            onChange={(e) => setHeadlineIdea(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="कस्तो हेडलाइन मन परेको छ? छैन भने खाली राख्नुस्।"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Key details (optional)
          </label>
          <textarea
            value={keyDetails}
            onChange={(e) => setKeyDetails(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="के, कहिले, कहाँ, को-को, किन? मुख्य बुँदाहरू लेख्नुस्।"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate press note"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[0.75rem] text-red-300">Error: {error}</p>
      )}
      {result && (
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Draft
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

function BioWriterPanel() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [context, setContext] = useState("");
  const [length, setLength] = useState<"short" | "medium" | "long">("medium");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!context.trim()) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/bio-writer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, context, length }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("tool_generated", { tool_id: "bio", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not generate bio right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
        Bio / Profile Writer
      </p>
      <p className="mt-2 text-sm text-gray-700">
        For artists, organizers, candidates, and public figures who need a clear
        Nepali profile.
      </p>
      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Name (optional)
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="Name of the person"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Role / identity (optional)
            </label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="Example: filmmaker, community organizer, candidate..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Context / achievements
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Write key points: work, experience, values, and what this person is known for."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Length
          </label>
          <select
            value={length}
            onChange={(e) =>
              setLength(e.target.value as "short" | "medium" | "long")
            }
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
          >
            <option value="short">Short bio</option>
            <option value="medium">Medium bio</option>
            <option value="long">Detailed bio</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate bio"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[0.75rem] text-red-300">Error: {error}</p>
      )}
      {result && (
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Draft
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

function TributePanel() {
  const [occasion, setOccasion] = useState("");
  const [relationship, setRelationship] = useState("");
  const [tone, setTone] = useState("");
  const [details, setDetails] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!occasion.trim()) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/tribute-writer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ occasion, relationship, tone, details }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("tool_generated", { tool_id: "tribute", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not generate messages right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
        Tribute / Congratulations / Condolence
      </p>
      <p className="mt-2 text-sm text-gray-700">
        For sensitive posts, event speeches, and program notes that must feel
        dignified.
      </p>
      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Occasion
          </label>
          <input
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Example: condolence for a community elder, congratulations for award, tribute to mentor..."
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Relationship (optional)
            </label>
            <input
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="Example: student, colleague, family friend..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Tone (optional)
            </label>
            <input
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="Example: very gentle, grateful, formal..."
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Details (optional)
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Names, contributions, event details, or personal memories you want to highlight."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate messages"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[0.75rem] text-red-300">Error: {error}</p>
      )}
      {result && (
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Suggestions
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

function ProposalPanel() {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [context, setContext] = useState("");
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!context.trim()) return;
    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/project-proposal-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ideaTitle, context, goal, audience }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("tool_generated", { tool_id: "proposal", success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not expand the idea right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
        Project Proposal Helper
      </p>
      <p className="mt-2 text-sm text-gray-700">
        For campaigns, programs, and initiatives that need a clear, structured
        concept note.
      </p>
      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Working title (optional)
          </label>
          <input
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Example: Community Film & Conversation Series"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
            Background / context
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
            placeholder="Describe the idea, where it comes from, and why it matters."
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Main goal (optional)
            </label>
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="What change/result are you aiming for?"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
              Audience / beneficiaries (optional)
            </label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
              placeholder="Who is this for?"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate concept note"}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[0.75rem] text-red-300">Error: {error}</p>
      )}
      {result && (
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-900">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Draft
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

