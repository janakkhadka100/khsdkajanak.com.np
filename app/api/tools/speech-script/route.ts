import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  eventType: string;
  audience: string;
  duration?: string;
  keyPoints?: string;
};

const systemPrompt = `
You help Nepali users draft speeches and program scripts for events.

Guidelines:
- Write primarily in Nepali, with natural tone suitable for the specified event.
*- Clearly mark sections: उद्घाटन, मुख्य भाग, समापन (or similar, as appropriate).
- Aim for content that can be spoken on stage: rhythmic, clear, and respectful.
- Do not include political party campaigning or extreme partisan language.
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

  if (!body.eventType || !body.audience) {
    return NextResponse.json(
      { error: "eventType and audience are required." },
      { status: 400 },
    );
  }

  const userPrompt = `
Draft a speech or program script in Nepali.

Event type: ${body.eventType}
Audience: ${body.audience}
Approximate duration: ${body.duration || "5–7 minutes"}
Key points or themes: ${
    body.keyPoints ||
    "Use a respectful, inspiring structure with clear opening, body, and closing."
  }

Format with section headings and line breaks so it is easy to read on stage.
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 900,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[speech-script] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating the speech.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

