import { tagsForManual } from '../data/tags'

/** Same genre first, then overlapping skill tags. */
export function relatedManuals(manual, all, limit = 4) {
  if (!manual) return []
  const mine = new Set(tagsForManual(manual))
  return all
    .filter((m) => m.id !== manual.id)
    .map((m) => {
      let score = 0
      if (m.category === manual.category) score += 5
      for (const t of tagsForManual(m)) if (mine.has(t)) score += 1
      return { m, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.m)
}
