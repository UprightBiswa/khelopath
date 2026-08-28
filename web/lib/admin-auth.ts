import { cookies } from "next/headers";
import { createHmac } from "node:crypto";

const ADMIN_COOKIE = "khelopath_admin";

export function adminSessionToken() {
  const secret = process.env.ADMIN_COOKIE_SECRET ?? process.env.ADMIN_PASSWORD ?? "khelopath-local-demo";
  return createHmac("sha256", secret).update("khelopath-admin-session").digest("hex");
}

export async function isAdminSession() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === adminSessionToken();
}

export function adminCookieName() {
  return ADMIN_COOKIE;
}
