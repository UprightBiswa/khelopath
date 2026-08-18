import { ok } from "@/lib/api-response";

export async function POST() {
  return ok({
    category: "Application Delay",
    priority: "Normal",
    suggestedRouting: "Sports Registration"
  });
}

