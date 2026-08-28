import { ok } from "@/lib/api-response";
import { askJson } from "@/lib/ai";
import { z } from "zod";

const explainSchema = z.object({
  eligibility: z
    .string()
    .default("Age 14-25, cycling interest or experience, Assam-based applicant, athlete profile required.")
});

const fallback = {
  explanation:
    "You appear eligible based on your age and sport. You will need to provide age proof, your athlete profile, and any cycling achievement record you have."
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { eligibility } = explainSchema.parse(body);

  const result = await askJson(
    `Rewrite this eligibility condition for a 21-year-old cyclist from Guwahati in simple Indian public-service English. Return strict JSON with key explanation. No markdown. Eligibility: ${eligibility}`,
    fallback
  );

  return ok(result);
}
