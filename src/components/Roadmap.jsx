'use client'

import Link from 'next/link'
import { asset } from '../data/helpers'

const LEVEL_COLOR = {
  beginner: '#7CDBB0',
  intermediate: '#E8B86D',
  advanced: '#E07A5F',
}

const KIND_LABEL = {
  chapter: 'Chapter',
  checkpoint: 'Checkpoint',
  guide: 'Guide',
}

function groupByPhase(nodes) {
  const groups = []
  for (const node of nodes) {
    const label = node.phase || phaseFromLevel(node.level)
    const last = groups[groups.length - 1]
    if (last && last.label === label) last.nodes.push(node)
    else groups.push({ label, nodes: [node] })
  }
  return groups
}

function phaseFromLevel(level) {
  if (level === 'beginner') return 'Foundations'
  if (level === 'intermediate') return 'Core craft'
  if (level === 'advanced') return 'Pro level'
  return 'Path'
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Build a downloadable SVG of the phase pathway. */
function buildExportSvg(manual, phases) {
  const accent = manual.accent || '#0B3D2E'
  const colW = 300
  const nodeH = 64
  const gap = 18
  const phasePad = 56
  const leftX = 72
  const rightX = 520
  const w = 900

  let y = 100
  const parts = []
  const connectors = []
  let prev = null

  phases.forEach((phase, pi) => {
    const bandTop = y - 12
    const bandH = phasePad + phase.nodes.length * (nodeH + gap) - gap + 24
    parts.push(
      `<rect x="24" y="${bandTop}" width="${w - 48}" height="${bandH}" rx="18" fill="${pi % 2 === 0 ? 'rgba(11,61,46,0.06)' : 'rgba(124,219,176,0.08)'}" stroke="rgba(11,61,46,0.08)" stroke-width="1"/>`,
      `<text x="48" y="${bandTop + 28}" fill="${accent}" font-family="Bricolage Grotesque, sans-serif" font-size="13" font-weight="800" letter-spacing="0.08em">${esc(phase.label.toUpperCase())}</text>`,
      `<text x="${w - 48}" y="${bandTop + 28}" text-anchor="end" fill="#6b756e" font-family="Source Sans 3, sans-serif" font-size="12">${phase.nodes.length} step${phase.nodes.length === 1 ? '' : 's'}</text>`,
    )
    y = bandTop + phasePad

    phase.nodes.forEach((node, ni) => {
      const side = (pi + ni) % 2 === 0 ? 'left' : 'right'
      const x = side === 'left' ? leftX : rightX
      const fill = LEVEL_COLOR[node.level] || '#7CDBB0'
      const isCp = node.kind === 'checkpoint'
      const isGuide = node.kind === 'guide'
      const cy = y + nodeH / 2

      if (prev) {
        const midY = (prev.cy + cy) / 2
        connectors.push(
          `<path d="M ${prev.x + colW / 2} ${prev.cy} C ${prev.x + colW / 2} ${midY}, ${x + colW / 2} ${midY}, ${x + colW / 2} ${cy}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-opacity="0.35" stroke-linecap="round"/>`,
          `<circle cx="${(prev.x + x) / 2 + colW / 2}" cy="${midY}" r="4" fill="${accent}" fill-opacity="0.45"/>`,
        )
      }

      const shape = isCp
        ? `<rect x="${x}" y="${y}" width="${colW}" height="${nodeH}" rx="12" fill="#0B3D2E" stroke="${accent}" stroke-width="2"/>`
        : isGuide
          ? `<rect x="${x}" y="${y}" width="${colW}" height="${nodeH}" rx="28" fill="#F3F0E8" stroke="${accent}" stroke-width="2"/>`
          : `<rect x="${x}" y="${y}" width="${colW}" height="${nodeH}" rx="14" fill="#F3F0E8" stroke="${accent}" stroke-width="2"/>`

      const numFill = isCp ? '#F3F0E8' : accent
      const titleFill = isCp ? '#F3F0E8' : accent
      const metaFill = isCp ? 'rgba(243,240,232,0.7)' : '#6b756e'
      const title = node.title.length > 32 ? `${node.title.slice(0, 32)}…` : node.title
      const meta = [
        KIND_LABEL[node.kind] || 'Chapter',
        node.durationLabel || `~${node.minutes} min`,
      ].join(' · ')

      parts.push(
        `<g>${shape}`,
        `<circle cx="${x + 28}" cy="${cy}" r="16" fill="${isCp ? '#7CDBB0' : accent}"/>`,
        `<text x="${x + 28}" y="${cy + 5}" text-anchor="middle" fill="${isCp ? '#0B3D2E' : '#F3F0E8'}" font-family="Bricolage Grotesque, sans-serif" font-size="12" font-weight="700">${String(node.n).padStart(2, '0')}</text>`,
        `<text x="${x + 56}" y="${y + 26}" fill="${titleFill}" font-family="Bricolage Grotesque, sans-serif" font-size="14" font-weight="700">${esc(title)}</text>`,
        `<text x="${x + 56}" y="${y + 46}" fill="${metaFill}" font-family="Source Sans 3, sans-serif" font-size="11">${esc(meta)}</text>`,
        `<circle cx="${x + colW - 22}" cy="${cy}" r="6" fill="${fill}"/>`,
        `</g>`,
      )

      prev = { x, cy }
      y += nodeH + gap
    })
    y += 20
  })

  const h = Math.max(320, y + 40)
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#7CDBB0" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)" rx="20"/>
  <text x="48" y="48" fill="${accent}" font-family="Bricolage Grotesque, sans-serif" font-size="26" font-weight="800">${esc(manual.title)} roadmap</text>
  <text x="48" y="72" fill="#5a655c" font-family="Source Sans 3, sans-serif" font-size="13">Phase pathway · ${manual.roadmap.length} nodes · Pathwise</text>
  ${connectors.join('\n  ')}
  ${parts.join('\n  ')}
</svg>`
}

/** Interactive phase pathway — roadmap.sh energy, Pathwise brand. */
export default function Roadmap({ manual }) {
  const nodes = manual.roadmap
  const phases = groupByPhase(nodes)
  const accent = manual.accent || '#0B3D2E'
  const base = asset('').replace(/\/?$/, '/')

  function downloadSvg() {
    const svg = buildExportSvg(manual, phases)
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${manual.roadmapSlug}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="pathway-section" style={{ '--path-accent': accent }}>
      <div className="pathway-head">
        <div>
          <p className="pathway-kicker">Interactive pathway</p>
          <h2>Learning roadmap</h2>
          <p>
            A progressive route through {nodes.length} nodes across {phases.length} phase
            {phases.length === 1 ? '' : 's'}. Click any node to open the chapter.
          </p>
        </div>
        <button type="button" className="btn btn-ghost" onClick={downloadSvg}>
          Download {manual.roadmapSlug}.svg
        </button>
      </div>

      <div className="pathway-stage">
        <div className="pathway-stage-glow" aria-hidden="true" />
        <ul className="pathway-legend" aria-label="Node types">
          <li>
            <span className="leg-dot chapter" /> Chapter
          </li>
          <li>
            <span className="leg-dot guide" /> Guide
          </li>
          <li>
            <span className="leg-dot checkpoint" /> Checkpoint
          </li>
          <li className="leg-levels">
            <span className="leg-lvl beginner" /> Beginner
            <span className="leg-lvl intermediate" /> Mid
            <span className="leg-lvl advanced" /> Advanced
          </li>
        </ul>

        <div className="pathway-scroll">
          <div className="pathway-spine" aria-hidden="true">
            <svg viewBox="0 0 40 100" preserveAspectRatio="none">
              <path
                className="spine-draw"
                d="M20 0 C20 12, 8 18, 8 30 C8 42, 32 48, 32 60 C32 72, 20 78, 20 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <ol className="pathway-phases">
            {phases.map((phase, pi) => (
              <li
                key={`${phase.label}-${pi}`}
                className="pathway-phase"
                style={{ '--phase-i': pi }}
              >
                <div className="phase-banner">
                  <span className="phase-index">{String(pi + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{phase.label}</h3>
                    <p>
                      {phase.nodes.length} step{phase.nodes.length === 1 ? '' : 's'}
                    </p>
                  </div>
                </div>

                <ol className="phase-nodes">
                  {phase.nodes.map((node, ni) => {
                    const side = (pi + ni) % 2 === 0 ? 'left' : 'right'
                    const kind = node.kind || 'chapter'
                    return (
                      <li key={node.id} className={`path-node-wrap ${side}`}>
                        <span className="path-connector" aria-hidden="true" />
                        <Link
                          href={`/manuals/${manual.id}/chapters/${node.id}`}
                          className={`path-node kind-${kind}`}
                          data-level={node.level}
                          title={node.title}
                        >
                          <span className="path-node-num" style={{ '--lvl': LEVEL_COLOR[node.level] }}>
                            {String(node.n).padStart(2, '0')}
                          </span>
                          <span className="path-node-body">
                            <span className="path-node-title">{node.title}</span>
                            <span className="path-node-meta">
                              {node.durationLabel || `~${node.minutes} min`}
                              <span className="path-node-kind">{KIND_LABEL[kind] || 'Chapter'}</span>
                            </span>
                          </span>
                          <span className="path-node-go" aria-hidden="true">
                            →
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <details className="pathway-a11y">
        <summary>Text list of all chapters</summary>
        <ol className="roadmap-list">
          {nodes.map((node) => (
            <li key={node.id}>
              <Link href={`/manuals/${manual.id}/chapters/${node.id}`}>
                <span className="rn">{String(node.n).padStart(2, '0')}</span>
                <span className="rt">{node.title}</span>
                <span className="rl">{node.phase || node.level}</span>
              </Link>
            </li>
          ))}
        </ol>
      </details>
    </section>
  )
}
