import { createHash, randomBytes } from "crypto";
import type { AuthSessionUser } from "@/lib/auth-session";

export const OAUTH_STATE_COOKIE_NAME = "trivx_google_oauth_state";
export const OAUTH_VERIFIER_COOKIE_NAME = "trivx_google_oauth_verifier";
export const OAUTH_RETURN_TO_COOKIE_NAME = "trivx_google_oauth_return_to";
export const OAUTH_COOKIE_MAX_AGE_SECONDS = 60 * 10;

const GOOGLE_AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://openidconnect.googleapis.com/v1/userinfo";

type GoogleOAuthConfig = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
};

type ExchangeCodeParams = {
  code: string;
  codeVerifier: string;
  origin: string;
};

type GoogleTokenResponse = {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
  id_token?: string;
};

type GoogleUserInfoResponse = {
  sub?: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
};

const getGoogleOAuthConfig = (origin: string): GoogleOAuthConfig => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const envRedirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI?.trim();
  const redirectUri =
    process.env.NODE_ENV === "development"
      ? `${origin}/api/auth/google/callback`
      : envRedirectUri || `${origin}/api/auth/google/callback`;

  if (!clientId) {
    throw new Error("Missing GOOGLE_CLIENT_ID environment variable.");
  }

  if (!clientSecret) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET environment variable.");
  }

  return {
    clientId,
    clientSecret,
    redirectUri,
  };
};

export const normalizeReturnTo = (value: string | null | undefined, origin: string) => {
  if (!value) {
    return "/";
  }

  if (value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }

  try {
    const parsed = new URL(value);

    if (parsed.origin === origin) {
      return `${parsed.pathname}${parsed.search}${parsed.hash}`;
    }
  } catch {
    return "/";
  }

  return "/";
};

export const createOAuthState = () => {
  return randomBytes(24).toString("base64url");
};

export const createPkcePair = () => {
  const verifier = randomBytes(48).toString("base64url");
  const challenge = createHash("sha256").update(verifier).digest("base64url");

  return {
    verifier,
    challenge,
  };
};

export const buildGoogleAuthorizationUrl = ({
  origin,
  state,
  codeChallenge,
}: {
  origin: string;
  state: string;
  codeChallenge: string;
}) => {
  const config = getGoogleOAuthConfig(origin);
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    response_type: "code",
    scope: "openid email profile",
    include_granted_scopes: "true",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    prompt: "select_account",
  });

  return `${GOOGLE_AUTHORIZATION_URL}?${params.toString()}`;
};

export const exchangeCodeForGoogleUser = async ({
  code,
  codeVerifier,
  origin,
}: ExchangeCodeParams): Promise<AuthSessionUser> => {
  const config = getGoogleOAuthConfig(origin);

  const tokenPayload = new URLSearchParams({
    code,
    client_id: config.clientId,
    client_secret: config.clientSecret,
    redirect_uri: config.redirectUri,
    grant_type: "authorization_code",
    code_verifier: codeVerifier,
  });

  const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: tokenPayload.toString(),
    cache: "no-store",
  });

  const tokenData = (await tokenResponse
    .json()
    .catch(() => null)) as GoogleTokenResponse | null;

  if (!tokenResponse.ok || !tokenData?.access_token) {
    throw new Error("Google token exchange failed.");
  }

  const profileResponse = await fetch(GOOGLE_USERINFO_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
    cache: "no-store",
  });

  const profile = (await profileResponse
    .json()
    .catch(() => null)) as GoogleUserInfoResponse | null;

  if (!profileResponse.ok || !profile?.sub || !profile?.email) {
    throw new Error("Unable to fetch Google user profile.");
  }

  if (!profile.email_verified) {
    throw new Error("Google account email is not verified.");
  }

  return {
    sub: profile.sub,
    email: profile.email.toLowerCase(),
    name: profile.name,
    givenName: profile.given_name,
    familyName: profile.family_name,
    picture: profile.picture,
  };
};
