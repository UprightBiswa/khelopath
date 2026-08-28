import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Footer } from "@/components/Footer";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-cloud">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link className="text-lg font-black text-forest" href="/">
            KheloPath
          </Link>
          <Link href="/admin/login">
            <Badge>Admin</Badge>
          </Link>
        </div>
      </header>
      {children}
      <Footer />
    </main>
  );
}
