"use client";
import { useState } from "react";
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
    { name: "Pricing", link: "#pricing" },
    { name: "Docs", link: "/docs" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const handleLogin = () => {
    router.push("/signin");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  const handleGetStarted = () => {
    router.push("/signup");
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={navItems}
          onItemClick={() => console.log('Desktop nav item clicked')}
        />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="secondary"
            as="button"
            onClick={handleLogin}
          >
            Login
          </NavbarButton>
          <NavbarButton
            variant="primary"
            as="button"
            onClick={handleSignup}
          >
            Sign Up
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-600 dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 w-full">
            <NavbarButton
              variant="secondary"
              className="w-full"
              as="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleLogin();
              }}
            >
              Login
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="w-full"
              as="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleGetStarted();
              }}
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}