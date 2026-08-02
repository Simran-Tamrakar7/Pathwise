/** Site changelog — newest first. Signals the library is alive. */

export const changelog = [
  {
    date: '2026-08-02',
    title: 'Practical paths + tool kits + Break Room personality',
    body: 'Ten new manuals, prompt/automation/design/snippet cookbooks, trivia, quotes, showcase, random path, and local discussion notes.',
  },
  {
    date: '2026-08-02',
    title: 'Today hub + retention toolkit',
    body: 'Streaks, badges, bookmarks, jump-back-in, notes, tags page, certificates, and lesson feedback.',
  },
  {
    date: '2026-08-02',
    title: 'Break Room shelves',
    body: 'Toys, Earth explorers, teasers, weird sites, and retro archives — open at the top by default.',
  },
  {
    date: '2026-08-02',
    title: 'Food Hero nutrition + Sparks',
    body: 'Cookbook Nutrition Facts, Skill Sparks drills, and extra craft manuals.',
  },
  {
    date: '2026-08-01',
    title: 'Lesson cards + Playwright rebuild',
    body: 'Chapter UX as step cards; full Playwright with Python path regenerated from the TOC.',
  },
]

export function recentlyAddedNote() {
  return changelog[0]
}
