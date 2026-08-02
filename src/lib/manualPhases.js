/** Group manual chapters into phase bands for the studio roadmap UI. */

export function phaseFromLevel(level) {
  if (level === 'beginner') return 'Foundations'
  if (level === 'intermediate') return 'Core craft'
  if (level === 'advanced') return 'Pro level'
  return 'Path'
}

export function groupPhases(chapters) {
  const groups = []
  chapters.forEach((c, i) => {
    const label = c.phase || phaseFromLevel(c.level)
    const last = groups[groups.length - 1]
    const entry = { ...c, n: i + 1 }
    if (last && last.label === label) last.chapters.push(entry)
    else groups.push({ id: `phase-${groups.length}`, label, chapters: [entry] })
  })
  return groups.map((g, i) => {
    const minutes = g.chapters.reduce((n, c) => n + (c.minutes || 0), 0)
    const weeks = Math.max(1, Math.round(minutes / (5 * 60)))
    return {
      ...g,
      index: i,
      minutes,
      weeks,
      timing: `~${weeks} wk · ${g.chapters.length} steps · ${minutes} min`,
    }
  })
}

export function phaseDetail(phase) {
  const skills = []
  const projects = []
  const resources = []
  const checkpoints = []
  const pitfalls = []
  const seen = { skills: new Set(), projects: new Set(), resources: new Set() }

  for (const c of phase.chapters) {
    for (const item of c.learn || []) {
      if (!seen.skills.has(item)) {
        seen.skills.add(item)
        skills.push(item)
      }
    }
    if (c.practice?.title) {
      const line = c.practice.brief ? `${c.practice.title} — ${c.practice.brief}` : c.practice.title
      if (!seen.projects.has(line)) {
        seen.projects.add(line)
        projects.push(line)
      }
    }
    for (const step of c.steps || []) {
      if (step.doThis && !seen.projects.has(step.doThis)) {
        seen.projects.add(step.doThis)
        projects.push(step.doThis)
      }
      if (step.tip) pitfalls.push(step.tip)
    }
    for (const row of c.resources || []) {
      const key = row.url || row.name
      if (key && !seen.resources.has(key)) {
        seen.resources.add(key)
        resources.push(row)
      }
    }
    for (const link of c.links || []) {
      const key = link.url || link.name
      if (key && !seen.resources.has(key)) {
        seen.resources.add(key)
        resources.push({ type: link.kind || 'link', name: link.name, url: link.url })
      }
    }
    if (c.kind === 'checkpoint' || (c.checklist || []).length) {
      for (const item of c.checklist || []) checkpoints.push(item)
    }
    if (c.note) pitfalls.push(c.note)
  }

  const goal =
    phase.chapters[0]?.overview ||
    `Work through ${phase.chapters.length} steps in “${phase.label}”.`

  return {
    goal,
    skills: skills.slice(0, 12),
    projects: projects.slice(0, 10),
    resources: resources.slice(0, 12),
    checkpoints: checkpoints.slice(0, 12),
    pitfalls: [...new Set(pitfalls)].slice(0, 8),
  }
}
