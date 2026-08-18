export type Opportunity = {
  id: string;
  title: string;
  sport: string;
  location: string;
  type: string;
  description: string;
  matchReasons: string[];
  documents: string[];
  nextSteps: string[];
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
    location: "Guwahati, Assam",
    type: "Training Centre",
    description:
      "A synthetic government-supported training pathway for cycling athletes in and around Guwahati.",
    matchReasons: ["Sport match", "Near your location", "Age range fits"],
    documents: ["Age proof", "Athlete profile", "Sports achievement record"],
    nextSteps: ["Create athlete profile", "Submit demo application", "Verification", "Selection response"]
  },
  {
    id: "assam-cycling-academy",
    title: "Assam State Sports Academy Cycling Programme",
    sport: "Cycling",
    location: "Assam",
    type: "Sports Academy",
    description: "State-level synthetic cycling programme for athlete development.",
    matchReasons: ["Sport match", "State-level access", "Beginner-friendly pathway"],
    documents: ["Age proof", "Residence proof", "Basic sports record"],
    nextSteps: ["Check district availability", "Submit interest", "Attend screening"]
  },
  {
    id: "north-east-youth-sports",
    title: "North East Youth Sports Support Camp",
    sport: "Multi-sport",
    location: "North East India",
    type: "Sports Programme",
    description: "Synthetic regional camp listing for youth and amateur athletes.",
    matchReasons: ["Regional access", "Age range fits", "Training goal match"],
    documents: ["Identity proof", "Athlete profile", "Guardian consent if minor"],
    nextSteps: ["Register interest", "Wait for verification", "Receive camp schedule"]
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

