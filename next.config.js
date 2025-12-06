/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disables Turbopack to avoid "self is not defined"
  },
};

module.exports = nextConfig;

