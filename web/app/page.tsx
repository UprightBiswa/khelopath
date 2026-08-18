import { ArrowRight, Bike, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";

export default function HomePage() {
  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
        <div className="space-y-7">
          <div className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-sm font-bold text-forest">
            Independent prototype · Not an official government service
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight text-ink md:text-6xl">
              Find your next opportunity in sport.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-ink/70">
              Tell us your sport, location and goal. KheloPath helps you understand what you can do next.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/onboarding">
              Start
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/authority" variant="secondary">
              Authority console
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-md border border-line bg-white p-5 shadow-soft">
          <div className="grid gap-4">
            {[
              { icon: Bike, title: "Sport", text: "Cycling" },
              { icon: MapPin, title: "Location", text: "Guwahati, Assam" },
              { icon: ShieldCheck, title: "Need", text: "Training, eligibility, tracking" }
            ].map((item) => (
              <div className="flex items-center gap-4 rounded-md border border-line p-4" key={item.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cloud text-forest">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink/60">{item.title}</p>
                  <p className="font-black text-ink">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}

