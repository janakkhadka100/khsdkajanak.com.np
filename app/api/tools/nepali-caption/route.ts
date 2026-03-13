import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  postType: string;
  tone?: string;
  keyPoints?: string;
};

const systemPrompt = `
You help Nepali users write strong, context-aware captions and short texts.

Guidelines:
- Write primarily in natural Nepali. You may mix English phrases if they feel organic to the context.
- Ask yourself: would this sound good on a public post in Nepal?
- Avoid slang that may feel cheap or disrespectful.
- Offer 2–3 concise caption options. Vary tone and length slightly.
- If the user asks, you may suggest where emojis might fit, but do not overuse them.
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

  if (!body.postType) {
    return NextResponse.json(
      { error: "postType is required." },
      { status: 400 },
    );
  }

  const userPrompt = `
Write 2–3 Nepali caption options for the following context.

Post type: ${body.postType}
Tone: ${body.tone || "respectful, thoughtful, public-facing"}
Key points or details: ${body.keyPoints || "Use your judgement to keep it balanced and dignified."}

Format clearly with numbered options.
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 500,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[nepali-caption] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating captions.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

