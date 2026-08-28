export type Opportunity = {
  id: string;
  title: string;
  sport: string;
  sportId?: string | null;
  state: string;
  district?: string | null;
  city?: string | null;
  location?: string;
  organisationType: string;
  type?: string;
  description: string;
  eligibility: string;
  matchReasons?: string[];
  documents: string[];
  nextSteps: string[];
  image?: string | null;
  matchScore?: number;
  status?: string;
};

export const demoAthlete = {
  name: "Demo Athlete",
  age: 21,
  sport: "Cycling",
  state: "Assam",
  district: "Kamrup Metropolitan",
  city: "Guwahati",
  goal: "Find government-supported sports programmes"
};

export const opportunities: Opportunity[] = [
  {
    id: "guwahati-sai-cycling",
    title: "Guwahati SAI Cycling Centre",
    sport: "Cycling",
    sportId: "sport-cycling",
    state: "Assam",
    district: "Kamrup Metropolitan",
    city: "Guwahati",
    location: "Guwahati, Assam",
    organisationType: "Training Centre",
    type: "Training Centre",
    description:
      "Government-supported training pathway for cycling athletes in and around Guwahati.",
    eligibility: "Age 14-25, cycling interest or experience, Assam-based applicant, athlete profile required.",
    matchReasons: ["Sport match", "Near your location", "Age range fits"],
    documents: ["Age proof", "Athlete profile", "Sports achievement record"],
    nextSteps: ["Create athlete profile", "Submit demo application", "Verification", "Selection response"],
    image: "/images/khelopath-cyclist-hero.png",
    matchScore: 96,
    status: "open"
  },
  {
    id: "assam-cycling-academy",
    title: "Assam State Sports Academy Cycling Programme",
    sport: "Cycling",
    sportId: "sport-cycling",
    state: "Assam",
    district: null,
    city: null,
    location: "Assam",
    organisationType: "Sports Academy",
    type: "Sports Academy",
    description: "State-level cycling programme for athlete development.",
    eligibility: "Cycling applicants from Assam with a basic sports achievement record preferred.",
    matchReasons: ["Sport match", "State-level access", "Beginner-friendly pathway"],
    documents: ["Age proof", "Residence proof", "Basic sports record"],
    nextSteps: ["Check district availability", "Submit interest", "Attend screening"],
    image: "/images/khelopath-cyclist-hero.png",
    matchScore: 88,
    status: "open"
  },
  {
    id: "north-east-youth-sports",
    title: "North East Youth Sports Support Camp",
    sport: "Multi-sport",
    state: "Assam",
    district: null,
    city: null,
    location: "North East India",
    organisationType: "Sports Programme",
    type: "Sports Programme",
    description: "Regional camp listing for youth and amateur athletes.",
    eligibility: "Regional youth and amateur athletes can register interest for camp screening.",
    matchReasons: ["Regional access", "Age range fits", "Training goal match"],
    documents: ["Identity proof", "Athlete profile", "Guardian consent if minor"],
    nextSteps: ["Register interest", "Wait for verification", "Receive camp schedule"],
    image: "/images/khelopath-cyclist-hero.png",
    matchScore: 74,
    status: "open"
  }
];

export const sportsCentres = [
  {
    id: "centre-guwahati-sai-cycling",
    name: "Guwahati SAI Cycling Centre",
    sport: "Cycling",
    state: "Assam",
    district: "Kamrup Metropolitan",
    city: "Guwahati",
    latitude: 26.1445,
    longitude: 91.7362,
    type: "Training Centre",
    image: "/images/khelopath-cyclist-hero.png"
  },
  {
    id: "centre-assam-academy",
    name: "Assam State Sports Academy",
    sport: "Cycling",
    state: "Assam",
    district: "Kamrup Metropolitan",
    city: "Guwahati",
    latitude: 26.156,
    longitude: 91.754,
    type: "Sports Academy",
    image: "/images/khelopath-cyclist-hero.png"
  }
];

export const applications = [
  {
    id: "KP-2026-1042",
    status: "Under verification",
    submittedAt: "2026-08-24",
    opportunityTitle: "Guwahati SAI Cycling Centre",
    athleteName: "Demo Athlete",
    city: "Guwahati"
  }
];

export const grievances = [
  {
    id: "GRV-2026-0091",
    category: "Application verification delay",
    description: "My application has been under verification for 15 days.",
    status: "Submitted",
    assignedTo: "Sports Programme Authority",
    city: "Guwahati",
    state: "Assam"
  }
];

export const applicationTimeline = [
  { label: "Submitted", status: "done" },
  { label: "Verification", status: "active" },
  { label: "Review", status: "pending" },
  { label: "Decision", status: "pending" }
] as const;

export const authorityMetrics = [
  { label: "Applications", value: "124" },
  { label: "Pending", value: "32" },
  { label: "Grievances", value: "18" },
  { label: "Resolved", value: "74" }
];

export const journeyMetrics = [
  { label: "Relevant opportunities", value: "3", tone: "forest" },
  { label: "Eligibility rules explained", value: "9", tone: "river" },
  { label: "Documents clarified", value: "7", tone: "saffron" },
  { label: "Trackable next steps", value: "4", tone: "leaf" }
];
