import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { genres, manuals } from '../data/manuals'

export default function Catalog() {
  const [cat, setCat] = useState('all')
  const [q, setQ] = useState('')

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
    <div className="wrap">
      <header className="page-hero">
        <h1>Skill library</h1>
        <p>
          {manuals.length} manuals across automation, design, AI, foundations, and soft skills — each with
          a clickable roadmap, book-style chapters, and a full resource shelf.
        </p>
      </header>

      <input
        className="search"
        type="search"
        placeholder="Search Cypress, design, interviews, SQL…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search manuals"
      />

      <div className="filters" role="tablist" aria-label="Genres">
        {genres.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={cat === c.id}
            className={`filter-btn${cat === c.id ? ' active' : ''}`}
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
          <section key={g.id} className="genre-section">
            <div className="section-head">
              <h2>{g.label}</h2>
              <p>{g.blurb}</p>
            </div>
            <div className="manual-grid cover-grid">
              {g.items.map((m) => (
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
                  <span className="go">Open manual + roadmap →</span>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  )
}
