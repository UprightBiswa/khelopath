import { cookies } from "next/headers";
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const USER_COOKIE = "khelopath_user";

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string) {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) {
    return false;
  }

  const testHash = scryptSync(password, salt, 64);
  const savedHash = Buffer.from(hash, "hex");
  return savedHash.length === testHash.length && timingSafeEqual(savedHash, testHash);
}

export function userSessionToken(userId: string) {
  const secret = process.env.ADMIN_COOKIE_SECRET ?? "khelopath-local-demo";
  return `${userId}.${createHmac("sha256", secret).update(userId).digest("hex")}`;
}

export function readUserIdFromToken(token?: string) {
  if (!token) {
    return null;
  }

  const [userId, signature] = token.split(".");
  if (!userId || !signature) {
    return null;
  }

  return userSessionToken(userId) === token ? userId : null;
}

export async function currentUserId() {
  const cookieStore = await cookies();
  return readUserIdFromToken(cookieStore.get(USER_COOKIE)?.value);
}

export function userCookieName() {
  return USER_COOKIE;
}

