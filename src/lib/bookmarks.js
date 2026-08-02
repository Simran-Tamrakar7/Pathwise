import { readJson, writeJson } from './storage'

const KEY = 'pathwise-bookmarks-v1'

export function getBookmarks() {
  return new Set(readJson(KEY, []))
}

export function isBookmarked(manualId) {
  return getBookmarks().has(manualId)
}

export function toggleBookmark(manualId) {
  const set = getBookmarks()
  if (set.has(manualId)) set.delete(manualId)
  else set.add(manualId)
  writeJson(KEY, [...set])
  return set.has(manualId)
}
