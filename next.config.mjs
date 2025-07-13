/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  output: 'standalone',
  experimental: {
    esmExternals: false,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default {
    ...nextConfig,
    ...withVideos(),
};



