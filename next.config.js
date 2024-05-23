const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/styles")],
  },
  images: {
    domains: ["localhost"],
  },
  transpileModules: [
    "@react-three/drei",
    "@react-three/fiber",
    "@mui/x-charts",
  ],
};

module.exports = nextConfig;
