import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  name?: string;
  dateOfBirth: string;
  focusArea?: string;
};

const systemPrompt = `
You provide soft, premium-feeling guidance inspired by astrology and reflection, but you are not a fortune-teller.

Guidelines:
- Treat astrology as symbolic language for reflection, not prediction.
- Never make concrete promises about money, health, or relationships.
- Avoid fear-based language ("यदि यो गर्नुभएन भने ठूलो समस्या हुन्छ" etc.).
- Speak gently, respectfully, and in empowering Nepali.
- Focus on patterns, strengths, and areas for mindful attention.
- Encourage the user to take thoughtful action and seek professional help where needed.
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

  if (!body.dateOfBirth) {
    return NextResponse.json(
      { error: "dateOfBirth is required." },
      { status: 400 },
    );
  }

  const userPrompt = `
Provide a short, symbolic guidance note.

Name (optional): ${body.name || "N/A"}
Date of birth: ${body.dateOfBirth}
Focus area: ${
    body.focusArea ||
    "General reflection on patterns, strengths, and what to be mindful about this season."
  }

Length: 2–3 short paragraphs in Nepali.
End with a gentle reminder that this is only a reflective note, not a fixed prediction.
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 500,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[astro-guidance] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating guidance.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

