import { AlertTriangle, CheckCircle2, Send } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";

const reasons = [
  "My application is delayed",
  "My documents were rejected",
  "I do not know what to do",
  "I received incorrect information",
  "Other"
];

export default function GrievancePage() {
  return (
    <Shell>
      <section className="mx-auto max-w-5xl px-5 py-10">
        <StepHeader
          eyebrow="Problem reporting"
          title="Tell us what went wrong"
          description="KheloPath classifies the issue, suggests routing, and creates a trackable grievance."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <section className="rounded-md border border-line bg-white p-5">
            <h2 className="mb-4 text-xl font-black">What went wrong?</h2>
            <div className="grid gap-3">
              {reasons.map((reason) => (
                <label className="flex min-h-12 items-center gap-3 rounded-md border border-line px-4" key={reason}>
                  <input defaultChecked={reason.includes("delayed")} name="reason" type="radio" />
                  <span className="font-semibold">{reason}</span>
                </label>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold text-ink/70">
              Tell us what happened
              <textarea
                className="min-h-32 rounded-md border border-line p-3 text-base text-ink"
                defaultValue="My application has been under verification for 15 days."
              />
            </label>
          </section>
          <section className="rounded-md border border-saffron bg-white p-5 shadow-soft">
            <h2 className="flex items-center gap-2 text-xl font-black">
              <AlertTriangle className="h-5 w-5 text-saffron" aria-hidden="true" />
              We have understood your problem
            </h2>
            <div className="mt-5 grid gap-4">
              <div className="rounded-md bg-cloud p-4">
                <p className="text-sm font-bold text-ink/60">Category</p>
                <p className="text-lg font-black">Application verification delay</p>
              </div>
              <div className="rounded-md bg-cloud p-4">
                <p className="text-sm font-bold text-ink/60">Recommended action</p>
                <p className="text-lg font-black">Create a grievance</p>
              </div>
              <div className="rounded-md bg-cloud p-4">
                <p className="text-sm font-bold text-ink/60">Suggested routing</p>
                <p className="text-lg font-black">Sports Programme Authority</p>
              </div>
            </div>
            <div className="mt-6">
              <ButtonLink href="/grievance/created">
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                Create grievance
              </ButtonLink>
            </div>
          </section>
        </div>
      </section>
    </Shell>
  );
}

