"use client";

import WaitlistTriggerButton from "@/components/waitlist-trigger-button";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  source: string;
  sectionId?: string;
  className?: string;
  buttonLabel?: string;
};

export default function WaitlistForm({
  source,
  sectionId,
  className,
  buttonLabel = "Join Waitlist",
}: WaitlistFormProps) {
  return (
    <div
      id={sectionId}
      className={cn("flex w-full max-w-xl flex-col gap-3 sm:flex-row", className)}
    >
      <WaitlistTriggerButton
        source={source}
        label={buttonLabel}
        className="bg-primary text-primary-foreground border-none hover:bg-white hover:text-[#f2613f] transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
