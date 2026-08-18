import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";

export default function GrievanceCreatedPage() {
  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="rounded-md border border-line bg-white p-6 text-center shadow-soft">
          <CheckCircle2 className="mx-auto h-14 w-14 text-leaf" aria-hidden="true" />
          <h1 className="mt-4 text-3xl font-black">Grievance created</h1>
          <p className="mt-3 text-xl font-black text-forest">GRV-2026-0091</p>
          <p className="mt-3 leading-7 text-ink/70">Status: Submitted. Next: assigned to the relevant authority.</p>
          <div className="mt-6">
            <ButtonLink href="/authority">Track grievance in authority console</ButtonLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}

