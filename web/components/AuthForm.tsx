"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    const form = new FormData(event.currentTarget);

    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
        confirmPassword: form.get("confirmPassword")
      })
    });

    const result = await response.json().catch(() => ({}));
    setIsSubmitting(false);

    if (!response.ok) {
      setError(result.message ?? "Could not continue");
      return;
    }

    router.push("/onboarding");
    router.refresh();
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      {mode === "register" ? (
        <label className="grid gap-2 text-sm font-bold text-ink/70">
          Full name
          <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" name="name" placeholder="Your name" />
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-bold text-ink/70">
        Email
        <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" name="email" placeholder="you@example.com" type="email" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-ink/70">
        Password
        <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" name="password" placeholder="Minimum 8 characters" type="password" />
      </label>
      {mode === "register" ? (
        <label className="grid gap-2 text-sm font-bold text-ink/70">
          Confirm password
          <input className="min-h-12 rounded-md border border-line px-3 text-base text-ink" name="confirmPassword" placeholder="Repeat password" type="password" />
        </label>
      ) : null}
      {error ? <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
      <button
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-forest px-5 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-wait disabled:opacity-70"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Please wait..." : mode === "register" ? "Create account" : "Login"}
      </button>
      <p className="text-sm font-semibold text-ink/70">
        {mode === "register" ? "Already have an account?" : "New athlete?"}{" "}
        <Link className="text-forest underline" href={mode === "register" ? "/login" : "/register"}>
          {mode === "register" ? "Login" : "Create account"}
        </Link>
      </p>
    </form>
  );
}

