"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

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
          behavior: "smooth"
        });
      }
    } else {
      // Handle route navigation
      router.push(path);
    }
  };

  const handleLogin = () => {
    setIsMobileMenuOpen(false);
    router.push("/login");
  };

  const handleSignup = () => {
    setIsMobileMenuOpen(false);
    router.push("/signup");
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
          <NavbarButton
            variant="primary"
            as="button"
            onClick={handleSignup}
          >
            Get Started
          </NavbarButton>
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
                    <NavbarButton
                      variant="secondary"
                      as="button"
                      onClick={handleLogin}
                      className="w-full justify-center py-3 text-base"
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      variant="primary"
                      as="button"
                      onClick={handleSignup}
                      className="w-full justify-center py-3 text-base"
                    >
                      Get Started
                    </NavbarButton>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </MobileNav>
    </Navbar>
  );
}