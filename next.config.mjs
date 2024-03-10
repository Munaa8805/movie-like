/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dreamworks.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "stan.com.au",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;