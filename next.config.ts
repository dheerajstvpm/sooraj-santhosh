const isProd = process.env.NODE_ENV === "production";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: isProd ? "/sooraj-santhosh" : "",
  output: "export",
  /* config options here */
};

export default nextConfig;
