import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getChapter, genres } from '../data/manuals'
import LessonCard from '../components/LessonCard'
import VideoCard from '../components/VideoCard'
import { videosForChapter } from '../data/learnMedia'
import {
  isChapterDone,
  isChecklistChecked,
  setChapterDone,
  toggleChecklistItem,
} from '../lib/progress'

export default function Chapter() {
  const { id, chapterId } = useParams()
  const data = getChapter(id, chapterId)
  const [done, setDone] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [, setTick] = useState(0)

  useEffect(() => {
    setDone(isChapterDone(id, chapterId))
    setStepIndex(0)
  }, [id, chapterId])

  const chapterVideos = useMemo(() => {
    if (!data) return []
    const accent =
      data.manual.accent || genres.find((g) => g.id === data.manual.category)?.color || '#0F766E'
    return videosForChapter(data.chapter, accent)
  }, [data])

  if (!data) {
    return (
      <div className="wrap not-found">
        <h1>Chapter not found</h1>
        <Link to={`/manuals/${id}`} className="btn btn-primary">
          Back to manual
        </Link>
      </div>
    )
  }

  const { manual, chapter, index, prev, next } = data
  const kindLabel =
    chapter.kind === 'checkpoint' ? 'Checkpoint' : chapter.kind === 'guide' ? 'Guide' : 'Chapter'
  const accent = manual.accent || genres.find((g) => g.id === manual.category)?.color || '#0F766E'
  const steps = chapter.steps?.length ? chapter.steps : [{ title: chapter.title, body: chapter.overview }]
  const safeIndex = Math.min(stepIndex, steps.length - 1)
  const step = steps[safeIndex]
  const pathPct = Math.round(((index + (safeIndex + 1) / steps.length) / manual.chapters.length) * 100)

  function markDone() {
    setChapterDone(manual.id, chapter.id, true)
    setDone(true)
  }

  function markUndone() {
    setChapterDone(manual.id, chapter.id, false)
    setDone(false)
  }

  function goNextStep() {
    if (safeIndex < steps.length - 1) setStepIndex(safeIndex + 1)
    else if (!done) markDone()
  }

  return (
    <article className="wrap chapter-page chapter-card-mode">
      <p className="crumb">
        <Link to="/manuals">Manuals</Link>
        {' / '}
        <Link to={`/manuals/${manual.id}`}>{manual.title}</Link>
        {' / '}
        {kindLabel} {index + 1}
      </p>

      <header className="chapter-hero chapter-hero-compact">
        <p className="level-label">
          {chapter.phase ? `${chapter.phase} · ` : ''}
          {chapter.level}
          {chapter.durationLabel ? ` · ${chapter.durationLabel}` : ` · ~${chapter.minutes} min`}
          {' · '}
          {kindLabel} {index + 1} of {manual.chapters.length}
          {done ? ' · ✓ done' : ''}
        </p>
        <h1>{chapter.title}</h1>
        <p className="tagline">{chapter.overview}</p>
      </header>

      <div className="path-progress-wrap">
        <span>Path progress</span>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${pathPct}%` }} />
        </div>
        <span>{pathPct}%</span>
      </div>

      <LessonCard
        step={step}
        stepIndex={safeIndex}
        stepTotal={steps.length}
        pathPct={pathPct}
        accent={accent}
        fallbackImage={manual.cover || 'covers/playwright-cover.png'}
        onPrev={() => setStepIndex((i) => Math.max(0, i - 1))}
        onNext={goNextStep}
        onJump={setStepIndex}
      />

      {chapter.learn?.length > 0 && (
        <details className="chapter-side-details">
          <summary>Chapter learning outcomes</summary>
          <ul className="learn-list">
            {chapter.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      )}

      {chapterVideos.length > 0 && (
        <details className="chapter-side-details">
          <summary>Chapter videos</summary>
          <div className="video-grid compact-grid">
            {chapterVideos.map((v) => (
              <VideoCard key={v.youtubeId} {...v} compact />
            ))}
          </div>
        </details>
      )}

      {chapter.checklist?.length > 0 && (
        <section className="chapter-block checklist-block">
          <h2>Clear these before you leave</h2>
          <ul>
            {chapter.checklist.map((item) => (
              <li key={item}>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecklistChecked(manual.id, chapter.id, item)}
                    onChange={() => {
                      toggleChecklistItem(manual.id, chapter.id, item)
                      setTick((t) => t + 1)
                    }}
                  />{' '}
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}

      {chapter.practice && (
        <section className="practice-box chapter-practice">
          <p className="label">Side quest</p>
          <h3>{chapter.practice.title}</h3>
          <p>{chapter.practice.brief}</p>
        </section>
      )}

      <section className="chapter-complete">
        {!done ? (
          <button type="button" className="btn btn-primary" onClick={markDone}>
            Mark chapter complete ✓
          </button>
        ) : (
          <div className="complete-banner">
            <p>Chapter locked in. Nice.</p>
            <button type="button" className="btn btn-ghost" onClick={markUndone}>
              Undo
            </button>
          </div>
        )}
      </section>

      <nav className="chapter-nav" aria-label="Chapter">
        {prev ? (
          <Link to={`/manuals/${manual.id}/chapters/${prev.id}`} className="btn btn-ghost">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link to={`/manuals/${manual.id}`} className="btn btn-ghost">
          Manual home
        </Link>
        {next ? (
          <Link
            to={`/manuals/${manual.id}/chapters/${next.id}`}
            className="btn btn-primary"
            onClick={() => {
              if (!done) markDone()
            }}
          >
            {next.title} →
          </Link>
        ) : (
          <Link to="/manuals" className="btn btn-primary">
            Browse more manuals
          </Link>
        )}
      </nav>
    </article>
  )
}
