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

const getConnectionString = () => {
  return process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL;
};

const shouldUseSsl = (connectionString: string) => {
  return !/localhost|127\.0\.0\.1/i.test(connectionString);
};

const getPool = () => {
  const connectionString = getConnectionString();

  if (!connectionString) {
    throw new Error("Missing SUPABASE_DB_URL or DATABASE_URL environment variable.");
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

  await pool.query(`
    CREATE TABLE IF NOT EXISTS waitlist_subscribers (
      id BIGSERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      clerk_user_id TEXT,
      full_name TEXT,
      first_name TEXT,
      last_name TEXT,
      username TEXT,
      image_url TEXT,
      phone_number TEXT,
      clerk_payload JSONB,
      source TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await pool.query(`
    ALTER TABLE waitlist_subscribers
    ADD COLUMN IF NOT EXISTS clerk_user_id TEXT,
    ADD COLUMN IF NOT EXISTS full_name TEXT,
    ADD COLUMN IF NOT EXISTS first_name TEXT,
    ADD COLUMN IF NOT EXISTS last_name TEXT,
    ADD COLUMN IF NOT EXISTS username TEXT,
    ADD COLUMN IF NOT EXISTS image_url TEXT,
    ADD COLUMN IF NOT EXISTS phone_number TEXT,
    ADD COLUMN IF NOT EXISTS clerk_payload JSONB
  `);

  const result = await pool.query<{ id: string }>(
    `
      INSERT INTO waitlist_subscribers (
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

  return {
    inserted: result.rowCount === 1,
  };
};
