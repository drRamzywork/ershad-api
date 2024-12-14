/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://wc.rmz.one/whatsapp/api/:path*", // Proxy to the API
      },
    ];
  },
};

export default nextConfig;
