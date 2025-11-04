import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static exports
  images: {
    unoptimized: true // Required for static export
  },
  // Copy favicon files to the root of the build output
  async redirects() {
    return []
  }
};

export default nextConfig;
