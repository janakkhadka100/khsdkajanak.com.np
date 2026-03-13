import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  name?: string;
  role?: string;
  context?: string;
  length?: "short" | "medium" | "long";
};

const systemPrompt = `
You help Nepali users write strong public bios and profiles.

Guidelines:
- Write primarily in natural Nepali; you may mix English job titles or phrases if appropriate.
- Target contexts like: artists, candidates, organizers, professionals, community leaders.
- Keep tone respectful, confident, and not exaggerated.
- Avoid political party campaigning or direct endorsement.
- Do not invent achievements; expand only on what the user gives.
- Offer one clear bio in paragraphs, plus a shorter version if helpful.
`.trim();

export async function POST(req: Request) {
  let body: RequestBody;

  try {
    body = (await req.json()) as RequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!body.context) {
    return NextResponse.json(
      { error: "context is required to describe the person." },
      { status: 400 },
    );
  }

  const lengthLabel =
    body.length === "short"
      ? "Short bio (2–3 वाक्य)"
      : body.length === "long"
        ? "Detailed bio (3–5 अनुच्छेद)"
        : "Medium bio (1–2 अनुच्छेद)";

  const userPrompt = `
Write a Nepali public bio.

Name: ${body.name || "N/A"}
Role or identity: ${body.role || "N/A"}
Context and key points: ${body.context}

Please provide:
1) ${lengthLabel}
2) A shorter version suitable for social media or introductions.
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 700,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[bio-writer] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating the bio.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

