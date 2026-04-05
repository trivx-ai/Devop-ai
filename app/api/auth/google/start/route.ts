import {
  OAUTH_COOKIE_MAX_AGE_SECONDS,
  OAUTH_RETURN_TO_COOKIE_NAME,
  OAUTH_STATE_COOKIE_NAME,
  OAUTH_VERIFIER_COOKIE_NAME,
  buildGoogleAuthorizationUrl,
  createOAuthState,
  createPkcePair,
  normalizeReturnTo,
} from "@/lib/google-oauth";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const isProduction = process.env.NODE_ENV === "production";

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const returnToRaw = request.nextUrl.searchParams.get("returnTo");
  const returnTo = normalizeReturnTo(returnToRaw, origin);

  try {
    const state = createOAuthState();
    const { verifier, challenge } = createPkcePair();
    const authorizationUrl = buildGoogleAuthorizationUrl({
      origin,
      state,
      codeChallenge: challenge,
    });

    const response = NextResponse.redirect(authorizationUrl, { status: 302 });

    response.cookies.set({
      name: OAUTH_STATE_COOKIE_NAME,
      value: state,
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: OAUTH_COOKIE_MAX_AGE_SECONDS,
    });

    response.cookies.set({
      name: OAUTH_VERIFIER_COOKIE_NAME,
      value: verifier,
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: OAUTH_COOKIE_MAX_AGE_SECONDS,
    });

    response.cookies.set({
      name: OAUTH_RETURN_TO_COOKIE_NAME,
      value: encodeURIComponent(returnTo),
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",
      maxAge: OAUTH_COOKIE_MAX_AGE_SECONDS,
    });

    return response;
  } catch (error) {
    console.error("[google-oauth] failed to start flow", {
      error: error instanceof Error ? error.message : "unknown_error",
    });

    const fallbackUrl = new URL(returnTo || "/", origin);
    fallbackUrl.searchParams.set("auth", "error");
    fallbackUrl.searchParams.set("reason", "oauth_not_configured");

    return NextResponse.redirect(fallbackUrl, { status: 302 });
  }
}
