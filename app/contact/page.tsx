"use client";

import { useState } from "react";
import Link from "next/link";
import { saveInquiry, type InquiryType } from "@/lib/inquiries";
import { trackEvent } from "@/lib/analytics";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const INQUIRY_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: "media", label: "Media / press" },
  { value: "collaboration", label: "Collaboration / partnerships" },
  { value: "speaking", label: "Speaking / hosting invitation" },
  { value: "consultation", label: "Consultation" },
  { value: "investor", label: "Investor / support inquiry" },
  { value: "general", label: "General inquiry" },
];

const BUDGET_OPTIONS = [
  "",
  "Under NPR 50k",
  "NPR 50k – 1 Lakh",
  "NPR 1 Lakh+",
  "Prefer not to say",
];

const COPY_BLOCKS = [
  {
    title: "Media & press",
    body: "Interviews, quotes, expert comment, and press-related requests. Please include outlet, deadline, and topic.",
  },
  {
    title: "Collaboration & partnerships",
    body: "Film, content, or campaign collaborations with brands, institutions, or creators. Share your project and goals.",
  },
  {
    title: "Strategic consultation",
    body: "Storytelling, messaging, and strategic support for organizations or initiatives. Describe the scope and timeline.",
  },
  {
    title: "Support / investment interest",
    body: "Interest in supporting the platform, advisory roles, or investment conversations. We respond to serious inquiries.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [phone, setPhone] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await saveInquiry({
      inquiry_type: inquiryType,
      name: name.trim(),
      email: email.trim(),
      organization: organization.trim() || undefined,
      phone: phone.trim() || undefined,
      budget_range: budgetRange || undefined,
      message: message.trim(),
    });

    if (result.ok) {
      trackEvent("contact_submitted", { inquiry_type: inquiryType });
      setStatus("success");
      setName("");
      setEmail("");
      setOrganization("");
      setInquiryType("general");
      setPhone("");
      setBudgetRange("");
      setMessage("");
    } else {
      setStatus("error");
      setErrorMessage(result.error);
    }
  }

  if (status === "success") {
    return (
      <div className="page-shell space-y-16 pb-24 pt-10 md:pt-16">
        <section className="section-shell border-b border-gray-200 pb-10 pt-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
            className="mb-4"
          />
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Thank you
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            We received your inquiry.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-700">
            A member of the team will read your message and respond with next steps. Please allow a few days for a thoughtful reply.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-2 border-royal-primary px-5 py-2 text-xs font-medium text-gray-700 backdrop-blur-md transition hover:bg-gray-50"
          >
            Send another message
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Contact & collaboration
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Media, collaborations, projects, and investment conversations.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          Use this channel for media requests, collaborations, speaking invitations,
          strategic advisory, or support conversations. A member of the team will
          read your message and respond with next steps.
        </p>
      </section>

      <section className="section-shell border-b-0">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-sm text-gray-900 md:p-7"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-600"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-600"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="organization"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600"
                >
                  Organization / affiliation
                </label>
                <input
                  id="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-600"
                  placeholder="Media house, brand, institution, or self"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="inquiryType"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600"
                >
                  Inquiry type
                </label>
                <select
                  id="inquiryType"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value as InquiryType)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0"
                >
                  {INQUIRY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600"
                >
                  Phone / WhatsApp (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-600"
                  placeholder="+977 ..."
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="budget"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600"
                >
                  Budget range (optional)
                </label>
                <select
                  id="budget"
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt || "none"} value={opt}>
                      {opt || "Select if relevant"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-600"
                placeholder="Share context, timelines, and what you would like to explore together."
              />
            </div>

            {status === "error" && (
              <p className="text-[0.75rem] text-red-600">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-royal-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_60px_rgba(0,0,0,0.85)] disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Submit inquiry"}
            </button>
            <p className="text-[0.7rem] text-gray-600">
              We read every message. Response times vary; we will get back to you with next steps.
            </p>
          </form>

          <aside className="space-y-6 text-sm text-gray-700">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                What happens next
              </p>
              <p className="mt-3">
                Every message is read. We respond to serious inquiries with next steps—often within a few days. Not every request can be accepted; we will be clear about what is possible.
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                How this channel is used
              </p>
              <p className="mt-3">
                Film and content collaborations, editorial and media formats, strategic
                storytelling, AI and public tools, and serious public initiatives.
              </p>
            </div>
            {COPY_BLOCKS.map((block) => (
              <div key={block.title}>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                  {block.title}
                </p>
                <p className="mt-2 text-gray-700">{block.body}</p>
              </div>
            ))}
            <div className="rounded-xl border border-gray-200 shadow-sm p-4">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                Supporting the platform
              </p>
              <p className="mt-2 text-gray-700">
                For membership, premium access, or investment interest, see{" "}
                <Link href="/membership" className="text-gray-900 underline underline-offset-2 hover:text-royal-primary">
                  Membership
                </Link>{" "}
                for options, then reach out via this channel.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
