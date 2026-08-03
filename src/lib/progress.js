import { readJson, writeJson } from './storage'

const KEY = 'pathwise-progress-v1'

function readAll() {
  return readJson(KEY, {})
}

function writeAll(data) {
  writeJson(KEY, data)
}

export function getManualProgress(manualId) {
  const all = readAll()
  return all[manualId] || { done: {}, checklist: {} }
}

export function isChapterDone(manualId, chapterId) {
  return Boolean(getManualProgress(manualId).done[chapterId])
}

export function setChapterDone(manualId, chapterId, done = true) {
  const all = readAll()
  const cur = all[manualId] || { done: {}, checklist: {} }
  if (done) cur.done[chapterId] = true
  else delete cur.done[chapterId]
  all[manualId] = cur
  writeAll(all)
  return cur
}

export function toggleChecklistItem(manualId, chapterId, itemKey) {
  const all = readAll()
  const cur = all[manualId] || { done: {}, checklist: {} }
  const key = `${chapterId}::${itemKey}`
  cur.checklist[key] = !cur.checklist[key]
  all[manualId] = cur
  writeAll(all)
  return cur.checklist[key]
}

export function isChecklistChecked(manualId, chapterId, itemKey) {
  const key = `${chapterId}::${itemKey}`
  return Boolean(getManualProgress(manualId).checklist[key])
}

export function countDone(manualId, totalChapters) {
  const done = Object.keys(getManualProgress(manualId).done).length
  return { done, total: totalChapters, pct: totalChapters ? Math.round((done / totalChapters) * 100) : 0 }
}

export function getContinueChapter(manual) {
  const prog = getManualProgress(manual.id)
  const next = manual.chapters.find((c) => !prog.done[c.id])
  return next || manual.chapters[0]
}
