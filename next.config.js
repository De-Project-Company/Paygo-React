/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: { displayName: false, fileName: false, pure: true },
    removeConsole: process.env.NODE_ENV === 'production' ? true : false,
  },
};

module.exports = nextConfig;
