import { ch, r } from '../helpers'

export const playwrightPythonManual = {
  id: 'playwright',
  title: 'Playwright with Python',
  tagline: 'Complete Beginner to Master — from zero to Automation Engineer.',
  category: 'automation',
  accent: '#1B4D3E',
  cover: 'covers/playwright-cover.png',
  duration: '4–6 months (1–2 hrs/day)',
  levelSpan: 'Zero → Master',
  who: 'Complete beginners aiming to become Automation Engineers with Python + Playwright.',
  outcomes: [
    'Build production-ready Playwright + pytest frameworks with POM',
    'Wire CI/CD (GitHub Actions), Docker, traces, and Allure reporting',
    'Ship portfolio projects and walk into interviews with confidence',
  ],
  pace: {
    hoursPerDay: '1–2 hours/day',
    recommended: '~4–6 months',
    accelerated: '~3 months at 3–4 hrs/day',
    slow: '~7–9 months if busy',
  },
  chapters: [
    ch({
      id: "pw-c01",
      phase: "Part 0 · Before You Begin",
      level: "beginner",
      title: "Introduction — Playwright vs Selenium vs Cypress 2025",
      minutes: 45,
      durationLabel: "Day 1",
      overview: "Welcome to the path from absolute beginner to Automation Engineer. Playwright is Microsoft's modern browser automation toolkit — auto-waiting, multi-browser, traces, and first-class Python support. This chapter sets the map: why Playwright wins in 2025, why Python is a smart career bet, and how to finish without burning out.",
      learn: [
        "What Playwright is and why Microsoft built it",
        "Honest 2025 comparison: Playwright vs Selenium vs Cypress",
        "Why Python + Playwright is a strong career combo",
        "Realistic 4–6 month timeline and how to use this guide",
      ],
      steps: [
        {
          title: "What Playwright is",
          body: "Playwright drives Chromium, Firefox, and WebKit with one API. It auto-waits for elements, captures traces/videos/screenshots, and supports sync Python (the path we use) plus async. It exists because Selenium's architecture aged and Cypress historically locked teams into Chrome-first workflows.",
          doThis: "Skim the Playwright Python intro for 10 minutes. Write one sentence: 'Playwright is ___ because ___.'",
          items: [
            "Auto-waiting locators reduce flakes",
            "One API → Chromium, Firefox, WebKit",
            "Traces make CI failures debuggable",
          ],
        },
        {
          title: "Playwright vs Selenium vs Cypress (2025)",
          body: "Selenium: huge ecosystem, every language, more boilerplate and wait complexity. Cypress: excellent DX for JS frontends, historically weaker multi-tab/cross-browser. Playwright: best modern default for new Python QA roles — speed, tooling, multi-browser.",
          doThis: "Make a 3-column note (Playwright / Selenium / Cypress) with one strength and one weakness each.",
          tip: "Interviewers still ask Selenium history — know it, but build with Playwright.",
        },
        {
          title: "Why Python",
          body: "Python is readable, ubiquitous in many QA/SDET markets, and pairs cleanly with pytest. You do not need to master JavaScript to ship strong E2E. Learn enough DevTools; write production tests in Python.",
          doThis: "Find three job posts mentioning Playwright (ideally with Python). Save links in LEARNING.md.",
        },
        {
          title: "Outcomes & timeline",
          body: "After this guide you will build POM frameworks, CI pipelines, hybrid API+UI tests, and a portfolio employers can open. Pace: 1–2 hrs/day → ~4–6 months. Accelerated: 3–4 hrs/day → ~3 months. Busy: 7–9 months still counts as finishing.",
          doThis: "Pick recommended / accelerated / slow. Write your target finish month in LEARNING.md.",
          items: [
            "Parts 0–5: foundations through complex UI",
            "Parts 6–9: pytest, POM, data, reporting",
            "Parts 10–14: advanced, CI, projects, career",
          ],
        },
        {
          title: "How to use this guide",
          body: "Follow order. Do every doThis and practice. Pass checkpoints before advancing. Prefer writing code over collecting bookmarks. Commit to GitHub weekly.",
          doThis: "Create a GitHub repo named playwright-python-mastery with a README stating your goal and pace.",
        },
      ],
      checklist: [
        "I understand Playwright's value prop",
        "I wrote a tool comparison note",
        "I picked a timeline track",
        "GitHub learning repo created",
      ],
      practice: {
        title: "Day-zero commitment",
        brief: "Commit LEARNING.md with goal, pace, and finish target. Star microsoft/playwright-python on GitHub.",
      },
      resources: [
        r("doc", "Playwright Python Intro", "https://playwright.dev/python/docs/intro", "EN", true),
        r("doc", "Playwright Best Practices", "https://playwright.dev/python/docs/best-practices", "EN", true),
        r("blog", "Automation Panda — Playwright Python Intro", "https://automationpanda.com/2023/11/08/playwright-python-tutorial-an-introduction/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c02",
      phase: "Part 0 · Before You Begin",
      level: "beginner",
      title: "Prerequisites Check",
      minutes: 40,
      durationLabel: "Day 1–2",
      overview: "You do not need a CS degree. You need enough Python to read functions and classes, and the humility to look things up. This chapter tells you what is required, what can wait, and how to verify your machine is ready.",
      learn: [
        "Python basics that matter for automation",
        "What you can skip for now",
        "Tooling checklist before Chapter 3",
        "How to self-check readiness",
      ],
      steps: [
        {
          title: "Python you need",
          body: "Variables, strings, lists/dicts, if/else, for loops, functions, importing modules, reading a file, and OOP basics (class, __init__, methods). That is enough to start.",
          doThis: "Write a 20-line script: read a dict of users, loop, print those with role=='admin'.",
          items: [
            "variables & types",
            "loops & functions",
            "dicts/lists/JSON",
            "class + method basics",
          ],
        },
        {
          title: "What you do NOT need yet",
          body: "Decorators deep-dives, async/await mastery, metaclasses, Django/Flask, data science stacks, or TypeScript. Patterns appear later via POM and fixtures.",
          doThis: "Cross off FOMO topics — focus on the need list only.",
        },
        {
          title: "Tools checklist",
          body: "Python 3.11+, pip, VS Code or Cursor, Git, GitHub account, a modern browser, and terminal comfort with cd/ls/mkdir.",
          doThis: "Run version checks and paste outputs into LEARNING.md.",
          code: "python3 --version\npip3 --version\ngit --version",
        },
        {
          title: "Verify readiness",
          body: "If Python is missing or older than 3.10, install from python.org before Part 1. If Git is missing, install it today. One evening on a CLI crash course pays forever.",
          doThis: "Mark yourself: Ready / Need Python / Need Git / Need terminal practice.",
        },
      ],
      checklist: [
        "Python 3.10+ verified",
        "Git installed",
        "Editor chosen",
        "I know my gap list (if any)",
      ],
      practice: {
        title: "Mini Python warm-up",
        brief: "Create warmup.py with a User class (name, role) and a function that filters admins. Commit it.",
      },
      resources: [
        r("doc", "Python Getting Started", "https://www.python.org/about/gettingstarted/", "EN", true),
        r("book", "Automate the Boring Stuff (free)", "https://automatetheboringstuff.com/", "EN", true),
        r("video", "freeCodeCamp Python", "https://www.youtube.com/watch?v=rfscVS0vtbw", "EN", true),
      ],
    }),

    ch({
      id: "pw-c03",
      phase: "Part 0 · Before You Begin",
      level: "beginner",
      title: "Environment Setup",
      minutes: 75,
      durationLabel: "Day 2–3",
      overview: "A clean environment is half the battle. Install Python correctly, configure VS Code, create a venv, install Playwright and browsers, scaffold folders, and wire Git. When this chapter ends, you can launch a browser from Python.",
      learn: [
        "Install Python, VS Code, and essential extensions",
        "Create venv and install Playwright + browsers",
        "Project folder structure and Git setup",
        "Pass a complete setup checklist",
      ],
      steps: [
        {
          title: "Install Python 3.x",
          body: "Use python.org installers or pyenv. On Windows check Add to PATH. Prefer 3.11 or 3.12. Verify pip works.",
          doThis: "Confirm python3 -m pip --version works.",
          code: "python3 -m pip --version\npython3 -m venv --help",
        },
        {
          title: "VS Code + extensions",
          body: "Install VS Code (or Cursor). Add: Python (Microsoft), Pylance, Playwright Test for VS Code, and optionally GitLens.",
          doThis: "Install the four extensions. Open your future project folder in the editor.",
        },
        {
          title: "venv + Playwright install",
          body: "Always use a virtual environment. Install the playwright package, then download browser binaries.",
          doThis: "Run the install commands from your project root.",
          code: "python3 -m venv .venv\n# macOS/Linux:\nsource .venv/bin/activate\n# Windows: .venv\\Scripts\\activate\n\npython -m pip install --upgrade pip\npip install playwright pytest pytest-playwright\nplaywright install",
        },
        {
          title: "Verify browsers launch",
          body: "Create smoke_launch.py that launches Chromium headed, opens example.com, prints the title, closes.",
          doThis: "Run the script and confirm a browser window appears briefly.",
          code: "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False)\n    page = browser.new_page()\n    page.goto(\"https://example.com\")\n    print(page.title())\n    browser.close()",
        },
        {
          title: "Folder structure from day one",
          body: "Start organized: tests/, pages/, data/, utils/, reports/, .env.example, requirements.txt, pytest.ini, README.md.",
          doThis: "Create the folders and freeze deps with pip freeze > requirements.txt.",
          code: "mkdir -p tests pages data utils reports\ntouch pytest.ini .env.example README.md\npip freeze > requirements.txt",
        },
        {
          title: "Git + setup checklist",
          body: "Init git, add a Python .gitignore (include .venv/, __pycache__/, reports/, .env, test-results/). First commit: chore: project scaffold.",
          doThis: "Push the scaffold to GitHub. Tick every checklist item.",
          code: "git init\ngit add .\ngit commit -m \"chore: playwright project scaffold\"",
          items: [
            "Python 3.11+ on PATH",
            "venv activated",
            "playwright + browsers installed",
            "smoke_launch.py prints a title",
            "folders created",
            "Git remote pushed",
          ],
        },
      ],
      checklist: [
        "venv works",
        "playwright install succeeded",
        "smoke script ran",
        ".gitignore excludes secrets and .venv",
        "repo pushed",
      ],
      practice: {
        title: "Setup proof",
        brief: "Add a SETUP.md screenshot of python --version and smoke script output. Commit.",
      },
      resources: [
        r("doc", "Playwright Python Install", "https://playwright.dev/python/docs/intro", "EN", true),
        r("doc", "VS Code Python", "https://code.visualstudio.com/docs/python/python-tutorial", "EN", true),
        r("doc", "pytest-playwright", "https://playwright.dev/python/docs/test-runners", "EN", true),
      ],
      note: "If playwright install fails behind a proxy, set HTTPS_PROXY or download browsers on a better network.",
    }),

    ch({
      id: "pw-c04",
      phase: "Part 1 · Fundamentals",
      level: "beginner",
      title: "Core Concepts",
      minutes: 55,
      durationLabel: "Day 4",
      overview: "Under the hood Playwright talks to browsers over a fast protocol, isolating cookies and storage per context. Sync API is the default for pytest. Master the mental model once — every later chapter builds on it.",
      learn: [
        "Browsers, contexts, and pages",
        "Sync vs async",
        "Headless vs headed",
        "First real script end-to-end",
      ],
      steps: [
        {
          title: "Under the hood",
          body: "Playwright launches a browser process, then creates browser contexts (isolated profiles) and pages (tabs). Locators query the page; actions auto-wait for actionability.",
          doThis: "Draw a stack: Playwright API → Browser → Context → Page → Locator.",
        },
        {
          title: "Contexts & pages",
          body: "One browser can host many contexts. Each context has its own cookies/localStorage. Pages live inside a context. Parallel users = multiple contexts, not multiple browsers (usually).",
          doThis: "Write three bullets explaining when you want a new context vs a new page.",
        },
        {
          title: "Sync vs async",
          body: "from playwright.sync_api import sync_playwright is what this curriculum uses. Async exists for asyncio apps. Stay sync until you have a reason not to.",
          doThis: "Confirm your smoke script imports from playwright.sync_api.",
        },
        {
          title: "Headless vs headed + first assertion",
          body: "headless=True (CI default) runs without a window. headless=False for learning. Your first real script should navigate and assert.",
          doThis: "Assert Example Domain title with expect().",
          code: "from playwright.sync_api import sync_playwright, expect\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False)\n    page = browser.new_page()\n    page.goto(\"https://example.com\")\n    expect(page).to_have_title(\"Example Domain\")\n    browser.close()",
        },
      ],
      checklist: [
        "I can explain browser/context/page",
        "I chose sync API",
        "I ran headed and headless once",
        "First expect() assertion passed",
      ],
      practice: {
        title: "Title assertion lab",
        brief: "Open saucedemo.com, assert title contains 'Swag Labs', commit as feat: first expect assertion.",
      },
      resources: [
        r("doc", "Browser Contexts", "https://playwright.dev/python/docs/browser-contexts", "EN", true),
        r("doc", "Library", "https://playwright.dev/python/docs/library", "EN", true),
      ],
    }),

    ch({
      id: "pw-c05",
      phase: "Part 1 · Fundamentals",
      level: "beginner",
      title: "Launching Browsers & Contexts",
      minutes: 50,
      durationLabel: "Day 5",
      overview: "Launch options and contexts control isolation, locale, viewport, and login persistence. Treat contexts like clean user sessions — the foundation of reliable parallel tests.",
      learn: [
        "Launch Chromium/Firefox/WebKit",
        "Launch options: headless, slowMo, devtools",
        "Context options and persistent contexts",
        "When multiple contexts beat multiple pages",
      ],
      steps: [
        {
          title: "Launching browsers",
          body: "p.chromium.launch(), p.firefox.launch(), p.webkit.launch(). Same API, different engines. Always close what you open.",
          doThis: "Loop the three browsers, goto example.com, print browser name + title.",
          code: "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    for bt in (p.chromium, p.firefox, p.webkit):\n        browser = bt.launch(headless=True)\n        page = browser.new_page()\n        page.goto(\"https://example.com\")\n        print(bt.name, page.title())\n        browser.close()",
        },
        {
          title: "Launch options",
          body: "headless, slow_mo (ms delay), devtools=True, args for Chrome flags. Use slow_mo while learning; remove it in CI.",
          doThis: "Run headed with slow_mo=300 for one navigation observation.",
        },
        {
          title: "Contexts that matter",
          body: "browser.new_context(viewport=..., locale=..., timezone_id=..., permissions=...). Persistent contexts keep state on disk for local debugging.",
          doThis: "Create two contexts: desktop 1280x720 and mobile 390x844. Screenshot each homepage.",
          tip: "Incognito-like isolation = new_context(), not a new OS browser profile.",
        },
        {
          title: "Multiple contexts vs pages",
          body: "Multiple pages = multi-tab in one user session. Multiple contexts = independent users without cookie bleed.",
          doThis: "Write a 5-line comment in code explaining your rule of thumb.",
        },
      ],
      checklist: [
        "Launched all three browsers",
        "Tried slow_mo headed",
        "Created two contexts with different viewports",
        "I close browser/context properly",
      ],
      practice: {
        title: "Locale experiment",
        brief: "Open a site with locale='fr-FR' and locale='en-US'. Note language differences. Commit notes.",
      },
      resources: [
        r("doc", "BrowserType API", "https://playwright.dev/python/docs/api/class-browsertype", "EN", true),
        r("doc", "Contexts", "https://playwright.dev/python/docs/browser-contexts", "EN", true),
      ],
    }),

    ch({
      id: "pw-c06",
      phase: "Part 1 · Fundamentals",
      level: "beginner",
      title: "Pages & Navigation",
      minutes: 50,
      durationLabel: "Day 6",
      overview: "Navigation is more than goto. Wait-until conditions, back/forward, new tabs, and timeouts decide whether your suite is calm or chaotic. Learn the load states once and stop guessing.",
      learn: [
        "page.goto and wait_until options",
        "Back, forward, reload",
        "URL/title helpers",
        "Tabs and bring_to_front",
      ],
      steps: [
        {
          title: "goto & wait conditions",
          body: "page.goto(url, wait_until='load'|'domcontentloaded'|'networkidle'|'commit'). Prefer load or domcontentloaded; networkidle can hang on analytics-heavy sites.",
          doThis: "Time goto to Sauce Demo with load vs domcontentloaded.",
          code: "page.goto(\"https://www.saucedemo.com/\", wait_until=\"domcontentloaded\")\nprint(page.url)\nprint(page.title())",
        },
        {
          title: "History & reload",
          body: "page.go_back(), page.go_forward(), page.reload(). Combine with expect(page).to_have_url(...) after navigation.",
          doThis: "Login to Sauce Demo, go to inventory, go_back, assert login URL.",
        },
        {
          title: "Timeouts & slow pages",
          body: "Configure navigation timeout via page.set_default_navigation_timeout or fixtures. Prefer waiting for a key locator over cranking timeouts blindly.",
          doThis: "Set a short timeout intentionally, observe the error, then fix with a proper wait.",
        },
        {
          title: "Tabs",
          body: "Use context.expect_page() for popups. page.bring_to_front() focuses a tab. Always scope actions to the intended page.",
          doThis: "Open a target=_blank link on the-internet.herokuapp.com and assert the new page URL.",
        },
      ],
      checklist: [
        "I know wait_until options",
        "I used go_back/reload with assertions",
        "I handled one new tab",
        "I stopped using networkidle as default",
      ],
      practice: {
        title: "Navigation kata",
        brief: "Script: open Sauce Demo → login → inventory → refresh → assert still on inventory. Commit.",
      },
      resources: [
        r("doc", "Navigations", "https://playwright.dev/python/docs/navigations", "EN", true),
        r("lab", "Sauce Demo", "https://www.saucedemo.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-cp-01",
      kind: "checkpoint",
      phase: "Part 1 · Fundamentals",
      level: "beginner",
      title: "Checkpoint — Fundamentals Gate",
      minutes: 30,
      durationLabel: "End of Week 1",
      overview: "Prove you can launch browsers, navigate, and assert without copy-paste panic. Fail this gate → rework Chapters 4–6 before locators.",
      learn: [
        "Pass criteria for Part 1",
        "Demo a clean headed script",
        "Explain context vs page aloud",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "You pass when all items below are true without looking at notes for more than 30 seconds.",
          items: [
            "Launch Chromium headed and headless from a script",
            "Create two isolated contexts and show cookies do not leak",
            "goto + expect title/URL on Sauce Demo",
            "Explain sync Playwright and why we use it",
            "Repo has requirements.txt + .gitignore + smoke script",
          ],
        },
        {
          title: "Live demo",
          body: "Record a 2-minute video: run your smoke, narrate browser → context → page.",
          doThis: "Add the demo link to LEARNING.md.",
        },
      ],
      checklist: [
        "All pass criteria checked",
        "Demo recorded",
        "Ready for Part 2",
      ],
      practice: {
        title: "Gate review",
        brief: "If any criterion fails, schedule a half-day repair before Chapter 7.",
      },
    }),

    ch({
      id: "pw-c07",
      phase: "Part 2 · Finding Elements",
      level: "beginner",
      title: "Locators Deep Dive",
      minutes: 50,
      durationLabel: "Week 2 · Day 1",
      overview: "Locators are the skill that separates flaky suites from calm ones. Playwright locators are lazy, auto-waiting, and retry until timeout — nothing like Selenium's stale element traps if you use them well.",
      learn: [
        "What a locator is and how it evaluates",
        "Why Playwright locators beat classic find_element",
        "Auto-waiting and retries on dynamic pages",
        "Mental model for stable selection",
      ],
      steps: [
        {
          title: "What is a locator",
          body: "A locator is a recipe for finding elements, not a snapshot. It re-queries the DOM when you act or assert. That is why page.get_by_role('button', name='Login') stays resilient as the page updates.",
          doThis: "Read the Locators docs intro. Write your own one-sentence definition.",
        },
        {
          title: "Better than Selenium find_element",
          body: "Selenium returns a WebElement immediately; if the DOM refreshes, you get StaleElementReferenceException. Playwright locators re-resolve. Prefer user-facing attributes (role, label, text, test id) over brittle CSS.",
          doThis: "List 3 brittle selectors you have seen (or imagine) and rewrite them as get_by_role ideas.",
        },
        {
          title: "Auto-waiting built in",
          body: "Before click/fill, Playwright waits for attached, visible, stable, enabled, and receiving events. Assertions retry until timeout. This kills most time.sleep habits — if you still sleep, you are fighting the tool.",
          doThis: "Open Sauce Demo, use a locator click on Login without any sleep. Confirm it works.",
          tip: "If auto-wait fails, fix the locator or app state — do not add sleep first.",
        },
        {
          title: "Retries on dynamic pages",
          body: "Locators retry within the action/assertion timeout. Spinners, SPA route changes, and delayed renders are normal. Your job is precise locators + expect(), not polling loops.",
          doThis: "Write a 5-bullet 'locator rules' card and pin it above your desk.",
        },
      ],
      checklist: [
        "I can explain lazy locators",
        "I know why stale elements are rarer here",
        "I clicked without time.sleep",
        "I have a personal locator priority list",
      ],
      practice: {
        title: "Locator manifesto",
        brief: "Commit LOCATORS.md: priority order role → label → placeholder → text → test id → CSS → XPath.",
      },
      resources: [
        r("doc", "Playwright Locators", "https://playwright.dev/python/docs/locators", "EN", true),
        r("doc", "Best Practices", "https://playwright.dev/python/docs/best-practices", "EN", true),
      ],
    }),

    ch({
      id: "pw-c08",
      phase: "Part 2 · Finding Elements",
      level: "beginner",
      title: "Built-in Locators (get_by_role first)",
      minutes: 60,
      durationLabel: "Week 2 · Day 2",
      overview: "get_by_role is your default weapon. It mirrors how assistive tech sees the page — which means your tests stay close to real users. Learn every built-in, then pick the right one without thinking.",
      learn: [
        "get_by_role with name/exact/checked",
        "get_by_text, label, placeholder, alt_text, title, test_id",
        "When to use which built-in",
        "Sauce Demo login with role locators only",
      ],
      steps: [
        {
          title: "get_by_role first",
          body: "Roles include button, link, textbox, checkbox, heading, img, list, and more. Pass name= for accessible name. Use exact=True when partial matches bite you.",
          doThis: "On Sauce Demo, locate Username textbox, Password textbox, and Login button via get_by_role only.",
          code: "page.get_by_role(\"textbox\", name=\"Username\").fill(\"standard_user\")\npage.get_by_role(\"textbox\", name=\"Password\").fill(\"secret_sauce\")\npage.get_by_role(\"button\", name=\"Login\").click()",
        },
        {
          title: "Text, label, placeholder",
          body: "get_by_text for visible copy; get_by_label for labeled inputs; get_by_placeholder when labels are missing. Prefer label over placeholder when both exist.",
          doThis: "Find one element three ways on DemoQA or Sauce Demo. Prefer the most accessible.",
        },
        {
          title: "alt, title, test id",
          body: "get_by_alt_text for images; get_by_title for title attributes; get_by_test_id for data-testid contracts with developers. Agree on test ids for critical flows.",
          doThis: "Add a note: when would you ask a developer for data-testid?",
        },
        {
          title: "Choosing the right built-in",
          body: "Priority: role → label → placeholder → text → test id → CSS/XPath. Exact matches for unique strings. Avoid chaining five filters when one role works.",
          doThis: "Rewrite any CSS-based smoke test to built-ins. Commit.",
        },
      ],
      checklist: [
        "Login with get_by_role only",
        "Used get_by_label or placeholder once",
        "Know when to request test ids",
        "Deleted at least one brittle CSS selector",
      ],
      practice: {
        title: "Role-only inventory",
        brief: "After login, assert Products heading via get_by_role('heading'). Commit feat: role locators login.",
      },
      resources: [
        r("doc", "Locators — built-ins", "https://playwright.dev/python/docs/locators", "EN", true),
        r("lab", "Sauce Demo", "https://www.saucedemo.com/", "EN", true),
        r("lab", "DemoQA", "https://demoqa.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c09",
      phase: "Part 2 · Finding Elements",
      level: "beginner",
      title: "CSS & XPath",
      minutes: 55,
      durationLabel: "Week 2 · Day 3",
      overview: "Built-ins first — but CSS and XPath still matter for messy DOMs and legacy apps. Learn just enough selector craft to survive, then return to roles whenever you can.",
      learn: [
        "locator() with CSS: tag, class, id, attributes",
        "Parent-child and nth-child basics",
        "XPath essentials and relative vs absolute",
        "Common mistakes and when CSS beats XPath",
      ],
      steps: [
        {
          title: "CSS essentials",
          body: "page.locator('css=...') or page.locator('#id'), '.class', '[data-test=username]'. Prefer attributes over deep hierarchies.",
          doThis: "Locate Sauce Demo username with [data-test=username]. Compare to get_by_role.",
          code: "page.locator(\"[data-test=username]\").fill(\"standard_user\")\npage.locator(\"[data-test=password]\").fill(\"secret_sauce\")\npage.locator(\"[data-test=login-button]\").click()",
        },
        {
          title: "Relationships & pseudo-classes",
          body: "child selectors (a > b), descendants (a b), :first-child, :last-child, :nth-child(n). Easy to break when layout changes — use sparingly.",
          doThis: "Write one nth-child locator, then replace it with a role/filter approach.",
        },
        {
          title: "XPath basics",
          body: "page.locator('xpath=//button[@type=\"submit\"]'). Relative // preferred over absolute /html/body/... text() and contains() are powerful and fragile.",
          doThis: "Find Login button with XPath once. Immediately rewrite with get_by_role.",
          tip: "XPath is a last resort for shadow-unfriendly legacy HTML — not a lifestyle.",
        },
        {
          title: "Mistakes to avoid",
          body: "Absolute XPath, indexes as primary strategy, matching on dynamic classes (css-1a2b3c), and copying DevTools full path. Prefer stable contracts.",
          doThis: "Add a BAD vs GOOD selectors section to LOCATORS.md.",
        },
      ],
      checklist: [
        "Used CSS attribute selectors once",
        "Wrote and discarded one XPath",
        "Documented bad selector patterns",
        "Default remains get_by_role",
      ],
      practice: {
        title: "Selector triage",
        brief: "For 5 elements on the-internet.herokuapp.com, pick best locator type and justify in a table.",
      },
      resources: [
        r("doc", "Other locators", "https://playwright.dev/python/docs/other-locators", "EN", true),
        r("doc", "CSS selectors (web.dev)", "https://web.dev/learn/css/selectors", "EN", true),
        r("doc", "XPath cheatsheet", "https://devhints.io/xpath", "EN", true),
      ],
    }),

    ch({
      id: "pw-c10",
      phase: "Part 2 · Finding Elements",
      level: "beginner",
      title: "Advanced Locator Techniques",
      minutes: 55,
      durationLabel: "Week 2 · Day 4",
      overview: "Real pages have lists, nested cards, and near-duplicate buttons. Chaining, filter, nth, has, and has_text turn chaos into precision — without descending into XPath hell.",
      learn: [
        "Chaining and filter/nth/first/last",
        "has() and has_text()",
        "Iframes and shadow DOM locator entry points",
        "Debugging locators that match nothing or too much",
      ],
      steps: [
        {
          title: "Chain & filter",
          body: "parent.locator(...).filter(has_text='Sauce Labs Backpack').get_by_role('button', name='Add to cart'). Narrow then act.",
          doThis: "On inventory, add a specific product using filter(has_text=...).",
          code: "item = page.locator(\".inventory_item\").filter(has_text=\"Sauce Labs Backpack\")\nitem.get_by_role(\"button\", name=\"Add to cart\").click()",
        },
        {
          title: "nth, first, last",
          body: "locator.nth(0), .first, .last when order is stable and meaningful. Prefer filter by text/role when identity matters more than position.",
          doThis: "Assert inventory count with to_have_count, then click first Add to cart.",
        },
        {
          title: "has / has_text / frames / shadow",
          body: "has() scopes to containers that contain another locator. frame_locator for iframes. Shadow piercing works with locators in many cases — practice on DemoQA frames.",
          doThis: "Open one iframe challenge on the-internet and click inside via frame_locator.",
        },
        {
          title: "Debug bad locators",
          body: "Use page.pause(), codegen, locator.count(), and assert count==1 before acting. Strict mode errors mean your locator is too loose — tighten it.",
          doThis: "Intentionally write a loose locator, trigger strict mode violation, then fix it.",
        },
      ],
      checklist: [
        "Used filter(has_text)",
        "Used nth or first intentionally",
        "Touched frame_locator once",
        "Fixed one strict mode error",
      ],
      practice: {
        title: "Precise cart add",
        brief: "Add two different products by name using chained filters. Assert cart badge == 2.",
      },
      resources: [
        r("doc", "Filtering locators", "https://playwright.dev/python/docs/locators#filtering-locators", "EN", true),
        r("doc", "Frames", "https://playwright.dev/python/docs/frames", "EN", true),
      ],
    }),

    ch({
      id: "pw-c11",
      phase: "Part 2 · Finding Elements",
      level: "beginner",
      title: "Inspector & Codegen",
      minutes: 45,
      durationLabel: "Week 2 · Day 5",
      overview: "Codegen writes your first draft; Inspector teaches you why a click failed. Pros still use both — then they refactor generated CSS into role locators like adults.",
      learn: [
        "playwright codegen workflow",
        "Inspector for step-through debugging",
        "Cleaning generated code",
        "Evaluating locator stability",
      ],
      steps: [
        {
          title: "Codegen",
          body: "playwright codegen https://www.saucedemo.com/ records actions and suggests locators. Great for discovery, bad as final code.",
          doThis: "Record login + add to cart. Save the raw script as codegen_raw.py.",
          code: "playwright codegen https://www.saucedemo.com/",
        },
        {
          title: "Clean the output",
          body: "Replace brittle selectors with get_by_role, extract constants, remove redundant waits, add expect assertions.",
          doThis: "Refactor codegen_raw.py into tests/test_login_codegen_cleaned.py and commit both for comparison.",
        },
        {
          title: "Inspector",
          body: "PWDEBUG=1 pytest ... or page.pause() opens Inspector. Step actions, explore locators, watch the DOM.",
          doThis: "Run one test with PWDEBUG=1 and step through login.",
          code: "PWDEBUG=1 pytest tests/test_login_codegen_cleaned.py -q",
        },
        {
          title: "Stability check",
          body: "Before accepting a locator: unique (count==1), user-facing, unlikely to change with CSS restyles, works across browsers.",
          doThis: "Score 5 locators from codegen 1–5 on stability. Keep only 4+.",
        },
      ],
      checklist: [
        "Recorded a flow with codegen",
        "Refactored to role locators",
        "Used Inspector once",
        "Have a stability rubric",
      ],
      practice: {
        title: "Codegen → clean PR",
        brief: "Open a PR titled 'codegen cleaned' showing raw vs cleaned diff.",
      },
      resources: [
        r("doc", "Codegen", "https://playwright.dev/python/docs/codegen", "EN", true),
        r("doc", "Debug", "https://playwright.dev/python/docs/debug", "EN", true),
      ],
    }),

    ch({
      id: "pw-c12",
      phase: "Part 3 · Interactions",
      level: "beginner",
      title: "Basic Actions",
      minutes: 50,
      durationLabel: "Week 3 · Day 1",
      overview: "Clicks, fills, checks, selects — the verbs of UI automation. Learn options, know fill vs type, and stop treating the keyboard like a mystery.",
      learn: [
        "click, dblclick, hover, right-click",
        "fill vs type vs clear vs press",
        "check/uncheck and select_option",
        "focus/blur basics",
      ],
      steps: [
        {
          title: "Clicks & hover",
          body: "locator.click(), dblclick(), hover(), click(button='right'). Options include modifiers, position, force (dangerous), timeout.",
          doThis: "Practice click and hover on DemoQA buttons/tooltips.",
        },
        {
          title: "fill vs type",
          body: "fill() clears then sets value fast — prefer for forms. type()/press_sequentially() fires per-key events when the app listens for keyup handlers.",
          doThis: "Fill Sauce Demo login with fill(). Note one app where type would matter.",
          tip: "Default to fill(). Reach for press_sequentially only when fill fails functionally.",
        },
        {
          title: "Keyboard & clear",
          body: "locator.clear(), locator.press('Enter'), page.keyboard.press('Control+A'). Shortcuts matter for power-user UIs.",
          doThis: "Clear a filled field and press Enter to submit a form somewhere on the-internet.",
        },
        {
          title: "Checks & selects",
          body: "check()/uncheck() for checkboxes; select_option(value=|label=|index=) for <select>. Assert state after.",
          doThis: "Automate a checkbox + dropdown scenario on DemoQA.",
          code: "page.get_by_label(\"Accept\").check()\npage.locator(\"#dropdown\").select_option(label=\"Option 2\")",
        },
      ],
      checklist: [
        "Used fill successfully",
        "Used check/select_option",
        "Know when type beats fill",
        "Avoided force click so far",
      ],
      practice: {
        title: "Form gym",
        brief: "Build tests/test_form_basics.py covering text, checkbox, select on a practice site.",
      },
      resources: [
        r("doc", "Actions / Input", "https://playwright.dev/python/docs/input", "EN", true),
        r("lab", "the-internet", "https://the-internet.herokuapp.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c13",
      phase: "Part 3 · Interactions",
      level: "beginner",
      title: "Advanced Interactions",
      minutes: 50,
      durationLabel: "Week 3 · Day 2",
      overview: "Drag-drop, uploads, scrolling, chords, and force clicks live at the edge of realism. Use them deliberately — especially force, which skips actionability checks for a reason.",
      learn: [
        "drag_to and file uploads",
        "Mouse/keyboard chords and scrolling",
        "Tap and coordinate clicks",
        "Force click — when and why (carefully)",
      ],
      steps: [
        {
          title: "Drag & drop + uploads",
          body: "source.drag_to(target). set_input_files(path) or list of paths for multi-upload. For hidden inputs, locate the input[type=file] even if visually custom.",
          doThis: "Upload a small text file on the-internet upload demo.",
          code: "page.locator(\"input[type=file]\").set_input_files(\"data/sample.txt\")",
        },
        {
          title: "Mouse & keyboard chords",
          body: "page.mouse.move/down/up; keyboard.press('Control+A') etc. Platform differences: Meta on macOS vs Control on Windows — parameterize if needed.",
          doThis: "Select-all in an input via keyboard shortcut appropriate to your OS.",
        },
        {
          title: "Scroll & coordinates",
          body: "locator.scroll_into_view_if_needed(), mouse.wheel(). Click position={x,y} for canvas-like UIs. tap() for touch emulation contexts.",
          doThis: "Scroll a tall page until a footer link is actionable, then click it.",
        },
        {
          title: "Force & disabled elements",
          body: "force=True bypasses actionability — use only when the app is visually ready but Playwright disagrees (or for negative tests). Prefer fixing locators/overlays first.",
          doThis: "Document one legitimate force=True case and one forbidden case in NOTES.md.",
        },
      ],
      checklist: [
        "Uploaded a file in a test",
        "Tried drag_to or scroll_into_view",
        "Understand force click risk",
        "No force in happy-path tests",
      ],
      practice: {
        title: "Upload proof",
        brief: "Commit data/sample.txt + test that uploads and asserts confirmation text.",
      },
      resources: [
        r("doc", "Input actions", "https://playwright.dev/python/docs/input", "EN", true),
        r("lab", "the-internet upload", "https://the-internet.herokuapp.com/upload", "EN", true),
      ],
    }),

    ch({
      id: "pw-c14",
      phase: "Part 3 · Interactions",
      level: "beginner",
      title: "Waiting Strategies — ban time.sleep",
      minutes: 55,
      durationLabel: "Week 3 · Day 3",
      overview: "Flakes are almost always waits in disguise. Playwright already waits — your job is to wait for the right condition with expect and wait_for_*, never with time.sleep.",
      learn: [
        "What auto-waiting covers",
        "wait_for_load_state, url, function, selector",
        "Assertion-based waiting with expect",
        "Why time.sleep is banned",
      ],
      steps: [
        {
          title: "Auto-wait coverage",
          body: "Actions wait for actionability; assertions retry. You still wait explicitly for navigation, network, or custom JS conditions.",
          doThis: "Find any time.sleep in your repo and delete it.",
        },
        {
          title: "Explicit waits that earn their keep",
          body: "page.wait_for_url(...), wait_for_load_state('domcontentloaded'), wait_for_function('window.appReady === true'), locator.wait_for(state='visible').",
          doThis: "Replace a sleep after login with expect(page).to_have_url(...).",
          code: "page.get_by_role(\"button\", name=\"Login\").click()\nexpect(page).to_have_url(\"**/inventory.html\")\nexpect(page.get_by_text(\"Products\")).to_be_visible()",
        },
        {
          title: "Timeouts",
          body: "Configure sensible defaults in pytest.ini / fixtures. Locally you may raise timeouts while learning; CI should stay tight enough to fail fast.",
          doThis: "Set a project default timeout and document it in README.",
        },
        {
          title: "Debug timeout errors",
          body: "Read the error: which locator, which state, last URL. Open trace. Reproduce headed. Fix locator or app race — do not triple the timeout as your first move.",
          doThis: "Intentionally break a locator, capture the timeout message, write the root cause in one line.",
        },
      ],
      checklist: [
        "Zero time.sleep in tests",
        "Used expect as a wait",
        "Used wait_for_url once",
        "Documented default timeout",
      ],
      practice: {
        title: "Sleep bounty",
        brief: "Grep the repo for sleep. Replace every hit. Commit chore: ban time.sleep.",
      },
      resources: [
        r("doc", "Waiting", "https://playwright.dev/python/docs/actionability", "EN", true),
        r("doc", "Assertions", "https://playwright.dev/python/docs/test-assertions", "EN", true),
      ],
      note: "House rule: any PR introducing time.sleep needs a written waiver.",
    }),

    ch({
      id: "pw-c15",
      phase: "Part 4 · Assertions",
      level: "beginner",
      title: "Playwright Assertions",
      minutes: 40,
      durationLabel: "Week 3 · Day 4",
      overview: "A test without assertions is a scripted tour. expect() is auto-retrying and readable — make it the heart of every check you write.",
      learn: [
        "Why assertions define the test",
        "expect() API overview",
        "Auto-retrying vs non-retrying",
        "Assertion timeout configuration",
      ],
      steps: [
        {
          title: "Heart of the test",
          body: "Arrange → Act → Assert. Assertions encode product expectations. Prefer expect over assert for UI because of retries.",
          doThis: "Audit one test: ensure every critical outcome has an expect.",
        },
        {
          title: "expect API",
          body: "from playwright.sync_api import expect. Works on locators and pages. Timeouts are independent from action timeouts.",
          doThis: "Write three expects: URL, heading visible, button enabled.",
        },
        {
          title: "Retrying vs not",
          body: "Playwright expects retry; plain Python assert does not. Use assert for pure data already in hand (JSON fields after response.json()).",
          doThis: "Convert one assert on a locator property into expect.",
        },
        {
          title: "Timeouts",
          body: "expect(locator).to_be_visible(timeout=10_000). Prefer fixing speed/flake over huge timeouts.",
          doThis: "Document your assertion timeout policy in README (e.g. 5s local, 10s CI).",
        },
      ],
      checklist: [
        "All UI tests use expect",
        "I know retry difference vs assert",
        "Timeout policy written",
      ],
      practice: {
        title: "Assert-rich login",
        brief: "Login test with ≥4 expects (URL, title/heading, inventory count, cart badge).",
      },
      resources: [
        r("doc", "Test assertions", "https://playwright.dev/python/docs/test-assertions", "EN", true),
      ],
    }),

    ch({
      id: "pw-c16",
      phase: "Part 4 · Assertions",
      level: "beginner",
      title: "Element Assertions",
      minutes: 45,
      durationLabel: "Week 3 · Day 5",
      overview: "Visible, enabled, text, value, attribute, class, count, CSS — the vocabulary of UI truth. Memorize the common ones until they are muscle memory.",
      learn: [
        "Visibility, enabled, checked",
        "Text, value, attribute, class",
        "Count and contain_text",
        "to_have_css for computed styles",
      ],
      steps: [
        {
          title: "State assertions",
          body: "to_be_visible/hidden, enabled/disabled, checked / not_to_be_checked. Assert both positive and negative paths.",
          doThis: "Assert Login button visible+enabled before click; assert error state on bad password.",
        },
        {
          title: "Text & value",
          body: "to_have_text (exact/list), to_contain_text, to_have_value for inputs. Prefer contain for marketing copy that drifts.",
          doThis: "Assert product name and price text for one inventory item.",
          code: "expect(page.get_by_role(\"textbox\", name=\"Username\")).to_have_value(\"standard_user\")\nexpect(page.get_by_text(\"Products\")).to_be_visible()",
        },
        {
          title: "Attributes, class, count, css",
          body: "to_have_attribute, to_have_class, to_have_count, to_have_css. Great for aria-expanded, active tabs, list lengths.",
          doThis: "Assert inventory items to_have_count(6) on Sauce Demo.",
        },
      ],
      checklist: [
        "Used visible/enabled/checked",
        "Used text/value asserts",
        "Used to_have_count",
        "Tried attribute or class assert",
      ],
      practice: {
        title: "Negative login asserts",
        brief: "locked_out_user shows error; assert error visible and still on login URL.",
      },
      resources: [
        r("doc", "Assertions", "https://playwright.dev/python/docs/test-assertions", "EN", true),
        r("lab", "Sauce Demo", "https://www.saucedemo.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c17",
      phase: "Part 4 · Assertions",
      level: "beginner",
      title: "Page Assertions + Soft Assertions",
      minutes: 40,
      durationLabel: "Week 4 · Day 1",
      overview: "Page-level expects nail navigation contracts. Soft assertions gather multiple failures in one run — powerful for forms, dangerous if you hide cascading junk.",
      learn: [
        "to_have_title and to_have_url (incl. regex)",
        "Asserting absence",
        "Soft assertions pattern",
        "Combining asserts effectively",
      ],
      steps: [
        {
          title: "Title & URL",
          body: "expect(page).to_have_title(...); to_have_url(str|regex). Use glob/regex for dynamic IDs.",
          doThis: "Assert inventory URL with a glob pattern after login.",
          code: "import re\nexpect(page).to_have_url(re.compile(r\".*/inventory\\.html\"))\nexpect(page).to_have_title(re.compile(\"Swag Labs\"))",
        },
        {
          title: "Absence",
          body: "expect(locator).to_have_count(0) or to_be_hidden. Clearer than try/except on clicks.",
          doThis: "After logout, assert inventory heading count is 0.",
        },
        {
          title: "Soft assertions",
          body: "Playwright Python soft asserts can be emulated by collecting errors or using pytest-check / custom helpers. Use for multi-field form validation; still fail the test at the end.",
          doThis: "Write a helper that collects assertion errors for 3 fields and raises a combined AssertionError.",
          tip: "One hard expect for navigation; soft-style checks for many independent field messages.",
        },
      ],
      checklist: [
        "Used URL regex/glob",
        "Asserted absence with count 0",
        "Tried a soft-assert pattern",
        "Know when soft asserts help vs hide bugs",
      ],
      practice: {
        title: "Form validation sweep",
        brief: "Submit empty form; soft-check multiple error messages; fail once with combined report.",
      },
      resources: [
        r("doc", "Assertions", "https://playwright.dev/python/docs/test-assertions", "EN", true),
      ],
    }),

    ch({
      id: "pw-c18",
      phase: "Part 5 · Complex Scenarios",
      level: "intermediate",
      title: "Popups & Dialogs",
      minutes: 45,
      durationLabel: "Week 4 · Day 2",
      overview: "Alerts, confirms, prompts, and new windows will wreck naive tests. Listen before you trigger — Playwright makes this elegant with expect_event patterns.",
      learn: [
        "JS alert/confirm/prompt handling",
        "Listen before trigger",
        "expect_popup for new windows",
        "Common dialog mistakes",
      ],
      steps: [
        {
          title: "Dialog events",
          body: "page.on('dialog', handler) or page.expect_dialog(). Accept/dismiss; prompt needs accept(value).",
          doThis: "Automate JS alert and confirm on the-internet javascript_alerts.",
          code: "with page.expect_dialog() as dialog_info:\n    page.get_by_role(\"button\", name=\"Click for JS Alert\").click()\ndialog = dialog_info.value\nassert dialog.type == \"alert\"\ndialog.accept()",
        },
        {
          title: "Listen first",
          body: "Register dialog expectation before the click that opens it or you miss the event.",
          doThis: "Demonstrate a failing order, then fix it.",
        },
        {
          title: "Popups / new pages",
          body: "with context.expect_page() as p: click...; new_page = p.value; new_page.wait_for_load_state().",
          doThis: "Handle a target=_blank link; assert title on the popup; close it.",
        },
      ],
      checklist: [
        "Handled alert + confirm",
        "Handled prompt text",
        "Handled a popup page",
        "Never missed dialog by ordering wrong",
      ],
      practice: {
        title: "Dialog suite",
        brief: "Three tests: alert, confirm dismiss, prompt accept with value. Commit.",
      },
      resources: [
        r("doc", "Dialogs", "https://playwright.dev/python/docs/dialogs", "EN", true),
        r("doc", "Pages", "https://playwright.dev/python/docs/pages", "EN", true),
        r("lab", "JS Alerts", "https://the-internet.herokuapp.com/javascript_alerts", "EN", true),
      ],
    }),

    ch({
      id: "pw-c19",
      phase: "Part 5 · Complex Scenarios",
      level: "intermediate",
      title: "Iframes",
      minutes: 40,
      durationLabel: "Week 4 · Day 3",
      overview: "Iframes are separate documents. frame_locator is the right door — treat the frame like a nested page and keep locators readable.",
      learn: [
        "Why iframes break naive locators",
        "frame_locator usage",
        "Nested frames",
        "Common iframe scenarios",
      ],
      steps: [
        {
          title: "frame_locator",
          body: "page.frame_locator('iframe').get_by_role(...). Chain into nested frames as needed.",
          doThis: "Complete the-internet iframe or nested frames exercise with frame_locator.",
          code: "frame = page.frame_locator(\"iframe#mce_0_ifr\")\nframe.locator(\"body\").fill(\"Hello from Playwright\")",
        },
        {
          title: "By name/url/index",
          body: "Prefer stable iframe selectors (id/name/title). Index is last resort.",
          doThis: "Document how you selected your iframe locator and why it is stable.",
        },
        {
          title: "Nested iframes",
          body: "frame_locator(...).frame_locator(...). Keep chains short; extract a helper if nesting > 2.",
          doThis: "If nested frames available, interact one level deep and assert text.",
        },
      ],
      checklist: [
        "Used frame_locator successfully",
        "Avoided page.locator into wrong document",
        "Noted stability strategy for iframe selector",
      ],
      practice: {
        title: "Iframe form",
        brief: "Type into an editor inside an iframe and assert the value persists.",
      },
      resources: [
        r("doc", "Frames", "https://playwright.dev/python/docs/frames", "EN", true),
        r("lab", "Frames practice", "https://the-internet.herokuapp.com/iframe", "EN", true),
      ],
    }),

    ch({
      id: "pw-c20",
      phase: "Part 5 · Complex Scenarios",
      level: "intermediate",
      title: "File Operations",
      minutes: 45,
      durationLabel: "Week 4 · Day 4",
      overview: "Uploads and downloads are CI landmines if you assume local paths casually. Use expect_download, save files into a temp artifacts folder, and assert size/content.",
      learn: [
        "expect_download and verify files",
        "Single and multi upload",
        "File chooser events",
        "Drag-drop upload zones",
      ],
      steps: [
        {
          title: "Downloads",
          body: "with page.expect_download() as d: click; download = d.value; path = download.path(); download.save_as(...).",
          doThis: "Trigger a download and assert suggested_filename / file exists.",
          code: "with page.expect_download() as download_info:\n    page.get_by_role(\"link\", name=\"Download\").click()\ndownload = download_info.value\ndownload.save_as(\"reports/\" + download.suggested_filename)",
        },
        {
          title: "Uploads",
          body: "set_input_files for input[type=file]. Multiple files = list of paths. For chooser UI without input, use page.expect_file_chooser().",
          doThis: "Upload one and two files on a practice page.",
        },
        {
          title: "Drag-drop zones",
          body: "Many dropzones still have a hidden file input — locate it. Otherwise dispatch events carefully or use set_input_files on the input React hooked up.",
          doThis: "Identify whether your dropzone has a hidden input; prefer set_input_files.",
        },
      ],
      checklist: [
        "Saved a download to reports/",
        "Uploaded via set_input_files",
        "Tried multi-file upload",
        "Know expect_file_chooser",
      ],
      practice: {
        title: "Download assert",
        brief: "Test that downloads a file and asserts non-zero byte size.",
      },
      resources: [
        r("doc", "Downloads", "https://playwright.dev/python/docs/downloads", "EN", true),
        r("doc", "Input files", "https://playwright.dev/python/docs/input#upload-files", "EN", true),
      ],
    }),

    ch({
      id: "pw-c21",
      phase: "Part 5 · Complex Scenarios",
      level: "intermediate",
      title: "Network Handling",
      minutes: 55,
      durationLabel: "Week 4 · Day 5",
      overview: "Route, mock, block, and wait on the network wire. This is how you stabilize flaky third parties and test error states the UI rarely reaches in prod.",
      learn: [
        "page.route intercept & mock",
        "Block ads/analytics",
        "wait_for_request/response",
        "Simulate 404/500 and throttle",
      ],
      steps: [
        {
          title: "route() basics",
          body: "page.route('**/api/**', handler) to continue, fulfill, or abort. Mock JSON to decouple UI from backend.",
          doThis: "Mock an API response and assert UI renders mocked data.",
          code: "def handle(route):\n    route.fulfill(status=200, content_type=\"application/json\", body='{\"name\":\"Mocked\"}')\n\npage.route(\"**/api/user\", handle)\npage.goto(\"https://example.com\")",
        },
        {
          title: "Block & modify",
          body: "Abort image/analytics URLs to speed tests. Modify headers or body when probing edge cases.",
          doThis: "Block **/*.{png,jpg,jpeg} on a heavy page and note load improvement.",
        },
        {
          title: "Wait for network",
          body: "page.wait_for_response(lambda r: r.url.contains('/api') and r.ok). Pair UI actions with network completion.",
          doThis: "Click a button and wait_for_response before asserting UI.",
        },
        {
          title: "Error states & throttle",
          body: "Fulfill 500 to test toasts. Browser context can emulate offline; CDP session can throttle (advanced).",
          doThis: "Force a 500 on one endpoint and assert error UI.",
        },
      ],
      checklist: [
        "Mocked one API with route.fulfill",
        "Blocked static assets once",
        "Used wait_for_response",
        "Simulated a server error",
      ],
      practice: {
        title: "Mocked profile",
        brief: "Build a test that never hits real backend for a profile widget — 100% mocked.",
      },
      resources: [
        r("doc", "Network", "https://playwright.dev/python/docs/network", "EN", true),
        r("doc", "Mock APIs", "https://playwright.dev/python/docs/mock", "EN", true),
      ],
    }),

    ch({
      id: "pw-c22",
      phase: "Part 5 · Complex Scenarios",
      level: "intermediate",
      title: "Authentication & Sessions — storageState",
      minutes: 55,
      durationLabel: "Week 5 · Day 1",
      overview: "Logging in before every test wastes minutes and invites flakes. storageState saves cookies/localStorage so your suite starts already authenticated — a career-critical pattern.",
      learn: [
        "Login strategies that scale",
        "Save and reuse storageState",
        "Cookies and web storage APIs",
        "Basic auth, tokens, SSO approaches",
      ],
      steps: [
        {
          title: "Login approaches",
          body: "UI login once per suite (setup), API login to seed cookies, or inject storageState. Prefer API+storageState for speed when available.",
          doThis: "Time UI login vs reused state for 5 tests — record the delta.",
        },
        {
          title: "storageState workflow",
          body: "Login once → context.storage_state(path='.auth/user.json') → new_context(storage_state='.auth/user.json').",
          doThis: "Implement auth setup script and one test that skips UI login.",
          code: "# save_auth.py\nfrom playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    context = browser.new_context()\n    page = context.new_page()\n    page.goto(\"https://www.saucedemo.com/\")\n    page.get_by_role(\"textbox\", name=\"Username\").fill(\"standard_user\")\n    page.get_by_role(\"textbox\", name=\"Password\").fill(\"secret_sauce\")\n    page.get_by_role(\"button\", name=\"Login\").click()\n    context.storage_state(path=\".auth/standard_user.json\")\n    browser.close()",
        },
        {
          title: "Cookies & storage",
          body: "context.add_cookies([...]); page.evaluate for localStorage. Useful for token injection when storageState is awkward.",
          doThis: "Read cookies after login and print names (not secret values) to understand session shape.",
        },
        {
          title: "Basic auth, OAuth, SSO",
          body: "http_credentials in context for basic auth. OAuth/SSO: often use API-obtained tokens, test-only bypass, or one curated storageState refreshed in CI secrets.",
          doThis: "Write a short ADR: how your future framework will handle auth.",
        },
      ],
      checklist: [
        "Saved storageState to disk",
        "Reused it in a test",
        ".auth/ gitignored",
        "Auth approach ADR written",
      ],
      practice: {
        title: "Auth bootstrap",
        brief: "Add scripts/save_auth.py + pytest fixture that loads storage_state. Commit.",
      },
      resources: [
        r("doc", "Authentication", "https://playwright.dev/python/docs/auth", "EN", true),
        r("doc", "Browser contexts", "https://playwright.dev/python/docs/browser-contexts", "EN", true),
      ],
      note: "Never commit real production storageState files.",
    }),

    ch({
      id: "pw-c23",
      phase: "Part 5 · Complex Scenarios",
      level: "intermediate",
      title: "Frames, Shadows & Dynamic Content",
      minutes: 50,
      durationLabel: "Week 5 · Day 2",
      overview: "SPAs, infinite scroll, spinners, shadows, and animations are modern web reality. Meet them with locators, expects, and patience — not sleeps.",
      learn: [
        "Shadow DOM piercing mindset",
        "Dynamic/lazy content strategies",
        "Infinite scroll patterns",
        "SPA navigations and animations",
      ],
      steps: [
        {
          title: "Shadow DOM",
          body: "Playwright locators can pierce open shadow roots. Prefer roles inside shadow trees; avoid brittle CSS into internals when public APIs exist.",
          doThis: "Practice on a shadow DOM demo page; assert text inside shadow.",
        },
        {
          title: "Spinners & lazy load",
          body: "Wait for spinner to hide: expect(spinner).to_be_hidden(). For lazy lists, scroll_into_view + expect count to grow.",
          doThis: "Write a helper wait_for_spinner_gone(page).",
        },
        {
          title: "Infinite scroll",
          body: "Loop: scroll → wait for network/count increase → break at target. Cap iterations to avoid infinite CI jobs.",
          doThis: "Load at least N items via scroll on a demo list page.",
        },
        {
          title: "SPA & animations",
          body: "Assert route via URL; assert key landmark visible. Prefer expect over waiting for CSS animation end unless visual timing is the requirement.",
          doThis: "Navigate a client-side route and assert landmark + URL without sleep.",
        },
      ],
      checklist: [
        "Pierced or practiced shadow locator",
        "Spinner helper written",
        "Infinite scroll capped loop",
        "SPA assert without sleep",
      ],
      practice: {
        title: "Dynamic suite",
        brief: "Two tests: spinner wait + scroll load. Commit under tests/dynamic/.",
      },
      resources: [
        r("doc", "Locators", "https://playwright.dev/python/docs/locators", "EN", true),
        r("lab", "Playwright TodoMVC", "https://demo.playwright.dev/todomvc", "EN", true),
      ],
    }),

    ch({
      id: "pw-cp-02",
      kind: "checkpoint",
      phase: "Part 5 · Complex Scenarios",
      level: "intermediate",
      title: "Checkpoint — Complex UI Gate",
      minutes: 35,
      durationLabel: "Week 5 · Gate",
      overview: "You should handle dialogs, files, network mocks, and auth state like a professional. This gate blocks pytest/POM until the messy UI skills are real.",
      learn: [
        "Pass criteria for Parts 2–5",
        "Mini suite demo",
        "No sleep policy enforced",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "All must be true in your public repo.",
          items: [
            "Login + inventory asserts with role locators",
            "One dialog test and one iframe or upload test",
            "One route mock OR wait_for_response usage",
            "storageState saved and reused",
            "grep finds zero time.sleep in tests/",
            "Trace or screenshot on failure configured (even basically)",
          ],
        },
        {
          title: "Demo",
          body: "5-minute recording: run the mini suite headed, show storageState reuse.",
          doThis: "Link demo in README.",
        },
      ],
      checklist: [
        "Criteria met",
        "Demo linked",
        "Ready for pytest Part 6",
      ],
      practice: {
        title: "Repair sprint",
        brief: "Fix any failing criterion before installing more plugins.",
      },
    }),

    ch({
      id: "pw-c24",
      phase: "Part 6 · pytest Integration",
      level: "intermediate",
      title: "pytest Fundamentals + pytest-playwright",
      minutes: 55,
      durationLabel: "Week 6 · Day 1",
      overview: "pytest is the Python testing standard. pytest-playwright gives you page/context/browser fixtures so you stop writing boilerplate launch code in every file.",
      learn: [
        "Why pytest for Playwright Python",
        "Install pytest-playwright and built-in fixtures",
        "First pytest test and discovery rules",
        "Naming conventions",
      ],
      steps: [
        {
          title: "Why pytest",
          body: "Fixtures, parametrize, markers, plugins, and a huge ecosystem. Playwright's Python story assumes pytest.",
          doThis: "Ensure pytest and pytest-playwright are in requirements.txt.",
        },
        {
          title: "Built-in fixtures",
          body: "page, context, browser, browser_type, browser_name. Function-scoped page is the default sweet spot.",
          doThis: "Write tests/test_pytest_first.py using page fixture only.",
          code: "from playwright.sync_api import Page, expect\n\ndef test_login_success(page: Page):\n    page.goto(\"https://www.saucedemo.com/\")\n    page.get_by_role(\"textbox\", name=\"Username\").fill(\"standard_user\")\n    page.get_by_role(\"textbox\", name=\"Password\").fill(\"secret_sauce\")\n    page.get_by_role(\"button\", name=\"Login\").click()\n    expect(page).to_have_url(\"**/inventory.html\")",
        },
        {
          title: "Running & discovery",
          body: "pytest, pytest tests/test_foo.py, pytest -k login, pytest -q. Files test_*.py, functions test_*.",
          doThis: "Run pytest -q and screenshot the summary.",
        },
        {
          title: "Naming",
          body: "test_<action>_<result> e.g. test_login_with_valid_user_lands_on_inventory. Clarity > cleverness.",
          doThis: "Rename any vague test_* names in your suite.",
        },
      ],
      checklist: [
        "pytest-playwright installed",
        "First page-fixture test green",
        "Discovery understood",
        "Clear test names",
      ],
      practice: {
        title: "Three pytest tests",
        brief: "valid login, invalid login, logout smoke — all via page fixture.",
      },
      resources: [
        r("doc", "pytest docs", "https://docs.pytest.org/en/stable/", "EN", true),
        r("doc", "pytest-playwright", "https://playwright.dev/python/docs/test-runners", "EN", true),
        r("blog", "Automation Panda pytest", "https://automationpanda.com/tag/pytest/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c25",
      phase: "Part 6 · pytest Integration",
      level: "intermediate",
      title: "Fixtures & Configuration — conftest.py",
      minutes: 55,
      durationLabel: "Week 6 · Day 2",
      overview: "conftest.py is the spine of your framework. Custom fixtures, scopes, and pytest.ini/pyproject.toml turn a folder of scripts into an engineered suite.",
      learn: [
        "conftest.py patterns",
        "Fixture scopes and dependencies",
        "Override Playwright fixtures",
        "pytest.ini / pyproject.toml settings",
      ],
      steps: [
        {
          title: "conftest.py",
          body: "Place shared fixtures in tests/conftest.py. They are auto-discovered — no import needed.",
          doThis: "Create a base_url fixture and a logged_in_page fixture.",
          code: "import pytest\n\n@pytest.fixture(scope=\"session\")\ndef base_url():\n    return \"https://www.saucedemo.com/\"\n\n@pytest.fixture\ndef opened(page, base_url):\n    page.goto(base_url)\n    return page",
        },
        {
          title: "Scopes",
          body: "function (default), class, module, session. Session-scoped browser is fine; be careful sharing page across tests — isolation suffers.",
          doThis: "Add a session-scoped auth storage path fixture.",
        },
        {
          title: "Override browser context",
          body: "Override context kwargs for viewport, storage_state, record_video_dir, base_url via pytest-playwright options.",
          doThis: "Configure base_url in pytest.ini for pytest-playwright.",
          code: "# pytest.ini\n[pytest]\naddopts = -q --browser chromium\n# example env: BASE_URL",
        },
        {
          title: "Setup/teardown",
          body: "yield fixtures for teardown. Prefer fixtures over setup_method unless teaching OOP tests.",
          doThis: "Write a fixture that yields page and prints teardown confirmation.",
        },
      ],
      checklist: [
        "conftest.py exists",
        "Custom fixture used by 2+ tests",
        "Scopes chosen intentionally",
        "pytest.ini present",
      ],
      practice: {
        title: "Fixture map",
        brief: "Document fixtures in README: name, scope, purpose.",
      },
      resources: [
        r("doc", "pytest fixtures", "https://docs.pytest.org/en/stable/fixture.html", "EN", true),
        r("doc", "pytest-playwright config", "https://playwright.dev/python/docs/test-runners", "EN", true),
      ],
    }),

    ch({
      id: "pw-c26",
      phase: "Part 6 · pytest Integration",
      level: "intermediate",
      title: "Markers, parametrize, xdist",
      minutes: 50,
      durationLabel: "Week 6 · Day 3",
      overview: "Markers carve smoke from regression. Parametrize multiplies coverage without copy-paste. xdist runs tests in parallel — when isolation is solid.",
      learn: [
        "@pytest.mark.smoke/regression",
        "skip, skipif, xfail",
        "parametrize + data-driven ideas",
        "pytest-xdist parallel runs",
      ],
      steps: [
        {
          title: "Markers",
          body: "Register markers in pytest.ini. Run pytest -m smoke. Keep smoke under a few minutes.",
          doThis: "Mark 3 tests smoke and run -m smoke.",
          code: "# pytest.ini\n[pytest]\nmarkers =\n    smoke: critical path\n    regression: broader suite",
        },
        {
          title: "skip / xfail",
          body: "skip for unfinished env; xfail for known product bugs. Do not xfail forever without tickets.",
          doThis: "Add one skipif for Windows-only path if relevant, or a documented xfail.",
        },
        {
          title: "parametrize",
          body: "@pytest.mark.parametrize('user,password,ok', [...]) drives many cases through one test function.",
          doThis: "Parametrize login with standard_user (pass) and locked_out_user (fail).",
          code: "import pytest\n\n@pytest.mark.parametrize(\n    \"username,should_pass\",\n    [(\"standard_user\", True), (\"locked_out_user\", False)],\n)\ndef test_login_matrix(page, username, should_pass):\n    page.goto(\"https://www.saucedemo.com/\")\n    page.get_by_role(\"textbox\", name=\"Username\").fill(username)\n    page.get_by_role(\"textbox\", name=\"Password\").fill(\"secret_sauce\")\n    page.get_by_role(\"button\", name=\"Login\").click()\n    if should_pass:\n        expect(page).to_have_url(\"**/inventory.html\")\n    else:\n        expect(page.get_by_text(\"locked out\")).to_be_visible()",
        },
        {
          title: "xdist",
          body: "pip install pytest-xdist; pytest -n auto. Tests must be independent. Watch for shared auth files/races.",
          doThis: "Run -n 2 on your suite; fix any cross-test contamination.",
        },
      ],
      checklist: [
        "Markers registered and used",
        "Parametrize login matrix green",
        "xdist run attempted",
        "Smoke job under target time",
      ],
      practice: {
        title: "Smoke job",
        brief: "Document npm-like script: pytest -m smoke -n auto in README.",
      },
      resources: [
        r("doc", "Parametrize", "https://docs.pytest.org/en/stable/how-to/parametrize.html", "EN", true),
        r("doc", "pytest-xdist", "https://pytest-xdist.readthedocs.io/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c27",
      phase: "Part 6 · pytest Integration",
      level: "intermediate",
      title: "Hooks & Plugins",
      minutes: 45,
      durationLabel: "Week 6 · Day 4",
      overview: "Hooks customize the run; plugins buy reporting, retries, order, and timeouts. Learn the short list every SDET actually uses — then stop plugin-hoarding.",
      learn: [
        "Useful conftest hooks",
        "pytest-html, rerunfailures, timeout, order",
        "When to write a tiny plugin",
        "Keep the plugin set lean",
      ],
      steps: [
        {
          title: "Hooks overview",
          body: "pytest_configure, pytest_runtest_makereport (for screenshots on failure), pytest_collection_modifyitems. Start with makereport screenshot attachment.",
          doThis: "Add a hook that prints failed test node ids.",
        },
        {
          title: "Essential plugins",
          body: "pytest-html reports; pytest-rerunfailures for quarantined flakes; pytest-timeout for hung tests; pytest-order sparingly.",
          doThis: "Install pytest-html and produce a report artifact.",
          code: "pip install pytest-html pytest-rerunfailures pytest-timeout\npytest --html=reports/report.html --self-contained-html",
        },
        {
          title: "Custom plugin lite",
          body: "A conftest hook is enough for most teams. Extract a package only when sharing across repos.",
          doThis: "Write one screenshot-on-failure hook in conftest.py.",
        },
      ],
      checklist: [
        "HTML report generated",
        "Know rerunfailures flag",
        "Screenshot-on-failure hook exists",
        "Plugin list documented",
      ],
      practice: {
        title: "Reports folder",
        brief: "gitkeep reports/, gitignore contents, README how to open HTML report.",
      },
      resources: [
        r("doc", "pytest hooks", "https://docs.pytest.org/en/stable/reference/reference.html#hooks", "EN", true),
        r("doc", "pytest-html", "https://pytest-html.readthedocs.io/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c28",
      phase: "Part 7 · Page Object Model",
      level: "intermediate",
      title: "POM Fundamentals",
      minutes: 50,
      durationLabel: "Week 7 · Day 1",
      overview: "Page Object Model keeps locators and user actions out of raw tests. One class per page, a thin base page, and tests that read like user stories.",
      learn: [
        "Why POM exists",
        "What belongs in a page object",
        "Folder structure + base page",
        "First LoginPage class",
      ],
      steps: [
        {
          title: "Problems POM solves",
          body: "Duplicated locators, unreadable tests, painful UI renames. POM centralizes selectors and actions.",
          doThis: "List 3 duplicated locators in your current tests that POM would eliminate.",
        },
        {
          title: "Principles",
          body: "One class per page/component. Methods = user actions (login_as). Assertions can live in tests or return data for expects — be consistent. No raw sleeps inside pages.",
          doThis: "Write your team rule: asserts in tests vs pages.",
        },
        {
          title: "First page object",
          body: "Build LoginPage with goto, fill credentials, submit. Tests call login_as('standard_user').",
          doThis: "Create pages/login_page.py and refactor one test to use it.",
          code: "class LoginPage:\n    def __init__(self, page):\n        self.page = page\n        self.username = page.get_by_role(\"textbox\", name=\"Username\")\n        self.password = page.get_by_role(\"textbox\", name=\"Password\")\n        self.login_btn = page.get_by_role(\"button\", name=\"Login\")\n\n    def goto(self):\n        self.page.goto(\"https://www.saucedemo.com/\")\n\n    def login_as(self, username, password=\"secret_sauce\"):\n        self.username.fill(username)\n        self.password.fill(password)\n        self.login_btn.click()",
        },
      ],
      checklist: [
        "LoginPage committed",
        "One test refactored to POM",
        "Base page stub created",
        "POM rule documented",
      ],
      practice: {
        title: "InventoryPage start",
        brief: "Add InventoryPage with add_product_by_name and cart_count readers.",
      },
      resources: [
        r("doc", "Playwright POM", "https://playwright.dev/python/docs/pom", "EN", true),
        r("blog", "Automation Panda POM", "https://automationpanda.com/2020/10/29/page-object-modeling-in-python/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c29",
      phase: "Part 7 · Page Object Model",
      level: "intermediate",
      title: "Building a POM Framework",
      minutes: 55,
      durationLabel: "Week 7 · Day 2–3",
      overview: "Turn two page classes into a small framework: components, navigation returns, factories, and clear boundaries so tests stay thin.",
      learn: [
        "Actions vs assertions in pages",
        "Component objects (nav, modal)",
        "Navigation between pages",
        "Factories / dynamic pages",
      ],
      steps: [
        {
          title: "Design for a real app",
          body: "Map Sauce Demo: Login, Inventory, Cart, Checkout. Identify shared Header/Cart badge component.",
          doThis: "Draw a page+component diagram in README.",
        },
        {
          title: "Components",
          body: "Header component owns cart link + badge. Pages compose components instead of re-declaring locators.",
          doThis: "Implement components/header.py and use it from InventoryPage.",
        },
        {
          title: "Navigation returns",
          body: "login_as returns InventoryPage(...). Enables fluent flows without scattering constructors in tests.",
          doThis: "Change login_as to return InventoryPage.",
        },
        {
          title: "Factory pattern",
          body: "A simple Pages(page) facade exposing .login, .inventory for discoverability.",
          doThis: "Add pages/factory.py and refactor two tests to use it.",
        },
      ],
      checklist: [
        "≥3 page objects",
        "≥1 component object",
        "Navigation returns typed pages",
        "Factory or facade in use",
      ],
      practice: {
        title: "Checkout skeleton",
        brief: "Add CartPage + CheckoutPage method stubs wired from inventory add-to-cart.",
      },
      resources: [
        r("doc", "POM", "https://playwright.dev/python/docs/pom", "EN", true),
      ],
    }),

    ch({
      id: "pw-c30",
      phase: "Part 7 · Page Object Model",
      level: "intermediate",
      title: "Advanced POM Patterns",
      minutes: 50,
      durationLabel: "Week 7 · Day 4",
      overview: "Fluent interfaces, builders, and facades help — until they do not. Learn advanced patterns and the wisdom to stop before your framework needs a framework.",
      learn: [
        "Fluent chaining",
        "Builder for complex forms",
        "Facade for workflows",
        "When POM is over-engineered",
      ],
      steps: [
        {
          title: "Fluent interface",
          body: "Methods return self or next page for readable chains: LoginPage(page).goto().login_as(...).add(...).open_cart().",
          doThis: "Implement a fluent add_product chain ending in CartPage.",
        },
        {
          title: "Builder & facade",
          body: "Builders assemble complex checkout data. Facades expose checkout_as_guest(data) for business-readable tests.",
          doThis: "Create a CheckoutFacade with one happy-path method used by a test.",
        },
        {
          title: "Stop criteria",
          body: "If juniors fear adding a button, you overbuilt. Prefer boring POM + clear names over pattern cosplay.",
          doThis: "Delete one abstraction that is not pulling its weight.",
        },
      ],
      checklist: [
        "Fluent chain works",
        "One facade or builder",
        "Removed one useless abstraction",
        "Tests still readable aloud",
      ],
      practice: {
        title: "Refactor PR",
        brief: "PR that shows before/after of a workflow using facade.",
      },
      resources: [
        r("doc", "Playwright POM", "https://playwright.dev/python/docs/pom", "EN", true),
        r("course", "Test Automation University", "https://testautomationu.applitools.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-cp-03",
      kind: "checkpoint",
      phase: "Part 7 · Page Object Model",
      level: "intermediate",
      title: "Checkpoint — Framework Spine Gate",
      minutes: 35,
      durationLabel: "Week 7 · Gate",
      overview: "pytest + POM should feel like a framework spine, not a pile of scripts. Pass this before data layers and Allure polish.",
      learn: [
        "Pass criteria for Parts 6–7",
        "Architecture walkthrough",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "Repo must demonstrate engineered structure.",
          items: [
            "conftest.py with meaningful fixtures",
            "Markers + at least one parametrize",
            "≥3 page objects + 1 component",
            "Tests import pages, not raw CSS soup",
            "pytest -m smoke green locally",
            "README explains how to run",
          ],
        },
        {
          title: "Walkthrough",
          body: "Explain folder structure in a short README section or Loom.",
          doThis: "Add Architecture section with diagram.",
        },
      ],
      checklist: [
        "Criteria met",
        "Architecture documented",
        "Ready for Part 8",
      ],
      practice: {
        title: "Smoke script",
        brief: "Make make smoke or a shell alias documented in README.",
      },
    }),

    ch({
      id: "pw-c31",
      phase: "Part 8 · Test Data",
      level: "intermediate",
      title: "Test Data Strategies",
      minutes: 40,
      durationLabel: "Week 8 · Day 1",
      overview: "Hard-coded strings get you started; they do not get you hired. Design data independence, environment awareness, and intentional data-driven coverage.",
      learn: [
        "Hard-coded vs external tradeoffs",
        "Data independence per test",
        "Data-driven approaches",
        "Env-specific data",
      ],
      steps: [
        {
          title: "Tradeoffs",
          body: "Inline data is clear for one case. External JSON/CSV scales matrices and non-dev editing. Secrets never belong in either — use env.",
          doThis: "Classify your current data: inline / file / secret.",
        },
        {
          title: "Independence",
          body: "Tests must not rely on leftover cart state from a sibling test. Prefer unique users, API cleanup, or storageState per role.",
          doThis: "Find one shared-state risk and fix it.",
        },
        {
          title: "Data-driven plan",
          body: "Use parametrize for small matrices; files for large tables; factories for unique entities.",
          doThis: "Write DATA_STRATEGY.md with your chosen approach per layer.",
        },
      ],
      checklist: [
        "DATA_STRATEGY.md written",
        "One shared-state bug fixed",
        "Secrets not in repo",
      ],
      practice: {
        title: "Unique suffix",
        brief: "Helper unique_email() using timestamp/uuid for future sign-up tests.",
      },
      resources: [
        r("doc", "pytest parametrize", "https://docs.pytest.org/en/stable/how-to/parametrize.html", "EN", true),
      ],
    }),

    ch({
      id: "pw-c32",
      phase: "Part 8 · Test Data",
      level: "intermediate",
      title: "External Data Sources — JSON/CSV/Excel/YAML/Faker",
      minutes: 55,
      durationLabel: "Week 8 · Day 2",
      overview: "Load tables from disk, generate realistic fakes, and keep fixtures thin. This chapter makes your suite data-driven without drowning in spreadsheets.",
      learn: [
        "JSON/CSV/YAML loaders",
        "Excel via openpyxl",
        "Faker for realistic values",
        "Factory Boy / seeding concepts",
      ],
      steps: [
        {
          title: "JSON & CSV",
          body: "json.load / csv.DictReader into parametrize. Keep files in data/.",
          doThis: "Create data/users.json and parametrize a login test from it.",
          code: "import json\nfrom pathlib import Path\n\nUSERS = json.loads(Path(\"data/users.json\").read_text())\n\n@pytest.mark.parametrize(\"user\", USERS)\ndef test_users(page, user):\n    ...",
        },
        {
          title: "YAML & Excel",
          body: "PyYAML for hierarchical config-like data; openpyxl when stakeholders insist on Excel. Prefer JSON/YAML for engineers.",
          doThis: "Load one YAML file for product names OR skip Excel if YAGNI — note the decision.",
        },
        {
          title: "Faker",
          body: "pip install Faker; fake = Faker(); fake.email(). Great for unique sign-ups and addresses.",
          doThis: "Generate a fake checkout persona and fill checkout fields.",
          code: "from faker import Faker\nfake = Faker()\nperson = {\"name\": fake.name(), \"zip\": fake.zipcode()}",
        },
        {
          title: "Factories & DB seeds",
          body: "Factory Boy builds model-like objects. DB seeding is powerful when you own the backend — out of scope for pure UI sites, critical on real jobs.",
          doThis: "Write a 5-line note: when you would seed via API vs UI.",
        },
      ],
      checklist: [
        "JSON-driven test green",
        "Faker used once",
        "data/ folder organized",
        "Excel only if needed",
      ],
      practice: {
        title: "users.json matrix",
        brief: "At least 3 users with expected outcomes driving parametrize.",
      },
      resources: [
        r("doc", "Faker", "https://faker.readthedocs.io/", "EN", true),
        r("doc", "PyYAML", "https://pyyaml.org/wiki/PyYAMLDocumentation", "EN", true),
      ],
    }),

    ch({
      id: "pw-c33",
      phase: "Part 8 · Test Data",
      level: "intermediate",
      title: "Configuration Management — env, secrets",
      minutes: 45,
      durationLabel: "Week 8 · Day 3",
      overview: "dev/staging/prod URLs, credentials, and feature flags belong in config — not sprinkled as literals. Learn .env + python-dotenv and never commit secrets.",
      learn: [
        "Multi-environment config",
        "config.py patterns",
        ".env + python-dotenv",
        "Secrets for local and CI",
      ],
      steps: [
        {
          title: "config.py",
          body: "Centralize BASE_URL, BROWSER, HEADLESS, CREDENTIALS via os.getenv with defaults for local demo sites.",
          doThis: "Create utils/config.py reading BASE_URL.",
          code: "import os\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\nBASE_URL = os.getenv(\"BASE_URL\", \"https://www.saucedemo.com/\")\nBROWSER = os.getenv(\"BROWSER\", \"chromium\")\nHEADLESS = os.getenv(\"HEADLESS\", \"true\").lower() == \"true\"",
        },
        {
          title: ".env discipline",
          body: ".env local only; .env.example committed with dummy keys; CI uses repository secrets / env vars.",
          doThis: "Add .env to .gitignore and commit .env.example.",
        },
        {
          title: "Fixture switching",
          body: "A pytest fixture reads ENV=staging to pick config profile.",
          doThis: "Support ENV=dev|staging via fixture or config dict.",
        },
      ],
      checklist: [
        "config.py in use",
        ".env gitignored",
        ".env.example committed",
        "No passwords in git history for this repo",
      ],
      practice: {
        title: "Env switch demo",
        brief: "README shows BASE_URL override one-liner for pytest.",
      },
      resources: [
        r("doc", "python-dotenv", "https://pypi.org/project/python-dotenv/", "EN", true),
        r("doc", "GitHub encrypted secrets", "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions", "EN", true),
      ],
    }),

    ch({
      id: "pw-c34",
      phase: "Part 9 · Reporting & Debugging",
      level: "intermediate",
      title: "Built-in Playwright Reporting — traces, video, screenshots",
      minutes: 50,
      durationLabel: "Week 8 · Day 4",
      overview: "Traces are a superpower. Screenshots and video catch what logs miss. Configure artifacts now so future-you can debug CI without SSH fantasies.",
      learn: [
        "Screenshots on failure",
        "Video retain policies",
        "Trace viewer workflow",
        "HTML/JUnit reporters via pytest ecosystem",
      ],
      steps: [
        {
          title: "Screenshots & video",
          body: "Configure context record_video_dir; take page.screenshot on failure via hook. Keep artifacts under test-results/.",
          doThis: "Fail a test on purpose and confirm screenshot saved.",
        },
        {
          title: "Traces",
          body: "context.tracing.start/stop; or pytest-playwright tracing options. Open with playwright show-trace trace.zip or trace.playwright.dev.",
          doThis: "Capture a trace for one failed test and open it.",
          code: "context.tracing.start(screenshots=True, snapshots=True, sources=True)\n# ... test ...\ncontext.tracing.stop(path=\"reports/trace.zip\")",
        },
        {
          title: "Reporters",
          body: "pytest-html for humans; JUnit XML for CI dashboards. Combine addopts.",
          doThis: "Emit junit.xml + html report in one command documented in README.",
        },
      ],
      checklist: [
        "Screenshot on failure works",
        "Opened a trace.zip",
        "HTML report generated",
        "Artifacts gitignored",
      ],
      practice: {
        title: "Debug drill",
        brief: "Break a locator, use only the trace to find the fix (no re-run headed until after).",
      },
      resources: [
        r("doc", "Trace viewer", "https://playwright.dev/python/docs/trace-viewer", "EN", true),
        r("doc", "Screenshots", "https://playwright.dev/python/docs/screenshots", "EN", true),
        r("tool", "trace.playwright.dev", "https://trace.playwright.dev/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c35",
      phase: "Part 9 · Reporting & Debugging",
      level: "intermediate",
      title: "Allure Reports",
      minutes: 50,
      durationLabel: "Week 8 · Day 5",
      overview: "Allure is the industry-favorite narrative report: features, stories, steps, attachments. Learn enough to make managers smile and engineers debug faster.",
      learn: [
        "Install allure + allure-pytest",
        "Feature/story/step decorators",
        "Attachments",
        "Generate and serve HTML; CI usage",
      ],
      steps: [
        {
          title: "Install",
          body: "pip install allure-pytest. Install Allure CLI via brew/scoop or download. Run pytest --alluredir=reports/allure-results.",
          doThis: "Produce allure-results from a smoke run.",
          code: "pip install allure-pytest\npytest --alluredir=reports/allure-results\nallure serve reports/allure-results",
        },
        {
          title: "Decorators",
          body: "@allure.feature @allure.story @allure.title @allure.step wrap flows for readable reports.",
          doThis: "Annotate login test with feature/story/steps.",
        },
        {
          title: "Attachments & CI",
          body: "Attach screenshots/text. In CI, generate report and upload artifact or publish to GitHub Pages later.",
          doThis: "Attach a screenshot on failure to Allure.",
        },
      ],
      checklist: [
        "allure serve works locally",
        "Decorators on ≥2 tests",
        "Attachment demonstrated",
        "Results dir gitignored",
      ],
      practice: {
        title: "Allure smoke story",
        brief: "Smoke tests labeled Epic=SauceDemo Feature=Auth in Allure.",
      },
      resources: [
        r("doc", "Allure pytest", "https://docs.qameta.io/allure/#_pytest", "EN", true),
        r("doc", "Allure docs", "https://docs.qameta.io/allure/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c36",
      phase: "Part 9 · Reporting & Debugging",
      level: "intermediate",
      title: "Debugging Techniques",
      minutes: 50,
      durationLabel: "Week 9 · Day 1",
      overview: "Pros debug with traces, Inspector, logging, and a cool head. This chapter builds your failure playbook for timeouts, locators, and flakes.",
      learn: [
        "Read failure messages effectively",
        "Headed, slowMo, Inspector, VS Code debugger",
        "Logging vs print",
        "Flake triage process",
      ],
      steps: [
        {
          title: "Failure reading",
          body: "Note expected vs received, locator, timeout, URL. Reproduce with -k and headed.",
          doThis: "Create DEBUG_PLAYBOOK.md with your 5-step triage.",
        },
        {
          title: "Interactive tools",
          body: "PWDEBUG=1, --headed, slow_mo, page.pause(), VS Code breakpoints on test code.",
          doThis: "Hit a breakpoint in VS Code during a Playwright test.",
        },
        {
          title: "Logging",
          body: "Use logging module with test names; avoid print spam. Correlate logs with Allure steps.",
          doThis: "Replace prints in page objects with logger.info.",
        },
        {
          title: "Flakes",
          body: "Rerun quarantine, check shared state, animations, network, strict locators. Fix root cause; do not hide with reruns forever.",
          doThis: "If you have a flake, file an issue in your repo with trace attached.",
        },
      ],
      checklist: [
        "DEBUG_PLAYBOOK.md exists",
        "Used Inspector or pause",
        "Logging in page objects",
        "Know flake vs fail",
      ],
      practice: {
        title: "Timeout autopsy",
        brief: "Write one postmortem for a past timeout: cause → fix → prevention.",
      },
      resources: [
        r("doc", "Debugging", "https://playwright.dev/python/docs/debug", "EN", true),
        r("doc", "Trace viewer", "https://playwright.dev/python/docs/trace-viewer", "EN", true),
      ],
    }),

    ch({
      id: "pw-c37",
      phase: "Part 10 · Advanced Playwright",
      level: "advanced",
      title: "Cross-Browser Testing",
      minutes: 45,
      durationLabel: "Week 9 · Day 2",
      overview: "Chromium alone is not coverage. Parametrize browsers, know where engines diverge, and pick a pragmatic matrix for real projects.",
      learn: [
        "Run Chromium, Firefox, WebKit",
        "Browser-specific config",
        "Parametrize browsers in pytest",
        "Pragmatic matrix for teams",
      ],
      steps: [
        {
          title: "Three engines",
          body: "pytest --browser chromium --browser firefox --browser webkit or parametrize browser_name.",
          doThis: "Run smoke on all three; note any failures.",
          code: "pytest -m smoke --browser chromium --browser firefox --browser webkit",
        },
        {
          title: "Differences",
          body: "File downloads, some CSS, codecs, and autofill can differ. Isolate browser-specific expects with markers.",
          doThis: "Mark one known engine quirk with a comment or skipif.",
        },
        {
          title: "Real project matrix",
          body: "Typical: Chromium on every PR; Firefox+WebKit nightly. Adjust to your users.",
          doThis: "Write BROWSER_MATRIX.md for your portfolio project.",
        },
      ],
      checklist: [
        "Smoke green on 3 browsers or documented failures",
        "Matrix decision written",
        "CI plan sketched",
      ],
      practice: {
        title: "Matrix job notes",
        brief: "Document which browsers run on PR vs nightly.",
      },
      resources: [
        r("doc", "Browsers", "https://playwright.dev/python/docs/browsers", "EN", true),
        r("doc", "CI", "https://playwright.dev/python/docs/ci", "EN", true),
      ],
    }),

    ch({
      id: "pw-c38",
      phase: "Part 10 · Advanced Playwright",
      level: "advanced",
      title: "Mobile Emulation",
      minutes: 45,
      durationLabel: "Week 9 · Day 3",
      overview: "Device descriptors give you iPhone/Pixel viewports and touch — not real hardware. Use emulation for responsive bugs; reserve device farms for critical mobile-native risk.",
      learn: [
        "Built-in device descriptors",
        "Custom viewport/UA",
        "Touch, geolocation",
        "Limits vs real devices",
      ],
      steps: [
        {
          title: "Devices",
          body: "playwright.devices['iPhone 13'] → new_context(**device).",
          doThis: "Open Sauce Demo as iPhone 13; screenshot inventory.",
          code: "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    iphone = p.devices[\"iPhone 13\"]\n    browser = p.webkit.launch()\n    context = browser.new_context(**iphone)\n    page = context.new_page()\n    page.goto(\"https://www.saucedemo.com/\")\n    page.screenshot(path=\"reports/iphone.png\")\n    browser.close()",
        },
        {
          title: "Touch & geo",
          body: "has_touch, geolocation + permissions. tap() for touch. Swipe ≈ mouse drag sequences.",
          doThis: "Grant geolocation and read a page that shows coords (or mock).",
        },
        {
          title: "Limits",
          body: "Emulation ≠ real iOS Safari quirks, performance, or OS permissions UX. Say this clearly in interviews.",
          doThis: "Add a README caveat about emulation limits.",
        },
      ],
      checklist: [
        "Device descriptor used",
        "Mobile screenshot saved",
        "Limits documented",
      ],
      practice: {
        title: "Responsive assert",
        brief: "Assert a mobile nav pattern (or layout landmark) under iPhone viewport.",
      },
      resources: [
        r("doc", "Emulation", "https://playwright.dev/python/docs/emulation", "EN", true),
      ],
    }),

    ch({
      id: "pw-c39",
      phase: "Part 10 · Advanced Playwright",
      level: "advanced",
      title: "Visual Testing",
      minutes: 45,
      durationLabel: "Week 9 · Day 4",
      overview: "Screenshots catch CSS regressions asserts miss. Start with Playwright screenshots; graduate to Applitools/Percy when the org pays for smart diffs.",
      learn: [
        "Screenshot comparison ideas",
        "Snapshot testing approaches",
        "Dynamic content masking",
        "Applitools / Percy overview",
      ],
      steps: [
        {
          title: "Screenshots",
          body: "page.screenshot(full_page=True); locator.screenshot(). Compare baselines in CI carefully (fonts/OS).",
          doThis: "Capture a baseline inventory screenshot committed under tests/baselines/ (or generate locally only).",
        },
        {
          title: "Dynamics",
          body: "Mask ads, timestamps, animations. Prefer asserting critical regions over full-page when unstable.",
          doThis: "List 3 dynamic regions you would mask on a marketing site.",
        },
        {
          title: "Tools",
          body: "Applitools Eyes and Percy integrate with Playwright for visual AI/diffs. Know when pixel diff is enough.",
          doThis: "Skim Applitools Playwright Python docs; note free vs paid.",
        },
      ],
      checklist: [
        "Took baseline screenshot",
        "Know masking strategy",
        "Can explain Applitools/Percy in one breath",
      ],
      practice: {
        title: "Visual smoke",
        brief: "One test that screenshots header component only.",
      },
      resources: [
        r("doc", "Screenshots", "https://playwright.dev/python/docs/screenshots", "EN", true),
        r("doc", "Applitools Playwright", "https://applitools.com/tutorials/quickstart/web/playwright/python", "EN", true),
        r("doc", "Percy overview", "https://www.browserstack.com/docs/percy", "EN", true),
      ],
    }),

    ch({
      id: "pw-c40",
      phase: "Part 10 · Advanced Playwright",
      level: "advanced",
      title: "API Testing with Playwright",
      minutes: 55,
      durationLabel: "Week 9 · Day 5",
      overview: "playwright.request gives you a first-class HTTP client beside your UI. Seed state via API, assert UI, mock backends — hybrid testing employers love.",
      learn: [
        "APIRequestContext GET/POST/PUT/DELETE",
        "Auth headers & JSON parsing",
        "API setup + UI verify",
        "Mocking as a server",
      ],
      steps: [
        {
          title: "request context",
          body: "request = playwright.request.new_context(base_url=...). response = request.get('/users/1').",
          doThis: "GET https://jsonplaceholder.typicode.com/users/1 and assert status 200 + name field.",
          code: "def test_api_user(playwright):\n    request = playwright.request.new_context()\n    response = request.get(\"https://jsonplaceholder.typicode.com/users/1\")\n    assert response.ok\n    data = response.json()\n    assert data[\"id\"] == 1\n    request.dispose()",
        },
        {
          title: "Hybrid pattern",
          body: "Create entity via API → open UI → assert appears. Faster and more stable than pure UI setup.",
          doThis: "Design a hybrid flow for a todo or user entity on a practice API.",
        },
        {
          title: "Mocks",
          body: "Combine route mocking with UI for frontend-only pipelines.",
          doThis: "One test: mock list API, assert UI table rows.",
        },
      ],
      checklist: [
        "API GET test green",
        "Hybrid design written",
        "Mock+UI test green",
      ],
      practice: {
        title: "Hybrid kata",
        brief: "POST via API (reqres/jsonplaceholder) then validate related UI or second GET.",
      },
      resources: [
        r("doc", "API testing", "https://playwright.dev/python/docs/api-testing", "EN", true),
        r("lab", "JSONPlaceholder", "https://jsonplaceholder.typicode.com/", "EN", true),
        r("lab", "Reqres", "https://reqres.in/", "EN", true),
        r("lab", "httpbin", "https://httpbin.org/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c41",
      phase: "Part 10 · Advanced Playwright",
      level: "advanced",
      title: "JavaScript Execution — page.evaluate",
      minutes: 40,
      durationLabel: "Week 10 · Day 1",
      overview: "evaluate lets Python run JS in the page. Use it for escape hatches — not as your primary interaction style.",
      learn: [
        "page.evaluate basics",
        "Passing args Python ↔ JS",
        "Scroll/style extraction",
        "Risks of overuse",
      ],
      steps: [
        {
          title: "evaluate",
          body: "page.evaluate('() => document.title') or with args page.evaluate('(x) => x+1', 41).",
          doThis: "Read localStorage keys via evaluate after login.",
          code: "title = page.evaluate(\"() => document.title\")\nhref = page.evaluate(\"() => location.href\")",
        },
        {
          title: "When to use",
          body: "Values not exposed to a11y tree, performance marks, forcing scroll, emergency clicks. Prefer Playwright APIs first.",
          doThis: "Replace one evaluate click with a locator click if you have one.",
        },
        {
          title: "Risks",
          body: "JS clicks skip actionability; tight coupling to DOM internals; harder for juniors. Document every evaluate with why.",
          doThis: "Add comment policy: evaluate needs a why comment.",
        },
      ],
      checklist: [
        "Used evaluate for read-only data",
        "Avoided evaluate for primary clicks",
        "Policy documented",
      ],
      practice: {
        title: "Storage peek",
        brief: "Test helper that returns localStorage length via evaluate.",
      },
      resources: [
        r("doc", "Evaluating JavaScript", "https://playwright.dev/python/docs/evaluating", "EN", true),
      ],
    }),

    ch({
      id: "pw-c42",
      phase: "Part 10 · Advanced Playwright",
      level: "advanced",
      title: "Configuration Deep Dive",
      minutes: 45,
      durationLabel: "Week 10 · Day 2",
      overview: "Python has no single playwright.config.ts — you build the equivalent with conftest, pytest.ini, env, and fixtures. This chapter hardens global setup, retries, and multi-project style runs.",
      learn: [
        "Global setup/teardown",
        "Timeouts & retries",
        "WebServer-like patterns",
        "HTTPS, headers, proxy",
      ],
      steps: [
        {
          title: "Global setup",
          body: "session-scoped fixtures to create auth states, seed data, or start a stub server.",
          doThis: "Move auth storage creation into a session setup fixture gated by env.",
        },
        {
          title: "Timeouts & retries",
          body: "pytest --timeout=; pytest-rerunfailures; Playwright default timeouts via fixture context options.",
          doThis: "Set explicit action/navigation/expect timeouts in one place.",
        },
        {
          title: "Headers, HTTPS, proxy",
          body: "ignore_https_errors=True for staging certs; extra_http_headers; proxy= in browser launch/context.",
          doThis: "Document when ignore_https_errors is allowed (never silently in prod checks).",
        },
      ],
      checklist: [
        "Central timeout config",
        "Session setup fixture",
        "HTTPS policy documented",
      ],
      practice: {
        title: "Config module polish",
        brief: "All runtime knobs readable from utils/config.py + fixtures.",
      },
      resources: [
        r("doc", "Test runners", "https://playwright.dev/python/docs/test-runners", "EN", true),
        r("doc", "API advanced", "https://playwright.dev/python/docs/api/class-browser", "EN", true),
      ],
    }),

    ch({
      id: "pw-c43",
      phase: "Part 11 · CI/CD",
      level: "advanced",
      title: "GitHub Actions with Playwright",
      minutes: 60,
      durationLabel: "Week 10 · Day 3–4",
      overview: "If it is not in CI, it is a hobby script. Wire GitHub Actions: install, cache browsers, run pytest, upload artifacts, fail PRs loudly.",
      learn: [
        "First playwright.yml workflow",
        "Caching browsers",
        "Artifacts & PR runs",
        "Parallelism & notifications sketch",
      ],
      steps: [
        {
          title: "Why CI for testers",
          body: "Every PR gets a truth signal. Traces on failure beat 'works on my machine'.",
          doThis: "Enable Actions on your repo.",
        },
        {
          title: "Workflow file",
          body: "Checkout, setup-python, cache, install deps, playwright install --with-deps, pytest, upload reports.",
          doThis: "Add .github/workflows/playwright.yml and push.",
          code: "name: Playwright Tests\non:\n  push:\n    branches: [main, master]\n  pull_request:\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n          cache: pip\n      - name: Install dependencies\n        run: |\n          python -m pip install --upgrade pip\n          pip install -r requirements.txt\n          playwright install --with-deps chromium\n      - name: Run tests\n        run: pytest -m smoke --browser chromium\n      - name: Upload reports\n        if: always()\n        uses: actions/upload-artifact@v4\n        with:\n          name: playwright-report\n          path: |\n            reports/\n            test-results/\n            allure-results/",
        },
        {
          title: "Caching & PR",
          body: "Cache ~/.cache/ms-playwright when possible. Run on pull_request. Keep smoke fast; full suite scheduled.",
          doThis: "Split smoke job vs nightly workflow file.",
        },
        {
          title: "Slack (optional)",
          body: "Notify on failure via Slack webhook action. Nice-to-have after green basics.",
          doThis: "Note webhook approach in README without committing secrets.",
        },
      ],
      checklist: [
        "Workflow runs on PR",
        "Artifacts upload",
        "Smoke job < reasonable time",
        "Secrets not in YAML",
      ],
      practice: {
        title: "Red then green",
        brief: "Break a test, see CI fail with artifact; fix; see green.",
      },
      resources: [
        r("doc", "Playwright CI", "https://playwright.dev/python/docs/ci", "EN", true),
        r("doc", "GitHub Actions quickstart", "https://docs.github.com/en/actions/quickstart", "EN", true),
        r("video", "TechWorld with Nana — GitHub Actions", "https://www.youtube.com/watch?v=R8_veQiYBjI", "EN", true),
      ],
    }),

    ch({
      id: "pw-c44",
      phase: "Part 11 · CI/CD",
      level: "advanced",
      title: "Docker with Playwright",
      minutes: 50,
      durationLabel: "Week 10 · Day 5",
      overview: "Official Playwright images bundle browsers and OS deps. Dockerize tests for parity between laptop and CI — and to stop 'missing lib' drama.",
      learn: [
        "Official images",
        "Dockerfile for your suite",
        "Compose for dependencies",
        "Debugging in containers",
      ],
      steps: [
        {
          title: "Why Docker",
          body: "Reproducible browsers/deps. Same image in CI and local. Isolation from host Python mess.",
          doThis: "Pull mcr.microsoft.com/playwright/python image tag matching your Playwright version.",
        },
        {
          title: "Dockerfile",
          body: "FROM official image; copy requirements; install; copy tests; CMD pytest.",
          doThis: "Add Dockerfile and document docker build/run in README.",
          code: "FROM mcr.microsoft.com/playwright/python:v1.49.0-jammy\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD [\"pytest\", \"-m\", \"smoke\", \"--browser\", \"chromium\"]",
        },
        {
          title: "Compose & CI",
          body: "Compose when tests need app+db. On CI, build image or use service containers.",
          doThis: "Optional: docker-compose.yml with app stub — or document YAGNI.",
        },
      ],
      checklist: [
        "Dockerfile builds",
        "Tests run in container",
        "Image version pinned",
        "README docker section",
      ],
      practice: {
        title: "Container smoke",
        brief: "GIFless proof: paste docker run output into LEARNING.md.",
      },
      resources: [
        r("doc", "Playwright Docker", "https://playwright.dev/python/docs/docker", "EN", true),
        r("doc", "Microsoft Playwright images", "https://mcr.microsoft.com/product/playwright/python/about", "EN", true),
      ],
    }),

    ch({
      id: "pw-c45",
      phase: "Part 11 · CI/CD",
      level: "advanced",
      title: "Other CI Platforms",
      minutes: 35,
      durationLabel: "Week 11 · Day 1",
      overview: "GitHub Actions is enough for your portfolio — but jobs ask about Jenkins, GitLab, Azure, CircleCI. Learn the mapping: agents, caches, artifacts, browsers.",
      learn: [
        "GitLab CI shape",
        "Jenkins pipeline sketch",
        "Azure DevOps / CircleCI notes",
        "How to choose",
      ],
      steps: [
        {
          title: "Same ingredients",
          body: "Python + deps + playwright install --with-deps + pytest + artifacts. Syntax changes; ideas do not.",
          doThis: "Write a one-page CI_PLATFORMS.md mapping steps across GHA and one other CI.",
        },
        {
          title: "Jenkins & GitLab",
          body: "Jenkins: Jenkinsfile stages. GitLab: .gitlab-ci.yml with image: playwright python.",
          doThis: "Draft a minimal .gitlab-ci.yml even if unused.",
        },
        {
          title: "Choosing",
          body: "Use whatever your employer standardizes. For portfolio, GHA is perfect and free for public repos.",
          doThis: "State your portfolio CI choice in README.",
        },
      ],
      checklist: [
        "CI_PLATFORMS.md exists",
        "Can explain Jenkins vs GHA in interview",
        "Portfolio uses GHA",
      ],
      practice: {
        title: "Interview card",
        brief: "5 bullets: how you would migrate GHA → Jenkins.",
      },
      resources: [
        r("doc", "Playwright CI guide", "https://playwright.dev/python/docs/ci", "EN", true),
        r("doc", "GitLab CI YAML", "https://docs.gitlab.com/ee/ci/yaml/", "EN", true),
      ],
    }),

    ch({
      id: "pw-cp-04",
      kind: "checkpoint",
      phase: "Part 11 · CI/CD",
      level: "advanced",
      title: "Checkpoint — CI/CD Gate",
      minutes: 30,
      durationLabel: "Week 11 · Gate",
      overview: "Green CI with uploaded artifacts is the professional bar. Do not start mega-projects until PRs run your smoke suite automatically.",
      learn: [
        "Pass criteria for Parts 10–11",
        "Public badge optional",
      ],
      steps: [
        {
          title: "Pass criteria",
          body: "All required for the gate.",
          items: [
            "GitHub Actions smoke green on main",
            "Artifacts (report/trace) upload on failure",
            "Dockerfile builds OR explicitly deferred with reason",
            "Cross-browser plan documented",
            "No secrets in git",
          ],
        },
        {
          title: "Proof",
          body: "Link a green workflow run in README.",
          doThis: "Add CI badge optional; link required.",
        },
      ],
      checklist: [
        "Criteria met",
        "README links green run",
        "Ready for framework/projects",
      ],
      practice: {
        title: "CI tour",
        brief: "2-min recording clicking through Actions → artifact.",
      },
    }),

    ch({
      id: "pw-c46",
      phase: "Part 12 · Framework Design",
      level: "advanced",
      title: "Production-Ready Framework",
      minutes: 55,
      durationLabel: "Week 11 · Day 2–3",
      overview: "Production-ready means someone else can clone, configure, run, and extend. Folders, logging, config, API client, reports — engineered, not accidental.",
      learn: [
        "Enterprise folder structure",
        "Core components checklist",
        "Maintainability & scalability",
        "README that onboards in 15 minutes",
      ],
      steps: [
        {
          title: "Folder structure",
          body: "pages/, components/, tests/, data/, utils/, api/, config/, reports/, .github/workflows/. Keep tests thin.",
          doThis: "Align your repo to this skeleton; open a refactor PR.",
          items: [
            "pages/ + components/",
            "api/ client helpers",
            "utils/config + logger",
            "data/ + .env.example",
            "tests/ by feature",
          ],
        },
        {
          title: "Core components",
          body: "BasePage, Config, Logger, Report helpers, Data loaders, API client. Each has one job.",
          doThis: "Implement or stub BasePage + Logger used by all pages.",
        },
        {
          title: "Design qualities",
          body: "Maintainability: rename a button in one class. Scalability: add a product line without rewriting fixtures.",
          doThis: "Write QUALITY_ATTRIBUTES.md with examples from your code.",
        },
      ],
      checklist: [
        "Skeleton aligned",
        "BasePage + Config + Logger",
        "Onboarding README section",
        "Clone-run instructions verified by a friend or future-you tomorrow",
      ],
      practice: {
        title: "Fresh clone test",
        brief: "Clone into /tmp, follow README only, get smoke green.",
      },
      resources: [
        r("doc", "Best practices", "https://playwright.dev/python/docs/best-practices", "EN", true),
        r("video", "Naveen AutomationLabs — frameworks", "https://www.youtube.com/@NaveenAutomationLabs", "EN", true),
      ],
    }),

    ch({
      id: "pw-c47",
      phase: "Part 12 · Framework Design",
      level: "advanced",
      title: "Advanced Patterns — Screenplay, BDD pytest-bdd",
      minutes: 55,
      durationLabel: "Week 11 · Day 4",
      overview: "Screenplay and BDD are tools, not religions. Learn pytest-bdd Gherkin flows and when business-readable specs pay rent — and when POM+pytest is enough.",
      learn: [
        "Screenplay idea vs POM",
        "pytest-bdd feature files + steps",
        "Hybrid/data-driven frameworks",
        "When NOT to use BDD",
      ],
      steps: [
        {
          title: "Screenplay sketch",
          body: "Actors, tasks, questions — more verbose, great for complex multi-actor flows. Most teams stay on POM.",
          doThis: "Rewrite one POM test as pseudo-Screenplay in comments to feel the difference.",
        },
        {
          title: "pytest-bdd",
          body: "Feature files in Gherkin; step defs bind to Python. Good for BA collaboration; costly if features rot.",
          doThis: "Install pytest-bdd; write one Login.feature + steps green.",
          code: "Feature: Login\n  Scenario: Valid user\n    Given the login page is open\n    When the user logs in as standard_user\n    Then the inventory page is shown",
        },
        {
          title: "When not BDD",
          body: "If only engineers read tests, pure pytest is clearer. Avoid duplicating POM logic inside steps poorly.",
          doThis: "Write ADR: BDD yes/no for your portfolio Project 5.",
        },
      ],
      checklist: [
        "One green BDD scenario OR deliberate skip with ADR",
        "Can explain Screenplay vs POM",
        "Know BDD failure modes",
      ],
      practice: {
        title: "Feature file",
        brief: "Commit features/login.feature even if Project 5 comes later.",
      },
      resources: [
        r("doc", "pytest-bdd", "https://pytest-bdd.readthedocs.io/", "EN", true),
        r("course", "TAU courses", "https://testautomationu.applitools.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c48",
      phase: "Part 12 · Framework Design",
      level: "advanced",
      title: "Performance & Optimization",
      minutes: 40,
      durationLabel: "Week 11 · Day 5",
      overview: "Fast suites get run; slow suites get ignored. Parallelism, isolation, smoke vs regression, and flake control keep feedback useful.",
      learn: [
        "Parallel strategies & pitfalls",
        "Isolation rules",
        "Smoke vs regression vs full",
        "Cutting runtime",
      ],
      steps: [
        {
          title: "Parallelism",
          body: "xdist workers need isolated data/auth. Shard by marker or folder. Avoid one shared cart user.",
          doThis: "Measure smoke duration 1 worker vs n auto.",
        },
        {
          title: "Suite strategy",
          body: "PR: smoke. Nightly: regression. Weekly: full+visual. Map this in CI.",
          doThis: "Add schedule workflow for regression.",
        },
        {
          title: "Speed levers",
          body: "storageState, API setup, block analytics, fewer browsers on PR, abandon networkidle defaults.",
          doThis: "Apply two speed levers and record before/after minutes.",
        },
      ],
      checklist: [
        "Measured parallel speedup",
        "PR vs nightly defined",
        "Two optimizations applied",
      ],
      practice: {
        title: "Runtime budget",
        brief: "Set a smoke budget (e.g. 5 min) and enforce in docs.",
      },
      resources: [
        r("doc", "pytest-xdist", "https://pytest-xdist.readthedocs.io/", "EN", true),
        r("doc", "Best practices", "https://playwright.dev/python/docs/best-practices", "EN", true),
      ],
    }),

    ch({
      id: "pw-c49",
      phase: "Part 13 · Real World Projects",
      level: "advanced",
      title: "Project 1 Beginner — E-commerce Login & Search",
      minutes: 120,
      durationLabel: "3–5 days",
      overview: "Ship a small but proud Sauce Demo suite: login, search/filter/sort, POM, pytest, HTML report. This is your first portfolio proof — keep it clean.",
      learn: [
        "Scoped requirements & cases",
        "POM for login + inventory",
        "Reporting basics",
        "What employers infer from Project 1",
      ],
      steps: [
        {
          title: "Requirements",
          body: "Cases: valid login, invalid login, sort products, open product details, logout. Keep ≤10 tests.",
          doThis: "Write TESTPLAN.md with cases and priorities.",
        },
        {
          title: "Implement",
          body: "POM + markers + expect assertions + pytest-html.",
          doThis: "Implement until smoke green; push to GitHub.",
        },
        {
          title: "Employer signal",
          body: "Shows you can structure, assert, and document — not just record codegen.",
          doThis: "README: problem, setup, how to run, screenshot of report.",
        },
      ],
      checklist: [
        "TESTPLAN.md",
        "Smoke green",
        "POM used",
        "Public README polished",
      ],
      practice: {
        title: "Tag v0.1",
        brief: "GitHub release tag project1-v0.1 with notes.",
      },
      resources: [
        r("lab", "Sauce Demo", "https://www.saucedemo.com/", "EN", true),
        r("lab", "Automation Exercise", "https://automationexercise.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c50",
      phase: "Part 13 · Real World Projects",
      level: "advanced",
      title: "Project 2 Intermediate — Full Checkout E2E + Allure + CI",
      minutes: 180,
      durationLabel: "1–2 weeks",
      overview: "End-to-end purchase path with data-driven users, Allure narratives, and GitHub Actions. This is the classic interview demo repo.",
      learn: [
        "Full checkout flow automation",
        "Data-driven users",
        "Allure + CI artifacts",
        "API setup optional boost",
      ],
      steps: [
        {
          title: "Flow",
          body: "Login → add items → cart → checkout info → finish → assert confirmation. Parametrize 2+ users/products.",
          doThis: "Implement happy path + one negative payment/info validation if available.",
        },
        {
          title: "Allure + CI",
          body: "Decorate steps; upload allure-results; keep smoke on PR.",
          doThis: "Green workflow with artifacts on main.",
        },
        {
          title: "Optional API seed",
          body: "If using Automation Exercise, create account via API where possible.",
          doThis: "Document hybrid opportunity even if deferred.",
        },
      ],
      checklist: [
        "E2E checkout green",
        "Allure decorated",
        "CI green with artifacts",
        "Data-driven ≥2 cases",
      ],
      practice: {
        title: "Demo script",
        brief: "Write a 3-minute talk track for walking through the repo.",
      },
      resources: [
        r("lab", "Sauce Demo", "https://www.saucedemo.com/", "EN", true),
        r("lab", "Automation Exercise", "https://automationexercise.com/", "EN", true),
        r("doc", "Allure pytest", "https://docs.qameta.io/allure/#_pytest", "EN", true),
      ],
    }),

    ch({
      id: "pw-c51",
      phase: "Part 13 · Real World Projects",
      level: "advanced",
      title: "Project 3 Intermediate — API + UI Hybrid",
      minutes: 150,
      durationLabel: "1–2 weeks",
      overview: "Create data via API, verify in UI, switch environments with config. Bonus points for a thin DB validation note even if mocked.",
      learn: [
        "API create → UI assert",
        "Environment switching",
        "Layered validation thinking",
        "Stable cleanup strategy",
      ],
      steps: [
        {
          title: "Design",
          body: "Pick Reqres/JSONPlaceholder/Automation Exercise API. Define entity lifecycle create→verify→delete.",
          doThis: "Write sequence diagram in README.",
        },
        {
          title: "Implement",
          body: "api/ client + UI pages + ENV profiles.",
          doThis: "One hybrid test green on CI.",
        },
        {
          title: "DB layer story",
          body: "Even without a DB, explain how you would assert persistence at DB layer in a real job.",
          doThis: "Add section 'If we had a DB' in README.",
        },
      ],
      checklist: [
        "Hybrid test green",
        "ENV switch works",
        "Cleanup or isolation defined",
        "CI includes hybrid smoke",
      ],
      practice: {
        title: "Interview diagram",
        brief: "One PNG/SVG of API→UI flow for portfolio.",
      },
      resources: [
        r("doc", "API testing", "https://playwright.dev/python/docs/api-testing", "EN", true),
        r("lab", "Thinking Tester Contact List", "https://thinking-tester-contact-list.herokuapp.com/", "EN", true),
        r("lab", "OrangeHRM Demo", "https://opensource-demo.orangehrmlive.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c52",
      phase: "Part 13 · Real World Projects",
      level: "advanced",
      title: "Project 4 Advanced — Complete Framework from Scratch",
      minutes: 240,
      durationLabel: "2–3 weeks",
      overview: "Capstone framework: POM, pytest, Allure, multi-env, JSON/CSV data, network mocking, visual smoke, GHA, Docker, impeccable README. This is the repo you pin.",
      learn: [
        "Integrate all prior skills",
        "Network mocking for stability",
        "Docker + CI",
        "Documentation bar for hiring",
      ],
      steps: [
        {
          title: "Greenfield structure",
          body: "New repo or major version. Apply Chapter 46 skeleton strictly.",
          doThis: "Create framework skeleton PR first before tests flood in.",
        },
        {
          title: "Feature verticals",
          body: "Auth, catalog, cart/checkout, one mocked third-party, visual header smoke.",
          doThis: "Implement verticals with Allure epics.",
        },
        {
          title: "Ship",
          body: "Docker + GHA + sample trace + contribution guide.",
          doThis: "Tag v1.0.0 and pin on GitHub profile.",
        },
      ],
      checklist: [
        "All core components present",
        "CI + Docker",
        "Mock + visual smoke",
        "README impresses in 60 seconds",
      ],
      practice: {
        title: "Peer review",
        brief: "Ask someone to onboard via README only; fix friction.",
      },
      resources: [
        r("repo", "microsoft/playwright-python", "https://github.com/microsoft/playwright-python", "EN", true),
        r("repo", "AutomationPanda tutorial", "https://github.com/AutomationPanda/playwright-python-tutorial", "EN", true),
        r("doc", "Playwright Docker", "https://playwright.dev/python/docs/docker", "EN", true),
      ],
    }),

    ch({
      id: "pw-c53",
      phase: "Part 13 · Real World Projects",
      level: "advanced",
      title: "Project 5 Advanced — BDD Framework",
      minutes: 180,
      durationLabel: "1–2 weeks",
      overview: "Business-readable automation with pytest-bdd on a banking/HR-style flow (OrangeHRM works). Prove you can collaborate beyond engineers.",
      learn: [
        "Feature files for real flows",
        "Step definition design",
        "Reporting with BDD",
        "When BDD helps stakeholders",
      ],
      steps: [
        {
          title: "Domain",
          body: "OrangeHRM: login, employee search, leave request — or banking demo equivalent.",
          doThis: "Write 3 scenarios in Gherkin with clear Given/When/Then.",
        },
        {
          title: "Steps + POM",
          body: "Steps call page objects — do not put locators in step files.",
          doThis: "Implement steps thin; reuse Project 4 pages if possible.",
        },
        {
          title: "Report & story",
          body: "Allure labels from scenarios; README explains audience for features.",
          doThis: "Publish sample feature snippet in README.",
        },
      ],
      checklist: [
        "≥3 scenarios green",
        "Steps thin over POM",
        "CI runs BDD smoke",
        "Stakeholder story in README",
      ],
      practice: {
        title: "BA walkthrough",
        brief: "Read features aloud to a non-dev friend; fix unclear wording.",
      },
      resources: [
        r("doc", "pytest-bdd", "https://pytest-bdd.readthedocs.io/", "EN", true),
        r("lab", "OrangeHRM Demo", "https://opensource-demo.orangehrmlive.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c54",
      phase: "Part 14 · Career & Interviews",
      level: "advanced",
      title: "Interview Preparation — structure + how to answer",
      minutes: 90,
      durationLabel: "1 week (ongoing)",
      overview: "Interviews test judgment under pressure: framework design, waits, flakes, CI, and a live coding spike. Practice structured answers — not memorized essays.",
      learn: [
        "Round structure for Playwright roles",
        "How to answer framework design Qs",
        "Live coding approach",
        "Common candidate mistakes",
      ],
      steps: [
        {
          title: "Round map",
          body: "HR screen → technical Playwright/pytest → framework deep-dive → live coding → manager/culture. Prepare artifacts for each.",
          doThis: "Write your 30-second story + 2-minute framework tour.",
        },
        {
          title: "Top question themes",
          body: "Locators priority, auto-wait, storageState, traces, POM vs BDD, flake debugging, CI caching, API+UI hybrid, parallel isolation.",
          doThis: "Create ANSWERS.md with 15 Qs answered in STAR or concept→example→tradeoff format.",
          items: [
            "Why Playwright over Selenium?",
            "Explain auto-waiting",
            "How do you reuse auth?",
            "How do you debug CI failures?",
            "Design a folder structure on a whiteboard",
            "How do you keep tests from being flaky?",
            "When do you mock network?",
            "How do you parametrize browsers?",
            "What belongs in a page object?",
            "How do you handle iframes/dialogs?",
            "pytest fixtures you rely on",
            "Smoke vs regression strategy",
            "How do you store secrets?",
            "Explain a production bug you caught",
            "What would you improve in your framework next?",
          ],
        },
        {
          title: "Live coding",
          body: "Clarify app under test, write role locators, 2–3 expects, avoid sleep, narrate. Bring muscle memory from Sauce Demo.",
          doThis: "Timed 45-minute mock: automate a new flow without notes.",
        },
        {
          title: "Mistakes",
          body: "Cannot explain own framework; no CI; sleeps everywhere; only codegen; trash README; lying about scale.",
          doThis: "Self-audit against the mistakes list; fix gaps.",
        },
      ],
      checklist: [
        "30s + 2min stories ready",
        "15 answers drafted",
        "One timed mock done",
        "Honest gap list",
      ],
      practice: {
        title: "Mock interview",
        brief: "Peer or recorded self-interview; note filler words and weak answers.",
      },
      resources: [
        r("community", "Ministry of Testing", "https://www.ministryoftesting.com/", "EN", true),
        r("community", "r/QualityAssurance", "https://www.reddit.com/r/QualityAssurance/", "EN", true),
        r("course", "TAU", "https://testautomationu.applitools.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-c55",
      phase: "Part 14 · Career & Interviews",
      level: "advanced",
      title: "Portfolio for Playwright Engineers",
      minutes: 60,
      durationLabel: "3–5 days",
      overview: "Your GitHub is the resume. Pin the framework, write a README that sells outcomes, record a demo, optionally publish Allure to Pages — and stand out in a Selenium-heavy crowd.",
      learn: [
        "Repo & README standards",
        "Demo video that converts",
        "Allure on GitHub Pages idea",
        "Talking points vs Selenium-only peers",
      ],
      steps: [
        {
          title: "Repo look",
          body: "Clear name, topics tags (playwright, pytest, python), pin, LICENSE, CODE_OF_CONDUCT optional. Issues/projects optional.",
          doThis: "Pin Project 4; add topics; tidy root files.",
        },
        {
          title: "README structure",
          body: "Hook → features → architecture diagram → quickstart → CI badge → reports → roadmap. Lead with outcomes.",
          doThis: "Rewrite README above the fold to sell in 10 seconds.",
        },
        {
          title: "Demo video",
          body: "3–5 minutes: clone→run smoke→show Allure/trace→show CI. Face optional; audio clear.",
          doThis: "Upload unlisted YouTube/Loom; link in README.",
        },
        {
          title: "Stand out",
          body: "Emphasize traces, storageState, hybrid API+UI, CI artifacts, flake discipline — not 'I know click'.",
          doThis: "Write LinkedIn project blurb with metrics (tests, browsers, CI time).",
        },
      ],
      checklist: [
        "Pinned framework repo",
        "README sells outcomes",
        "Demo linked",
        "LinkedIn blurb posted",
      ],
      practice: {
        title: "Apply loop",
        brief: "Send 5 tailored applications referencing the public repo.",
      },
      resources: [
        r("doc", "GitHub profile README", "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile", "EN", true),
        r("blog", "Automation Panda", "https://automationpanda.com/", "EN", true),
      ],
    }),

    ch({
      id: "pw-app-a",
      kind: "guide",
      phase: "Appendices",
      level: "beginner",
      title: "Appendix A — Cheat Sheet",
      minutes: 25,
      durationLabel: "Reference",
      overview: "One place for the methods you reach for daily. Print it, pin it, and stop alt-tabbing the docs for basics.",
      learn: [
        "Locators",
        "Actions",
        "Expects",
        "CLI",
      ],
      steps: [
        {
          title: "Locators",
          body: "Quick reference of built-ins and filters.",
          items: [
            "get_by_role / label / placeholder / text / alt_text / title / test_id",
            "locator.filter(has_text=) / has() / nth / first / last",
            "frame_locator('iframe')",
            "Priority: role → label → test id → CSS → XPath",
          ],
        },
        {
          title: "Actions & waits",
          body: "",
          items: [
            "click, fill, press, check, select_option, set_input_files, drag_to",
            "expect(page).to_have_url / title",
            "expect(locator).to_be_visible / to_have_text / to_have_count",
            "Ban: time.sleep",
          ],
        },
        {
          title: "CLI",
          body: "",
          doThis: "Copy this appendix into CHEATSHEET.md in your repo.",
          items: [
            "playwright install",
            "playwright codegen URL",
            "playwright show-trace trace.zip",
            "pytest -m smoke --browser chromium",
            "PWDEBUG=1 pytest -k name",
          ],
        },
      ],
      checklist: [
        "CHEATSHEET.md in repo",
        "CLI commands tried once each",
      ],
      resources: [
        r("doc", "Python API", "https://playwright.dev/python/docs/api/class-playwright", "EN", true),
        r("doc", "pytest reference", "https://docs.pytest.org/en/stable/reference.html", "EN", true),
      ],
    }),

    ch({
      id: "pw-app-b",
      kind: "guide",
      phase: "Appendices",
      level: "beginner",
      title: "Appendix B — Complete Resources Directory",
      minutes: 30,
      durationLabel: "Reference",
      overview: "Curated docs, courses, blogs, practice apps, repos, and communities — the stack behind this curriculum. Use it; do not drown in it.",
      learn: [
        "Official docs",
        "Courses & YouTube",
        "Practice apps",
        "Communities",
      ],
      steps: [
        {
          title: "Official & core docs",
          body: "Start here before random YouTube.",
          doThis: "Bookmark the five primary docs links in resources below.",
        },
        {
          title: "Learning media",
          body: "TAU free courses, Automation Step by Step, Rahul Shetty, Naveen, Nana for CI/Docker, freeCodeCamp for Python gaps.",
          doThis: "Pick one YouTube channel as your secondary teacher — not five.",
        },
        {
          title: "Practice apps & repos",
          body: "Sauce Demo, the-internet, DemoQA, OrangeHRM, Automation Exercise, Playwright TodoMVC, Thinking Tester Contact List. Study microsoft/playwright-python and AutomationPanda tutorials.",
          doThis: "Star the official and AutomationPanda repos.",
        },
        {
          title: "Communities",
          body: "Playwright Discord, MoT, Reddit QA, Stack Overflow tags, GitHub Discussions.",
          doThis: "Join Playwright Discord; introduce yourself as learning Python path.",
        },
      ],
      checklist: [
        "Bookmarks folder created",
        "One course enrolled",
        "Practice apps bookmarked",
        "Discord joined",
      ],
      practice: {
        title: "Resource diet",
        brief: "Pick 1 doc + 1 course + 1 practice app as your only extras this month.",
      },
      resources: [
        r("doc", "Playwright Python docs", "https://playwright.dev/python/docs/intro", "EN", true),
        r("doc", "pytest docs", "https://docs.pytest.org/en/stable/", "EN", true),
        r("doc", "Allure pytest", "https://docs.qameta.io/allure/#_pytest", "EN", true),
        r("doc", "pytest-playwright", "https://playwright.dev/python/docs/test-runners", "EN", true),
        r("doc", "Applitools Playwright SDK", "https://applitools.com/tutorials/quickstart/web/playwright/python", "EN", true),
        r("course", "Test Automation University", "https://testautomationu.applitools.com/", "EN", true),
        r("course", "Microsoft Learn Playwright", "https://learn.microsoft.com/en-us/training/modules/build-with-playwright/", "EN", true),
        r("course", "LambdaTest Learning Hub", "https://www.lambdatest.com/learning-hub/playwright", "EN", true),
        r("video", "Automation Step by Step", "https://www.youtube.com/@RaghavPal", "EN", true),
        r("video", "Rahul Shetty Academy", "https://www.youtube.com/@RahulShettyAcademy", "EN", true),
        r("video", "Naveen AutomationLabs", "https://www.youtube.com/@NaveenAutomationLabs", "EN", true),
        r("video", "TechWorld with Nana", "https://www.youtube.com/@TechWorldwithNana", "EN", true),
        r("video", "freeCodeCamp", "https://www.youtube.com/@freecodecamp", "EN", true),
        r("video", "LambdaTest", "https://www.youtube.com/@LambdaTest", "EN", true),
        r("video", "SDET Unicorns", "https://www.youtube.com/@sdetunicorns", "EN", true),
        r("book", "Python Testing with pytest (Okken)", "https://pragprog.com/titles/bopytest2/python-testing-with-pytest-second-edition/", "EN", false),
        r("book", "Automate the Boring Stuff", "https://automatetheboringstuff.com/", "EN", true),
        r("book", "Clean Code (Martin)", "https://www.oreilly.com/library/view/clean-code-a/9780136083238/", "EN", false),
        r("blog", "Automation Panda", "https://automationpanda.com/", "EN", true),
        r("blog", "Automation Panda Playwright tag", "https://automationpanda.com/tag/playwright/", "EN", true),
        r("blog", "Real Python", "https://realpython.com/", "EN", true),
        r("blog", "Playwright blog", "https://playwright.dev/blog/", "EN", true),
        r("blog", "LambdaTest blog", "https://www.lambdatest.com/blog/", "EN", true),
        r("blog", "BrowserStack blog", "https://www.browserstack.com/blog/", "EN", true),
        r("lab", "Sauce Demo", "https://www.saucedemo.com/", "EN", true),
        r("lab", "the-internet", "https://the-internet.herokuapp.com/", "EN", true),
        r("lab", "DemoQA", "https://demoqa.com/", "EN", true),
        r("lab", "OrangeHRM Demo", "https://opensource-demo.orangehrmlive.com/", "EN", true),
        r("lab", "Automation Exercise", "https://automationexercise.com/", "EN", true),
        r("lab", "Playwright TodoMVC", "https://demo.playwright.dev/todomvc", "EN", true),
        r("lab", "Thinking Tester Contact List", "https://thinking-tester-contact-list.herokuapp.com/", "EN", true),
        r("repo", "microsoft/playwright", "https://github.com/microsoft/playwright", "EN", true),
        r("repo", "microsoft/playwright-python", "https://github.com/microsoft/playwright-python", "EN", true),
        r("repo", "AutomationPanda/playwright-python-tutorial", "https://github.com/AutomationPanda/playwright-python-tutorial", "EN", true),
        r("repo", "pytest-playwright plugin", "https://github.com/microsoft/playwright-pytest", "EN", true),
        r("community", "Ministry of Testing", "https://www.ministryoftesting.com/", "EN", true),
        r("community", "r/QualityAssurance", "https://www.reddit.com/r/QualityAssurance/", "EN", true),
        r("community", "r/softwaretesting", "https://www.reddit.com/r/softwaretesting/", "EN", true),
        r("doc", "CSS selectors", "https://web.dev/learn/css/selectors", "EN", true),
        r("doc", "XPath cheatsheet", "https://devhints.io/xpath", "EN", true),
        r("doc", "Git cheat sheet", "https://education.github.com/git-cheat-sheet-education.pdf", "EN", true),
      ],
    }),

    ch({
      id: "pw-app-c",
      kind: "guide",
      phase: "Appendices",
      level: "intermediate",
      title: "Appendix C — All Projects Summary",
      minutes: 20,
      durationLabel: "Reference",
      overview: "Five projects, stacked difficulty, clear employer signals. Use this when planning sprints or explaining your portfolio in interviews.",
      learn: [
        "Project map",
        "Skills proved",
        "Interview angles",
      ],
      steps: [
        {
          title: "Project matrix",
          body: "Keep estimates honest; shipping beats perfect.",
          items: [
            "P1 Beginner — Login/search — 3–5 days — POM+pytest basics",
            "P2 Intermediate — Checkout E2E — 1–2 weeks — Allure+CI+data-driven",
            "P3 Intermediate — API+UI hybrid — 1–2 weeks — env switch+api client",
            "P4 Advanced — Full framework — 2–3 weeks — Docker+mocks+visual+docs",
            "P5 Advanced — BDD — 1–2 weeks — pytest-bdd+stakeholder specs",
          ],
        },
        {
          title: "Repo structure tips",
          body: "One monorepo with /projects/p1..p5 OR five repos. Monorepo is easier to maintain; multi-repo looks prolific.",
          doThis: "Choose monorepo vs multi and stick to it.",
        },
        {
          title: "Interview presentation",
          body: "Lead with P4, support with P2 CI story, mention P3 hybrid as differentiator, P5 if role mentions BDD/Cucumber.",
          doThis: "Write a 60-second portfolio pitch.",
        },
      ],
      checklist: [
        "Pitch written",
        "Projects scheduled on calendar",
        "P1 started or done",
      ],
      practice: {
        title: "Kanban",
        brief: "Create GitHub project board with 5 project cards and due months.",
      },
    }),

    ch({
      id: "pw-app-d",
      kind: "guide",
      phase: "Appendices",
      level: "beginner",
      title: "Appendix D — Common Errors & Fixes",
      minutes: 35,
      durationLabel: "Reference",
      overview: "When the red stack trace hits, come here. Cause → fix for the timeouts, locators, CI, and Docker errors everyone hits.",
      learn: [
        "Timeout triage",
        "Locator errors",
        "CI/Docker failures",
      ],
      steps: [
        {
          title: "Timeouts",
          body: "Error: Timeout ... exceeded.",
          items: [
            "Cause: wrong locator / element never appears → Fix: codegen/Inspector; assert count; check env URL",
            "Cause: overlay/spinner → Fix: expect spinner hidden; click underlying via role",
            "Cause: navigation not finished → Fix: expect URL; avoid networkidle",
            "Cause: timeout too low for CI → Fix: raise slightly + speed test; do not sleep",
          ],
        },
        {
          title: "Locator / strict mode",
          body: "",
          items: [
            "Cause: strict mode violation (resolved to N) → Fix: tighten with filter/name/exact",
            "Cause: not visible → Fix: scroll_into_view; wait for state; check iframe",
            "Cause: intercepted by another element → Fix: close modal; expect overlay gone",
          ],
        },
        {
          title: "CI & Docker",
          body: "",
          doThis: "Add ERRORS.md linking your real failures to this appendix.",
          items: [
            "Cause: browsers missing → Fix: playwright install --with-deps",
            "Cause: flaky only in CI → Fix: traces artifacts; check parallel isolation",
            "Cause: permission / sandbox → Fix: docker flags or official image",
            "Cause: cannot find module → Fix: pip install -r on CI; commit requirements",
          ],
        },
      ],
      checklist: [
        "ERRORS.md started",
        "Know strict mode fix",
        "Know CI browser install flag",
      ],
      resources: [
        r("doc", "Debug", "https://playwright.dev/python/docs/debug", "EN", true),
        r("doc", "CI", "https://playwright.dev/python/docs/ci", "EN", true),
        r("doc", "Docker", "https://playwright.dev/python/docs/docker", "EN", true),
      ],
    }),

    ch({
      id: "pw-app-e",
      kind: "guide",
      phase: "Appendices",
      level: "beginner",
      title: "Appendix E — Glossary",
      minutes: 30,
      durationLabel: "Reference",
      overview: "Forty-plus terms in plain language. Skim weekly until interviews feel like a second language.",
      learn: [
        "Core Playwright terms",
        "pytest terms",
        "CI & quality terms",
      ],
      steps: [
        {
          title: "Playwright core",
          body: "",
          items: [
            "Browser — Chromium/Firefox/WebKit process Playwright controls",
            "Context — Isolated browser profile (cookies/storage)",
            "Page — A tab inside a context",
            "Locator — Lazy element query with auto-wait",
            "Auto-waiting — Waiting for actionability before acts",
            "Actionability — Visible, stable, enabled, receiving events",
            "Headless — Browser without UI window",
            "Headed — Browser with visible UI",
            "Trace — Timeline recording for debugging",
            "storageState — Saved auth cookies/storage",
            "Frame / iframe — Nested document",
            "Shadow DOM — Encapsulated DOM tree",
            "Codegen — Recorder that drafts scripts",
            "Inspector — Step debugger UI",
            "Expect — Auto-retrying assertion API",
            "Strict mode — Fail if locator matches ≠ 1",
            "Fixture (PW) — pytest-provided page/context/browser",
            "Route — Network intercept handler",
            "Fulfill — Mock a response in a route",
            "Device descriptor — Preset mobile emulation profile",
          ],
        },
        {
          title: "pytest & process",
          body: "",
          items: [
            "Fixture — Reusable setup/teardown injected into tests",
            "Marker — Tag like smoke/regression",
            "Parametrize — Run one test with many data rows",
            "conftest.py — Shared fixtures/hooks discovery file",
            "xdist — Parallel test runner plugin",
            "Allure — Rich HTML test report system",
            "POM — Page Object Model",
            "Component object — POM for shared widgets",
            "Smoke — Small critical-path suite",
            "Regression — Broader suite beyond smoke",
            "Flake — Intermittent failure without clear product bug",
            "Hybrid test — API setup + UI assertion",
            "E2E — End-to-end user-path test",
            "Seed data — Pre-created entities for tests",
            "Isolation — Tests do not depend on each other",
            "Artifact — CI-uploaded report/trace/video",
            "Shard — Split suite across machines",
            "Baseline (visual) — Reference screenshot",
            "Gherkin — Given/When/Then BDD language",
            "Step definition — Code binding Gherkin steps",
            "WebKit — Engine behind Safari",
            "Chromium — Open-source engine behind Chrome/Edge",
          ],
        },
      ],
      checklist: [
        "Skimmed twice",
        "Can define storageState aloud",
        "Can define flake vs fail",
      ],
      practice: {
        title: "Flashcards",
        brief: "Make 20 Anki/flashcards from this glossary.",
      },
    }),

    ch({
      id: "pw-app-f",
      kind: "guide",
      phase: "Appendices",
      level: "beginner",
      title: "Appendix F — Progress Tracker",
      minutes: 20,
      durationLabel: "Living doc",
      overview: "Tick parts as you earn them. Honesty beats vanity — a half-checked tracker guides your next week better than a fake 100%.",
      learn: [
        "Part readiness",
        "Skills self-check",
        "Project tracker",
      ],
      steps: [
        {
          title: "Part readiness",
          body: "Mark each part Ready only when its checkpoint (or end criteria) passes.",
          doThis: "Copy into PROGRESS.md and check weekly.",
          items: [
            "Part 0 — Environment ready",
            "Part 1 — Fundamentals + CP1",
            "Part 2 — Locators confident",
            "Part 3 — Actions + no sleeps",
            "Part 4 — Assertions fluent",
            "Part 5 — Complex UI + CP2",
            "Part 6 — pytest spine",
            "Part 7 — POM + CP3",
            "Part 8 — Data & config",
            "Part 9 — Traces/Allure/debug",
            "Part 10 — Advanced APIs/visual/mobile",
            "Part 11 — CI/CD + CP4",
            "Part 12 — Framework design",
            "Part 13 — Projects 1–5",
            "Part 14 — Interview + portfolio",
          ],
        },
        {
          title: "Skills self-assessment",
          body: "Score 1–5: locators, waits, POM, pytest, CI, hybrid API, debugging, communication.",
          doThis: "Score today and set a target for 30 days.",
        },
        {
          title: "Projects",
          body: "",
          items: [
            "P1 not started / in progress / done",
            "P2 not started / in progress / done",
            "P3 not started / in progress / done",
            "P4 not started / in progress / done",
            "P5 not started / in progress / done",
          ],
        },
      ],
      checklist: [
        "PROGRESS.md created",
        "Scores dated",
        "Next week focus chosen",
      ],
      practice: {
        title: "Weekly review",
        brief: "Every Sunday: update tracker, commit, plan 3 outcomes.",
      },
      note: "Revisit checkpoints before job applications — rust is real.",
    }),
  ],
  resources: {
    docs: [
      { name: 'Playwright Python', url: 'https://playwright.dev/python/docs/intro' },
      { name: 'pytest', url: 'https://docs.pytest.org/en/stable/' },
      { name: 'Allure pytest', url: 'https://docs.qameta.io/allure/#_pytest' },
      { name: 'Playwright CI', url: 'https://playwright.dev/python/docs/ci' },
      { name: 'Automation Panda', url: 'https://automationpanda.com/tag/playwright/' },
    ],
    tools: [
      'Python 3.11+',
      'VS Code or Cursor + Python / Pylance / Playwright extensions',
      'Git + GitHub Actions',
      'pytest + pytest-playwright + pytest-xdist',
      'Allure + pytest-html',
      'Docker (Playwright official image)',
    ],
    books: [
      'Python Testing with pytest — Brian Okken',
      'Automate the Boring Stuff with Python — Al Sweigart (free online)',
      'Clean Code — Robert C. Martin',
    ],
    practice: [
      'https://www.saucedemo.com/',
      'https://the-internet.herokuapp.com/',
      'https://demoqa.com/',
      'https://automationexercise.com/',
      'https://opensource-demo.orangehrmlive.com/',
      'https://demo.playwright.dev/todomvc',
      'https://jsonplaceholder.typicode.com/',
      'https://reqres.in/',
    ],
    videos: [
      { name: 'Playwright Dev YouTube', url: 'https://www.youtube.com/@Playwrightdev' },
      { name: 'Automation Step by Step', url: 'https://www.youtube.com/@RaghavPal' },
      { name: 'TechWorld with Nana', url: 'https://www.youtube.com/@TechWorldwithNana' },
    ],
  },
}
