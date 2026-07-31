import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getChapter } from '../data/manuals'
import {
  isChapterDone,
  isChecklistChecked,
  setChapterDone,
  toggleChecklistItem,
} from '../lib/progress'

export default function Chapter() {
  const { id, chapterId } = useParams()
  const data = getChapter(id, chapterId)
  const [done, setDone] = useState(false)
  const [, setTick] = useState(0)

  useEffect(() => {
    setDone(isChapterDone(id, chapterId))
  }, [id, chapterId])

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
  const kindLabel =
    chapter.kind === 'checkpoint' ? 'Checkpoint' : chapter.kind === 'guide' ? 'Guide' : 'Chapter'

  function markDone() {
    setChapterDone(manual.id, chapter.id, true)
    setDone(true)
  }

  function markUndone() {
    setChapterDone(manual.id, chapter.id, false)
    setDone(false)
  }

  return (
    <article className="wrap chapter-page">
      <p className="crumb">
        <Link to="/manuals">Manuals</Link>
        {' / '}
        <Link to={`/manuals/${manual.id}`}>{manual.title}</Link>
        {' / '}
        {kindLabel} {index + 1}
      </p>

      <header className="chapter-hero">
        <p className="level-label">
          {chapter.phase ? `${chapter.phase} · ` : ''}
          {chapter.level}
          {chapter.durationLabel ? ` · ${chapter.durationLabel}` : ` · ~${chapter.minutes} min`}
          {' · '}
          {kindLabel} {index + 1} of {manual.chapters.length}
          {done ? ' · ✓ done' : ''}
        </p>
        <h1>{chapter.title}</h1>
        <p className="tagline">{chapter.overview}</p>
        {chapter.note && <p className="chapter-note">{chapter.note}</p>}
        <div className="chapter-mission-bar">
          <span>Mission {index + 1}</span>
          <div className="progress-bar thin">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.round(((index + 1) / manual.chapters.length) * 100)}%` }}
            />
          </div>
        </div>
      </header>

      {chapter.learn.length > 0 && (
        <section className="chapter-block">
          <h2>What you’ll unlock</h2>
          <ul className="learn-list">
            {chapter.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="chapter-block">
        <h2>{chapter.kind === 'checkpoint' ? 'Pass criteria & steps' : 'Walkthrough'}</h2>
        <ol className="walk-steps">
          {chapter.steps.map((step, i) => (
            <li key={`${step.title}-${i}`} className="walk-step">
              <span className="lesson-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                {step.body && <p>{step.body}</p>}
                {step.items?.length > 0 && (
                  <ul className="learn-list" style={{ marginTop: '0.65rem' }}>
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {step.code && (
                  <pre className="code-block">
                    <code>{step.code}</code>
                  </pre>
                )}
                {step.doThis && (
                  <div className="do-this">
                    <p className="label">Do this now</p>
                    <p>{step.doThis}</p>
                  </div>
                )}
                {step.tip && (
                  <p className="tip">
                    <strong>Pro tip:</strong> {step.tip}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {chapter.checklist.length > 0 && (
        <section className="chapter-block checklist-block">
          <h2>Clear these before you leave</h2>
          <ul>
            {chapter.checklist.map((item) => (
              <li key={item}>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecklistChecked(manual.id, chapter.id, item)}
                    onChange={() => {
                      toggleChecklistItem(manual.id, chapter.id, item)
                      setTick((t) => t + 1)
                    }}
                  />{' '}
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}

      {chapter.practice && (
        <section className="practice-box chapter-practice">
          <p className="label">Side quest</p>
          <h3>{chapter.practice.title}</h3>
          <p>{chapter.practice.brief}</p>
        </section>
      )}

      {chapter.resources?.length > 0 && (
        <section className="chapter-block">
          <h2>Loot — resources for this chapter</h2>
          <div className="resource-table-wrap">
            <table className="resource-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Resource</th>
                  <th>Lang</th>
                  <th>Free?</th>
                </tr>
              </thead>
              <tbody>
                {chapter.resources.map((row) => (
                  <tr key={`${row.name}-${row.url}`}>
                    <td>{row.type}</td>
                    <td>
                      <a href={row.url} target="_blank" rel="noreferrer">
                        {row.name}
                      </a>
                    </td>
                    <td>{row.lang}</td>
                    <td>{row.free ? 'Yes' : 'Paid / mixed'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {(chapter.links.length > 0 || chapter.citations.length > 0) && (
        <section className="chapter-block">
          <h2>More links & citations</h2>
          <div className="resource-grid">
            {chapter.links.length > 0 && (
              <div className="resource-block">
                <h3>Links</h3>
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

      <section className="chapter-complete">
        {!done ? (
          <button type="button" className="btn btn-primary" onClick={markDone}>
            Mark chapter complete ✓
          </button>
        ) : (
          <div className="complete-banner">
            <p>Chapter locked in. Nice.</p>
            <button type="button" className="btn btn-ghost" onClick={markUndone}>
              Undo
            </button>
          </div>
        )}
      </section>

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
          <Link
            to={`/manuals/${manual.id}/chapters/${next.id}`}
            className="btn btn-primary"
            onClick={() => {
              if (!done) markDone()
            }}
          >
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
