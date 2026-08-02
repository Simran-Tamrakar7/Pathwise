/** Skill tags for discoverability — derived, no per-manual edits required. */

export const skillTags = [
  {
    id: 'beginner-friendly',
    label: 'Beginner-friendly',
    blurb: 'Zero → comfortable without a CS degree.',
    color: '#15803D',
  },
  {
    id: 'under-30',
    label: 'Under 30 min chapters',
    blurb: 'Most chapters fit a short focus block.',
    color: '#0369A1',
  },
  {
    id: 'job-ready',
    label: 'Job-ready track',
    blurb: 'Built to ship portfolio-grade skills.',
    color: '#0F766E',
  },
  {
    id: 'no-code-light',
    label: 'Light on code',
    blurb: 'More craft/process than syntax.',
    color: '#B45309',
  },
  {
    id: 'hands-on',
    label: 'Hands-on labs',
    blurb: 'Practice and sandboxes front and center.',
    color: '#C2410C',
  },
  {
    id: 'ai-era',
    label: 'AI-era skills',
    blurb: 'Prompts, copilots, modern workflows.',
    color: '#0D9488',
  },
]

const LIGHT_CODE = new Set(['design', 'soft-skills', 'career', 'delivery'])
const AI = new Set(['ai'])

export function tagsForManual(manual) {
  if (!manual) return []
  const tags = []
  const level = (manual.levelSpan || '').toLowerCase()
  if (level.includes('zero') || level.includes('beginner') || level.includes('new')) {
    tags.push('beginner-friendly')
  }
  const mins = manual.chapters?.map((c) => c.minutes).filter(Boolean) || []
  if (mins.length && mins.filter((m) => m <= 30).length / mins.length >= 0.6) {
    tags.push('under-30')
  }
  if (level.includes('job') || level.includes('pro') || (manual.chapters?.length || 0) >= 12) {
    tags.push('job-ready')
  }
  if (LIGHT_CODE.has(manual.category)) tags.push('no-code-light')
  if (AI.has(manual.category) || /prompt|chatgpt|ai/i.test(manual.title + manual.tagline)) {
    tags.push('ai-era')
  }
  if (manual.chapters?.some((c) => c.practice) || (manual.resources?.practice?.length || 0) > 0) {
    tags.push('hands-on')
  }
  return [...new Set(tags)]
}

export function manualsWithTag(manuals, tagId) {
  return manuals.filter((m) => tagsForManual(m).includes(tagId))
}

export function getTag(id) {
  return skillTags.find((t) => t.id === id)
}
