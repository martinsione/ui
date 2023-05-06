import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  redirects: () => [
    {
      source: "/",
      destination: "/docs",
      permanent: false,
    },
  ],
};

export default withContentlayer(nextConfig);
