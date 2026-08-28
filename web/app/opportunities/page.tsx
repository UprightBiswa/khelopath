import { Filter, Sparkles } from "lucide-react";
import { OpportunityCard } from "@/components/OpportunityCard";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";
import { demoAthlete } from "@/lib/demo-data";
import { listOpportunities, listSportsCentres } from "@/lib/server-data";

export const dynamic = "force-dynamic";

export default async function OpportunitiesPage() {
  const opportunities = await listOpportunities();
  const centres = await listSportsCentres();

  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-5 py-10">
        <StepHeader
          eyebrow="Results"
          title="Opportunities for you"
          description={`${demoAthlete.sport} - ${demoAthlete.city} - Age ${demoAthlete.age}`}
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
        <section className="mt-6 rounded-md border border-line bg-white p-5">
          <h2 className="text-xl font-black">Training centres in this path</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-ink/60">
                  <th className="py-3 pr-4">Centre</th>
                  <th className="py-3 pr-4">Sport</th>
                  <th className="py-3 pr-4">Location</th>
                  <th className="py-3 pr-4">Type</th>
                </tr>
              </thead>
              <tbody>
                {centres.map((centre) => (
                  <tr className="border-b border-line last:border-0" key={centre.id}>
                    <td className="py-3 pr-4 font-bold">{centre.name}</td>
                    <td className="py-3 pr-4">{centre.sport}</td>
                    <td className="py-3 pr-4">{centre.city}, {centre.state}</td>
                    <td className="py-3 pr-4">{centre.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
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
