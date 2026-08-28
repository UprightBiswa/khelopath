import { ok } from "@/lib/api-response";
import { hasDatabaseUrl, prisma } from "@/lib/db";
import { z } from "zod";

const grievanceSchema = z.object({
  userId: z.string().default("KP-DEMO-USER-001"),
  applicationId: z.string().default("KP-2026-1042"),
  description: z.string().default("My application has been under verification for 15 days."),
  category: z.string().default("Application verification delay")
});

export async function GET() {
  if (!hasDatabaseUrl()) {
    return ok([
      {
        id: "GRV-2026-0091",
        category: "Application verification delay",
        priority: "Normal",
        suggestedRouting: "Sports Programme Authority",
        status: "Submitted"
      }
    ]);
  }

  try {
    return ok(
      await prisma.grievance.findMany({
        include: { application: true, user: true },
        orderBy: { createdAt: "desc" }
      })
    );
  } catch {
    return ok([]);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const parsed = grievanceSchema.parse(body);

  if (hasDatabaseUrl()) {
    try {
      const grievance = await prisma.grievance.upsert({
        where: { id: "GRV-2026-0091" },
        update: {
          category: parsed.category,
          description: parsed.description,
          status: "Submitted",
          assignedTo: "Sports Programme Authority"
        },
        create: {
          id: "GRV-2026-0091",
          userId: parsed.userId,
          applicationId: parsed.applicationId,
          category: parsed.category,
          description: parsed.description,
          status: "Submitted",
          assignedTo: "Sports Programme Authority"
        }
      });
      return ok({
        id: grievance.id,
        category: grievance.category,
        priority: "Normal",
        suggestedRouting: grievance.assignedTo,
        status: grievance.status
      });
    } catch {
      // Synthetic fallback keeps the public demo working before migrations.
    }
  }

  return ok({
    id: "GRV-2026-0091",
    category: "Application verification delay",
    priority: "Normal",
    suggestedRouting: "Sports Programme Authority",
    status: "Submitted"
  });
}
