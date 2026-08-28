import { LockKeyhole, ShieldCheck } from "lucide-react";
import { AdminLoginForm } from "@/components/AdminLoginForm";
import { Shell } from "@/components/Shell";

export default function AdminLoginPage() {
  return (
    <Shell>
      <section className="mx-auto grid min-h-[70vh] max-w-5xl items-center gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-forest text-white">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-black leading-tight">Admin access for the authority demo</h1>
          <p className="leading-7 text-ink/70">
            This is a demo login. In production, this would use a real identity provider and role-based access control.
          </p>
        </div>
        <section className="rounded-md border border-line bg-white p-6 shadow-soft">
          <h2 className="flex items-center gap-2 text-2xl font-black">
            <LockKeyhole className="h-5 w-5 text-forest" aria-hidden="true" />
            KheloPath Authority Console
          </h2>
          <AdminLoginForm />
        </section>
      </section>
    </Shell>
  );
}
