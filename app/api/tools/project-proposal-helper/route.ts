import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  ideaTitle?: string;
  context: string;
  goal?: string;
  audience?: string;
};

const systemPrompt = `
You help Nepali users turn rough ideas into clearer project or campaign concepts.

Guidelines:
- Write primarily in Nepali with simple, structured headings.
- Suitable for community projects, creative campaigns, events, or social initiatives.
- Structure the output: Background, Objective, Key Activities, Timeline (approx), and Expected Impact.
- Avoid budget numbers, legal claims, or political campaigning.
- Encourage realistic, actionable next steps.
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
      { error: "context is required to describe the idea." },
      { status: 400 },
    );
  }

  const userPrompt = `
Turn this idea into a simple Nepali project concept.

Idea title (optional): ${body.ideaTitle || "Suggest a short working title."}
Background / context: ${body.context}
Main goal: ${body.goal || "Summarize a realistic and grounded main goal."}
Audience or beneficiaries: ${
    body.audience || "Suggest likely beneficiaries in a neutral way."
  }

Structure the output with clear headings:
- पृष्ठभूमि (Background)
- उद्देश्य (Objective)
- मुख्य क्रियाकलापहरू (Key activities)
- समयरेखा (Approximate timeline)
- अपेक्षित प्रभाव (Expected impact)
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 900,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[project-proposal-helper] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while expanding the idea.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

