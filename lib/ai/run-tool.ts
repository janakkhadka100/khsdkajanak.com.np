import { openai } from "@/lib/ai/client";

export async function runTextTool({
  systemPrompt,
  userPrompt,
  maxOutputTokens = 700,
}: {
  systemPrompt: string;
  userPrompt: string;
  maxOutputTokens?: number;
}) {
  if (!openai) {
    throw new Error("OPENAI_API_KEY is not configured on the server.");
  }

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    max_output_tokens: maxOutputTokens,
  });

  const output = response.output[0] as { content?: Array<{ type: string; text?: string }> } | undefined;
  const firstContent = output?.content?.[0];
  const content =
    firstContent?.type === "output_text" && typeof firstContent.text === "string"
      ? firstContent.text
      : null;

  if (!content) {
    throw new Error("No content returned from OpenAI.");
  }

  return content;
}

