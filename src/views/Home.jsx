'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { manuals, genres } from '../data/manuals'
import { countDone, getContinueChapter } from '../lib/progress'
import { getStreak } from '../lib/streak'
import { featuredVideos } from '../data/learnMedia'
import VideoCarousel from '../components/VideoCarousel'
import JumpBackRow from '../components/JumpBackRow'
import Onboarding from '../components/Onboarding'
import DocumentHead from '../components/DocumentHead'
import { asset } from '../data/helpers'
import { isOnboardingDone, recommendManuals } from '../lib/onboarding'
import { listBadges } from '../lib/badges'
import { changelog } from '../data/changelog'
import { skillTags } from '../data/tags'
import { randomManual } from '../data/breakPersonality'

export default function Home() {
  const [onboardOpen, setOnboardOpen] = useState(() => !isOnboardingDone())
  const [, setTick] = useState(0)
  const router = useRouter()

  const featured = useMemo(() => recommendManuals(manuals, 6), [onboardOpen])

  const chapterCount = manuals.reduce((n, m) => n + m.chapters.length, 0)
  const pw = manuals.find((m) => m.id === 'playwright')
  const continueCh = pw ? getContinueChapter(pw) : null
  const pwProg = pw ? countDone(pw.id, pw.chapters.length) : null
  const streak = getStreak()
  const badges = listBadges()
  const genreChips = genres.filter((g) => g.id !== 'all').slice(0, 6)

  return (
    <>
      <DocumentHead
        title="Learn anything, step by step"
        description="Craft manuals from beginner to pro — automation, design, prompts, and rooms to reset."
      />
      {onboardOpen && (
        <Onboarding
          onDone={() => {
            setOnboardOpen(false)
            setTick((t) => t + 1)
          }}
        />
      )}

      <section className="hero hero-v2">
        <div
          className="hero-v2-wash"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(11, 61, 46, 0.92) 0%, rgba(15, 92, 76, 0.78) 42%, rgba(3, 105, 161, 0.45) 100%), url(${asset('covers/learn-banner.png')})`,
          }}
        />
        <div className="hero-v2-grid" aria-hidden="true" />
        <div className="wrap hero-v2-inner">
          <p className="hero-kicker">Forest paths · real skills · room to rest</p>
          <p className="hero-brand hero-brand-v2">Pathwise</p>
          <h1>Learn in chapters. Reset in rooms. Come back tomorrow.</h1>
          <p className="lede">
            {manuals.length} manuals · {chapterCount}+ chapters · Sparks · Break Room · Cookbook — tied together by{' '}
            <strong>Today</strong>
            {streak.count > 0
              ? ` · ${streak.count} day${streak.count === 1 ? '' : 's'} in a row`
              : ''}
            {badges.length > 0 ? ` · ${badges.length} path badge${badges.length === 1 ? '' : 's'}` : ''}.
          </p>
          <div className="hero-actions">
            <Link href="/today" className="btn btn-primary">
              Open Today →
            </Link>
            {continueCh && pw ? (
              <Link href={`/manuals/playwright/chapters/${continueCh.id}`} className="btn btn-ghost">
                Continue Playwright
              </Link>
            ) : (
              <Link href="/manuals/playwright" className="btn btn-ghost">
                Start Playwright
              </Link>
            )}
            <Link href="/tags" className="btn btn-ghost">
              Browse tags
            </Link>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                const m = randomManual(manuals)
                if (m) router.push(`/manuals/${m.id}`)
              }}
            >
              Random path
            </button>
            <Link href="/kits" className="btn btn-ghost">
              Tool kits
            </Link>
          </div>
          {pwProg && pwProg.done > 0 && (
            <div className="hero-progress-bar" aria-label={`${pwProg.pct}% Playwright progress`}>
              <span>Playwright {pwProg.pct}%</span>
              <div className="progress-bar thin">
                <div className="progress-bar-fill" style={{ width: `${pwProg.pct}%` }} />
              </div>
            </div>
          )}
        </div>
      </section>

      <JumpBackRow />

      <section className="section rooms-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Four rooms + Today</h2>
            <p>Study, drill, rest, eat — pick a door. Today gathers what matters right now.</p>
          </div>
          <div className="room-mosaic">
            <Link href="/today" className="room-tile room-today">
              <span className="room-tag">Hub</span>
              <h3>Today</h3>
              <p>Streak, continue, spark, cook, break — one screen.</p>
            </Link>
            <Link href="/manuals" className="room-tile" style={{ '--room': '#0F766E' }}>
              <h3>Manuals</h3>
              <p>{manuals.length} craft paths with lesson cards.</p>
            </Link>
            <Link href="/sparks" className="room-tile" style={{ '--room': '#B45309' }}>
              <h3>Sparks</h3>
              <p>5–15 min drills when you don’t have a full block.</p>
            </Link>
            <Link href="/break" className="room-tile" style={{ '--room': '#0369A1' }}>
              <h3>Break Room</h3>
              <p>Toys, trackers, teasers, weird sites — then stop.</p>
            </Link>
            <Link href="/cookbook" className="room-tile" style={{ '--room': '#C2410C' }}>
              <h3>Cookbook</h3>
              <p>Ways + Nutrition Facts. Food Hero kitchen too.</p>
            </Link>
          </div>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/kits" className="btn btn-ghost">
              Tool cookbooks (prompts, Zaps, design, snippets) →
            </Link>
          </p>
        </div>
      </section>

      <section className="section genre-ribbon-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Jump a genre</h2>
            <p>Filter the library by energy — or try skill tags.</p>
          </div>
          <div className="genre-ribbon">
            {genreChips.map((g) => (
              <Link
                key={g.id}
                href="/manuals"
                className="genre-chip"
                style={{ '--gcolor': g.color }}
                onClick={() => sessionStorage.setItem('pathwise-genre', g.id)}
              >
                <span className="genre-dot" />
                <span>
                  <strong>{g.label}</strong>
                  <small>{g.blurb}</small>
                </span>
              </Link>
            ))}
            {skillTags.slice(0, 3).map((t) => (
              <Link key={t.id} href={`/tags/${t.id}`} className="genre-chip" style={{ '--gcolor': t.color }}>
                <span className="genre-dot" />
                <span>
                  <strong>{t.label}</strong>
                  <small>{t.blurb}</small>
                </span>
              </Link>
            ))}
            <Link href="/tags" className="genre-chip genre-chip-all">
              <span>
                <strong>All tags</strong>
                <small>Skill filters</small>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="watch">
        <div className="wrap">
          <div className="section-head">
            <h2>Watch desk</h2>
            <p>Short videos — then open a chapter. Eyes first, hands second. Swipe or use the arrows.</p>
          </div>
          <VideoCarousel videos={featuredVideos} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Recommended for you</h2>
            <p>
              {isOnboardingDone()
                ? 'Ordered from your skill pulse check.'
                : 'Playwright leads. Finish the pulse check to personalize.'}
            </p>
          </div>
          <div className="manual-grid cover-grid">
            {featured.map((m) => {
              const prog = countDone(m.id, m.chapters.length)
              const g = genres.find((x) => x.id === m.category)
              return (
                <Link
                  key={m.id}
                  href={`/manuals/${m.id}`}
                  className="manual-link cover-link vivid-card"
                  style={{ '--accent': m.accent || g?.color || '#0B3D2E' }}
                >
                  <div className="cover-thumb">
                    <img src={m.coverUrl} alt="" loading="lazy" />
                    {prog.done > 0 && <span className="prog-pill">{prog.pct}%</span>}
                  </div>
                  <div className="meta">
                    <span style={{ color: g?.color }}>{g?.label}</span>
                    <span>{m.chapters.length} chapters</span>
                  </div>
                  <h3>{m.title}</h3>
                  <p>{m.tagline}</p>
                  <span className="go">Open path →</span>
                </Link>
              )
            })}
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/manuals" className="btn btn-primary">
              See all {manuals.length} manuals
            </Link>
          </p>
        </div>
      </section>

      {badges.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Your path badges</h2>
              <p>Small wins for finished manuals — not a points treadmill.</p>
            </div>
            <div className="badge-row">
              {badges.map((b) => (
                <Link key={b.manualId} href={`/manuals/${b.manualId}`} className="badge-card">
                  <strong>{b.title}</strong>
                  <small>Completed</small>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section changelog-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Recently added</h2>
            <p>The library moves — here’s what’s new.</p>
          </div>
          <ul className="changelog-list">
            {changelog.slice(0, 4).map((c) => (
              <li key={`${c.date}-${c.title}`}>
                <time dateTime={c.date}>{c.date}</time>
                <div>
                  <strong>{c.title}</strong>
                  <p>{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
