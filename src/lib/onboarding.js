import { readJson, writeJson } from './storage'

const KEY = 'pathwise-onboarding-v1'

/** @typedef {'new' | 'some' | 'pro'} Level */

export const ONBOARD_SKILLS = [
  { id: 'automation', label: 'Test automation', categories: ['automation', 'quality'] },
  { id: 'code', label: 'Coding / foundations', categories: ['foundations', 'ops'] },
  { id: 'design', label: 'Design / UI', categories: ['design'] },
  { id: 'ai', label: 'AI & prompts', categories: ['ai'] },
  { id: 'career', label: 'Career / soft skills', categories: ['career', 'soft-skills', 'delivery'] },
]

export function getOnboarding() {
  return readJson(KEY, { done: false, levels: {} })
}

export function isOnboardingDone() {
  return Boolean(getOnboarding().done)
}

/** @param {Record<string, Level>} levels */
export function saveOnboarding(levels) {
  writeJson(KEY, { done: true, levels, at: Date.now() })
  return getOnboarding()
}

export function skipOnboarding() {
  writeJson(KEY, { done: true, levels: {}, skipped: true, at: Date.now() })
}

/** Prefer categories the learner marked new/some; deprioritize "pro" for first recs. */
export function recommendManuals(manuals, limit = 6) {
  const { levels } = getOnboarding()
  const score = (m) => {
    let s = 0
    for (const skill of ONBOARD_SKILLS) {
      if (!skill.categories.includes(m.category)) continue
      const lv = levels[skill.id]
      if (lv === 'new') s += 3
      else if (lv === 'some') s += 2
      else if (lv === 'pro') s += 0.5
    }
    if (m.id === 'playwright') s += 1.5
    return s
  }
  return [...manuals].sort((a, b) => score(b) - score(a)).slice(0, limit)
}
