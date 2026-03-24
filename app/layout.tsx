import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";

function decodeFrontendApiFromPublishableKey(publishableKey?: string): string | undefined {
  if (!publishableKey) return undefined;

  const encodedPart = publishableKey.split("_").pop();
  if (!encodedPart) return undefined;

  try {
    const normalized = encodedPart.replace(/-/g, "+").replace(/_/g, "/");
    const paddingLength = (4 - (normalized.length % 4)) % 4;
    const padded = `${normalized}${"=".repeat(paddingLength)}`;
    const decoded =
      typeof atob === "function"
        ? atob(padded)
        : Buffer.from(padded, "base64").toString("utf8");

    return decoded.replace(/\$/g, "").trim();
  } catch {
    return undefined;
  }
}

function sanitizeClerkUrl(url?: string): string | undefined {
  if (!url) return undefined;
  if (url.includes("clerk.trivx.in")) return undefined;
  return url;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://trivx.in"),
  title: {
    default: "Trivx AI - AI-Powered DevOps Automation Platform | CI/CD & Cloud Deployment",
    template: "%s | Trivx AI - DevOps Automation"
  },
  description: "Trivx AI is an end-to-end AI-powered DevOps automation platform. Automate CI/CD pipelines, deploy to AWS/Azure/GCP, provision infrastructure, and enable self-healing with natural language commands. Transform code to cloud effortlessly.",
  keywords: [
    "AI DevOps platform",
    "automated CI/CD",
    "DevOps automation tool",
    "AI deployment platform",
    "code to cloud automation",
    "self-healing DevOps",
    "AI Ops platform",
    "auto pipeline generator",
    "GitHub CI generator",
    "cloud deployment automation",
    "infrastructure provisioning AI",
    "Kubernetes automated deployment",
    "multi-cloud DevOps",
    "AWS deployment automation",
    "Azure DevOps automation",
    "GCP deployment platform",
    "DevOps workflow automation",
    "SRE automation",
    "autonomous deployments",
    "DevOps productivity tools"
  ],
  authors: [{ name: "Trivx AI" }],
  creator: "Trivx AI",
  publisher: "Trivx AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trivx.in",
    title: "Trivx AI - AI-Powered DevOps Automation Platform",
    description: "Automate your entire DevOps workflow with AI. Generate CI/CD pipelines, deploy to multi-cloud, and enable self-healing infrastructure with natural language commands.",
    siteName: "Trivx AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trivx AI - AI-Powered DevOps Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trivx AI - AI-Powered DevOps Automation Platform",
    description: "Automate CI/CD, cloud deployments, and infrastructure provisioning with AI. Transform code to cloud effortlessly.",
    images: ["/twitter-image.png"],
    creator: "@trivxAi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const frontendApi = decodeFrontendApiFromPublishableKey(publishableKey);
  const defaultProxyUrl = frontendApi ? `https://${frontendApi}` : undefined;

  const envProxyUrl = sanitizeClerkUrl(process.env.NEXT_PUBLIC_CLERK_PROXY_URL);
  const envJsUrl = sanitizeClerkUrl(process.env.NEXT_PUBLIC_CLERK_JS_URL);
  const envUiUrl = sanitizeClerkUrl(process.env.NEXT_PUBLIC_CLERK_UI_URL);

  const clerkScriptConfig = {
    publishableKey,
    proxyUrl: envProxyUrl || defaultProxyUrl,
    domain: frontendApi,
    __internal_clerkJSUrl:
      envJsUrl ||
      "https://cdn.jsdelivr.net/npm/@clerk/clerk-js@6/dist/clerk.browser.js",
    __internal_clerkUIUrl:
      envUiUrl ||
      "https://cdn.jsdelivr.net/npm/@clerk/ui@1/dist/ui.browser.js",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8KNVKFEVKQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8KNVKFEVKQ');
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ClerkProvider {...clerkScriptConfig}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
