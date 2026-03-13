import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.warn(
    "[ai] OPENAI_API_KEY is not set. AI tools API routes will return an error until it is configured.",
  );
}

export const openai = apiKey
  ? new OpenAI({
      apiKey,
    })
  : null;

