import { ok } from "@/lib/api-response";
import { askJson } from "@/lib/ai";
import { z } from "zod";

const intentSchema = z.object({
  text: z.string().default("I am a 21 year old cyclist from Guwahati and want to compete.")
});

const fallback = {
  sport: "cycling",
  location: "Guwahati",
  state: "Assam",
  age: 21,
  goal: "competition"
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { text } = intentSchema.parse(body);

  const result = await askJson(
    `Extract athlete intent as strict JSON with keys sport, location, state, age, goal. No markdown. Text: ${text}`,
    fallback
  );

  return ok(result);
}
