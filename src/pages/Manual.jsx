import { Link, useParams } from 'react-router-dom'
import { getManual, genres } from '../data/manuals'
import Roadmap from '../components/Roadmap'

export default function Manual() {
  const { id } = useParams()
  const manual = getManual(id)

  if (!manual) {
    return (
      <div className="wrap not-found">
        <h1>Manual not found</h1>
        <p>That path isn’t in the library yet.</p>
        <Link to="/manuals" className="btn btn-primary">
          Browse manuals
        </Link>
      </div>
    )
  }

  const catLabel = genres.find((c) => c.id === manual.category)?.label
  const { resources } = manual
  const first = manual.chapters[0]

  return (
    <div className="wrap">
      <header className="manual-hero manual-hero-rich">
        <div className="manual-hero-text">
          <p className="crumb">
            <Link to="/manuals">Manuals</Link>
            {' / '}
            {manual.title}
          </p>
          <div className="badge-row">
            <span className="badge">{catLabel}</span>
            <span className="badge">{manual.levelSpan}</span>
            <span className="badge">{manual.duration}</span>
          </div>
          <h1>{manual.title}</h1>
          <p className="tagline">{manual.tagline}</p>
          <dl className="manual-meta">
            <div>
              <dt>Who it’s for</dt>
              <dd>{manual.who}</dd>
            </div>
            <div>
              <dt>Chapters</dt>
              <dd>{manual.chapters.length} lessons</dd>
            </div>
            <div>
              <dt>Span</dt>
              <dd>{manual.levelSpan}</dd>
            </div>
          </dl>
          {manual.pace && (
            <div className="pace-box">
              <p className="label">Study pace</p>
              <p>
                <strong>{manual.pace.hoursPerDay}</strong>
              </p>
              <ul>
                <li>Recommended: {manual.pace.recommended}</li>
                <li>Accelerated: {manual.pace.accelerated}</li>
                <li>Slow & steady: {manual.pace.slow}</li>
              </ul>
            </div>
          )}
          {first && (
            <div className="hero-actions" style={{ marginTop: '1.25rem' }}>
              <Link to={`/manuals/${manual.id}/chapters/${first.id}`} className="btn btn-primary">
                Start chapter 1
              </Link>
              <a href="#roadmap" className="btn btn-ghost">
                View roadmap
              </a>
            </div>
          )}
        </div>
        <div className="manual-cover">
          <img src={manual.coverUrl} alt="" width={420} height={420} />
        </div>
      </header>

      <div id="roadmap" className="roadmap-star">
        <Roadmap manual={manual} />
      </div>

      <section className="outcomes">
        <h2>You’ll walk away able to</h2>
        <ul>
          {manual.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      <section className="chapter-index">
        <h2>Book chapters</h2>
        <p className="lede">Each chapter is a full lesson: what to learn, what to do, practice, and citations.</p>
        <div className="chapter-cards">
          {manual.chapters.map((c, i) => (
            <Link key={c.id} to={`/manuals/${manual.id}/chapters/${c.id}`} className="chapter-card">
              <span className="chapter-card-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="chapter-card-level">
                  {c.phase ? `${c.phase} · ` : ''}
                  {c.kind === 'checkpoint' ? 'checkpoint' : c.level}
                  {c.durationLabel ? ` · ${c.durationLabel}` : ` · ~${c.minutes} min`}
                </p>
                <h3>{c.title}</h3>
                <p>{c.overview.slice(0, 120)}…</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="resources">
        <h2>Resource library</h2>
        <p className="lede">Docs, tools, books, labs, and videos — the “have it all” shelf for this craft.</p>
        <div className="resource-grid">
          <div className="resource-block">
            <h3>Docs & guides</h3>
            <ul>
              {resources.docs.map((d) => (
                <li key={d.url}>
                  <a href={d.url} target="_blank" rel="noreferrer">
                    {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="resource-block">
            <h3>Tools</h3>
            <ul>
              {resources.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="resource-block">
            <h3>Books & deep reads</h3>
            <ul>
              {resources.books.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="resource-block">
            <h3>Practice sandboxes</h3>
            <ul>
              {resources.practice.map((p) =>
                typeof p === 'string' && p.startsWith('http') ? (
                  <li key={p}>
                    <a href={p} target="_blank" rel="noreferrer">
                      {p.replace(/^https?:\/\//, '')}
                    </a>
                  </li>
                ) : (
                  <li key={p}>{p}</li>
                ),
              )}
            </ul>
          </div>
          {resources.videos?.length > 0 && (
            <div className="resource-block">
              <h3>Videos</h3>
              <ul>
                {resources.videos.map((v) => (
                  <li key={v.url}>
                    <a href={v.url} target="_blank" rel="noreferrer">
                      {v.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
