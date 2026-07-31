import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categories, getManual } from '../data/manuals'

const LEVELS = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Pro' },
]

export default function Manual() {
  const { id } = useParams()
  const manual = getManual(id)
  const [level, setLevel] = useState('beginner')

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

  const panel = manual.levels[level]
  const catLabel = categories.find((c) => c.id === manual.category)?.label
  const { resources } = manual

  return (
    <div className="wrap">
      <header className="manual-hero">
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
            <dt>Timebox</dt>
            <dd>{manual.duration}</dd>
          </div>
          <div>
            <dt>Span</dt>
            <dd>{manual.levelSpan}</dd>
          </div>
        </dl>
      </header>

      <section className="outcomes">
        <h2>You’ll walk away able to</h2>
        <ul>
          {manual.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      <div className="level-nav" role="tablist" aria-label="Skill level">
        {LEVELS.map((l) => (
          <button
            key={l.id}
            type="button"
            role="tab"
            aria-selected={level === l.id}
            className={`level-tab${level === l.id ? ' active' : ''}`}
            onClick={() => setLevel(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <section className="level-panel" key={level}>
        <p className="level-label">{LEVELS.find((l) => l.id === level)?.label} path</p>
        <h2>{panel.title}</h2>
        <p className="summary">{panel.summary}</p>

        <ol className="lesson-list">
          {panel.lessons.map((lesson, i) => (
            <li key={lesson.title} className="lesson">
              <span className="lesson-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{lesson.title}</h3>
                <p>{lesson.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="practice-box">
          <p className="label">Practice</p>
          <p>{panel.practice}</p>
        </div>
      </section>

      <section className="resources">
        <h2>Resources</h2>
        <p className="lede">Docs, tools, books, and places to practice — everything beside the path.</p>
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
        </div>
      </section>
    </div>
  )
}
