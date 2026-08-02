import { readJson, writeJson } from './storage'

const KEY = 'pathwise-notes-v1'

function noteKey(manualId, chapterId, stepIndex) {
  return `${manualId}::${chapterId}::${stepIndex}`
}

export function getStepNote(manualId, chapterId, stepIndex) {
  return readJson(KEY, {})[noteKey(manualId, chapterId, stepIndex)] || ''
}

export function setStepNote(manualId, chapterId, stepIndex, text) {
  const all = readJson(KEY, {})
  const k = noteKey(manualId, chapterId, stepIndex)
  const trimmed = String(text || '').slice(0, 2000)
  if (trimmed) all[k] = trimmed
  else delete all[k]
  writeJson(KEY, all)
  return trimmed
}
