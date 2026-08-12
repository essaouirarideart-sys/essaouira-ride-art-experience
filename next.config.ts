import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      // www → apex (canonical host)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.essaouirarideart.com" }],
        destination: "https://essaouirarideart.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
