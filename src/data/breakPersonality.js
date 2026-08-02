/** Break Room personality: trivia, quotes/memes, seeded showcase. */

export const techTrivia = [
  { q: 'The first computer bug was literally…', a: 'A moth found in a Harvard Mark II relay (1947).' },
  { q: 'HTTP 418 means…', a: 'I’m a teapot — an April Fools’ status code that stuck around as lore.' },
  { q: 'Git was created by…', a: 'Linus Torvalds, originally to support Linux kernel development.' },
  { q: 'The “404” name comes from…', a: 'Room folklore at CERN — funny story, but really just “not found”.' },
  { q: 'CSS was proposed in…', a: '1994 by Håkon Wium Lie while at CERN.' },
  { q: 'The first webcam watched…', a: 'A coffee pot at the University of Cambridge.' },
  { q: 'JSON was popularized because…', a: 'It was simpler for browsers than XML for APIs.' },
  { q: '“Commit” in Git means…', a: 'A snapshot of your project tree with a message — not “upload forever”.' },
  { q: 'Accessibility’s “alt text” helps…', a: 'Screen reader users — and anyone when images fail to load.' },
  { q: 'A “race condition” is…', a: 'When outcome depends on unpredictable timing between parts of a system.' },
]

export const learningQuotes = [
  { text: 'You don’t rise to the level of your goals. You fall to the level of your systems.', by: 'James Clear (paraphrase energy)' },
  { text: 'Make it work, make it right, make it fast — in that order.', by: 'Kent Beck vibe' },
  { text: 'Documentation is a love letter to your future self.', by: 'Damian Conway-ish wisdom' },
  { text: 'The best error message is the one that never shows up.', by: 'Thomas Fuchs' },
  { text: 'Ship a thin slice. Learn. Then thicken.', by: 'Pathwise sticky note' },
  { text: 'If it’s not written down, it doesn’t exist for the team.', by: 'Ops folklore' },
  { text: 'Curiosity is a renewable resource. Shame is not a curriculum.', by: 'Pathwise' },
  { text: 'A green test you understand beats a red test you fear.', by: 'QA hallway' },
  { text: 'Done is a better teacher than perfect.', by: 'Every portfolio that exists' },
  { text: 'Rest is part of the build pipeline.', by: 'Break Room constitution' },
]

export const showcaseSeed = [
  {
    id: 'seed-1',
    name: 'Ava',
    manualId: 'playwright',
    built: 'A smoke suite for our staging login — 12 tests, nightly green.',
    at: '2026-07-20',
  },
  {
    id: 'seed-2',
    name: 'Jordan',
    manualId: 'nocode-automation',
    built: 'Zap that files invoice PDFs into Drive by month. Finance stopped chasing me.',
    at: '2026-07-28',
  },
  {
    id: 'seed-3',
    name: 'Sam',
    manualId: 'personal-branding-portfolio',
    built: 'One-page portfolio with three case studies. Got two interview asks in a week.',
    at: '2026-08-01',
  },
]

export function triviaOfTheDay(date = new Date()) {
  const i = date.getDate() + date.getMonth() * 3
  return techTrivia[i % techTrivia.length]
}

export function quoteOfTheDay(date = new Date()) {
  const i = date.getDate() + date.getMonth() * 5
  return learningQuotes[i % learningQuotes.length]
}

export function randomManual(manuals) {
  if (!manuals?.length) return null
  return manuals[Math.floor(Math.random() * manuals.length)]
}
