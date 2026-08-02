'use client'

import Link from 'next/link'
import DocumentHead from '../components/DocumentHead'
import { analyticsRollup } from '../lib/analytics'
import { feedbackSummary } from '../lib/feedback'
import { listBadges } from '../lib/badges'
import { getStreak } from '../lib/streak'
import { getRecent } from '../lib/recent'
import { getBookmarks } from '../lib/bookmarks'
import { getManual } from '../data/manuals'

/** Local-only owner insights (+ optional Plausible via VITE_PLAUSIBLE_DOMAIN). */
export default function Insights() {
  const rollup = analyticsRollup()
  const fb = feedbackSummary()
  const badges = listBadges()
  const streak = getStreak()
  const recent = getRecent()
  const bookmarks = [...getBookmarks()]

  return (
    <div className="wrap insights-page">
      <DocumentHead
        title="Local insights"
        description="Your browser-only Pathwise learning stats."
      />
      <header className="page-hero">
        <p className="hero-kicker">Just for you</p>
        <h1>Insights</h1>
        <p>
          Events stay in this browser. For real traffic, set <code>VITE_PLAUSIBLE_DOMAIN</code> and rebuild.
        </p>
      </header>

      <div className="today-stats">
        <div className="today-stat">
          <strong>{streak.count}</strong>
          <span>day streak</span>
        </div>
        <div className="today-stat">
          <strong>{badges.length}</strong>
          <span>path badges</span>
        </div>
        <div className="today-stat">
          <strong>
            {fb.up}/{fb.down}
          </strong>
          <span>lesson 👍 / 👎</span>
        </div>
        <div className="today-stat">
          <strong>{rollup.total}</strong>
          <span>local events</span>
        </div>
      </div>

      <section className="insights-block">
        <h2>Event counts</h2>
        <ul className="insights-list">
          {Object.entries(rollup.counts).map(([name, n]) => (
            <li key={name}>
              <code>{name}</code> — {n}
            </li>
          ))}
          {Object.keys(rollup.counts).length === 0 && <li>No events yet — open a chapter.</li>}
        </ul>
      </section>

      <section className="insights-block">
        <h2>Bookmarks ({bookmarks.length})</h2>
        <ul className="insights-list">
          {bookmarks.map((id) => (
            <li key={id}>
              <Link href={`/manuals/${id}`}>{getManual(id)?.title || id}</Link>
            </li>
          ))}
          {bookmarks.length === 0 && <li>None saved yet.</li>}
        </ul>
      </section>

      <section className="insights-block">
        <h2>Recently viewed</h2>
        <ul className="insights-list">
          {recent.map((r) => {
            const m = getManual(r.manualId)
            const to = r.chapterId
              ? `/manuals/${r.manualId}/chapters/${r.chapterId}`
              : `/manuals/${r.manualId}`
            return (
              <li key={`${r.manualId}-${r.chapterId}-${r.at}`}>
                <Link href={to}>{m?.title || r.manualId}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
