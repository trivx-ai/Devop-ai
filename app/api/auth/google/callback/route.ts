import {
  OAUTH_RETURN_TO_COOKIE_NAME,
  OAUTH_STATE_COOKIE_NAME,
  OAUTH_VERIFIER_COOKIE_NAME,
  exchangeCodeForGoogleUser,
  normalizeReturnTo,
} from "@/lib/google-oauth";
import { clearSessionCookie, setSessionCookie } from "@/lib/auth-session";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const isProduction = process.env.NODE_ENV === "production";

const clearOAuthCookies = (response: NextResponse) => {
  response.cookies.set({
    name: OAUTH_STATE_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  response.cookies.set({
    name: OAUTH_VERIFIER_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  response.cookies.set({
    name: OAUTH_RETURN_TO_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
};

const toSafeReturnUrl = (request: NextRequest) => {
  const returnToCookie = request.cookies.get(OAUTH_RETURN_TO_COOKIE_NAME)?.value;

  let decodedReturnTo = "/";

  if (returnToCookie) {
    try {
      decodedReturnTo = decodeURIComponent(returnToCookie);
    } catch {
      decodedReturnTo = "/";
    }
  }

  const normalized = normalizeReturnTo(decodedReturnTo, request.nextUrl.origin);

  return new URL(normalized, request.nextUrl.origin);
};

const redirectWithError = (request: NextRequest, reason: string) => {
  const target = toSafeReturnUrl(request);
  target.searchParams.set("auth", "error");
  target.searchParams.set("reason", reason);

  const response = NextResponse.redirect(target, { status: 302 });
  clearOAuthCookies(response);
  clearSessionCookie(response);

  return response;
};

export async function GET(request: NextRequest) {
  const state = request.nextUrl.searchParams.get("state");
  const code = request.nextUrl.searchParams.get("code");
  const oauthError = request.nextUrl.searchParams.get("error");

  if (oauthError) {
    return redirectWithError(request, "google_denied");
  }

  const expectedState = request.cookies.get(OAUTH_STATE_COOKIE_NAME)?.value;
  const codeVerifier = request.cookies.get(OAUTH_VERIFIER_COOKIE_NAME)?.value;

  if (!state || !code || !expectedState || !codeVerifier || state !== expectedState) {
    return redirectWithError(request, "invalid_state");
  }

  try {
    const user = await exchangeCodeForGoogleUser({
      code,
      codeVerifier,
      origin: request.nextUrl.origin,
    });

    const target = toSafeReturnUrl(request);
    target.searchParams.delete("auth");
    target.searchParams.delete("reason");

    const response = NextResponse.redirect(target, { status: 302 });
    clearOAuthCookies(response);
    setSessionCookie(response, user);

    return response;
  } catch (error) {
    console.error("[google-oauth] callback failed", {
      error: error instanceof Error ? error.message : "unknown_error",
    });

    return redirectWithError(request, "callback_failed");
  }
}
