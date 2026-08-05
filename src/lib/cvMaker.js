import { readJson, writeJson } from './storage'

const KEY = 'lp-cv-maker-v1'

export const CV_TEMPLATES = [
  {
    id: 'classic',
    label: 'Classic',
    blurb: 'Traditional single column — recruiters know it.',
  },
  {
    id: 'modern',
    label: 'Modern',
    blurb: 'Accent sidebar with contact + skills.',
  },
  {
    id: 'minimal',
    label: 'Minimal',
    blurb: 'Quiet type, lots of air, strong hierarchy.',
  },
  {
    id: 'compact',
    label: 'Compact',
    blurb: 'Dense packing for longer careers.',
  },
  {
    id: 'executive',
    label: 'Executive',
    blurb: 'Bold header band, confident spacing.',
  },
  {
    id: 'tech',
    label: 'Tech',
    blurb: 'Dev-friendly — skills first, clean monospace accents.',
  },
]

export const SAMPLE_CV = {
  templateId: 'classic',
  basics: {
    fullName: 'Alex Rivera',
    title: 'QA Automation Engineer',
    email: 'alex.rivera@email.com',
    phone: '+1 (555) 014-2200',
    location: 'Austin, TX',
    website: 'github.com/alexrivera',
    linkedin: 'linkedin.com/in/alexrivera',
    summary:
      'Automation-focused QA with 4+ years shipping Playwright and pytest suites. Cuts flake, owns CI smoke, and partners with product on risk-based coverage.',
  },
  skills: ['Playwright', 'pytest', 'Python', 'CI/CD', 'API testing', 'Trace debugging'],
  experience: [
    {
      id: 'e1',
      role: 'SDET',
      company: 'Northwind Labs',
      location: 'Remote',
      start: '2023',
      end: 'Present',
      bullets:
        'Built Playwright + pytest smoke pack covering checkout and auth\nCut CI flake rate from ~12% to under 2% via storage_state + better locators\nOwned GitHub Actions sharding and Trace artifacts on failure',
    },
    {
      id: 'e2',
      role: 'QA Engineer',
      company: 'Harbor Retail',
      location: 'Austin, TX',
      start: '2021',
      end: '2023',
      bullets:
        'Moved critical paths from manual checklists to automated regression\nPartnered with eng on testability (roles, test ids, API seeds)',
    },
  ],
  education: [
    {
      id: 'ed1',
      school: 'State University',
      degree: 'B.S. Computer Science',
      location: 'TX',
      year: '2021',
      detail: 'Focus: software testing & HCI',
    },
  ],
  projects: [
    {
      id: 'p1',
      name: 'Pathwise Capstone Suite',
      link: 'github.com/alexrivera/pw-capstone',
      detail: 'UI + API hybrid Playwright suite with Docker CI and Allure reports.',
    },
  ],
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}

export function blankCv() {
  return {
    templateId: 'classic',
    basics: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      summary: '',
    },
    skills: [],
    experience: [],
    education: [],
    projects: [],
  }
}

export function loadCv() {
  const raw = readJson(KEY, null)
  if (!raw || typeof raw !== 'object') return { ...SAMPLE_CV }
  return {
    ...blankCv(),
    ...raw,
    basics: { ...blankCv().basics, ...(raw.basics || {}) },
    skills: Array.isArray(raw.skills) ? raw.skills : [],
    experience: Array.isArray(raw.experience) ? raw.experience : [],
    education: Array.isArray(raw.education) ? raw.education : [],
    projects: Array.isArray(raw.projects) ? raw.projects : [],
    templateId: CV_TEMPLATES.some((t) => t.id === raw.templateId) ? raw.templateId : 'classic',
  }
}

export function saveCv(cv) {
  writeJson(KEY, cv)
  return cv
}

export function newExperience() {
  return {
    id: uid('exp'),
    role: '',
    company: '',
    location: '',
    start: '',
    end: '',
    bullets: '',
  }
}

export function newEducation() {
  return {
    id: uid('edu'),
    school: '',
    degree: '',
    location: '',
    year: '',
    detail: '',
  }
}

export function newProject() {
  return {
    id: uid('proj'),
    name: '',
    link: '',
    detail: '',
  }
}

export function splitLines(text) {
  return String(text || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
}

export function contactBits(basics) {
  return [basics.email, basics.phone, basics.location, basics.website, basics.linkedin].filter(Boolean)
}

/** ponytail: self-check for cv shape */
export function assertCvMakerOk() {
  const b = blankCv()
  if (!b.basics || !Array.isArray(b.skills)) throw new Error('blank shape')
  if (CV_TEMPLATES.length < 4) throw new Error('need templates')
  if (splitLines('a\n\nb').length !== 2) throw new Error('splitLines')
  return true
}
