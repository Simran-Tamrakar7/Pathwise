'use client'

import { useState } from 'react'
import { ONBOARD_SKILLS, saveOnboarding, skipOnboarding } from '../lib/onboarding'

const LEVELS = [
  { id: 'new', label: 'New to it' },
  { id: 'some', label: 'Some experience' },
  { id: 'pro', label: 'Pretty solid' },
]

export default function Onboarding({ onDone }) {
  const [levels, setLevels] = useState({})

  function setLevel(skillId, level) {
    setLevels((prev) => ({ ...prev, [skillId]: level }))
  }

  function finish() {
    saveOnboarding(levels)
    onDone?.()
  }

  function skip() {
    skipOnboarding()
    onDone?.()
  }

  return (
    <div className="onboard-overlay" role="dialog" aria-labelledby="onboard-title">
      <div className="onboard-card">
        <p className="hero-kicker">Welcome</p>
        <h2 id="onboard-title">Quick pulse check</h2>
        <p className="onboard-lede">
          One pass — we’ll reorder recommendations. Nothing leaves this browser.
        </p>
        <ul className="onboard-skills">
          {ONBOARD_SKILLS.map((skill) => (
            <li key={skill.id}>
              <p className="onboard-skill-label">{skill.label}</p>
              <div className="onboard-levels" role="group" aria-label={skill.label}>
                {LEVELS.map((lv) => (
                  <button
                    key={lv.id}
                    type="button"
                    className={`onboard-level${levels[skill.id] === lv.id ? ' active' : ''}`}
                    onClick={() => setLevel(skill.id, lv.id)}
                  >
                    {lv.label}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={finish}>
            Show my paths
          </button>
          <button type="button" className="btn btn-ghost" onClick={skip}>
            Skip for now
          </button>
        </div>
      </div>
    </div>
  )
}
