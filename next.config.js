/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["media-exp1.licdn.com", "i.imgur.com"],
  },
};

module.exports = nextConfig;
