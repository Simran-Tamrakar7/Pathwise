import { Link, useParams } from 'react-router-dom'
import { getChapter } from '../data/manuals'

export default function Chapter() {
  const { id, chapterId } = useParams()
  const data = getChapter(id, chapterId)

  if (!data) {
    return (
      <div className="wrap not-found">
        <h1>Chapter not found</h1>
        <Link to={`/manuals/${id}`} className="btn btn-primary">
          Back to manual
        </Link>
      </div>
    )
  }

  const { manual, chapter, index, prev, next } = data

  return (
    <article className="wrap chapter-page">
      <p className="crumb">
        <Link to="/manuals">Manuals</Link>
        {' / '}
        <Link to={`/manuals/${manual.id}`}>{manual.title}</Link>
        {' / '}
        Chapter {index + 1}
      </p>

      <header className="chapter-hero">
        <p className="level-label">
          {chapter.level} · ~{chapter.minutes} min read · Chapter {index + 1} of {manual.chapters.length}
        </p>
        <h1>{chapter.title}</h1>
        <p className="tagline">{chapter.overview}</p>
      </header>

      {chapter.learn.length > 0 && (
        <section className="chapter-block">
          <h2>What you’ll learn</h2>
          <ul className="learn-list">
            {chapter.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="chapter-block">
        <h2>Walkthrough</h2>
        <ol className="walk-steps">
          {chapter.steps.map((step, i) => (
            <li key={step.title} className="walk-step">
              <span className="lesson-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.doThis && (
                  <div className="do-this">
                    <p className="label">Do this</p>
                    <p>{step.doThis}</p>
                  </div>
                )}
                {step.tip && (
                  <p className="tip">
                    <strong>Tip:</strong> {step.tip}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {chapter.checklist.length > 0 && (
        <section className="chapter-block checklist-block">
          <h2>Checklist before you move on</h2>
          <ul>
            {chapter.checklist.map((item) => (
              <li key={item}>
                <label>
                  <input type="checkbox" /> {item}
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}

      {chapter.practice && (
        <section className="practice-box chapter-practice">
          <p className="label">Practice</p>
          <h3>{chapter.practice.title}</h3>
          <p>{chapter.practice.brief}</p>
        </section>
      )}

      {(chapter.links.length > 0 || chapter.citations.length > 0) && (
        <section className="chapter-block">
          <h2>Links & citations</h2>
          <div className="resource-grid">
            {chapter.links.length > 0 && (
              <div className="resource-block">
                <h3>Resources</h3>
                <ul>
                  {chapter.links.map((l) => (
                    <li key={l.url}>
                      <a href={l.url} target="_blank" rel="noreferrer">
                        {l.name}
                      </a>
                      {l.kind ? ` · ${l.kind}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {chapter.citations.length > 0 && (
              <div className="resource-block">
                <h3>Citations</h3>
                <ul>
                  {chapter.citations.map((c) => (
                    <li key={c.url || c.name}>
                      {c.url ? (
                        <a href={c.url} target="_blank" rel="noreferrer">
                          {c.name}
                        </a>
                      ) : (
                        c.name
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <nav className="chapter-nav" aria-label="Chapter">
        {prev ? (
          <Link to={`/manuals/${manual.id}/chapters/${prev.id}`} className="btn btn-ghost">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link to={`/manuals/${manual.id}`} className="btn btn-ghost">
          Manual home
        </Link>
        {next ? (
          <Link to={`/manuals/${manual.id}/chapters/${next.id}`} className="btn btn-primary">
            {next.title} →
          </Link>
        ) : (
          <Link to="/manuals" className="btn btn-primary">
            Browse more manuals
          </Link>
        )}
      </nav>
    </article>
  )
}
