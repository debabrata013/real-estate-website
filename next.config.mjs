/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/real-estate-website",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/real-estate-website",
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
