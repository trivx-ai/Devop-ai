"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

type WaitlistAuthPopupProps = {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
  loading?: boolean;
};

export default function WaitlistAuthPopup({
  open,
  onClose,
  onContinue,
  loading = false,
}: WaitlistAuthPopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close waitlist auth popup"
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,97,63,0.16),transparent_60%)]" />

      <div className="relative isolate w-full max-w-[30rem] overflow-hidden rounded-[1.75rem] border border-white/20 bg-[#151110] p-6 sm:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.7)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(242,97,63,0.12),rgba(20,20,20,0)_40%,rgba(255,255,255,0.03))]" />

        <button
          type="button"
          aria-label="Close popup"
          onClick={onClose}
          disabled={loading}
          className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 p-1.5 text-white/70 transition-colors hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85">
          <Sparkles className="h-3.5 w-3.5 text-[#f2613f]" />
          Early Access
        </div>

        <h3 className="relative mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
          Join The Waitlist
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
          Continue with Google to reserve your spot. We will securely add your
          account details and keep you updated on launch access.
        </p>

        {/* Required for Clerk Smart CAPTCHA in custom auth flows */}
        <div
          id="clerk-captcha"
          className="relative mt-4 min-h-5 text-center"
          aria-live="polite"
        />

        <div className="relative mt-5 rounded-2xl border border-white/15 bg-black/30 p-4 text-sm text-white/80">
          <p>What happens next:</p>
          <ul className="mt-2 space-y-1.5 text-white/65">
            <li>Google sign-in starts instantly</li>
            <li>Your profile is added to the waitlist</li>
            <li>You get product updates and early access</li>
          </ul>
        </div>

        <div className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={loading}
            className="border border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={onContinue}
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f]"
          >
            {loading ? "Redirecting..." : "Continue with Google"}
          </Button>
        </div>
      </div>
    </div>
  );
}
