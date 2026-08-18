import { ok } from "@/lib/api-response";

export async function POST() {
  return ok({
    sport: "cycling",
    location: "Guwahati",
    state: "Assam",
    age: 21,
    goal: "competition"
  });
}

