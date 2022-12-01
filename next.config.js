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
        hostname: 'assets.illuvium-game.io',
        port: '80',
        pathname: '/illuvitars/**',
      },
    ],
  }
};
