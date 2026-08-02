import { genres, buildRoadmap, asset } from './helpers'
import { automationManuals } from './manuals/automation-a'
import { automationManualsB } from './manuals/automation-b'
import { playwrightPythonManual } from './manuals/playwright-python'
import { designManuals } from './manuals/design'
import { designExtraManuals } from './manuals/design-extra'
import { foundationManuals } from './manuals/foundations'
import { aiManuals, softSkillManuals } from './manuals/ai-soft'
import { softExtraManuals } from './manuals/soft-extra'
import { qualityManuals } from './manuals/quality'
import { qaExtraManuals } from './manuals/qa-extra'
import { careerManuals } from './manuals/career'
import { deliveryManuals } from './manuals/delivery'
import { opsExtraManuals } from './manuals/ops-extra'
import { extrasPackManuals } from './manuals/extras-pack'
import { practicalPackManuals } from './manuals/practical-pack'

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
  playwrightPythonManual,
  ...automationManualsB,
  ...qualityManuals,
  ...qaExtraManuals,
  ...deliveryManuals,
  ...designManuals,
  ...designExtraManuals,
  ...aiManuals,
  ...foundationManuals,
  ...opsExtraManuals,
  ...careerManuals,
  ...softSkillManuals,
  ...softExtraManuals,
  ...extrasPackManuals,
  ...practicalPackManuals,
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
