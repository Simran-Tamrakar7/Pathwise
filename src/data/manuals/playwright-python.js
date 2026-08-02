import { ch } from '../helpers'

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
    ch({
      id: "pw-0-what",
      phase: "Part 0 · Background",
      level: "beginner",
      title: "0. What is Playwright, Really",
      minutes: 35,
      durationLabel: "Day 1",
      overview: "Microsoft’s modern browser automation toolkit — history, why it exists, and why Python teams care.",
      learn: [
        "Playwright lineage from Puppeteer",
        "Why Microsoft built it",
        "Open-source maintenance reality",
      ],
      steps: [
        {
          title: "History in one minute",
          body: "Playwright was built by Microsoft engineers who previously worked on Puppeteer. It is open-source, actively maintained, and designed for reliable end-to-end automation across Chromium, Firefox, and WebKit.",
          learnMore: "Puppeteer focused on Chromium. Playwright generalized the architecture for multi-browser, auto-waiting, and richer tooling (traces, codegen, network mocking).",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Playwright multi-browser path diagram — tap the sticky notes",
            stickies: [
              {
                id: 'hack',
                x: 4,
                y: 3,
                label: 'Pathwise hack',
                body: 'Tap stickies for tips. Drag them onto the window or path they describe.',
                color: 'mint',
              },
              {
                id: 'hub',
                x: 40,
                y: 36,
                label: 'The page under test',
                body: 'Playwright drives a real page — locators match how users see the UI.',
                color: 'cream',
              },
              {
                id: 'paths',
                x: 12,
                y: 55,
                label: 'The automation path',
                body: 'Dashed roads = open → act → assert. Short paths flake less.',
                color: 'sky',
              },
              {
                id: 'browsers',
                x: 68,
                y: 12,
                label: 'Multi-browser',
                body: 'Chromium, Firefox, WebKit — same script. Puppeteer stayed Chromium-first; Playwright didn’t.',
                color: 'peach',
              },
            ],
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "GitHub",
              url: "https://github.com/microsoft/playwright-python",
              kind: "Repo",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/2023/11/08/playwright-python-tutorial-an-introduction/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "Playwright was created primarily to…",
            options: [
              "Replace all databases",
              "Close gaps in older browser automation tools",
              "Only scrape static HTML",
              "Replace pytest",
            ],
            answer: 1,
            explain: "It targets flaky waits, limited browser coverage, and weak tooling in older stacks.",
          },
          doThis: "Write one sentence: “Playwright exists because ___.”",
        },
        {
          title: "Open-source, Microsoft-backed",
          body: "The project lives in the open with frequent releases. Microsoft backing means CI investment and long-term signal for hiring teams — still treat it like any OSS dependency: pin versions.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder: GitHub stars / release cadence illustration",
          },
          resources: [
            {
              label: "Releases",
              url: "https://github.com/microsoft/playwright-python/releases",
              kind: "Repo",
            },
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "What command installs the Python package?",
            code: "pip install playwright\nplaywright install",
            result: "Package installed; browser binaries downloaded for Chromium/Firefox/WebKit.",
          },
        },
      ],
      checklist: [
        "I can explain Playwright’s origin",
        "I skimmed the Python intro docs",
      ],
      practice: {
        title: "Origin note",
        brief: "Add a “Why Playwright” section to LEARNING.md (5 lines).",
      },
      resources: [
        {
          type: "doc",
          name: "Playwright Python Intro",
          url: "https://playwright.dev/python/docs/intro",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-0-where",
      phase: "Part 0 · Background",
      level: "beginner",
      title: "1. Where Playwright is Used",
      minutes: 30,
      overview: "UI E2E, API checks, visual diffs, scraping, cross-browser QA — and the industries that hire for it.",
      learn: [
        "Primary use cases",
        "Industry contexts",
        "When not to force Playwright",
      ],
      steps: [
        {
          title: "Core use cases",
          body: "Teams use Playwright for functional and regression UI tests, API checks via request context, visual regression, careful scraping, and cross-browser compatibility. Anywhere a web app needs automated QA, Playwright is on the shortlist.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder collage: e-commerce checkout, SaaS dashboard, banking login",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/watch?v=GmTmPHXJR6k",
              kind: "Video",
            },
          ],
          quiz: {
            question: "Which is a typical Playwright job?",
            options: [
              "Native iOS UIKit unit tests",
              "Web UI + API end-to-end automation",
              "GPU driver fuzzing",
              "Mainframe batch jobs",
            ],
            answer: 1,
          },
        },
        {
          title: "Industries",
          body: "E-commerce, SaaS, banking, and healthcare all ship web apps under regulatory or velocity pressure. Automated QA reduces release risk; Playwright’s reliability pitch is why hiring spikes here.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder: industry icons for commerce, SaaS, bank, health",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Article",
              url: "https://playwright.dev/",
              kind: "Article",
            },
          ],
          doThis: "List three apps you use daily that could use Playwright E2E.",
        },
      ],
      checklist: [
        "Named 3 real use cases",
        "Named one industry I’d target",
      ],
    }),
    ch({
      id: "pw-0-cando",
      phase: "Part 0 · Background",
      level: "beginner",
      title: "2. What Playwright Can Do",
      minutes: 35,
      overview: "One API for Chromium/Firefox/WebKit, mobile emulation, auto-wait, network mock, multi-context, traces — and pytest for Python.",
      learn: [
        "Browser matrix",
        "Auto-wait & tooling",
        "Python runner reality",
      ],
      steps: [
        {
          title: "Browser coverage",
          body: "Automate Chromium, Firefox, and WebKit with one API. Emulate mobile viewports and geolocation without a physical device. Run headless in CI or headed while debugging.",
          learnMore: "JS/TS gets the built-in Playwright Test runner. Python teams typically use pytest + pytest-playwright for fixtures and reporting.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder: three browser logos + phone frame",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/browsers",
              kind: "Docs",
            },
            {
              label: "Emulation",
              url: "https://playwright.dev/python/docs/emulation",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "Python Playwright tests usually run with…",
            options: [
              "JUnit only",
              "pytest-playwright",
              "XCTest",
              "RSpec",
            ],
            answer: 1,
          },
        },
        {
          title: "Reliability tooling",
          body: "Auto-waiting removes most sleep hacks. Network interception mocks APIs. Multi-tab and multi-context simulate users. Traces, video, and screenshots ship built-in; parallel runs scale the suite.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder: Trace Viewer timeline screenshot",
          },
          resources: [
            {
              label: "Trace",
              url: "https://playwright.dev/python/docs/trace-viewer-intro",
              kind: "Docs",
            },
            {
              label: "Network",
              url: "https://playwright.dev/python/docs/network",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Mental model",
            code: "# Auto-wait → click when actionable\n# Trace on → debug flakes without guessing\n# Context → isolated cookies/storage per user",
            result: "You explain each line to a junior without opening docs.",
          },
        },
      ],
      checklist: [
        "I can name 5 capabilities",
        "I know Python uses pytest-playwright",
      ],
    }),
    ch({
      id: "pw-0-why",
      phase: "Part 0 · Background",
      level: "beginner",
      title: "3. Why Companies Choose Playwright",
      minutes: 30,
      overview: "Speed and lower flakiness vs Selenium; modern SPA support; growing job demand.",
      learn: [
        "Vs Selenium",
        "Vs Cypress",
        "Market signal",
      ],
      steps: [
        {
          title: "Vs Selenium",
          body: "Playwright is generally faster and less flaky than classic Selenium stacks because of auto-waiting and a modern protocol. SPAs, shadow DOM, and iframes are first-class concerns rather than afterthoughts.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder: speed/reliability comparison sketch",
          },
          resources: [
            {
              label: "Why",
              url: "https://playwright.dev/python/docs/why-playwright",
              kind: "Docs",
            },
            {
              label: "Article",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Article",
            },
          ],
          quiz: {
            question: "A common reason teams leave Selenium is…",
            options: [
              "Playwright cannot open URLs",
              "High flakiness and slow feedback loops",
              "Selenium supports more browsers than Playwright",
              "Selenium has no language bindings",
            ],
            answer: 1,
          },
        },
        {
          title: "Vs Cypress & demand",
          body: "Cypress is strong for JS-centric teams; Playwright wins on true multi-browser (including WebKit) and multi-language APIs. Job posts increasingly list Playwright — useful signal for career positioning.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder: job-post keyword chart",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          doThis: "Skim 3 job posts mentioning Playwright; note shared skills.",
        },
      ],
      checklist: [
        "Interview pitch drafted",
      ],
    }),
    ch({
      id: "pw-0-not",
      phase: "Part 0 · Background",
      level: "beginner",
      title: "4. What This Manual Will NOT Cover",
      minutes: 20,
      overview: "Python-only Playwright. No Appium native apps. No load tools (k6/JMeter/Locust).",
      learn: [
        "Scope boundaries",
        "Where to go instead",
      ],
      steps: [
        {
          title: "Explicit non-goals",
          body: "This path is Playwright with Python. It does not teach the JS/TS Playwright Test runner in depth, native mobile (Appium), or load/performance testing with k6, JMeter, or Locust.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Placeholder: three crossed-out icons — Appium, k6, JS-only",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Appium",
              url: "https://appium.io/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "Which belongs in a different course?",
            options: [
              "pytest fixtures for Playwright",
              "page.route mocking",
              "Native Android UI automation with Appium",
              "storage_state auth reuse",
            ],
            answer: 2,
          },
          doThis: "Write your personal “in scope / out of scope” sticky for this manual.",
        },
      ],
      checklist: [
        "I know what this manual skips",
      ],
    }),
    ch({
      id: "pw-1-intro",
      phase: "Part 1 · Foundations",
      level: "beginner",
      title: "1. Introduction to Playwright",
      minutes: 40,
      overview: "What Playwright is, why it exists, vs Selenium/Cypress, supported browsers & languages.",
      learn: [
        "Positioning vs Selenium/Cypress",
        "Supported browsers",
        "Language bindings",
      ],
      steps: [
        {
          title: "What & why",
          body: "Playwright is a browser automation library for reliable E2E tests. It exists to make modern web testing less flaky and more multi-browser than older stacks.",
          learnMore: "Official docs cover install, first test, and the mental model of Browser → Context → Page.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 1. Introduction to Playwright",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=1.%20Introduction%20to%20Playwright%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "Playwright’s Python binding…",
            options: [
              "Does not exist",
              "Is official and sync/async capable",
              "Only works with Internet Explorer",
              "Requires Cypress installed",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 1. Introduction to Playwright.",
        },
        {
          title: "Comparisons & support",
          body: "Selenium is mature but often slower/flakier without careful waits. Cypress is excellent in JS with some browser limits. Playwright supports Chromium, Firefox, WebKit and bindings including Python, JS/TS, Java, .NET.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 1. Introduction to Playwright",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# Mental map\n# Selenium = WebDriver ecosystem\n# Cypress = JS-first runner\n# Playwright = multi-browser, multi-lang, strong tooling",
            result: "You can pick Playwright for Python multi-browser E2E without apologizing.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 1. Introduction to Playwright.",
        },
      ],
      checklist: [
        "Can explain 1. Introduction to Playwright without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "1. Introduction to Playwright deliverable",
        brief: "Ship a small artifact proving mastery of 1. Introduction to Playwright.",
      },
      resources: [
        {
          type: "doc",
          name: "1. Introduction to Playwright docs",
          url: "https://playwright.dev/python/docs/intro",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-1-setup",
      phase: "Part 1 · Foundations",
      level: "beginner",
      title: "2. Environment Setup",
      minutes: 50,
      overview: "Python, pip, venv, Playwright install, browser binaries, folder structure.",
      learn: [
        "venv discipline",
        "playwright install",
        "Project layout",
      ],
      steps: [
        {
          title: "Python + venv",
          body: "Create a virtual environment, activate it, then install packages inside it. Never pollute the global interpreter for project work.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 2. Environment Setup",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=2.%20Environment%20Setup%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “2. Environment Setup”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Create ~/pw-lab with a venv and activate it.",
        },
        {
          title: "Browsers + structure",
          body: "pip install playwright pytest-playwright, then playwright install. Use a simple layout: tests/, pages/, data/, conftest.py, pytest.ini, README.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 2. Environment Setup",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "python -m venv .venv\nsource .venv/bin/activate  # Windows: .venv\\Scripts\\activate\npip install playwright pytest-playwright\nplaywright install",
            result: "Browsers download; pytest --help shows playwright options after plugin install.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 2. Environment Setup.",
        },
        {
          title: "Verify",
          body: "Run a one-liner that launches Chromium headed, opens example.com, and prints the title. Fix PATH/venv issues before writing real tests.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Deep dive: 2. Environment Setup",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "You are stuck on “2. Environment Setup”. Best move?",
            options: [
              "Rewrite the whole framework tonight",
              "Reproduce with Trace Viewer / Inspector",
              "Delete the test and hope",
              "Ignore CI forever",
            ],
            answer: 1,
          },
          doThis: "Explain “2. Environment Setup” out loud in 60 seconds.",
        },
      ],
      checklist: [
        "Can explain 2. Environment Setup without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "2. Environment Setup deliverable",
        brief: "Repo with venv instructions + empty tests/ folder committed.",
      },
      resources: [
        {
          type: "doc",
          name: "2. Environment Setup docs",
          url: "https://playwright.dev/python/docs/intro",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-1-arch",
      phase: "Part 1 · Foundations",
      level: "beginner",
      title: "3. Playwright Architecture",
      minutes: 45,
      overview: "Browser → BrowserContext → Page. Sync vs Async API. CDP/WebSocket under the hood.",
      learn: [
        "Hierarchy",
        "Sync vs async",
        "How drivers talk",
      ],
      steps: [
        {
          title: "Hierarchy",
          body: "Browser is the process. BrowserContext is an isolated profile (cookies, storage). Page is a tab. Prefer fresh contexts per test for isolation.",
          learnMore: "Multiple pages can share a context; multiple contexts can share a browser — great for multi-user scenarios.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 3. Playwright Architecture",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/library",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=3.%20Playwright%20Architecture%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “3. Playwright Architecture”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 3. Playwright Architecture.",
        },
        {
          title: "Sync Python",
          body: "Beginners should start with the sync API (from playwright.sync_api import sync_playwright). Async exists for concurrent flows; pytest-playwright fixtures feel sync-friendly.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 3. Playwright Architecture",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/library",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    page = context.new_page()\n    page.goto(\"https://example.com\")\n    browser.close()",
            result: "Page loads; process exits cleanly.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 3. Playwright Architecture.",
        },
        {
          title: "Protocol sketch",
          body: "Playwright talks to browsers over a WebSocket control channel (Chrome DevTools Protocol–style for Chromium, analogous protocols for others). You rarely touch CDP directly.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Deep dive: 3. Playwright Architecture",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/library",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "Best default isolation unit for a test?",
            options: [
              "One shared Page forever",
              "A fresh BrowserContext",
              "OS reboot",
              "Global cookies only",
            ],
            answer: 1,
          },
          doThis: "Explain “3. Playwright Architecture” out loud in 60 seconds.",
        },
      ],
      checklist: [
        "Can explain 3. Playwright Architecture without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "3. Playwright Architecture deliverable",
        brief: "Ship a small artifact proving mastery of 3. Playwright Architecture.",
      },
      resources: [
        {
          type: "doc",
          name: "3. Playwright Architecture docs",
          url: "https://playwright.dev/python/docs/library",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-1-first",
      phase: "Part 1 · Foundations",
      level: "beginner",
      title: "4. First Script",
      minutes: 45,
      overview: "Launch headless vs headed, navigate, close browser/context properly.",
      learn: [
        "launch options",
        "goto",
        "cleanup",
      ],
      steps: [
        {
          title: "Launch & goto",
          body: "chromium.launch(headless=False) for debugging; headless=True for CI. page.goto(url) waits for a load state by default — trust it before adding sleeps.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 4. First Script",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/navigating",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=4.%20First%20Script%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “4. First Script”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 4. First Script.",
        },
        {
          title: "Cleanup",
          body: "Always close context/browser (or use fixtures that do). Leaks show up as hanging CI jobs and locked profiles.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 4. First Script",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/navigating",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "browser = p.chromium.launch(headless=False)\npage = browser.new_page()\npage.goto(\"https://example.com\")\nprint(page.title())\nbrowser.close()",
            result: "Title prints; no zombie Chromium processes.",
          },
          tip: "With pytest-playwright, the page fixture handles lifecycle for you.",
          doThis: "Commit one file practicing: 4. First Script.",
        },
      ],
      checklist: [
        "Can explain 4. First Script without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "4. First Script deliverable",
        brief: "first_script.py committed with headed launch + screenshot.",
      },
      resources: [
        {
          type: "doc",
          name: "4. First Script docs",
          url: "https://playwright.dev/python/docs/navigating",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-cp-foundations",
      phase: "Part 1 · Foundations",
      level: "checkpoint",
      kind: "checkpoint",
      title: "Checkpoint — Foundations",
      minutes: 45,
      overview: "Launch headed Chromium, open a URL, take a screenshot, close cleanly.",
      learn: [
        "Launch headed Chromium, open a URL, take a screenshot, close cleanly.",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "Launch headed Chromium, open a URL, take a screenshot, close cleanly.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Checkpoint badge: Checkpoint — Foundations",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "A checkpoint is done when…",
            options: [
              "You bookmarked the docs",
              "You can demo the criteria without notes",
              "You skipped practice",
              "You only watched a video",
            ],
            answer: 1,
          },
          doThis: "Record a 2-minute Loom/demo proving the criteria.",
        },
      ],
      checklist: [
        "Launch headed Chromium, open a URL, take a screenshot, close cleanly.",
        "Demo recorded or peer-reviewed",
      ],
    }),
    ch({
      id: "pw-2-locators",
      phase: "Part 2 · Core Interactions",
      level: "intermediate",
      title: "5. Locators Deep Dive",
      minutes: 60,
      overview: "get_by_role/text/label/placeholder, CSS/XPath, filter/nth, strictness and auto-retry.",
      learn: [
        "Role locators first",
        "Chaining & filter",
        "Strict mode",
      ],
      steps: [
        {
          title: "Prefer user-facing locators",
          body: "Reach for get_by_role, get_by_text, get_by_label, and get_by_placeholder before CSS. They mirror how users and assistive tech see the page — and survive refactors better.",
          learnMore: "CSS and XPath still work; use them when roles are missing, then push the team to improve a11y.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 5. Locators Deep Dive",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/locators",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=5.%20Locators%20Deep%20Dive%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "Best first locator choice for a Submit button?",
            options: [
              "xpath=//*[@id=\"x\"]/div[3]",
              "get_by_role(\"button\", name=\"Submit\")",
              "page.locator(\"div\").nth(47)",
              "CSS only forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 5. Locators Deep Dive.",
        },
        {
          title: "Chain, filter, nth",
          body: "Locators are lazy and auto-retrying. Chain with .filter(), pick .first/.last/.nth(i). Strictness fails when multiple nodes match — tighten the locator instead of sleeping.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 5. Locators Deep Dive",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/locators",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "page.get_by_role(\"listitem\").filter(has_text=\"Milk\").get_by_role(\"button\", name=\"Delete\").click()",
            result: "Only the Milk row’s Delete is clicked.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 5. Locators Deep Dive.",
        },
        {
          title: "Strictness",
          body: "If an action targets multiple elements, Playwright throws. That is a feature: fix the locator or scope to a parent.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Deep dive: 5. Locators Deep Dive",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/locators",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "You are stuck on “5. Locators Deep Dive”. Best move?",
            options: [
              "Rewrite the whole framework tonight",
              "Reproduce with Trace Viewer / Inspector",
              "Delete the test and hope",
              "Ignore CI forever",
            ],
            answer: 1,
          },
          doThis: "Explain “5. Locators Deep Dive” out loud in 60 seconds.",
        },
      ],
      checklist: [
        "Can explain 5. Locators Deep Dive without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "5. Locators Deep Dive deliverable",
        brief: "Ship a small artifact proving mastery of 5. Locators Deep Dive.",
      },
      resources: [
        {
          type: "doc",
          name: "5. Locators Deep Dive docs",
          url: "https://playwright.dev/python/docs/locators",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-2-actions",
      phase: "Part 2 · Core Interactions",
      level: "intermediate",
      title: "6. Actions",
      minutes: 55,
      overview: "click, dblclick, fill, type, press, check/uncheck, select_option, hover, drag, keyboard/mouse.",
      learn: [
        "fill vs type",
        "form controls",
        "pointer events",
      ],
      steps: [
        {
          title: "Clicks & fills",
          body: "click/dblclick for activation. fill() sets input value atomically; type/press_sequentially is for key-by-key cases. press() sends keys like Enter.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 6. Actions",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/input",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=6.%20Actions%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “6. Actions”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 6. Actions.",
        },
        {
          title: "Forms & gestures",
          body: "check/uncheck for checkboxes; select_option for <select>; hover and drag_to for richer UI. Mouse/keyboard APIs exist for edge cases.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 6. Actions",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/input",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "page.get_by_label(\"Email\").fill(\"a@b.com\")\npage.get_by_label(\"Remember me\").check()\npage.get_by_label(\"Country\").select_option(\"US\")\npage.get_by_role(\"button\", name=\"Save\").click()",
            result: "Form submits with expected values.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 6. Actions.",
        },
      ],
      checklist: [
        "Can explain 6. Actions without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "6. Actions deliverable",
        brief: "Ship a small artifact proving mastery of 6. Actions.",
      },
      resources: [
        {
          type: "doc",
          name: "6. Actions docs",
          url: "https://playwright.dev/python/docs/input",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-2-expect",
      phase: "Part 2 · Core Interactions",
      level: "intermediate",
      title: "7. Assertions with expect()",
      minutes: 50,
      overview: "Web-first assertions (visible, enabled, text, value), soft assertions, custom timeouts.",
      learn: [
        "expect auto-retry",
        "Soft asserts",
        "Timeouts",
      ],
      steps: [
        {
          title: "Web-first asserts",
          body: "from playwright.sync_api import expect. Assertions retry until timeout — assert visibility, text, values, URLs without manual waits.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 7. Assertions with expect()",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-assertions",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=7.%20Assertions%20with%20expect()%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "expect() is powerful because it…",
            options: [
              "Never waits",
              "Auto-retries until timeout",
              "Only works in Cypress",
              "Disables locators",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 7. Assertions with expect().",
        },
        {
          title: "Soft & timeouts",
          body: "Soft assertions collect multiple failures before ending the test. Override timeout on a single expect when the UI is legitimately slow — don’t globally inflate sleeps.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 7. Assertions with expect()",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-assertions",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "from playwright.sync_api import expect\nexpect(page.get_by_role(\"heading\", name=\"Dashboard\")).to_be_visible()\nexpect(page.get_by_label(\"Name\")).to_have_value(\"Ada\")",
            result: "Asserts pass once UI settles — no time.sleep.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 7. Assertions with expect().",
        },
      ],
      checklist: [
        "Can explain 7. Assertions with expect() without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "7. Assertions with expect() deliverable",
        brief: "Ship a small artifact proving mastery of 7. Assertions with expect().",
      },
      resources: [
        {
          type: "doc",
          name: "7. Assertions with expect() docs",
          url: "https://playwright.dev/python/docs/test-assertions",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-2-waits",
      phase: "Part 2 · Core Interactions",
      level: "intermediate",
      title: "8. Waits & Auto-waiting",
      minutes: 50,
      overview: "How auto-waiting works; wait_for_load_state; avoid hard sleeps / flakes.",
      learn: [
        "Actionability checks",
        "Load states",
        "No sleep",
      ],
      steps: [
        {
          title: "Auto-wait internals",
          body: "Before clicking, Playwright checks actionability (attached, visible, stable, enabled, receives events). That is why sleeps become rare.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 8. Waits & Auto-waiting",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/actionability",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=8.%20Waits%20%26%20Auto-waiting%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “8. Waits & Auto-waiting”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 8. Waits & Auto-waiting.",
        },
        {
          title: "Explicit waits when needed",
          body: "Use wait_for_load_state, wait_for_url, or locator waits for navigation/network edges. Ban time.sleep in reviews unless you comment the ceiling and upgrade path.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 8. Waits & Auto-waiting",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/actionability",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "page.goto(\"/dashboard\")\npage.wait_for_load_state(\"networkidle\")  # use sparingly\nexpect(page.get_by_text(\"Welcome\")).to_be_visible()",
            result: "Stable assertion without arbitrary 5s sleep.",
          },
          tip: "networkidle can be flaky on chatty apps — prefer expect on a signal element.",
          doThis: "Commit one file practicing: 8. Waits & Auto-waiting.",
        },
      ],
      checklist: [
        "Can explain 8. Waits & Auto-waiting without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "8. Waits & Auto-waiting deliverable",
        brief: "Ship a small artifact proving mastery of 8. Waits & Auto-waiting.",
      },
      resources: [
        {
          type: "doc",
          name: "8. Waits & Auto-waiting docs",
          url: "https://playwright.dev/python/docs/actionability",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-2-tabs",
      phase: "Part 2 · Core Interactions",
      level: "intermediate",
      title: "9. Tabs, Windows, iFrames",
      minutes: 55,
      overview: "New page events, switching windows, locating inside iframes.",
      learn: [
        "expect_page",
        "frames",
        "multi-window",
      ],
      steps: [
        {
          title: "New tabs",
          body: "Listen with context.expect_page() around the click that opens a tab. Work on the returned Page; don’t guess handles.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 9. Tabs, Windows, iFrames",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/pages",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=9.%20Tabs%2C%20Windows%2C%20iFrames%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “9. Tabs, Windows, iFrames”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 9. Tabs, Windows, iFrames.",
        },
        {
          title: "Frames",
          body: "Use page.frame_locator(...) then chain locators inside. Nested frames need nested frame_locators.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 9. Tabs, Windows, iFrames",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/pages",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "with context.expect_page() as new_page_info:\n    page.get_by_text(\"Open report\").click()\nreport = new_page_info.value\nexpect(report.get_by_role(\"heading\")).to_be_visible()\n\nframe = page.frame_locator(\"#billing-iframe\")\nframe.get_by_label(\"Card\").fill(\"4111...\")",
            result: "Tab and iframe flows both assert visibly.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 9. Tabs, Windows, iFrames.",
        },
      ],
      checklist: [
        "Can explain 9. Tabs, Windows, iFrames without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "9. Tabs, Windows, iFrames deliverable",
        brief: "Ship a small artifact proving mastery of 9. Tabs, Windows, iFrames.",
      },
      resources: [
        {
          type: "doc",
          name: "9. Tabs, Windows, iFrames docs",
          url: "https://playwright.dev/python/docs/pages",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-2-files",
      phase: "Part 2 · Core Interactions",
      level: "intermediate",
      title: "10. File Uploads & Downloads",
      minutes: 45,
      overview: "set_input_files; download events and saving files.",
      learn: [
        "Uploads",
        "Downloads",
        "Artifacts",
      ],
      steps: [
        {
          title: "Uploads",
          body: "locator.set_input_files(path) works even when the input is hidden — no OS dialog needed in automation.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 10. File Uploads & Downloads",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/downloads",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=10.%20File%20Uploads%20%26%20Downloads%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “10. File Uploads & Downloads”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 10. File Uploads & Downloads.",
        },
        {
          title: "Downloads",
          body: "Wrap the click with page.expect_download(), then download.save_as(...). Assert file exists and size/type when it matters.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 10. File Uploads & Downloads",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/downloads",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "page.locator(\"input[type=file]\").set_input_files(\"fixtures/sample.pdf\")\nwith page.expect_download() as dl_info:\n    page.get_by_text(\"Export\").click()\ndl_info.value.save_as(\"out/report.csv\")",
            result: "Upload accepted; CSV saved under out/.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 10. File Uploads & Downloads.",
        },
      ],
      checklist: [
        "Can explain 10. File Uploads & Downloads without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "10. File Uploads & Downloads deliverable",
        brief: "Ship a small artifact proving mastery of 10. File Uploads & Downloads.",
      },
      resources: [
        {
          type: "doc",
          name: "10. File Uploads & Downloads docs",
          url: "https://playwright.dev/python/docs/downloads",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-2-dialogs",
      phase: "Part 2 · Core Interactions",
      level: "intermediate",
      title: "11. Alerts, Dialogs, Popups",
      minutes: 40,
      overview: "page.on(\"dialog\") — accept/dismiss alerts, confirms, prompts.",
      learn: [
        "Dialog handler",
        "Accept vs dismiss",
        "Prompt text",
      ],
      steps: [
        {
          title: "Register before trigger",
          body: "Attach page.on(\"dialog\", handler) before the action that opens the dialog, or use expect_event. Late handlers race and flake.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 11. Alerts, Dialogs, Popups",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/dialogs",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=11.%20Alerts%2C%20Dialogs%2C%20Popups%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "When should you attach the dialog listener?",
            options: [
              "After the alert already opened",
              "Before the triggering action",
              "Never",
              "Only in production",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 11. Alerts, Dialogs, Popups.",
        },
        {
          title: "Accept / dismiss",
          body: "handler receives a Dialog: accept(text?) or dismiss(). Assert message text for confidence.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 11. Alerts, Dialogs, Popups",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/dialogs",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "page.on(\"dialog\", lambda d: d.accept(\"OK\"))\npage.get_by_text(\"Delete\").click()",
            result: "Confirm accepted; destructive action proceeds under test control.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 11. Alerts, Dialogs, Popups.",
        },
      ],
      checklist: [
        "Can explain 11. Alerts, Dialogs, Popups without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "11. Alerts, Dialogs, Popups deliverable",
        brief: "Ship a small artifact proving mastery of 11. Alerts, Dialogs, Popups.",
      },
      resources: [
        {
          type: "doc",
          name: "11. Alerts, Dialogs, Popups docs",
          url: "https://playwright.dev/python/docs/dialogs",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-cp-core",
      phase: "Part 2 · Core Interactions",
      level: "checkpoint",
      kind: "checkpoint",
      title: "Checkpoint — Core Interactions",
      minutes: 45,
      overview: "Automate a form with locators, actions, expect(), and one iframe or dialog.",
      learn: [
        "Automate a form with locators, actions, expect(), and one iframe or dialog.",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "Automate a form with locators, actions, expect(), and one iframe or dialog.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Checkpoint badge: Checkpoint — Core Interactions",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "A checkpoint is done when…",
            options: [
              "You bookmarked the docs",
              "You can demo the criteria without notes",
              "You skipped practice",
              "You only watched a video",
            ],
            answer: 1,
          },
          doThis: "Record a 2-minute Loom/demo proving the criteria.",
        },
      ],
      checklist: [
        "Automate a form with locators, actions, expect(), and one iframe or dialog.",
        "Demo recorded or peer-reviewed",
      ],
    }),
    ch({
      id: "pw-3-pytest",
      phase: "Part 3 · Test Structure & Framework",
      level: "intermediate",
      title: "12. Pytest Basics for Playwright",
      minutes: 55,
      overview: "Fixtures, conftest.py scopes, pytest-playwright plugin basics.",
      learn: [
        "Fixtures",
        "Scopes",
        "Plugin page fixture",
      ],
      steps: [
        {
          title: "Fixtures & conftest",
          body: "@pytest.fixture builds reusable setup. Put shared fixtures in conftest.py. Scopes: function (default), class, module, session.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 12. Pytest Basics for Playwright",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-runners",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=12.%20Pytest%20Basics%20for%20Playwright%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “12. Pytest Basics for Playwright”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 12. Pytest Basics for Playwright.",
        },
        {
          title: "pytest-playwright",
          body: "The plugin gives you page, context, browser fixtures and CLI flags for browser/project. Prefer fixtures over manual sync_playwright in every test.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 12. Pytest Basics for Playwright",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-runners",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# conftest.py can wrap page for base URL, tracing, etc.\ndef test_home(page):\n    page.goto(\"/\")\n    assert page.get_by_role(\"heading\").is_visible()",
            result: "pytest picks up the page fixture automatically.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 12. Pytest Basics for Playwright.",
        },
      ],
      checklist: [
        "Can explain 12. Pytest Basics for Playwright without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "12. Pytest Basics for Playwright deliverable",
        brief: "Ship a small artifact proving mastery of 12. Pytest Basics for Playwright.",
      },
      resources: [
        {
          type: "doc",
          name: "12. Pytest Basics for Playwright docs",
          url: "https://playwright.dev/python/docs/test-runners",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-3-org",
      phase: "Part 3 · Test Structure & Framework",
      level: "intermediate",
      title: "13. Test Organization",
      minutes: 45,
      overview: "Markers, parametrize, smoke vs regression tagging.",
      learn: [
        "Markers",
        "Parametrize",
        "Selective runs",
      ],
      steps: [
        {
          title: "Markers & tags",
          body: "@pytest.mark.smoke / regression let CI run fast suites on PR and full suites nightly. Register marks in pytest.ini.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 13. Test Organization",
          },
          resources: [
            {
              label: "Docs",
              url: "https://docs.pytest.org/en/stable/how-to/mark.html",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=13.%20Test%20Organization%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “13. Test Organization”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 13. Test Organization.",
        },
        {
          title: "Parametrize",
          body: "@pytest.mark.parametrize drives data-driven cases without copy-paste. Keep tables readable; move big data to JSON fixtures.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 13. Test Organization",
          },
          resources: [
            {
              label: "Docs",
              url: "https://docs.pytest.org/en/stable/how-to/mark.html",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "@pytest.mark.smoke\n@pytest.mark.parametrize(\"user,ok\", [(\"a@b.com\", True), (\"bad\", False)])\ndef test_login(page, user, ok):\n    ...",
            result: "Two cases run; smoke selection works via -m smoke.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 13. Test Organization.",
        },
      ],
      checklist: [
        "Can explain 13. Test Organization without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "13. Test Organization deliverable",
        brief: "Ship a small artifact proving mastery of 13. Test Organization.",
      },
      resources: [
        {
          type: "doc",
          name: "13. Test Organization docs",
          url: "https://docs.pytest.org/en/stable/how-to/mark.html",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-3-pom",
      phase: "Part 3 · Test Structure & Framework",
      level: "intermediate",
      title: "14. Page Object Model (POM)",
      minutes: 60,
      overview: "Why POM, folder structure, base page, page classes with locators + methods.",
      learn: [
        "Why POM",
        "BasePage",
        "Page methods",
      ],
      steps: [
        {
          title: "Why POM",
          body: "Centralize selectors and user flows so tests read like business steps. When the UI changes, you edit one page class — not fifty tests.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 14. Page Object Model (POM)",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/pom",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=14.%20Page%20Object%20Model%20(POM)%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “14. Page Object Model (POM)”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 14. Page Object Model (POM).",
        },
        {
          title: "Structure",
          body: "pages/base_page.py + feature pages. Expose methods like login_as(user), not raw locators in tests. Keep assertions in tests or dedicated expect helpers.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 14. Page Object Model (POM)",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/pom",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "class LoginPage:\n    def __init__(self, page):\n        self.page = page\n    def login(self, email, password):\n        self.page.get_by_label(\"Email\").fill(email)\n        self.page.get_by_label(\"Password\").fill(password)\n        self.page.get_by_role(\"button\", name=\"Sign in\").click()",
            result: "test_login calls LoginPage(page).login(...).",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 14. Page Object Model (POM).",
        },
        {
          title: "Anti-pattern check",
          body: "Avoid god-objects and asserting everything inside pages. Pages act; tests assert outcomes.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Deep dive: 14. Page Object Model (POM)",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/pom",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "You are stuck on “14. Page Object Model (POM)”. Best move?",
            options: [
              "Rewrite the whole framework tonight",
              "Reproduce with Trace Viewer / Inspector",
              "Delete the test and hope",
              "Ignore CI forever",
            ],
            answer: 1,
          },
          doThis: "Explain “14. Page Object Model (POM)” out loud in 60 seconds.",
        },
      ],
      checklist: [
        "Can explain 14. Page Object Model (POM) without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "14. Page Object Model (POM) deliverable",
        brief: "Ship a small artifact proving mastery of 14. Page Object Model (POM).",
      },
      resources: [
        {
          type: "doc",
          name: "14. Page Object Model (POM) docs",
          url: "https://playwright.dev/python/docs/pom",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-3-config",
      phase: "Part 3 · Test Structure & Framework",
      level: "intermediate",
      title: "15. Configuration Management",
      minutes: 45,
      overview: "pytest.ini / conftest as config, env vars, base URLs, dev/staging/prod.",
      learn: [
        "Env vars",
        "Base URL",
        "Multi-env",
      ],
      steps: [
        {
          title: "Config surfaces",
          body: "pytest.ini for markers and defaults; environment variables for secrets and BASE_URL. Never commit credentials.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 15. Configuration Management",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-runners",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=15.%20Configuration%20Management%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “15. Configuration Management”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 15. Configuration Management.",
        },
        {
          title: "Environments",
          body: "Switch BASE_URL=https://staging... in CI jobs. Fail fast if required env vars are missing.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 15. Configuration Management",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-runners",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "import os\nBASE_URL = os.environ[\"BASE_URL\"]\n\ndef test_home(page):\n    page.goto(BASE_URL)",
            result: "Same suite targets staging or prod via env only.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 15. Configuration Management.",
        },
      ],
      checklist: [
        "Can explain 15. Configuration Management without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "15. Configuration Management deliverable",
        brief: "Ship a small artifact proving mastery of 15. Configuration Management.",
      },
      resources: [
        {
          type: "doc",
          name: "15. Configuration Management docs",
          url: "https://playwright.dev/python/docs/test-runners",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-3-data",
      phase: "Part 3 · Test Structure & Framework",
      level: "intermediate",
      title: "16. Test Data Management",
      minutes: 50,
      overview: "JSON/CSV/YAML fixtures, faker for dynamic data, cleanup strategies.",
      learn: [
        "Static fixtures",
        "Faker",
        "Cleanup",
      ],
      steps: [
        {
          title: "Static + dynamic",
          body: "Keep golden datasets in data/*.json. Use faker for unique emails/names so parallel runs don’t collide.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 16. Test Data Management",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/api-testing",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=16.%20Test%20Data%20Management%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “16. Test Data Management”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 16. Test Data Management.",
        },
        {
          title: "Cleanup",
          body: "Prefer API teardown or disposable tenants over leaving UI junk. Document who owns cleanup when tests create billable resources.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 16. Test Data Management",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/api-testing",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "import json\nfrom faker import Faker\nfake = Faker()\nuser = {\"email\": fake.email(), **json.load(open(\"data/user_template.json\"))}",
            result: "Unique user each run; template keeps required fields.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 16. Test Data Management.",
        },
      ],
      checklist: [
        "Can explain 16. Test Data Management without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "16. Test Data Management deliverable",
        brief: "Ship a small artifact proving mastery of 16. Test Data Management.",
      },
      resources: [
        {
          type: "doc",
          name: "16. Test Data Management docs",
          url: "https://playwright.dev/python/docs/api-testing",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-cp-framework",
      phase: "Part 3 · Framework",
      level: "checkpoint",
      kind: "checkpoint",
      title: "Checkpoint — Framework",
      minutes: 45,
      overview: "pytest + POM + env config + one parametrized smoke test.",
      learn: [
        "pytest + POM + env config + one parametrized smoke test.",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "pytest + POM + env config + one parametrized smoke test.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Checkpoint badge: Checkpoint — Framework",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "A checkpoint is done when…",
            options: [
              "You bookmarked the docs",
              "You can demo the criteria without notes",
              "You skipped practice",
              "You only watched a video",
            ],
            answer: 1,
          },
          doThis: "Record a 2-minute Loom/demo proving the criteria.",
        },
      ],
      checklist: [
        "pytest + POM + env config + one parametrized smoke test.",
        "Demo recorded or peer-reviewed",
      ],
    }),
    ch({
      id: "pw-4-network",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "17. Network Interception & Mocking",
      minutes: 55,
      overview: "page.route basics, mock API responses, block images/ads for speed.",
      learn: [
        "route",
        "Fulfill mocks",
        "Block assets",
      ],
      steps: [
        {
          title: "route & fulfill",
          body: "page.route(glob, handler) intercepts requests. Fulfill with stub JSON to test UI states the backend cannot easily produce.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 17. Network Interception & Mocking",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/network",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=17.%20Network%20Interception%20%26%20Mocking%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “17. Network Interception & Mocking”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 17. Network Interception & Mocking.",
        },
        {
          title: "Speed tricks",
          body: "Abort image/font/analytics routes in smoke suites to cut time — keep full assets in visual tests.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 17. Network Interception & Mocking",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/network",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "def handle(route):\n    route.fulfill(status=200, json={\"items\": []})\npage.route(\"**/api/items\", handle)\npage.route(\"**/*.{png,jpg}\", lambda r: r.abort())",
            result: "Empty-state UI renders; images skipped.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 17. Network Interception & Mocking.",
        },
      ],
      checklist: [
        "Can explain 17. Network Interception & Mocking without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "17. Network Interception & Mocking deliverable",
        brief: "Ship a small artifact proving mastery of 17. Network Interception & Mocking.",
      },
      resources: [
        {
          type: "doc",
          name: "17. Network Interception & Mocking docs",
          url: "https://playwright.dev/python/docs/network",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-4-api",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "18. API Testing with Playwright",
      minutes: 55,
      overview: "APIRequestContext GET/POST/PUT/DELETE; combine UI + API in one suite.",
      learn: [
        "request context",
        "CRUD via API",
        "Hybrid tests",
      ],
      steps: [
        {
          title: "APIRequestContext",
          body: "Use playwright.request or the request fixture for HTTP calls with shared storage state. Assert status and JSON schema-ish fields.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 18. API Testing with Playwright",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/api-testing",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=18.%20API%20Testing%20with%20Playwright%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “18. API Testing with Playwright”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 18. API Testing with Playwright.",
        },
        {
          title: "Hybrid pattern",
          body: "Seed data via API, assert via UI (or reverse). Faster and more stable than clicking through setup every time.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 18. API Testing with Playwright",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/api-testing",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "def test_item_ui(page, request):\n    request.post(\"/api/items\", data={\"name\": \"Milk\"})\n    page.goto(\"/items\")\n    expect(page.get_by_text(\"Milk\")).to_be_visible()",
            result: "UI shows API-created row.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 18. API Testing with Playwright.",
        },
      ],
      checklist: [
        "Can explain 18. API Testing with Playwright without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "18. API Testing with Playwright deliverable",
        brief: "Ship a small artifact proving mastery of 18. API Testing with Playwright.",
      },
      resources: [
        {
          type: "doc",
          name: "18. API Testing with Playwright docs",
          url: "https://playwright.dev/python/docs/api-testing",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-4-visual",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "19. Visual & Accessibility Testing",
      minutes: 55,
      overview: "Screenshot comparison, dynamic content masking, axe-core a11y checks.",
      learn: [
        "to_have_screenshot",
        "Masking",
        "axe",
      ],
      steps: [
        {
          title: "Visual diffs",
          body: "expect(page).to_have_screenshot() catches unintended UI drift. Mask clocks/avatars; freeze animations.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 19. Visual & Accessibility Testing",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-snapshots",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=19.%20Visual%20%26%20Accessibility%20Testing%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “19. Visual & Accessibility Testing”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 19. Visual & Accessibility Testing.",
        },
        {
          title: "Accessibility",
          body: "Integrate axe-core (e.g. via axe-playwright helpers) and fail on serious/critical violations. Teach the team to read the violation report.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 19. Visual & Accessibility Testing",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-snapshots",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# Pseudocode — wire your chosen axe helper\n# results = inject_axe_and_run(page)\n# assert no critical violations",
            result: "CI fails on new critical a11y issues.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 19. Visual & Accessibility Testing.",
        },
      ],
      checklist: [
        "Can explain 19. Visual & Accessibility Testing without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "19. Visual & Accessibility Testing deliverable",
        brief: "Ship a small artifact proving mastery of 19. Visual & Accessibility Testing.",
      },
      resources: [
        {
          type: "doc",
          name: "19. Visual & Accessibility Testing docs",
          url: "https://playwright.dev/python/docs/test-snapshots",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-4-auth",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "20. Authentication & Session Reuse",
      minutes: 50,
      overview: "storage_state — login once, reuse sessions; global setup patterns.",
      learn: [
        "storage_state",
        "Global setup",
        "Security",
      ],
      steps: [
        {
          title: "Save state",
          body: "Log in once, context.storage_state(path=\"auth.json\"). Later tests create contexts with storage_state= that file.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 20. Authentication & Session Reuse",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/auth",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=20.%20Authentication%20%26%20Session%20Reuse%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “20. Authentication & Session Reuse”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 20. Authentication & Session Reuse.",
        },
        {
          title: "Global setup",
          body: "Run auth setup in CI before the suite. Rotate credentials via secrets; never commit auth.json with real prod tokens.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 20. Authentication & Session Reuse",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/auth",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "context = browser.new_context(storage_state=\"auth.json\")\npage = context.new_page()\npage.goto(\"/dashboard\")",
            result: "Land authenticated without UI login each test.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 20. Authentication & Session Reuse.",
        },
      ],
      checklist: [
        "Can explain 20. Authentication & Session Reuse without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "20. Authentication & Session Reuse deliverable",
        brief: "Ship a small artifact proving mastery of 20. Authentication & Session Reuse.",
      },
      resources: [
        {
          type: "doc",
          name: "20. Authentication & Session Reuse docs",
          url: "https://playwright.dev/python/docs/auth",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-4-shadow",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "21. Shadow DOM & Complex Components",
      minutes: 45,
      overview: "Piercing shadow DOM and custom web components.",
      learn: [
        "Shadow piercing",
        "Open vs closed",
        "Component libraries",
      ],
      steps: [
        {
          title: "Pierce open shadow",
          body: "Playwright locators pierce open shadow roots by default in many cases — prefer role/text still. For closed shadow, you may need component APIs or test IDs exposed by the design system.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 21. Shadow DOM & Complex Components",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/locators",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=21.%20Shadow%20DOM%20%26%20Complex%20Components%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “21. Shadow DOM & Complex Components”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 21. Shadow DOM & Complex Components.",
        },
        {
          title: "Custom components",
          body: "Work with your design-system team to expose accessible roles and test ids. Fighting closed shadow from tests is a smell.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 21. Shadow DOM & Complex Components",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/locators",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "page.locator(\"my-widget\").get_by_role(\"button\", name=\"Expand\").click()",
            result: "Shadow-hosted button clicks via chained locator.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 21. Shadow DOM & Complex Components.",
        },
      ],
      checklist: [
        "Can explain 21. Shadow DOM & Complex Components without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "21. Shadow DOM & Complex Components deliverable",
        brief: "Ship a small artifact proving mastery of 21. Shadow DOM & Complex Components.",
      },
      resources: [
        {
          type: "doc",
          name: "21. Shadow DOM & Complex Components docs",
          url: "https://playwright.dev/python/docs/locators",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-4-parallel",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "22. Parallel Execution & Sharding",
      minutes: 45,
      overview: "pytest-xdist for parallel runs; shard across CI runners.",
      learn: [
        "xdist",
        "Isolation",
        "Sharding",
      ],
      steps: [
        {
          title: "pytest-xdist",
          body: "pytest -n auto runs workers in parallel. Tests must not share mutable state or the same user account without locks.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 22. Parallel Execution & Sharding",
          },
          resources: [
            {
              label: "Docs",
              url: "https://pytest-xdist.readthedocs.io/",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=22.%20Parallel%20Execution%20%26%20Sharding%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “22. Parallel Execution & Sharding”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 22. Parallel Execution & Sharding.",
        },
        {
          title: "Sharding",
          body: "Split suites across machines with shard markers or CI matrix indices. Keep smoke non-sharded for fast PR signal.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 22. Parallel Execution & Sharding",
          },
          resources: [
            {
              label: "Docs",
              url: "https://pytest-xdist.readthedocs.io/",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "pytest -n 4 -m \"not slow\"",
            result: "Workers finish faster; no cross-talk if data is isolated.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 22. Parallel Execution & Sharding.",
        },
      ],
      checklist: [
        "Can explain 22. Parallel Execution & Sharding without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "22. Parallel Execution & Sharding deliverable",
        brief: "Ship a small artifact proving mastery of 22. Parallel Execution & Sharding.",
      },
      resources: [
        {
          type: "doc",
          name: "22. Parallel Execution & Sharding docs",
          url: "https://pytest-xdist.readthedocs.io/",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-4-cross",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "23. Cross-browser & Cross-device",
      minutes: 50,
      overview: "Chromium, Firefox, WebKit; mobile emulation via device descriptors.",
      learn: [
        "Multi-browser CI",
        "Devices",
        "Geolocation",
      ],
      steps: [
        {
          title: "Browsers",
          body: "Run the same tests on chromium, firefox, webkit in CI. Fix WebKit-only bugs early — they surprise desktop Safari users.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 23. Cross-browser & Cross-device",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/emulation",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=23.%20Cross-browser%20%26%20Cross-device%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “23. Cross-browser & Cross-device”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 23. Cross-browser & Cross-device.",
        },
        {
          title: "Mobile emulation",
          body: "Use device descriptors for viewport, user agent, touch. Emulation ≠ real device farms, but catches many responsive bugs cheaply.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 23. Cross-browser & Cross-device",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/emulation",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "iphone = p.devices[\"iPhone 13\"]\ncontext = browser.new_context(**iphone)\npage = context.new_page()",
            result: "Layout asserts under iPhone viewport.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 23. Cross-browser & Cross-device.",
        },
      ],
      checklist: [
        "Can explain 23. Cross-browser & Cross-device without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "23. Cross-browser & Cross-device deliverable",
        brief: "Ship a small artifact proving mastery of 23. Cross-browser & Cross-device.",
      },
      resources: [
        {
          type: "doc",
          name: "23. Cross-browser & Cross-device docs",
          url: "https://playwright.dev/python/docs/emulation",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-4-debug",
      phase: "Part 4 · Advanced Techniques",
      level: "advanced",
      title: "24. Debugging Tools",
      minutes: 50,
      overview: "Inspector, Trace Viewer, Codegen for generating scripts.",
      learn: [
        "PWDEBUG",
        "Traces",
        "Codegen",
      ],
      steps: [
        {
          title: "Inspector & codegen",
          body: "PWDEBUG=1 pauses with Inspector. codegen records actions into script — treat as a draft, then rewrite with POM/role locators.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 24. Debugging Tools",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/debug",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=24.%20Debugging%20Tools%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “24. Debugging Tools”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 24. Debugging Tools.",
        },
        {
          title: "Trace Viewer",
          body: "Record traces on retry/failure. Open the zip in Trace Viewer to see DOM snapshots, network, and console — the #1 flake killer.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 24. Debugging Tools",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/debug",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# pytest-playwright: --tracing retain-on-failure\n# or context.tracing.start/stop",
            result: "You open a trace and pinpoint the failed action.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 24. Debugging Tools.",
        },
      ],
      checklist: [
        "Can explain 24. Debugging Tools without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "24. Debugging Tools deliverable",
        brief: "Ship a small artifact proving mastery of 24. Debugging Tools.",
      },
      resources: [
        {
          type: "doc",
          name: "24. Debugging Tools docs",
          url: "https://playwright.dev/python/docs/debug",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-cp-advanced",
      phase: "Part 4 · Advanced",
      level: "checkpoint",
      kind: "checkpoint",
      title: "Checkpoint — Advanced",
      minutes: 45,
      overview: "Mock one API, reuse storage_state, capture a trace on failure.",
      learn: [
        "Mock one API, reuse storage_state, capture a trace on failure.",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "Mock one API, reuse storage_state, capture a trace on failure.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Checkpoint badge: Checkpoint — Advanced",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "A checkpoint is done when…",
            options: [
              "You bookmarked the docs",
              "You can demo the criteria without notes",
              "You skipped practice",
              "You only watched a video",
            ],
            answer: 1,
          },
          doThis: "Record a 2-minute Loom/demo proving the criteria.",
        },
      ],
      checklist: [
        "Mock one API, reuse storage_state, capture a trace on failure.",
        "Demo recorded or peer-reviewed",
      ],
    }),
    ch({
      id: "pw-5-ci",
      phase: "Part 5 · CI/CD & Reporting",
      level: "advanced",
      title: "25. CI/CD Integration",
      minutes: 55,
      overview: "GitHub Actions, Jenkins basics, headless in CI.",
      learn: [
        "GH Actions",
        "Jenkins sketch",
        "Headless",
      ],
      steps: [
        {
          title: "GitHub Actions",
          body: "Install OS deps, Python, browsers (playwright install --with-deps), run pytest, upload artifacts. Cache browsers when possible.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 25. CI/CD Integration",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/ci",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=25.%20CI%2FCD%20Integration%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “25. CI/CD Integration”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 25. CI/CD Integration.",
        },
        {
          title: "Jenkins & headless",
          body: "Same idea in a pipeline stage: venv → install → headless tests. Fail the build on non-zero pytest.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 25. CI/CD Integration",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/ci",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# .github/workflows/e2e.yml (sketch)\n# - run: pip install -r requirements.txt\n# - run: playwright install --with-deps\n# - run: pytest -m smoke",
            result: "PR checks show red/green smoke.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 25. CI/CD Integration.",
        },
      ],
      checklist: [
        "Can explain 25. CI/CD Integration without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "25. CI/CD Integration deliverable",
        brief: "Ship a small artifact proving mastery of 25. CI/CD Integration.",
      },
      resources: [
        {
          type: "doc",
          name: "25. CI/CD Integration docs",
          url: "https://playwright.dev/python/docs/ci",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-5-report",
      phase: "Part 5 · CI/CD & Reporting",
      level: "advanced",
      title: "26. Test Reporting",
      minutes: 45,
      overview: "pytest-html, Allure setup, publish reports as CI artifacts.",
      learn: [
        "HTML report",
        "Allure",
        "Artifacts",
      ],
      steps: [
        {
          title: "HTML & Allure",
          body: "pytest-html is the lightweight default. Allure adds richer history and attachments when the team wants a dashboard.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 26. Test Reporting",
          },
          resources: [
            {
              label: "Docs",
              url: "https://pytest-html.readthedocs.io/",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=26.%20Test%20Reporting%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “26. Test Reporting”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 26. Test Reporting.",
        },
        {
          title: "Publish",
          body: "Upload report folders as CI artifacts. Link them from the job summary so failures are one click away.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 26. Test Reporting",
          },
          resources: [
            {
              label: "Docs",
              url: "https://pytest-html.readthedocs.io/",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "pytest --html=report/report.html --self-contained-html",
            result: "Single HTML file downloadable from CI.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 26. Test Reporting.",
        },
      ],
      checklist: [
        "Can explain 26. Test Reporting without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "26. Test Reporting deliverable",
        brief: "Ship a small artifact proving mastery of 26. Test Reporting.",
      },
      resources: [
        {
          type: "doc",
          name: "26. Test Reporting docs",
          url: "https://pytest-html.readthedocs.io/",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-5-docker",
      phase: "Part 5 · CI/CD & Reporting",
      level: "advanced",
      title: "27. Dockerizing Playwright Tests",
      minutes: 50,
      overview: "Official Playwright Docker images and Dockerfile patterns for the framework.",
      learn: [
        "Official image",
        "Dockerfile",
        "CI containers",
      ],
      steps: [
        {
          title: "Official images",
          body: "Microsoft publishes images with browsers and OS deps preinstalled. Start there before inventing your own apt soup.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 27. Dockerizing Playwright Tests",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/docker",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=27.%20Dockerizing%20Playwright%20Tests%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “27. Dockerizing Playwright Tests”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 27. Dockerizing Playwright Tests.",
        },
        {
          title: "Project Dockerfile",
          body: "COPY requirements and tests, install Python deps, set CI=1. Keep image tags pinned.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 27. Dockerizing Playwright Tests",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/docker",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# FROM mcr.microsoft.com/playwright/python:v1.xx.x-jammy\n# COPY . /app\n# WORKDIR /app\n# RUN pip install -r requirements.txt\n# CMD [\"pytest\", \"-m\", \"smoke\"]",
            result: "docker run reproduces CI locally.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 27. Dockerizing Playwright Tests.",
        },
      ],
      checklist: [
        "Can explain 27. Dockerizing Playwright Tests without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "27. Dockerizing Playwright Tests deliverable",
        brief: "Ship a small artifact proving mastery of 27. Dockerizing Playwright Tests.",
      },
      resources: [
        {
          type: "doc",
          name: "27. Dockerizing Playwright Tests docs",
          url: "https://playwright.dev/python/docs/docker",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-5-logging",
      phase: "Part 5 · CI/CD & Reporting",
      level: "advanced",
      title: "28. Logging & Error Handling",
      minutes: 45,
      overview: "Custom logging, screenshot/video on failure, retry for flakes.",
      learn: [
        "Logging",
        "Failure artifacts",
        "Retries",
      ],
      steps: [
        {
          title: "Artifacts on failure",
          body: "Hook into pytest to capture screenshot/video/trace when a test fails. Attach paths in the report.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 28. Logging & Error Handling",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-retries",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=28.%20Logging%20%26%20Error%20Handling%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “28. Logging & Error Handling”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 28. Logging & Error Handling.",
        },
        {
          title: "Retries with care",
          body: "Retries hide bugs if overused. Retry once for known infra flakes; quarantine chronic flakes with owners.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 28. Logging & Error Handling",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/test-retries",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# pytest.ini\n# addopts = --tracing retain-on-failure\n# use flaky/rerunfailures sparingly",
            result: "Failed job has screenshot + trace zip.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 28. Logging & Error Handling.",
        },
      ],
      checklist: [
        "Can explain 28. Logging & Error Handling without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "28. Logging & Error Handling deliverable",
        brief: "Ship a small artifact proving mastery of 28. Logging & Error Handling.",
      },
      resources: [
        {
          type: "doc",
          name: "28. Logging & Error Handling docs",
          url: "https://playwright.dev/python/docs/test-retries",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-cp-cicd",
      phase: "Part 5 · CI/CD",
      level: "checkpoint",
      kind: "checkpoint",
      title: "Checkpoint — CI/CD",
      minutes: 45,
      overview: "Green GitHub Action with HTML report artifact and screenshot on fail.",
      learn: [
        "Green GitHub Action with HTML report artifact and screenshot on fail.",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "Green GitHub Action with HTML report artifact and screenshot on fail.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Checkpoint badge: Checkpoint — CI/CD",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "A checkpoint is done when…",
            options: [
              "You bookmarked the docs",
              "You can demo the criteria without notes",
              "You skipped practice",
              "You only watched a video",
            ],
            answer: 1,
          },
          doThis: "Record a 2-minute Loom/demo proving the criteria.",
        },
      ],
      checklist: [
        "Green GitHub Action with HTML report artifact and screenshot on fail.",
        "Demo recorded or peer-reviewed",
      ],
    }),
    ch({
      id: "pw-6-framework",
      phase: "Part 6 · Pro-Level Practices",
      level: "advanced",
      title: "29. Building a Scalable Framework from Scratch",
      minutes: 60,
      overview: "Enterprise folder architecture, helpers layer, config-driven execution.",
      learn: [
        "Folders",
        "Helpers",
        "Config-driven",
      ],
      steps: [
        {
          title: "Architecture",
          body: "Separate tests/, pages/, flows/, data/, utils/, config/. Flows compose pages for multi-step journeys. Utils never import tests.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 29. Building a Scalable Framework from Scratch",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=29.%20Building%20a%20Scalable%20Framework%20from%20Scratch%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “29. Building a Scalable Framework from Scratch”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 29. Building a Scalable Framework from Scratch.",
        },
        {
          title: "Config-driven runs",
          body: "Select browser, env, markers, and workers from config/CLI — not hardcoded in tests.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 29. Building a Scalable Framework from Scratch",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "tests/\npages/\nflows/\ndata/\nutils/\nconfig/\nconftest.py\npytest.ini",
            result: "New hire finds where to put a page object in 30 seconds.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 29. Building a Scalable Framework from Scratch.",
        },
      ],
      checklist: [
        "Can explain 29. Building a Scalable Framework from Scratch without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "29. Building a Scalable Framework from Scratch deliverable",
        brief: "Ship a small artifact proving mastery of 29. Building a Scalable Framework from Scratch.",
      },
      resources: [
        {
          type: "doc",
          name: "29. Building a Scalable Framework from Scratch docs",
          url: "https://playwright.dev/python/docs/best-practices",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-6-scale",
      phase: "Part 6 · Pro-Level Practices",
      level: "advanced",
      title: "30. Managing Test Suites at Scale",
      minutes: 55,
      overview: "Tagging, flake triage, custom reporters, TestRail/Xray integrations.",
      learn: [
        "Selective exec",
        "Flake process",
        "TMS links",
      ],
      steps: [
        {
          title: "Tags & flakes",
          body: "Large suites need smoke/regression/nightly tags. Track flakes with owner + quarantine SLA — don’t just retry forever.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 30. Managing Test Suites at Scale",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=30.%20Managing%20Test%20Suites%20at%20Scale%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “30. Managing Test Suites at Scale”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 30. Managing Test Suites at Scale.",
        },
        {
          title: "Reporters & TMS",
          body: "Custom pytest plugins can push results to TestRail/Xray. Keep IDs in markers so cases sync.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 30. Managing Test Suites at Scale",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "@pytest.mark.testcase(\"TR-204\")\ndef test_checkout(page): ...",
            result: "Results land in the test management tool.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 30. Managing Test Suites at Scale.",
        },
      ],
      checklist: [
        "Can explain 30. Managing Test Suites at Scale without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "30. Managing Test Suites at Scale deliverable",
        brief: "Ship a small artifact proving mastery of 30. Managing Test Suites at Scale.",
      },
      resources: [
        {
          type: "doc",
          name: "30. Managing Test Suites at Scale docs",
          url: "https://playwright.dev/python/docs/best-practices",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-6-review",
      phase: "Part 6 · Pro-Level Practices",
      level: "advanced",
      title: "31. Code Review & Best Practices",
      minutes: 40,
      overview: "Naming, DRY, anti-patterns, documentation standards for shared frameworks.",
      learn: [
        "Naming",
        "Anti-patterns",
        "Docs",
      ],
      steps: [
        {
          title: "Review bar",
          body: "Reject sleeps, brittle CSS, duplicated logins, and secrets in code. Prefer role locators and expect().",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 31. Code Review & Best Practices",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=31.%20Code%20Review%20%26%20Best%20Practices%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “31. Code Review & Best Practices”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 31. Code Review & Best Practices.",
        },
        {
          title: "Docs",
          body: "README: how to run, env vars, markers, how to add a page object. Short > novel.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 31. Code Review & Best Practices",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# Anti-patterns\n# - time.sleep(5)\n# - page.locator(\".css-1a2b3c\")\n# - login UI in every test",
            result: "PR checklist matches the README standards.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 31. Code Review & Best Practices.",
        },
      ],
      checklist: [
        "Can explain 31. Code Review & Best Practices without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "31. Code Review & Best Practices deliverable",
        brief: "Ship a small artifact proving mastery of 31. Code Review & Best Practices.",
      },
      resources: [
        {
          type: "doc",
          name: "31. Code Review & Best Practices docs",
          url: "https://playwright.dev/python/docs/best-practices",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-6-perf",
      phase: "Part 6 · Pro-Level Practices",
      level: "advanced",
      title: "32. Performance Considerations",
      minutes: 40,
      overview: "Cut execution time: locators, waits, worker tuning.",
      learn: [
        "Faster setup",
        "Locator cost",
        "Workers",
      ],
      steps: [
        {
          title: "Speed levers",
          body: "Reuse auth state, API seed data, block heavy assets in non-visual tests, keep locators tight, parallelize with isolation.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 32. Performance Considerations",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=32.%20Performance%20Considerations%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “32. Performance Considerations”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 32. Performance Considerations.",
        },
        {
          title: "Tune workers",
          body: "More workers help until the app or DB saturates. Measure; don’t guess. Split slow tests to nightly.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 32. Performance Considerations",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# PR: pytest -n 4 -m smoke\n# Nightly: pytest -n auto",
            result: "PR feedback under your team’s SLA.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 32. Performance Considerations.",
        },
      ],
      checklist: [
        "Can explain 32. Performance Considerations without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "32. Performance Considerations deliverable",
        brief: "Ship a small artifact proving mastery of 32. Performance Considerations.",
      },
      resources: [
        {
          type: "doc",
          name: "32. Performance Considerations docs",
          url: "https://playwright.dev/python/docs/best-practices",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-cp-pro",
      phase: "Part 6 · Pro",
      level: "checkpoint",
      kind: "checkpoint",
      title: "Checkpoint — Pro Practices",
      minutes: 45,
      overview: "Document architecture + flake triage process in the repo README.",
      learn: [
        "Document architecture + flake triage process in the repo README.",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "Document architecture + flake triage process in the repo README.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Checkpoint badge: Checkpoint — Pro Practices",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "A checkpoint is done when…",
            options: [
              "You bookmarked the docs",
              "You can demo the criteria without notes",
              "You skipped practice",
              "You only watched a video",
            ],
            answer: 1,
          },
          doThis: "Record a 2-minute Loom/demo proving the criteria.",
        },
      ],
      checklist: [
        "Document architecture + flake triage process in the repo README.",
        "Demo recorded or peer-reviewed",
      ],
    }),
    ch({
      id: "pw-7-capstone",
      phase: "Part 7 · Real-World Project & Job Readiness",
      level: "advanced",
      title: "33. Real-World Capstone Project",
      minutes: 120,
      overview: "E2E framework: login, CRUD, API validation, auth reuse, CI/CD — then refactor.",
      learn: [
        "Hybrid suite",
        "Auth + CI",
        "Refactor pass",
      ],
      steps: [
        {
          title: "Build the spine",
          body: "Ship a public demo app suite: login with storage_state, CRUD via UI, verify via API, one mocked error state, traces on failure.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 33. Real-World Capstone Project",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=33.%20Real-World%20Capstone%20Project%20Playwright%20Python",
              kind: "Video",
            },
            {
              label: "Article",
              url: "https://automationpanda.com/",
              kind: "Article",
            },
          ],
          quiz: {
            question: "For “33. Real-World Capstone Project”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 33. Real-World Capstone Project.",
        },
        {
          title: "CI + refactor",
          body: "Green GitHub Action with artifacts. Do a deliberate refactor pass: POM cleanup, markers, README. Capstone quality > feature count.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 33. Real-World Capstone Project",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Try this pattern",
            code: "# Capstone checklist\n# [ ] smoke + regression markers\n# [ ] auth.json from setup (secret user)\n# [ ] API assert after UI create\n# [ ] CI artifact: html + trace",
            result: "Repo tells a hiring story without you in the room.",
          },
          tip: "Record a 3-minute demo walkthrough.",
          doThis: "Commit one file practicing: 33. Real-World Capstone Project.",
        },
        {
          title: "Code review pass",
          body: "Invite a peer or mentor. Fix naming, delete sleeps, ensure one obvious entrypoint to run tests.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Deep dive: 33. Real-World Capstone Project",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "You are stuck on “33. Real-World Capstone Project”. Best move?",
            options: [
              "Rewrite the whole framework tonight",
              "Reproduce with Trace Viewer / Inspector",
              "Delete the test and hope",
              "Ignore CI forever",
            ],
            answer: 1,
          },
          doThis: "Explain “33. Real-World Capstone Project” out loud in 60 seconds.",
        },
      ],
      checklist: [
        "Can explain 33. Real-World Capstone Project without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "33. Real-World Capstone Project deliverable",
        brief: "Public GitHub repo with CI badge and sample report screenshot.",
      },
      resources: [
        {
          type: "doc",
          name: "33. Real-World Capstone Project docs",
          url: "https://playwright.dev/python/docs/intro",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-7-portfolio",
      phase: "Part 7 · Real-World Project & Job Readiness",
      level: "advanced",
      title: "34. Portfolio Building",
      minutes: 60,
      overview: "Structure a GitHub repo for recruiters; README that sells the framework; short demo.",
      learn: [
        "Repo structure",
        "README story",
        "Demo video",
      ],
      steps: [
        {
          title: "Recruiter skim",
          body: "Top of README: what you automated, stack (Python/Playwright/pytest), how to run in 3 commands, CI badge, architecture diagram, one GIF/screenshot.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 34. Portfolio Building",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=34.%20Portfolio%20Building%20Playwright%20Python",
              kind: "Video",
            },
          ],
          quiz: {
            question: "For “34. Portfolio Building”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 34. Portfolio Building.",
        },
        {
          title: "Demo walkthrough",
          body: "Record 2–4 minutes: run smoke, show report, open a trace. Upload unlisted YouTube/Loom and link it.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 34. Portfolio Building",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Draft in the box",
            code: "## Playwright Python Framework\n- Smoke: pytest -m smoke\n- Stack: pytest + POM + GH Actions\n- Demo: <link>",
            result: "Cold reader understands value in under a minute.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 34. Portfolio Building.",
        },
      ],
      checklist: [
        "Can explain 34. Portfolio Building without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "34. Portfolio Building deliverable",
        brief: "README + demo link committed.",
      },
      resources: [
        {
          type: "doc",
          name: "34. Portfolio Building docs",
          url: "https://playwright.dev/python/docs/intro",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-7-interview",
      phase: "Part 7 · Real-World Project & Job Readiness",
      level: "advanced",
      title: "35. Interview Prep",
      minutes: 70,
      overview: "Common Playwright questions, scenarios, explaining POM/fixtures/CI.",
      learn: [
        "Q&A bank",
        "Scenario drills",
        "Explain frameworks",
      ],
      steps: [
        {
          title: "Core questions",
          body: "Be ready on: auto-wait, locators, POM, fixtures, storage_state, traces, flakes, parallelization, and when you’d mock vs hit real APIs.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 35. Interview Prep",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=35.%20Interview%20Prep%20Playwright%20Python",
              kind: "Video",
            },
          ],
          quiz: {
            question: "For “35. Interview Prep”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 35. Interview Prep.",
        },
        {
          title: "Scenario practice",
          body: "Whiteboard: “Login is flaky in CI — diagnose.” Talk Trace Viewer, isolation, waits, environment parity. Explain POM and CI as a story from your capstone.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 35. Interview Prep",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Draft in the box",
            code: "Q: Why not time.sleep?\nA: Actionability + expect() retry; sleep hides races and slows suites.\n\nQ: How do you reuse login?\nA: storage_state from global setup; secrets in CI.",
            result: "You answer in structured bullets under 2 minutes each.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Commit one file practicing: 35. Interview Prep.",
        },
        {
          title: "Mock interview",
          body: "Do one timed session with a friend. Record yourself. Fix filler words and missing examples.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Deep dive: 35. Interview Prep",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/best-practices",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "Best evidence in a Playwright interview?",
            options: [
              "Only buzzwords",
              "Capstone story + tradeoffs you made",
              "Claiming 0% flakes always",
              "Refusing to discuss CI",
            ],
            answer: 1,
          },
          doThis: "Explain “35. Interview Prep” out loud in 60 seconds.",
        },
      ],
      checklist: [
        "Can explain 35. Interview Prep without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "35. Interview Prep deliverable",
        brief: "One-page answer bank for 10 likely questions.",
      },
      resources: [
        {
          type: "doc",
          name: "35. Interview Prep docs",
          url: "https://playwright.dev/python/docs/best-practices",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-7-career",
      phase: "Part 7 · Real-World Project & Job Readiness",
      level: "advanced",
      title: "36. Career Positioning",
      minutes: 50,
      overview: "Frame manual QA experience with automation skills; resume bullets that hire.",
      learn: [
        "Narrative",
        "Resume bullets",
        "Target roles",
      ],
      steps: [
        {
          title: "Bridge the story",
          body: "Manual QA is domain strength — pair it with Playwright outcomes: fewer regressions, faster releases, measurable coverage of critical paths.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Illustration for 36. Career Positioning",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "Video",
              url: "https://www.youtube.com/results?search_query=36.%20Career%20Positioning%20Playwright%20Python",
              kind: "Video",
            },
          ],
          quiz: {
            question: "For “36. Career Positioning”, which habit prevents flaky work?",
            options: [
              "Hard-coded time.sleep everywhere",
              "Small experiments + web-first asserts",
              "Never reading errors",
              "Only recording codegen forever",
            ],
            answer: 1,
          },
          doThis: "Skim docs and note 3 APIs for: 36. Career Positioning.",
        },
        {
          title: "Resume bullets",
          body: "Use verb + stack + impact. Example: “Built Python/Playwright smoke suite (pytest, POM, GH Actions) covering checkout; cut release regression time from 1 day to 40 minutes.”",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Practice visual: 36. Career Positioning",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
            {
              label: "API",
              url: "https://playwright.dev/python/docs/api/class-page",
              kind: "Docs",
            },
          ],
          tryIt: {
            prompt: "Draft in the box",
            code: "- Designed POM framework with storage_state auth reuse\n- Added API+UI hybrid checks for CRUD reliability\n- Published CI artifacts (HTML + traces) for faster triage",
            result: "Three bullets a hiring manager can scan.",
          },
          tip: "Commit after each green experiment.",
          doThis: "Rewrite your top 3 resume bullets tonight.",
        },
      ],
      checklist: [
        "Can explain 36. Career Positioning without notes",
        "Practiced once locally",
        "Opened official docs",
      ],
      practice: {
        title: "36. Career Positioning deliverable",
        brief: "Updated resume + LinkedIn “Featured” link to capstone.",
      },
      resources: [
        {
          type: "doc",
          name: "36. Career Positioning docs",
          url: "https://playwright.dev/python/docs/intro",
          lang: "EN",
          free: true,
        },
      ],
    }),
    ch({
      id: "pw-cp-career",
      phase: "Part 7 · Career",
      level: "checkpoint",
      kind: "checkpoint",
      title: "Checkpoint — Job Ready",
      minutes: 45,
      overview: "Capstone README + demo link + three interview stories written.",
      learn: [
        "Capstone README + demo link + three interview stories written.",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "Capstone README + demo link + three interview stories written.",
          image: {
            src: "covers/playwright-cover.png",
            alt: "Checkpoint badge: Checkpoint — Job Ready",
          },
          resources: [
            {
              label: "Docs",
              url: "https://playwright.dev/python/docs/intro",
              kind: "Docs",
            },
          ],
          quiz: {
            question: "A checkpoint is done when…",
            options: [
              "You bookmarked the docs",
              "You can demo the criteria without notes",
              "You skipped practice",
              "You only watched a video",
            ],
            answer: 1,
          },
          doThis: "Record a 2-minute Loom/demo proving the criteria.",
        },
      ],
      checklist: [
        "Capstone README + demo link + three interview stories written.",
        "Demo recorded or peer-reviewed",
      ],
    }),
  ],
}
