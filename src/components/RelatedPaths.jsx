'use client'

import Link from 'next/link'
import { genres } from '../data/manuals'
import { relatedManuals } from '../lib/related'

export default function RelatedPaths({ manual, all }) {
  const related = relatedManuals(manual, all, 4)
  if (!related.length) return null
  return (
    <section className="related-paths">
      <h2>Next, learn…</h2>
      <p className="related-lede">Same neighborhood as {manual.title} — keep the momentum.</p>
      <div className="related-row">
        {related.map((m) => {
          const g = genres.find((x) => x.id === m.category)
          return (
            <Link
              key={m.id}
              href={`/manuals/${m.id}`}
              className="related-card"
              style={{ '--accent': m.accent || g?.color || '#0B3D2E' }}
            >
              <img src={m.coverUrl} alt="" loading="lazy" />
              <div>
                <span className="related-genre">{g?.label}</span>
                <strong>{m.title}</strong>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
