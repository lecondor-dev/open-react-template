/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: {
        enabled: false, // Disable Turbopack
      },
    },
  };
  
  module.exports = nextConfig;