import { ok } from "@/lib/api-response";
import { currentUserId } from "@/lib/auth";
import { hasDatabaseUrl, prisma } from "@/lib/db";
import { z } from "zod";

const applicationSchema = z.object({
  userId: z.string().default("KP-DEMO-USER-001"),
  opportunityId: z.string().default("guwahati-sai-cycling")
});

export async function GET() {
  if (!hasDatabaseUrl()) {
    return ok([
      {
        id: "KP-2026-1042",
        status: "Under verification",
        currentAction: "No action is required from you right now."
      }
    ]);
  }

  try {
    const applications = await prisma.application.findMany({
      include: { opportunity: true, user: true },
      orderBy: { submittedAt: "desc" }
    });
    return ok(applications);
  } catch {
    return ok([]);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const parsed = applicationSchema.parse(body);
  const sessionUserId = await currentUserId();
  const userId = sessionUserId ?? parsed.userId;

  if (hasDatabaseUrl()) {
    try {
      const application = await prisma.application.upsert({
        where: { id: "KP-2026-1042" },
        update: { status: "Under verification" },
        create: {
          id: "KP-2026-1042",
          userId,
          opportunityId: parsed.opportunityId,
          status: "Under verification",
          events: {
            create: [
              { id: `app-${Date.now()}-submitted`, label: "Submitted", description: "Demo application submitted." }
            ]
          }
        }
      });
      return ok({
        id: application.id,
        status: application.status,
        currentAction: "No action is required from you right now."
      });
    } catch {
      // Demo should stay usable even before production migrations are applied.
    }
  }

  return ok({
    id: "KP-2026-1042",
    status: "Under verification",
    currentAction: "No action is required from you right now."
  });
}
