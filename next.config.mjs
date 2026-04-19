/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/uvjeti", destination: "/uvjeti-koristenja", permanent: true }];
  }
};

export default nextConfig;
