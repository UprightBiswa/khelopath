import { CheckCircle2, Route, UserCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";
import { authorityMetrics } from "@/lib/demo-data";

export default function AuthorityPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <StepHeader
          eyebrow="Authority Console"
          title="KheloPath Authority Console"
          description="A lightweight process view showing applications, grievances, classification, routing, and resolution."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authorityMetrics.map((metric) => (
            <div className="rounded-md border border-line bg-white p-5" key={metric.label}>
              <p className="text-sm font-bold text-ink/60">{metric.label}</p>
              <p className="mt-2 text-3xl font-black">{metric.value}</p>
            </div>
          ))}
        </div>
        <section className="mt-6 rounded-md border border-line bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-river">GRV-2026-0091</p>
                <h2 className="mt-1 text-2xl font-black">Application verification delay</h2>
                <p className="mt-2 text-ink/70">Location: Guwahati, Assam</p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <p className="rounded-md bg-cloud p-3 font-semibold">Category: Registration</p>
                <p className="rounded-md bg-cloud p-3 font-semibold">AI classification: Application delay</p>
                <p className="rounded-md bg-cloud p-3 font-semibold">Suggested routing: Sports Programme Authority</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-5 text-sm font-bold text-white" type="button">
                <Route className="mr-2 h-4 w-4" aria-hidden="true" />
                Assign
              </button>
              <button className="inline-flex min-h-12 items-center justify-center rounded-md border border-line bg-white px-5 text-sm font-bold" type="button">
                <CheckCircle2 className="mr-2 h-4 w-4" aria-hidden="true" />
                Resolve
              </button>
            </div>
          </div>
        </section>
        <div className="mt-6">
          <ButtonLink href="/" variant="secondary">
            <UserCheck className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to athlete journey
          </ButtonLink>
        </div>
      </section>
    </Shell>
  );
}

