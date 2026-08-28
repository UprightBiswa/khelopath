import { NextResponse } from "next/server";
import { adminCookieName, adminSessionToken } from "@/lib/admin-auth";
import { z } from "zod";

const loginSchema = z.object({
  password: z.string().min(1)
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { password } = loginSchema.parse(body);
  const expectedPassword = process.env.ADMIN_PASSWORD ?? "demo-only";

  if (password !== expectedPassword) {
    return NextResponse.json({ ok: false, message: "Invalid admin password" }, { status: 401 });
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
