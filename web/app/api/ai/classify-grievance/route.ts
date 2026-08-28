import { ok } from "@/lib/api-response";
import { askJson } from "@/lib/ai";
import { z } from "zod";

const classifySchema = z.object({
  description: z.string().default("My application has been under verification for 15 days.")
});

const fallback = {
  category: "Application Delay",
  priority: "Normal",
  suggestedRouting: "Sports Registration"
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { description } = classifySchema.parse(body);

  const result = await askJson(
    `Classify this sports public-service grievance as strict JSON with keys category, priority, suggestedRouting. No markdown. Complaint: ${description}`,
    fallback
  );

  return ok(result);
}
