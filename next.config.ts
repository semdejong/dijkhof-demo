import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: false },
      { source: "/index.php/aanlegtuin", destination: "/tuinaanleg", permanent: false },
      { source: "/index.php/onderhoud", destination: "/tuinonderhoud", permanent: false },
      { source: "/index.php/bestratingen", destination: "/bestrating", permanent: false },
      { source: "/index.php/aanleg-paardenfaciliteiten", destination: "/paardenfaciliteiten", permanent: false },
      { source: "/index.php/contact", destination: "/contact", permanent: false },
      { source: "/index.php/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
