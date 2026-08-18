import { CheckCircle2, FileText } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";

export default function EligibilityPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-4xl px-5 py-10">
        <StepHeader
          eyebrow="Eligibility"
          title="Your sports path"
          description="KheloPath converts eligibility into plain language so the athlete knows what to do next."
        />
        <div className="rounded-md border border-line bg-white p-5 shadow-soft">
          <h2 className="text-xl font-black">You appear eligible</h2>
          <div className="mt-5 grid gap-3">
            {["Age requirement", "Cycling pathway", "Assam location", "Demo athlete profile"].map((item) => (
              <p className="flex items-center gap-2 font-semibold" key={item}>
                <CheckCircle2 className="h-5 w-5 text-leaf" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-6 rounded-md bg-cloud p-4">
            <p className="flex gap-2 leading-7 text-ink/75">
              <FileText className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
              You can start a demo application now. Keep age proof, an athlete profile, and any cycling achievement record ready.
            </p>
          </div>
          <div className="mt-6">
            <ButtonLink href="/apply">Continue to application</ButtonLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}

