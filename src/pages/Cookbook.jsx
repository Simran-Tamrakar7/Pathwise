import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { recipeCuisines, recipes, recipeOfTheDay, cookResources, cookTips } from '../data/recipes'
import { asset } from '../data/helpers'

const FAV_KEY = 'pathwise-recipe-favs'

function loadFavs() {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'))
  } catch {
    return new Set()
  }
}

export default function Cookbook() {
  const [params] = useSearchParams()
  const [cuisine, setCuisine] = useState('all')
  const [meal, setMeal] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [q, setQ] = useState('')
  const [openId, setOpenId] = useState(null)
  const [favsOnly, setFavsOnly] = useState(false)
  const [favs, setFavs] = useState(loadFavs)
  const [shuffle, setShuffle] = useState(0)
  const [tip] = useState(() => cookTips[Math.floor(Math.random() * cookTips.length)])
  const [cookSec, setCookSec] = useState(0)
  const [cookOn, setCookOn] = useState(false)
  const daily = useMemo(() => recipeOfTheDay(), [])

  useEffect(() => {
    const open = params.get('open')
    if (open && recipes.some((r) => r.id === open)) setOpenId(open)
  }, [params])

  useEffect(() => {
    if (!openId) return
    document.getElementById('recipe-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [openId])

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify([...favs]))
  }, [favs])

  useEffect(() => {
    if (!cookOn) return undefined
    const id = setInterval(() => setCookSec((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [cookOn])

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    let rows = recipes.filter((r) => {
      if (favsOnly && !favs.has(r.id)) return false
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
    if (shuffle) {
      rows = [...rows].sort((a, b) => {
        const ha = (a.id.charCodeAt(0) + shuffle) % 97
        const hb = (b.id.charCodeAt(0) + shuffle) % 97
        return ha - hb
      })
    }
    return rows
  }, [cuisine, meal, difficulty, q, favsOnly, favs, shuffle])

  const open = recipes.find((r) => r.id === openId) || null
  const cookClock = `${String(Math.floor(cookSec / 60)).padStart(2, '0')}:${String(cookSec % 60).padStart(2, '0')}`

  function toggleFav(id, e) {
    e?.stopPropagation()
    setFavs((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function surprise() {
    const pool = list.length ? list : recipes
    const pick = pool[Math.floor(Math.random() * pool.length)]
    setOpenId(pick.id)
    setCuisine(pick.cuisine)
  }

  return (
    <div className="wrap cookbook-page cookbook-page-vivid">
      <header className="break-hero-banner cook-hero-banner">
        <img src={asset('covers/cookbook-hero.png')} alt="" className="break-hero-img" />
        <div className="break-hero-copy">
          <p className="hero-kicker">Cook · eat · learn again</p>
          <h1>Pathwise Cookbook</h1>
          <p>
            {recipes.length} dishes · {recipeCuisines.length} cuisines · photos matched to the dish (dal looks like
            dal) · resources, tips, and a cook-along clock.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={surprise}>
              Surprise me
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setOpenId(daily.id)}>
              Recipe of the day
            </button>
            <button
              type="button"
              className={`btn btn-ghost${favsOnly ? ' is-on' : ''}`}
              onClick={() => setFavsOnly((v) => !v)}
            >
              Favorites ({favs.size})
            </button>
            <a href="#cook-resources" className="btn btn-ghost">
              Resources
            </a>
          </div>
        </div>
      </header>

      <p className="cook-tip-banner">{tip}</p>

      <section className="daily-recipe daily-recipe-media" style={{ '--accent': daily.color }}>
        <div className="daily-recipe-img">
          <img src={daily.image} alt="" loading="lazy" />
        </div>
        <div>
          <p className="break-kicker">Recipe of the day</p>
          <h2>{daily.name}</h2>
          <p className="break-meta">
            {daily.cuisineLabel} · {daily.minutes} min · {daily.difficulty} · serves {daily.servings}
          </p>
          <p>{daily.why}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => setOpenId(daily.id)}>
              Cook this
            </button>
            <button type="button" className="btn btn-ghost" onClick={(e) => toggleFav(daily.id, e)}>
              {favs.has(daily.id) ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </section>

      <div className="cuisine-mosaic" aria-label="Jump to cuisine">
        {recipeCuisines.map((c) => {
          const sample = recipes.find((r) => r.cuisine === c.id)
          return (
            <button
              key={c.id}
              type="button"
              className={`cuisine-tile${cuisine === c.id ? ' active' : ''}`}
              style={{ '--accent': c.color }}
              onClick={() => setCuisine(c.id)}
            >
              <img src={sample?.image} alt="" loading="lazy" />
              <span>{c.label}</span>
            </button>
          )
        })}
        <button
          type="button"
          className={`cuisine-tile all-tile${cuisine === 'all' ? ' active' : ''}`}
          onClick={() => setCuisine('all')}
        >
          <span>All</span>
        </button>
      </div>

      <input
        className="search"
        type="search"
        placeholder="Search pasta, dal, tacos, miso…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search recipes"
      />

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
        <button type="button" className="filter-btn" onClick={() => setShuffle((n) => n + 1)}>
          Shuffle view
        </button>
      </div>

      <p className="cookbook-count">
        Showing <strong>{list.length}</strong> recipes
        {cuisine !== 'all' ? ` · ${recipeCuisines.find((c) => c.id === cuisine)?.label}` : ''}
      </p>

      <div className="recipe-grid recipe-grid-photos">
        {list.map((r) => (
          <button
            key={r.id}
            type="button"
            className={`recipe-card photo-card${openId === r.id ? ' is-open' : ''}`}
            style={{ '--accent': r.color }}
            onClick={() => setOpenId(openId === r.id ? null : r.id)}
          >
            <div className="recipe-photo">
              <img src={r.image} alt="" loading="lazy" />
              <button
                type="button"
                className={`fav-btn${favs.has(r.id) ? ' on' : ''}`}
                aria-label={favs.has(r.id) ? 'Remove favorite' : 'Save favorite'}
                onClick={(e) => toggleFav(r.id, e)}
              >
                {favs.has(r.id) ? 'Saved' : 'Save'}
              </button>
            </div>
            <span className="recipe-cuisine">{r.cuisineLabel}</span>
            <h3>{r.name}</h3>
            <p>
              {r.minutes} min · {r.difficulty} · {r.meal}
            </p>
          </button>
        ))}
      </div>

      {open && (
        <section className="recipe-detail recipe-detail-media" style={{ '--accent': open.color }} id="recipe-detail">
          <div className="recipe-detail-hero">
            <img src={open.image} alt="" />
          </div>
          <div className="recipe-detail-head">
            <div>
              <p className="break-kicker">{open.cuisineLabel}</p>
              <h2>{open.name}</h2>
              <p className="break-meta">
                {open.minutes} min · {open.difficulty} · serves {open.servings} · {open.meal}
              </p>
              <p>{open.why}</p>
            </div>
            <div className="hero-actions">
              <button type="button" className="btn btn-ghost" onClick={(e) => toggleFav(open.id, e)}>
                {favs.has(open.id) ? 'Saved' : 'Save'}
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => setOpenId(null)}>
                Close
              </button>
            </div>
          </div>

          <div className="cook-along">
            <p className="break-kicker">Cook-along clock</p>
            <p className="cook-along-time">{cookClock}</p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => setCookOn((v) => !v)}>
                {cookOn ? 'Pause' : 'Start cooking'}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setCookOn(false)
                  setCookSec(0)
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="recipe-columns">
            <div>
              <h3>Ingredients</h3>
              <ul className="learn-list checkable-ing">
                {open.ingredients.map((i) => (
                  <li key={i}>
                    <label>
                      <input type="checkbox" /> {i}
                    </label>
                  </li>
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

      <section className="cook-resources" id="cook-resources">
        <div className="section-head">
          <h2>Kitchen resources</h2>
          <p>Sites, channels, and skills that make Pathwise recipes land better — watch one, then cook.</p>
        </div>
        <div className="media-grid">
          {cookResources.map((r) => (
            <a key={r.title} className="media-card" href={r.url} target="_blank" rel="noreferrer">
              <div className="media-body" style={{ paddingTop: '1rem' }}>
                <p className="break-kicker">{r.kind}</p>
                <h3>{r.title}</h3>
                <p>{r.why}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
