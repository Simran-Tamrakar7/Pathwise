#!/usr/bin/env node
/** Regenerates src/data/manuals/playwright-python.js from TOC-shaped lesson data. */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(__dirname, '../src/data/manuals/playwright-python.js')

const DOC = 'https://playwright.dev/python/docs'
const img = (alt) => ({ src: 'covers/playwright-cover.png', alt })

function pill(kind, url, label = kind) {
  return { label, url, kind }
}

function chapter(def) {
  return def
}

const chapters = [
  // —— Part 0 ——
  chapter({
    id: 'pw-0-what',
    phase: 'Part 0 · Background',
    level: 'beginner',
    title: '0. What is Playwright, Really',
    minutes: 35,
    durationLabel: 'Day 1',
    overview:
      'Microsoft’s modern browser automation toolkit — history, why it exists, and why Python teams care.',
    learn: ['Playwright lineage from Puppeteer', 'Why Microsoft built it', 'Open-source maintenance reality'],
    steps: [
      {
        title: 'History in one minute',
        body: 'Playwright was built by Microsoft engineers who previously worked on Puppeteer. It is open-source, actively maintained, and designed for reliable end-to-end automation across Chromium, Firefox, and WebKit.',
        learnMore:
          'Puppeteer focused on Chromium. Playwright generalized the architecture for multi-browser, auto-waiting, and richer tooling (traces, codegen, network mocking).',
        image: img('Diagram placeholder: Playwright lineage from Puppeteer to multi-browser'),
        resources: [
          pill('Docs', `${DOC}/intro`),
          pill('Repo', 'https://github.com/microsoft/playwright-python', 'GitHub'),
          pill('Article', 'https://automationpanda.com/2023/11/08/playwright-python-tutorial-an-introduction/'),
        ],
        quiz: {
          question: 'Playwright was created primarily to…',
          options: [
            'Replace all databases',
            'Close gaps in older browser automation tools',
            'Only scrape static HTML',
            'Replace pytest',
          ],
          answer: 1,
          explain: 'It targets flaky waits, limited browser coverage, and weak tooling in older stacks.',
        },
        doThis: 'Write one sentence: “Playwright exists because ___.”',
      },
      {
        title: 'Open-source, Microsoft-backed',
        body: 'The project lives in the open with frequent releases. Microsoft backing means CI investment and long-term signal for hiring teams — still treat it like any OSS dependency: pin versions.',
        image: img('Placeholder: GitHub stars / release cadence illustration'),
        resources: [
          pill('Repo', 'https://github.com/microsoft/playwright-python/releases', 'Releases'),
          pill('Docs', `${DOC}/intro`),
        ],
        tryIt: {
          prompt: 'What command installs the Python package?',
          code: 'pip install playwright\nplaywright install',
          result: 'Package installed; browser binaries downloaded for Chromium/Firefox/WebKit.',
        },
      },
    ],
    checklist: ['I can explain Playwright’s origin', 'I skimmed the Python intro docs'],
    practice: { title: 'Origin note', brief: 'Add a “Why Playwright” section to LEARNING.md (5 lines).' },
    resources: [{ type: 'doc', name: 'Playwright Python Intro', url: `${DOC}/intro`, lang: 'EN', free: true }],
  }),

  chapter({
    id: 'pw-0-where',
    phase: 'Part 0 · Background',
    level: 'beginner',
    title: '1. Where Playwright is Used',
    minutes: 30,
    overview:
      'UI E2E, API checks, visual diffs, scraping, cross-browser QA — and the industries that hire for it.',
    learn: ['Primary use cases', 'Industry contexts', 'When not to force Playwright'],
    steps: [
      {
        title: 'Core use cases',
        body: 'Teams use Playwright for functional and regression UI tests, API checks via request context, visual regression, careful scraping, and cross-browser compatibility. Anywhere a web app needs automated QA, Playwright is on the shortlist.',
        image: img('Placeholder collage: e-commerce checkout, SaaS dashboard, banking login'),
        resources: [
          pill('Docs', `${DOC}/intro`),
          pill('Video', 'https://www.youtube.com/watch?v=GmTmPHXJR6k'),
        ],
        quiz: {
          question: 'Which is a typical Playwright job?',
          options: [
            'Native iOS UIKit unit tests',
            'Web UI + API end-to-end automation',
            'GPU driver fuzzing',
            'Mainframe batch jobs',
          ],
          answer: 1,
        },
      },
      {
        title: 'Industries',
        body: 'E-commerce, SaaS, banking, and healthcare all ship web apps under regulatory or velocity pressure. Automated QA reduces release risk; Playwright’s reliability pitch is why hiring spikes here.',
        image: img('Placeholder: industry icons for commerce, SaaS, bank, health'),
        resources: [pill('Docs', `${DOC}/intro`), pill('Article', 'https://playwright.dev/')],
        doThis: 'List three apps you use daily that could use Playwright E2E.',
      },
    ],
    checklist: ['Named 3 real use cases', 'Named one industry I’d target'],
  }),

  chapter({
    id: 'pw-0-cando',
    phase: 'Part 0 · Background',
    level: 'beginner',
    title: '2. What Playwright Can Do',
    minutes: 35,
    overview:
      'One API for Chromium/Firefox/WebKit, mobile emulation, auto-wait, network mock, multi-context, traces — and pytest for Python.',
    learn: ['Browser matrix', 'Auto-wait & tooling', 'Python runner reality'],
    steps: [
      {
        title: 'Browser coverage',
        body: 'Automate Chromium, Firefox, and WebKit with one API. Emulate mobile viewports and geolocation without a physical device. Run headless in CI or headed while debugging.',
        learnMore:
          'JS/TS gets the built-in Playwright Test runner. Python teams typically use pytest + pytest-playwright for fixtures and reporting.',
        image: img('Placeholder: three browser logos + phone frame'),
        resources: [
          pill('Docs', `${DOC}/browsers`),
          pill('Docs', `${DOC}/emulation`, 'Emulation'),
        ],
        quiz: {
          question: 'Python Playwright tests usually run with…',
          options: ['JUnit only', 'pytest-playwright', 'XCTest', 'RSpec'],
          answer: 1,
        },
      },
      {
        title: 'Reliability tooling',
        body: 'Auto-waiting removes most sleep hacks. Network interception mocks APIs. Multi-tab and multi-context simulate users. Traces, video, and screenshots ship built-in; parallel runs scale the suite.',
        image: img('Placeholder: Trace Viewer timeline screenshot'),
        resources: [
          pill('Docs', `${DOC}/trace-viewer-intro`, 'Trace'),
          pill('Docs', `${DOC}/network`, 'Network'),
        ],
        tryIt: {
          prompt: 'Mental model',
          code: '# Auto-wait → click when actionable\n# Trace on → debug flakes without guessing\n# Context → isolated cookies/storage per user',
          result: 'You explain each line to a junior without opening docs.',
        },
      },
    ],
    checklist: ['I can name 5 capabilities', 'I know Python uses pytest-playwright'],
  }),

  chapter({
    id: 'pw-0-why',
    phase: 'Part 0 · Background',
    level: 'beginner',
    title: '3. Why Companies Choose Playwright',
    minutes: 30,
    overview: 'Speed and lower flakiness vs Selenium; modern SPA support; growing job demand.',
    learn: ['Vs Selenium', 'Vs Cypress', 'Market signal'],
    steps: [
      {
        title: 'Vs Selenium',
        body: 'Playwright is generally faster and less flaky than classic Selenium stacks because of auto-waiting and a modern protocol. SPAs, shadow DOM, and iframes are first-class concerns rather than afterthoughts.',
        image: img('Placeholder: speed/reliability comparison sketch'),
        resources: [
          pill('Docs', `${DOC}/why-playwright`, 'Why'),
          pill('Article', 'https://playwright.dev/python/docs/intro'),
        ],
        quiz: {
          question: 'A common reason teams leave Selenium is…',
          options: [
            'Playwright cannot open URLs',
            'High flakiness and slow feedback loops',
            'Selenium supports more browsers than Playwright',
            'Selenium has no language bindings',
          ],
          answer: 1,
        },
      },
      {
        title: 'Vs Cypress & demand',
        body: 'Cypress is strong for JS-centric teams; Playwright wins on true multi-browser (including WebKit) and multi-language APIs. Job posts increasingly list Playwright — useful signal for career positioning.',
        image: img('Placeholder: job-post keyword chart'),
        resources: [pill('Docs', `${DOC}/intro`)],
        doThis: 'Skim 3 job posts mentioning Playwright; note shared skills.',
      },
    ],
    checklist: ['Interview pitch drafted'],
  }),

  chapter({
    id: 'pw-0-not',
    phase: 'Part 0 · Background',
    level: 'beginner',
    title: '4. What This Manual Will NOT Cover',
    minutes: 20,
    overview: 'Python-only Playwright. No Appium native apps. No load tools (k6/JMeter/Locust).',
    learn: ['Scope boundaries', 'Where to go instead'],
    steps: [
      {
        title: 'Explicit non-goals',
        body: 'This path is Playwright with Python. It does not teach the JS/TS Playwright Test runner in depth, native mobile (Appium), or load/performance testing with k6, JMeter, or Locust.',
        image: img('Placeholder: three crossed-out icons — Appium, k6, JS-only'),
        resources: [
          pill('Docs', `${DOC}/intro`),
          pill('Article', 'https://appium.io/', 'Appium'),
        ],
        quiz: {
          question: 'Which belongs in a different course?',
          options: [
            'pytest fixtures for Playwright',
            'page.route mocking',
            'Native Android UI automation with Appium',
            'storage_state auth reuse',
          ],
          answer: 2,
        },
        doThis: 'Write your personal “in scope / out of scope” sticky for this manual.',
      },
    ],
    checklist: ['I know what this manual skips'],
  }),

  // —— Part 1 ——
  ...part1(),
  checkpoint('pw-cp-foundations', 'Part 1 · Foundations', 'Checkpoint — Foundations', 'Launch headed Chromium, open a URL, take a screenshot, close cleanly.'),
  // —— Part 2 ——
  ...part2(),
  checkpoint('pw-cp-core', 'Part 2 · Core Interactions', 'Checkpoint — Core Interactions', 'Automate a form with locators, actions, expect(), and one iframe or dialog.'),
  // —— Part 3 ——
  ...part3(),
  checkpoint('pw-cp-framework', 'Part 3 · Framework', 'Checkpoint — Framework', 'pytest + POM + env config + one parametrized smoke test.'),
  // —— Part 4 ——
  ...part4(),
  checkpoint('pw-cp-advanced', 'Part 4 · Advanced', 'Checkpoint — Advanced', 'Mock one API, reuse storage_state, capture a trace on failure.'),
  // —— Part 5 ——
  ...part5(),
  checkpoint('pw-cp-cicd', 'Part 5 · CI/CD', 'Checkpoint — CI/CD', 'Green GitHub Action with HTML report artifact and screenshot on fail.'),
  // —— Part 6 ——
  ...part6(),
  checkpoint('pw-cp-pro', 'Part 6 · Pro', 'Checkpoint — Pro Practices', 'Document architecture + flake triage process in the repo README.'),
  // —— Part 7 ——
  ...part7(),
  checkpoint(
    'pw-cp-career',
    'Part 7 · Career',
    'Checkpoint — Job Ready',
    'Capstone README + demo link + three interview stories written.',
  ),
]

function checkpoint(id, phase, title, criteria) {
  return {
    id,
    phase,
    level: 'checkpoint',
    kind: 'checkpoint',
    title,
    minutes: 45,
    overview: criteria,
    learn: [criteria],
    steps: [
      {
        title: 'Pass criteria',
        body: criteria,
        image: img(`Checkpoint badge: ${title}`),
        resources: [pill('Docs', `${DOC}/intro`)],
        quiz: {
          question: 'A checkpoint is done when…',
          options: [
            'You bookmarked the docs',
            'You can demo the criteria without notes',
            'You skipped practice',
            'You only watched a video',
          ],
          answer: 1,
        },
        doThis: 'Record a 2-minute Loom/demo proving the criteria.',
      },
    ],
    checklist: [criteria, 'Demo recorded or peer-reviewed'],
  }
}

function lesson(opts) {
  const {
    id,
    phase,
    level,
    title,
    minutes,
    overview,
    learn,
    bullets,
    docsUrl,
    quiz,
    tryIt,
    practiceBrief,
    career = false,
  } = opts

  const steps = [
    {
      title: bullets[0]?.t || 'Key idea',
      body: bullets[0]?.b || overview,
      learnMore: bullets[0]?.more || null,
      image: img(`Illustration for ${title}`),
      resources: [
        pill('Docs', docsUrl),
        pill('Video', `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' Playwright Python')}`),
        pill('Article', 'https://automationpanda.com/'),
      ].slice(0, career ? 2 : 3),
      quiz: quiz || {
        question: `For “${title}”, which habit prevents flaky work?`,
        options: [
          'Hard-coded time.sleep everywhere',
          'Small experiments + web-first asserts',
          'Never reading errors',
          'Only recording codegen forever',
        ],
        answer: 1,
      },
      doThis: bullets[0]?.doThis || `Skim docs and note 3 APIs for: ${title}.`,
    },
  ]

  if (bullets[1]) {
    steps.push({
      title: bullets[1].t,
      body: bullets[1].b,
      learnMore: bullets[1].more || null,
      image: img(`Practice visual: ${title}`),
      resources: [pill('Docs', docsUrl), pill('Docs', `${DOC}/api/class-page`, 'API')],
      tryIt:
        tryIt ||
        (career
          ? {
              prompt: 'Draft in the box',
              code: bullets[1].code || '# Your notes / outline here',
              result: bullets[1].result || 'You have a reusable draft for portfolio or interview.',
            }
          : {
              prompt: 'Try this pattern',
              code:
                bullets[1].code ||
                `def test_chapter(page):\n    page.goto("https://demo.playwright.dev/todomvc")\n    # ${title}\n    assert True`,
              result: bullets[1].result || 'Green test or clear assertion failure to fix.',
            }),
      tip: bullets[1].tip || 'Commit after each green experiment.',
      doThis: bullets[1].doThis || `Commit one file practicing: ${title}.`,
    })
  }

  if (bullets[2]) {
    steps.push({
      title: bullets[2].t,
      body: bullets[2].b,
      image: img(`Deep dive: ${title}`),
      resources: [pill('Docs', docsUrl)],
      quiz: bullets[2].quiz || {
        question: `You are stuck on “${title}”. Best move?`,
        options: [
          'Rewrite the whole framework tonight',
          'Reproduce with Trace Viewer / Inspector',
          'Delete the test and hope',
          'Ignore CI forever',
        ],
        answer: 1,
      },
      doThis: bullets[2].doThis || `Explain “${title}” out loud in 60 seconds.`,
    })
  }

  return {
    id,
    phase,
    level,
    title,
    minutes,
    overview,
    learn,
    steps,
    checklist: [
      `Can explain ${title} without notes`,
      `Practiced once locally`,
      docsUrl ? 'Opened official docs' : 'Notes saved',
    ],
    practice: {
      title: `${title} deliverable`,
      brief: practiceBrief || `Ship a small artifact proving mastery of ${title}.`,
    },
    resources: [{ type: 'doc', name: `${title} docs`, url: docsUrl, lang: 'EN', free: true }],
  }
}

function part1() {
  const phase = 'Part 1 · Foundations'
  return [
    lesson({
      id: 'pw-1-intro',
      phase,
      level: 'beginner',
      title: '1. Introduction to Playwright',
      minutes: 40,
      overview: 'What Playwright is, why it exists, vs Selenium/Cypress, supported browsers & languages.',
      learn: ['Positioning vs Selenium/Cypress', 'Supported browsers', 'Language bindings'],
      docsUrl: `${DOC}/intro`,
      bullets: [
        {
          t: 'What & why',
          b: 'Playwright is a browser automation library for reliable E2E tests. It exists to make modern web testing less flaky and more multi-browser than older stacks.',
          more: 'Official docs cover install, first test, and the mental model of Browser → Context → Page.',
        },
        {
          t: 'Comparisons & support',
          b: 'Selenium is mature but often slower/flakier without careful waits. Cypress is excellent in JS with some browser limits. Playwright supports Chromium, Firefox, WebKit and bindings including Python, JS/TS, Java, .NET.',
          code: '# Mental map\n# Selenium = WebDriver ecosystem\n# Cypress = JS-first runner\n# Playwright = multi-browser, multi-lang, strong tooling',
          result: 'You can pick Playwright for Python multi-browser E2E without apologizing.',
        },
      ],
      quiz: {
        question: 'Playwright’s Python binding…',
        options: [
          'Does not exist',
          'Is official and sync/async capable',
          'Only works with Internet Explorer',
          'Requires Cypress installed',
        ],
        answer: 1,
      },
    }),
    lesson({
      id: 'pw-1-setup',
      phase,
      level: 'beginner',
      title: '2. Environment Setup',
      minutes: 50,
      overview: 'Python, pip, venv, Playwright install, browser binaries, folder structure.',
      learn: ['venv discipline', 'playwright install', 'Project layout'],
      docsUrl: `${DOC}/intro`,
      bullets: [
        {
          t: 'Python + venv',
          b: 'Create a virtual environment, activate it, then install packages inside it. Never pollute the global interpreter for project work.',
          doThis: 'Create ~/pw-lab with a venv and activate it.',
        },
        {
          t: 'Browsers + structure',
          b: 'pip install playwright pytest-playwright, then playwright install. Use a simple layout: tests/, pages/, data/, conftest.py, pytest.ini, README.',
          code: 'python -m venv .venv\nsource .venv/bin/activate  # Windows: .venv\\Scripts\\activate\npip install playwright pytest-playwright\nplaywright install',
          result: 'Browsers download; pytest --help shows playwright options after plugin install.',
        },
        {
          t: 'Verify',
          b: 'Run a one-liner that launches Chromium headed, opens example.com, and prints the title. Fix PATH/venv issues before writing real tests.',
        },
      ],
      practiceBrief: 'Repo with venv instructions + empty tests/ folder committed.',
    }),
    lesson({
      id: 'pw-1-arch',
      phase,
      level: 'beginner',
      title: '3. Playwright Architecture',
      minutes: 45,
      overview: 'Browser → BrowserContext → Page. Sync vs Async API. CDP/WebSocket under the hood.',
      learn: ['Hierarchy', 'Sync vs async', 'How drivers talk'],
      docsUrl: `${DOC}/library`,
      bullets: [
        {
          t: 'Hierarchy',
          b: 'Browser is the process. BrowserContext is an isolated profile (cookies, storage). Page is a tab. Prefer fresh contexts per test for isolation.',
          more: 'Multiple pages can share a context; multiple contexts can share a browser — great for multi-user scenarios.',
        },
        {
          t: 'Sync Python',
          b: 'Beginners should start with the sync API (from playwright.sync_api import sync_playwright). Async exists for concurrent flows; pytest-playwright fixtures feel sync-friendly.',
          code: 'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    page = context.new_page()\n    page.goto("https://example.com")\n    browser.close()',
          result: 'Page loads; process exits cleanly.',
        },
        {
          t: 'Protocol sketch',
          b: 'Playwright talks to browsers over a WebSocket control channel (Chrome DevTools Protocol–style for Chromium, analogous protocols for others). You rarely touch CDP directly.',
          quiz: {
            question: 'Best default isolation unit for a test?',
            options: ['One shared Page forever', 'A fresh BrowserContext', 'OS reboot', 'Global cookies only'],
            answer: 1,
          },
        },
      ],
    }),
    lesson({
      id: 'pw-1-first',
      phase,
      level: 'beginner',
      title: '4. First Script',
      minutes: 45,
      overview: 'Launch headless vs headed, navigate, close browser/context properly.',
      learn: ['launch options', 'goto', 'cleanup'],
      docsUrl: `${DOC}/navigating`,
      bullets: [
        {
          t: 'Launch & goto',
          b: 'chromium.launch(headless=False) for debugging; headless=True for CI. page.goto(url) waits for a load state by default — trust it before adding sleeps.',
        },
        {
          t: 'Cleanup',
          b: 'Always close context/browser (or use fixtures that do). Leaks show up as hanging CI jobs and locked profiles.',
          code: 'browser = p.chromium.launch(headless=False)\npage = browser.new_page()\npage.goto("https://example.com")\nprint(page.title())\nbrowser.close()',
          result: 'Title prints; no zombie Chromium processes.',
          tip: 'With pytest-playwright, the page fixture handles lifecycle for you.',
        },
      ],
      practiceBrief: 'first_script.py committed with headed launch + screenshot.',
    }),
  ]
}

function part2() {
  const phase = 'Part 2 · Core Interactions'
  return [
    lesson({
      id: 'pw-2-locators',
      phase,
      level: 'intermediate',
      title: '5. Locators Deep Dive',
      minutes: 60,
      overview: 'get_by_role/text/label/placeholder, CSS/XPath, filter/nth, strictness and auto-retry.',
      learn: ['Role locators first', 'Chaining & filter', 'Strict mode'],
      docsUrl: `${DOC}/locators`,
      bullets: [
        {
          t: 'Prefer user-facing locators',
          b: 'Reach for get_by_role, get_by_text, get_by_label, and get_by_placeholder before CSS. They mirror how users and assistive tech see the page — and survive refactors better.',
          more: 'CSS and XPath still work; use them when roles are missing, then push the team to improve a11y.',
        },
        {
          t: 'Chain, filter, nth',
          b: 'Locators are lazy and auto-retrying. Chain with .filter(), pick .first/.last/.nth(i). Strictness fails when multiple nodes match — tighten the locator instead of sleeping.',
          code: 'page.get_by_role("listitem").filter(has_text="Milk").get_by_role("button", name="Delete").click()',
          result: 'Only the Milk row’s Delete is clicked.',
        },
        {
          t: 'Strictness',
          b: 'If an action targets multiple elements, Playwright throws. That is a feature: fix the locator or scope to a parent.',
        },
      ],
      quiz: {
        question: 'Best first locator choice for a Submit button?',
        options: [
          'xpath=//*[@id="x"]/div[3]',
          'get_by_role("button", name="Submit")',
          'page.locator("div").nth(47)',
          'CSS only forever',
        ],
        answer: 1,
      },
    }),
    lesson({
      id: 'pw-2-actions',
      phase,
      level: 'intermediate',
      title: '6. Actions',
      minutes: 55,
      overview: 'click, dblclick, fill, type, press, check/uncheck, select_option, hover, drag, keyboard/mouse.',
      learn: ['fill vs type', 'form controls', 'pointer events'],
      docsUrl: `${DOC}/input`,
      bullets: [
        {
          t: 'Clicks & fills',
          b: 'click/dblclick for activation. fill() sets input value atomically; type/press_sequentially is for key-by-key cases. press() sends keys like Enter.',
        },
        {
          t: 'Forms & gestures',
          b: 'check/uncheck for checkboxes; select_option for <select>; hover and drag_to for richer UI. Mouse/keyboard APIs exist for edge cases.',
          code: 'page.get_by_label("Email").fill("a@b.com")\npage.get_by_label("Remember me").check()\npage.get_by_label("Country").select_option("US")\npage.get_by_role("button", name="Save").click()',
          result: 'Form submits with expected values.',
        },
      ],
    }),
    lesson({
      id: 'pw-2-expect',
      phase,
      level: 'intermediate',
      title: '7. Assertions with expect()',
      minutes: 50,
      overview: 'Web-first assertions (visible, enabled, text, value), soft assertions, custom timeouts.',
      learn: ['expect auto-retry', 'Soft asserts', 'Timeouts'],
      docsUrl: `${DOC}/test-assertions`,
      bullets: [
        {
          t: 'Web-first asserts',
          b: 'from playwright.sync_api import expect. Assertions retry until timeout — assert visibility, text, values, URLs without manual waits.',
        },
        {
          t: 'Soft & timeouts',
          b: 'Soft assertions collect multiple failures before ending the test. Override timeout on a single expect when the UI is legitimately slow — don’t globally inflate sleeps.',
          code: 'from playwright.sync_api import expect\nexpect(page.get_by_role("heading", name="Dashboard")).to_be_visible()\nexpect(page.get_by_label("Name")).to_have_value("Ada")',
          result: 'Asserts pass once UI settles — no time.sleep.',
        },
      ],
      quiz: {
        question: 'expect() is powerful because it…',
        options: ['Never waits', 'Auto-retries until timeout', 'Only works in Cypress', 'Disables locators'],
        answer: 1,
      },
    }),
    lesson({
      id: 'pw-2-waits',
      phase,
      level: 'intermediate',
      title: '8. Waits & Auto-waiting',
      minutes: 50,
      overview: 'How auto-waiting works; wait_for_load_state; avoid hard sleeps / flakes.',
      learn: ['Actionability checks', 'Load states', 'No sleep'],
      docsUrl: `${DOC}/actionability`,
      bullets: [
        {
          t: 'Auto-wait internals',
          b: 'Before clicking, Playwright checks actionability (attached, visible, stable, enabled, receives events). That is why sleeps become rare.',
        },
        {
          t: 'Explicit waits when needed',
          b: 'Use wait_for_load_state, wait_for_url, or locator waits for navigation/network edges. Ban time.sleep in reviews unless you comment the ceiling and upgrade path.',
          code: 'page.goto("/dashboard")\npage.wait_for_load_state("networkidle")  # use sparingly\nexpect(page.get_by_text("Welcome")).to_be_visible()',
          result: 'Stable assertion without arbitrary 5s sleep.',
          tip: 'networkidle can be flaky on chatty apps — prefer expect on a signal element.',
        },
      ],
    }),
    lesson({
      id: 'pw-2-tabs',
      phase,
      level: 'intermediate',
      title: '9. Tabs, Windows, iFrames',
      minutes: 55,
      overview: 'New page events, switching windows, locating inside iframes.',
      learn: ['expect_page', 'frames', 'multi-window'],
      docsUrl: `${DOC}/pages`,
      bullets: [
        {
          t: 'New tabs',
          b: 'Listen with context.expect_page() around the click that opens a tab. Work on the returned Page; don’t guess handles.',
        },
        {
          t: 'Frames',
          b: 'Use page.frame_locator(...) then chain locators inside. Nested frames need nested frame_locators.',
          code: 'with context.expect_page() as new_page_info:\n    page.get_by_text("Open report").click()\nreport = new_page_info.value\nexpect(report.get_by_role("heading")).to_be_visible()\n\nframe = page.frame_locator("#billing-iframe")\nframe.get_by_label("Card").fill("4111...")',
          result: 'Tab and iframe flows both assert visibly.',
        },
      ],
    }),
    lesson({
      id: 'pw-2-files',
      phase,
      level: 'intermediate',
      title: '10. File Uploads & Downloads',
      minutes: 45,
      overview: 'set_input_files; download events and saving files.',
      learn: ['Uploads', 'Downloads', 'Artifacts'],
      docsUrl: `${DOC}/downloads`,
      bullets: [
        {
          t: 'Uploads',
          b: 'locator.set_input_files(path) works even when the input is hidden — no OS dialog needed in automation.',
        },
        {
          t: 'Downloads',
          b: 'Wrap the click with page.expect_download(), then download.save_as(...). Assert file exists and size/type when it matters.',
          code: 'page.locator("input[type=file]").set_input_files("fixtures/sample.pdf")\nwith page.expect_download() as dl_info:\n    page.get_by_text("Export").click()\ndl_info.value.save_as("out/report.csv")',
          result: 'Upload accepted; CSV saved under out/.',
        },
      ],
    }),
    lesson({
      id: 'pw-2-dialogs',
      phase,
      level: 'intermediate',
      title: '11. Alerts, Dialogs, Popups',
      minutes: 40,
      overview: 'page.on("dialog") — accept/dismiss alerts, confirms, prompts.',
      learn: ['Dialog handler', 'Accept vs dismiss', 'Prompt text'],
      docsUrl: `${DOC}/dialogs`,
      bullets: [
        {
          t: 'Register before trigger',
          b: 'Attach page.on("dialog", handler) before the action that opens the dialog, or use expect_event. Late handlers race and flake.',
        },
        {
          t: 'Accept / dismiss',
          b: 'handler receives a Dialog: accept(text?) or dismiss(). Assert message text for confidence.',
          code: 'page.on("dialog", lambda d: d.accept("OK"))\npage.get_by_text("Delete").click()',
          result: 'Confirm accepted; destructive action proceeds under test control.',
        },
      ],
      quiz: {
        question: 'When should you attach the dialog listener?',
        options: ['After the alert already opened', 'Before the triggering action', 'Never', 'Only in production'],
        answer: 1,
      },
    }),
  ]
}

function part3() {
  const phase = 'Part 3 · Test Structure & Framework'
  return [
    lesson({
      id: 'pw-3-pytest',
      phase,
      level: 'intermediate',
      title: '12. Pytest Basics for Playwright',
      minutes: 55,
      overview: 'Fixtures, conftest.py scopes, pytest-playwright plugin basics.',
      learn: ['Fixtures', 'Scopes', 'Plugin page fixture'],
      docsUrl: `${DOC}/test-runners`,
      bullets: [
        {
          t: 'Fixtures & conftest',
          b: '@pytest.fixture builds reusable setup. Put shared fixtures in conftest.py. Scopes: function (default), class, module, session.',
        },
        {
          t: 'pytest-playwright',
          b: 'The plugin gives you page, context, browser fixtures and CLI flags for browser/project. Prefer fixtures over manual sync_playwright in every test.',
          code: '# conftest.py can wrap page for base URL, tracing, etc.\ndef test_home(page):\n    page.goto("/")\n    assert page.get_by_role("heading").is_visible()',
          result: 'pytest picks up the page fixture automatically.',
        },
      ],
    }),
    lesson({
      id: 'pw-3-org',
      phase,
      level: 'intermediate',
      title: '13. Test Organization',
      minutes: 45,
      overview: 'Markers, parametrize, smoke vs regression tagging.',
      learn: ['Markers', 'Parametrize', 'Selective runs'],
      docsUrl: 'https://docs.pytest.org/en/stable/how-to/mark.html',
      bullets: [
        {
          t: 'Markers & tags',
          b: '@pytest.mark.smoke / regression let CI run fast suites on PR and full suites nightly. Register marks in pytest.ini.',
        },
        {
          t: 'Parametrize',
          b: '@pytest.mark.parametrize drives data-driven cases without copy-paste. Keep tables readable; move big data to JSON fixtures.',
          code: '@pytest.mark.smoke\n@pytest.mark.parametrize("user,ok", [("a@b.com", True), ("bad", False)])\ndef test_login(page, user, ok):\n    ...',
          result: 'Two cases run; smoke selection works via -m smoke.',
        },
      ],
    }),
    lesson({
      id: 'pw-3-pom',
      phase,
      level: 'intermediate',
      title: '14. Page Object Model (POM)',
      minutes: 60,
      overview: 'Why POM, folder structure, base page, page classes with locators + methods.',
      learn: ['Why POM', 'BasePage', 'Page methods'],
      docsUrl: `${DOC}/pom`,
      bullets: [
        {
          t: 'Why POM',
          b: 'Centralize selectors and user flows so tests read like business steps. When the UI changes, you edit one page class — not fifty tests.',
        },
        {
          t: 'Structure',
          b: 'pages/base_page.py + feature pages. Expose methods like login_as(user), not raw locators in tests. Keep assertions in tests or dedicated expect helpers.',
          code: 'class LoginPage:\n    def __init__(self, page):\n        self.page = page\n    def login(self, email, password):\n        self.page.get_by_label("Email").fill(email)\n        self.page.get_by_label("Password").fill(password)\n        self.page.get_by_role("button", name="Sign in").click()',
          result: 'test_login calls LoginPage(page).login(...).',
        },
        {
          t: 'Anti-pattern check',
          b: 'Avoid god-objects and asserting everything inside pages. Pages act; tests assert outcomes.',
        },
      ],
    }),
    lesson({
      id: 'pw-3-config',
      phase,
      level: 'intermediate',
      title: '15. Configuration Management',
      minutes: 45,
      overview: 'pytest.ini / conftest as config, env vars, base URLs, dev/staging/prod.',
      learn: ['Env vars', 'Base URL', 'Multi-env'],
      docsUrl: `${DOC}/test-runners`,
      bullets: [
        {
          t: 'Config surfaces',
          b: 'pytest.ini for markers and defaults; environment variables for secrets and BASE_URL. Never commit credentials.',
        },
        {
          t: 'Environments',
          b: 'Switch BASE_URL=https://staging... in CI jobs. Fail fast if required env vars are missing.',
          code: 'import os\nBASE_URL = os.environ["BASE_URL"]\n\ndef test_home(page):\n    page.goto(BASE_URL)',
          result: 'Same suite targets staging or prod via env only.',
        },
      ],
    }),
    lesson({
      id: 'pw-3-data',
      phase,
      level: 'intermediate',
      title: '16. Test Data Management',
      minutes: 50,
      overview: 'JSON/CSV/YAML fixtures, faker for dynamic data, cleanup strategies.',
      learn: ['Static fixtures', 'Faker', 'Cleanup'],
      docsUrl: `${DOC}/api-testing`,
      bullets: [
        {
          t: 'Static + dynamic',
          b: 'Keep golden datasets in data/*.json. Use faker for unique emails/names so parallel runs don’t collide.',
        },
        {
          t: 'Cleanup',
          b: 'Prefer API teardown or disposable tenants over leaving UI junk. Document who owns cleanup when tests create billable resources.',
          code: 'import json\nfrom faker import Faker\nfake = Faker()\nuser = {"email": fake.email(), **json.load(open("data/user_template.json"))}',
          result: 'Unique user each run; template keeps required fields.',
        },
      ],
    }),
  ]
}

function part4() {
  const phase = 'Part 4 · Advanced Techniques'
  return [
    lesson({
      id: 'pw-4-network',
      phase,
      level: 'advanced',
      title: '17. Network Interception & Mocking',
      minutes: 55,
      overview: 'page.route basics, mock API responses, block images/ads for speed.',
      learn: ['route', 'Fulfill mocks', 'Block assets'],
      docsUrl: `${DOC}/network`,
      bullets: [
        {
          t: 'route & fulfill',
          b: 'page.route(glob, handler) intercepts requests. Fulfill with stub JSON to test UI states the backend cannot easily produce.',
        },
        {
          t: 'Speed tricks',
          b: 'Abort image/font/analytics routes in smoke suites to cut time — keep full assets in visual tests.',
          code: 'def handle(route):\n    route.fulfill(status=200, json={"items": []})\npage.route("**/api/items", handle)\npage.route("**/*.{png,jpg}", lambda r: r.abort())',
          result: 'Empty-state UI renders; images skipped.',
        },
      ],
    }),
    lesson({
      id: 'pw-4-api',
      phase,
      level: 'advanced',
      title: '18. API Testing with Playwright',
      minutes: 55,
      overview: 'APIRequestContext GET/POST/PUT/DELETE; combine UI + API in one suite.',
      learn: ['request context', 'CRUD via API', 'Hybrid tests'],
      docsUrl: `${DOC}/api-testing`,
      bullets: [
        {
          t: 'APIRequestContext',
          b: 'Use playwright.request or the request fixture for HTTP calls with shared storage state. Assert status and JSON schema-ish fields.',
        },
        {
          t: 'Hybrid pattern',
          b: 'Seed data via API, assert via UI (or reverse). Faster and more stable than clicking through setup every time.',
          code: 'def test_item_ui(page, request):\n    request.post("/api/items", data={"name": "Milk"})\n    page.goto("/items")\n    expect(page.get_by_text("Milk")).to_be_visible()',
          result: 'UI shows API-created row.',
        },
      ],
    }),
    lesson({
      id: 'pw-4-visual',
      phase,
      level: 'advanced',
      title: '19. Visual & Accessibility Testing',
      minutes: 55,
      overview: 'Screenshot comparison, dynamic content masking, axe-core a11y checks.',
      learn: ['to_have_screenshot', 'Masking', 'axe'],
      docsUrl: `${DOC}/test-snapshots`,
      bullets: [
        {
          t: 'Visual diffs',
          b: 'expect(page).to_have_screenshot() catches unintended UI drift. Mask clocks/avatars; freeze animations.',
        },
        {
          t: 'Accessibility',
          b: 'Integrate axe-core (e.g. via axe-playwright helpers) and fail on serious/critical violations. Teach the team to read the violation report.',
          code: '# Pseudocode — wire your chosen axe helper\n# results = inject_axe_and_run(page)\n# assert no critical violations',
          result: 'CI fails on new critical a11y issues.',
        },
      ],
    }),
    lesson({
      id: 'pw-4-auth',
      phase,
      level: 'advanced',
      title: '20. Authentication & Session Reuse',
      minutes: 50,
      overview: 'storage_state — login once, reuse sessions; global setup patterns.',
      learn: ['storage_state', 'Global setup', 'Security'],
      docsUrl: `${DOC}/auth`,
      bullets: [
        {
          t: 'Save state',
          b: 'Log in once, context.storage_state(path="auth.json"). Later tests create contexts with storage_state= that file.',
        },
        {
          t: 'Global setup',
          b: 'Run auth setup in CI before the suite. Rotate credentials via secrets; never commit auth.json with real prod tokens.',
          code: 'context = browser.new_context(storage_state="auth.json")\npage = context.new_page()\npage.goto("/dashboard")',
          result: 'Land authenticated without UI login each test.',
        },
      ],
    }),
    lesson({
      id: 'pw-4-shadow',
      phase,
      level: 'advanced',
      title: '21. Shadow DOM & Complex Components',
      minutes: 45,
      overview: 'Piercing shadow DOM and custom web components.',
      learn: ['Shadow piercing', 'Open vs closed', 'Component libraries'],
      docsUrl: `${DOC}/locators`,
      bullets: [
        {
          t: 'Pierce open shadow',
          b: 'Playwright locators pierce open shadow roots by default in many cases — prefer role/text still. For closed shadow, you may need component APIs or test IDs exposed by the design system.',
        },
        {
          t: 'Custom components',
          b: 'Work with your design-system team to expose accessible roles and test ids. Fighting closed shadow from tests is a smell.',
          code: 'page.locator("my-widget").get_by_role("button", name="Expand").click()',
          result: 'Shadow-hosted button clicks via chained locator.',
        },
      ],
    }),
    lesson({
      id: 'pw-4-parallel',
      phase,
      level: 'advanced',
      title: '22. Parallel Execution & Sharding',
      minutes: 45,
      overview: 'pytest-xdist for parallel runs; shard across CI runners.',
      learn: ['xdist', 'Isolation', 'Sharding'],
      docsUrl: 'https://pytest-xdist.readthedocs.io/',
      bullets: [
        {
          t: 'pytest-xdist',
          b: 'pytest -n auto runs workers in parallel. Tests must not share mutable state or the same user account without locks.',
        },
        {
          t: 'Sharding',
          b: 'Split suites across machines with shard markers or CI matrix indices. Keep smoke non-sharded for fast PR signal.',
          code: 'pytest -n 4 -m "not slow"',
          result: 'Workers finish faster; no cross-talk if data is isolated.',
        },
      ],
    }),
    lesson({
      id: 'pw-4-cross',
      phase,
      level: 'advanced',
      title: '23. Cross-browser & Cross-device',
      minutes: 50,
      overview: 'Chromium, Firefox, WebKit; mobile emulation via device descriptors.',
      learn: ['Multi-browser CI', 'Devices', 'Geolocation'],
      docsUrl: `${DOC}/emulation`,
      bullets: [
        {
          t: 'Browsers',
          b: 'Run the same tests on chromium, firefox, webkit in CI. Fix WebKit-only bugs early — they surprise desktop Safari users.',
        },
        {
          t: 'Mobile emulation',
          b: 'Use device descriptors for viewport, user agent, touch. Emulation ≠ real device farms, but catches many responsive bugs cheaply.',
          code: 'iphone = p.devices["iPhone 13"]\ncontext = browser.new_context(**iphone)\npage = context.new_page()',
          result: 'Layout asserts under iPhone viewport.',
        },
      ],
    }),
    lesson({
      id: 'pw-4-debug',
      phase,
      level: 'advanced',
      title: '24. Debugging Tools',
      minutes: 50,
      overview: 'Inspector, Trace Viewer, Codegen for generating scripts.',
      learn: ['PWDEBUG', 'Traces', 'Codegen'],
      docsUrl: `${DOC}/debug`,
      bullets: [
        {
          t: 'Inspector & codegen',
          b: 'PWDEBUG=1 pauses with Inspector. codegen records actions into script — treat as a draft, then rewrite with POM/role locators.',
        },
        {
          t: 'Trace Viewer',
          b: 'Record traces on retry/failure. Open the zip in Trace Viewer to see DOM snapshots, network, and console — the #1 flake killer.',
          code: '# pytest-playwright: --tracing retain-on-failure\n# or context.tracing.start/stop',
          result: 'You open a trace and pinpoint the failed action.',
        },
      ],
    }),
  ]
}

function part5() {
  const phase = 'Part 5 · CI/CD & Reporting'
  return [
    lesson({
      id: 'pw-5-ci',
      phase,
      level: 'advanced',
      title: '25. CI/CD Integration',
      minutes: 55,
      overview: 'GitHub Actions, Jenkins basics, headless in CI.',
      learn: ['GH Actions', 'Jenkins sketch', 'Headless'],
      docsUrl: `${DOC}/ci`,
      bullets: [
        {
          t: 'GitHub Actions',
          b: 'Install OS deps, Python, browsers (playwright install --with-deps), run pytest, upload artifacts. Cache browsers when possible.',
        },
        {
          t: 'Jenkins & headless',
          b: 'Same idea in a pipeline stage: venv → install → headless tests. Fail the build on non-zero pytest.',
          code: '# .github/workflows/e2e.yml (sketch)\n# - run: pip install -r requirements.txt\n# - run: playwright install --with-deps\n# - run: pytest -m smoke',
          result: 'PR checks show red/green smoke.',
        },
      ],
    }),
    lesson({
      id: 'pw-5-report',
      phase,
      level: 'advanced',
      title: '26. Test Reporting',
      minutes: 45,
      overview: 'pytest-html, Allure setup, publish reports as CI artifacts.',
      learn: ['HTML report', 'Allure', 'Artifacts'],
      docsUrl: 'https://pytest-html.readthedocs.io/',
      bullets: [
        {
          t: 'HTML & Allure',
          b: 'pytest-html is the lightweight default. Allure adds richer history and attachments when the team wants a dashboard.',
        },
        {
          t: 'Publish',
          b: 'Upload report folders as CI artifacts. Link them from the job summary so failures are one click away.',
          code: 'pytest --html=report/report.html --self-contained-html',
          result: 'Single HTML file downloadable from CI.',
        },
      ],
    }),
    lesson({
      id: 'pw-5-docker',
      phase,
      level: 'advanced',
      title: '27. Dockerizing Playwright Tests',
      minutes: 50,
      overview: 'Official Playwright Docker images and Dockerfile patterns for the framework.',
      learn: ['Official image', 'Dockerfile', 'CI containers'],
      docsUrl: `${DOC}/docker`,
      bullets: [
        {
          t: 'Official images',
          b: 'Microsoft publishes images with browsers and OS deps preinstalled. Start there before inventing your own apt soup.',
        },
        {
          t: 'Project Dockerfile',
          b: 'COPY requirements and tests, install Python deps, set CI=1. Keep image tags pinned.',
          code: '# FROM mcr.microsoft.com/playwright/python:v1.xx.x-jammy\n# COPY . /app\n# WORKDIR /app\n# RUN pip install -r requirements.txt\n# CMD ["pytest", "-m", "smoke"]',
          result: 'docker run reproduces CI locally.',
        },
      ],
    }),
    lesson({
      id: 'pw-5-logging',
      phase,
      level: 'advanced',
      title: '28. Logging & Error Handling',
      minutes: 45,
      overview: 'Custom logging, screenshot/video on failure, retry for flakes.',
      learn: ['Logging', 'Failure artifacts', 'Retries'],
      docsUrl: `${DOC}/test-retries`,
      bullets: [
        {
          t: 'Artifacts on failure',
          b: 'Hook into pytest to capture screenshot/video/trace when a test fails. Attach paths in the report.',
        },
        {
          t: 'Retries with care',
          b: 'Retries hide bugs if overused. Retry once for known infra flakes; quarantine chronic flakes with owners.',
          code: '# pytest.ini\n# addopts = --tracing retain-on-failure\n# use flaky/rerunfailures sparingly',
          result: 'Failed job has screenshot + trace zip.',
        },
      ],
    }),
  ]
}

function part6() {
  const phase = 'Part 6 · Pro-Level Practices'
  return [
    lesson({
      id: 'pw-6-framework',
      phase,
      level: 'advanced',
      title: '29. Building a Scalable Framework from Scratch',
      minutes: 60,
      overview: 'Enterprise folder architecture, helpers layer, config-driven execution.',
      learn: ['Folders', 'Helpers', 'Config-driven'],
      docsUrl: `${DOC}/best-practices`,
      bullets: [
        {
          t: 'Architecture',
          b: 'Separate tests/, pages/, flows/, data/, utils/, config/. Flows compose pages for multi-step journeys. Utils never import tests.',
        },
        {
          t: 'Config-driven runs',
          b: 'Select browser, env, markers, and workers from config/CLI — not hardcoded in tests.',
          code: 'tests/\npages/\nflows/\ndata/\nutils/\nconfig/\nconftest.py\npytest.ini',
          result: 'New hire finds where to put a page object in 30 seconds.',
        },
      ],
    }),
    lesson({
      id: 'pw-6-scale',
      phase,
      level: 'advanced',
      title: '30. Managing Test Suites at Scale',
      minutes: 55,
      overview: 'Tagging, flake triage, custom reporters, TestRail/Xray integrations.',
      learn: ['Selective exec', 'Flake process', 'TMS links'],
      docsUrl: `${DOC}/best-practices`,
      bullets: [
        {
          t: 'Tags & flakes',
          b: 'Large suites need smoke/regression/nightly tags. Track flakes with owner + quarantine SLA — don’t just retry forever.',
        },
        {
          t: 'Reporters & TMS',
          b: 'Custom pytest plugins can push results to TestRail/Xray. Keep IDs in markers so cases sync.',
          code: '@pytest.mark.testcase("TR-204")\ndef test_checkout(page): ...',
          result: 'Results land in the test management tool.',
        },
      ],
    }),
    lesson({
      id: 'pw-6-review',
      phase,
      level: 'advanced',
      title: '31. Code Review & Best Practices',
      minutes: 40,
      overview: 'Naming, DRY, anti-patterns, documentation standards for shared frameworks.',
      learn: ['Naming', 'Anti-patterns', 'Docs'],
      docsUrl: `${DOC}/best-practices`,
      bullets: [
        {
          t: 'Review bar',
          b: 'Reject sleeps, brittle CSS, duplicated logins, and secrets in code. Prefer role locators and expect().',
        },
        {
          t: 'Docs',
          b: 'README: how to run, env vars, markers, how to add a page object. Short > novel.',
          code: '# Anti-patterns\n# - time.sleep(5)\n# - page.locator(".css-1a2b3c")\n# - login UI in every test',
          result: 'PR checklist matches the README standards.',
        },
      ],
    }),
    lesson({
      id: 'pw-6-perf',
      phase,
      level: 'advanced',
      title: '32. Performance Considerations',
      minutes: 40,
      overview: 'Cut execution time: locators, waits, worker tuning.',
      learn: ['Faster setup', 'Locator cost', 'Workers'],
      docsUrl: `${DOC}/best-practices`,
      bullets: [
        {
          t: 'Speed levers',
          b: 'Reuse auth state, API seed data, block heavy assets in non-visual tests, keep locators tight, parallelize with isolation.',
        },
        {
          t: 'Tune workers',
          b: 'More workers help until the app or DB saturates. Measure; don’t guess. Split slow tests to nightly.',
          code: '# PR: pytest -n 4 -m smoke\n# Nightly: pytest -n auto',
          result: 'PR feedback under your team’s SLA.',
        },
      ],
    }),
  ]
}

function part7() {
  const phase = 'Part 7 · Real-World Project & Job Readiness'
  return [
    lesson({
      id: 'pw-7-capstone',
      phase,
      level: 'advanced',
      title: '33. Real-World Capstone Project',
      minutes: 120,
      overview: 'E2E framework: login, CRUD, API validation, auth reuse, CI/CD — then refactor.',
      learn: ['Hybrid suite', 'Auth + CI', 'Refactor pass'],
      docsUrl: `${DOC}/intro`,
      bullets: [
        {
          t: 'Build the spine',
          b: 'Ship a public demo app suite: login with storage_state, CRUD via UI, verify via API, one mocked error state, traces on failure.',
        },
        {
          t: 'CI + refactor',
          b: 'Green GitHub Action with artifacts. Do a deliberate refactor pass: POM cleanup, markers, README. Capstone quality > feature count.',
          code: '# Capstone checklist\n# [ ] smoke + regression markers\n# [ ] auth.json from setup (secret user)\n# [ ] API assert after UI create\n# [ ] CI artifact: html + trace',
          result: 'Repo tells a hiring story without you in the room.',
          tip: 'Record a 3-minute demo walkthrough.',
        },
        {
          t: 'Code review pass',
          b: 'Invite a peer or mentor. Fix naming, delete sleeps, ensure one obvious entrypoint to run tests.',
        },
      ],
      practiceBrief: 'Public GitHub repo with CI badge and sample report screenshot.',
    }),
    lesson({
      id: 'pw-7-portfolio',
      phase,
      level: 'advanced',
      title: '34. Portfolio Building',
      minutes: 60,
      overview: 'Structure a GitHub repo for recruiters; README that sells the framework; short demo.',
      learn: ['Repo structure', 'README story', 'Demo video'],
      docsUrl: `${DOC}/intro`,
      career: true,
      bullets: [
        {
          t: 'Recruiter skim',
          b: 'Top of README: what you automated, stack (Python/Playwright/pytest), how to run in 3 commands, CI badge, architecture diagram, one GIF/screenshot.',
        },
        {
          t: 'Demo walkthrough',
          b: 'Record 2–4 minutes: run smoke, show report, open a trace. Upload unlisted YouTube/Loom and link it.',
          code: '## Playwright Python Framework\n- Smoke: pytest -m smoke\n- Stack: pytest + POM + GH Actions\n- Demo: <link>',
          result: 'Cold reader understands value in under a minute.',
        },
      ],
      practiceBrief: 'README + demo link committed.',
    }),
    lesson({
      id: 'pw-7-interview',
      phase,
      level: 'advanced',
      title: '35. Interview Prep',
      minutes: 70,
      overview: 'Common Playwright questions, scenarios, explaining POM/fixtures/CI.',
      learn: ['Q&A bank', 'Scenario drills', 'Explain frameworks'],
      docsUrl: `${DOC}/best-practices`,
      career: true,
      bullets: [
        {
          t: 'Core questions',
          b: 'Be ready on: auto-wait, locators, POM, fixtures, storage_state, traces, flakes, parallelization, and when you’d mock vs hit real APIs.',
        },
        {
          t: 'Scenario practice',
          b: 'Whiteboard: “Login is flaky in CI — diagnose.” Talk Trace Viewer, isolation, waits, environment parity. Explain POM and CI as a story from your capstone.',
          code: 'Q: Why not time.sleep?\nA: Actionability + expect() retry; sleep hides races and slows suites.\n\nQ: How do you reuse login?\nA: storage_state from global setup; secrets in CI.',
          result: 'You answer in structured bullets under 2 minutes each.',
        },
        {
          t: 'Mock interview',
          b: 'Do one timed session with a friend. Record yourself. Fix filler words and missing examples.',
          quiz: {
            question: 'Best evidence in a Playwright interview?',
            options: [
              'Only buzzwords',
              'Capstone story + tradeoffs you made',
              'Claiming 0% flakes always',
              'Refusing to discuss CI',
            ],
            answer: 1,
          },
        },
      ],
      practiceBrief: 'One-page answer bank for 10 likely questions.',
    }),
    lesson({
      id: 'pw-7-career',
      phase,
      level: 'advanced',
      title: '36. Career Positioning',
      minutes: 50,
      overview: 'Frame manual QA experience with automation skills; resume bullets that hire.',
      learn: ['Narrative', 'Resume bullets', 'Target roles'],
      docsUrl: `${DOC}/intro`,
      career: true,
      bullets: [
        {
          t: 'Bridge the story',
          b: 'Manual QA is domain strength — pair it with Playwright outcomes: fewer regressions, faster releases, measurable coverage of critical paths.',
        },
        {
          t: 'Resume bullets',
          b: 'Use verb + stack + impact. Example: “Built Python/Playwright smoke suite (pytest, POM, GH Actions) covering checkout; cut release regression time from 1 day to 40 minutes.”',
          code: '- Designed POM framework with storage_state auth reuse\n- Added API+UI hybrid checks for CRUD reliability\n- Published CI artifacts (HTML + traces) for faster triage',
          result: 'Three bullets a hiring manager can scan.',
          doThis: 'Rewrite your top 3 resume bullets tonight.',
        },
      ],
      practiceBrief: 'Updated resume + LinkedIn “Featured” link to capstone.',
    }),
  ]
}

function serialize(value, indent = 0) {
  const pad = '  '.repeat(indent)
  const pad2 = '  '.repeat(indent + 1)
  if (value === null) return 'null'
  if (typeof value === 'string') return JSON.stringify(value)
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    const items = value.map((v) => `${pad2}${serialize(v, indent + 1)}`).join(',\n')
    return `[\n${items},\n${pad}]`
  }
  if (typeof value === 'object') {
    const keys = Object.keys(value).filter((k) => value[k] !== undefined && value[k] !== null)
    if (keys.length === 0) return '{}'
    const fields = keys
      .map((k) => `${pad2}${k}: ${serialize(value[k], indent + 1)}`)
      .join(',\n')
    return `{\n${fields},\n${pad}}`
  }
  throw new Error(`Cannot serialize ${typeof value}`)
}

const file = `import { ch } from '../helpers'

/** Playwright + Python — Beginner → Pro manual (lesson-card ready). */
export const playwrightPythonManual = {
  id: 'playwright',
  title: 'Playwright with Python',
  tagline: 'Complete Beginner-to-Pro Manual — background through job-ready capstone.',
  category: 'automation',
  accent: '#1B4D3E',
  cover: 'covers/playwright-cover.png',
  duration: '4–6 months (1–2 hrs/day)',
  levelSpan: 'Zero → Job-ready',
  who: 'Beginners and manual QAs aiming to become Playwright Automation Engineers with Python.',
  outcomes: [
    'Automate Chromium/Firefox/WebKit with sync Playwright + pytest',
    'Build POM frameworks with data, mocking, auth reuse, and CI reporting',
    'Ship a capstone portfolio and interview-ready stories',
  ],
  pace: {
    hoursPerDay: '1–2 hours/day',
    recommended: '~4–6 months',
    accelerated: '~3 months at 3–4 hrs/day',
    slow: '~7–9 months if busy',
  },
  chapters: [
${chapters.map((c) => `    ch(${serialize(c, 2)}),`).join('\n')}
  ],
}
`

fs.writeFileSync(out, file)
console.log(`Wrote ${chapters.length} chapters → ${out}`)
