import { useEffect, useRef, useState } from 'react'
import { readJson, writeJson } from '../lib/storage'

const POS_KEY = 'pathwise-sticky-pos-v1'

const COLORS = {
  mint: '#b8e0c8',
  cream: '#f3e8c8',
  peach: '#f0c9b0',
  sky: '#c5d9e8',
}

/** Fallback stickies when a step doesn’t define its own. */
export function defaultStickies(step) {
  const list = [
    {
      id: 'hack',
      x: 5,
      y: 4,
      label: 'Pathwise hack',
      body: 'Tap a sticky for the tip. Drag it onto the part of the picture it explains.',
      color: 'mint',
    },
  ]
  if (step?.learnMore) {
    list.push({
      id: 'deeper',
      x: 66,
      y: 6,
      label: 'Go deeper',
      body: String(step.learnMore).slice(0, 200),
      color: 'cream',
    })
  }
  if (step?.tip) {
    list.push({
      id: 'tip',
      x: 72,
      y: 58,
      label: 'Pro tip',
      body: step.tip,
      color: 'peach',
    })
  } else if (step?.doThis) {
    list.push({
      id: 'do',
      x: 8,
      y: 68,
      label: 'Try this',
      body: step.doThis,
      color: 'sky',
    })
  }
  if (step?.title) {
    list.push({
      id: 'focus',
      x: 38,
      y: 42,
      label: String(step.title).slice(0, 32),
      body: String(step.body || '').slice(0, 180) || 'Look at this part of the diagram, then continue the card.',
      color: 'cream',
    })
  }
  return list.slice(0, 4)
}

/** Diagram callouts for the Playwright cover illustration. */
export const playwrightCoverStickies = [
  {
    id: 'hack',
    x: 4,
    y: 3,
    label: 'Pathwise hack',
    body: 'Each browser window is a context you can automate. Tap stickies — drag them onto the part they explain.',
    color: 'mint',
  },
  {
    id: 'hub',
    x: 40,
    y: 36,
    label: 'The page under test',
    body: 'Playwright drives a real page — not a screenshot. Locators find roles, text, and test ids the way users see the UI.',
    color: 'cream',
  },
  {
    id: 'paths',
    x: 12,
    y: 55,
    label: 'The automation path',
    body: 'Dashed roads = your test flow: open → act → assert. Keep paths short; flake loves long journeys.',
    color: 'sky',
  },
  {
    id: 'browsers',
    x: 68,
    y: 12,
    label: 'Multi-browser',
    body: 'Same script, Chromium / Firefox / WebKit. That’s why Playwright exists beyond single-engine tools.',
    color: 'peach',
  },
  {
    id: 'hex',
    x: 70,
    y: 68,
    label: 'Tooling node',
    body: 'Codegen, trace viewer, and network mocking sit beside the runner — use them when a test goes weird.',
    color: 'mint',
  },
]

function loadPos(sceneKey) {
  if (!sceneKey) return {}
  return readJson(POS_KEY, {})[sceneKey] || {}
}

function savePos(sceneKey, map) {
  if (!sceneKey) return
  const all = readJson(POS_KEY, {})
  all[sceneKey] = map
  writeJson(POS_KEY, all)
}

/**
 * Lesson image with Studygram-style sticky notes.
 * Click opens info; drag repositions (saved locally).
 */
export default function StickyScene({ src, alt, stickies, sceneKey }) {
  const boardRef = useRef(null)
  const [openId, setOpenId] = useState(null)
  const [positions, setPositions] = useState(() => loadPos(sceneKey))
  const drag = useRef(null)

  useEffect(() => {
    setOpenId(null)
    setPositions(loadPos(sceneKey))
  }, [sceneKey, src])

  const open = stickies.find((s) => s.id === openId) || null

  function onPointerDown(e, sticky) {
    if (e.button !== 0) return
    const board = boardRef.current
    if (!board) return
    const rect = board.getBoundingClientRect()
    const cur = positions[sticky.id] || { x: sticky.x, y: sticky.y }
    drag.current = {
      id: sticky.id,
      ox: e.clientX,
      oy: e.clientY,
      sx: cur.x,
      sy: cur.y,
      w: rect.width,
      h: rect.height,
      moved: false,
    }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e) {
    const d = drag.current
    if (!d || d.id !== e.currentTarget.dataset.stickyId) return
    const dx = ((e.clientX - d.ox) / d.w) * 100
    const dy = ((e.clientY - d.oy) / d.h) * 100
    if (Math.abs(dx) + Math.abs(dy) > 1.2) d.moved = true
    const x = Math.min(88, Math.max(0, d.sx + dx))
    const y = Math.min(82, Math.max(0, d.sy + dy))
    setPositions((prev) => ({ ...prev, [d.id]: { x, y } }))
  }

  function onPointerUp(e, sticky) {
    const d = drag.current
    if (!d || d.id !== sticky.id) return
    drag.current = null
    if (d.moved) {
      setPositions((prev) => {
        savePos(sceneKey, prev)
        return prev
      })
    } else {
      setOpenId((id) => (id === sticky.id ? null : sticky.id))
    }
  }

  return (
    <div className="sticky-scene" ref={boardRef}>
      <img src={src} alt={alt} loading="lazy" className="sticky-scene-img" draggable={false} />
      <p className="sticky-scene-hint">Tap a note · drag to move</p>
      {stickies.map((s) => {
        const p = positions[s.id] || { x: s.x, y: s.y }
        const bg = COLORS[s.color] || COLORS.mint
        return (
          <button
            key={s.id}
            type="button"
            data-sticky-id={s.id}
            className={`sticky-note${openId === s.id ? ' is-open' : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%`, '--sticky': bg }}
            onPointerDown={(e) => onPointerDown(e, s)}
            onPointerMove={onPointerMove}
            onPointerUp={(e) => onPointerUp(e, s)}
            onPointerCancel={() => {
              drag.current = null
            }}
            aria-expanded={openId === s.id}
          >
            <span className="sticky-tape" aria-hidden="true" />
            <span className="sticky-label">{s.label}</span>
          </button>
        )
      })}

      {open && (
        <div className="sticky-popover" role="dialog" aria-label={open.label}>
          <div className="sticky-popover-card" style={{ '--sticky': COLORS[open.color] || COLORS.mint }}>
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
