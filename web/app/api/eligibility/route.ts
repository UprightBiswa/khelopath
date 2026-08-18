import { ok } from "@/lib/api-response";

export async function POST() {
  return ok({
    eligible: true,
    summary:
      "You appear eligible based on your age, sport, and location. Keep age proof, an athlete profile, and sports achievement records ready.",
    matchedRules: ["Age 14-25", "Cycling pathway", "Assam-based applicant"],
    missingDocuments: []
  });
}

