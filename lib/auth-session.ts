import { createHmac, timingSafeEqual } from "crypto";
import type { NextResponse } from "next/server";

export const AUTH_SESSION_COOKIE_NAME = "trivx_auth_session";

const SESSION_ISSUER = "trivx-google-oauth";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

type AuthSessionTokenPayload = {
  iss: string;
  sub: string;
  email: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  picture?: string;
  iat: number;
  exp: number;
};

export type AuthSessionUser = {
  sub: string;
  email: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  picture?: string;
};

const isProduction = process.env.NODE_ENV === "production";

const getSessionSecret = () => {
  const secret = process.env.AUTH_SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error(
      "AUTH_SESSION_SECRET must be set and at least 32 characters long."
    );
  }

  return secret;
};

const signPayload = (payloadSegment: string, secret: string) => {
  return createHmac("sha256", secret)
    .update(payloadSegment)
    .digest("base64url");
};

const safeCompare = (a: string, b: string) => {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
};

const parseCookieHeader = (cookieHeader: string): Record<string, string> => {
  return cookieHeader
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((cookies, entry) => {
      const separatorIndex = entry.indexOf("=");
      if (separatorIndex === -1) {
        return cookies;
      }

      const key = entry.slice(0, separatorIndex).trim();
      const value = entry.slice(separatorIndex + 1).trim();

      if (!key) {
        return cookies;
      }

      try {
        cookies[key] = decodeURIComponent(value);
      } catch {
        cookies[key] = value;
      }

      return cookies;
    }, {});
};

export const createSessionToken = (user: AuthSessionUser) => {
  const now = Math.floor(Date.now() / 1000);
  const payload: AuthSessionTokenPayload = {
    iss: SESSION_ISSUER,
    sub: user.sub,
    email: user.email,
    name: user.name,
    givenName: user.givenName,
    familyName: user.familyName,
    picture: user.picture,
    iat: now,
    exp: now + SESSION_TTL_SECONDS,
  };

  const payloadSegment = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signatureSegment = signPayload(payloadSegment, getSessionSecret());

  return `${payloadSegment}.${signatureSegment}`;
};

export const parseSessionToken = (token: string): AuthSessionUser | null => {
  const tokenParts = token.split(".");

  if (tokenParts.length !== 2) {
    return null;
  }

  const [payloadSegment, signatureSegment] = tokenParts;

  if (!payloadSegment || !signatureSegment) {
    return null;
  }

  const expectedSignature = signPayload(payloadSegment, getSessionSecret());
  if (!safeCompare(signatureSegment, expectedSignature)) {
    return null;
  }

  let payload: AuthSessionTokenPayload;

  try {
    const decoded = Buffer.from(payloadSegment, "base64url").toString("utf8");
    payload = JSON.parse(decoded) as AuthSessionTokenPayload;
  } catch {
    return null;
  }

  if (
    payload.iss !== SESSION_ISSUER ||
    !payload.sub ||
    !payload.email ||
    typeof payload.exp !== "number"
  ) {
    return null;
  }

  const now = Math.floor(Date.now() / 1000);
  if (payload.exp <= now) {
    return null;
  }

  return {
    sub: payload.sub,
    email: payload.email,
    name: payload.name,
    givenName: payload.givenName,
    familyName: payload.familyName,
    picture: payload.picture,
  };
};

export const getSessionFromRequest = (request: Request): AuthSessionUser | null => {
  const cookieHeader = request.headers.get("cookie");

  if (!cookieHeader) {
    return null;
  }

  const cookies = parseCookieHeader(cookieHeader);
  const token = cookies[AUTH_SESSION_COOKIE_NAME];

  if (!token) {
    return null;
  }

  try {
    return parseSessionToken(token);
  } catch {
    return null;
  }
};

export const setSessionCookie = (
  response: NextResponse,
  user: AuthSessionUser
): void => {
  response.cookies.set({
    name: AUTH_SESSION_COOKIE_NAME,
    value: createSessionToken(user),
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction,
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
};

export const clearSessionCookie = (response: NextResponse): void => {
  response.cookies.set({
    name: AUTH_SESSION_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction,
    path: "/",
    maxAge: 0,
  });
};
