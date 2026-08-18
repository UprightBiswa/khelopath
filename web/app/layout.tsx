import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KheloPath",
  description:
    "A citizen-first prototype for discovering and navigating public sports opportunities in India."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

