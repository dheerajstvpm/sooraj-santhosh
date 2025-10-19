const isProd = process.env.NODE_ENV === "production";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/sooraj-santhosh/" : "",
  basePath: isProd ? "/sooraj-santhosh" : "",
  output: "export",
  /* config options here */
};

export default nextConfig;
