import { UserPlus } from "lucide-react";
import { AuthForm } from "@/components/AuthForm";
import { Shell } from "@/components/Shell";

export default function RegisterPage() {
  return (
    <Shell>
      <section className="mx-auto grid min-h-[70vh] max-w-5xl items-center gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-forest text-white">
            <UserPlus className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-black leading-tight">Create your athlete account.</h1>
          <p className="leading-7 text-ink/70">
            Register with email and password, then continue the cycling opportunity journey.
          </p>
        </div>
        <section className="rounded-md border border-line bg-white p-6 shadow-soft">
          <h2 className="mb-5 text-2xl font-black">Athlete register</h2>
          <AuthForm mode="register" />
        </section>
      </section>
    </Shell>
  );
}

