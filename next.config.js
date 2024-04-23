/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    enabled: true,
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "cdn.builder.io",
      "fakestoreapi.com"
    ], // Add your image server domain here
  },
};

module.exports = nextConfig;
