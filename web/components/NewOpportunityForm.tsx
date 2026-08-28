"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function NewOpportunityForm() {
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    const data = new FormData(event.currentTarget);

    await fetch("/api/opportunities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.get("title"),
        sport: data.get("sport"),
        state: data.get("state"),
        district: data.get("district"),
        city: data.get("city"),
        organisationType: data.get("organisationType"),
        description: data.get("description"),
        eligibility: data.get("eligibility"),
        documents: String(data.get("documents")).split(",").map((item) => item.trim()).filter(Boolean),
        nextSteps: String(data.get("nextSteps")).split(",").map((item) => item.trim()).filter(Boolean),
        image: data.get("image"),
        matchScore: Number(data.get("matchScore") ?? 80)
      })
    });

    router.push("/admin");
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      {[
        ["title", "Opportunity title", "District Cycling Talent Camp"],
        ["sport", "Sport", "Cycling"],
        ["state", "State", "Assam"],
        ["district", "District", "Kamrup Metropolitan"],
        ["city", "City", "Guwahati"],
        ["organisationType", "Type", "Training Camp"],
        ["matchScore", "Match score", "82"],
        ["image", "Image URL", "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"]
      ].map(([name, label, value]) => (
        <label className="grid gap-2 text-sm font-bold text-ink/70" key={name}>
          {label}
          <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" defaultValue={value} name={name} />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-bold text-ink/70">
        Description
        <textarea
          className="min-h-24 rounded-md border border-line p-3 text-base text-ink"
          defaultValue="District-level cycling opportunity for young athletes preparing for structured training."
          name="description"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink/70">
        Eligibility
        <textarea
          className="min-h-24 rounded-md border border-line p-3 text-base text-ink"
          defaultValue="Age 14-25, cycling interest, Assam-based applicant, basic athlete profile required."
          name="eligibility"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink/70">
        Documents, comma separated
        <input
          className="min-h-12 rounded-md border border-line px-3 text-base text-ink"
          defaultValue="Age proof, Athlete profile, Sports achievement record"
          name="documents"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink/70">
        Next steps, comma separated
        <input
          className="min-h-12 rounded-md border border-line px-3 text-base text-ink"
          defaultValue="Create athlete profile, Submit application, Verification"
          name="nextSteps"
        />
      </label>
      <button
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-5 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-70"
        disabled={isSaving}
        type="submit"
      >
        {isSaving ? "Saving..." : "Save opportunity"}
      </button>
    </form>
  );
}
