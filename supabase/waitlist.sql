CREATE TABLE IF NOT EXISTS public.waitlist_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  joined_waitlist BOOLEAN NOT NULL DEFAULT TRUE,
  google_user_id TEXT,
  full_name TEXT,
  first_name TEXT,
  last_name TEXT,
  username TEXT,
  image_url TEXT,
  phone_number TEXT,
  google_payload JSONB,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.waitlist_subscribers
ADD COLUMN IF NOT EXISTS joined_waitlist BOOLEAN NOT NULL DEFAULT TRUE;

ALTER TABLE public.waitlist_subscribers
ADD COLUMN IF NOT EXISTS google_user_id TEXT;

ALTER TABLE public.waitlist_subscribers
ADD COLUMN IF NOT EXISTS google_payload JSONB;
