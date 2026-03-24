import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO & Performance Optimizations */

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    unoptimized: true, // Disable image optimization for Netlify
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Compression
  compress: true,

  // Power by header
  poweredByHeader: false,

  // Generate ETags for caching
  generateEtags: true,

  // Trailing slashes
  trailingSlash: false,

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: wss:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https: wss:; frame-src 'self' https:; child-src 'self' https:; worker-src 'self' https:;"
          }
        ]
      }
    ];
  },
};

export default nextConfig;
