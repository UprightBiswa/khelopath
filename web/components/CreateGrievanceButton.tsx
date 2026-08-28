"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";

export function CreateGrievanceButton() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function createGrievance() {
    setIsSubmitting(true);
    await fetch("/api/grievances", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "KP-DEMO-USER-001",
        applicationId: "KP-2026-1042",
        description: "My application has been under verification for 15 days.",
        category: "Application verification delay"
      })
    });
    router.push("/grievance/created");
  }

  return (
    <button
      className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-5 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-70"
      disabled={isSubmitting}
      onClick={createGrievance}
      type="button"
    >
      <Send className="mr-2 h-4 w-4" aria-hidden="true" />
      {isSubmitting ? "Creating..." : "Create grievance"}
    </button>
  );
}

