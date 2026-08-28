import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-black text-forest">KheloPath</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ink/70">
            Independent prototype for helping athletes discover opportunities, understand eligibility, track applications,
            and escalate issues.
          </p>
        </div>
        <div>
          <p className="font-black">Demo Journeys</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold text-ink/70">
            <Link href="/onboarding">Athlete onboarding</Link>
            <Link href="/register">Athlete register</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/track">Track application</Link>
          </div>
        </div>
        <div>
          <p className="font-black">Prototype Notes</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold text-ink/70">
            <Link href="/admin/login">Admin login</Link>
            <span>Not an official service</span>
            <span>Sample records only</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
