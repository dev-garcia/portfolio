/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/720x600/F3F4F7/8693ac",
      },
    ],
  },
};

module.exports = nextConfig;
