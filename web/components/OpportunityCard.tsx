import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import type { Opportunity } from "@/lib/demo-data";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  const type = opportunity.type ?? opportunity.organisationType;
  const location =
    opportunity.location ?? [opportunity.city, opportunity.district, opportunity.state].filter(Boolean).join(", ");
  const matchReasons = opportunity.matchReasons ?? ["Sport match", "Location match", "Age range fits"];

  return (
    <article className="overflow-hidden rounded-md border border-line bg-white shadow-soft">
      {opportunity.image ? (
        <div className="relative h-44 bg-line">
          <Image alt="" className="object-cover" fill sizes="(min-width: 768px) 768px, 100vw" src={opportunity.image} />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 p-5 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-bold text-river">{type}</p>
            <h2 className="mt-1 text-xl font-black text-ink">{opportunity.title}</h2>
          </div>
          <p className="flex items-center gap-2 text-sm text-ink/70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {location}
          </p>
          <div className="h-2 overflow-hidden rounded-full bg-cloud">
            <div className="h-full rounded-full bg-forest" style={{ width: `${opportunity.matchScore ?? 90}%` }} />
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {matchReasons.map((reason) => (
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
