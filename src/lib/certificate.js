/**
 * Shareable completion card — canvas PNG download.
 * Bigger swing: certificate without a backend.
 */
export function downloadCertificate({ title, accent = '#0B3D2E', learner = 'Pathwise learner' }) {
  const w = 1200
  const h = 675
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const g = ctx.createLinearGradient(0, 0, w, h)
  g.addColorStop(0, '#0B3D2E')
  g.addColorStop(0.55, accent)
  g.addColorStop(1, '#0F5C4C')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, w, h)

  ctx.strokeStyle = 'rgba(124, 219, 176, 0.45)'
  ctx.lineWidth = 4
  ctx.strokeRect(36, 36, w - 72, h - 72)

  ctx.fillStyle = '#7CDBB0'
  ctx.font = '600 28px "Bricolage Grotesque", system-ui, sans-serif'
  ctx.fillText('PATHWISE', 72, 110)

  ctx.fillStyle = '#F2EFE6'
  ctx.font = '800 52px "Bricolage Grotesque", system-ui, sans-serif'
  wrapText(ctx, title, 72, 220, w - 144, 58)

  ctx.fillStyle = 'rgba(242, 239, 230, 0.85)'
  ctx.font = '500 26px "Source Sans 3", system-ui, sans-serif'
  ctx.fillText('Path completed', 72, 420)

  ctx.fillStyle = '#F2EFE6'
  ctx.font = '600 30px "Source Sans 3", system-ui, sans-serif'
  ctx.fillText(learner, 72, 470)

  const date = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  ctx.fillStyle = 'rgba(242, 239, 230, 0.7)'
  ctx.font = '400 22px "Source Sans 3", system-ui, sans-serif'
  ctx.fillText(date, 72, 560)

  const a = document.createElement('a')
  a.download = `pathwise-${slug(title)}.png`
  a.href = canvas.toDataURL('image/png')
  a.click()
}

function slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48)
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = String(text).split(/\s+/)
  let line = ''
  let yy = y
  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy)
      line = word
      yy += lineHeight
    } else {
      line = test
    }
  }
  if (line) ctx.fillText(line, x, yy)
}
