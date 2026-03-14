"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function AstrologyPage() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [focus, setFocus] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!dob) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/tools/astro-guidance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || undefined,
          dateOfBirth: dob,
          focusArea: focus || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unexpected error");
      setResult(data.text as string);
      trackEvent("astrology_guidance_generated", { success: true });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not generate guidance right now.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page-shell space-y-14 pb-24 pt-10 md:space-y-18 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guidance", href: "/ai-tools" },
            { label: "Astrology & reflection" },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Astrology & guidance
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          A quiet, premium corner for reflection — not fear.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          This space treats astrology as a symbolic language to think about
          patterns, tendencies, and timing — not as a rigid prediction machine.
          The goal is to give you a few lines of reflection, not to decide your
          life for you.
        </p>
        <p className="mt-3 text-[0.7rem] text-gray-600">
          Disclaimer: This is an AI-assisted, experimental experience. It is
          not medical, legal, or financial advice. For serious decisions, talk
          to qualified professionals and trusted people in your life.
        </p>
      </section>

      <section className="section-shell border-b-0">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] md:items-start">
          <form
            onSubmit={handleGenerate}
            className="space-y-4 rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-8"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Soft guidance
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Share only what you are comfortable with. Name is optional. Date
              of birth helps the system anchor the reflection.
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
                  Name (optional)
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
                  placeholder="तपाईंको नाम (राख्न नचाहे खाली राख्नुस्)"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
                  Date of birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.18em] text-gray-600">
                Focus area (optional)
              </label>
              <input
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-600"
                placeholder="जस्तो: काम, पढाइ, सम्बन्ध, निर्णय, ऊर्जा..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-royal-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-royal-primary-hover disabled:opacity-60"
            >
              {loading ? "Receiving..." : "Receive a short guidance note"}
            </button>
          </form>

          <aside className="space-y-4 text-sm text-gray-700">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                How to use this
              </p>
              <p className="mt-3">
                Treat whatever you receive as a mirror, not an order. Keep what
                feels true and respectful to you. Leave the rest.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 text-xs text-gray-600">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                Future direction
              </p>
              <p className="mt-3">
                Over time, this space can evolve into a premium consultation and
                in-depth report experience that combines human insight and
                carefully guided AI assistance — always with transparency and
                boundaries.
              </p>
            </div>

            {error && (
              <p className="text-[0.75rem] text-red-600">Error: {error}</p>
            )}
            {result && (
              <div className="space-y-2 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                  Reflection
                </p>
                <p className="whitespace-pre-line">{result}</p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}

