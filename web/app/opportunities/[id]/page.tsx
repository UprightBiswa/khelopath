import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, FileText, ListChecks, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { getOpportunity } from "@/lib/server-data";

export const dynamic = "force-dynamic";

export default async function OpportunityDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const opportunity = await getOpportunity(id);

  if (!opportunity) {
    notFound();
  }

  const type = "type" in opportunity && opportunity.type ? opportunity.type : opportunity.organisationType;
  const location =
    "location" in opportunity && opportunity.location
      ? opportunity.location
      : [opportunity.city, opportunity.district, opportunity.state].filter(Boolean).join(", ");
  const matchReasons =
    "matchReasons" in opportunity && opportunity.matchReasons
      ? opportunity.matchReasons
      : ["Age requirement", "Sport", "Location"];

  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="mb-8 space-y-3">
          <p className="text-sm font-black uppercase tracking-normal text-river">{type}</p>
          <h1 className="text-3xl font-black text-ink md:text-5xl">{opportunity.title}</h1>
          <p className="text-lg text-ink/70">{opportunity.sport} - {location}</p>
        </div>
        {opportunity.image ? (
          <div className="relative mb-6 h-64 overflow-hidden rounded-md border border-line bg-line md:h-80">
            <Image alt="" className="object-cover" fill sizes="(min-width: 768px) 960px, 100vw" src={opportunity.image} />
          </div>
        ) : null}
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <section className="rounded-md border border-line bg-white p-5">
            <h2 className="text-xl font-black">About</h2>
            <p className="mt-3 leading-7 text-ink/75">{opportunity.description}</p>
            <h2 className="mt-7 flex items-center gap-2 text-xl font-black">
              <CheckCircle2 className="h-5 w-5 text-leaf" aria-hidden="true" />
              Your eligibility
            </h2>
            <div className="mt-3 grid gap-2">
              {matchReasons.map((reason) => (
                <p className="flex items-center gap-2 text-sm font-semibold text-ink/75" key={reason}>
                  <CheckCircle2 className="h-4 w-4 text-leaf" aria-hidden="true" />
                  {reason}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-md border border-saffron bg-cloud p-4">
              <p className="flex gap-2 text-sm font-semibold text-ink/75">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
                You appear eligible based on your age, sport, and location. You will need age proof, an athlete profile, and any available sports achievement record.
              </p>
            </div>
          </section>
          <aside className="space-y-5">
            <section className="rounded-md border border-line bg-white p-5">
              <h2 className="flex items-center gap-2 text-xl font-black">
                <FileText className="h-5 w-5 text-forest" aria-hidden="true" />
                Documents
              </h2>
              <div className="mt-4 grid gap-3">
                {opportunity.documents.map((document) => (
                  <p className="rounded-md border border-line p-3 font-semibold" key={document}>{document}</p>
                ))}
              </div>
            </section>
            <section className="rounded-md border border-line bg-white p-5">
              <h2 className="flex items-center gap-2 text-xl font-black">
                <ListChecks className="h-5 w-5 text-forest" aria-hidden="true" />
                What happens next?
              </h2>
              <ol className="mt-4 grid gap-3">
                {opportunity.nextSteps.map((step, index) => (
                  <li className="flex gap-3 font-semibold" key={step}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-sm text-white">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
            <ButtonLink href="/apply">Start demo application</ButtonLink>
          </aside>
        </div>
      </section>
    </Shell>
  );
}
