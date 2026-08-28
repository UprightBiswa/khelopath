import { Bike, Dumbbell, Goal, MapPin, Trophy } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";

const sports = ["Cycling", "Athletics", "Football", "Badminton", "Boxing", "Other"];
const goals = [
  "Find training opportunities",
  "Find competitions",
  "Find government-supported sports programmes",
  "Check if I am eligible",
  "I am already registered and need help"
];

export default function OnboardingPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-5 py-10">
        <StepHeader
          eyebrow="Step 1 of 3"
          title="Tell us what you play and where you are based."
          description="This demo is pre-filled for a 21-year-old cyclist from Guwahati so the full journey can be completed quickly."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-md border border-line bg-white p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-black">
              <Dumbbell className="h-5 w-5 text-forest" aria-hidden="true" />
              What do you play?
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {sports.map((sport) => (
                <button
                  className={`min-h-14 rounded-md border px-4 text-left font-bold ${
                    sport === "Cycling" ? "border-forest bg-forest text-white" : "border-line bg-white text-ink"
                  }`}
                  key={sport}
                  type="button"
                >
                  {sport}
                </button>
              ))}
            </div>
          </section>
          <section className="rounded-md border border-line bg-white p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-black">
              <MapPin className="h-5 w-5 text-forest" aria-hidden="true" />
              Where are you based?
            </h2>
            <div className="grid gap-4">
              {[
                ["State", "Assam"],
                ["District", "Kamrup Metropolitan"],
                ["City", "Guwahati"],
                ["Age", "21"]
              ].map(([label, value]) => (
                <label className="grid gap-2 text-sm font-bold text-ink/70" key={label}>
                  {label}
                  <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" defaultValue={value} />
                </label>
              ))}
            </div>
          </section>
        </div>
        <section className="mt-6 rounded-md border border-line bg-white p-5">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black">
            <Goal className="h-5 w-5 text-forest" aria-hidden="true" />
            What are you looking for?
          </h2>
          <div className="grid gap-3">
            {goals.map((goal) => (
              <label className="flex min-h-12 items-center gap-3 rounded-md border border-line px-4" key={goal}>
                <input defaultChecked={goal.includes("government-supported")} name="goal" type="radio" />
                <span className="font-semibold">{goal}</span>
              </label>
            ))}
          </div>
        </section>
        <div className="mt-6 flex justify-end">
          <ButtonLink href="/opportunities">
            Find opportunities
            <Trophy className="ml-2 h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>
    </Shell>
  );
}
