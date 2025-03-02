import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Tetap di luar withPWA
};

export default withPWA({
  ...nextConfig, // Gabungkan dengan konfigurasi utama
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
