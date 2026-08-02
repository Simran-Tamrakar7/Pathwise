import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  breakBooks,
  breakBreaths,
  breakCreative,
  breakDoodles,
  breakEyes,
  breakGames,
  breakLaughs,
  breakLinks,
  breakMicroMoves,
  breakModes,
  breakMovies,
  breakMusic,
  breakOutdoors,
  breakPodcasts,
  breakRituals,
  breakSocial,
  breakStretches,
  breakWalks,
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

function Section({ title, lede, children }) {
  return (
    <section className="break-grid-section">
      <div className="section-head">
        <h2>{title}</h2>
        <p>{lede}</p>
      </div>
      {children}
    </section>
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
  const [doneSet, setDoneSet] = useState(() => new Set())
  const endAt = useRef(null)
  const breath = breakBreaths[breathId]

  const pct = mode.seconds ? Math.round(((mode.seconds - remaining) / mode.seconds) * 100) : 0
  const ringR = 54
  const circ = 2 * Math.PI * ringR
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

  function toggleDone(key) {
    setDoneSet((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const show = useMemo(
    () => ({
      calm: mood === 'all' || mood === 'calm',
      move: mood === 'all' || mood === 'move',
      watch: mood === 'all' || mood === 'watch',
      play: mood === 'all' || mood === 'play',
      create: mood === 'all' || mood === 'create',
      outside: mood === 'all' || mood === 'outside',
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
            Games, walks, eyes, breath, books, films, laughs, doodles, music — a full rest toolkit.
            No kitchen here. Tap a mood to reshape the room, then return to{' '}
            <Link to="/manuals">manuals</Link>.
          </p>
          <div className="mood-row" role="tablist" aria-label="Mood">
            {[
              { id: 'all', label: 'Everything' },
              { id: 'calm', label: 'Calm' },
              { id: 'move', label: 'Move' },
              { id: 'outside', label: 'Outside' },
              { id: 'play', label: 'Play' },
              { id: 'watch', label: 'Watch' },
              { id: 'create', label: 'Create' },
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
            <circle cx="60" cy="60" r={ringR} className="timer-ring-track" />
            <circle
              cx="60"
              cy="60"
              r={ringR}
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
            <button type="button" className="btn btn-primary" onClick={() => {
              endAt.current = Date.now() + remaining * 1000
              setDoneFlash(false)
              setRunning(true)
            }}>
              Start
            </button>
          ) : (
            <button type="button" className="btn btn-primary" onClick={() => {
              setRunning(false)
              endAt.current = null
            }}>
              Pause
            </button>
          )}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setRunning(false)
              setDoneFlash(false)
              setRemaining(mode.seconds)
              endAt.current = null
            }}
          >
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
              ? 'Take a real break — stretch, walk, play one game, or breathe.'
              : 'Pick a chapter and ship one small step.'}
          </p>
        )}
        <p className="ritual">Today’s micro-ritual: {ritual}</p>
      </section>

      {show.calm && (
        <Section title="Breathe for a minute" lede="Interactive cue — follow the prompt, then return to the timer.">
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
        </Section>
      )}

      {show.calm && (
        <Section title="Eye care desk" lede="Screens steal moisture. Give your eyes a tiny holiday.">
          <div className="media-grid">
            {breakEyes.map((e) => (
              <MediaCard
                key={e.title}
                kicker={doneSet.has(e.title) ? 'Done' : 'Eyes'}
                title={e.title}
                why={e.why}
                image={pickImage('eyes', e.title)}
                onClick={() => toggleDone(e.title)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.move && (
        <Section title="Desk stretch deck" lede="Tap to check off. Two is enough. Use Stretch 7 on the timer if you want structure.">
          <div className="media-grid">
            {breakStretches.map((s) => (
              <MediaCard
                key={s.name}
                kicker={doneSet.has(s.name) ? 'Done' : 'Stretch'}
                title={s.name}
                meta={s.reps}
                why={s.how}
                image={pickImage('stretches', s.name)}
                onClick={() => toggleDone(s.name)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.move && (
        <Section title="Micro-moves" lede="Thirty to sixty seconds. Circulation beats another scroll.">
          <div className="media-grid">
            {breakMicroMoves.map((m) => (
              <MediaCard
                key={m.title}
                kicker={doneSet.has(m.title) ? 'Done' : 'Move'}
                title={m.title}
                why={m.why}
                image={pickImage('walk', m.title)}
                onClick={() => toggleDone(m.title)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.move && (
        <Section title="Walk ideas" lede="Pair with Walk 20 on the timer. Leave the phone in your pocket.">
          <div className="media-grid">
            {breakWalks.map((w) => (
              <MediaCard
                key={w.title}
                kicker="Walk"
                title={w.title}
                why={w.why}
                image={pickImage('walk', w.title)}
                onClick={() => toggleDone(w.title)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.outside && (
        <Section title="Outside / sensory" lede="If you can leave the chair — do. Nature is free software for the nervous system.">
          <div className="media-grid">
            {breakOutdoors.map((o) => (
              <MediaCard
                key={o.title}
                kicker="Outside"
                title={o.title}
                why={o.why}
                image={pickImage('outdoors', o.title)}
                onClick={() => toggleDone(o.title)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.create && (
        <Section title="Doodle prompt" lede="Two minutes with a pen beats doomscrolling.">
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
        </Section>
      )}

      {show.create && (
        <Section title="Creative micro-breaks" lede="Make something tiny. Ship nothing. Feel better.">
          <div className="media-grid">
            {breakCreative.map((c) => (
              <MediaCard
                key={c.title}
                href={c.url}
                kicker="Create"
                title={c.title}
                why={c.why}
                image={pickImage('creative', c.title)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.play && (
        <Section title="Games that stretch thinking" lede={`${breakGames.length} picks. Cap it. Timer on. Fun is allowed — rabbit holes are optional.`}>
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
        </Section>
      )}

      {show.calm && (
        <Section title="Laugh shelf" lede="One comic or clip. Close the tab after. Autoplay is the enemy.">
          <div className="media-grid">
            {breakLaughs.map((l) => (
              <MediaCard
                key={l.title}
                href={l.url}
                kicker="Laugh"
                title={l.title}
                why={l.why}
                image={pickImage('creative', l.title)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.calm && (
        <Section title="Social soft resets" lede="Humans regulate humans. Keep it light.">
          <div className="media-grid">
            {breakSocial.map((s) => (
              <MediaCard
                key={s.title}
                kicker="Social"
                title={s.title}
                why={s.why}
                image={pickImage('calm', s.title)}
                onClick={() => toggleDone(s.title)}
              />
            ))}
          </div>
        </Section>
      )}

      {show.calm && (
        <Section title="Books for a softer brain" lede="Not textbooks — ideas that make the next study block land better.">
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
        </Section>
      )}

      {show.watch && (
        <Section title="Movies & docs" lede="Watch one. Rest means rest — not dual-monitor binge.">
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
        </Section>
      )}

      {show.calm && (
        <Section title="Music & ambience" lede="Background for focus — keep lyrics optional.">
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
        </Section>
      )}

      {show.calm && (
        <Section title="Podcasts (one episode max)" lede="Ears-only rest while you stretch or walk.">
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
        </Section>
      )}

      <Section title="Quick portals" lede="Two-minute resets when you can’t do a full break.">
        <div className="media-grid" style={{ marginBottom: '3rem' }}>
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
      </Section>
    </div>
  )
}
