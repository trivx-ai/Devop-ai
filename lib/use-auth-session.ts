"use client";

import type { AuthSessionUser } from "@/lib/auth-session";
import { useCallback, useEffect, useState } from "react";

type AuthSessionResponse = {
  authenticated: boolean;
  user?: AuthSessionUser;
};

export const useAuthSession = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<AuthSessionUser | null>(null);

  const refreshSession = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/session", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to read auth session.");
      }

      const data = (await response.json()) as AuthSessionResponse;

      if (data.authenticated && data.user) {
        setIsSignedIn(true);
        setUser(data.user);
      } else {
        setIsSignedIn(false);
        setUser(null);
      }
    } catch {
      setIsSignedIn(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refreshSession();
  }, [refreshSession]);

  return {
    isLoading,
    isSignedIn,
    user,
    refreshSession,
  };
};
