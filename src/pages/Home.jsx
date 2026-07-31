import { Link } from 'react-router-dom'
import { manuals, genres } from '../data/manuals'

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-path">
        <svg viewBox="0 0 400 480" fill="none">
          <path
            d="M60 420 C120 360, 80 300, 140 240 C200 180, 160 120, 220 60"
            stroke="rgba(124,219,176,0.55)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 14"
          />
          <path
            d="M100 440 C180 380, 140 300, 220 230 C300 160, 260 90, 340 40"
            stroke="rgba(242,239,230,0.35)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {[
            [140, 240, '01'],
            [220, 60, '02'],
            [220, 230, '03'],
            [340, 40, '04'],
          ].map(([x, y, n], i) => (
            <g key={n} style={{ animation: `riseIn 0.8s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.12}s both` }}>
              <circle cx={x} cy={y} r="22" fill="#0B3D2E" stroke="#7CDBB0" strokeWidth="2" />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fill="#F2EFE6"
                fontFamily="Bricolage Grotesque, sans-serif"
                fontSize="13"
                fontWeight="700"
              >
                {n}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

export default function Home() {
  const featured = manuals.slice(0, 6)
  const genreCount = genres.filter((g) => g.id !== 'all').length
  const chapterCount = manuals.reduce((n, m) => n + m.chapters.length, 0)

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <HeroVisual />
        <div className="hero-content">
          <p className="hero-brand">
            Pathwise
            <span>Manuals</span>
          </p>
          <h1>Your have-it-all learning library.</h1>
          <p className="lede">
            {manuals.length} crafts · {genreCount} genres · {chapterCount}+ chapters · clickable roadmaps · Break Room
            when your brain needs air.
          </p>
          <div className="hero-actions">
            <Link to="/manuals" className="btn btn-primary">
              Browse the library
            </Link>
            <Link to="/manuals/playwright" className="btn btn-ghost">
              See a live roadmap
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>How Pathwise works</h2>
            <p>Pick a craft → follow the roadmap → learn chapter by chapter → rest on purpose.</p>
          </div>
          <div className="steps">
            <article className="step">
              <h3>Pick a genre</h3>
              <p>Automation, design, AI, foundations, quality craft, career, or soft skills.</p>
            </article>
            <article className="step">
              <h3>Follow the roadmap</h3>
              <p>Phase-grouped paths, checkpoints, downloadable SVG roadmaps.</p>
            </article>
            <article className="step">
              <h3>Study + recover</h3>
              <p>Book chapters with do-this tasks — then Break Room timers, films, and games.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section pathway-promo">
        <div className="wrap">
          <div className="section-head">
            <h2>Roadmaps that feel like a journey</h2>
            <p>
              Phase bands, numbered nodes, checkpoints, and a path you can download — inspired by roadmap.sh,
              tuned for Pathwise.
            </p>
          </div>
          <div className="promo-actions">
            <Link to="/manuals/playwright" className="btn btn-primary">
              Open Playwright pathway
            </Link>
            <Link to="/manuals/accessibility" className="btn btn-ghost">
              Accessibility path
            </Link>
            <Link to="/break" className="btn btn-ghost">
              Break Room
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Featured paths</h2>
            <p>Deep curricula — open any door.</p>
          </div>
          <div className="manual-grid cover-grid">
            {featured.map((m) => (
              <Link
                key={m.id}
                to={`/manuals/${m.id}`}
                className="manual-link cover-link"
                style={{ '--accent': m.accent }}
              >
                <div className="cover-thumb">
                  <img src={m.coverUrl} alt="" loading="lazy" />
                </div>
                <div className="meta">
                  <span>{m.chapters.length} chapters</span>
                  <span>{m.duration}</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.tagline}</p>
                <span className="go">Open manual →</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link to="/manuals" className="btn btn-primary">
              See all {manuals.length} manuals
            </Link>
            <Link to="/manuals/playwright" className="btn btn-ghost">
              Playwright + Python
            </Link>
            <Link to="/break" className="btn btn-ghost">
              Take a break
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
