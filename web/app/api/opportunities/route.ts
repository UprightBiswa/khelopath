import { ok } from "@/lib/api-response";
import { opportunities } from "@/lib/demo-data";

export async function GET() {
  return ok(opportunities);
}

