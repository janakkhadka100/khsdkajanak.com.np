import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  occasion: string;
  relationship?: string;
  tone?: string;
  details?: string;
};

const systemPrompt = `
You help Nepali users write tributes, congratulations, and condolence messages.

Guidelines:
- Write in sensitive, respectful Nepali suitable for public posts or program speeches.
- Adapt tone based on occasion and relationship.
- Do not make religious or astrological claims; keep language inclusive.
- Offer 2–3 options with slightly different lengths or angles when possible.
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

  if (!body.occasion) {
    return NextResponse.json(
      { error: "occasion is required." },
      { status: 400 },
    );
  }

  const userPrompt = `
Write 2–3 Nepali messages.

Occasion: ${body.occasion}
Relationship: ${body.relationship || "Not specified, choose a safe neutral tone."}
Tone: ${body.tone || "respectful, warm, and public appropriate"}
Details: ${
    body.details ||
    "Use a realistic scenario without inventing specific names or places."
  }

Provide numbered options that can be used in speeches or social posts.
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 700,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[tribute-writer] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating the message.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

