import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'global.unitednations.entermediadb.net',
      },
      {
        protocol: 'https',
        hostname: 'edition.cnn.com',
      },
    ],
  },
};

export default nextConfig;
