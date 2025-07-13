/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withVideos(nextConfig);



