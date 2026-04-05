import { getSessionFromRequest } from "@/lib/auth-session";
import { WaitlistDbError, upsertWaitlistEmail } from "@/lib/waitlist-db";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const payloadSchema = z.object({
  source: z.string().trim().min(1).max(100).optional(),
});

export async function POST(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json(
        { message: "Please sign in with Google to join the waitlist." },
        { status: 401 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const payload = payloadSchema.parse(body);
    const email = session.email?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { message: "No email address found in your Google account." },
        { status: 400 }
      );
    }

    const fullName = session.name?.trim() ?? "";

    const googlePayload = {
      provider: "google",
      sub: session.sub,
      email,
      name: session.name,
      givenName: session.givenName,
      familyName: session.familyName,
      picture: session.picture,
    };

    const userName = session.givenName ?? (fullName || undefined);

    const result = await upsertWaitlistEmail({
      email,
      source: payload.source,
      googleUserId: session.sub,
      fullName: fullName || undefined,
      firstName: session.givenName ?? undefined,
      lastName: session.familyName ?? undefined,
      imageUrl: session.picture ?? undefined,
      googlePayload,
    });

    if (!result.inserted) {
      return NextResponse.json(
        {
          message: "This email is already on the waitlist.",
          userName,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        message: "You have been added to the waitlist.",
        userName,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.issues[0]?.message ?? "Invalid request payload.";

      return NextResponse.json({ message }, { status: 400 });
    }

    if (error instanceof WaitlistDbError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    }

    const details = error instanceof Error ? error.message : "Unknown error";
    const message =
      details && details !== "Unknown error"
        ? details
        : "Failed to add you to the waitlist.";

    console.error("[waitlist] failed to add subscriber", {
      details,
    });

    return NextResponse.json(
      {
        message,
        details,
      },
      { status: 500 }
    );
  }
}
