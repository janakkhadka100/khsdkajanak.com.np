import { NextResponse } from "next/server";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  letterType: string;
  recipient: string;
  subject: string;
  details?: string;
};

const systemPrompt = `
You help Nepali users draft formal letters, requests, notices, invitations, and clarifications.

Guidelines:
- Write in formal Nepali suitable for offices, organizations, and public institutions.
- Use respectful forms of address and closings appropriate to Nepali context.
- Keep structure clear: date placeholder, recipient, subject line, body, closing, sender placeholder.
- Do not invent personal data. Use placeholders like [नाम], [ठेगाना], [मिति], [पद] where needed.
- Avoid legal guarantees or promises; keep tone formal but not extreme.
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

  if (!body.letterType || !body.recipient || !body.subject) {
    return NextResponse.json(
      { error: "letterType, recipient, and subject are required." },
      { status: 400 },
    );
  }

  const userPrompt = `
Draft one formal Nepali ${body.letterType}.

Recipient: ${body.recipient}
Subject: ${body.subject}
Key details/context: ${
    body.details ||
    "Use a realistic, neutral scenario suitable for public offices in Nepal."
  }

Include clear placeholders for names, dates, and signatory details.
`.trim();

  try {
    const text = await runTextTool({
      systemPrompt,
      userPrompt,
      maxOutputTokens: 800,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("[formal-letter] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating the letter.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}

