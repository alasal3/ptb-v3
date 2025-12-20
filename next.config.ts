import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  cleanDistDir: true,
  compress: false,
  poweredByHeader: false,
=======
  /* config options here */
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
>>>>>>> temp-fix
};

export default nextConfig;
