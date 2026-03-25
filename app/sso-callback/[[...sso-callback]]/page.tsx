import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import Link from "next/link";

export default function SSOCallbackPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0a09] px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,97,63,0.22),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-2xl items-center justify-center">
        <section className="w-full rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_24px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f2613f]" />
            Secure Google sign-in in progress
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Finishing your sign-in
          </h1>
          <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-lg">
            We are verifying your account and sending you back to where you left off.
            This usually takes a few seconds.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-black/35 p-4 text-sm text-white/80 sm:text-base">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-[#f2613f]" />
            Do not close this tab while we complete authentication.
          </div>

          <p className="mt-6 text-sm text-white/60">
            If this takes longer than 20 seconds, you can safely try again.
          </p>
          <div className="mt-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              Return to homepage
            </Link>
          </div>
        </section>
      </div>

      <AuthenticateWithRedirectCallback />
    </main>
  );
}
