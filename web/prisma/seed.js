const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.sport.upsert({
    where: { id: "sport-cycling" },
    update: {},
    create: { id: "sport-cycling", name: "Cycling", icon: "Bike" }
  });

  await prisma.location.upsert({
    where: {
      state_district_city: {
        state: "Assam",
        district: "Kamrup Metropolitan",
        city: "Guwahati"
      }
    },
    update: {},
    create: {
      id: "loc-guwahati",
      state: "Assam",
      district: "Kamrup Metropolitan",
      city: "Guwahati"
    }
  });

  await prisma.user.upsert({
    where: { id: "KP-DEMO-USER-001" },
    update: {},
    create: {
      id: "KP-DEMO-USER-001",
      name: "Demo Athlete",
      age: 21,
      sport: "Cycling",
      state: "Assam",
      district: "Kamrup Metropolitan",
      city: "Guwahati"
    }
  });

  await prisma.sportsCentre.upsert({
    where: { id: "centre-guwahati-sai-cycling" },
    update: {},
    create: {
      id: "centre-guwahati-sai-cycling",
      name: "Guwahati SAI Cycling Centre",
      sportId: "sport-cycling",
      state: "Assam",
      district: "Kamrup Metropolitan",
      city: "Guwahati",
      latitude: 26.1445,
      longitude: 91.7362,
      type: "Training Centre",
      image: "/images/khelopath-cyclist-hero.png"
    }
  });

  const mainOpportunity = await prisma.opportunity.upsert({
    where: { id: "guwahati-sai-cycling" },
    update: {},
    create: {
      id: "guwahati-sai-cycling",
      title: "Guwahati SAI Cycling Centre",
      sport: "Cycling",
      sportId: "sport-cycling",
      state: "Assam",
      district: "Kamrup Metropolitan",
      city: "Guwahati",
      description:
        "Synthetic government-supported training pathway for cycling athletes in and around Guwahati.",
      organisationType: "Training Centre",
      eligibility:
        "Age 14-25, cycling interest or experience, Assam-based applicant, athlete profile required.",
      documents: ["Age proof", "Athlete profile", "Sports achievement record"],
      nextSteps: ["Create athlete profile", "Submit demo application", "Verification", "Selection response"],
      image: "/images/khelopath-cyclist-hero.png",
      matchScore: 96,
      status: "open"
    }
  });

  await prisma.opportunity.upsert({
    where: { id: "assam-cycling-academy" },
    update: {},
    create: {
      id: "assam-cycling-academy",
      title: "Assam State Sports Academy Cycling Programme",
      sport: "Cycling",
      sportId: "sport-cycling",
      state: "Assam",
      description: "Synthetic state-level cycling training and athlete development pathway.",
      organisationType: "Sports Academy",
      eligibility: "Cycling applicants from Assam with a basic sports achievement record preferred.",
      documents: ["Age proof", "Residence proof", "Basic sports record"],
      nextSteps: ["Check district availability", "Submit interest", "Attend screening"],
      image: "/images/khelopath-cyclist-hero.png",
      matchScore: 88,
      status: "open"
    }
  });

  const rules = [
    ["rule-age", "Age requirement", "Applicant age must be between 14 and 25.", "Your age fits this pathway."],
    ["rule-sport", "Sport", "Applicant sport must match Cycling.", "Your selected sport matches."],
    ["rule-location", "Location", "Applicant should be based in Assam.", "Your location is within the target state."]
  ];

  for (const [id, label, rule, plainText] of rules) {
    await prisma.eligibilityRule.upsert({
      where: { id },
      update: {},
      create: { id, opportunityId: mainOpportunity.id, label, rule, plainText }
    });
  }

  await prisma.application.upsert({
    where: { id: "KP-2026-1042" },
    update: {},
    create: {
      id: "KP-2026-1042",
      userId: "KP-DEMO-USER-001",
      opportunityId: "guwahati-sai-cycling",
      status: "Under verification",
      events: {
        create: [
          { id: "app-event-submitted", label: "Submitted", description: "Demo application submitted." },
          {
            id: "app-event-verification",
            label: "Document verification",
            description: "No action is required from you right now."
          }
        ]
      }
    }
  });

  await prisma.grievance.upsert({
    where: { id: "GRV-2026-0091" },
    update: {},
    create: {
      id: "GRV-2026-0091",
      userId: "KP-DEMO-USER-001",
      applicationId: "KP-2026-1042",
      category: "Application verification delay",
      description: "My application has been under verification for 15 days.",
      status: "Submitted",
      assignedTo: "Sports Programme Authority",
      events: {
        create: [
          {
            id: "grv-event-submitted",
            label: "Submitted",
            description: "Grievance created from athlete report."
          }
        ]
      }
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seeded KheloPath synthetic data.");
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
