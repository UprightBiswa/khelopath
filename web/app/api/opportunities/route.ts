import { ok } from "@/lib/api-response";
import { isAdminSession } from "@/lib/admin-auth";
import { hasDatabaseUrl, prisma } from "@/lib/db";
import { listOpportunities } from "@/lib/server-data";
import { z } from "zod";

const opportunitySchema = z.object({
  title: z.string().min(3),
  sport: z.string().min(2).default("Cycling"),
  state: z.string().min(2).default("Assam"),
  district: z.string().optional(),
  city: z.string().optional(),
  description: z.string().min(10),
  organisationType: z.string().min(3).default("Training Centre"),
  eligibility: z.string().min(10),
  documents: z.array(z.string()).default(["Age proof", "Athlete profile"]),
  nextSteps: z.array(z.string()).default(["Create athlete profile", "Submit application"]),
  image: z.string().url().optional().or(z.literal("")),
  matchScore: z.number().min(0).max(100).default(80)
});

export async function GET() {
  return ok(await listOpportunities());
}

export async function POST(request: Request) {
  if (!(await isAdminSession())) {
    return Response.json({ ok: false, message: "Admin login required" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = opportunitySchema.parse(body);
  const id = parsed.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  if (hasDatabaseUrl()) {
    try {
      const opportunity = await prisma.opportunity.upsert({
        where: { id },
        update: parsed,
        create: {
          id,
          ...parsed,
          image: parsed.image || "/images/khelopath-cyclist-hero.png",
          status: "open"
        }
      });
      return ok(opportunity);
    } catch {
      // Keep route usable before production migration.
    }
  }

  return ok({
    id,
    ...parsed,
    image: parsed.image || "/images/khelopath-cyclist-hero.png",
    status: "open",
    saved: false,
    note: "Returned synthetic response because database is not ready."
  });
}
