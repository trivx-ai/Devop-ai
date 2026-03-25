import { Pool } from "pg";

declare global {
  var __waitlistPool: Pool | undefined;
}

type WaitlistInsertInput = {
  email: string;
  source?: string;
  clerkUserId?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  imageUrl?: string;
  phoneNumber?: string;
  clerkPayload?: unknown;
};

export class WaitlistDbError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WaitlistDbError";
  }
}

const getConnectionString = () => {
  return process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL;
};

const shouldUseSsl = (connectionString: string) => {
  return !/localhost|127\.0\.0\.1/i.test(connectionString);
};

const getPool = () => {
  const connectionString = getConnectionString();

  if (!connectionString) {
    throw new WaitlistDbError(
      "Waitlist database is not configured. Set SUPABASE_DB_URL (or DATABASE_URL) in production environment variables."
    );
  }

  if (!global.__waitlistPool) {
    global.__waitlistPool = new Pool({
      connectionString,
      ssl: shouldUseSsl(connectionString) ? { rejectUnauthorized: false } : undefined,
    });
  }

  return global.__waitlistPool;
};

export const upsertWaitlistEmail = async ({
  email,
  source,
  clerkUserId,
  fullName,
  firstName,
  lastName,
  username,
  imageUrl,
  phoneNumber,
  clerkPayload,
}: WaitlistInsertInput) => {
  const pool = getPool();
  const normalizedEmail = email.trim().toLowerCase();

  let result;

  try {
    result = await pool.query<{ id: string }>(
      `
        INSERT INTO public.waitlist_subscribers (
          email,
          clerk_user_id,
          full_name,
          first_name,
          last_name,
          username,
          image_url,
          phone_number,
          clerk_payload,
          source
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb, $10)
        ON CONFLICT (email) DO NOTHING
        RETURNING id
      `,
      [
        normalizedEmail,
        clerkUserId ?? null,
        fullName ?? null,
        firstName ?? null,
        lastName ?? null,
        username ?? null,
        imageUrl ?? null,
        phoneNumber ?? null,
        clerkPayload ? JSON.stringify(clerkPayload) : null,
        source ?? null,
      ]
    );
  } catch (error) {
    const dbError = error as { code?: string; message?: string };

    if (dbError.code === "42P01") {
      throw new WaitlistDbError(
        "Waitlist table is missing. Run supabase/waitlist.sql in your production database."
      );
    }

    if (dbError.code === "42501") {
      throw new WaitlistDbError(
        "Database user lacks permission for waitlist writes. Grant INSERT on public.waitlist_subscribers."
      );
    }

    if (dbError.code === "ENOTFOUND" || dbError.message?.includes("ENOTFOUND")) {
      throw new WaitlistDbError(
        "Cannot resolve the Supabase database host. Verify SUPABASE_DB_URL in production and paste the exact connection string from Supabase project settings."
      );
    }

    throw error;
  }

  return {
    inserted: result.rowCount === 1,
  };
};
