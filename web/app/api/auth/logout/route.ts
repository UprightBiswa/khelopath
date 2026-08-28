import { NextResponse } from "next/server";
import { userCookieName } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(userCookieName());
  return response;
}

