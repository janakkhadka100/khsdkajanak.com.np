import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  announcementType: string;
  organization: string;
  headlineIdea?: string;
  keyDetails?: string;
};

const systemPrompt = `
You help Nepali users draft press notes and news-style announcements.

Guidelines:
- Write in formal but readable Nepali, suitable for media and public distribution.
- Include a strong headline suggestion and a short sub-heading or lead.
- Structure body with clear paragraphs: what, who, when, where, and why.
- Avoid exaggerated marketing language; prioritize clarity and accuracy.
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

  if (!body.announcementType || !body.organization) {
    return NextResponse.json(
      {
        error: "announcementType and organization are required.",
      },
      { status: 400 },
    );
  }

  const userPrompt = `
Draft a Nepali press note.

Announcement type: ${body.announcementType}
Organization or team: ${body.organization}
Headline idea or theme: ${
    body.headlineIdea || "Suggest a clear, non-sensational headline."
  }
Key details: ${
    body.keyDetails ||
    "Use a realistic scenario. Include date, place, and core message."
  }

Include:
1. Headline
2. Short sub-heading / lead
3. Main body paragraphs
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 800,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[press-note] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating the press note.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

