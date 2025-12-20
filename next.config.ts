import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cleanDistDir: true,
  compress: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'gkepkqimbktyzfcflrrr.supabase.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
