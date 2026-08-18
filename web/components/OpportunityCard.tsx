import { CheckCircle2, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import type { Opportunity } from "@/lib/demo-data";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article className="rounded-md border border-line bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-bold text-river">{opportunity.type}</p>
            <h2 className="mt-1 text-xl font-black text-ink">{opportunity.title}</h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-ink/70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {opportunity.location}
          </p>
          <div className="grid gap-2 sm:grid-cols-3">
            {opportunity.matchReasons.map((reason) => (
              <span className="flex items-center gap-2 text-sm text-ink/75" key={reason}>
                <CheckCircle2 className="h-4 w-4 text-leaf" aria-hidden="true" />
                {reason}
              </span>
            ))}
          </div>
        </div>
        <ButtonLink href={`/opportunities/${opportunity.id}`}>View details</ButtonLink>
      </div>
    </article>
  );
}

