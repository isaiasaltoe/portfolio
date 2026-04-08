import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "/portfolio";
const basePath = isProd ? repoName : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;