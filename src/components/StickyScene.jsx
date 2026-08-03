'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { readJson, writeJson } from '../lib/storage'

const FILL = {
  mint: '#b8e0c8',
  cream: '#f3e8c8',
  peach: '#f0c9b0',
  sky: '#c5d9e8',
}

const COLORS = ['mint', 'cream', 'peach', 'sky']
const NOTE_W = 150
const NOTE_H = 88
const BOARD_W = 680
const BOARD_H = 400
const DRAG_THRESHOLD = 5

/** Extra tip snippets used to pad thin lists into a busy sticky wall. */
const FILLER_TIPS = [
  { label: 'Keep it short', body: 'One assertion per path beats a mega-tour that flakes.' },
  { label: 'Name the wait', body: 'Wait for a real signal (URL, text, network) — not a magic sleep.' },
  { label: 'Scope locators', body: 'Prefer getByRole / getByText over brittle CSS chains.' },
  { label: 'Trace when stuck', body: 'Open the trace: timeline + screenshots beat guessing.' },
  { label: 'One browser first', body: 'Green on Chromium, then expand to Firefox / WebKit.' },
  { label: 'Isolate state', body: 'Fresh context per test. Shared cookies are flake fuel.' },
  { label: 'Assert the UI', body: 'Users see the page — assert what they see, not only API JSON.' },
  { label: 'Retry wisely', body: 'Retries hide flakes. Fix the race; don’t paper over it.' },
  { label: 'Seed data', body: 'Deterministic fixtures beat “whatever is in staging today.”' },
  { label: 'Close the loop', body: 'After the tip: run one tiny experiment in your browser.' },
]

function scatterDefaults() {
  // ponytail: fixed scatter grid with light jitter — enough notes without a layout engine
  const spots = [
    [20, 20, -7],
    [180, 12, 4],
    [340, 18, -3],
    [500, 24, 6],
    [40, 120, 3],
    [200, 110, -5],
    [440, 100, 2],
    [520, 130, -4],
    [30, 220, 5],
    [190, 240, -2],
    [360, 250, 4],
    [510, 230, -6],
    [80, 310, 2],
    [260, 300, -4],
    [420, 305, 3],
    [545, 300, -2],
  ]
  return spots.map(([x, y, rot], i) => {
    const tip = FILLER_TIPS[i % FILLER_TIPS.length]
    return {
      id: `scatter-${i}`,
      x,
      y,
      rot,
      label: tip.label,
      body: tip.body,
      color: COLORS[i % COLORS.length],
    }
  })
}

/** Notes baked into the fun board (not overlaid on the old cover). */
export function defaultStickies(step) {
  const focus = {
    id: 'focus',
    x: 500,
    y: 56,
    rot: 4,
    label: String(step?.title || 'This step').slice(0, 28),
    body: String(step?.body || 'Follow the paths between the windows — each stop is a move in your test.').slice(0, 200),
    color: 'cream',
  }
  const deeper = step?.learnMore
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
      }
  const path = {
    id: 'path',
    x: 500,
    y: 310,
    rot: -3,
    label: 'Follow the dashed path',
    body: step?.tip || 'open → act → assert. Short paths flake less than epic tours.',
    color: 'peach',
  }
  const hack = {
    id: 'hack',
    x: 48,
    y: 42,
    rot: -6,
    label: 'Pathwise hack',
    body: 'Drag stickies around · tap one for the tip. This scene is drawn for the lesson.',
    color: 'mint',
  }
  // Merge lesson-specific notes onto a busy scatter wall (lesson notes win on id).
  return mergeNotes([hack, focus, deeper, path], scatterDefaults())
}

export const playwrightCoverStickies = mergeNotes(
  [
    {
      id: 'hack',
      x: 36,
      y: 28,
      rot: -7,
      label: 'Pathwise hack',
      body: 'Drag me · tap for tips. Fresh study board — not the old cover photo.',
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
  ],
  scatterDefaults(),
)

function mergeNotes(priority, filler) {
  const byId = new Map()
  for (const n of filler) byId.set(n.id, n)
  for (const n of priority) byId.set(n.id, n)
  return [...byId.values()]
}

function clampPos(x, y) {
  return {
    x: Math.max(0, Math.min(BOARD_W - NOTE_W, x)),
    y: Math.max(0, Math.min(BOARD_H - NOTE_H, y)),
  }
}

function posKey(sceneKey) {
  return `pw:sticky-pos:${sceneKey || 'default'}`
}

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

function StickySvg({ note, selected, dragging, onPointerDown, onActivate }) {
  const fill = FILL[note.color] || FILL.mint
  return (
    <g
      className={`fun-sticky${selected ? ' is-open' : ''}${dragging ? ' is-dragging' : ''}`}
      transform={`translate(${note.x} ${note.y}) rotate(${note.rot || 0})`}
      onPointerDown={onPointerDown}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onActivate?.(note.id)
        }
      }}
      aria-label={`${note.label}. Drag to move, tap for tip.`}
    >
      <rect width={NOTE_W} height={NOTE_H} rx="2" fill={fill} filter="url(#stickyShadow)" />
      <path d={`M0 ${NOTE_H - 10} L12 ${NOTE_H} L0 ${NOTE_H} Z`} fill={fill} opacity="0.85" />
      <rect
        x="48"
        y="4"
        width="54"
        height="12"
        fill="rgba(210,184,140,0.75)"
        stroke="rgba(120,90,50,0.25)"
        transform="rotate(-4 75 10)"
      />
      <text x="12" y="40" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700" fontSize="13" fill="#0B3D2E">
        {String(note.label).slice(0, 18)}
      </text>
      <text x="12" y="58" fontFamily="Source Sans 3, sans-serif" fontSize="10" fill="#3a453c">
        drag · tap →
      </text>
    </g>
  )
}

/**
 * Study board with lots of draggable sticky notes (no board rotation).
 */
export default function StickyScene({ stickies, sceneKey, title = 'Lesson map' }) {
  const [openId, setOpenId] = useState(null)
  const [positions, setPositions] = useState({})
  const [dragId, setDragId] = useState(null)
  const svgRef = useRef(null)
  const dragRef = useRef(null)
  const positionsRef = useRef(positions)
  positionsRef.current = positions

  const baseNotes = useMemo(() => {
    const raw = stickies?.length ? stickies : defaultStickies({ title })
    // Pad thin custom lists so the board always looks busy
    return raw.length >= 10 ? raw : mergeNotes(raw, scatterDefaults())
  }, [stickies, title])

  useEffect(() => {
    setOpenId(null)
    setDragId(null)
    const saved = readJson(posKey(sceneKey), {})
    setPositions(saved && typeof saved === 'object' ? saved : {})
  }, [sceneKey])

  const notes = useMemo(() => {
    return baseNotes.map((n) => {
      const p = positions[n.id]
      if (!p || typeof p.x !== 'number' || typeof p.y !== 'number') return n
      const { x, y } = clampPos(p.x, p.y)
      return { ...n, x, y }
    })
  }, [baseNotes, positions])

  const open = notes.find((n) => n.id === openId) || null

  function clientToSvg(clientX, clientY) {
    const svg = svgRef.current
    if (!svg) return { x: 0, y: 0 }
    const pt = svg.createSVGPoint()
    pt.x = clientX
    pt.y = clientY
    const ctm = svg.getScreenCTM()
    if (!ctm) return { x: 0, y: 0 }
    const p = pt.matrixTransform(ctm.inverse())
    return { x: p.x, y: p.y }
  }

  function onStickyPointerDown(note, e) {
    if (e.button != null && e.button !== 0) return
    e.preventDefault()
    e.stopPropagation()
    const svgPt = clientToSvg(e.clientX, e.clientY)
    const d = {
      id: note.id,
      pointerId: e.pointerId,
      offsetX: svgPt.x - note.x,
      offsetY: svgPt.y - note.y,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
      last: null,
    }
    dragRef.current = d
    setDragId(note.id)

    function onMove(ev) {
      if (ev.pointerId !== d.pointerId) return
      const mdx = ev.clientX - d.startX
      const mdy = ev.clientY - d.startY
      if (!d.moved && Math.hypot(mdx, mdy) < DRAG_THRESHOLD) return
      d.moved = true
      const pt = clientToSvg(ev.clientX, ev.clientY)
      const { x, y } = clampPos(pt.x - d.offsetX, pt.y - d.offsetY)
      d.last = { x, y }
      setPositions((prev) => ({ ...prev, [d.id]: { x, y } }))
    }

    function onUp(ev) {
      if (ev.pointerId !== d.pointerId) return
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      dragRef.current = null
      setDragId(null)
      if (d.moved && d.last) {
        const next = { ...positionsRef.current, [d.id]: d.last }
        positionsRef.current = next
        setPositions(next)
        writeJson(posKey(sceneKey), next)
      } else if (!d.moved) {
        setOpenId(d.id)
      }
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
  }

  return (
    <div className="fun-board">
      <div className="fun-board-toolbar">
        <span className="fun-board-title">{title}</span>
        <span className="fun-board-hint">Drag stickies · tap for tips</span>
      </div>

      <div className="fun-board-stage">
        <svg
          ref={svgRef}
          className="fun-board-svg"
          viewBox={`0 0 ${BOARD_W} ${BOARD_H}`}
          role="img"
          aria-label="Fun annotated lesson board"
        >
          <defs>
            <pattern id="graph" width="18" height="18" patternUnits="userSpaceOnUse">
              <path d="M 18 0 L 0 0 0 18" fill="none" stroke="rgba(11,61,46,0.08)" strokeWidth="1" />
            </pattern>
            <filter id="stickyShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="rgba(11,61,46,0.2)" />
            </filter>
          </defs>

          <rect width={BOARD_W} height={BOARD_H} rx="18" fill="#eef3ef" />
          <rect width={BOARD_W} height={BOARD_H} rx="18" fill="url(#graph)" />
          <ellipse cx="340" cy="360" rx="280" ry="40" fill="#c5dccb" opacity="0.55" />
          <ellipse cx="120" cy="340" rx="90" ry="28" fill="#b4d4be" opacity="0.5" />

          <g fill="#0B3D2E">
            <path d="M70 300 L90 240 L110 300 Z" />
            <path d="M55 320 L90 270 L125 320 Z" opacity="0.85" />
            <rect x="86" y="300" width="8" height="28" fill="#1a3d2e" />
            <path d="M130 310 L145 265 L160 310 Z" />
          </g>
          <g transform="translate(580 250)" fill="#1a7a55">
            <ellipse cx="0" cy="0" rx="14" ry="8" transform="rotate(-30)" />
            <ellipse cx="18" cy="10" rx="14" ry="8" transform="rotate(20)" />
            <ellipse cx="8" cy="22" rx="12" ry="7" transform="rotate(-10)" />
            <path d="M8 0 L8 50" stroke="#0B3D2E" strokeWidth="3" fill="none" />
          </g>

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
            Drag stickies · tap for tips
          </text>

          {notes.map((n) => (
            <StickySvg
              key={n.id}
              note={n}
              selected={openId === n.id}
              dragging={dragId === n.id}
              onPointerDown={(e) => onStickyPointerDown(n, e)}
              onActivate={setOpenId}
            />
          ))}
        </svg>
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
