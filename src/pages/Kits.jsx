import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { kitKinds, kitRecipes, kitOfTheDay, kitsByKind } from '../data/kits'
import { getManual } from '../data/manuals'
import DocumentHead from '../components/DocumentHead'

function CopyButton({ text }) {
  const [ok, setOk] = useState(false)
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setOk(true)
          setTimeout(() => setOk(false), 1500)
        } catch {
          setOk(false)
        }
      }}
    >
      {ok ? 'Copied ✓' : 'Copy recipe'}
    </button>
  )
}

function RecipeCard({ r }) {
  const manual = r.manualId ? getManual(r.manualId) : null
  return (
    <article className="kit-card" id={r.id}>
      <p className="break-kicker">{r.tags?.join(' · ')}</p>
      <h2>{r.title}</h2>
      <p className="kit-problem">
        <strong>Solves:</strong> {r.problem}
      </p>
      <pre className="kit-recipe">
        <code>{r.recipe}</code>
      </pre>
      <p className="kit-why">
        <strong>Why this works:</strong> {r.why}
      </p>
      <div className="hero-actions">
        <CopyButton text={r.recipe} />
        {manual && (
          <Link to={`/manuals/${manual.id}`} className="btn btn-ghost">
            Deeper: {manual.title} →
          </Link>
        )}
      </div>
    </article>
  )
}

export default function Kits() {
  const [kind, setKind] = useState('prompts')
  const daily = useMemo(() => kitOfTheDay(), [])
  const list = useMemo(() => kitsByKind(kind), [kind])
  const active = kitKinds.find((k) => k.id === kind)

  return (
    <div className="wrap kits-page">
      <DocumentHead
        title="Tool cookbooks"
        description="Prompt, automation, design, and snippet recipes — copy, use, then go deeper in a manual."
      />

      <header className="break-hero-banner cook-hero-banner">
        <div className="break-hero-copy" style={{ maxWidth: '40rem' }}>
          <p className="hero-kicker">Ready-to-use · not full lessons</p>
          <h1>Tool cookbooks</h1>
          <p>
            Problem → recipe → one-click copy → optional deeper manual. {kitRecipes.length} cards across prompts,
            Zapier/Make, design cheats, and snippets.
          </p>
          <div className="hero-actions">
            <a href={`#${daily.id}`} className="btn btn-primary">
              Recipe of the day
            </a>
            <Link to="/cookbook" className="btn btn-ghost">
              Food cookbook
            </Link>
            <Link to="/manuals" className="btn btn-ghost">
              Manuals
            </Link>
          </div>
        </div>
      </header>

      <section className="daily-recipe" style={{ '--accent': '#0D9488' }}>
        <p className="break-kicker">Recipe of the day</p>
        <h2>{daily.title}</h2>
        <p>{daily.problem}</p>
        <a href={`#${daily.id}`} className="go">
          Jump to card →
        </a>
      </section>

      <div className="filters color-filters" role="tablist" aria-label="Cookbook type">
        {kitKinds.map((k) => (
          <button
            key={k.id}
            type="button"
            role="tab"
            aria-selected={kind === k.id}
            className={`filter-btn${kind === k.id ? ' active' : ''}`}
            style={{ '--gcolor': k.color }}
            onClick={() => setKind(k.id)}
          >
            {k.label}
          </button>
        ))}
      </div>
      <p className="kit-kind-blurb">{active?.blurb}</p>

      <div className="kit-grid">
        {list.map((r) => (
          <RecipeCard key={r.id} r={r} />
        ))}
      </div>
    </div>
  )
}
