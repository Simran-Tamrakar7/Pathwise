'use client'

import { useState } from 'react'
import DocumentHead from '../components/DocumentHead'
import CvMaker from '../components/CvMaker'
import '../components/CvMaker.css'

const actions = [
  { id: 'explain', label: 'Explain' },
  { id: 'eli5', label: 'ELI5' },
  { id: 'summarize', label: 'Summarize' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'flash', label: 'Flashcards' },
  { id: 'notes', label: 'Study notes' },
  { id: 'next', label: 'Next topic' },
  { id: 'plan', label: '7-day plan' },
]

function coach(action, input) {
  const topic = input.trim() || 'Playwright auto-waiting'
  switch (action) {
    case 'explain':
      return `${topic}\n\nThink of Playwright actions as polite guests: they wait until the element is present, visible, finished moving, enabled, and ready — then they interact. Fewer flakes than sleep()-heavy suites.\n\nTip: Prefer role locators so waits attach to the same tree assistive tech uses.`
    case 'eli5':
      return `Imagine a door that only opens when someone is standing still and ready to talk. Playwright waits for that “ready” moment before knocking. Old tools sometimes knock while the person is still spinning.`
    case 'summarize':
      return `• Core idea: ${topic}\n• Why it matters: less wasted time, fewer false failures\n• Practice: one tiny project today\n• Check: teach it in 60 seconds`
    case 'quiz':
      return `1) What five actionability checks does Playwright auto-wait for?\n2) Why is get_by_role often better than CSS?\n3) What problem does storage_state solve?\n4) How do UI + API assertions differ?\n5) Name two CI flake debugging artifacts.\n\nAnswers: (1) attached/visible/stable/enabled/receives events (2) accessibility tree (3) skip repeated UI login (4) UI can look right while data didn’t persist (5) traces, videos/screenshots`
    case 'flash':
      return `Front: Auto-waiting → Back: Actionability before interact\nFront: BrowserContext → Back: Isolated session\nFront: POM → Back: Business-named page methods\nFront: page.route → Back: Intercept/mock network\nFront: Trace Viewer → Back: Time-travel debug for CI fails`
    case 'notes':
      return `Study notes — ${topic}\n\nDefinition: one-sentence mental model.\nWhy companies care: reliability + hiring signal.\nDo next: read the matching chapter, write one failing test then make it green, capture a trace once.`
    case 'next':
      return `Next: Page Object Model after locators/waits. You can find and wait — POM teaches how to scale without copy-paste chaos.`
    case 'plan':
      return `Day 1: Background\nDay 2: Locators\nDay 3: Auto-waiting + assertions\nDay 4: POM skeleton\nDay 5: API hybrid\nDay 6: CI workflow\nDay 7: Capstone slice`
    default:
      return 'Pick an action and run the coach.'
  }
}

function CoachPanel() {
  const [input, setInput] = useState('Playwright auto-waiting and why flakes drop')
  const [active, setActive] = useState('explain')
  const [output, setOutput] = useState('')

  return (
    <>
      <div className="ai-actions">
        {actions.map((a) => (
          <button
            key={a.id}
            type="button"
            className={`btn ${active === a.id ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setActive(a.id)}
          >
            {a.label}
          </button>
        ))}
      </div>

      <section className="vivid-card ai-card">
        <label className="break-kicker" htmlFor="ai-input">
          Topic or paste
        </label>
        <textarea
          id="ai-input"
          className="notes-body"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
        />
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginTop: '0.75rem' }}
          onClick={() => setOutput(coach(active, input))}
        >
          Run coach
        </button>
      </section>

      {output && (
        <section className="vivid-card ai-card" style={{ marginTop: '1rem' }}>
          <p className="break-kicker">Response</p>
          <pre className="ai-output">{output}</pre>
        </section>
      )}
    </>
  )
}

export default function AI() {
  const [tab, setTab] = useState('coach')

  return (
    <div className={`wrap ai-page ${tab === 'cv' ? 'ai-page--cv' : ''}`}>
      <DocumentHead
        title={tab === 'cv' ? 'CV Maker' : 'AI Coach'}
        description="Local learning coach and CV maker — Lumina Pathwise."
      />
      <header className="section-head" style={{ marginBottom: '1.25rem' }}>
        <p className="hero-kicker">Personal tools · offline-first</p>
        <h1>{tab === 'cv' ? 'CV Maker' : 'AI Coach'}</h1>
        <p>
          {tab === 'cv'
            ? 'Build a clean resume with live preview, six templates, local save, and Print / PDF — Oh My CV vibes, no account needed.'
            : 'Local coaching modes that work without an API. Swap in an LLM later without changing the UX.'}
        </p>
      </header>

      <div className="ai-tabs" role="tablist" aria-label="AI tools">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'coach'}
          className={`btn ${tab === 'coach' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setTab('coach')}
        >
          Coach
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'cv'}
          className={`btn ${tab === 'cv' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setTab('cv')}
        >
          CV Maker
        </button>
      </div>

      {tab === 'coach' ? <CoachPanel /> : <CvMaker />}
    </div>
  )
}
