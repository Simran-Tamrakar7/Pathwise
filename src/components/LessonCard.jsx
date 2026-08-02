'use client'

import { useEffect, useMemo, useState } from 'react'
import StickyScene, { defaultStickies, playwrightCoverStickies } from './StickyScene'

/**
 * One self-contained lesson step card.
 * Data-driven: body, learnMore, image, resources[], quiz | tryIt.
 */
export default function LessonCard({
  step,
  stepIndex,
  stepTotal,
  pathPct,
  accent = '#0F766E',
  fallbackImage = 'covers/playwright-cover.png',
  onPrev,
  onNext,
  onJump,
  note = '',
  onNoteChange,
  feedback = null,
  onFeedback,
  sceneKey,
}) {
  const [more, setMore] = useState(false)
  const [picked, setPicked] = useState(null)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    setMore(false)
    setPicked(null)
    setShowResult(false)
  }, [stepIndex, step?.title])

  const imgPath = step.image?.src || fallbackImage

  const stickies = useMemo(() => {
    if (step.image?.stickies?.length) return step.image.stickies
    if (String(imgPath).includes('playwright-cover')) return playwrightCoverStickies
    return defaultStickies(step)
  }, [step, imgPath])

  const quizOk = step.quiz && picked !== null ? picked === step.quiz.answer : null

  return (
    <article className="lesson-card" style={{ '--accent': accent }}>
      <div className="lesson-card-progress">
        <div className="progress-bar thin" aria-label={`${pathPct} percent through path`}>
          <div className="progress-bar-fill" style={{ width: `${pathPct}%` }} />
        </div>
        <p className="lesson-card-step-label">
          Step {stepIndex + 1} of {stepTotal}
        </p>
      </div>

      <div className="lesson-dots" role="tablist" aria-label="Lesson steps">
        {Array.from({ length: stepTotal }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === stepIndex}
            aria-label={`Go to step ${i + 1}`}
            className={`lesson-dot${i === stepIndex ? ' active' : ''}${i < stepIndex ? ' done' : ''}`}
            onClick={() => onJump?.(i)}
          />
        ))}
      </div>

      <h2 className="lesson-card-title">{step.title}</h2>

      <p className="lesson-card-body">{step.body}</p>

      {step.learnMore && (
        <div className="lesson-more">
          <button type="button" className="lesson-more-btn" onClick={() => setMore((v) => !v)}>
            {more ? 'Hide extra depth' : 'Learn more'}
          </button>
          {more && <p className="lesson-more-text">{step.learnMore}</p>}
        </div>
      )}

      {step.items?.length > 0 && (
        <ul className="lesson-bullets">
          {step.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="lesson-visual lesson-visual-sticky">
        <StickyScene
          stickies={stickies}
          sceneKey={sceneKey || `${imgPath}:${stepIndex}`}
          title={step.title}
        />
      </div>

      {step.resources?.length > 0 && (
        <div className="lesson-resources" aria-label="Linked resources">
          {step.resources.map((r) => (
            <a
              key={`${r.label}-${r.url}`}
              className="lesson-pill"
              href={r.url}
              target="_blank"
              rel="noreferrer"
            >
              {r.kind || r.label}
            </a>
          ))}
        </div>
      )}

      {step.quiz && (
        <div className="lesson-interactive">
          <p className="lesson-interactive-label">Quick check</p>
          <p className="lesson-quiz-q">{step.quiz.question}</p>
          <div className="lesson-quiz-options">
            {step.quiz.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                className={`lesson-quiz-opt${picked === i ? ' picked' : ''}${
                  picked !== null && i === step.quiz.answer ? ' correct' : ''
                }${picked === i && i !== step.quiz.answer ? ' wrong' : ''}`}
                onClick={() => setPicked(i)}
                disabled={picked !== null}
              >
                {opt}
              </button>
            ))}
          </div>
          {picked !== null && (
            <p className={`lesson-quiz-feedback${quizOk ? ' ok' : ' bad'}`}>
              {quizOk ? 'Correct.' : 'Not quite — see the highlighted answer.'}
              {step.quiz.explain ? ` ${step.quiz.explain}` : ''}
            </p>
          )}
        </div>
      )}

      {!step.quiz && step.tryIt && (
        <div className="lesson-interactive">
          <p className="lesson-interactive-label">Try it</p>
          <p className="lesson-quiz-q">{step.tryIt.prompt}</p>
          <pre className="code-block lesson-try-code">
            <code>{step.tryIt.code}</code>
          </pre>
          <button type="button" className="btn btn-ghost" onClick={() => setShowResult((v) => !v)}>
            {showResult ? 'Hide result' : 'Show example result'}
          </button>
          {showResult && (
            <pre className="code-block lesson-try-result">
              <code>{step.tryIt.result}</code>
            </pre>
          )}
        </div>
      )}

      {!step.quiz && !step.tryIt && step.code && (
        <div className="lesson-interactive">
          <p className="lesson-interactive-label">Example</p>
          <pre className="code-block">
            <code>{step.code}</code>
          </pre>
        </div>
      )}

      {step.doThis && (
        <div className="do-this lesson-dothis">
          <p className="label">Do this now</p>
          <p>{step.doThis}</p>
        </div>
      )}

      {step.tip && (
        <p className="tip">
          <strong>Pro tip:</strong> {step.tip}
        </p>
      )}

      {onNoteChange && (
        <label className="lesson-note">
          <span className="lesson-note-label">Your note</span>
          <textarea
            value={note}
            onChange={(e) => onNoteChange(e.target.value)}
            rows={3}
            placeholder="Jot something for future-you…"
          />
        </label>
      )}

      {onFeedback && (
        <div className="lesson-feedback" role="group" aria-label="Was this step clear?">
          <span>Was this step clear?</span>
          <button
            type="button"
            className={`fb-btn${feedback === 'up' ? ' active' : ''}`}
            onClick={() => onFeedback('up')}
            aria-pressed={feedback === 'up'}
          >
            Yes
          </button>
          <button
            type="button"
            className={`fb-btn${feedback === 'down' ? ' active' : ''}`}
            onClick={() => onFeedback('down')}
            aria-pressed={feedback === 'down'}
          >
            Needs work
          </button>
        </div>
      )}

      <nav className="lesson-card-nav" aria-label="Lesson step">
        <button type="button" className="btn btn-ghost" onClick={onPrev} disabled={stepIndex === 0}>
          ← Prev
        </button>
        <button type="button" className="btn btn-primary" onClick={onNext}>
          {stepIndex >= stepTotal - 1 ? 'Finish chapter →' : 'Next →'}
        </button>
      </nav>
    </article>
  )
}
