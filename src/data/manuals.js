import { genres, buildRoadmap, asset } from './helpers'
import { automationManuals } from './manuals/automation-a'
import { automationManualsB } from './manuals/automation-b'
import { designManuals } from './manuals/design'
import { foundationManuals } from './manuals/foundations'
import { aiManuals, softSkillManuals } from './manuals/ai-soft'

/** @deprecated use genres — kept for older imports */
export const categories = genres

function finalize(manual) {
  const chapters = manual.chapters
  return {
    ...manual,
    coverUrl: asset(manual.cover),
    roadmap: buildRoadmap(chapters),
    roadmapSlug: `${manual.id}-roadmap`,
  }
}

export const manuals = [
  ...automationManuals,
  ...automationManualsB,
  ...designManuals,
  ...aiManuals,
  ...foundationManuals,
  ...softSkillManuals,
].map(finalize)

export function getManual(id) {
  return manuals.find((m) => m.id === id)
}

export function getChapter(manualId, chapterId) {
  const manual = getManual(manualId)
  if (!manual) return null
  const chapter = manual.chapters.find((c) => c.id === chapterId)
  if (!chapter) return null
  const index = manual.chapters.findIndex((c) => c.id === chapterId)
  return {
    manual,
    chapter,
    index,
    prev: manual.chapters[index - 1] ?? null,
    next: manual.chapters[index + 1] ?? null,
  }
}

export function getManualsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return manuals
  return manuals.filter((m) => m.category === categoryId)
}

export { genres, asset }
