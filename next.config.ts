import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {}, // Enable Turbopack explicitly
  images: {
    unoptimized: true // Allow serving unoptimized images (like favicons)
  },
  // Ensure static files are served correctly in production
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=14400, must-revalidate',
          }
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          }
        ],
      }
    ]
  }
};

export default nextConfig;
