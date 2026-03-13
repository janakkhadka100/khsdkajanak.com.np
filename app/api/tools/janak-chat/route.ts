import { NextResponse } from "next/server";
import { janakAiSystemPrompt } from "@/lib/ai/prompts";
import { runTextTool } from "@/lib/ai/run-tool";

export const runtime = "nodejs";

type RequestBody = {
  message: string;
};

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

  if (!body.message || typeof body.message !== "string") {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 },
    );
  }

  try {
    const reply = await runTextTool({
      systemPrompt: janakAiSystemPrompt,
      userPrompt: body.message,
      maxOutputTokens: 600,
    });

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[janak-chat] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while generating a response.";
    const status = message.includes("OPENAI_API_KEY") ? 500 : 502;

    return NextResponse.json({ error: message }, { status });
  }
}


