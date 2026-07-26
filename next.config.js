/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.thekalyanischool.com" },
      { protocol: "https", hostname: "thekalyanischool.com" },
    ],
  },
};

module.exports = nextConfig;
