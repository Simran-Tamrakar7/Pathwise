import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  breakBooks,
  breakBreaths,
  breakBizarre,
  breakChill,
  breakCreative,
  breakDoodles,
  breakExplore,
  breakEyes,
  breakGames,
  breakLaughs,
  breakLinks,
  breakMicroMoves,
  breakModes,
  breakMoods,
  breakMovies,
  breakMusic,
  breakOutdoors,
  breakPodcasts,
  breakRetro,
  breakRituals,
  breakSocial,
  breakStretches,
  breakTeaRituals,
  breakTeasers,
  breakToys,
  breakWalks,
} from '../data/breakRoom'
import { categoryCover, pickImage } from '../data/mediaImages'
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

function Category({ id, title, lede, pool, count, open, onToggle, children }) {
  const expanded = open.has(id)
  return (
    <section className={`break-cat${expanded ? ' is-open' : ''}`}>
      <button type="button" className="break-cat-header" onClick={() => onToggle(id)} aria-expanded={expanded}>
        <img src={categoryCover(pool)} alt="" className="break-cat-cover" />
        <div className="break-cat-copy">
          <p className="break-kicker">{count} items</p>
          <h2>{title}</h2>
          <p>{lede}</p>
        </div>
        <span className="break-cat-chevron" aria-hidden="true">
          {expanded ? '−' : '+'}
        </span>
      </button>
      {expanded && <div className="break-cat-body">{children}</div>}
    </section>
  )
}

const DEFAULT_OPEN = new Set(['toys', 'explore', 'teasers', 'bizarre', 'retro'])

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
  const [doneSet, setDoneSet] = useState(() => new Set())
  const [open, setOpen] = useState(() => new Set(DEFAULT_OPEN))
  const [mood, setMood] = useState(null)
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

  function toggleCat(id) {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function expandAll() {
    setOpen(
      new Set([
        'toys',
        'explore',
        'teasers',
        'bizarre',
        'retro',
        'chill',
        'tea',
        'breath',
        'eyes',
        'stretch',
        'moves',
        'walk',
        'outside',
        'games',
        'laugh',
        'create',
        'doodle',
        'social',
        'books',
        'movies',
        'music',
        'podcasts',
        'links',
      ]),
    )
  }

  function collapseAll() {
    setOpen(new Set())
  }

  function applyMood(id) {
    const m = breakMoods.find((x) => x.id === id)
    if (!m) return
    setMood(id)
    setOpen(new Set(m.cats))
  }

  const categories = useMemo(
    () => [
      { id: 'toys', title: 'Creative sandboxes', lede: 'Digital toys. Click, drag, mash keys. No homework.', pool: 'toys', count: breakToys.length },
      { id: 'explore', title: 'Earth & trackers', lede: 'Globes, flights, radio, night sky — wander without leaving.', pool: 'explore', count: breakExplore.length },
      { id: 'teasers', title: 'Quick games & teasers', lede: 'One round brain candy. Then close the tab.', pool: 'teasers', count: breakTeasers.length },
      { id: 'bizarre', title: 'Weird & chill sites', lede: 'Useless, hilarious, oddly soothing.', pool: 'bizarre', count: breakBizarre.length },
      { id: 'retro', title: 'Retro & archives', lede: 'Wayback machines and old-school browser games.', pool: 'retro', count: breakRetro.length },
      { id: 'chill', title: 'Chill zone', lede: 'Rain, cafés, fireplaces — press play and unclench.', pool: 'chill', count: breakChill.length },
      { id: 'tea', title: 'Tea & warm mugs', lede: 'Boil water. Hold the cup. That’s the whole quest.', pool: 'tea', count: breakTeaRituals.length },
      { id: 'games', title: 'More games', lede: 'Extra rounds if you’re still wired.', pool: 'games', count: breakGames.length },
      { id: 'breath', title: 'Breath', lede: 'In. Out. The free version of a reset button.', pool: 'breath', count: breakBreaths.length },
      { id: 'eyes', title: 'Eye care', lede: 'Your eyeballs called. They want a vacation.', pool: 'eyes', count: breakEyes.length },
      { id: 'stretch', title: 'Stretches', lede: 'Two moves. Look ridiculous. Feel better.', pool: 'stretches', count: breakStretches.length },
      { id: 'moves', title: 'Micro-moves', lede: 'Thirty seconds of “I still have a body.”', pool: 'walk', count: breakMicroMoves.length },
      { id: 'walk', title: 'Walks', lede: 'Shoes optional. Outside preferred.', pool: 'walk', count: breakWalks.length },
      { id: 'outside', title: 'Outside bits', lede: 'Clouds, birds, grass — free DLC.', pool: 'outdoors', count: breakOutdoors.length },
      { id: 'laugh', title: 'Laughs', lede: 'One comic. Close the tab before the spiral.', pool: 'laugh', count: breakLaughs.length },
      { id: 'create', title: 'Creative', lede: 'Make a tiny mess on purpose.', pool: 'creative', count: breakCreative.length },
      { id: 'doodle', title: 'Doodle', lede: 'Pen > doomscroll. Prove it for two minutes.', pool: 'creative', count: breakDoodles.length },
      { id: 'social', title: 'Social blips', lede: 'Text a human. Or sit in shared silence.', pool: 'social', count: breakSocial.length },
      { id: 'books', title: 'Books', lede: 'A chapter, not a syllabus.', pool: 'books', count: breakBooks.length },
      { id: 'movies', title: 'Movies & docs', lede: 'Watch one. Resist “just one more.”', pool: 'movies', count: breakMovies.length },
      { id: 'music', title: 'Music', lede: 'Volume low. Lyrics optional. Vibes mandatory.', pool: 'music', count: breakMusic.length },
      { id: 'podcasts', title: 'Podcasts', lede: 'Ears only. Max one episode while you stretch.', pool: 'podcasts', count: breakPodcasts.length },
      { id: 'links', title: 'Quick portals', lede: 'Two-minute rabbit holes with an exit.', pool: 'links', count: breakLinks.length },
    ],
    [],
  )

  const byId = useMemo(() => Object.fromEntries(categories.map((c) => [c.id, c])), [categories])

  return (
    <div className="wrap break-page break-page-vivid">
      <header className="break-hero-banner">
        <img src={asset('covers/break-hero.png')} alt="" className="break-hero-img" />
        <div className="break-hero-copy">
          <p className="hero-kicker">Brain fried? Good. Come in.</p>
          <h1>Break Room</h1>
          <p>
            Sandboxes, Earth trackers, brain teasers, weird sites, and retro archives — open up top so you don’t scroll
            forever. Timer still here if you need it. Then back to <Link to="/manuals">manuals</Link> or{' '}
            <Link to="/sparks">Sparks</Link>.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={expandAll}>
              Expand all
            </button>
            <button type="button" className="btn btn-ghost" onClick={collapseAll}>
              Collapse all
            </button>
          </div>
          <div className="mood-row" aria-label="Mood presets">
            {breakMoods.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`mood-chip dark${mood === m.id ? ' active' : ''}`}
                onClick={() => applyMood(m.id)}
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                endAt.current = Date.now() + remaining * 1000
                setDoneFlash(false)
                setRunning(true)
              }}
            >
              Start
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setRunning(false)
                endAt.current = null
              }}
            >
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
              ? 'Open a category below — stretch, walk, or one game.'
              : 'Pick a chapter and ship one small step.'}
          </p>
        )}
        <p className="ritual">Today’s micro-ritual: {ritual}</p>
      </section>

      <div className="break-cat-jump">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="mood-chip dark"
            onClick={() => {
              setOpen((prev) => new Set(prev).add(c.id))
              document.getElementById(`cat-${c.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div id="cat-toys">
        <Category {...byId.toys} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakToys.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Toy"
                title={g.title}
                why={g.why}
                image={g.image || pickImage('creative', g.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-explore">
        <Category {...byId.explore} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakExplore.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Explore"
                title={g.title}
                why={g.why}
                image={g.image || pickImage('outdoors', g.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-teasers">
        <Category {...byId.teasers} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakTeasers.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Play"
                title={g.title}
                why={g.why}
                image={g.image || pickImage('games', g.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-bizarre">
        <Category {...byId.bizarre} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakBizarre.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Weird"
                title={g.title}
                why={g.why}
                image={g.image || pickImage('laugh', g.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-retro">
        <Category {...byId.retro} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakRetro.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Retro"
                title={g.title}
                why={g.why}
                image={g.image || pickImage('games', g.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-chill">
        <Category {...byId.chill} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakChill.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Chill"
                title={g.title}
                why={g.why}
                image={g.image || pickImage('chill', g.title, g.imageHint)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-tea">
        <Category {...byId.tea} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakTeaRituals.map((t) => (
              <MediaCard
                key={t.title}
                kicker={doneSet.has(t.title) ? 'Done' : 'Tea'}
                title={t.title}
                why={t.why}
                image={t.image || pickImage('tea', t.title, t.imageHint)}
                onClick={() => toggleDone(t.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-games">
        <Category {...byId.games} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakGames.map((g) => (
              <MediaCard
                key={g.title}
                href={g.url}
                kicker="Game"
                title={g.title}
                why={g.why}
                image={g.image || pickImage('games', g.title, g.imageHint)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-breath">
        <Category {...byId.breath} open={open} onToggle={toggleCat}>
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
        </Category>
      </div>

      <div id="cat-eyes">
        <Category {...byId.eyes} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakEyes.map((e) => (
              <MediaCard
                key={e.title}
                kicker={doneSet.has(e.title) ? 'Done' : 'Eyes'}
                title={e.title}
                why={e.why}
                image={e.image || pickImage('eyes', e.title)}
                onClick={() => toggleDone(e.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-stretch">
        <Category {...byId.stretch} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakStretches.map((s) => (
              <MediaCard
                key={s.name}
                kicker={doneSet.has(s.name) ? 'Done' : 'Stretch'}
                title={s.name}
                meta={s.reps}
                why={s.how}
                image={s.image || pickImage('stretches', s.name, 'stretch')}
                onClick={() => toggleDone(s.name)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-moves">
        <Category {...byId.moves} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakMicroMoves.map((m) => (
              <MediaCard
                key={m.title}
                kicker={doneSet.has(m.title) ? 'Done' : 'Move'}
                title={m.title}
                why={m.why}
                image={m.image || pickImage('walk', m.title)}
                onClick={() => toggleDone(m.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-walk">
        <Category {...byId.walk} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakWalks.map((w) => (
              <MediaCard
                key={w.title}
                kicker="Walk"
                title={w.title}
                why={w.why}
                image={w.image || pickImage('walk', w.title, 'walk')}
                onClick={() => toggleDone(w.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-outside">
        <Category {...byId.outside} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakOutdoors.map((o) => (
              <MediaCard
                key={o.title}
                kicker="Outside"
                title={o.title}
                why={o.why}
                image={o.image || pickImage('outdoors', o.title)}
                onClick={() => toggleDone(o.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-laugh">
        <Category {...byId.laugh} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakLaughs.map((l) => (
              <MediaCard
                key={l.title}
                href={l.url}
                kicker="Laugh"
                title={l.title}
                why={l.why}
                image={l.image || pickImage('laugh', l.title, 'laugh')}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-create">
        <Category {...byId.create} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakCreative.map((c) => (
              <MediaCard
                key={c.title}
                href={c.url}
                kicker="Create"
                title={c.title}
                why={c.why}
                image={c.image || pickImage('creative', c.title, 'draw')}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-doodle">
        <Category {...byId.doodle} open={open} onToggle={toggleCat}>
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
        </Category>
      </div>

      <div id="cat-social">
        <Category {...byId.social} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakSocial.map((s) => (
              <MediaCard
                key={s.title}
                kicker="Social"
                title={s.title}
                why={s.why}
                image={s.image || pickImage('social', s.title)}
                onClick={() => toggleDone(s.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-books">
        <Category {...byId.books} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakBooks.map((b) => (
              <MediaCard
                key={b.title}
                href={b.url}
                kicker="Book"
                title={b.title}
                meta={b.author}
                why={b.why}
                image={b.image || pickImage('books', b.title, 'book')}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-movies">
        <Category {...byId.movies} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakMovies.map((m) => (
              <MediaCard
                key={m.title}
                href={m.url}
                kicker="Film"
                title={m.title}
                why={m.why}
                image={m.image || pickImage('movies', m.title, 'movie')}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-music">
        <Category {...byId.music} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakMusic.map((m) => (
              <MediaCard
                key={m.title}
                href={m.url}
                kicker="Music"
                title={m.title}
                why={m.why}
                image={m.image || pickImage('music', m.title, 'lofi')}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-podcasts">
        <Category {...byId.podcasts} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakPodcasts.map((p) => (
              <MediaCard
                key={p.title}
                href={p.url}
                kicker="Podcast"
                title={p.title}
                why={p.why}
                image={p.image || pickImage('podcasts', p.title)}
              />
            ))}
          </div>
        </Category>
      </div>

      <div id="cat-links" style={{ marginBottom: '3rem' }}>
        <Category {...byId.links} open={open} onToggle={toggleCat}>
          <div className="media-grid">
            {breakLinks.map((l) => (
              <MediaCard
                key={l.title}
                href={l.url}
                kicker="Link"
                title={l.title}
                why={l.why}
                image={l.image || pickImage('links', l.title)}
              />
            ))}
          </div>
        </Category>
      </div>
    </div>
  )
}
