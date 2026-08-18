import { ok } from "@/lib/api-response";

export async function POST() {
  return ok({
    id: "KP-2026-1042",
    status: "Under verification",
    currentAction: "No action is required from you right now."
  });
}

