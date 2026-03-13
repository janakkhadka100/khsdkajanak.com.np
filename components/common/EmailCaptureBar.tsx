"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  variant?: "inline" | "block";
  nameOptional?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
};

export function EmailCaptureBar({
  variant = "block",
  nameOptional = true,
  title = "Dispatches from the Office of Janak Khadka",
  subtitle = "Monthly essays, frameworks, and platform updates. No spam.",
  className = "",
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), name: name.trim() || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      trackEvent("newsletter_submitted");
      setEmail("");
      setName("");
    } catch {
      setStatus("error");
      setErrorMsg("Could not submit. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-white/12 bg-white/[0.03] p-4 text-center text-sm text-zinc-200 ${className}`}>
        <p className="font-medium text-zinc-50">Thank you.</p>
        <p className="mt-1 text-xs text-zinc-400">We&apos;ll be in touch.</p>
      </div>
    );
  }

  const formContent = (
    <>
      {nameOptional && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (optional)"
          className="w-full rounded-lg border border-white/12 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 md:w-40"
        />
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full rounded-lg border border-white/12 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 md:w-48"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="shrink-0 rounded-full bg-[#f5b048] px-4 py-2 text-xs font-semibold text-black disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Subscribe"}
      </button>
    </>
  );

  return (
    <div className={`rounded-2xl border border-white/12 bg-white/[0.03] p-4 md:p-5 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-3">
          {title && (
            <p className="text-sm font-medium text-zinc-50">{title}</p>
          )}
          {subtitle && (
            <p className="mt-0.5 text-xs text-zinc-400">{subtitle}</p>
          )}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={
          variant === "inline"
            ? "flex flex-wrap items-center gap-2"
            : "flex flex-col gap-2 md:flex-row md:items-center"
        }
      >
        {formContent}
      </form>
      {status === "error" && (
        <p className="mt-2 text-[0.75rem] text-red-300">{errorMsg}</p>
      )}
    </div>
  );
}
