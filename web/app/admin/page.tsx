import { redirect } from "next/navigation";
import { CheckCircle2, Database, Plus, Route, UserCheck } from "lucide-react";
import { AdminLogoutButton } from "@/components/AdminLogoutButton";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { StepHeader } from "@/components/StepHeader";
import { isAdminSession } from "@/lib/admin-auth";
import { authorityMetrics } from "@/lib/demo-data";
import { listApplications, listGrievances, listOpportunities, listSportsCentres } from "@/lib/server-data";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminSession())) {
    redirect("/admin/login");
  }

  const [applications, grievances, opportunities, centres] = await Promise.all([
    listApplications(),
    listGrievances(),
    listOpportunities(),
    listSportsCentres()
  ]);

  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <StepHeader
          eyebrow="Admin"
          title="KheloPath Authority Console"
          description="Manage seeded demo data, application status, grievance classification, and routing from one process view."
        />
        <div className="mb-5 flex justify-end">
          <AdminLogoutButton />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authorityMetrics.map((metric) => (
            <div className="rounded-md border border-line bg-white p-5" key={metric.label}>
              <p className="text-sm font-bold text-ink/60">{metric.label}</p>
              <p className="mt-2 text-3xl font-black">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <section className="rounded-md border border-line bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-black">Grievances</h2>
              <button className="inline-flex min-h-10 items-center rounded-md border border-line px-3 text-sm font-bold" type="button">
                <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
                Add note
              </button>
            </div>
            <div className="grid gap-4">
              {grievances.map((grievance) => (
                <article className="rounded-md border border-line p-4" key={grievance.id}>
                  <p className="text-sm font-bold text-river">{grievance.id}</p>
                  <h3 className="mt-1 text-lg font-black">{grievance.category}</h3>
                  <p className="mt-2 text-sm text-ink/70">Location: {grievance.city}, {grievance.state}</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    <p className="rounded-md bg-cloud p-3 text-sm font-semibold">Status: {grievance.status}</p>
                    <p className="rounded-md bg-cloud p-3 text-sm font-semibold">AI: Application delay</p>
                    <p className="rounded-md bg-cloud p-3 text-sm font-semibold">Route: {grievance.assignedTo ?? "Unassigned"}</p>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button className="inline-flex min-h-11 items-center justify-center rounded-md bg-forest px-4 text-sm font-bold text-white" type="button">
                      <Route className="mr-2 h-4 w-4" aria-hidden="true" />
                      Assign
                    </button>
                    <button className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-white px-4 text-sm font-bold" type="button">
                      <CheckCircle2 className="mr-2 h-4 w-4" aria-hidden="true" />
                      Resolve
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="grid gap-5">
            <section className="rounded-md border border-line bg-white p-5">
              <h2 className="flex items-center gap-2 text-xl font-black">
                <Database className="h-5 w-5 text-forest" aria-hidden="true" />
                Data tables
              </h2>
              <div className="mt-4 grid gap-3 text-sm font-semibold text-ink/75">
                <p className="rounded-md bg-cloud p-3">Opportunities: {opportunities.length}</p>
                <p className="rounded-md bg-cloud p-3">Sports centres: {centres.length}</p>
                <p className="rounded-md bg-cloud p-3">Applications: {applications.length}</p>
                <p className="rounded-md bg-cloud p-3">Grievances: {grievances.length}</p>
              </div>
              <div className="mt-4">
                <ButtonLink href="/admin/opportunities/new">Add opportunity</ButtonLink>
              </div>
            </section>

            <section className="rounded-md border border-line bg-white p-5">
              <h2 className="text-xl font-black">Applications</h2>
              <div className="mt-4 grid gap-3">
                {applications.map((application) => (
                  <div className="rounded-md border border-line p-3" key={application.id}>
                    <p className="font-black">{application.id}</p>
                    <p className="text-sm text-ink/70">{application.opportunityTitle}</p>
                    <p className="mt-2 text-sm font-bold text-forest">{application.status}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

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
