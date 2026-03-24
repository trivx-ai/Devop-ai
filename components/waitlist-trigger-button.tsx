"use client";

import WaitlistAuthPopup from "@/components/waitlist-auth-popup";
import WaitlistSuccessPopup from "@/components/waitlist-success-popup";
import { Button } from "@/components/ui/button";
import { useSignIn, useUser } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type WaitlistTriggerButtonProps = {
  source: string;
  label?: string;
  className?: string;
};

export default function WaitlistTriggerButton({
  source,
  label = "Join Waitlist",
  className,
}: WaitlistTriggerButtonProps) {
  const { isSignedIn } = useUser();
  const { signIn } = useSignIn();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isAuthRedirecting, setIsAuthRedirecting] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [successUserName, setSuccessUserName] = useState<string | undefined>();
  const pendingAutoJoinRef = useRef(false);
  const pendingKey = `waitlist:pending:${source}`;
  const joinedKey = `waitlist:joined:${source}`;

  useEffect(() => {
    const joined = window.localStorage.getItem(joinedKey) === "1";
    setIsJoined(joined);
  }, [joinedKey]);

  const onJoinWaitlist = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ source }),
      });

      const data = (await response.json()) as {
        message?: string;
        userName?: string;
      };

      if (response.status === 409) {
        toast.info(data.message ?? "This email is already on the waitlist.");
        setIsJoined(true);
        window.localStorage.setItem(joinedKey, "1");
        return;
      }

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to join waitlist.");
      }

      setSuccessUserName(data.userName);
      setIsJoined(true);
      window.localStorage.setItem(joinedKey, "1");
      setIsSuccessPopupOpen(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to join waitlist right now. Please try again.";

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onStartGoogleAuth = async () => {
    if (!signIn) {
      toast.error("Authentication is still loading. Please try again.");
      return;
    }

    setIsAuthRedirecting(true);

    try {
      const callbackUrl = `${window.location.origin}/sso-callback`;
      const returnUrl = window.location.href;

      const result = await signIn.sso({
        strategy: "oauth_google",
        redirectUrl: callbackUrl,
        redirectCallbackUrl: returnUrl,
      });

      if (result?.error) {
        throw new Error(result.error.message || "Unable to start Google sign in.");
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to start Google sign in. Please try again.";

      toast.error(message);
      setIsAuthRedirecting(false);
    }
  };

  useEffect(() => {
    if (!isSignedIn || pendingAutoJoinRef.current) {
      return;
    }

    const pendingJoin = window.localStorage.getItem(pendingKey);
    if (!pendingJoin) {
      return;
    }

    pendingAutoJoinRef.current = true;
    void onJoinWaitlist().finally(() => {
      window.localStorage.removeItem(pendingKey);
      pendingAutoJoinRef.current = false;
    });
  }, [isSignedIn, pendingKey]);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          if (isJoined) {
            return;
          }

          if (isSignedIn) {
            void onJoinWaitlist();
            return;
          }

          window.localStorage.setItem(pendingKey, "1");
          setIsAuthPopupOpen(true);
        }}
        disabled={isSubmitting || isJoined}
        className={className}
      >
        {isSubmitting ? "Joining..." : isJoined ? "Joined" : label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <WaitlistAuthPopup
        open={isAuthPopupOpen}
        loading={isAuthRedirecting}
        onClose={() => {
          if (isAuthRedirecting) return;
          setIsAuthPopupOpen(false);
          window.localStorage.removeItem(pendingKey);
        }}
        onContinue={onStartGoogleAuth}
      />

      <WaitlistSuccessPopup
        open={isSuccessPopupOpen}
        userName={successUserName}
        onClose={() => setIsSuccessPopupOpen(false)}
      />
    </>
  );
}
