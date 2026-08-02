/** Path helpers for GitHub Pages base. */
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`

export const genres = [
  { id: 'all', label: 'All', blurb: 'Every path in the library.', color: '#0B3D2E' },
  { id: 'automation', label: 'Automation', blurb: 'QA, E2E, APIs, pipelines.', color: '#0F766E' },
  { id: 'quality', label: 'Quality Craft', blurb: 'Testing craft, a11y, perf, security.', color: '#0369A1' },
  { id: 'delivery', label: 'Delivery', blurb: 'Agile, PM, product, work tracking.', color: '#C2410C' },
  { id: 'design', label: 'Design', blurb: 'Visual craft, Figma, product UI.', color: '#B45309' },
  { id: 'ai', label: 'AI & Prompts', blurb: 'Talk to models like a pro.', color: '#0D9488' },
  { id: 'foundations', label: 'Foundations', blurb: 'Languages, Git, data.', color: '#A16207' },
  { id: 'ops', label: 'Ops & Systems', blurb: 'CLI, cloud, observability, docs.', color: '#1D4ED8' },
  { id: 'career', label: 'Career', blurb: 'Resume, portfolio, job hunt.', color: '#BE123C' },
  { id: 'soft-skills', label: 'Soft Skills', blurb: 'Communicate, lead, collaborate.', color: '#15803D' },
]

/** Normalize a lesson-step resource pill. */
export function stepResource(label, url, kind = 'Docs') {
  return { label, url, kind }
}

/** Build a book-style chapter from a compact definition. */
export function ch(def) {
  return {
    id: def.id,
    level: def.level,
    title: def.title,
    minutes: def.minutes ?? 20,
    durationLabel: def.durationLabel ?? null,
    phase: def.phase ?? null,
    kind: def.kind ?? 'chapter',
    overview: def.overview,
    learn: def.learn ?? [],
    steps: (def.steps ?? []).map((s, i) => normalizeStep(s, i)),
    checklist: def.checklist ?? [],
    practice: def.practice ?? null,
    links: def.links ?? [],
    citations: def.citations ?? [],
    resources: def.resources ?? [],
    note: def.note ?? null,
  }
}

function normalizeStep(s, i) {
  if (typeof s === 'string') {
    return {
      title: `Step ${i + 1}`,
      body: s,
      learnMore: null,
      image: null,
      resources: [],
      quiz: null,
      tryIt: null,
      doThis: null,
      tip: null,
      code: null,
      items: null,
    }
  }
  return {
    title: s.title ?? `Step ${i + 1}`,
    body: s.body ?? '',
    learnMore: s.learnMore ?? null,
    image: s.image
      ? {
          src: s.image.src ?? s.image,
          alt: s.image.alt ?? s.title ?? `Step ${i + 1}`,
          stickies: Array.isArray(s.image.stickies) ? s.image.stickies : null,
        }
      : null,
    resources: (s.resources ?? []).map((r) =>
      typeof r === 'string'
        ? { label: 'Link', url: r, kind: 'Link' }
        : { label: r.label ?? r.name ?? 'Link', url: r.url, kind: r.kind ?? r.type ?? 'Docs' },
    ),
    quiz: s.quiz
      ? {
          question: s.quiz.question,
          options: s.quiz.options ?? [],
          answer: s.quiz.answer ?? 0,
          explain: s.quiz.explain ?? null,
        }
      : null,
    tryIt: s.tryIt
      ? {
          prompt: s.tryIt.prompt ?? 'Try it',
          code: s.tryIt.code ?? '',
          result: s.tryIt.result ?? '',
        }
      : null,
    doThis: s.doThis ?? null,
    tip: s.tip ?? null,
    code: s.code ?? null,
    items: s.items ?? null,
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
