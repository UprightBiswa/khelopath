"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setError("Password did not match the admin environment setting.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form className="mt-5 grid gap-4" onSubmit={onSubmit}>
      <label className="grid gap-2 text-sm font-bold text-ink/70">
        Password
        <input
          className="min-h-12 rounded-md border border-line px-3 text-base text-ink"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter admin password"
          type="password"
          value={password}
        />
      </label>
      {error ? <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
      <button
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-5 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-70"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Signing in..." : "Enter admin console"}
      </button>
    </form>
  );
}

