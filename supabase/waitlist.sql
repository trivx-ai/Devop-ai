CREATE TABLE IF NOT EXISTS public.waitlist_subscribers (
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
);
