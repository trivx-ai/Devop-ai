/**
 * SEO Utilities for Trivx AI
 * Provides helper functions for structured data, metadata, and SEO optimization
 */

import { Metadata } from 'next';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleSchema {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://trivx.in/#organization',
    name: 'Trivx AI',
    url: 'https://trivx.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://trivx.in/trivx.png',
      width: 512,
      height: 512,
    },
    description: 'AI-powered DevOps automation platform for developers and teams',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8130923346',
      contactType: 'Customer Service',
      email: 'info@trivx.in',
    },
    sameAs: [
      'https://twitter.com/trivxAi',
      'https://github.com/trivx-ai',
      'https://linkedin.com/company/trivxai',
    ],
  };
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD structured data for Article
 */
export function generateArticleSchema(article: ArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image || 'https://trivx.in/og-image.png',
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: generateOrganizationSchema(),
  };
}

/**
 * Generate JSON-LD structured data for SoftwareApplication
 */
export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Trivx AI',
    operatingSystem: 'Web',
    applicationCategory: 'DeveloperApplication',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '0',
      highPrice: '99000',
      offerCount: '4',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
    },
    description:
      'AI-powered DevOps automation platform that automates CI/CD pipelines, infrastructure provisioning, and cloud deployments across AWS, Azure, and GCP.',
    featureList: [
      'AI-powered CI/CD pipeline generation',
      'Multi-cloud deployment automation',
      'Infrastructure provisioning with AI',
      'Self-healing DevOps workflows',
      'Natural language DevOps commands',
      'Real-time monitoring and alerts',
      'Automated code analysis',
      'Kubernetes deployment automation',
    ],
    screenshot: 'https://trivx.in/hero-dark.png',
  };
}

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(params: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const { title, description, path, keywords = [], image = '/og-image.png' } = params;
  const url = `https://trivx.in${path}`;

  return {
    title,
    description,
    keywords: [
      'AI DevOps platform',
      'automated CI/CD',
      'DevOps automation',
      'cloud deployment',
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Primary DevOps keywords for SEO
 */
export const PRIMARY_KEYWORDS = [
  'AI DevOps platform',
  'automated CI/CD',
  'DevOps automation tool',
  'AI deployment platform',
  'code to cloud automation',
  'self-healing DevOps',
  'AI Ops platform',
];

/**
 * Secondary DevOps keywords for SEO
 */
export const SECONDARY_KEYWORDS = [
  'auto pipeline generator',
  'GitHub CI generator',
  'cloud deployment automation',
  'infrastructure provisioning AI',
  'Kubernetes automated deployment',
  'multi-cloud DevOps',
  'AWS deployment automation',
  'Azure DevOps automation',
  'GCP deployment platform',
];

/**
 * Long-tail keywords for SEO
 */
export const LONGTAIL_KEYWORDS = [
  'how to automate CI/CD pipelines',
  'AI for DevOps engineers',
  'deploy apps automatically with AI',
  'AI platform for cloud infrastructure',
  'reduce DevOps workload with AI',
  'automate infrastructure provisioning',
  'best AI DevOps automation platform',
  'CI/CD pipeline generator tool',
];

/**
 * Semantic keywords for NLP and search intent
 */
export const SEMANTIC_KEYWORDS = [
  'DevOps workflow automation',
  'SRE automation',
  'autonomous deployments',
  'DevOps productivity tools',
  'workflow orchestration AI',
  'continuous deployment automation',
  'infrastructure as code',
  'cloud orchestration platform',
];

/**
 * Generate complete keyword list for a page
 */
export function getAllKeywords(): string[] {
  return [
    ...PRIMARY_KEYWORDS,
    ...SECONDARY_KEYWORDS,
    ...LONGTAIL_KEYWORDS,
    ...SEMANTIC_KEYWORDS,
  ];
}

/**
 * Inject structured data into page
 */
export function injectStructuredData(data: Record<string, unknown>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
