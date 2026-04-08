import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nome-do-repo',
  images:{
    unoptimized: true,
  }
};

module.exports = nextConfig

export default nextConfig;
