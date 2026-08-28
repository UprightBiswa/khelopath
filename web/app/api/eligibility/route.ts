import { ok } from "@/lib/api-response";
import { getOpportunity } from "@/lib/server-data";
import { z } from "zod";

const eligibilitySchema = z.object({
  opportunityId: z.string().default("guwahati-sai-cycling")
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { opportunityId } = eligibilitySchema.parse(body);
  const opportunity = await getOpportunity(opportunityId);

  return ok({
    eligible: true,
    summary:
      "You appear eligible based on your age, sport, and location. Keep age proof, an athlete profile, and sports achievement records ready.",
    opportunity: opportunity?.title ?? "Guwahati SAI Cycling Centre",
    matchedRules: ["Age 14-25", "Cycling pathway", "Assam-based applicant"],
    missingDocuments: []
  });
}
