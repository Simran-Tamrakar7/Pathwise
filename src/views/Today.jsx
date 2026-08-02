'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { manuals, getManual } from '../data/manuals'
import { countDone, getContinueChapter } from '../lib/progress'
import { checkInToday, getStreak, sparkDoneCount } from '../lib/streak'
import { sparkOfTheDay } from '../data/sparks'
import { recipeOfTheDay } from '../data/recipes'
import { asset } from '../data/helpers'
import DocumentHead from '../components/DocumentHead'
import { listBadges } from '../lib/badges'
import { getRecent } from '../lib/recent'
import { getBookmarks } from '../lib/bookmarks'

export default function Today() {
  const [streak, setStreak] = useState(() => getStreak())
  const spark = useMemo(() => sparkOfTheDay(), [])
  const recipe = useMemo(() => recipeOfTheDay(), [])
  const badges = listBadges()
  const bookmarks = [...getBookmarks()].length

  const recent = getRecent()[0]
  const recentManual = recent ? getManual(recent.manualId) : null
  const continueFromRecent =
    recentManual && recent?.chapterId
      ? recentManual.chapters.find((c) => c.id === recent.chapterId)
      : recentManual
        ? getContinueChapter(recentManual)
        : null

  const pw = manuals.find((m) => m.id === 'playwright')
  const continueCh = continueFromRecent || (pw ? getContinueChapter(pw) : null)
  const continueManual = recentManual || pw
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

  const streakLabel =
    streak.count === 0
      ? 'days in a row'
      : streak.count === 1
        ? 'day in a row'
        : 'days in a row'

  return (
    <div className="wrap today-page">
      <DocumentHead title="Today" description="Your Pathwise daily hub — streak, continue, spark, cook, break." />

      <header className="today-hero">
        <div className="today-hero-copy">
          <p className="hero-kicker">{dateLabel}</p>
          <h1>Today</h1>
          <p className="lede">
            Show up once. Finish a chapter and the streak checks itself. Miss a day? Start again — no guilt trip.
          </p>
        </div>
        <div className="streak-card">
          <p className="break-kicker">In a row</p>
          <p className="streak-count">{streak.count}</p>
          <p className="streak-label">{streakLabel}</p>
          <button
            type="button"
            className={`btn ${streak.checkedToday ? 'btn-ghost' : 'btn-primary'}`}
            onClick={onCheckIn}
            disabled={streak.checkedToday}
          >
            {streak.checkedToday ? 'Already counted today ✓' : 'Check in for today'}
          </button>
          <p className="streak-hint">Completing a chapter also checks you in.</p>
        </div>
      </header>

      <div className="today-stats">
        <div className="today-stat">
          <strong>{started}</strong>
          <span>manuals started</span>
        </div>
        <div className="today-stat">
          <strong>{badges.length}</strong>
          <span>path badges</span>
        </div>
        <div className="today-stat">
          <strong>{bookmarks}</strong>
          <span>bookmarks</span>
        </div>
        <div className="today-stat">
          <strong>{sparksDone}</strong>
          <span>sparks cleared</span>
        </div>
      </div>

      <div className="today-grid">
        <Link
          href={
            continueCh && continueManual
              ? `/manuals/${continueManual.id}/chapters/${continueCh.id}`
              : '/manuals/playwright'
          }
          className="today-tile today-tile-learn"
        >
          <p className="break-kicker">Jump back in</p>
          <h2>{continueCh ? continueCh.title : 'Playwright with Python'}</h2>
          <p>
            {continueManual && continueCh
              ? `${continueManual.title} · ${continueCh.overview || 'Pick up the next chapter.'}`
              : 'Start the flagship path.'}
          </p>
          <span className="go">Open chapter →</span>
        </Link>

        <Link href={`/sparks?open=${spark.id}`} className="today-tile" >
          <p className="break-kicker">Spark · {spark.minutes} min</p>
          <h2>{spark.title}</h2>
          <p>{spark.prompt}</p>
          <span className="go">Do this spark →</span>
        </Link>

        <Link href={`/cookbook?open=${recipe.id}`} className="today-tile today-tile-cook">
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

        <Link href="/break" className="today-tile">
          <img src={asset('covers/break-hero.png')} alt="" className="today-tile-img" />
          <div>
            <p className="break-kicker">Rest</p>
            <h2>Break Room</h2>
            <p>Sandboxes, trackers, weird sites — open and play one round.</p>
            <span className="go">Enter Break Room →</span>
          </div>
        </Link>
      </div>

      {badges.length > 0 && (
        <section className="today-mix">
          <h2>Badges</h2>
          <div className="badge-row">
            {badges.slice(0, 6).map((b) => (
              <Link key={b.manualId} href={`/manuals/${b.manualId}`} className="badge-card">
                <strong>{b.title}</strong>
                <small>Completed</small>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="today-mix">
        <h2>Room doors</h2>
        <div className="today-doors">
          <Link href="/manuals">Manuals</Link>
          <Link href="/tags">Tags</Link>
          <Link href={`/sparks?open=${spark.id}`}>Sparks</Link>
          <Link href="/break">Break</Link>
          <Link href="/cookbook">Cookbook</Link>
          <Link href="/insights">Insights</Link>
        </div>
      </section>

      {pwProg && pwProg.done > 0 && (
        <p className="streak-hint" style={{ marginTop: '1rem' }}>
          Playwright progress: {pwProg.pct}%
        </p>
      )}
    </div>
  )
}
