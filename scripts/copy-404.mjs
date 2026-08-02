import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const out = join(root, 'out')
mkdirSync(out, { recursive: true })
copyFileSync(join(out, 'index.html'), join(out, '404.html'))
console.log('Copied out/index.html → out/404.html')
