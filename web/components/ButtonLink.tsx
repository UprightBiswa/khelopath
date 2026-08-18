import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-forest text-white hover:bg-ink"
      : "border border-line bg-white text-ink hover:border-forest";

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-bold transition ${classes}`}
      href={href}
    >
      {children}
    </Link>
  );
}

