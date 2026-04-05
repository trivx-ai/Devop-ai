import { clearSessionCookie } from "@/lib/auth-session";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  const response = NextResponse.json({
    message: "Signed out successfully.",
  });

  clearSessionCookie(response);

  return response;
}
