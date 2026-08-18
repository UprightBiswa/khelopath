import { ok } from "@/lib/api-response";

export async function POST() {
  return ok({
    explanation:
      "You appear eligible based on your age and sport. You will need to provide age proof, your athlete profile, and any cycling achievement record you have."
  });
}

