import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // 静的エクスポートを有効化
  basePath: "/sutamon.site", // ← GitHub リポジトリ名に変更
  assetPrefix: "/sutamon.site/",
  images: {
    unoptimized: true, // Next/Image の最適化を無効化
  },
  reactStrictMode: true,
};

export default nextConfig;
