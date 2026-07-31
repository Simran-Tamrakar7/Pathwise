import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, manuals } from '../data/manuals'

const upcoming = [
  'Selenium',
  'Python for QA',
  'SQL Basics',
  'UI/UX Research',
  'Accessibility',
  'CI/CD Pipelines',
  'TypeScript',
  'Mobile Testing',
]

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

  return (
    <div className="wrap">
      <header className="page-hero">
        <h1>All manuals</h1>
        <p>
          From absolute beginner to pro craft. Filter by topic or search — then follow the path.
        </p>
      </header>

      <input
        className="search"
        type="search"
        placeholder="Search Cypress, design, prompts…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search manuals"
      />

      <div className="filters" role="tablist" aria-label="Categories">
        {categories.map((c) => (
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
        <p style={{ color: 'var(--ink-soft)', marginBottom: '3rem' }}>
          Nothing matches. Try another word — or ask for a new manual to be added.
        </p>
      ) : (
        <div className="manual-grid" style={{ marginBottom: '2rem' }}>
          {list.map((m) => (
            <Link
              key={m.id}
              to={`/manuals/${m.id}`}
              className="manual-link"
              style={{ '--accent': m.accent }}
            >
              <div className="meta">
                <span>{categories.find((c) => c.id === m.category)?.label}</span>
                <span>{m.duration}</span>
              </div>
              <h3>{m.title}</h3>
              <p>{m.tagline}</p>
              <span className="go">Open manual →</span>
            </Link>
          ))}
        </div>
      )}

      <div className="add-strip">
        <h2>Want more paths?</h2>
        <p>
          This library grows with you. Next up on the board — say the word and we’ll write the manual.
        </p>
        <div className="chip-row">
          {upcoming.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
