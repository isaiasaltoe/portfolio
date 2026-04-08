import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfoliov2/',
  assetPrefix: '/portfoliov2/',
  images:{
    unoptimized: true,
  }
};

module.exports = nextConfig

export default nextConfig;
