import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  output: "export",
  distDir: "dist",
  basePath: "/web",
}

export default nextConfig
