import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// ponytail: GH Pages needs a root 404.html; Vercel static export also lands in out/
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const indexHtml = join(root, 'out', 'index.html')
if (!existsSync(indexHtml)) {
  console.log('Skip 404 copy (no out/ — build did not export)')
  process.exit(0)
}
copyFileSync(indexHtml, join(root, 'out', '404.html'))
console.log('Copied out/index.html → out/404.html')
