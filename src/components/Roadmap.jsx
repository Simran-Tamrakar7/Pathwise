import { Link } from 'react-router-dom'
import { asset } from '../data/helpers'

const LEVEL_COLOR = {
  beginner: '#7CDBB0',
  intermediate: '#E8B86D',
  advanced: '#E07A5F',
}

/** Clickable learning roadmap + SVG download ({id}-roadmap.svg). */
export default function Roadmap({ manual }) {
  const nodes = manual.roadmap
  const w = 900
  const rowH = 88
  const h = Math.max(280, 80 + nodes.length * rowH)
  const accent = manual.accent || '#0B3D2E'
  const base = asset('').replace(/\/?$/, '/')

  function downloadSvg() {
    const svg = document.getElementById(`roadmap-svg-${manual.id}`)
    if (!svg) return
    const clone = svg.cloneNode(true)
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    clone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    const blob = new Blob(
      [`<?xml version="1.0" encoding="UTF-8"?>\n`, new XMLSerializer().serializeToString(clone)],
      { type: 'image/svg+xml;charset=utf-8' },
    )
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${manual.roadmapSlug}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="roadmap-section">
      <div className="roadmap-head">
        <div>
          <h2>Learning roadmap</h2>
          <p>Follow the route — each node opens a full chapter. Download the graphic anytime.</p>
        </div>
        <button type="button" className="btn btn-ghost" onClick={downloadSvg}>
          Download {manual.roadmapSlug}.svg
        </button>
      </div>

      <div className="roadmap-frame">
        <svg
          id={`roadmap-svg-${manual.id}`}
          className="roadmap-svg"
          viewBox={`0 0 ${w} ${h}`}
          role="img"
          aria-label={`${manual.title} roadmap`}
        >
          <defs>
            <linearGradient id={`rg-${manual.id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
              <stop offset="100%" stopColor="#7CDBB0" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <rect width={w} height={h} fill={`url(#rg-${manual.id})`} rx="16" />
          <text
            x="36"
            y="42"
            fill={accent}
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="800"
          >
            {manual.title} roadmap
          </text>
          <text x="36" y="64" fill="#5a655c" fontFamily="Source Sans 3, sans-serif" fontSize="13">
            Beginner → Pro · open chapters from the list below
          </text>

          {nodes.map((node, i) => {
            const y = 100 + i * rowH
            const x = i % 2 === 0 ? 120 : 480
            const next = nodes[i + 1]
            const nextY = 100 + (i + 1) * rowH
            const nextX = (i + 1) % 2 === 0 ? 120 : 480
            const fill = LEVEL_COLOR[node.level] || '#7CDBB0'
            const href = `${base}manuals/${manual.id}/chapters/${node.id}`
            return (
              <g key={node.id}>
                {next && (
                  <path
                    d={`M ${x + 140} ${y + 28} C ${x + 220} ${y + 28}, ${nextX - 40} ${nextY + 28}, ${nextX} ${nextY + 28}`}
                    stroke={accent}
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray="8 10"
                    opacity="0.45"
                  />
                )}
                <a href={href} className="roadmap-node">
                  <rect
                    x={x}
                    y={y}
                    width="280"
                    height="56"
                    rx="12"
                    fill="#F3F0E8"
                    stroke={accent}
                    strokeWidth="2"
                  />
                  <circle cx={x + 28} cy={y + 28} r="16" fill={accent} />
                  <text
                    x={x + 28}
                    y={y + 33}
                    textAnchor="middle"
                    fill="#F3F0E8"
                    fontFamily="Bricolage Grotesque, sans-serif"
                    fontSize="12"
                    fontWeight="700"
                  >
                    {String(node.n).padStart(2, '0')}
                  </text>
                  <text
                    x={x + 56}
                    y={y + 24}
                    fill={accent}
                    fontFamily="Bricolage Grotesque, sans-serif"
                    fontSize="14"
                    fontWeight="700"
                  >
                    {node.title.length > 28 ? `${node.title.slice(0, 28)}…` : node.title}
                  </text>
                  <text
                    x={x + 56}
                    y={y + 42}
                    fill="#6b756e"
                    fontFamily="Source Sans 3, sans-serif"
                    fontSize="11"
                  >
                    {node.level} · ~{node.minutes} min
                  </text>
                  <circle cx={x + 252} cy={y + 28} r="6" fill={fill} />
                </a>
              </g>
            )
          })}
        </svg>
      </div>

      <ol className="roadmap-list">
        {nodes.map((node) => (
          <li key={node.id}>
            <Link to={`/manuals/${manual.id}/chapters/${node.id}`}>
              <span className="rn">{String(node.n).padStart(2, '0')}</span>
              <span className="rt">{node.title}</span>
              <span className="rl">{node.level}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
