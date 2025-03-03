/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Geçici olarak ESLint kontrolünü devre dışı bırakıyoruz
  },
};

module.exports = nextConfig; 