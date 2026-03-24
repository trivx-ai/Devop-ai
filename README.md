This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Waitlist Setup (Supabase Postgres)

1. Create an environment file from `.env.example` and set `SUPABASE_DB_URL`.
2. Run the SQL in `supabase/waitlist.sql` in the Supabase SQL Editor.
3. Start the app and use the waitlist CTA to sign in with Clerk (Google auth), then join waitlist.

The backend endpoint is `POST /api/waitlist` and stores emails in `waitlist_subscribers`.

## Clerk Setup (App Router)

- Clerk is integrated in keyless mode by default.
- Middleware is configured in `proxy.ts` with `clerkMiddleware()`.
- `ClerkProvider` is mounted in `app/layout.tsx`.
- Waitlist API uses `auth()` from `@clerk/nextjs/server` and reads the signed-in user's email.
