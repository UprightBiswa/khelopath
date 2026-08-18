import { Filter, Sparkles } from "lucide-react";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";
import { demoAthlete, opportunities } from "@/lib/demo-data";

export default function OpportunitiesPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-5 py-10">
        <StepHeader
          eyebrow="Results"
          title="Opportunities for you"
          description={`${demoAthlete.sport} · ${demoAthlete.city} · Age ${demoAthlete.age}`}
        />
        <div className="mb-5 flex flex-col gap-3 rounded-md border border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-2xl font-black">{opportunities.length} relevant opportunities</p>
            <p className="text-sm text-ink/65">Matched using synthetic sport, location, age, and goal data.</p>
          </div>
          <button className="inline-flex min-h-11 items-center justify-center rounded-md border border-line px-4 text-sm font-bold" type="button">
            <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
            Refine
          </button>
        </div>
        <div className="grid gap-4">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
        <div className="mt-6 rounded-md border border-saffron bg-white p-4">
          <p className="flex items-start gap-2 text-sm font-semibold text-ink/75">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
            AI layer planned: athletes can type a natural sentence and KheloPath will extract sport, age, location, and goal.
          </p>
        </div>
      </section>
    </Shell>
  );
}

