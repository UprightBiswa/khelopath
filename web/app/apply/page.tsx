import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";

const sections = ["Personal information", "Sport information", "Documents", "Review"];

export default function ApplyPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-4xl px-5 py-10">
        <StepHeader
          eyebrow="Demo Application"
          title="Submit a demo application"
          description="This does not submit anything to a government system. It demonstrates the workflow using synthetic data."
        />
        <div className="rounded-md border border-line bg-white p-5 shadow-soft">
          <div className="grid gap-3">
            {sections.map((section, index) => (
              <div className="flex min-h-14 items-center justify-between rounded-md border border-line p-4" key={section}>
                <span className="font-bold">{section}</span>
                {index < 3 ? (
                  <CheckCircle2 className="h-5 w-5 text-leaf" aria-label="Complete" />
                ) : (
                  <span className="rounded-full bg-saffron px-3 py-1 text-xs font-black text-ink">Ready</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-md bg-cloud p-4">
            <p className="flex gap-2 font-semibold text-ink/75">
              <ClipboardCheck className="h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
              Review complete. Your next action is to submit the demo application.
            </p>
          </div>
          <div className="mt-6">
            <ButtonLink href="/track">Submit demo application</ButtonLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}

