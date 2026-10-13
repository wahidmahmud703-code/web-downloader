/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { 
    ignoreBuildErrors: true 
  },
  eslint: { 
    ignoreDuringBuilds: true 
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.redd.it"
      }
    ]
  }
};

module.exports = nextConfig;
