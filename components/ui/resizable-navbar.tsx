"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import trivxLogo from "../../public/trivx.png";

interface NavItem {
  name: string;
  link: string;
}

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export function Navbar({ children, className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </nav>
  );
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function NavBody({ children, className }: NavBodyProps) {
  return (
    <div
      className={cn(
        "hidden lg:flex items-center justify-between py-3 sm:py-4",
        className
      )}
    >
      {children}
    </div>
  );
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
}

export function NavItems({ items, className }: NavItemsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex items-center space-x-6 lg:space-x-8", className)}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="relative text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 py-2 px-1"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item.name}
          {hoveredIndex === index && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] rounded-full" />
          )}
        </Link>
      ))}
    </div>
  );
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNav({ children, className }: MobileNavProps) {
  return <div className={cn("lg:hidden block", className)}>{children}</div>;
}

export function NavbarLogo() {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="flex items-center space-x-2 text-xl font-bold text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
      >
        <div className="relative w-16 h-16 sm:w-14 sm:h-14 overflow-hidden">
          <Image
            src={trivxLogo}
            alt="Trivx logo"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 56px, 64px"
          />
        </div>

      </Link>
    </div>
  );
}

interface NavbarButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "button" | "link";
}

export function NavbarButton({
  children,
  variant = "primary",
  className,
  onClick,
  href,
  as: Component = "button",
}: NavbarButtonProps) {
  const baseClassName = cn(
    "text-sm font-medium px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center",
    variant === "primary"
      ? "bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:shadow-lg hover:shadow-[var(--color-one)]/25"
      : "border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 bg-white/80 dark:bg-black/80 backdrop-blur-sm",
    className
  );

  if (Component === "link" && href) {
    return (
      <Link href={href} className={baseClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNavHeader({ children, className }: MobileNavHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between py-3 sm:py-4", className)}>
      {children}
    </div>
  );
}

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MobileNavToggle({
  isOpen,
  onClick,
  className,
}: MobileNavToggleProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all duration-200",
        className
      )}
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
    </button>
  );
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

export function MobileNavMenu({
  children,
  isOpen,
  className,
}: MobileNavMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        // This would need to be passed from parent component
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => {
          // This would need to be passed from parent component to close menu
        }}
      />

      {/* Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 border-b border-border backdrop-blur-md shadow-lg z-50",
          "animate-in slide-in-from-top-2 duration-200",
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
}
