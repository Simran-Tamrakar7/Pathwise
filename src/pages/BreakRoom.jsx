import { useEffect, useRef, useState } from 'react'
import {
  breakBooks,
  breakGames,
  breakLinks,
  breakModes,
  breakMovies,
  breakRituals,
} from '../data/breakRoom'

function formatTime(total) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function BreakRoom() {
  const [modeId, setModeId] = useState('break5')
  const mode = breakModes.find((m) => m.id === modeId) || breakModes[2]
  const [remaining, setRemaining] = useState(mode.seconds)
  const [running, setRunning] = useState(false)
  const [doneFlash, setDoneFlash] = useState(false)
  const [ritual] = useState(() => breakRituals[Math.floor(Math.random() * breakRituals.length)])
  const endAt = useRef(null)

  useEffect(() => {
    if (!running) return undefined
    const id = setInterval(() => {
      const left = Math.max(0, Math.ceil((endAt.current - Date.now()) / 1000))
      setRemaining(left)
      if (left <= 0) {
        setRunning(false)
        setDoneFlash(true)
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)()
          const o = ctx.createOscillator()
          const g = ctx.createGain()
          o.connect(g)
          g.connect(ctx.destination)
          o.frequency.value = 660
          g.gain.value = 0.04
          o.start()
          o.stop(ctx.currentTime + 0.25)
        } catch {
          /* audio optional */
        }
      }
    }, 250)
    return () => clearInterval(id)
  }, [running])

  function pickMode(id) {
    const next = breakModes.find((m) => m.id === id)
    setModeId(id)
    setRunning(false)
    setDoneFlash(false)
    setRemaining(next.seconds)
    endAt.current = null
  }

  function start() {
    endAt.current = Date.now() + remaining * 1000
    setDoneFlash(false)
    setRunning(true)
  }

  function pause() {
    setRunning(false)
    endAt.current = null
  }

  function reset() {
    setRunning(false)
    setDoneFlash(false)
    setRemaining(mode.seconds)
    endAt.current = null
  }

  return (
    <div className="wrap break-page">
      <header className="page-hero">
        <h1>Break Room</h1>
        <p>
          Learning hard is a skill. Resting on purpose is too. Timer, books, films, games, and little
          portals — then come back sharper.
        </p>
      </header>

      <section className="timer-panel">
        <div className="timer-modes">
          {breakModes.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`filter-btn${modeId === m.id ? ' active' : ''}`}
              onClick={() => pickMode(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>
        <p className={`timer-display${doneFlash ? ' done' : ''}`} aria-live="polite">
          {formatTime(remaining)}
        </p>
        <p className="timer-kind">{mode.kind === 'focus' ? 'Focus block' : 'Rest block'} · {mode.label}</p>
        <div className="hero-actions timer-actions">
          {!running ? (
            <button type="button" className="btn btn-primary" onClick={start}>
              Start
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={pause}>
              Pause
            </button>
          )}
          <button type="button" className="btn btn-ghost" onClick={reset}>
            Reset
          </button>
        </div>
        {doneFlash && (
          <p className="timer-done-msg">
            Time’s up. {mode.kind === 'focus' ? 'Take a real break.' : 'Pick a chapter and ship one small step.'}
          </p>
        )}
        <p className="ritual">Today’s micro-ritual: {ritual}</p>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Books for a softer brain</h2>
          <p>Not textbooks — ideas that make the next study block land better.</p>
        </div>
        <div className="break-cards">
          {breakBooks.map((b) => (
            <a key={b.title} className="break-card" href={b.url} target="_blank" rel="noreferrer">
              <p className="break-kicker">Book</p>
              <h3>{b.title}</h3>
              <p className="break-meta">{b.author}</p>
              <p>{b.why}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Movies & docs</h2>
          <p>Watch one. Don’t “background Netflix while coding.” Rest means rest.</p>
        </div>
        <div className="break-cards">
          {breakMovies.map((m) => (
            <a key={m.title} className="break-card" href={m.url} target="_blank" rel="noreferrer">
              <p className="break-kicker">Film</p>
              <h3>{m.title}</h3>
              <p>{m.why}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Games that stretch thinking</h2>
          <p>Cap it. Timer on. Fun is allowed — rabbit holes are optional.</p>
        </div>
        <div className="break-cards">
          {breakGames.map((g) => (
            <a key={g.title} className="break-card" href={g.url} target="_blank" rel="noreferrer">
              <p className="break-kicker">Game</p>
              <h3>{g.title}</h3>
              <p>{g.why}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="break-grid-section" style={{ marginBottom: '4rem' }}>
        <div className="section-head">
          <h2>Quick portals</h2>
          <p>Two-minute resets when you can’t do a full break.</p>
        </div>
        <div className="break-cards">
          {breakLinks.map((l) => (
            <a key={l.title} className="break-card" href={l.url} target="_blank" rel="noreferrer">
              <p className="break-kicker">Link</p>
              <h3>{l.title}</h3>
              <p>{l.why}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
