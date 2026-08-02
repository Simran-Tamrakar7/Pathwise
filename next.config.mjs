/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  // Static export works on Vercel + GitHub Pages.
  output: 'export',
  // Empty on Vercel (root). Set NEXT_PUBLIC_BASE_PATH=/Pathwise for GitHub Pages.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
