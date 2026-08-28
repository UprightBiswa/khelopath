import Image from "next/image";
import { ArrowRight, Bike, Database, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Shell } from "@/components/Shell";
import { journeyMetrics } from "@/lib/demo-data";

export default function HomePage() {
  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
        <div className="space-y-7">
          <div className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-sm font-bold text-forest">
            Athlete-first sports opportunity navigator
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight text-ink md:text-6xl">
              Find your next opportunity in sport.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-ink/70">
              Tell us your sport, location and goal. KheloPath turns fragmented public sports information into one guided journey.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/onboarding">
              Start
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/register" variant="secondary">
              Create athlete account
            </ButtonLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-md border border-line bg-white shadow-soft">
          <div className="relative h-64 bg-line md:h-80">
            <Image
              priority
              alt="Young cyclist using a phone near a sports training centre"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              src="/images/khelopath-cyclist-hero.png"
            />
          </div>
          <div className="grid gap-4">
            <div className="p-5">
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
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {journeyMetrics.map((metric) => (
            <div className="rounded-md border border-line p-5" key={metric.label}>
              <p className="text-3xl font-black text-forest">{metric.value}</p>
              <p className="mt-2 text-sm font-bold text-ink/65">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-md border border-line bg-white p-5">
          <h2 className="flex items-center gap-2 text-2xl font-black">
            <Database className="h-5 w-5 text-forest" aria-hidden="true" />
            Built for production data later
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-ink/70">
            KheloPath reads opportunity, application, and grievance records from Neon PostgreSQL through Next.js server
            routes. Database credentials stay server-side, while athletes only interact with simple public workflows.
          </p>
        </div>
      </section>
    </Shell>
  );
}
