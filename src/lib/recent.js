import { readJson, writeJson } from './storage'

const KEY = 'pathwise-recent-v1'
const MAX = 8

/** @returns {{ manualId: string, chapterId?: string, at: number }[]} */
export function getRecent() {
  return readJson(KEY, [])
}

export function trackView(manualId, chapterId) {
  if (!manualId) return getRecent()
  const next = [
    { manualId, chapterId: chapterId || undefined, at: Date.now() },
    ...getRecent().filter((r) => !(r.manualId === manualId && (r.chapterId || '') === (chapterId || ''))),
  ].slice(0, MAX)
  writeJson(KEY, next)
  return next
}
