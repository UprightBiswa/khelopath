import { LogIn } from "lucide-react";
import { AuthForm } from "@/components/AuthForm";
import { Shell } from "@/components/Shell";

export default function LoginPage() {
  return (
    <Shell>
      <section className="mx-auto grid min-h-[70vh] max-w-5xl items-center gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-forest text-white">
            <LogIn className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-black leading-tight">Login to track your sports path.</h1>
          <p className="leading-7 text-ink/70">
            Use an athlete account to save applications and grievances against your profile.
          </p>
        </div>
        <section className="rounded-md border border-line bg-white p-6 shadow-soft">
          <h2 className="mb-5 text-2xl font-black">Athlete login</h2>
          <AuthForm mode="login" />
        </section>
      </section>
    </Shell>
  );
}

