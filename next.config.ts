import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {}, // Enable Turbopack explicitly
  images: {
    unoptimized: true // Allow serving unoptimized images (like favicons)
  }
};

export default nextConfig;
