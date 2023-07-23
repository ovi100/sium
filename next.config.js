/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  remotePatterns: [
    {
      protocol: "https",
      hostname: "placehold.jp",
      port: "",
      pathname: "",
    },
  ],
};

module.exports = nextConfig;
