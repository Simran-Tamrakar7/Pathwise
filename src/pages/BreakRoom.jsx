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
import { pickImage } from '../data/mediaImages'
import { asset } from '../data/helpers'

function formatTime(total) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function MediaCard({ href, kicker, title, meta, why, image, onClick }) {
  const body = (
    <>
      <div className="media-thumb">
        <img src={image} alt="" loading="lazy" />
        <span className="media-kicker">{kicker}</span>
      </div>
      <div className="media-body">
        <h3>{title}</h3>
        {meta && <p className="break-meta">{meta}</p>}
        <p>{why}</p>
      </div>
    </>
  )
  if (href) {
    return (
      <a className="media-card" href={href} target="_blank" rel="noreferrer">
        {body}
      </a>
    )
  }
  return (
    <button type="button" className="media-card as-button" onClick={onClick}>
      {body}
    </button>
  )
}

export default function BreakRoom() {
  const [modeId, setModeId] = useState('break5')
  const mode = breakModes.find((m) => m.id === modeId) || breakModes[2]
  const [remaining, setRemaining] = useState(mode.seconds)
  const [running, setRunning] = useState(false)
  const [doneFlash, setDoneFlash] = useState(false)
  const [ritual, setRitual] = useState(() => breakRituals[Math.floor(Math.random() * breakRituals.length)])
  const [doodle, setDoodle] = useState(() => breakDoodles[Math.floor(Math.random() * breakDoodles.length)])
  const [breathId, setBreathId] = useState(0)
  const [breathStep, setBreathStep] = useState(0)
  const [breathOn, setBreathOn] = useState(false)
  const [mood, setMood] = useState('all')
  const [stretchDone, setStretchDone] = useState(() => new Set())
  const endAt = useRef(null)
  const breath = breakBreaths[breathId]

  const pct = mode.seconds ? Math.round(((mode.seconds - remaining) / mode.seconds) * 100) : 0
  const r = 54
  const circ = 2 * Math.PI * r
  const dash = circ - (pct / 100) * circ

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

  const show = useMemo(
    () => ({
      calm: mood === 'all' || mood === 'calm',
      move: mood === 'all' || mood === 'move',
      watch: mood === 'all' || mood === 'watch',
      play: mood === 'all' || mood === 'play',
    }),
    [mood],
  )

  return (
    <div className="wrap break-page break-page-vivid">
      <header className="break-hero-banner">
        <img src={asset('covers/break-hero.png')} alt="" className="break-hero-img" />
        <div className="break-hero-copy">
          <p className="hero-kicker">Rest is part of the curriculum</p>
          <h1>Break Room</h1>
          <p>
            Timer ring, breath cues, stretch checkoffs, books, films, games, music — tap a mood and
            the room reshapes. Then go back to{' '}
            <Link to="/manuals">manuals</Link> sharper.
          </p>
          <div className="mood-row" role="tablist" aria-label="Mood">
            {[
              { id: 'all', label: 'Everything' },
              { id: 'calm', label: 'Calm' },
              { id: 'move', label: 'Move' },
              { id: 'watch', label: 'Watch' },
              { id: 'play', label: 'Play' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={mood === m.id}
                className={`mood-chip${mood === m.id ? ' active' : ''}`}
                onClick={() => setMood(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="timer-panel timer-panel-ring">
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
        <div className="timer-ring-wrap">
          <svg className="timer-ring" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r={r} className="timer-ring-track" />
            <circle
              cx="60"
              cy="60"
              r={r}
              className={`timer-ring-progress${running ? ' running' : ''}`}
              style={{ strokeDasharray: `${circ}`, strokeDashoffset: dash }}
            />
          </svg>
          <p className={`timer-display${doneFlash ? ' done' : ''}`} aria-live="polite">
            {formatTime(remaining)}
          </p>
        </div>
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
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setRitual(breakRituals[Math.floor(Math.random() * breakRituals.length)])}
          >
            New ritual
          </button>
        </div>
        {doneFlash && (
          <p className="timer-done-msg">
            Time’s up.{' '}
            {mode.kind === 'focus'
              ? 'Take a real break — stretch, breathe, or watch something calm.'
              : 'Pick a chapter and ship one small step.'}
          </p>
        )}
        <p className="ritual">Today’s micro-ritual: {ritual}</p>
      </section>

      {show.calm && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Breathe for a minute</h2>
            <p>Interactive cue — follow the prompt, then return to the timer.</p>
          </div>
          <div className="breath-panel breath-panel-vivid">
            <div className={`breath-orb${breathOn ? ' pulse' : ''}`} aria-hidden="true" />
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
      )}

      {show.move && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Desk stretch deck</h2>
            <p>Tap to check off. Two is enough. Use Stretch 7 on the timer if you want structure.</p>
          </div>
          <div className="media-grid">
            {breakStretches.map((s) => {
              const done = stretchDone.has(s.name)
              return (
                <MediaCard
                  key={s.name}
                  kicker={done ? 'Done' : 'Stretch'}
                  title={s.name}
                  meta={s.reps}
                  why={s.how}
                  image={pickImage('stretches', s.name)}
                  onClick={() => {
                    setStretchDone((prev) => {
                      const next = new Set(prev)
                      if (next.has(s.name)) next.delete(s.name)
                      else next.add(s.name)
                      return next
                    })
                  }}
                />
              )
            })}
          </div>
        </section>
      )}

      {show.calm && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Snack smarter</h2>
            <p>Fuel without melting into the couch forever.</p>
          </div>
          <div className="media-grid">
            {breakSnacks.map((s) => (
              <article key={s.title} className="media-card">
                <div className="media-thumb">
                  <img src={pickImage('snacks', s.title)} alt="" loading="lazy" />
                  <span className="media-kicker">Snack</span>
                </div>
                <div className="media-body">
                  <h3>{s.title}</h3>
                  <p>{s.why}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {show.calm && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Doodle prompt</h2>
            <p>Two minutes with a pen beats doomscrolling.</p>
          </div>
          <div className="doodle-banner doodle-banner-rich">
            <p>{doodle}</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setDoodle(breakDoodles[Math.floor(Math.random() * breakDoodles.length)])}
            >
              Shuffle prompt
            </button>
          </div>
        </section>
      )}

      {show.calm && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Books for a softer brain</h2>
            <p>Not textbooks — ideas that make the next study block land better.</p>
          </div>
          <div className="media-grid">
            {breakBooks.map((b) => (
              <MediaCard
                key={b.title}
                href={b.url}
                kicker="Book"
                title={b.title}
                meta={b.author}
                why={b.why}
                image={pickImage('books', b.title)}
              />
            ))}
          </div>
        </section>
      )}

      {show.watch && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Movies & docs</h2>
            <p>Watch one. Rest means rest — not dual-monitor Netflix.</p>
          </div>
          <div className="media-grid">
            {breakMovies.map((m) => (
              <MediaCard
                key={m.title}
                href={m.url}
                kicker="Film"
                title={m.title}
                why={m.why}
                image={pickImage('movies', m.title)}
              />
            ))}
          </div>
        </section>
      )}

      {show.play && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Games that stretch thinking</h2>
            <p>Cap it. Timer on. Fun is allowed — rabbit holes are optional.</p>
          </div>
          <div className="media-grid">
            {breakGames.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Game"
                title={g.title}
                why={g.why}
                image={pickImage('games', g.title)}
              />
            ))}
          </div>
        </section>
      )}

      {show.calm && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Music & ambience</h2>
            <p>Background for focus — keep lyrics optional.</p>
          </div>
          <div className="media-grid">
            {breakMusic.map((m) => (
              <MediaCard
                key={m.title}
                href={m.url}
                kicker="Music"
                title={m.title}
                why={m.why}
                image={pickImage('music', m.title)}
              />
            ))}
          </div>
        </section>
      )}

      {show.calm && (
        <section className="break-grid-section">
          <div className="section-head">
            <h2>Podcasts (one episode max)</h2>
            <p>Ears-only rest while you stretch.</p>
          </div>
          <div className="media-grid">
            {breakPodcasts.map((p) => (
              <MediaCard
                key={p.title}
                href={p.url}
                kicker="Podcast"
                title={p.title}
                why={p.why}
                image={pickImage('podcasts', p.title)}
              />
            ))}
          </div>
        </section>
      )}

      <section className="break-grid-section" style={{ marginBottom: '4rem' }}>
        <div className="section-head">
          <h2>Quick portals</h2>
          <p>Two-minute resets when you can’t do a full break.</p>
        </div>
        <div className="media-grid">
          {breakLinks.map((l) => (
            <MediaCard
              key={l.title}
              href={l.url}
              kicker="Link"
              title={l.title}
              why={l.why}
              image={pickImage('links', l.title)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
