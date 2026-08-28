import OpenAI from "openai";

export function hasOpenAiKey() {
  return Boolean(process.env.OPENAI_API_KEY && !process.env.OPENAI_API_KEY.includes("placeholder"));
}

export async function askJson<T>(prompt: string, fallback: T): Promise<T> {
  if (!hasOpenAiKey()) {
    return fallback;
  }

  try {
    const client = new OpenAI();
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL ?? "gpt-5",
      input: prompt
    });

    return JSON.parse(response.output_text) as T;
  } catch {
    return fallback;
  }
}

