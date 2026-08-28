import { NextResponse } from "next/server";
import { adminCookieName, adminSessionToken } from "@/lib/admin-auth";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().default("admin@admin.com"),
  password: z.string().min(1)
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { email, password } = loginSchema.parse(body);
  const expectedEmail = process.env.ADMIN_EMAIL ?? "admin@admin.com";
  const expectedPassword = process.env.ADMIN_PASSWORD ?? "12345678";

  if (email.toLowerCase() !== expectedEmail.toLowerCase() || password !== expectedPassword) {
    return NextResponse.json({ ok: false, message: "Invalid admin credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName(), adminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });
  return response;
}
