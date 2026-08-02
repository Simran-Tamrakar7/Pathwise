import { Link } from 'react-router-dom'
import { manuals, genres } from '../data/manuals'
import { countDone, getContinueChapter } from '../lib/progress'
import { getStreak } from '../lib/streak'
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

  const chapterCount = manuals.reduce((n, m) => n + m.chapters.length, 0)
  const pw = manuals.find((m) => m.id === 'playwright')
  const continueCh = pw ? getContinueChapter(pw) : null
  const pwProg = pw ? countDone(pw.id, pw.chapters.length) : null
  const streak = getStreak()
  const genreChips = genres.filter((g) => g.id !== 'all').slice(0, 6)

  return (
    <>
      <section className="hero hero-v2">
        <div
          className="hero-v2-wash"
          aria-hidden="true"
          style={{ backgroundImage: `linear-gradient(120deg, rgba(11, 61, 46, 0.92) 0%, rgba(15, 92, 76, 0.78) 42%, rgba(3, 105, 161, 0.45) 100%), url(${asset('covers/learn-banner.png')})` }}
        />
        <div className="hero-v2-grid" aria-hidden="true" />
        <div className="wrap hero-v2-inner">
          <p className="hero-kicker">Forest paths · real skills · room to rest</p>
          <p className="hero-brand hero-brand-v2">Pathwise</p>
          <h1>Learn in chapters. Reset in rooms. Come back tomorrow.</h1>
          <p className="lede">
            {manuals.length} manuals · {chapterCount}+ chapters · Sparks · Break Room · Cookbook — tied together by{' '}
            <strong>Today</strong>
            {streak.count > 0 ? ` · ${streak.count}-day streak` : ''}.
          </p>
          <div className="hero-actions">
            <Link to="/today" className="btn btn-primary">
              Open Today →
            </Link>
            {continueCh && pw ? (
              <Link to={`/manuals/playwright/chapters/${continueCh.id}`} className="btn btn-ghost">
                Continue Playwright
              </Link>
            ) : (
              <Link to="/manuals/playwright" className="btn btn-ghost">
                Start Playwright
              </Link>
            )}
            <Link to="/manuals" className="btn btn-ghost">
              Browse manuals
            </Link>
          </div>
          {pwProg && pwProg.done > 0 && (
            <div className="hero-progress-bar" aria-label={`${pwProg.pct}% Playwright progress`}>
              <span>Playwright {pwProg.pct}%</span>
              <div className="progress-bar thin">
                <div className="progress-bar-fill" style={{ width: `${pwProg.pct}%` }} />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section rooms-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Four rooms + Today</h2>
            <p>Study, drill, rest, eat — pick a door. Today gathers what matters right now.</p>
          </div>
          <div className="room-mosaic">
            <Link to="/today" className="room-tile room-today">
              <span className="room-tag">New</span>
              <h3>Today</h3>
              <p>Streak, continue, spark, cook, break — one screen.</p>
            </Link>
            <Link to="/manuals" className="room-tile" style={{ '--room': '#0F766E' }}>
              <h3>Manuals</h3>
              <p>{manuals.length} craft paths with lesson cards.</p>
            </Link>
            <Link to="/sparks" className="room-tile" style={{ '--room': '#B45309' }}>
              <h3>Sparks</h3>
              <p>5–15 min drills when you don’t have a full block.</p>
            </Link>
            <Link to="/break" className="room-tile" style={{ '--room': '#0369A1' }}>
              <h3>Break Room</h3>
              <p>Toys, trackers, teasers, weird sites — then stop.</p>
            </Link>
            <Link to="/cookbook" className="room-tile" style={{ '--room': '#C2410C' }}>
              <h3>Cookbook</h3>
              <p>Ways + Nutrition Facts. Food Hero kitchen too.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section genre-ribbon-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Jump a genre</h2>
            <p>Filter the library by energy.</p>
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
            <Link to="/manuals" className="genre-chip genre-chip-all">
              <span>
                <strong>All genres</strong>
                <small>Full catalog</small>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="watch">
        <div className="wrap">
          <div className="section-head watch-head">
            <div>
              <h2>Watch desk</h2>
              <p>Short videos — then open a chapter. Eyes first, hands second.</p>
            </div>
            <img className="watch-banner" src={asset('covers/learn-banner.png')} alt="" />
          </div>
          <div className="video-grid">
            {featuredVideos.slice(0, 3).map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Featured paths</h2>
            <p>Playwright leads. Everything else is a lane you can finish.</p>
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
