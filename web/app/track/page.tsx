import { AlertCircle, CheckCircle2, Circle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";
import { applicationTimeline } from "@/lib/demo-data";

export default function TrackPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-4xl px-5 py-10">
        <StepHeader
          eyebrow="Application submitted"
          title="Application KP-2026-1042"
          description="Current status: Document verification. No action is required from you right now."
        />
        <div className="rounded-md border border-line bg-white p-5 shadow-soft">
          <div className="grid gap-5">
            {applicationTimeline.map((item) => (
              <div className="flex items-center gap-3" key={item.label}>
                {item.status === "done" ? (
                  <CheckCircle2 className="h-6 w-6 text-leaf" aria-hidden="true" />
                ) : item.status === "active" ? (
                  <Circle className="h-6 w-6 fill-saffron text-saffron" aria-hidden="true" />
                ) : (
                  <Circle className="h-6 w-6 text-ink/25" aria-hidden="true" />
                )}
                <span className="font-black">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-md bg-cloud p-4">
            <p className="text-lg font-black">No action is required from you right now.</p>
            <p className="mt-1 text-ink/70">KheloPath explains the status in plain language instead of leaving the athlete guessing.</p>
          </div>
          <div className="mt-6">
            <ButtonLink href="/grievance" variant="secondary">
              <AlertCircle className="mr-2 h-4 w-4" aria-hidden="true" />
              Something is wrong?
            </ButtonLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}

