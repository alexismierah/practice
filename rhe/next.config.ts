import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/artificial-grass",
        destination: "/products-services/artificial-grass",
        permanent: true,
      },
      {
        source: "/artificial-garden",
        destination: "/products-services/artificial-garden",
        permanent: true,
      },
      {
        source: "/potted-plants",
        destination: "/products-services/potted-plants",
        permanent: true,
      },
      {
        source: "/potted-trees",
        destination: "/products-services/potted-trees",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
