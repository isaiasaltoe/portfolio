import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images:{
    unoptimized: true,
  }
};

module.exports = nextConfig

export default nextConfig;
