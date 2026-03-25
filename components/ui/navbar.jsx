"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useSignIn, useUser } from "@clerk/nextjs";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { toast } from "sonner";
import WaitlistAuthPopup from "@/components/waitlist-auth-popup";
import WaitlistSuccessPopup from "@/components/waitlist-success-popup";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isAuthRedirecting, setIsAuthRedirecting] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [successUserName, setSuccessUserName] = useState(undefined);
  const { signIn } = useSignIn();
  const { isSignedIn } = useUser();
  const pendingAutoJoinRef = useRef(false);
  const router = useRouter();
  const pendingKey = "waitlist:pending:header";
  const joinedKey = "waitlist:joined:header";

  useEffect(() => {
    const joined = window.localStorage.getItem(joinedKey) === "1";
    setIsJoined(joined);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Workflow", link: "#workflow" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "/contact" },
  ];

  // Close mobile menu on escape key
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when switching to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    // Listen for route changes (this is a simple approach)
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false);

    if (path.startsWith("#")) {
      // Handle anchor links with smooth scrolling
      const element = document.querySelector(path);
      if (element) {
        const navHeight = 80; // Approximate navbar height
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Handle route navigation
      router.push(path);
    }
  };

  const onJoinWaitlist = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsMobileMenuOpen(false);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ source: "header" }),
      });

      const data = await response.json();

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

  const handleSignedOutJoinWaitlist = () => {
    setIsMobileMenuOpen(false);
    window.localStorage.setItem(pendingKey, "1");
    setIsAuthPopupOpen(true);
  };

  const onStartGoogleAuth = async () => {
    if (!signIn) {
      toast.error("Authentication is still loading. Please try again.");
      return;
    }

    setIsAuthRedirecting(true);

    try {
      const result = await signIn.sso({
        strategy: "oauth_google",
        redirectUrl: window.location.href,
        redirectCallbackUrl: "/sso-callback",
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
  }, [isSignedIn]);

  const renderDesktopWaitlistButton = () => {
    if (isSignedIn) {
      return (
        <NavbarButton
          variant="primary"
          as="button"
          onClick={onJoinWaitlist}
          disabled={isSubmitting || isJoined}
        >
          {isSubmitting ? "Joining..." : isJoined ? "Joined" : "Join Waitlist"}
        </NavbarButton>
      );
    }

    return (
      <NavbarButton
        variant="primary"
        as="button"
        onClick={handleSignedOutJoinWaitlist}
      >
        Join Waitlist
      </NavbarButton>
    );
  };

  const renderMobileWaitlistButton = () => {
    if (isSignedIn) {
      return (
        <NavbarButton
          variant="primary"
          as="button"
          onClick={onJoinWaitlist}
          disabled={isSubmitting || isJoined}
          className="w-full justify-center py-3 text-base"
        >
          {isSubmitting ? "Joining..." : isJoined ? "Joined" : "Join Waitlist"}
        </NavbarButton>
      );
    }

    return (
      <NavbarButton
        variant="primary"
        as="button"
        onClick={handleSignedOutJoinWaitlist}
        className="w-full justify-center py-3 text-base"
      >
        Join Waitlist
      </NavbarButton>
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3 lg:gap-4">
          <ThemeToggle />
          {renderDesktopWaitlistButton()}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </MobileNavHeader>
      </MobileNav>

      {/* Mobile menu rendered in a portal to avoid stacking/transform issues */}
      {isMounted &&
        isMobileMenuOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[210] bg-black/70 backdrop-blur-md lg:hidden"
              onClick={closeMobileMenu}
            />

            <aside className="fixed left-0 top-0 z-[220] h-full w-[84vw] max-w-[22rem] overflow-hidden border-r border-white/10 bg-[#090909]/95 shadow-2xl backdrop-blur-xl animate-in slide-in-from-left-4 duration-200 lg:hidden">
              <div className="flex h-full flex-col">

                <div className="flex-1 overflow-y-auto px-4 py-5 mt-12">
                  <div className="space-y-3">
                    {navItems.map((item, idx) => (
                      <button
                        key={`mobile-link-${idx}`}
                        onClick={() => handleNavigation(item.link)}
                        className="block w-full rounded-lg px-4 py-3 text-left text-2xl font-semibold text-white/85 transition-all duration-200 hover:bg-white/10 hover:text-white"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-white/75">
                          Theme
                        </span>
                        <ThemeToggle />
                      </div>
                      {renderMobileWaitlistButton()}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </>,
          document.body
        )}

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
    </Navbar>
  );
}
