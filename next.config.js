/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "i.imgur.com"],
  },
};

module.exports = nextConfig;
