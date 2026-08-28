import { redirect } from "next/navigation";
import { NewOpportunityForm } from "@/components/NewOpportunityForm";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";
import { isAdminSession } from "@/lib/admin-auth";

export default async function NewOpportunityPage() {
  if (!(await isAdminSession())) {
    redirect("/admin/login");
  }

  return (
    <Shell>
      <section className="mx-auto max-w-3xl px-5 py-10">
        <StepHeader
          eyebrow="Admin"
          title="Add opportunity"
          description="Create synthetic opportunity data for the demo database. In production this would include review and publishing controls."
        />
        <section className="rounded-md border border-line bg-white p-5 shadow-soft">
          <NewOpportunityForm />
        </section>
      </section>
    </Shell>
  );
}
