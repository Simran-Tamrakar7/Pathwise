import { useEffect, useMemo, useState } from 'react'

const FILL = {
  mint: '#b8e0c8',
  cream: '#f3e8c8',
  peach: '#f0c9b0',
  sky: '#c5d9e8',
}

/** Notes baked into the fun board (not overlaid on the old cover). */
export function defaultStickies(step) {
  return [
    {
      id: 'hack',
      x: 48,
      y: 42,
      rot: -6,
      label: 'Pathwise hack',
      body: 'Spin the board · tap a sticky for the tip. This scene is drawn for the lesson — not the old cover.',
      color: 'mint',
    },
    {
      id: 'focus',
      x: 520,
      y: 56,
      rot: 4,
      label: String(step?.title || 'This step').slice(0, 28),
      body: String(step?.body || 'Follow the paths between the windows — each stop is a move in your test.').slice(0, 200),
      color: 'cream',
    },
    step?.learnMore
      ? {
          id: 'deeper',
          x: 40,
          y: 300,
          rot: 3,
          label: 'Go deeper',
          body: String(step.learnMore).slice(0, 200),
          color: 'sky',
        }
      : {
          id: 'do',
          x: 40,
          y: 300,
          rot: 3,
          label: 'Try this',
          body: step?.doThis || 'After you peek the notes, run one tiny experiment in your own browser.',
          color: 'peach',
        },
    {
      id: 'path',
      x: 500,
      y: 310,
      rot: -3,
      label: 'Follow the dashed path',
      body: step?.tip || 'open → act → assert. Short paths flake less than epic tours.',
      color: 'peach',
    },
  ]
}

export const playwrightCoverStickies = [
  {
    id: 'hack',
    x: 36,
    y: 28,
    rot: -7,
    label: 'Pathwise hack',
    body: 'Spin me · tap stickies. Fresh study board — not the old cover photo.',
    color: 'mint',
  },
  {
    id: 'hub',
    x: 310,
    y: 150,
    rot: 2,
    label: 'Page under test',
    body: 'The big window is a real page Playwright drives — locators match what users see.',
    color: 'cream',
  },
  {
    id: 'browsers',
    x: 520,
    y: 40,
    rot: 5,
    label: 'Multi-browser',
    body: 'Same script hits Chromium, Firefox, and WebKit — that’s the whole point.',
    color: 'sky',
  },
  {
    id: 'paths',
    x: 48,
    y: 300,
    rot: -2,
    label: 'Automation path',
    body: 'Dashed roads = open → act → assert. Keep trips short.',
    color: 'peach',
  },
  {
    id: 'tools',
    x: 500,
    y: 300,
    rot: 4,
    label: 'Tooling node',
    body: 'Codegen, traces, and network mocking live next to the runner — open them when tests go weird.',
    color: 'mint',
  },
]

function BrowserWin({ x, y, w, h, kids, accent = '#0B3D2E' }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="10" fill="#f7f4ec" stroke={accent} strokeWidth="3" />
      <rect width={w} height="18" rx="10" fill={accent} />
      <circle cx="14" cy="9" r="3" fill="#7CDBB0" />
      <circle cx="24" cy="9" r="3" fill="#F2EFE6" opacity="0.5" />
      <circle cx="34" cy="9" r="3" fill="#F2EFE6" opacity="0.35" />
      <g transform="translate(0 22)">{kids}</g>
    </g>
  )
}

function StickySvg({ note, selected, onSelect }) {
  const fill = FILL[note.color] || FILL.mint
  return (
    <g
      className={`fun-sticky${selected ? ' is-open' : ''}`}
      transform={`translate(${note.x} ${note.y}) rotate(${note.rot || 0})`}
      style={{ cursor: 'pointer' }}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(note.id)
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(note.id)
        }
      }}
      aria-label={note.label}
    >
      <rect width="150" height="88" rx="2" fill={fill} filter="url(#stickyShadow)" />
      <path d="M0 78 L12 88 L0 88 Z" fill={fill} opacity="0.85" />
      <rect x="48" y="4" width="54" height="12" fill="rgba(210,184,140,0.75)" stroke="rgba(120,90,50,0.25)" transform="rotate(-4 75 10)" />
      <text x="12" y="40" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700" fontSize="13" fill="#0B3D2E">
        {String(note.label).slice(0, 18)}
      </text>
      <text x="12" y="58" fontFamily="Source Sans 3, sans-serif" fontSize="10" fill="#3a453c">
        tap me →
      </text>
    </g>
  )
}

/**
 * Fresh rotatable study board with notes drawn in — replaces the old cover overlay.
 */
export default function StickyScene({ stickies, sceneKey, title = 'Lesson map' }) {
  const [rotation, setRotation] = useState(0)
  const [openId, setOpenId] = useState(null)

  const notes = useMemo(() => stickies || defaultStickies({ title }), [stickies, title])
  const open = notes.find((n) => n.id === openId) || null

  useEffect(() => {
    setOpenId(null)
    setRotation(0)
  }, [sceneKey])

  return (
    <div className="fun-board">
      <div className="fun-board-toolbar">
        <span className="fun-board-title">{title}</span>
        <div className="fun-board-rotate">
          <button type="button" className="btn btn-ghost" onClick={() => setRotation((r) => r - 12)} aria-label="Rotate left">
            ↺
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setRotation(0)} aria-label="Reset rotation">
            Reset
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setRotation((r) => r + 12)} aria-label="Rotate right">
            ↻
          </button>
        </div>
      </div>

      <div className="fun-board-stage">
        <div className="fun-board-spin" style={{ transform: `rotate(${rotation}deg)` }}>
          <svg className="fun-board-svg" viewBox="0 0 680 400" role="img" aria-label="Fun annotated lesson board">
            <defs>
              <pattern id="graph" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M 18 0 L 0 0 0 18" fill="none" stroke="rgba(11,61,46,0.08)" strokeWidth="1" />
              </pattern>
              <filter id="stickyShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="rgba(11,61,46,0.2)" />
              </filter>
            </defs>

            <rect width="680" height="400" rx="18" fill="#eef3ef" />
            <rect width="680" height="400" rx="18" fill="url(#graph)" />
            <ellipse cx="340" cy="360" rx="280" ry="40" fill="#c5dccb" opacity="0.55" />
            <ellipse cx="120" cy="340" rx="90" ry="28" fill="#b4d4be" opacity="0.5" />

            {/* trees */}
            <g fill="#0B3D2E">
              <path d="M70 300 L90 240 L110 300 Z" />
              <path d="M55 320 L90 270 L125 320 Z" opacity="0.85" />
              <rect x="86" y="300" width="8" height="28" fill="#1a3d2e" />
              <path d="M130 310 L145 265 L160 310 Z" />
            </g>
            {/* leaves */}
            <g transform="translate(580 250)" fill="#1a7a55">
              <ellipse cx="0" cy="0" rx="14" ry="8" transform="rotate(-30)" />
              <ellipse cx="18" cy="10" rx="14" ry="8" transform="rotate(20)" />
              <ellipse cx="8" cy="22" rx="12" ry="7" transform="rotate(-10)" />
              <path d="M8 0 L8 50" stroke="#0B3D2E" strokeWidth="3" fill="none" />
            </g>

            {/* dashed paths */}
            <path
              d="M200 200 C 240 120, 300 110, 340 160"
              fill="none"
              stroke="#1a7a55"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M200 200 C 240 120, 300 110, 340 160"
              fill="none"
              stroke="#f7f4ec"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
            <path
              d="M440 170 C 500 120, 560 140, 580 200"
              fill="none"
              stroke="#1a7a55"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M440 170 C 500 120, 560 140, 580 200"
              fill="none"
              stroke="#f7f4ec"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            <path
              d="M340 230 C 280 280, 220 300, 180 310"
              fill="none"
              stroke="#1a7a55"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M340 230 C 280 280, 220 300, 180 310"
              fill="none"
              stroke="#f7f4ec"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            <path
              d="M400 230 C 460 290, 520 300, 560 290"
              fill="none"
              stroke="#1a7a55"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M400 230 C 460 290, 520 300, 560 290"
              fill="none"
              stroke="#f7f4ec"
              strokeWidth="2"
              strokeDasharray="6 8"
            />

            <BrowserWin x="280" y="130" w="140" h="110" accent="#0B3D2E">
              <rect x="12" y="8" width="50" height="36" rx="6" fill="#7CDBB0" />
              <circle cx="48" cy="18" r="8" fill="#F2EFE6" />
              <rect x="72" y="10" width="50" height="6" rx="2" fill="#0B3D2E" opacity="0.35" />
              <rect x="72" y="22" width="40" height="6" rx="2" fill="#0B3D2E" opacity="0.25" />
              <rect x="12" y="52" width="28" height="16" rx="3" fill="#c45c26" opacity="0.7" />
              <rect x="48" y="52" width="28" height="16" rx="3" fill="#0F766E" opacity="0.5" />
            </BrowserWin>

            <BrowserWin x="150" y="70" w="100" h="80" accent="#0F766E">
              <rect x="10" y="8" width="80" height="8" rx="2" fill="#0F766E" opacity="0.35" />
              <rect x="10" y="24" width="55" height="6" rx="2" fill="#0F766E" opacity="0.25" />
              <rect x="10" y="36" width="70" height="6" rx="2" fill="#0F766E" opacity="0.2" />
            </BrowserWin>

            <BrowserWin x="500" y="90" w="100" h="80" accent="#0369A1">
              <rect x="10" y="6" width="24" height="48" rx="3" fill="#0369A1" opacity="0.3" />
              <circle cx="62" cy="28" r="16" fill="#7CDBB0" opacity="0.7" />
            </BrowserWin>

            <BrowserWin x="120" y="250" w="110" h="85" accent="#B45309">
              <rect x="10" y="8" width="90" height="8" rx="2" fill="#B45309" opacity="0.35" />
              <rect x="10" y="24" width="90" height="28" rx="4" fill="#B45309" opacity="0.15" />
            </BrowserWin>

            <BrowserWin x="480" y="240" w="110" h="85" accent="#0D9488">
              <polygon points="55,12 70,40 40,40" fill="#0D9488" opacity="0.45" />
              <polygon points="55,22 78,58 32,58" fill="#7CDBB0" opacity="0.7" />
            </BrowserWin>

            <text x="24" y="28" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="18" fill="#0B3D2E">
              Study map
            </text>
            <text x="24" y="48" fontFamily="Source Sans 3, sans-serif" fontSize="12" fill="#3a453c">
              Rotate · tap stickies for tips
            </text>

            {notes.map((n) => (
              <StickySvg key={n.id} note={n} selected={openId === n.id} onSelect={setOpenId} />
            ))}
          </svg>
        </div>
      </div>

      {open && (
        <div className="fun-board-popover" role="dialog" aria-label={open.label}>
          <div className="fun-board-popover-card" style={{ '--sticky': FILL[open.color] || FILL.mint }}>
            <span className="sticky-tape popover-tape" aria-hidden="true" />
            <p className="sticky-popover-kicker">{open.label}</p>
            <p>{open.body}</p>
            <button type="button" className="btn btn-ghost" onClick={() => setOpenId(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
