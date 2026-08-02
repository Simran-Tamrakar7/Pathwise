import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { recipeCuisines, recipes, recipeOfTheDay } from '../data/recipes'

export default function Cookbook() {
  const [params] = useSearchParams()
  const [cuisine, setCuisine] = useState('all')
  const [meal, setMeal] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [q, setQ] = useState('')
  const [openId, setOpenId] = useState(null)
  const daily = useMemo(() => recipeOfTheDay(), [])

  useEffect(() => {
    const open = params.get('open')
    if (open && recipes.some((r) => r.id === open)) setOpenId(open)
  }, [params])

  useEffect(() => {
    if (!openId) return
    document.getElementById('recipe-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [openId])

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return recipes.filter((r) => {
      if (cuisine !== 'all' && r.cuisine !== cuisine) return false
      if (meal !== 'all' && r.meal !== meal) return false
      if (difficulty !== 'all' && r.difficulty !== difficulty) return false
      if (!needle) return true
      return (
        r.name.toLowerCase().includes(needle) ||
        r.cuisineLabel.toLowerCase().includes(needle) ||
        r.tags.some((t) => t.includes(needle)) ||
        r.ingredients.some((i) => i.toLowerCase().includes(needle))
      )
    })
  }, [cuisine, meal, difficulty, q])

  const open = recipes.find((r) => r.id === openId) || null

  return (
    <div className="wrap cookbook-page">
      <header className="page-hero colorful-page-hero">
        <p className="crumb">
          <Link to="/break">Break Room</Link>
          {' / '}
          Cookbook
        </p>
        <h1>Pathwise Cookbook</h1>
        <p>
          {recipes.length} home recipes · {recipeCuisines.length} cuisines · filters, search, and a recipe of the
          day. Learn hard, eat well, come back sharper.
        </p>
      </header>

      <section className="daily-recipe" style={{ '--accent': daily.color }}>
        <p className="break-kicker">Recipe of the day</p>
        <h2>{daily.name}</h2>
        <p className="break-meta">
          {daily.cuisineLabel} · {daily.minutes} min · {daily.difficulty} · serves {daily.servings}
        </p>
        <p>{daily.why}</p>
        <button type="button" className="btn btn-primary" onClick={() => setOpenId(daily.id)}>
          Open recipe
        </button>
      </section>

      <input
        className="search"
        type="search"
        placeholder="Search pasta, dal, tacos, miso…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search recipes"
      />

      <div className="filters color-filters" role="tablist" aria-label="Cuisines">
        <button
          type="button"
          className={`filter-btn${cuisine === 'all' ? ' active' : ''}`}
          style={{ '--gcolor': '#0B3D2E' }}
          onClick={() => setCuisine('all')}
        >
          All cuisines
        </button>
        {recipeCuisines.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`filter-btn${cuisine === c.id ? ' active' : ''}`}
            style={{ '--gcolor': c.color }}
            onClick={() => setCuisine(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="filters cookbook-subfilters">
        {['all', 'breakfast', 'lunch', 'dinner', 'snack'].map((m) => (
          <button
            key={m}
            type="button"
            className={`filter-btn${meal === m ? ' active' : ''}`}
            onClick={() => setMeal(m)}
          >
            {m === 'all' ? 'Any meal' : m}
          </button>
        ))}
        {['all', 'easy', 'medium', 'hard'].map((d) => (
          <button
            key={d}
            type="button"
            className={`filter-btn${difficulty === d ? ' active' : ''}`}
            onClick={() => setDifficulty(d)}
          >
            {d === 'all' ? 'Any level' : d}
          </button>
        ))}
      </div>

      <p className="cookbook-count">
        Showing <strong>{list.length}</strong> recipes
      </p>

      <div className="recipe-grid">
        {list.map((r) => (
          <button
            key={r.id}
            type="button"
            className={`recipe-card${openId === r.id ? ' is-open' : ''}`}
            style={{ '--accent': r.color }}
            onClick={() => setOpenId(openId === r.id ? null : r.id)}
          >
            <span className="recipe-cuisine">{r.cuisineLabel}</span>
            <h3>{r.name}</h3>
            <p>
              {r.minutes} min · {r.difficulty} · {r.meal}
            </p>
          </button>
        ))}
      </div>

      {open && (
        <section className="recipe-detail" style={{ '--accent': open.color }} id="recipe-detail">
          <div className="recipe-detail-head">
            <div>
              <p className="break-kicker">{open.cuisineLabel}</p>
              <h2>{open.name}</h2>
              <p className="break-meta">
                {open.minutes} min · {open.difficulty} · serves {open.servings} · {open.meal}
              </p>
              <p>{open.why}</p>
            </div>
            <button type="button" className="btn btn-ghost" onClick={() => setOpenId(null)}>
              Close
            </button>
          </div>
          <div className="recipe-columns">
            <div>
              <h3>Ingredients</h3>
              <ul className="learn-list">
                {open.ingredients.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Steps</h3>
              <ol className="walk-steps recipe-steps">
                {open.steps.map((s, idx) => (
                  <li key={s} className="walk-step">
                    <span className="lesson-num">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <p>{s}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="tip">
                <strong>Cook tip:</strong> {open.tip}
              </p>
            </div>
          </div>
        </section>
      )}

      <p style={{ margin: '2rem 0 4rem' }}>
        <Link to="/break" className="btn btn-ghost">
          ← Back to Break Room
        </Link>
      </p>
    </div>
  )
}
