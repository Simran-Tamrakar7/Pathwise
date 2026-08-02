import { readJson, writeJson } from './storage'

const SHOWCASE_KEY = 'pathwise-showcase-v1'
const COMMENTS_KEY = 'pathwise-comments-v1'

export function getShowcaseLocal() {
  return readJson(SHOWCASE_KEY, [])
}

export function addShowcase({ name, manualId, built }) {
  const item = {
    id: `local-${Date.now()}`,
    name: String(name || 'Anonymous').slice(0, 40),
    manualId,
    built: String(built || '').slice(0, 280),
    at: new Date().toISOString().slice(0, 10),
  }
  const next = [item, ...getShowcaseLocal()].slice(0, 40)
  writeJson(SHOWCASE_KEY, next)
  return item
}

export function getComments(manualId) {
  const all = readJson(COMMENTS_KEY, {})
  return all[manualId] || []
}

export function addComment(manualId, { name, body }) {
  const all = readJson(COMMENTS_KEY, {})
  const list = all[manualId] || []
  const item = {
    id: `c-${Date.now()}`,
    name: String(name || 'Learner').slice(0, 40),
    body: String(body || '').slice(0, 500),
    at: new Date().toISOString(),
  }
  all[manualId] = [item, ...list].slice(0, 50)
  writeJson(COMMENTS_KEY, all)
  return item
}
