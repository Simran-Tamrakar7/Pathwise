import { Link } from 'react-router-dom'
import { manuals, genres } from '../data/manuals'
import { countDone, getContinueChapter } from '../lib/progress'
import { featuredVideos } from '../data/learnMedia'
import VideoCard from '../components/VideoCard'
import { asset } from '../data/helpers'

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
  const genreChips = genres.filter((g) => g.id !== 'all')

  return (
    <>
      <section className="hero hero-vivid hero-colorful">
        <div className="hero-bg" />
        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
        <div className="hero-orb hero-orb-c" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker">Colorful paths. Real skills. Less boredom.</p>
          <p className="hero-brand">
            Pathwise
            <span>Manuals</span>
          </p>
          <h1>Learn with pictures, videos, and paths you can finish.</h1>
          <p className="lede">
            {manuals.length} crafts · {chapterCount}+ missions · clickable roadmaps · embedded watchlists · Break Room
            for rest · Cookbook for fuel.
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
              Browse {genreCount} genres
            </Link>
            <a href="#watch" className="btn btn-ghost">
              Watch & learn
            </a>
            <Link to="/cookbook" className="btn btn-ghost">
              Cookbook
            </Link>
          </div>
          {pwProg && pwProg.done > 0 && (
            <p className="hero-progress">
              Playwright progress: <strong>{pwProg.pct}%</strong> ({pwProg.done}/{pwProg.total} chapters)
            </p>
          )}
        </div>
      </section>

      <section className="section genre-ribbon-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Pick a colorful lane</h2>
            <p>Every genre has its own energy. Tap one and go.</p>
          </div>
          <div className="genre-ribbon">
            {genreChips.map((g) => (
              <Link
                key={g.id}
                to="/manuals"
                className="genre-chip"
                style={{ '--gcolor': g.color }}
                onClick={() => sessionStorage.setItem('pathwise-genre', g.id)}
              >
                <span className="genre-dot" />
                <span>
                  <strong>{g.label}</strong>
                  <small>{g.blurb}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="watch">
        <div className="wrap">
          <div className="section-head watch-head">
            <div>
              <h2>Watch desk</h2>
              <p>Short, high-signal videos — play inline or open on YouTube. Pair with a Pathwise chapter after.</p>
            </div>
            <img className="watch-banner" src={asset('covers/learn-banner.png')} alt="" />
          </div>
          <div className="video-grid">
            {featuredVideos.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section challenge-strip">
        <div className="wrap challenge-inner">
          <div>
            <p className="challenge-label">Today’s dare</p>
            <h2>Watch 10 minutes. Open one chapter. Check three boxes.</h2>
            <p>Eyes + hands + commit. Pathwise remembers what you mark done here.</p>
          </div>
          <Link to="/manuals/playwright" className="btn btn-primary">
            Enter Playwright saga
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Two side doors</h2>
            <p>Learn in manuals. Rest and fuel elsewhere — separate rooms on purpose.</p>
          </div>
          <div className="portal-grid">
            <Link to="/break" className="portal-card">
              <img src={asset('covers/break-hero.png')} alt="" loading="lazy" />
              <div>
                <p className="break-kicker">Rest</p>
                <h3>Break Room</h3>
                <p>Timer ring, breath, stretches, books, films, games — mood filters reshape the room.</p>
                <span className="go">Enter Break Room →</span>
              </div>
            </Link>
            <Link to="/cookbook" className="portal-card">
              <img src={asset('covers/cookbook-hero.png')} alt="" loading="lazy" />
              <div>
                <p className="break-kicker">Fuel</p>
                <h3>Cookbook</h3>
                <p>210 recipes across 12 cuisines with photos, favorites, and surprise picks.</p>
                <span className="go">Open Cookbook →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Why it feels friendlier</h2>
            <p>Built for humans who get bored by walls of gray text.</p>
          </div>
          <div className="steps zest-steps color-steps">
            <article className="step" style={{ '--step': '#0F766E' }}>
              <h3>Visual paths</h3>
              <p>Covers, phase colors, roadmap nodes — see the mountain before you climb.</p>
            </article>
            <article className="step" style={{ '--step': '#C2410C' }}>
              <h3>Videos in the loop</h3>
              <p>Watch desk on home + video loot on manuals. Learn with eyes, then do.</p>
            </article>
            <article className="step" style={{ '--step': '#0369A1' }}>
              <h3>Missions & progress</h3>
              <p>Checklists, mark complete, continue where you left off. Tiny dopamine, real skill.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Featured missions</h2>
            <p>Bright covers. Clear next steps. Start anywhere — Playwright is the flagship.</p>
          </div>
          <div className="manual-grid cover-grid">
            {featured.map((m) => {
              const prog = countDone(m.id, m.chapters.length)
              const g = genres.find((x) => x.id === m.category)
              return (
                <Link
                  key={m.id}
                  to={`/manuals/${m.id}`}
                  className="manual-link cover-link vivid-card"
                  style={{ '--accent': m.accent || g?.color || '#0B3D2E' }}
                >
                  <div className="cover-thumb">
                    <img src={m.coverUrl} alt="" loading="lazy" />
                    {prog.done > 0 && <span className="prog-pill">{prog.pct}%</span>}
                  </div>
                  <div className="meta">
                    <span style={{ color: g?.color }}>{g?.label}</span>
                    <span>{m.chapters.length} chapters</span>
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
