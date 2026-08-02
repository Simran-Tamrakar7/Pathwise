'use client'

import Link from 'next/link'
import { manuals, genres } from '../data/manuals'
import { skillTags, getTag, manualsWithTag, tagsForManual } from '../data/tags'
import DocumentHead from '../components/DocumentHead'
import { countDone } from '../lib/progress'

export default function Tags({ tagId } = {}) {
  const active = tagId ? getTag(tagId) : null
  const list = active ? manualsWithTag(manuals, active.id) : []

  return (
    <div className="wrap tags-page">
      <DocumentHead
        title={active ? active.label : 'Browse by skill tag'}
        description={
          active
            ? `${active.blurb} — ${list.length} Pathwise manuals.`
            : 'Browse Pathwise manuals by skill tags like beginner-friendly and under 30 min.'
        }
      />

      <header className="page-hero colorful-page-hero">
        <p className="hero-kicker">Discover</p>
        <h1>{active ? active.label : 'Tags'}</h1>
        <p>{active ? active.blurb : 'Browse by how you want to learn — not just genre.'}</p>
        {active && (
          <p>
            <Link href="/tags" className="btn btn-ghost">
              ← All tags
            </Link>
          </p>
        )}
      </header>

      {!active && (
        <div className="tag-grid">
          {skillTags.map((t) => {
            const n = manualsWithTag(manuals, t.id).length
            return (
              <Link
                key={t.id}
                href={`/tags/${t.id}`}
                className="tag-tile"
                style={{ '--tag': t.color }}
              >
                <h2>{t.label}</h2>
                <p>{t.blurb}</p>
                <span className="go">{n} paths →</span>
              </Link>
            )
          })}
        </div>
      )}

      {active && (
        <div className="manual-grid cover-grid">
          {list.map((m) => {
            const prog = countDone(m.id, m.chapters.length)
            const g = genres.find((x) => x.id === m.category)
            return (
              <Link
                key={m.id}
                href={`/manuals/${m.id}`}
                className="manual-link cover-link vivid-card"
                style={{ '--accent': m.accent || g?.color || '#0B3D2E' }}
              >
                <div className="cover-thumb">
                  <img src={m.coverUrl} alt="" loading="lazy" />
                  {prog.done > 0 && <span className="prog-pill">{prog.pct}%</span>}
                </div>
                <div className="meta">
                  <span style={{ color: g?.color }}>{g?.label}</span>
                  <span>{tagsForManual(m).length} tags</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.tagline}</p>
                <span className="go">Open path →</span>
              </Link>
            )
          })}
          {list.length === 0 && <p>No manuals match this tag yet.</p>}
        </div>
      )}
    </div>
  )
}
