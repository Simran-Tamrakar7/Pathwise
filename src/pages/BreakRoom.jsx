import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  breakBooks,
  breakBreaths,
  breakDoodles,
  breakGames,
  breakLinks,
  breakModes,
  breakMovies,
  breakMusic,
  breakPodcasts,
  breakRituals,
  breakSnacks,
  breakStretches,
} from '../data/breakRoom'
import { recipeOfTheDay, recipes, recipeCuisines } from '../data/recipes'

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
  const [doodle] = useState(() => breakDoodles[Math.floor(Math.random() * breakDoodles.length)])
  const [breathId, setBreathId] = useState(0)
  const [breathStep, setBreathStep] = useState(0)
  const [breathOn, setBreathOn] = useState(false)
  const endAt = useRef(null)
  const daily = useMemo(() => recipeOfTheDay(), [])
  const breath = breakBreaths[breathId]

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

  useEffect(() => {
    if (!breathOn) return undefined
    const id = setInterval(() => {
      setBreathStep((s) => (s + 1) % breath.steps.length)
    }, 4000)
    return () => clearInterval(id)
  }, [breathOn, breath.steps.length])

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
      <header className="page-hero colorful-page-hero">
        <h1>Break Room</h1>
        <p>
          Rest on purpose: timer, breath, stretches, books, films, games, music, doodles — plus a{' '}
          <Link to="/cookbook">Cookbook</Link> with {recipes.length} recipes across {recipeCuisines.length}{' '}
          cuisines.
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
        <p className="timer-kind">
          {mode.kind === 'focus' ? 'Focus block' : 'Rest block'} · {mode.label}
        </p>
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
          <Link to="/cookbook" className="btn btn-ghost">
            Open Cookbook
          </Link>
        </div>
        {doneFlash && (
          <p className="timer-done-msg">
            Time’s up.{' '}
            {mode.kind === 'focus'
              ? 'Take a real break — cook, stretch, or breathe.'
              : 'Pick a chapter and ship one small step.'}
          </p>
        )}
        <p className="ritual">Today’s micro-ritual: {ritual}</p>
      </section>

      <section className="break-spotlight" style={{ '--accent': daily.color }}>
        <div>
          <p className="break-kicker">Tonight’s plate · Cookbook</p>
          <h2>{daily.name}</h2>
          <p className="break-meta">
            {daily.cuisineLabel} · {daily.minutes} min · {daily.difficulty}
          </p>
          <p>{daily.why}</p>
          <div className="hero-actions">
            <Link to="/cookbook" className="btn btn-primary">
              Browse {recipes.length} recipes
            </Link>
            <Link to={`/cookbook?open=${daily.id}`} className="btn btn-ghost">
              Open today’s recipe
            </Link>
          </div>
        </div>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Breathe for a minute</h2>
          <p>Interactive cue — follow the prompt, then return to the timer.</p>
        </div>
        <div className="breath-panel">
          <div className="filters">
            {breakBreaths.map((b, i) => (
              <button
                key={b.name}
                type="button"
                className={`filter-btn${breathId === i ? ' active' : ''}`}
                onClick={() => {
                  setBreathId(i)
                  setBreathStep(0)
                }}
              >
                {b.name}
              </button>
            ))}
          </div>
          <p className="breath-cue" aria-live="polite">
            {breathOn ? breath.steps[breathStep] : 'Press start when ready'}
          </p>
          <p className="break-meta">~{breath.rounds} rounds · 4s per cue</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setBreathOn((v) => !v)
              setBreathStep(0)
            }}
          >
            {breathOn ? 'Stop breath' : 'Start breath'}
          </button>
        </div>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Desk stretch deck</h2>
          <p>Pick two. Timer on Stretch 7 if you want structure.</p>
        </div>
        <div className="break-cards">
          {breakStretches.map((s) => (
            <article key={s.name} className="break-card">
              <p className="break-kicker">Stretch</p>
              <h3>{s.name}</h3>
              <p className="break-meta">{s.reps}</p>
              <p>{s.how}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Snack smarter</h2>
          <p>Fuel without melting into the couch forever.</p>
        </div>
        <div className="break-cards">
          {breakSnacks.map((s) => (
            <article key={s.title} className="break-card">
              <p className="break-kicker">Snack</p>
              <h3>{s.title}</h3>
              <p>{s.why}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Doodle prompt</h2>
          <p>Two minutes with a pen beats doomscrolling.</p>
        </div>
        <div className="doodle-banner">
          <p>{doodle}</p>
        </div>
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

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Music & ambience</h2>
          <p>Background for focus or cooking — keep lyrics optional.</p>
        </div>
        <div className="break-cards">
          {breakMusic.map((m) => (
            <a key={m.title} className="break-card" href={m.url} target="_blank" rel="noreferrer">
              <p className="break-kicker">Music</p>
              <h3>{m.title}</h3>
              <p>{m.why}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="break-grid-section">
        <div className="section-head">
          <h2>Podcasts (one episode max)</h2>
          <p>Ears-only rest while you stretch or cook.</p>
        </div>
        <div className="break-cards">
          {breakPodcasts.map((p) => (
            <a key={p.title} className="break-card" href={p.url} target="_blank" rel="noreferrer">
              <p className="break-kicker">Podcast</p>
              <h3>{p.title}</h3>
              <p>{p.why}</p>
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
