/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '', // nome exato do seu repositório no GitHub
  images: {
    unoptimized: true,
  },
}

export default nextConfig;