"use client";
import { useState, useEffect, useRef } from "react";
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

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isAuthRedirecting, setIsAuthRedirecting] = useState(false);
  const { signIn } = useSignIn();
  const { isSignedIn } = useUser();
  const pendingAutoJoinRef = useRef(false);
  const router = useRouter();
  const pendingKey = "waitlist:pending:header";

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Workflow", link: "#workflow" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "/contact" },
  ];

  // Close mobile menu on escape key
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
        return;
      }

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to join waitlist.");
      }

      toast.success(data.message ?? "You are now on the waitlist.");
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
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: window.location.href,
      });
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
        <NavbarButton variant="primary" as="button" onClick={onJoinWaitlist}>
          {isSubmitting ? "Joining..." : "Join Waitlist"}
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
          className="w-full justify-center py-3 text-base"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
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

        {/* Custom Mobile Menu with backdrop handling */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMobileMenu}
            />

            {/* Menu */}
            <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 border-b border-border backdrop-blur-md shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
              <div className="container mx-auto px-4 sm:px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  {navItems.map((item, idx) => (
                    <button
                      key={`mobile-link-${idx}`}
                      onClick={() => handleNavigation(item.link)}
                      className="block w-full text-left text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 py-3 px-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Theme
                      </span>
                      <ThemeToggle />
                    </div>
                    {renderMobileWaitlistButton()}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </MobileNav>

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
    </Navbar>
  );
}
