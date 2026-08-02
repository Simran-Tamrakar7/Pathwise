import { readJson, writeJson } from './storage'
import { track } from './analytics'

const KEY = 'pathwise-feedback-v1'

function fbKey(manualId, chapterId, stepIndex) {
  return `${manualId}::${chapterId}::${stepIndex}`
}

/** @returns {'up' | 'down' | null} */
export function getStepFeedback(manualId, chapterId, stepIndex) {
  return readJson(KEY, {})[fbKey(manualId, chapterId, stepIndex)] || null
}

/** @param {'up' | 'down'} value */
export function setStepFeedback(manualId, chapterId, stepIndex, value) {
  const all = readJson(KEY, {})
  const k = fbKey(manualId, chapterId, stepIndex)
  all[k] = value
  writeJson(KEY, all)
  track('lesson_feedback', { manualId, chapterId, step: stepIndex, value })
  return value
}

export function feedbackSummary() {
  const all = readJson(KEY, {})
  let up = 0
  let down = 0
  for (const v of Object.values(all)) {
    if (v === 'up') up += 1
    else if (v === 'down') down += 1
  }
  return { up, down, total: up + down }
}
