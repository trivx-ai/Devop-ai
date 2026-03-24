import { auth, currentUser } from "@clerk/nextjs/server";
import { upsertWaitlistEmail } from "@/lib/waitlist-db";
import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  source: z.string().trim().min(1).max(100).optional(),
});

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { message: "Please sign in with Google to join the waitlist." },
        { status: 401 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const payload = payloadSchema.parse(body);
    const user = await currentUser();
    const email =
      user?.primaryEmailAddress?.emailAddress ??
      user?.emailAddresses?.[0]?.emailAddress;

    if (!user || !email) {
      return NextResponse.json(
        { message: "No email address found in your Clerk account." },
        { status: 400 }
      );
    }

    const fullName = [user.firstName, user.lastName]
      .filter(Boolean)
      .join(" ")
      .trim();

    const clerkPayload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      imageUrl: user.imageUrl,
      primaryEmail: email,
      emailAddresses: user.emailAddresses.map((item) => item.emailAddress),
      phoneNumbers: user.phoneNumbers.map((item) => item.phoneNumber),
      createdAt: user.createdAt,
      lastSignInAt: user.lastSignInAt,
      externalAccounts: user.externalAccounts.map((item) => ({
        provider: item.provider,
        externalId: item.externalId,
      })),
    };

    const result = await upsertWaitlistEmail({
      email,
      source: payload.source,
      clerkUserId: user.id,
      fullName: fullName || undefined,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
      username: user.username ?? undefined,
      imageUrl: user.imageUrl ?? undefined,
      phoneNumber: user.phoneNumbers[0]?.phoneNumber,
      clerkPayload,
    });

    if (!result.inserted) {
      return NextResponse.json(
        {
          message: "This email is already on the waitlist.",
          userName: (user.firstName ?? fullName) || undefined,
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        message: "You have been added to the waitlist.",
        userName: (user.firstName ?? fullName) || undefined,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.issues[0]?.message ?? "Invalid request payload.";

      return NextResponse.json({ message }, { status: 400 });
    }

    const details = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        message: "Failed to add you to the waitlist.",
        details,
      },
      { status: 500 }
    );
  }
}
