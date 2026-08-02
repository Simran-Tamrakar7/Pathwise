/** Curated watchlist — learning-friendly YouTube picks (official / reputable). */

export const featuredVideos = [
  {
    id: 'pw-intro',
    title: 'Playwright — Getting started',
    channel: 'Microsoft Playwright',
    youtubeId: 'GmTmPHXJR6k',
    topic: 'Automation',
    color: '#0F766E',
    why: 'Official vibe check before you drown in docs.',
  },
  {
    id: 'pytest-intro',
    title: 'pytest in 30 minutes (or less)',
    channel: 'Python Software Foundation / community classics',
    youtubeId: 'cHYq1eUxYv4',
    topic: 'Python',
    color: '#A16207',
    why: 'Fixtures & asserts — the spine of Playwright Python.',
  },
  {
    id: 'git-crash',
    title: 'Git & GitHub crash course',
    channel: 'freeCodeCamp',
    youtubeId: 'RGOj5yH7evk',
    topic: 'Foundations',
    color: '#15803D',
    why: 'Commit something tonight. Progress = history.',
  },
  {
    id: 'figma-start',
    title: 'Figma for beginners',
    channel: 'Figma',
    youtubeId: 'FTFaQWZBqQ8',
    topic: 'Design',
    color: '#B45309',
    why: 'Auto Layout clicks faster when you watch once.',
  },
  {
    id: 'agile-plain',
    title: 'Agile in plain English',
    channel: 'Development That Pays',
    youtubeId: 'Z9QbYZh1YXY',
    topic: 'Delivery',
    color: '#C2410C',
    why: 'Ceremonies without cargo cult.',
  },
  {
    id: 'a11y-intro',
    title: 'Web accessibility intro',
    channel: 'Google Chrome Developers',
    youtubeId: 'z8xUoCEvnv8',
    topic: 'Quality',
    color: '#0369A1',
    why: 'Keyboard + contrast — QA wins friends here.',
  },
]

export function youtubeThumb(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

export function youtubeEmbed(id) {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`
}

export function youtubeWatch(id) {
  return `https://www.youtube.com/watch?v=${id}`
}

const GENRE_TOPICS = {
  automation: ['Automation', 'Python', 'Foundations'],
  quality: ['Quality', 'Foundations'],
  delivery: ['Delivery'],
  design: ['Design'],
  ai: ['Foundations', 'Delivery'],
  foundations: ['Foundations', 'Python'],
  ops: ['Foundations', 'Automation'],
  career: ['Foundations', 'Delivery'],
  'soft-skills': ['Delivery', 'Foundations'],
}

/** Pull YouTube IDs from resource URLs on a manual/chapter. */
export function extractYoutubeIds(source) {
  const urls = []
  const push = (u) => {
    if (typeof u === 'string') urls.push(u)
    else if (u?.url) urls.push(u.url)
  }
  // chapter-shaped
  source?.resources?.forEach?.(push)
  source?.links?.forEach?.(push)
  // manual-shaped
  if (Array.isArray(source?.resources?.videos)) source.resources.videos.forEach(push)
  if (Array.isArray(source?.resources?.docs)) source.resources.docs.forEach(push)
  source?.chapters?.forEach((c) => {
    c.resources?.forEach(push)
    c.links?.forEach(push)
  })
  const ids = []
  const seen = new Set()
  for (const url of urls) {
    const m = String(url).match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{6,})/)
    if (m && !seen.has(m[1])) {
      seen.add(m[1])
      ids.push(m[1])
    }
  }
  return ids.slice(0, 4)
}

/** Genre-matched watchlist for a manual page (always colorful fallback). */
export function videosForManual(manual) {
  const topics = GENRE_TOPICS[manual?.category] || ['Foundations']
  const curated = featuredVideos.filter((v) => topics.includes(v.topic))
  const embedded = extractYoutubeIds(manual).map((id) => {
    const hit = featuredVideos.find((v) => v.youtubeId === id)
    return (
      hit || {
        id,
        youtubeId: id,
        title: 'Linked video from this path',
        channel: 'YouTube',
        why: 'Pulled from the resource shelf — watch, then do the chapter.',
        color: manual?.accent || '#0F766E',
      }
    )
  })
  const seen = new Set()
  const out = []
  for (const v of [...embedded, ...curated, ...featuredVideos]) {
    if (seen.has(v.youtubeId)) continue
    seen.add(v.youtubeId)
    out.push(v)
    if (out.length >= 3) break
  }
  return out
}

export function videosForChapter(chapter, accent = '#0F766E') {
  return extractYoutubeIds(chapter).map((id) => {
    const hit = featuredVideos.find((v) => v.youtubeId === id)
    return (
      hit || {
        id,
        youtubeId: id,
        title: 'Chapter video',
        channel: 'YouTube',
        why: 'Watch this, then clear the checklist.',
        color: accent,
      }
    )
  })
}
