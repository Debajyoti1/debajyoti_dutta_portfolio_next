import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'debajyotidutta.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
    unoptimized: true
  },
  output: 'export',
};

export default nextConfig;
