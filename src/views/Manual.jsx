'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { getManual, genres, manuals } from '../data/manuals'
import Roadmap from '../components/Roadmap'
import VideoCard from '../components/VideoCard'
import DocumentHead from '../components/DocumentHead'
import RelatedPaths from '../components/RelatedPaths'
import ManualComments from '../components/ManualComments'
import { videosForManual } from '../data/learnMedia'
import { countDone, getContinueChapter, isChapterDone } from '../lib/progress'
import { groupPhases, phaseDetail } from '../lib/manualPhases'
import { trackView } from '../lib/recent'
import { isBookmarked, toggleBookmark } from '../lib/bookmarks'
import { hasBadge } from '../lib/badges'
import { downloadCertificate } from '../lib/certificate'
import { tagsForManual, getTag } from '../data/tags'
import { track } from '../lib/analytics'

const TABS = [
  { id: 'path', label: 'Path' },
  { id: 'phase', label: 'Phase detail' },
  { id: 'knowledge', label: 'Knowledge vault' },
  { id: 'watch', label: 'Watch' },
  { id: 'drills', label: 'Chapters' },
  { id: 'resources', label: 'Resources' },
]

function Stat({ value, label }) {
  return (
    <div className="studio-stat">
      <p className="studio-stat-value">{value}</p>
      <p className="studio-stat-label">{label}</p>
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`studio-acc${open ? ' is-open' : ''}`}>
      <button type="button" className="studio-acc-btn" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{title}</span>
        <span aria-hidden="true">{open ? '▾' : '▸'}</span>
      </button>
      {open && <div className="studio-acc-body">{children}</div>}
    </div>
  )
}

export default function Manual({ id }) {
  const manual = getManual(id)
  const [rev, setRev] = useState(0)
  const [tab, setTab] = useState('path')
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    if (id) {
      trackView(id)
      setBookmarked(isBookmarked(id))
      track('manual_view', { manualId: id })
    }
  }, [id])

  const progress = useMemo(() => {
    if (!manual) return null
    return countDone(manual.id, manual.chapters.length)
  }, [manual, rev])

  const phases = useMemo(() => (manual ? groupPhases(manual.chapters) : []), [manual])
  const watchlist = useMemo(() => (manual ? videosForManual(manual) : []), [manual])
  const activePhase = phases[Math.min(phaseIdx, Math.max(0, phases.length - 1))] || null
  const detail = activePhase ? phaseDetail(activePhase) : null
  const totalWeeks = phases.reduce((n, p) => n + p.weeks, 0)
  const doneChapters = progress?.done || 0

  if (!manual) {
    return (
      <div className="wrap not-found">
        <h1>Manual not found</h1>
        <p>That path isn’t in the library yet.</p>
        <Link href="/manuals" className="btn btn-primary">
          Browse manuals
        </Link>
      </div>
    )
  }

  const genre = genres.find((c) => c.id === manual.category)
  const accent = manual.accent || genre?.color || '#0B3D2E'
  const { resources } = manual
  const continueCh = getContinueChapter(manual)
  const first = manual.chapters[0]

  function goPhase(i) {
    setPhaseIdx(i)
    setTab('phase')
  }

  const tags = tagsForManual(manual)
  const earned = hasBadge(manual.id)
  const complete = (progress?.pct || 0) >= 100

  return (
    <div
      className="wrap manual-studio"
      style={{ '--accent': accent }}
      onFocus={() => setRev((n) => n + 1)}
    >
      <DocumentHead title={manual.title} description={manual.tagline} />

      <p className="crumb">
        <Link href="/manuals">Manuals</Link>
        {' / '}
        {manual.title}
      </p>

      <header className="studio-top">
        <div className="studio-top-text">
          <p className="studio-kicker">{genre?.label || 'Path'} · {manual.levelSpan}</p>
          <h1>{manual.title}</h1>
          <p className="studio-sub">
            Interactive path — click phases, expand checkpoints, mark chapters done. {manual.tagline}
          </p>
          <div className="manual-tag-row">
            {tags.map((tid) => {
              const t = getTag(tid)
              return t ? (
                <Link key={tid} href={`/tags/${tid}`} className="manual-tag" style={{ '--tag': t.color }}>
                  {t.label}
                </Link>
              ) : null
            })}
          </div>
          <div className="hero-actions">
            <button
              type="button"
              className={`btn ${bookmarked ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setBookmarked(toggleBookmark(manual.id))}
            >
              {bookmarked ? 'Bookmarked ★' : 'Bookmark'}
            </button>
            {(complete || earned) && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => downloadCertificate({ title: manual.title, accent, learner: 'You' })}
              >
                Certificate PNG
              </button>
            )}
            {earned && <span className="badge-pill">Path badge ✓</span>}
          </div>
        </div>
        <img className="studio-cover" src={manual.coverUrl} alt="" />
      </header>

      <div className="studio-stats">
        <Stat value={`~${totalWeeks || '—'} wk`} label="Typical span" />
        <Stat value={`${phases.length} phases`} label="Learning bands" />
        <Stat value={`${doneChapters}/${manual.chapters.length}`} label="Chapters done" />
        <Stat value={`${progress?.pct || 0}%`} label="Progress" />
      </div>

      <div className="studio-weight" aria-hidden="true">
        {phases.map((p) => (
          <button
            key={p.id}
            type="button"
            className="studio-weight-seg"
            style={{ flex: p.weeks || 1, background: accent, opacity: 0.35 + (p.index % 5) * 0.12 }}
            title={p.label}
            onClick={() => goPhase(p.index)}
          />
        ))}
      </div>
      <p className="studio-weight-caption">Relative time weight by phase — click a band to open Phase detail.</p>

      <div className="studio-tabs" role="tablist" aria-label="Manual views">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={`studio-tab${tab === t.id ? ' active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="studio-actions">
        <Link href={`/manuals/${manual.id}/chapters/${continueCh.id}`} className="btn btn-primary">
          {progress?.done ? 'Continue where you left off' : 'Start chapter 1'}
        </Link>
        {first && continueCh.id !== first.id && (
          <Link href={`/manuals/${manual.id}/chapters/${first.id}`} className="btn btn-ghost">
            Restart from ch.1
          </Link>
        )}
      </div>

      {tab === 'path' && (
        <section className="studio-panel">
          <h2>Learning path</h2>
          <p className="lede">Phase map for this manual. Download the SVG or jump into a phase below.</p>
          <div className="roadmap-star">
            <Roadmap manual={manual} />
          </div>
          <div className="studio-phase-rail">
            {phases.map((p) => (
              <button
                key={p.id}
                type="button"
                className="studio-phase-pill"
                onClick={() => goPhase(p.index)}
              >
                <span>Phase {p.index + 1}</span>
                <strong>{p.label}</strong>
                <small>{p.timing}</small>
              </button>
            ))}
          </div>
        </section>
      )}

      {tab === 'phase' && activePhase && detail && (
        <section className="studio-panel studio-phase-layout">
          <aside className="studio-phase-nav" aria-label="Phases">
            <h3>Phases</h3>
            {phases.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`studio-phase-btn${p.index === activePhase.index ? ' active' : ''}`}
                onClick={() => setPhaseIdx(p.index)}
              >
                <span className="studio-phase-num">Phase {p.index + 1}</span>
                <strong>{p.label}</strong>
                <small>{p.timing}</small>
              </button>
            ))}
          </aside>

          <div className="studio-phase-main">
            <div className="studio-phase-head">
              <span className="studio-pill">Phase {activePhase.index + 1}</span>
              <h2>{activePhase.label}</h2>
              <p className="studio-muted">{activePhase.timing}</p>
            </div>
            <p className="studio-goal">{detail.goal}</p>

            <div className="studio-card">
              <h3>Skills to build</h3>
              <ul>
                {(detail.skills.length ? detail.skills : ['Open the chapters in this phase and work the learn list.']).map(
                  (s) => (
                    <li key={s}>{s}</li>
                  ),
                )}
              </ul>
            </div>

            <div className="studio-card-grid">
              <div className="studio-card">
                <h3>Projects / do-this</h3>
                <ul>
                  {(detail.projects.length ? detail.projects : ['Ship the chapter practice for each step in this phase.']).map(
                    (s) => (
                      <li key={s}>{s}</li>
                    ),
                  )}
                </ul>
              </div>
              <div className="studio-card">
                <h3>Resources</h3>
                <ul>
                  {detail.resources.length ? (
                    detail.resources.map((r) => (
                      <li key={r.url || r.name}>
                        {r.url ? (
                          <a href={r.url} target="_blank" rel="noreferrer">
                            {r.name}
                          </a>
                        ) : (
                          r.name
                        )}
                        {r.type ? ` · ${r.type}` : ''}
                      </li>
                    ))
                  ) : (
                    <li>Check the Resources tab for the manual shelf.</li>
                  )}
                </ul>
              </div>
            </div>

            <Accordion title="Pass checkpoints" defaultOpen>
              <ul className="studio-check-list">
                {(detail.checkpoints.length
                  ? detail.checkpoints
                  : activePhase.chapters.map((c) => `Complete: ${c.title}`)
                ).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Accordion>

            {detail.pitfalls.length > 0 && (
              <Accordion title="Common pitfalls / tips">
                <ul>
                  {detail.pitfalls.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Accordion>
            )}

            <div className="studio-card">
              <h3>Chapters in this phase</h3>
              <div className="studio-chapter-links">
                {activePhase.chapters.map((c) => {
                  const done = isChapterDone(manual.id, c.id)
                  return (
                    <Link
                      key={c.id}
                      href={`/manuals/${manual.id}/chapters/${c.id}`}
                      className={`studio-chapter-link${done ? ' is-done' : ''}`}
                    >
                      <span>{done ? '✓' : String(c.n).padStart(2, '0')}</span>
                      <div>
                        <strong>{c.title}</strong>
                        <small>
                          {c.kind === 'checkpoint' ? 'checkpoint' : c.level}
                          {c.durationLabel ? ` · ${c.durationLabel}` : ` · ~${c.minutes} min`}
                        </small>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {tab === 'knowledge' && (
        <section className="studio-panel">
          <h2>Knowledge vault</h2>
          <p className="lede">Who it’s for, outcomes, and how to pace the work.</p>
          <div className="studio-card-grid">
            <div className="studio-card">
              <h3>Who it’s for</h3>
              <p>{manual.who}</p>
            </div>
            <div className="studio-card">
              <h3>You’ll walk away able to</h3>
              <ul>
                {manual.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
          {manual.pace && (
            <div className="studio-card" style={{ marginTop: '1rem' }}>
              <h3>Study pace</h3>
              <p>
                <strong>{manual.pace.hoursPerDay}</strong>
              </p>
              <ul>
                <li>Recommended: {manual.pace.recommended}</li>
                <li>Accelerated: {manual.pace.accelerated}</li>
                <li>Slow & steady: {manual.pace.slow}</li>
              </ul>
            </div>
          )}
        </section>
      )}

      {tab === 'watch' && (
        <section className="studio-panel">
          <h2>Watch before you grind</h2>
          <p className="lede">Eyes first — then open a chapter and check boxes.</p>
          {watchlist.length > 0 ? (
            <div className="video-grid compact-grid">
              {watchlist.map((v) => (
                <VideoCard key={v.youtubeId} {...v} compact />
              ))}
            </div>
          ) : (
            <p className="studio-muted">No curated videos for this path yet — use Resources.</p>
          )}
        </section>
      )}

      {tab === 'drills' && (
        <section className="studio-panel">
          <h2>All chapters</h2>
          <p className="lede">Click in. Mark done when you finish. Your browser keeps the streak.</p>
          <div className="chapter-cards">
            {manual.chapters.map((c, i) => {
              const chapterDone = isChapterDone(manual.id, c.id)
              return (
                <Link
                  key={c.id}
                  href={`/manuals/${manual.id}/chapters/${c.id}`}
                  className={`chapter-card${chapterDone ? ' is-done' : ''}`}
                >
                  <span className="chapter-card-num">
                    {chapterDone ? '✓' : String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="chapter-card-level">
                      {c.phase ? `${c.phase} · ` : ''}
                      {c.kind === 'checkpoint' ? 'checkpoint' : c.level}
                      {c.durationLabel ? ` · ${c.durationLabel}` : ` · ~${c.minutes} min`}
                    </p>
                    <h3>{c.title}</h3>
                    <p>{c.overview.slice(0, 110)}…</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {tab === 'resources' && (
        <section className="studio-panel">
          <h2>Resource library</h2>
          <p className="lede">Shelf for this craft — docs, tools, books, labs, videos.</p>
          <div className="resource-grid">
            <div className="resource-block">
              <h3>Docs & guides</h3>
              <ul>
                {(resources?.docs || []).map((d) => (
                  <li key={d.url}>
                    <a href={d.url} target="_blank" rel="noreferrer">
                      {d.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="resource-block">
              <h3>Tools</h3>
              <ul>
                {(resources?.tools || []).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="resource-block">
              <h3>Books & deep reads</h3>
              <ul>
                {(resources?.books || []).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="resource-block">
              <h3>Practice sandboxes</h3>
              <ul>
                {(resources?.practice || []).map((p) =>
                  typeof p === 'string' && p.startsWith('http') ? (
                    <li key={p}>
                      <a href={p} target="_blank" rel="noreferrer">
                        {p.replace(/^https?:\/\//, '')}
                      </a>
                    </li>
                  ) : (
                    <li key={p}>{p}</li>
                  ),
                )}
              </ul>
            </div>
            {resources?.videos?.length > 0 && (
              <div className="resource-block">
                <h3>Videos</h3>
                <ul>
                  {resources.videos.map((v) => (
                    <li key={v.url}>
                      <a href={v.url} target="_blank" rel="noreferrer">
                        {v.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <RelatedPaths manual={manual} all={manuals} />
      <ManualComments manualId={manual.id} />
    </div>
  )
}
