import { Link } from 'react-router-dom'
import { manuals, genres } from '../data/manuals'
import { countDone, getContinueChapter } from '../lib/progress'

export default function Home() {
  const featured = [
    manuals.find((m) => m.id === 'playwright'),
    ...manuals.filter((m) => m.id !== 'playwright'),
  ]
    .filter(Boolean)
    .slice(0, 6)

  const genreCount = genres.filter((g) => g.id !== 'all').length
  const chapterCount = manuals.reduce((n, m) => n + m.chapters.length, 0)
  const pw = manuals.find((m) => m.id === 'playwright')
  const continueCh = pw ? getContinueChapter(pw) : null
  const pwProg = pw ? countDone(pw.id, pw.chapters.length) : null

  return (
    <>
      <section className="hero hero-vivid">
        <div className="hero-bg" />
        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker">Learn like a game. Ship like an engineer.</p>
          <p className="hero-brand">
            Pathwise
            <span>Manuals</span>
          </p>
          <h1>Stop scrolling tutorials. Finish a path.</h1>
          <p className="lede">
            {manuals.length} crafts · {chapterCount}+ missions · roadmaps you click · a Break Room when your brain
            fries. Flagship: Playwright with Python — zero to Automation Engineer.
          </p>
          <div className="hero-actions">
            {continueCh && pw ? (
              <Link to={`/manuals/playwright/chapters/${continueCh.id}`} className="btn btn-primary">
                Continue Playwright →
              </Link>
            ) : (
              <Link to="/manuals/playwright" className="btn btn-primary">
                Start Playwright path
              </Link>
            )}
            <Link to="/manuals" className="btn btn-ghost">
              Browse all {genreCount} genres
            </Link>
            <Link to="/break" className="btn btn-ghost">
              Break Room
            </Link>
          </div>
          {pwProg && pwProg.done > 0 && (
            <p className="hero-progress">
              Playwright progress: <strong>{pwProg.pct}%</strong> ({pwProg.done}/{pwProg.total} chapters)
            </p>
          )}
        </div>
      </section>

      <section className="section challenge-strip">
        <div className="wrap challenge-inner">
          <div>
            <p className="challenge-label">Today’s dare</p>
            <h2>Open one chapter. Check three boxes. Commit something.</h2>
            <p>Progress beats perfect. Pathwise remembers what you mark done in this browser.</p>
          </div>
          <Link to="/manuals/playwright" className="btn btn-primary">
            Enter the Playwright saga
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Why this doesn’t suck</h2>
            <p>Built for people who abandon 40-hour Udemy carts.</p>
          </div>
          <div className="steps zest-steps">
            <article className="step">
              <h3>Roadmap energy</h3>
              <p>roadmap.sh vibes — phase bands, clickable nodes, downloadable SVG. See the whole mountain.</p>
            </article>
            <article className="step">
              <h3>Book chapters, not fluff</h3>
              <p>Do-this boxes, code, checklists, resource tables. Checkpoints gate you like a real course.</p>
            </article>
            <article className="step">
              <h3>Rest is part of the build</h3>
              <p>Break Room timer + books, films, games. Burnout is a bug — treat it.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Featured missions</h2>
            <p>Start with Playwright if you want the full Automation Engineer arc.</p>
          </div>
          <div className="manual-grid cover-grid">
            {featured.map((m) => {
              const prog = countDone(m.id, m.chapters.length)
              return (
                <Link
                  key={m.id}
                  to={`/manuals/${m.id}`}
                  className="manual-link cover-link"
                  style={{ '--accent': m.accent }}
                >
                  <div className="cover-thumb">
                    <img src={m.coverUrl} alt="" loading="lazy" />
                    {prog.done > 0 && <span className="prog-pill">{prog.pct}%</span>}
                  </div>
                  <div className="meta">
                    <span>{m.chapters.length} chapters</span>
                    <span>{m.duration}</span>
                  </div>
                  <h3>{m.title}</h3>
                  <p>{m.tagline}</p>
                  <span className="go">Open path →</span>
                </Link>
              )
            })}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <Link to="/manuals" className="btn btn-primary">
              See all {manuals.length} manuals
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
