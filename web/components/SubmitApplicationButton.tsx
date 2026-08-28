"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SubmitApplicationButton() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function submitApplication() {
    setIsSubmitting(true);
    await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "KP-DEMO-USER-001",
        opportunityId: "guwahati-sai-cycling"
      })
    });
    router.push("/track");
  }

  return (
    <button
      className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-5 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-70"
      disabled={isSubmitting}
      onClick={submitApplication}
      type="button"
    >
      {isSubmitting ? "Submitting..." : "Submit demo application"}
    </button>
  );
}

