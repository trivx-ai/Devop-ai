import {
  DiscordLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import trivxLogo from "@/public/trivx.png";

const footerNavs = [
  {
    label: "Platform",
    items: [
      {
        href: "#features",
        name: "AI CI/CD Generator",
      },
      {
        href: "#features",
        name: "Multi-Cloud Deployment",
      },
      {
        href: "#pricing",
        name: "Pricing",
      },
      {
        href: "/integrations",
        name: "Integrations",
      },
    ],
  },
  // {
  //   label: "Resources",
  //   items: [
  //     {
  //       href: "/docs",
  //       name: "Documentation",
  //     },
  //     {
  //       href: "/api",
  //       name: "API Reference",
  //     },
  //     {
  //       href: "/tutorials",
  //       name: "Tutorials",
  //     },
  //     {
  //       href: "/blog",
  //       name: "Blog",
  //     },
  //   ],
  // },
  {
    label: "Company",
    items: [
      {
        href: "/about",
        name: "About Trivx AI",
      },
      // {
      //   href: "/careers",
      //   name: "Careers",
      // },
      {
        href: "/contact",
        name: "Contact Us",
      },
      // {
      //   href: "/support",
      //   name: "Support",
      // },
    ],
  },
  // {
  //   label: "Legal",
  //   items: [
  //     {
  //       href: "/terms",
  //       name: "Terms of Service",
  //     },
  //     {
  //       href: "/privacy",
  //       name: "Privacy Policy",
  //     },
  //     {
  //       href: "/security",
  //       name: "Security",
  //     },
  //     {
  //       href: "/compliance",
  //       name: "Compliance",
  //     },
  //   ],
  // },
];

const footerSocials = [
  {
    href: "https://github.com/trivx-ai",
    name: "GitHub",
    icon: <GitHubLogoIcon className="h-5 w-5" />,
  },
  {
    href: "https://twitter.com/trivxAi",
    name: "Twitter",
    icon: <TwitterLogoIcon className="h-5 w-5" />,
  },
  {
    href: "https://linkedin.com/company/trivxai",
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-5 w-5" />,
  },
  // {
  //   href: "https://discord.gg/trivxai",
  //   name: "Discord",
  //   icon: <DiscordLogoIcon className="h-5 w-5" />,
  // },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-background border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:50px_50px] opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Newsletter Section */}
        <div className="border-b border-border px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Trivx AI
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest AI-powered DevOps insights, automation tips, and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white hover:opacity-90">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="px-6 py-16 md:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                {/* replaced inline svg with Image logo */}
                <div className="p-2 rounded-lg flex items-center justify-center">
                  <Image
                    src={trivxLogo}
                    alt="Trivx logo"
                    width={52}
                    height={52}
                    className=""
                  />
                </div>
                {/* <span className="text-xl font-bold text-foreground">Trivx</span> */}
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Trivx AI is an AI-powered DevOps automation platform that transforms complex DevOps into an effortless, intelligent experience. From code to cloud — automated by AI.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  <span>info@trivx.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  <span>+91-8130923346</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span>Noida, Uttar Pradesh, India`</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerNavs.map((nav) => (
                <div key={nav.label}>
                  <h3 className="mb-6 text-sm font-semibold tracking-wider text-foreground uppercase">
                    {nav.label}
                  </h3>
                  <ul className="space-y-4">
                    {nav.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border px-6 py-8 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Trivx AI. All rights reserved.
              <span className="ml-2">Built with ❤️ in Noida, India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {footerSocials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
