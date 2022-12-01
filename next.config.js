/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ['robohash.org', 'assets.illuvium-game.io', 'illuvium-dashboard.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.illuvium-game.io',
      },
    ],
    // path: `${basePath}/_next/image`,
  }
};
