"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type WaitlistSuccessPopupProps = {
  open: boolean;
  userName?: string;
  onClose: () => void;
};

const bursts = [
  { x: -120, y: -80, delay: "0ms", color: "#f2613f" },
  { x: -80, y: -110, delay: "80ms", color: "#ff8a6a" },
  { x: -30, y: -125, delay: "120ms", color: "#f2613f" },
  { x: 25, y: -120, delay: "160ms", color: "#ffd2c6" },
  { x: 75, y: -105, delay: "200ms", color: "#f2613f" },
  { x: 115, y: -80, delay: "240ms", color: "#ff8a6a" },
  { x: -120, y: 80, delay: "120ms", color: "#ffd2c6" },
  { x: -75, y: 110, delay: "200ms", color: "#f2613f" },
  { x: -20, y: 120, delay: "260ms", color: "#ff8a6a" },
  { x: 35, y: 122, delay: "180ms", color: "#ffd2c6" },
  { x: 85, y: 110, delay: "220ms", color: "#f2613f" },
  { x: 120, y: 75, delay: "280ms", color: "#ff8a6a" },
];

export default function WaitlistSuccessPopup({
  open,
  userName,
  onClose,
}: WaitlistSuccessPopupProps) {
  if (!open) return null;

  const displayName = userName?.trim() || "there";

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close success popup"
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,97,63,0.25),transparent_60%)]" />

      <div className="relative w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#161211] p-6 text-center shadow-[0_30px_120px_rgba(0,0,0,0.7)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,rgba(242,97,63,0.18),rgba(18,18,18,0)_38%,rgba(255,255,255,0.04))]" />

        <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2613f]/20 text-[#f8b7a5]">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h3 className="relative text-2xl font-semibold text-white sm:text-3xl">
          You&apos;re In, {displayName}!
        </h3>

        <p className="relative mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base">
          Welcome to the Trivx waitlist. We&apos;re excited to have you onboard
          and will keep you posted with early access updates.
        </p>

        <div className="relative mt-6">
          <Button
            type="button"
            onClick={onClose}
            className="bg-primary text-primary-foreground hover:bg-white hover:text-[#f2613f]"
          >
            Awesome, Thanks!
          </Button>
        </div>

        <div className="pointer-events-none absolute inset-0">
          {bursts.map((burst, index) => (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 block h-2.5 w-2.5 rounded-full opacity-0"
              style={{
                backgroundColor: burst.color,
                transform: `translate(${burst.x}px, ${burst.y}px) scale(0.6)`,
                animation: `burstFade 900ms ease-out ${burst.delay} forwards`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes burstFade {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.2);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          :global(.waitlist-success-popup) {
            max-width: 94vw;
          }
        }
      `}</style>
    </div>
  );
}
