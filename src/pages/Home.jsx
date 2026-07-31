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
            {manuals.length} crafts · {genreCount} genres · clickable roadmaps · book-style chapters · resources &
            citations from zero to pro.
          </p>
          <div className="hero-actions">
            <Link to="/manuals" className="btn btn-primary">
              Browse the library
            </Link>
            <Link to="/manuals/graphic-design" className="btn btn-ghost">
              See a design roadmap
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>How Pathwise works</h2>
            <p>Pick a craft → follow the roadmap → learn chapter by chapter → download the path.</p>
          </div>
          <div className="steps">
            <article className="step">
              <h3>Pick a genre</h3>
              <p>Automation, design, AI, foundations, or soft skills — start where curiosity points.</p>
            </article>
            <article className="step">
              <h3>Follow the roadmap</h3>
              <p>Clickable nodes, downloadable SVG graphics like graphic-design-roadmap.svg.</p>
            </article>
            <article className="step">
              <h3>Learn like a book</h3>
              <p>Each chapter: overview, steps, do-this tasks, checklists, practice, links & citations.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Featured paths</h2>
            <p>Covers, roadmaps, and full manuals — open any door.</p>
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
