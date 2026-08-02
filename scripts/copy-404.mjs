import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// ponytail: only needed for static export (GH Pages); Vercel uses Next runtime without out/
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const indexHtml = join(root, 'out', 'index.html')
if (!existsSync(indexHtml)) {
  console.log('Skip 404 copy (no out/ — not a static export build)')
  process.exit(0)
}
copyFileSync(indexHtml, join(root, 'out', '404.html'))
console.log('Copied out/index.html → out/404.html')
