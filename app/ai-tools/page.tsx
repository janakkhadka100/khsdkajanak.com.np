"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type ToolId =
  | "janak-chat"
  | "caption"
  | "letter"
  | "speech"
  | "press"
  | "bio"
  | "tribute"
  | "proposal";

const tools: { id: ToolId; label: string; description: string }[] = [
  {
    id: "janak-chat",
    label: "Janak AI Chat",
    description:
      "Ask about films, ideas, public messaging, creativity, Nepal, and soft life direction.",
  },
  {
    id: "caption",
    label: "Caption Desk",
    description:
      "Generate Nepali captions for events, tributes, public posts, and announcements.",
  },
  {
    id: "letter",
    label: "Formal Letter Desk",
    description:
      "Draft Nepali formal letters, requests, notices, invitations, and clarifications.",
  },
  {
    id: "speech",
    label: "Public Program Desk",
    description:
      "Create stage-ready scripts for programs, events, and public addresses.",
  },
  {
    id: "press",
    label: "Press Desk",
    description:
      "Write Nepali press notes and news-style announcements for media use.",
  },
  {
    id: "bio",
    label: "Biography Desk",
    description:
      "Create public bios and profiles for artists, organizers, professionals, and candidates.",
  },
  {
    id: "tribute",
    label: "Tribute Desk",
    description:
      "Draft sensitive Nepali messages for tributes, congratulations, and condolences.",
  },
  {
    id: "proposal",
    label: "Project Proposal Helper",
    description:
      "Turn rough ideas into structured project or campaign concepts.",
  },
];

export default function AiToolsPage() {
  const [activeTool, setActiveTool] = useState<ToolId>("janak-chat");

  return (
    <div className="page-shell space-y-12 pb-24 pt-10 md:space-y-16 md:pt-16">
      <section className="section-shell border-b border-white/10 pb-8 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          AI tools hub
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          Practical AI utilities for Nepali public life.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          These tools are designed for how people in Nepal actually write:
          letters to offices, program speeches, captions, tributes, and
          announcements. Every output is AI-assisted and should be reviewed and
          edited before use.
        </p>
        <p className="mt-3 text-[0.7rem] text-zinc-500">
          Disclaimer: These tools do not provide legal, medical, or financial
          advice. They are assistants for drafting language only.
        </p>
      </section>

      <section className="section-shell border-b-0">
        <div className="grid gap-6 md:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="space-y-3 rounded-3xl border border-white/12 bg-white/[0.03] p-3 text-xs text-zinc-200">
            {tools.map((tool) => (
              <button
                key={tool.id}
                type="button"
                onClick={() => {
                trackEvent("tool_opened", { tool_id: tool.id });
                setActiveTool(tool.id);
              }}
                className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
                  activeTool === tool.id
                    ? "border-[#f5b048]/80 bg-white/[0.08]"
                    : "border-white/10 bg-transparent hover:border-white/30 hover:bg-white/[0.04]"
                }`}
              >
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
                  {tool.label}
                </p>
                <p className="mt-1 text-[0.72rem] text-zinc-300">
                  {tool.description}
                </p>
              </button>
            ))}
          </aside>

          <div className="space-y-6">
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
    <div className="card-elevated relative overflow-hidden p-6 text-sm text-zinc-50 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,176,72,0.16),transparent_55%)]" />
      <div className="relative space-y-4">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-300">
            Janak AI Chat
          </p>
          <p className="mt-2 text-sm text-zinc-100">
            Ask about films, creative direction, public messaging, strategy for
            Nepal, or soft life questions. Responses are{" "}
            <span className="font-medium text-zinc-50">
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
            className="w-full rounded-2xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
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
          <div className="mt-3 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
              Response
            </p>
            <p className="whitespace-pre-line text-sm text-zinc-100">
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
    <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-sm text-zinc-50 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        Nepali Caption Studio
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        For Facebook posts, event announcements, tributes, congratulations,
        condolences, and public notes.
      </p>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Post type / context
          </label>
          <input
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="Example: फिल्म प्रिमियरको निम्तो, शिक्षकलाई धन्यवाद, कार्यक्रमको फोटो पोस्ट"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Tone (optional)
          </label>
          <input
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="Example: सम्मानजनक, औपचारिक, आत्मीय, रमाइलो"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Key points (optional)
          </label>
          <textarea
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            rows={3}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
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
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
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
    <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-sm text-zinc-50 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        Formal Letter Desk
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        For offices, institutions, municipalities, colleges, and public
        organizations.
      </p>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Letter type
            </label>
            <select
              value={letterType}
              onChange={(e) => setLetterType(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none"
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
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Recipient
            </label>
            <input
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="जस्तो: वडा कार्यालय, विद्यालयको प्राचार्य, संस्थाको अध्यक्ष..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="के विषयमा पत्र लेख्दै हुनुहुन्छ?"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Details (optional)
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
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
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
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
    <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-sm text-zinc-50 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        Speech & Program Script
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        For events, school and college programs, award functions, inaugurations,
        and public addresses.
      </p>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Event type
            </label>
            <input
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="जस्तो: उद्घाटन कार्यक्रम, सम्मान समारोह, विद्यार्थी भेला..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Audience
            </label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="जस्तो: विद्यार्थी, कलाकार, समुदायका अगुवा, पत्रकार..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Approx. duration (optional)
          </label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="उदाहरण: ३–५ मिनेट"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Key points (optional)
          </label>
          <textarea
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
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
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
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
    <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-sm text-zinc-50 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        Press Note & Headline
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        For organizations, events, campaigns, and announcements that need media
        clarity.
      </p>

      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Announcement type
            </label>
            <input
              value={announcementType}
              onChange={(e) => setAnnouncementType(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="जस्तो: नयाँ कार्यक्रम, फिल्म प्रदर्शन, पुरस्कार घोषणा..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Organization / team
            </label>
            <input
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="सम्बन्धित संस्था, टिम वा समूह"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Headline idea (optional)
          </label>
          <input
            value={headlineIdea}
            onChange={(e) => setHeadlineIdea(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="कस्तो हेडलाइन मन परेको छ? छैन भने खाली राख्नुस्।"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Key details (optional)
          </label>
          <textarea
            value={keyDetails}
            onChange={(e) => setKeyDetails(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
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
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
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
    <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-sm text-zinc-50 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        Bio / Profile Writer
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        For artists, organizers, candidates, and public figures who need a clear
        Nepali profile.
      </p>
      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Name (optional)
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="Name of the person"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Role / identity (optional)
            </label>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="Example: filmmaker, community organizer, candidate..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Context / achievements
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="Write key points: work, experience, values, and what this person is known for."
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Length
          </label>
          <select
            value={length}
            onChange={(e) =>
              setLength(e.target.value as "short" | "medium" | "long")
            }
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none"
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
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
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
    <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-sm text-zinc-50 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        Tribute / Congratulations / Condolence
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        For sensitive posts, event speeches, and program notes that must feel
        dignified.
      </p>
      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Occasion
          </label>
          <input
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="Example: condolence for a community elder, congratulations for award, tribute to mentor..."
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Relationship (optional)
            </label>
            <input
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="Example: student, colleague, family friend..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Tone (optional)
            </label>
            <input
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="Example: very gentle, grateful, formal..."
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Details (optional)
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
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
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
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
    <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-sm text-zinc-50 md:p-8">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
        Project Proposal Helper
      </p>
      <p className="mt-2 text-sm text-zinc-200">
        For campaigns, programs, and initiatives that need a clear, structured
        concept note.
      </p>
      <form onSubmit={handleGenerate} className="mt-4 space-y-3">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Working title (optional)
          </label>
          <input
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="Example: Community Film & Conversation Series"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
            Background / context
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
            placeholder="Describe the idea, where it comes from, and why it matters."
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Main goal (optional)
            </label>
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
              placeholder="What change/result are you aiming for?"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.18em] text-zinc-400">
              Audience / beneficiaries (optional)
            </label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500"
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
        <div className="mt-4 space-y-2 rounded-2xl border border-white/12 bg-black/40 p-4 text-sm text-zinc-100">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
            Draft
          </p>
          <p className="whitespace-pre-line">{result}</p>
        </div>
      )}
    </div>
  );
}

