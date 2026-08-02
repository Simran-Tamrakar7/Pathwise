/** Ready-to-use “tool cookbooks” — problem → recipe → copy → deeper manual. */

export const kitKinds = [
  { id: 'prompts', label: 'Prompt cookbook', color: '#0D9488', blurb: 'Copy-paste prompts with a why-it-works line.' },
  { id: 'automation', label: 'Automation cookbook', color: '#FF4A00', blurb: 'Zapier/Make recipes you can rebuild in minutes.' },
  { id: 'design', label: 'Design cookbook', color: '#B45309', blurb: 'Palettes, type/spacing cheats, steal-this layouts.' },
  { id: 'snippets', label: 'Snippet library', color: '#0EA5E9', blurb: 'Reusable code/CSS tagged by stack.' },
]

export const kitRecipes = [
  // —— Prompts ——
  {
    id: 'p-summarize',
    kind: 'prompts',
    title: 'Summarize without losing decisions',
    problem: 'Long doc or thread — you need decisions and owners, not a vague synopsis.',
    recipe: `Summarize the text below for a busy teammate.
Return:
1) 3-bullet overview
2) Decisions made (bullet list)
3) Open questions
4) Owners / next actions if mentioned
Do not invent facts. Quote uncertain items as “unclear”.

TEXT:
{{paste}}`,
    why: 'Structure forces decisions and owners out of prose; “don’t invent” cuts hallucination.',
    manualId: 'ai-agents-workflows',
    tags: ['summarize', 'meetings'],
  },
  {
    id: 'p-brainstorm',
    kind: 'prompts',
    title: 'Brainstorm with constraints',
    problem: 'Ideas are generic because the prompt has no constraints.',
    recipe: `Generate 12 ideas for: {{goal}}
Constraints: {{constraints}}
Audience: {{audience}}
For each idea: one line + why it fits constraints + risk.
End with your top 3 and why.`,
    why: 'Constraints + risk scoring beats “give me ideas” mush.',
    manualId: 'ai-agents-workflows',
    tags: ['brainstorm'],
  },
  {
    id: 'p-code',
    kind: 'prompts',
    title: 'Coding help that stays reviewable',
    problem: 'Model dumps a rewrite of everything; you wanted a minimal patch.',
    recipe: `You are a senior engineer. Goal: {{goal}}
Stack: {{stack}}
Constraints: minimal diff, no new deps unless asked, explain tradeoffs briefly.
Return:
1) Approach (3 bullets)
2) Patch (unified diff or full file if small)
3) How to test
4) Risks`,
    why: 'Minimal-diff + tests keeps AI output reviewable.',
    manualId: 'react-basics',
    tags: ['coding'],
  },
  {
    id: 'p-tone',
    kind: 'prompts',
    title: 'Rewrite tone (keep meaning)',
    problem: 'Message is right but lands wrong — too sharp, soft, or corporate.',
    recipe: `Rewrite the message in a {{tone}} tone for {{audience}}.
Keep meaning and facts identical. Shorten by ~20% if possible.
Return only the rewrite, then a 1-line note on what changed.

MESSAGE:
{{paste}}`,
    why: 'Separating tone from content prevents meaning drift.',
    manualId: 'documentation-writing',
    tags: ['rewriting', 'tone'],
  },
  {
    id: 'p-docs',
    kind: 'prompts',
    title: 'How-to doc from messy notes',
    problem: 'You have notes; you need a paste-and-succeed how-to.',
    recipe: `Turn these notes into a how-to page.
Use: Goal, Prerequisites, Steps (numbered), Expected result, If it fails.
One job only. No fluff.

NOTES:
{{paste}}`,
    why: 'Fixed doc skeleton matches how people actually use docs.',
    manualId: 'documentation-writing',
    tags: ['docs'],
  },

  // —— Automation ——
  {
    id: 'a-attach',
    kind: 'automation',
    title: 'Auto-save email attachments to Drive',
    problem: 'Invoices and PDFs die in the inbox.',
    recipe: `Zapier/Make recipe:
1) Trigger: New email in Gmail/Outlook with attachment
2) Filter: has attachment AND from domain OR subject contains "invoice"
3) Action: Upload file to Google Drive folder /Invoices/{{year}}-{{month}}
4) Action (optional): Slack/email you the Drive link
5) Error path: notify you on failure
Name: “Email attachments → Drive”`,
    why: 'Filter first so random forwards don’t junk your Drive.',
    manualId: 'nocode-automation',
    tags: ['email', 'drive'],
  },
  {
    id: 'a-form',
    kind: 'automation',
    title: 'Form → spreadsheet → Slack',
    problem: 'Leads or requests sit in a form tool nobody checks.',
    recipe: `1) Trigger: New Typeform/Google Form response
2) Action: Append row to Sheet (timestamp, fields)
3) Action: Slack message to #intake with key fields + sheet link
4) Filter: skip if email is empty
Name: “Form → Sheet → Slack”`,
    why: 'Sheet is the system of record; Slack is the nudge.',
    manualId: 'nocode-automation',
    tags: ['forms'],
  },
  {
    id: 'a-calendar',
    kind: 'automation',
    title: 'New hire checklist from calendar',
    problem: 'Onboarding tasks are tribal knowledge.',
    recipe: `1) Trigger: New calendar event titled “Onboarding: {{name}}”
2) Action: Create tasks in Asana/Todoist from a template checklist
3) Action: Email welcome doc link to {{name}}
4) Action: Remind owner 1 day before start
Name: “Onboarding event → tasks”`,
    why: 'Calendar event is a human-friendly trigger everyone already uses.',
    manualId: 'nocode-automation',
    tags: ['hr', 'tasks'],
  },
  {
    id: 'a-social',
    kind: 'automation',
    title: 'Approved social post queue',
    problem: 'Marketing wants schedule without giving every tool admin.',
    recipe: `1) Trigger: New row in Sheet status=approved
2) Action: Create scheduled post in Buffer/Later
3) Action: Set Sheet status=queued + post URL
4) Filter: platform column must be twitter|linkedin
Name: “Sheet approved → social queue”`,
    why: 'Sheet becomes a lightweight CMS with an approval column.',
    manualId: 'email-marketing-automation',
    tags: ['social'],
  },

  // —— Design ——
  {
    id: 'd-palette',
    kind: 'design',
    title: 'Forest product palette (starter)',
    problem: 'Need a calm brand palette that isn’t generic purple AI sludge.',
    recipe: `CSS variables — steal & tweak:
--ink: #121814;
--paper: #f3f0e8;
--forest: #0b3d2e;
--mint: #7cdbb0;
--leaf: #1a7a55;
--clay: #c45c26;
--line: rgba(18,24,20,.12);
Rule: one accent for CTAs (clay or mint), forest for text/brand.`,
    why: 'Limited tokens prevent rainbow UI; paper+forest reads intentional.',
    manualId: 'ux-research-basics',
    tags: ['color'],
  },
  {
    id: 'd-type',
    kind: 'design',
    title: 'Type & spacing cheat sheet',
    problem: 'Sizes and gaps feel random across the page.',
    recipe: `Type scale (rem): 0.75 / 0.875 / 1 / 1.25 / 1.75 / 2.5
Spacing scale (rem): 0.25 0.5 0.75 1 1.5 2 3 4
Rules:
- One display font + one body font
- Body line-height ~1.5; display ~1.1
- Section padding ≥ 3rem desktop, 2rem mobile
- Prefer 8px grid (0.5rem steps)`,
    why: 'A scale beats eyeballing; consistency reads as quality.',
    manualId: 'ux-research-basics',
    tags: ['typography', 'spacing'],
  },
  {
    id: 'd-layout',
    kind: 'design',
    title: 'Steal this: split hero layout',
    problem: 'Landing feels like a dashboard of cards.',
    recipe: `Structure:
[ full-bleed atmosphere / image ]
[ brand (large) ]
[ one headline ]
[ one sentence ]
[ primary + ghost CTA ]
Then ONE section below — not stats, not three columns of fluff.
CSS sketch:
.hero { min-height: 70vh; display:grid; align-items:end; }
.hero h1 { max-width: 18ch; }`,
    why: 'One composition + brand-first beats card collage.',
    manualId: 'personal-branding-portfolio',
    tags: ['layout'],
  },
  {
    id: 'd-a11y',
    kind: 'design',
    title: 'Contrast & focus quick check',
    problem: 'Pretty UI fails basic accessibility.',
    recipe: `Checklist:
- Body text contrast ≥ 4.5:1 on background
- Focus ring visible on all controls (don’t remove outline without replacement)
- Hit targets ≥ 44×44px
- Don’t use color alone for meaning
- Alt text on meaningful images; empty alt on decorative`,
    why: 'These five catch most “looks fine, fails users” issues.',
    manualId: 'ux-research-basics',
    tags: ['a11y'],
  },

  // —— Snippets ——
  {
    id: 's-css-center',
    kind: 'snippets',
    title: 'CSS: center a stack',
    problem: 'Vertically centering content still eats time.',
    recipe: `.stack-center {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 1.5rem;
}`,
    why: 'Grid place-items replaces older translate hacks.',
    manualId: 'react-basics',
    tags: ['css'],
    framework: 'css',
  },
  {
    id: 's-css-clamp',
    kind: 'snippets',
    title: 'CSS: fluid type with clamp',
    problem: 'Font sizes jump awkwardly between breakpoints.',
    recipe: `h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}`,
    why: 'clamp() scales smoothly without a dozen media queries.',
    manualId: 'react-basics',
    tags: ['css'],
    framework: 'css',
  },
  {
    id: 's-js-debounce',
    kind: 'snippets',
    title: 'JS: debounce input',
    problem: 'Search fires too often while typing.',
    recipe: `export function debounce(fn, ms = 300) {
  let t
  return (...args) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), ms)
  }
}`,
    why: 'Classic, tiny, no dependency.',
    manualId: 'react-basics',
    tags: ['javascript'],
    framework: 'javascript',
  },
  {
    id: 's-react-error',
    kind: 'snippets',
    title: 'React: tiny error boundary',
    problem: 'One widget crash blanks the whole page.',
    recipe: `import { Component } from 'react'

export class ErrorBox extends Component {
  state = { err: null }
  static getDerivedStateFromError(err) { return { err } }
  render() {
    if (this.state.err) return this.props.fallback ?? <p>Something broke.</p>
    return this.props.children
  }
}`,
    why: 'Isolate failure to a subtree; keep the shell alive.',
    manualId: 'react-basics',
    tags: ['react'],
    framework: 'react',
  },
  {
    id: 's-pw-role',
    kind: 'snippets',
    title: 'Playwright: role locator',
    problem: 'CSS selectors flake when class names change.',
    recipe: `await page.get_by_role("button", name="Sign in").click()
await expect(page.get_by_role("heading", name="Dashboard")).to_be_visible()`,
    why: 'Roles match how users and accessibility trees see the UI.',
    manualId: 'playwright',
    tags: ['playwright', 'python'],
    framework: 'playwright',
  },
]

export function kitsByKind(kind) {
  return kitRecipes.filter((r) => r.kind === kind)
}

export function kitOfTheDay(date = new Date()) {
  const i = date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate()
  return kitRecipes[Math.abs(i) % kitRecipes.length]
}
