import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sparkOfTheDay, sparkTracks, sparks } from '../data/sparks'
import { asset } from '../data/helpers'

const DONE_KEY = 'pathwise-sparks-done'

function loadDone() {
  try {
    return new Set(JSON.parse(localStorage.getItem(DONE_KEY) || '[]'))
  } catch {
    return new Set()
  }
}

export default function Sparks() {
  const location = useLocation()
  const openFromNav = location.state?.open
  const [track, setTrack] = useState('all')
  const [done, setDone] = useState(loadDone)
  const [activeId, setActiveId] = useState(() =>
    openFromNav && sparks.some((s) => s.id === openFromNav) ? openFromNav : null,
  )
  const daily = useMemo(() => sparkOfTheDay(), [])

  const list = useMemo(
    () => sparks.filter((s) => track === 'all' || s.track === track),
    [track],
  )

  const active = sparks.find((s) => s.id === activeId) || null

  function toggleDone(id) {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem(DONE_KEY, JSON.stringify([...next]))
      return next
    })
  }

  return (
    <div className="wrap sparks-page">
      <header className="break-hero-banner sparks-hero">
        <img src={asset('covers/focus-cover.png')} alt="" className="break-hero-img" />
        <div className="break-hero-copy">
          <p className="hero-kicker">5–15 min drills</p>
          <h1>Skill Sparks</h1>
          <p>
            Tiny practice cards across QA, code, design, soft skills, and career — when you don’t have a full chapter
            block. Mark done, then jump into the linked manual.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => setActiveId(daily.id)}>
              Today’s spark
            </button>
            <Link to="/today" className="btn btn-ghost">
              Today
            </Link>
            <Link to="/manuals" className="btn btn-ghost">
              Browse manuals
            </Link>
          </div>
        </div>
      </header>

      <section className="daily-recipe daily-recipe-media sparks-daily" style={{ '--accent': '#0F766E' }}>
        <div>
          <p className="break-kicker">Spark of the day</p>
          <h2>{daily.title}</h2>
          <p className="break-meta">
            {daily.minutes} min · {daily.track}
            {done.has(daily.id) ? ' · done' : ''}
          </p>
          <p>{daily.prompt}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => setActiveId(daily.id)}>
              Open drill
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => toggleDone(daily.id)}>
              {done.has(daily.id) ? 'Undo' : 'Mark done'}
            </button>
          </div>
        </div>
      </section>

      <div className="filters">
        {sparkTracks.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`filter-btn${track === t.id ? ' active' : ''}`}
            onClick={() => setTrack(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="cookbook-count">
        <strong>{done.size}</strong> sparks completed · showing {list.length}
      </p>

      <div className="spark-grid">
        {list.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`spark-card${activeId === s.id ? ' is-open' : ''}${done.has(s.id) ? ' is-done' : ''}`}
            onClick={() => setActiveId(s.id)}
          >
            <p className="break-kicker">
              {s.minutes} min · {s.track}
            </p>
            <h3>{s.title}</h3>
            <p>{s.prompt.slice(0, 90)}…</p>
          </button>
        ))}
      </div>

      {active && (
        <section className="spark-detail" id="spark-detail">
          <p className="break-kicker">
            {active.minutes} min · {active.track}
          </p>
          <h2>{active.title}</h2>
          <p className="spark-prompt">{active.prompt}</p>
          <p className="tip">
            <strong>Done looks like:</strong> {active.check}
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => toggleDone(active.id)}>
              {done.has(active.id) ? 'Completed ✓' : 'Mark done'}
            </button>
            {active.manualId && (
              <Link to={`/manuals/${active.manualId}`} className="btn btn-ghost">
                Open related manual
              </Link>
            )}
            <button type="button" className="btn btn-ghost" onClick={() => setActiveId(null)}>
              Close
            </button>
          </div>
        </section>
      )}
    </div>
  )
}
