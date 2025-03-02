import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Tetap di luar withPWA
};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development", // Disable saat dev
  },
});
