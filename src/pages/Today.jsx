import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { manuals } from '../data/manuals'
import { countDone, getContinueChapter } from '../lib/progress'
import { checkInToday, getStreak, sparkDoneCount } from '../lib/streak'
import { sparkOfTheDay } from '../data/sparks'
import { recipeOfTheDay } from '../data/recipes'
import { asset } from '../data/helpers'

export default function Today() {
  const [streak, setStreak] = useState(() => getStreak())
  const spark = useMemo(() => sparkOfTheDay(), [])
  const recipe = useMemo(() => recipeOfTheDay(), [])
  const pw = manuals.find((m) => m.id === 'playwright')
  const continueCh = pw ? getContinueChapter(pw) : null
  const pwProg = pw ? countDone(pw.id, pw.chapters.length) : null
  const sparksDone = sparkDoneCount()

  const started = manuals.filter((m) => countDone(m.id, m.chapters.length).done > 0).length

  function onCheckIn() {
    setStreak(checkInToday())
  }

  const dateLabel = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="wrap today-page">
      <header className="today-hero">
        <div className="today-hero-copy">
          <p className="hero-kicker">{dateLabel}</p>
          <h1>Today</h1>
          <p className="lede">
            One place to continue learning, spark a drill, take a break, or cook — and keep a streak without the guilt
            trip.
          </p>
        </div>
        <div className="streak-card">
          <p className="break-kicker">Streak</p>
          <p className="streak-count">{streak.count}</p>
          <p className="streak-label">{streak.count === 1 ? 'day' : 'days'}</p>
          <button
            type="button"
            className={`btn ${streak.checkedToday ? 'btn-ghost' : 'btn-primary'}`}
            onClick={onCheckIn}
            disabled={streak.checkedToday}
          >
            {streak.checkedToday ? 'Checked in ✓' : 'Check in for today'}
          </button>
          <p className="streak-hint">Show up once a day. Miss a day? Streak resets — start again.</p>
        </div>
      </header>

      <div className="today-stats">
        <div className="today-stat">
          <strong>{started}</strong>
          <span>manuals started</span>
        </div>
        <div className="today-stat">
          <strong>{pwProg?.pct ?? 0}%</strong>
          <span>Playwright done</span>
        </div>
        <div className="today-stat">
          <strong>{sparksDone}</strong>
          <span>sparks cleared</span>
        </div>
      </div>

      <div className="today-grid">
        <Link
          to={continueCh && pw ? `/manuals/playwright/chapters/${continueCh.id}` : '/manuals/playwright'}
          className="today-tile today-tile-learn"
        >
          <p className="break-kicker">Continue</p>
          <h2>{continueCh ? continueCh.title : 'Playwright with Python'}</h2>
          <p>{continueCh?.overview || 'Start the flagship path.'}</p>
          <span className="go">Open chapter →</span>
        </Link>

        <Link to="/sparks" className="today-tile" state={{ open: spark.id }}>
          <p className="break-kicker">Spark · {spark.minutes} min</p>
          <h2>{spark.title}</h2>
          <p>{spark.prompt}</p>
          <span className="go">Do this spark →</span>
        </Link>

        <Link to={`/cookbook?open=${recipe.id}`} className="today-tile today-tile-cook">
          <img src={recipe.image} alt="" className="today-tile-img" />
          <div>
            <p className="break-kicker">Fuel · {recipe.cuisineLabel}</p>
            <h2>{recipe.name}</h2>
            <p>
              {recipe.ways?.length || 1} ways · from {recipe.minutes} min
            </p>
            <span className="go">Cook this →</span>
          </div>
        </Link>

        <Link to="/break" className="today-tile">
          <img src={asset('covers/break-hero.png')} alt="" className="today-tile-img" />
          <div>
            <p className="break-kicker">Rest</p>
            <h2>Break Room</h2>
            <p>Sandboxes, trackers, weird sites — open and play one round.</p>
            <span className="go">Enter Break Room →</span>
          </div>
        </Link>
      </div>

      <section className="today-mix">
        <h2>Room doors</h2>
        <div className="today-doors">
          <Link to="/manuals">Manuals</Link>
          <Link to="/sparks">Sparks</Link>
          <Link to="/break">Break</Link>
          <Link to="/cookbook">Cookbook</Link>
          <Link to="/">Home</Link>
        </div>
      </section>
    </div>
  )
}
