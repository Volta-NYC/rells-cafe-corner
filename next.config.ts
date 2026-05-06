import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.foodhub.com" },
      { protocol: "https", hostname: "assets.touch2success.com" },
      { protocol: "https", hostname: "public.touch2success.com" },
      { protocol: "https", hostname: "nativesites.touch2success.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
