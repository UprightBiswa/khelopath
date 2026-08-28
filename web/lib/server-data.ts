import { hasDatabaseUrl, prisma } from "@/lib/db";
import { applications, grievances, opportunities, sportsCentres } from "@/lib/demo-data";

export async function listOpportunities() {
  if (!hasDatabaseUrl()) {
    return opportunities;
  }

  try {
    return await prisma.opportunity.findMany({
      where: { status: "open" },
      orderBy: [{ matchScore: "desc" }, { title: "asc" }]
    });
  } catch {
    return opportunities;
  }
}

export async function getOpportunity(id: string) {
  if (!hasDatabaseUrl()) {
    return opportunities.find((item) => item.id === id) ?? null;
  }

  try {
    return await prisma.opportunity.findUnique({ where: { id } });
  } catch {
    return opportunities.find((item) => item.id === id) ?? null;
  }
}

export async function listSportsCentres() {
  if (!hasDatabaseUrl()) {
    return sportsCentres;
  }

  try {
    const centres = await prisma.sportsCentre.findMany({
      include: { sport: true },
      orderBy: { name: "asc" }
    });
    return centres.map((centre) => ({
      ...centre,
      sport: centre.sport.name
    }));
  } catch {
    return sportsCentres;
  }
}

export async function listApplications() {
  if (!hasDatabaseUrl()) {
    return applications;
  }

  try {
    const records = await prisma.application.findMany({
      include: { opportunity: true, user: true },
      orderBy: { submittedAt: "desc" }
    });
    return records.map((application) => ({
      ...application,
      opportunityTitle: application.opportunity.title,
      athleteName: application.user.name,
      city: application.user.city
    }));
  } catch {
    return applications;
  }
}

export async function listGrievances() {
  if (!hasDatabaseUrl()) {
    return grievances;
  }

  try {
    const records = await prisma.grievance.findMany({
      include: { application: true, user: true },
      orderBy: { createdAt: "desc" }
    });
    return records.map((grievance) => ({
      ...grievance,
      city: grievance.user.city,
      state: grievance.user.state
    }));
  } catch {
    return grievances;
  }
}
