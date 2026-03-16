import { SiteFooter } from "@/components/site-footer";
import SiteHeader from "@/components/ui/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered DevOps Automation Platform - Trivx AI",
  description: "Trivx AI automates your entire DevOps workflow - from code analysis to cloud deployment. Generate CI/CD pipelines, provision infrastructure, deploy to AWS/Azure/GCP, and enable self-healing with AI. Start automating DevOps in minutes.",
  alternates: {
    canonical: "https://trivx.in",
  },
};

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://trivx.in/#organization",
                name: "Trivx AI",
                url: "https://trivx.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://trivx.in/trivx.png",
                  width: 512,
                  height: 512,
                },
                description: "AI-powered DevOps automation platform for developers and teams",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Noida",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-7060603346",
                  contactType: "Customer Service",
                  email: "info@trivx.in",
                },
                sameAs: [
                  "https://twitter.com/trivxAi",
                  "https://github.com/trivx-ai",
                  "https://linkedin.com/company/trivxai",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://trivx.in/#website",
                url: "https://trivx.in",
                name: "Trivx AI",
                description: "AI-Powered DevOps Automation Platform",
                publisher: {
                  "@id": "https://trivx.in/#organization",
                },
                inLanguage: "en-US",
              },
              {
                "@type": "SoftwareApplication",
                name: "Trivx AI",
                operatingSystem: "Web",
                applicationCategory: "DeveloperApplication",
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "INR",
                  lowPrice: "0",
                  highPrice: "99000",
                  offerCount: "4",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  ratingCount: "127",
                },
                description: "AI-powered DevOps automation platform that automates CI/CD pipelines, infrastructure provisioning, and cloud deployments across AWS, Azure, and GCP.",
                featureList: [
                  "AI-powered CI/CD pipeline generation",
                  "Multi-cloud deployment automation",
                  "Infrastructure provisioning with AI",
                  "Self-healing DevOps workflows",
                  "Natural language DevOps commands",
                  "Real-time monitoring and alerts",
                  "Automated code analysis",
                  "Kubernetes deployment automation",
                ],
                screenshot: "https://trivx.in/hero-dark.png",
              },
            ],
          }),
        }}
      />
      {/* <SiteBanner /> */}
      <SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
