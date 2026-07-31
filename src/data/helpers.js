/** Path helpers for GitHub Pages base. */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`

export const genres = [
  { id: 'all', label: 'All', blurb: 'Every path in the library.' },
  { id: 'automation', label: 'Automation', blurb: 'QA, E2E, APIs, pipelines.' },
  { id: 'design', label: 'Design', blurb: 'Visual craft, Figma, product UI.' },
  { id: 'ai', label: 'AI & Prompts', blurb: 'Talk to models like a pro.' },
  { id: 'foundations', label: 'Foundations', blurb: 'Languages, Git, data.' },
  { id: 'quality', label: 'Quality Craft', blurb: 'A11y, security, mobile, Docker.' },
  { id: 'career', label: 'Career', blurb: 'Resume, portfolio, job hunt.' },
  { id: 'soft-skills', label: 'Soft Skills', blurb: 'Communicate, focus, interview.' },
]

/** Build a book-style chapter from a compact definition. */
export function ch(def) {
  return {
    id: def.id,
    level: def.level,
    title: def.title,
    minutes: def.minutes ?? 20,
    durationLabel: def.durationLabel ?? null,
    phase: def.phase ?? null,
    kind: def.kind ?? 'chapter', // chapter | checkpoint | guide
    overview: def.overview,
    learn: def.learn ?? [],
    steps: (def.steps ?? []).map((s, i) =>
      typeof s === 'string'
        ? { title: `Step ${i + 1}`, body: s, doThis: null, tip: null, code: null, items: null }
        : {
            title: s.title,
            body: s.body ?? '',
            doThis: s.doThis ?? null,
            tip: s.tip ?? null,
            code: s.code ?? null,
            items: s.items ?? null,
          },
    ),
    checklist: def.checklist ?? [],
    practice: def.practice ?? null,
    links: def.links ?? [],
    citations: def.citations ?? [],
    /** [{ type, name, url, lang, free }] */
    resources: def.resources ?? [],
    note: def.note ?? null,
  }
}

export function buildRoadmap(chapters) {
  return chapters.map((c, i) => ({
    id: c.id,
    n: i + 1,
    title: c.title,
    level: c.level,
    minutes: c.minutes,
    phase: c.phase,
    kind: c.kind,
    durationLabel: c.durationLabel,
  }))
}

export function r(type, name, url, lang = 'EN', free = true) {
  return { type, name, url, lang, free }
}
