/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const isStaticExport = Boolean(basePath) || process.env.VERCEL !== '1'

const nextConfig = {
  // Static export for local/`out` and GitHub Pages. On Vercel, use the Next runtime.
  ...(isStaticExport ? { output: 'export' } : {}),
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
