/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    images: {
      domains: ['d33wubrfki0l68.cloudfront.net'],
    },
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "**",
    //     },
    //   ],
    // },
  }
  
module.exports = nextConfig
  