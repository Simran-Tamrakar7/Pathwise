import { readJson, writeJson } from './storage'
import { countDone } from './progress'
import { track } from './analytics'

const KEY = 'pathwise-badges-v1'

export function getBadges() {
  return readJson(KEY, {})
}

export function hasBadge(manualId) {
  return Boolean(getBadges()[manualId])
}

/** Unlock path-complete badge if all chapters done. Returns badge or null. */
export function maybeUnlockPathBadge(manual) {
  if (!manual?.chapters?.length) return null
  const { pct } = countDone(manual.id, manual.chapters.length)
  if (pct < 100) return null
  const all = getBadges()
  if (all[manual.id]) return all[manual.id]
  const badge = {
    manualId: manual.id,
    title: manual.title,
    earnedAt: new Date().toISOString(),
  }
  all[manual.id] = badge
  writeJson(KEY, all)
  track('badge_earned', { manualId: manual.id })
  return badge
}

export function listBadges() {
  return Object.values(getBadges()).sort((a, b) => (b.earnedAt || '').localeCompare(a.earnedAt || ''))
}
