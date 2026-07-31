import { Link } from 'react-router-dom'
import { manuals } from '../data/manuals'

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
          <rect x="48" y="48" width="150" height="72" rx="10" fill="rgba(242,239,230,0.08)" stroke="rgba(242,239,230,0.2)" />
          <rect x="64" y="68" width="90" height="8" rx="4" fill="rgba(124,219,176,0.7)" />
          <rect x="64" y="86" width="118" height="6" rx="3" fill="rgba(242,239,230,0.35)" />
          <rect x="64" y="100" width="70" height="6" rx="3" fill="rgba(242,239,230,0.25)" />
          <rect x="200" y="300" width="160" height="100" rx="10" fill="rgba(242,239,230,0.07)" stroke="rgba(242,239,230,0.18)" />
          <rect x="218" y="324" width="70" height="8" rx="4" fill="rgba(196,92,38,0.65)" />
          <rect x="218" y="344" width="124" height="6" rx="3" fill="rgba(242,239,230,0.3)" />
          <rect x="218" y="360" width="98" height="6" rx="3" fill="rgba(242,239,230,0.22)" />
        </svg>
      </div>
    </div>
  )
}

export default function Home() {
  const featured = manuals.slice(0, 6)

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
          <h1>Learn anything from nothing to pro.</h1>
          <p className="lede">
            Clear paths for automation, design, prompts, and foundations — lessons, practice, and resources in one place.
          </p>
          <div className="hero-actions">
            <Link to="/manuals" className="btn btn-primary">
              Browse manuals
            </Link>
            <Link to="/manuals/playwright" className="btn btn-ghost">
              Peek at Playwright
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>How Pathwise works</h2>
            <p>One skill, three levels, everything you need beside the path.</p>
          </div>
          <div className="steps">
            <article className="step">
              <h3>Pick a craft</h3>
              <p>Automation, Cypress, design, prompt engineering — start where curiosity points.</p>
            </article>
            <article className="step">
              <h3>Climb beginner → pro</h3>
              <p>Each manual walks Foundations, Craft, then Pro — with a practice task at every stage.</p>
            </article>
            <article className="step">
              <h3>Use the toolkit</h3>
              <p>Docs, tools, books, and sandboxes so you never wonder “what next?”</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Start here</h2>
            <p>Popular paths. More get added as you grow the library.</p>
          </div>
          <div className="manual-grid">
            {featured.map((m) => (
              <Link
                key={m.id}
                to={`/manuals/${m.id}`}
                className="manual-link"
                style={{ '--accent': m.accent }}
              >
                <div className="meta">
                  <span>{m.levelSpan}</span>
                  <span>{m.duration}</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.tagline}</p>
                <span className="go">Open manual →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
