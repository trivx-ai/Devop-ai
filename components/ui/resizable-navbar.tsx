"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4">{children}</div>
    </div>
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
        "hidden md:flex items-center justify-between py-4",
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
  return (
    <div className={cn("flex items-center space-x-8", className)}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNav({ children, className }: MobileNavProps) {
  return <div className={cn("md:hidden block", className)}>{children}</div>;
}

export function NavbarLogo() {
  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="text-xl font-bold text-neutral-900 dark:text-neutral-100"
      >
        <Image
          src={trivxLogo}
          alt="Trivx logo"
          width={62}
          height={62}
          className=""
        />
      </Link>
    </div>
  );
}

interface NavbarButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function NavbarButton({
  children,
  variant = "primary",
  className,
  onClick,
}: NavbarButtonProps) {
  return (
    <Button
      variant={variant === "primary" ? "default" : "outline"}
      size="sm"
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNavHeader({ children, className }: MobileNavHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between py-4", className)}>
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
        "p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100",
        className
      )}
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
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

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-border",
        "animate-in slide-in-from-top-2 duration-200",
        className
      )}
    >
      <div className="container mx-auto px-4 py-6 space-y-6">{children}</div>
    </div>
  );
}
