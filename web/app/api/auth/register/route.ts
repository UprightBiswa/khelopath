import { NextResponse } from "next/server";
import { hashPassword, userCookieName, userSessionToken } from "@/lib/auth";
import { hasDatabaseUrl, prisma } from "@/lib/db";
import { z } from "zod";

const registerSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  if (!hasDatabaseUrl()) {
    return NextResponse.json({ ok: false, message: "Database is not configured" }, { status: 503 });
  }

  try {
    const user = await prisma.user.create({
      data: {
        id: `USER-${Date.now()}`,
        email: parsed.data.email.toLowerCase(),
        passwordHash: hashPassword(parsed.data.password),
        role: "athlete",
        name: parsed.data.name,
        age: 21,
        sport: "Cycling",
        state: "Assam",
        district: "Kamrup Metropolitan",
        city: "Guwahati"
      }
    });

    const response = NextResponse.json({ ok: true, userId: user.id });
    response.cookies.set(userCookieName(), userSessionToken(user.id), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });
    return response;
  } catch {
    return NextResponse.json({ ok: false, message: "Could not create user. The email may already exist." }, { status: 409 });
  }
}

