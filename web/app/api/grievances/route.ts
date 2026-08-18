import { ok } from "@/lib/api-response";

export async function POST() {
  return ok({
    id: "GRV-2026-0091",
    category: "Application verification delay",
    priority: "Normal",
    suggestedRouting: "Sports Programme Authority",
    status: "Submitted"
  });
}

