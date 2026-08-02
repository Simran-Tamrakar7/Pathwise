import { readJson, writeJson } from './storage'

const KEY = 'pathwise-analytics-v1'
const MAX = 200

/** Optional Plausible: set NEXT_PUBLIC_PLAUSIBLE_DOMAIN (no protocol). */
export function initAnalytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain || typeof document === 'undefined') return
  if (document.querySelector('script[data-pathwise-plausible]')) return
  const s = document.createElement('script')
  s.defer = true
  s.dataset.domain = domain
  s.dataset.pathwisePlausible = '1'
  s.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(s)
}

export function track(name, props = {}) {
  const all = readJson(KEY, { events: [] })
  all.events = [{ name, props, at: Date.now() }, ...(all.events || [])].slice(0, MAX)
  writeJson(KEY, all)
  try {
    window.plausible?.(name, { props })
  } catch {
    /* ignore */
  }
}

export function getAnalytics() {
  return readJson(KEY, { events: [] })
}

export function analyticsRollup() {
  const { events } = getAnalytics()
  const counts = {}
  for (const e of events) {
    counts[e.name] = (counts[e.name] || 0) + 1
  }
  return { total: events.length, counts, recent: events.slice(0, 20) }
}
