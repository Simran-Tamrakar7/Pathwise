'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { genres, manuals } from '../data/manuals'
import { countDone } from '../lib/progress'
import DocumentHead from '../components/DocumentHead'
import { isBookmarked } from '../lib/bookmarks'

export default function Catalog() {
  const [cat, setCat] = useState('all')
  const [q, setQ] = useState('')

  useEffect(() => {
    const saved = sessionStorage.getItem('pathwise-genre')
    if (saved && genres.some((g) => g.id === saved)) {
      setCat(saved)
      sessionStorage.removeItem('pathwise-genre')
    }
  }, [])

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return manuals.filter((m) => {
      const catOk = cat === 'all' || m.category === cat
      if (!catOk) return false
      if (!needle) return true
      return (
        m.title.toLowerCase().includes(needle) ||
        m.tagline.toLowerCase().includes(needle) ||
        m.category.toLowerCase().includes(needle)
      )
    })
  }, [cat, q])

  const grouped =
    cat === 'all'
      ? genres
          .filter((g) => g.id !== 'all')
          .map((g) => ({
            ...g,
            items: list.filter((m) => m.category === g.id),
          }))
          .filter((g) => g.items.length > 0)
      : [{ ...genres.find((g) => g.id === cat), items: list }]

  return (
    <div className="wrap catalog-page">
      <DocumentHead
        title="Manuals"
        description={`${manuals.length} Pathwise craft manuals — filter by genre and finish chapter by chapter.`}
      />
      <header className="page-hero colorful-page-hero catalog-hero-v2">
        <p className="hero-kicker">Skill library</p>
        <h1>Manuals you can finish</h1>
        <p>
          {manuals.length} paths — genre filters, covers, lesson cards. Or browse by{' '}
          <Link href="/tags">skill tags</Link>.
        </p>
      </header>

      <input
        className="search"
        type="search"
        placeholder="Search Cypress, agile, design, soft skills…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search manuals"
      />

      <div className="filters color-filters" role="tablist" aria-label="Genres">
        {genres.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={cat === c.id}
            className={`filter-btn${cat === c.id ? ' active' : ''}`}
            style={{ '--gcolor': c.color || '#0B3D2E' }}
            onClick={() => setCat(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)', marginBottom: '3rem' }}>Nothing matches — try another word.</p>
      ) : (
        grouped.map((g) => (
          <section key={g.id} className="genre-section genre-band" style={{ '--gcolor': g.color || '#0B3D2E' }}>
            <div className="section-head">
              <h2>{g.label}</h2>
              <p>{g.blurb}</p>
            </div>
            <div className="manual-grid cover-grid">
              {g.items.map((m) => {
                const prog = countDone(m.id, m.chapters.length)
                const saved = isBookmarked(m.id)
                return (
                  <Link
                    key={m.id}
                    href={`/manuals/${m.id}`}
                    className="manual-link cover-link vivid-card"
                    style={{ '--accent': m.accent || g.color }}
                  >
                    <div className="cover-thumb">
                      <img src={m.coverUrl} alt="" loading="lazy" />
                      {prog.done > 0 && <span className="prog-pill">{prog.pct}%</span>}
                      {saved && <span className="bookmark-pill">★</span>}
                    </div>
                    <div className="meta">
                      <span>{m.chapters.length} chapters</span>
                      <span>{prog.done > 0 ? 'In progress' : saved ? 'Bookmarked' : m.duration}</span>
                    </div>
                    <h3>{m.title}</h3>
                    <p>{m.tagline}</p>
                    <span className="go">Open path →</span>
                  </Link>
                )
              })}
            </div>
          </section>
        ))
      )}
    </div>
  )
}
