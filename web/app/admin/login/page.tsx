import { LockKeyhole, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
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
          <div className="mt-5 grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-ink/70">
              Email
              <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" defaultValue="authority.demo@khelopath.local" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink/70">
              Password
              <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" defaultValue="demo-only" type="password" />
            </label>
          </div>
          <div className="mt-6">
            <ButtonLink href="/admin">Enter demo console</ButtonLink>
          </div>
        </section>
      </section>
    </Shell>
  );
}

