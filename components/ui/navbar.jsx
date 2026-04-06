"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import { useAuthSession } from "@/lib/use-auth-session";
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
  const { isSignedIn, isLoading: isAuthLoading } = useAuthSession();
  const pendingAutoJoinRef = useRef(false);
  const router = useRouter();
  const pathname = usePathname();
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
      if (pathname !== "/") {
        router.push(`/${path}`);
        return;
      }

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
    if (isAuthLoading) {
      toast.info("Checking your sign-in session. Please wait a moment.");
      return;
    }

    setIsMobileMenuOpen(false);
    window.localStorage.setItem(pendingKey, "1");
    setIsAuthPopupOpen(true);
  };

  const onStartGoogleAuth = () => {
    setIsAuthRedirecting(true);

    const returnTo = window.location.href;
    const authUrl = `/api/auth/google/start?returnTo=${encodeURIComponent(returnTo)}`;
    window.location.assign(authUrl);
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
    if (isAuthLoading) {
      return (
        <NavbarButton variant="primary" as="button" disabled>
          Checking...
        </NavbarButton>
      );
    }

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
    if (isAuthLoading) {
      return (
        <NavbarButton
          variant="primary"
          as="button"
          disabled
          className="w-full justify-center rounded-xl p-4 text-base font-semibold"
        >
          Checking...
        </NavbarButton>
      );
    }

    if (isSignedIn) {
      return (
        <NavbarButton
          variant="primary"
          as="button"
          onClick={onJoinWaitlist}
          disabled={isSubmitting || isJoined}
          className="w-full justify-center rounded-xl p-4 text-base font-semibold"
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
        className="w-full justify-center rounded-xl p-4 text-base font-semibold"
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
          {/* <ThemeToggle /> */}
          {renderDesktopWaitlistButton()}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className={isMobileMenuOpen ? "hidden" : ""}>
        <MobileNavHeader className="rounded-2xl border border-white/10 bg-[#101010]/95 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.3)]">
          <NavbarLogo />
          <div className="rounded-xl border border-white/10 bg-[#171717] p-2 text-white">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </MobileNavHeader>
      </MobileNav>

      {/* Mobile menu rendered in a portal to avoid stacking/transform issues */}
      {isMounted &&
        isMobileMenuOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[990] bg-black/80 lg:hidden"
              onClick={closeMobileMenu}
            />

            <aside className="fixed inset-0 z-[1000] flex flex-col bg-[#0c0c0c] lg:hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <NavbarLogo />
                <div className="rounded-xl border border-white/10 bg-[#171717] p-2 text-white">
                  <MobileNavToggle isOpen={true} onClick={closeMobileMenu} />
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-4">
                  {navItems.map((item, idx) => {
                    const isActiveRoute = item.link === "/"
                      ? pathname === "/"
                      : !item.link.startsWith("#") && pathname === item.link;

                    return (
                      <button
                        key={`mobile-link-${idx}`}
                        onClick={() => handleNavigation(item.link)}
                        className={`group flex w-full items-center justify-between rounded-xl border px-4 py-4 text-left text-lg font-semibold transition-colors duration-200 ${isActiveRoute
                            ? "border-[var(--color-one)]/45 bg-[rgba(242,97,63,0.12)] text-white"
                            : "border-white/10 bg-[#121212] text-white/85 hover:bg-[#171717] hover:text-white"
                          }`}
                      >
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div className="border-t border-white/10 bg-[#0f0f0f] p-8">
                {/* <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-[#151515] px-4 py-3">
                  <span className="text-sm font-medium text-white/70">Theme</span>
                  <ThemeToggle />
                </div> */}

                {renderMobileWaitlistButton()}
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
