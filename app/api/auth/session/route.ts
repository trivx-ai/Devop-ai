import { getSessionFromRequest } from "@/lib/auth-session";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = getSessionFromRequest(request);

  return NextResponse.json(
    session
      ? {
        authenticated: true,
        user: session,
      }
      : {
        authenticated: false,
      },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
