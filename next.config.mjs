/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/real-estate-website", // Removed for custom domain
  env: {
    NEXT_PUBLIC_BASE_PATH: "", // Empty for custom domain (root)
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
