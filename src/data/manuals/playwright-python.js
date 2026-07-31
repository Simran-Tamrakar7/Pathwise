import { ch, r } from '../helpers'

export const playwrightPythonManual = {
  id: 'playwright',
  title: 'Playwright + Python',
  tagline: 'Zero → job-ready QA Automation Engineer path — Python + Playwright, project-based.',
  category: 'automation',
  accent: '#1B4D3E',
  cover: 'covers/playwright-cover.png',
  duration: '20–24 weeks (part-time)',
  levelSpan: 'Zero → Job-ready',
  who: 'No coding background assumed. Anyone aiming for QA Automation Engineer (Python + Playwright).',
  outcomes: [
    'Explain your framework, debug flakes, and run tests in CI',
    'Ship a public GitHub portfolio with POM + pytest + Playwright',
    'Combine UI, API, and hybrid tests employers actually probe',
  ],
  pace: {
    hoursPerDay: '1.5–2 hours/day (≈ 10–12 hrs/week)',
    recommended: '~20–24 weeks (5–6 months)',
    accelerated: '~14–16 weeks at 3–4 hrs/day',
    slow: '~28–32 weeks if busy',
  },
  chapters: [
    ch({
      id: 'pw-how',
      kind: 'guide',
      phase: 'Start',
      level: 'beginner',
      title: 'How to use this roadmap',
      minutes: 20,
      overview:
        'This is a book-length path, not a weekend tutorial. Treat it like a course: follow the order, do the exercises, pass checkpoints before moving on. Job-ready means you can explain your framework in an interview and demo a green CI run — not that you watched every video.',
      learn: [
        'How to pace yourself for 20–24 weeks part-time',
        'Rules that separate finishers from drop-offs',
        'What “job-ready” actually means for QA automation',
      ],
      steps: [
        {
          title: 'Study pace',
          body: 'Plan 1.5–2 hours on most days (≈ 10–12 hrs/week). Accelerated learners at 3–4 hrs/day can finish in ~14–16 weeks. If life is busy, stretch to 28–32 weeks — consistency beats speed.',
          doThis: 'Block recurring calendar slots for the next 7 days. Write your target finish date.',
          items: [
            'Recommended: ~20–24 weeks at 10–12 hrs/week',
            'Accelerated: ~14–16 weeks at 3–4 hrs/day',
            'Slow track: ~28–32 weeks — still valid',
          ],
        },
        {
          title: 'Rules of the road',
          body: 'Follow chapters in order — Python before Playwright, Git before CI. Practice daily even if only 30 minutes. Checkpoints are gates: do not skip them. Prefer doing over collecting resources.',
          doThis: 'Create a GitHub repo named qa-automation-journey today. You will push to it starting Chapter 1.',
          tip: 'Bookmark one practice site (Sauce Demo) and return to it weekly.',
        },
        {
          title: 'Checkpoints are contracts',
          body: 'Each checkpoint has pass criteria. Treat them like exam requirements. If you fail, fix gaps before advancing — employers will probe the same skills.',
          doThis: 'Read all four checkpoint chapters now. Note their pass criteria in your README.',
        },
        {
          title: 'Job-ready definition',
          body: 'You are job-ready when you can: write a Playwright + pytest test from scratch, explain your POM folder structure, debug a flake with trace/screenshot, run tests in GitHub Actions, and walk through a public portfolio repo live.',
          doThis: 'Write a one-paragraph “done looks like…” note in your repo README.',
        },
      ],
      checklist: [
        'Calendar blocks set for this week',
        'GitHub repo created for the journey',
        'I read all checkpoint pass criteria',
        'I know my target timeline (recommended / accelerated / slow)',
      ],
      practice: {
        title: 'Day zero setup',
        brief: 'Install nothing yet except Git and a code editor. Create the repo, add a README with your goal and timeline, make the first commit.',
      },
      note: 'Stuck? Re-read the step’s doThis box — it is the smallest next action.',
    }),

    ch({
      id: 'pw-ch1',
      phase: 'A · Foundations',
      level: 'beginner',
      title: 'Mindset, tools & computer basics',
      minutes: 50,
      durationLabel: '3–4 days',
      overview:
        'Before Python or Playwright, get comfortable with the machine. QA automation is engineering lite: files, terminal, version control, and a editor you trust. This chapter installs the toolchain and explains why manual QA skills still matter.',
      learn: [
        'QA manual vs automation — complementary, not competing',
        'Install Python 3.11+, VS Code or Cursor, Git, GitHub account',
        'Terminal navigation, Python REPL, editor essentials',
      ],
      steps: [
        {
          title: 'QA vs automation mindset',
          body: 'Manual testing explores unknowns. Automation repeats what you already trust. Your job as an automation engineer is to encode stable checks — not to replace curiosity.',
          doThis: 'List 5 things you would manually explore on any login page vs 3 you would automate.',
        },
        {
          title: 'Install Python',
          body: 'Install Python 3.11 or 3.12 from python.org (check “Add to PATH” on Windows). Verify with python --version and pip --version.',
          doThis: 'Run python --version in terminal. Screenshot the output for your learning log.',
          code: '# macOS / Linux\npython3 --version\npip3 --version\n\n# Windows (if python is on PATH)\npython --version\npip --version',
        },
        {
          title: 'Install VS Code or Cursor + Python extension',
          body: 'Either editor works. Install the official Python extension (Microsoft). Enable format on save later — not required today.',
          doThis: 'Open the editor, create hello.py with print("QA automation"), run it from the terminal.',
        },
        {
          title: 'Install Git and create GitHub account',
          body: 'Git tracks changes locally. GitHub hosts remotes. Every employer expects both.',
          doThis: 'Run git --version. Create github.com account if needed. Generate SSH key or use HTTPS.',
          code: 'git --version\ngit config --global user.name "Your Name"\ngit config --global user.email "you@email.com"',
        },
        {
          title: 'Terminal essentials',
          body: 'cd, ls/dir, mkdir, pwd, clear. You will live here. No GUI shame — terminals are faster once muscle memory builds.',
          doThis: 'Navigate to your project folder, create src/ and tests/ directories, list them.',
          code: 'mkdir qa-automation-journey\ncd qa-automation-journey\nmkdir src tests\nls -la   # Windows: dir',
        },
      ],
      checklist: [
        'Python 3.11+ installed and verified',
        'Editor opens and runs a .py file',
        'Git configured with name and email',
        'GitHub account ready',
        'Comfortable with cd, mkdir, ls',
      ],
      practice: {
        title: 'Toolchain proof',
        brief: 'In your repo, add hello.py, run it, commit with message "chore: verify Python toolchain". Push to GitHub.',
      },
      resources: [
        r('doc', 'Python for Beginners (Official)', 'https://www.python.org/about/gettingstarted/', 'EN'),
        r('video', 'freeCodeCamp — Command Line Crash Course', 'https://www.youtube.com/watch?v=yz7nYlnXLfE', 'EN'),
        r('video', 'CodeWithHarry — Terminal Commands (Hindi)', 'https://www.youtube.com/watch?v=Zhq5M-qNfyI', 'HI'),
        r('doc', 'VS Code — Python Tutorial', 'https://code.visualstudio.com/docs/python/python-tutorial', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch2',
      phase: 'A · Foundations',
      level: 'beginner',
      title: 'Python for automation only',
      minutes: 120,
      durationLabel: 'Weeks 1–3',
      overview:
        'You do not need to become a software engineer — you need Python fluency for tests: variables, control flow, functions, lists/dicts, JSON, files, errors, and virtual environments. Skip web frameworks, skip data science. Stop when you can write a script that reads a JSON file and loops over results.',
      learn: [
        'Syntax, indentation, variables, strings, f-strings',
        'if/elif/else, for/while, functions, default args',
        'lists, dicts, list comprehensions (light), JSON module',
        'read/write files, try/except, venv + pip',
      ],
      steps: [
        {
          title: 'Variables, types, and f-strings',
          body: 'Automation scripts mostly shuffle strings, numbers, booleans, lists, and dicts. Use f-strings for readable logs.',
          doThis: 'Write a script that stores username/password in variables and prints a formatted login attempt message.',
          code: 'username = "standard_user"\npassword = "secret_sauce"\nprint(f"Attempting login for {username}")',
        },
        {
          title: 'Control flow',
          body: 'Tests branch on conditions and loop over data sets. Master if/else and for loops before pytest parametrization makes sense.',
          doThis: 'Loop over a list of 3 invalid passwords; print whether each is empty or too short.',
        },
        {
          title: 'Functions',
          body: 'Extract reusable logic. Automation helpers like load_config() or build_url() start here.',
          doThis: 'Write def is_valid_email(s): returning True/False with basic checks.',
        },
        {
          title: 'Lists, dicts, and JSON',
          body: 'API responses and test data are JSON → Python dicts/lists. json.load and json.dumps are daily tools.',
          doThis: 'Create a users.json file with 3 users. Load it in Python and print each username.',
          code: 'import json\n\nwith open("users.json") as f:\n    users = json.load(f)\n\nfor u in users:\n    print(u["username"])',
        },
        {
          title: 'Errors and files',
          body: 'try/except prevents one bad file from killing a suite. Always use with open(...) for files.',
          doThis: 'Wrap JSON load in try/except FileNotFoundError. Print a friendly message.',
        },
        {
          title: 'Virtual environments and pip',
          body: 'Never install packages globally. venv isolates project dependencies — pytest and playwright live here.',
          doThis: 'Create .venv, activate, pip install requests, verify with pip list.',
          code: '# Create venv\npython -m venv .venv\n\n# macOS / Linux\nsource .venv/bin/activate\n\n# Windows\n.venv\\Scripts\\activate\n\npip install requests\npip list',
        },
        {
          title: 'Stop rule — ready for Playwright',
          body: 'Move on when you can: write a function, read a JSON config, loop with if/else, handle a missing file gracefully, and use venv without looking up activate every time.',
          doThis: 'Build config_reader.py: load config.json, return base_url, handle missing keys.',
          tip: 'If stuck >2 days on one topic, use HackerRank/Exercism for 30 min drills, then return.',
        },
      ],
      checklist: [
        'I can write functions with parameters and return values',
        'I can load and parse JSON from a file',
        'I use try/except for file errors',
        'I activate venv before pip install',
        'config_reader.py works locally',
      ],
      practice: {
        title: 'Mini data script',
        brief: 'Given products.json (name, price), write a script that prints products over $20 and writes results to output.txt.',
      },
      resources: [
        r('book', 'Automate the Boring Stuff with Python', 'https://automatetheboringstuff.com/', 'EN'),
        r('video', 'freeCodeCamp — Python Full Course', 'https://www.youtube.com/watch?v=rfscVS0vtbw', 'EN'),
        r('video', 'CodeWithHarry — Python (Hindi)', 'https://www.youtube.com/watch?v=gfDE2a7MKjA', 'HI'),
        r('doc', 'Official Python Tutorial', 'https://docs.python.org/3/tutorial/', 'EN'),
        r('practice', 'HackerRank — Python', 'https://www.hackerrank.com/domains/python', 'EN'),
        r('practice', 'Exercism — Python Track', 'https://exercism.org/tracks/python', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch3',
      phase: 'A · Foundations',
      level: 'beginner',
      title: 'Git & GitHub for testers',
      minutes: 50,
      durationLabel: '4–5 days',
      overview:
        'Your portfolio lives on GitHub. Learn the daily loop: clone, branch, commit, push, pull request. Employers read commit history and README quality — treat Git as a professional skill, not a backup tool.',
      learn: [
        'git init, add, commit, status, log',
        'Branches, merge, basic conflict resolution',
        'Remote repos, push, pull, .gitignore',
        'README and meaningful commit messages',
      ],
      steps: [
        {
          title: 'The daily loop',
          body: 'status → add → commit → push. Small commits with clear messages beat giant “final final” dumps.',
          doThis: 'Make 3 separate commits today: README update, .gitignore, and a Python script.',
          code: 'git status\ngit add .\ngit commit -m "feat: add config reader script"\ngit push origin main',
        },
        {
          title: 'Branches for features',
          body: 'Create a branch per feature or chapter. Even solo, this mirrors team workflow interviewers expect.',
          doThis: 'Create branch ch3-git-practice, add a file, merge to main.',
          code: 'git checkout -b ch3-git-practice\n# edit files\ngit add .\ngit commit -m "docs: add git cheat sheet"\ngit checkout main\ngit merge ch3-git-practice',
        },
        {
          title: '.gitignore essentials',
          body: 'Never commit .venv, __pycache__, .pytest_cache, playwright-report, test-results, or secrets.',
          doThis: 'Add a Python .gitignore from github.com/github/gitignore. Confirm .venv is ignored.',
          code: '# .gitignore highlights\n.venv/\n__pycache__/\n.pytest_cache/\nplaywright-report/\ntest-results/\n.env',
        },
        {
          title: 'README that recruiters read',
          body: 'Top: project title, one-line purpose, how to run tests, tech stack, your contact. Screenshots optional but powerful.',
          doThis: 'Rewrite your README with Setup, Run Tests, and Project Structure sections.',
        },
      ],
      checklist: [
        'Repo on GitHub with 5+ meaningful commits',
        '.gitignore excludes venv and caches',
        'I can create and merge a branch',
        'README explains how to run the project',
      ],
      practice: {
        title: 'Git diary',
        brief: 'For one week, commit at least once per study session. Use conventional prefixes: feat, fix, docs, test.',
      },
      resources: [
        r('doc', 'GitHub Docs — Get Started', 'https://docs.github.com/en/get-started', 'EN'),
        r('doc', 'GitHub Gitignore Templates', 'https://github.com/github/gitignore', 'EN'),
        r('video', 'freeCodeCamp — Git and GitHub', 'https://www.youtube.com/watch?v=RGOj5yH7evk', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch4',
      phase: 'A · Foundations',
      level: 'beginner',
      title: 'Manual QA & web basics (lite)',
      minutes: 50,
      durationLabel: '4–5 days',
      overview:
        'Automation without manual QA sense produces green tests that miss bugs. Learn test cases, bug reports, and just enough web anatomy (HTML, DOM, DevTools) to locate elements and read failures.',
      learn: [
        'Test case vs test script, positive/negative/boundary',
        'Bug report anatomy: steps, expected, actual, evidence',
        'HTML tags, attributes, DOM tree, DevTools Elements tab',
        'Network tab basics — spot failed requests',
      ],
      steps: [
        {
          title: 'Write test cases by hand',
          body: 'Before automating Sauce Demo login, write manual cases: valid login, locked user, wrong password, empty fields.',
          doThis: 'Document 8 test cases for saucedemo.com login in a TESTCASES.md file.',
        },
        {
          title: 'Bug report practice',
          body: 'Title, environment, steps to reproduce, expected, actual, severity, screenshot. This is interview gold.',
          doThis: 'Find a cosmetic bug on a demo site. File a practice report in BUGS.md (even if fictional severity).',
        },
        {
          title: 'DevTools tour',
          body: 'Right-click → Inspect. Elements shows DOM. Console shows JS errors. Network shows API calls and status codes.',
          doThis: 'On saucedemo.com, inspect the login button. Note its tag, attributes, and accessible name.',
        },
        {
          title: 'Practice sites orientation',
          body: 'You will reuse these sites for weeks. Learn their purpose now.',
          doThis: 'Visit each site once. Bookmark the three you will use first.',
          items: [
            'Sauce Demo — https://www.saucedemo.com/ (e-commerce login/inventory)',
            'The Internet — https://the-internet.herokuapp.com/ (locator drills)',
            'Automation Exercise — https://automationexercise.com/ (forms, flows)',
            'OrangeHRM demo — https://opensource-demo.orangehrmlive.com/ (enterprise-style UI)',
          ],
        },
      ],
      checklist: [
        'TESTCASES.md with 8 login cases',
        'One polished bug report template saved',
        'I can open DevTools and find an element',
        'Bookmarked at least 3 practice sites',
      ],
      practice: {
        title: 'Exploratory session',
        brief: '30-minute exploratory test on the-internet.herokuapp.com. Log 5 observations without automating anything.',
      },
      resources: [
        r('lab', 'Sauce Demo', 'https://www.saucedemo.com/', 'EN'),
        r('lab', 'The Internet (Herokuapp)', 'https://the-internet.herokuapp.com/', 'EN'),
        r('doc', 'MDN — HTML Basics', 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics', 'EN'),
      ],
    }),

    ch({
      id: 'pw-cp-a',
      kind: 'checkpoint',
      phase: 'A · Foundations',
      level: 'beginner',
      title: 'Checkpoint A — Python + GitHub repo',
      minutes: 30,
      durationLabel: 'Gate',
      overview:
        'Prove Phase A before Playwright. You need a public repo that shows Python basics, Git habit, and manual QA documentation — not empty folders.',
      learn: ['Checkpoint pass criteria', 'Self-review before advancing'],
      steps: [
        {
          title: 'Pass criteria',
          body: 'All must be true before Chapter 5.',
          doThis: 'Open your repo and verify each item below. Fix gaps today.',
          items: [
            '3 Python scripts committed (e.g. hello, config_reader, data filter)',
            'README with setup instructions and project goal',
            '.gitignore excluding .venv, __pycache__, caches',
            'At least 5 meaningful commits with clear messages',
            'TESTCASES.md or equivalent manual QA artifact',
          ],
        },
        {
          title: 'Self-review',
          body: 'Clone your repo in a fresh folder. Follow README setup from scratch. If you cannot, fix README.',
          doThis: 'Ask a friend or future-you: “Can I run this without asking the author?”',
        },
      ],
      checklist: [
        'All 5 pass criteria verified',
        'Repo is public on GitHub',
        'Fresh clone + venv + run works',
      ],
      practice: {
        title: 'Publish Phase A',
        brief: 'Add a Release tag v0.1-phase-a on GitHub. Note what Phase B will add.',
      },
      note: 'Do not start Playwright until Checkpoint A is green.',
    }),

    ch({
      id: 'pw-ch5',
      phase: 'B · Playwright Core',
      level: 'beginner',
      title: 'Playwright first contact',
      minutes: 60,
      durationLabel: 'Week 6',
      overview:
        'Meet Playwright for Python: auto-waiting, modern locators, built-in assertions. Understand why teams pick it over raw Selenium for new projects, install pytest-playwright, and run your first headed and headless test.',
      learn: [
        'Playwright vs Selenium — auto-wait, trace, speed',
        'pip install pytest-playwright, playwright install',
        'First test with expect assertions',
        'Headed vs headless, --headed flag',
      ],
      steps: [
        {
          title: 'Why Playwright',
          body: 'Playwright bundles browser drivers, waits intelligently for elements, and ships trace/video/screenshot tooling. Selenium remains common in legacy stacks — know both names, build with Playwright here.',
          doThis: 'Read the Playwright Python intro page. Write 3 bullets on why auto-wait matters.',
        },
        {
          title: 'Install pytest-playwright',
          body: 'Use your project venv. Install browsers once via playwright install.',
          doThis: 'Install packages and run pytest --version.',
          code: 'source .venv/bin/activate   # Windows: .venv\\Scripts\\activate\npip install pytest pytest-playwright\nplaywright install chromium',
        },
        {
          title: 'First test — Sauce Demo login',
          body: 'Use the pytest-playwright page fixture. Prefer get_by_role and expect for assertions.',
          doThis: 'Create tests/test_login.py. Run pytest --headed -s. See the browser.',
          code: 'import pytest\nfrom playwright.sync_api import Page, expect\n\n\ndef test_login_success(page: Page):\n    page.goto("https://www.saucedemo.com/")\n    page.get_by_role("textbox", name="Username").fill("standard_user")\n    page.get_by_role("textbox", name="Password").fill("secret_sauce")\n    page.get_by_role("button", name="Login").click()\n    expect(page).to_have_url("https://www.saucedemo.com/inventory.html")\n    expect(page.get_by_text("Products")).to_be_visible()',
        },
        {
          title: 'Headed vs headless',
          body: 'Develop with --headed for visibility. CI runs headless by default. Same tests, different visibility.',
          doThis: 'Run the same test headless (default) and headed. Compare speed and debug value.',
          code: 'pytest tests/test_login.py --headed -s\npytest tests/test_login.py',
        },
      ],
      checklist: [
        'pytest-playwright installed in venv',
        'Chromium browsers installed',
        'Green login test locally',
        'I ran headed and headless',
      ],
      practice: {
        title: 'Second assertion',
        brief: 'Add a test for locked_out_user that asserts an error message appears.',
      },
      resources: [
        r('doc', 'Playwright Python — Intro', 'https://playwright.dev/python/docs/intro', 'EN'),
        r('doc', 'pytest-playwright', 'https://playwright.dev/python/docs/test-runners', 'EN'),
        r('lab', 'Sauce Demo', 'https://www.saucedemo.com/', 'EN'),
        r('article', 'Automation Panda — Playwright Tutorial', 'https://automationpanda.com/2023/11/08/playwright-python-tutorial-an-introduction/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch6',
      phase: 'B · Playwright Core',
      level: 'beginner',
      title: 'Locators & selectors',
      minutes: 60,
      durationLabel: 'Week 7',
      overview:
        'The most important beginner skill: stable locators. Playwright pushes user-facing queries first. Learn the priority order — role, label, text, test id, CSS — and practice on The Internet and Sauce Demo until locators feel natural.',
      learn: [
        'Locator priority: get_by_role → label → text → test_id → CSS',
        'Avoid XPath spaghetti and brittle CSS chains',
        'Locator strictness and .first / .nth when needed',
        'Codegen as teacher, not final code',
      ],
      steps: [
        {
          title: 'Priority order (memorize this)',
          body: 'If you remember one thing from this roadmap: locators mirror how users see the page.',
          doThis: 'Rewrite 3 CSS selectors from codegen output to get_by_role or get_by_label.',
          items: [
            '1. get_by_role("button", name="Login")',
            '2. get_by_label("Username")',
            '3. get_by_text("Products", exact=True)',
            '4. get_by_test_id("checkout") — ask devs to add data-testid',
            '5. locator("#user-name") — last resort CSS',
          ],
        },
        {
          title: 'Role locators in DevTools',
          body: 'Accessibility tree exposes roles and names. Inspect → Accessibility. Match what screen readers see.',
          doThis: 'On the-internet.herokuapp.com/login, locate Submit with get_by_role.',
          code: 'page.get_by_role("button", name="Login").click()\npage.get_by_label("Username").fill("tomsmith")\npage.get_by_label("Password").fill("SuperSecretPassword!")',
        },
        {
          title: 'Strict mode and multiple matches',
          body: 'Playwright errors if a locator matches multiple elements — that is a feature. Narrow with name=, exact=True, or filter.',
          doThis: 'Fix a strict mode violation on purpose. Document how you narrowed the locator.',
          tip: 'Never stack //div/div/div XPath — it breaks on every redesign.',
        },
        {
          title: 'Codegen workflow',
          body: 'playwright codegen URL records actions. Use it to discover locators, then rewrite to roles before committing.',
          doThis: 'Run playwright codegen saucedemo.com. Save output, refactor locators, commit clean test.',
          code: 'playwright codegen https://www.saucedemo.com/',
        },
      ],
      checklist: [
        'I can explain locator priority without notes',
        'No XPath in my committed tests',
        'Fixed at least one strict mode error',
        'Refactored codegen output to roles',
      ],
      practice: {
        title: 'Locator lab',
        brief: 'Automate 5 scenarios on the-internet.herokuapp.com using roles first: checkbox, dropdown, dynamic loading, alerts, frames.',
      },
      resources: [
        r('doc', 'Playwright — Locators', 'https://playwright.dev/python/docs/locators', 'EN'),
        r('doc', 'Playwright — Best Practices', 'https://playwright.dev/python/docs/best-practices', 'EN'),
        r('lab', 'The Internet', 'https://the-internet.herokuapp.com/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch7',
      phase: 'B · Playwright Core',
      level: 'intermediate',
      title: 'Actions, waits & assertions',
      minutes: 60,
      durationLabel: 'Week 8',
      overview:
        'Click, fill, select, check, hover, drag — Playwright auto-waits before actions. Pair with web-first expect assertions. Ban time.sleep; learn to wait for URL, text, or network instead.',
      learn: [
        'Common actions: click, fill, press, select_option, check',
        'expect matchers: visible, hidden, enabled, text, url, count',
        'Auto-wait vs explicit expect with timeout',
        'Never use time.sleep in tests',
      ],
      steps: [
        {
          title: 'Actions with intent',
          body: 'fill clears and types. press("Enter") submits forms. check/uncheck for toggles. click only when the element is actionable — Playwright waits.',
          doThis: 'Automate a form on automationexercise.com contact page using fill + press.',
        },
        {
          title: 'Web-first assertions',
          body: 'expect(locator).to_be_visible() retries until timeout. Assertions are waits — use them instead of sleep.',
          doThis: 'Replace any sleep in your tests with an expect on the condition you actually need.',
          code: 'from playwright.sync_api import expect\n\nexpect(page.get_by_text("Thank you")).to_be_visible()\nexpect(page).to_have_url(re.compile(r"/inventory"))\nexpect(page.get_by_role("button", name="Add to cart")).to_be_enabled()',
        },
        {
          title: 'Waiting patterns',
          body: 'wait_for_url, wait_for_load_state("networkidle") sparingly, expect for DOM changes. networkidle is flaky on SPAs — prefer expect.',
          doThis: 'Test dynamic loading on the-internet — assert "Hello World" appears without sleep.',
        },
        {
          title: 'Negative assertions',
          body: 'Assert error messages, disabled buttons, hidden modals. not_to_be_visible() is valid.',
          doThis: 'Add wrong-password test asserting error message text on Sauce Demo.',
        },
      ],
      checklist: [
        'Zero time.sleep in my suite',
        'Using expect for all outcome checks',
        'Dynamic loading test without flake',
        'At least one negative assertion test',
      ],
      practice: {
        title: 'Action drill',
        brief: 'Cover dropdown, checkbox, and JavaScript alert on the-internet in one test file with clear test names.',
      },
      resources: [
        r('doc', 'Playwright — Actions', 'https://playwright.dev/python/docs/input', 'EN'),
        r('doc', 'Playwright — Assertions', 'https://playwright.dev/python/docs/test-assertions', 'EN'),
        r('lab', 'Automation Exercise', 'https://automationexercise.com/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch8',
      phase: 'B · Playwright Core',
      level: 'intermediate',
      title: 'Browser context, pages & auth',
      minutes: 90,
      durationLabel: 'Weeks 9–10',
      overview:
        'Browser → context → page. Contexts isolate cookies and storage. Learn multi-tab flows, storage_state for login once, and basic auth patterns employers ask about in interviews.',
      learn: [
        'Browser, BrowserContext, Page hierarchy',
        'New tab / popup handling',
        'storage_state to reuse authentication',
        'API login + storage_state hybrid setup',
      ],
      steps: [
        {
          title: 'Context isolation',
          body: 'Each context is incognito-like: separate cookies. Tests should not share logged-in state unless intentional.',
          doThis: 'Run two tests — one logged in, one guest — confirm isolation with default fixtures.',
        },
        {
          title: 'Popups and new pages',
          body: 'context.expect_page() waits for popups. Switch focus before asserting on the new page.',
          doThis: 'Automate a link that opens a new tab on the-internet.herokuapp.com/windows.',
          code: 'with context.expect_page() as new_page_info:\n    page.get_by_role("link", name="Click Here").click()\nnew_page = new_page_info.value\nexpect(new_page).to_have_url(re.compile(r"windows"))',
        },
        {
          title: 'Save and reuse auth',
          body: 'Login once via UI or API, save storage_state to auth.json, reuse in tests with browser.new_context(storage_state="auth.json").',
          doThis: 'Create scripts/save_auth.py and a pytest fixture that loads storage_state.',
          tip: 'API login + storage_state is faster and less flaky than UI login every test.',
        },
        {
          title: 'OrangeHRM auth practice',
          body: 'Enterprise apps often need admin vs employee roles. Practice one login path and assert dashboard visibility.',
          doThis: 'Login to opensource-demo.orangehrmlive.com and assert dashboard heading.',
        },
      ],
      checklist: [
        'I understand browser / context / page',
        'Handled at least one popup or new tab',
        'storage_state saved and reused',
        'OrangeHRM or similar auth flow automated',
      ],
      practice: {
        title: 'Auth fixture',
        brief: 'Build a logged_in_page fixture using storage_state. Write 2 tests that skip UI login.',
      },
      resources: [
        r('doc', 'Playwright — Authentication', 'https://playwright.dev/python/docs/auth', 'EN'),
        r('doc', 'Playwright — Browser Contexts', 'https://playwright.dev/python/docs/browser-contexts', 'EN'),
        r('lab', 'OrangeHRM Demo', 'https://opensource-demo.orangehrmlive.com/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-cp-b',
      kind: 'checkpoint',
      phase: 'B · Playwright Core',
      level: 'intermediate',
      title: 'Checkpoint B — Sauce Demo smoke suite',
      minutes: 30,
      durationLabel: 'Gate',
      overview:
        'Deliver a flat (no POM yet) pytest suite against Sauce Demo. Prove locators, actions, assertions, and auth patterns before framework chapters.',
      learn: ['Smoke suite scope', 'Flat structure acceptance criteria'],
      steps: [
        {
          title: 'Pass criteria',
          body: 'Suite lives in tests/. No page objects yet — duplication is OK for now.',
          doThis: 'Run pytest -v and verify all criteria.',
          items: [
            '8–12 tests covering login, inventory, cart, checkout start',
            'Positive and negative login cases',
            'Uses get_by_role / get_by_label — no XPath',
            'Zero time.sleep',
            'All tests green locally headless',
            'README section: how to run tests',
          ],
        },
        {
          title: 'Smoke vs exhaustive',
          body: 'Smoke proves critical paths work. You are not automating every edge case yet.',
          doThis: 'List tests in TESTPLAN.md with one-line purpose each.',
        },
      ],
      checklist: [
        '8–12 green tests committed',
        'TESTPLAN.md documents scope',
        'No POM — flat tests only',
        'Tagged commit checkpoint-b',
      ],
      practice: {
        title: 'Record a demo',
        brief: 'Screen record pytest --headed run + HTML report. Save link or gif for portfolio later.',
      },
      note: 'Framework chapters refactor this suite — keep tests readable.',
    }),

    ch({
      id: 'pw-ch9',
      phase: 'C · Framework',
      level: 'intermediate',
      title: 'pytest like a pro',
      minutes: 60,
      durationLabel: 'Week 11',
      overview:
        'pytest is the runner employers expect with Python. Master fixtures, conftest.py, markers, parametrization, and reporting hooks. Structure tests so failures pinpoint exactly what broke.',
      learn: [
        'conftest.py and fixture scope (function, session)',
        'Parametrize data-driven cases',
        'Markers: smoke, regression, skip',
        'pytest.ini configuration',
      ],
      steps: [
        {
          title: 'conftest.py hierarchy',
          body: 'Shared fixtures live in conftest.py — pytest discovers them automatically. page is from pytest-playwright; add your own base_url, test_users.',
          doThis: 'Create tests/conftest.py with a test_user fixture returning standard_user credentials.',
          code: 'import pytest\n\n@pytest.fixture\ndef test_user():\n    return {"username": "standard_user", "password": "secret_sauce"}',
        },
        {
          title: 'Parametrize',
          body: 'One test function, many data rows — perfect for login negative cases.',
          doThis: 'Parametrize 3 invalid login tuples and assert error message.',
          code: '@pytest.mark.parametrize("user,pwd", [\n    ("", "secret_sauce"),\n    ("standard_user", ""),\n    ("locked_out_user", "secret_sauce"),\n])\ndef test_login_negative(page, user, pwd):\n    ...',
        },
        {
          title: 'Markers and selective runs',
          body: 'Mark smoke tests for fast PR feedback. pytest -m smoke runs subset.',
          doThis: 'Mark 4 tests @pytest.mark.smoke. Run pytest -m smoke.',
          code: '# pytest.ini\n[pytest]\nmarkers =\n    smoke: critical path tests\n    regression: full suite',
        },
        {
          title: 'Readable failures',
          body: 'Name tests test_<feature>_<condition>_<expected>. Use assert messages or expect descriptions.',
          doThis: 'Rename vague tests to story-like names. Re-run and read output clarity.',
        },
      ],
      checklist: [
        'conftest.py with shared fixtures',
        'At least one parametrized test',
        'smoke marker runs subset',
        'pytest.ini committed',
      ],
      practice: {
        title: 'Fixture scope experiment',
        brief: 'Build session-scoped browser fixture vs function-scoped — document tradeoff in README.',
      },
      resources: [
        r('doc', 'pytest Documentation', 'https://docs.pytest.org/en/stable/', 'EN'),
        r('doc', 'pytest — Fixtures', 'https://docs.pytest.org/en/stable/fixture.html', 'EN'),
        r('doc', 'pytest — Parametrize', 'https://docs.pytest.org/en/stable/how-to/parametrize.html', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch10',
      phase: 'C · Framework',
      level: 'intermediate',
      title: 'Page Object Model (POM)',
      minutes: 90,
      durationLabel: 'Weeks 12–13',
      overview:
        'POM hides locators behind user-intent methods. Tests read like scenarios; UI changes fix one file. Refactor Checkpoint B suite into pages/ — this structure is interview mandatory.',
      learn: [
        'Page class per screen with locators + methods',
        'Tests orchestrate pages, never raw selectors',
        'BasePage optional patterns',
        'Folder layout recruiters recognize',
      ],
      steps: [
        {
          title: 'Folder structure',
          body: 'Standard layout below. Adapt names but keep separation clear.',
          doThis: 'Scaffold folders before moving code.',
          code: 'qa-automation-journey/\n├── tests/\n│   ├── conftest.py\n│   ├── test_login.py\n│   └── test_checkout.py\n├── pages/\n│   ├── __init__.py\n│   ├── login_page.py\n│   ├── inventory_page.py\n│   └── cart_page.py\n├── data/\n│   └── users.json\n├── pytest.ini\n└── README.md',
        },
        {
          title: 'LoginPage example',
          body: 'Constructor takes page. Methods: goto(), login(user, pwd), error_message(). Locators are private to the class.',
          doThis: 'Implement LoginPage and refactor one test to use it.',
          code: 'class LoginPage:\n    def __init__(self, page):\n        self.page = page\n        self._username = page.get_by_role("textbox", name="Username")\n        self._password = page.get_by_role("textbox", name="Password")\n        self._login_btn = page.get_by_role("button", name="Login")\n\n    def goto(self):\n        self.page.goto("https://www.saucedemo.com/")\n\n    def login(self, username, password):\n        self._username.fill(username)\n        self._password.fill(password)\n        self._login_btn.click()',
        },
        {
          title: 'Refactor incrementally',
          body: 'One page at a time. Keep tests green after each extraction. Do not big-bang rewrite.',
          doThis: 'Move inventory and cart flows to InventoryPage and CartPage.',
        },
        {
          title: 'Interview talking points',
          body: 'Be ready to explain: why POM, where locators live, how you avoid god objects, when composition beats inheritance.',
          doThis: 'Add ARCHITECTURE.md with 10 sentences on your POM decisions.',
        },
      ],
      checklist: [
        'pages/ with Login, Inventory, Cart',
        'Tests use page objects only — no raw locators in tests',
        'ARCHITECTURE.md written',
        'Checkpoint B tests still green',
      ],
      practice: {
        title: 'Full POM refactor',
        brief: 'Refactor entire Checkpoint B suite to POM. Delete duplicated locator strings from tests.',
      },
      resources: [
        r('article', 'Automation Panda — pytest + Playwright', 'https://automationpanda.com/2023/11/15/playwright-python-tutorial-interactions/', 'EN'),
        r('doc', 'Playwright — Page Object Model', 'https://playwright.dev/python/docs/pom', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch11',
      phase: 'C · Framework',
      level: 'intermediate',
      title: 'Data-driven & config',
      minutes: 60,
      durationLabel: 'Week 14',
      overview:
        'Separate data from logic. JSON/YAML test data, environment configs for staging vs prod-like URLs, and secrets via env vars — never hardcoded passwords in Git.',
      learn: [
        'data/ folder for users, products, URLs',
        'config.json + os.environ for BASE_URL',
        'python-dotenv for local secrets',
        'Parametrize from file data',
      ],
      steps: [
        {
          title: 'External test data',
          body: 'users.json drives login parametrization. Adding a user does not require code changes.',
          doThis: 'Load users from data/users.json in conftest fixture.',
          code: 'import json\nfrom pathlib import Path\n\nDATA = Path(__file__).parent.parent / "data"\n\ndef load_users():\n    with open(DATA / "users.json") as f:\n        return json.load(f)',
        },
        {
          title: 'Environment config',
          body: 'BASE_URL defaults to Sauce Demo but switches via env for forked environments.',
          doThis: 'Add config.py reading os.getenv("BASE_URL", "https://www.saucedemo.com/").',
        },
        {
          title: 'Secrets discipline',
          body: '.env locally, GitHub Secrets in CI. Never commit real passwords — demo sites are exception.',
          doThis: 'Add .env.example with placeholder keys. Confirm .env in .gitignore.',
        },
      ],
      checklist: [
        'data/users.json drives at least 2 tests',
        'BASE_URL configurable via env',
        '.env.example committed, .env ignored',
      ],
      practice: {
        title: 'Data-driven checkout',
        brief: 'Parametrize checkout with 3 cart combinations loaded from data/carts.json.',
      },
      resources: [
        r('doc', 'python-dotenv', 'https://pypi.org/project/python-dotenv/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch12',
      phase: 'C · Framework',
      level: 'intermediate',
      title: 'Debugging & reporting',
      minutes: 60,
      durationLabel: 'Week 15',
      overview:
        'Green tests are easy. Debugging failures is the job. Playwright trace, screenshot, video on failure; pytest-html or Allure for reports; learn to read a stack trace without panic.',
      learn: [
        'Trace viewer on retry/failure',
        'Screenshot and video config in pytest.ini or conftest',
        'pytest --html report or Allure',
        'Systematic flake reproduction',
      ],
      steps: [
        {
          title: 'Trace on first retry',
          body: 'Configure trace="on-first-retry" or "retain-on-failure". Open trace.playwright.dev and step timeline.',
          doThis: 'Force a failure. Open trace zip. Find last good action.',
          code: '# conftest.py hook or pytest.ini via --tracing\n@pytest.fixture(scope="session")\ndef browser_context_args():\n    return {"record_video_dir": "test-results/videos/"}',
        },
        {
          title: 'HTML report',
          body: 'pytest-html gives quick shareable artifacts for portfolio and CI uploads.',
          doThis: 'pip install pytest-html. Run pytest --html=report.html --self-contained-html.',
        },
        {
          title: 'Flake hunt protocol',
          body: 'Re-run failed test 10x locally. If intermittent, fix wait/locator/data — never merge flaky tests.',
          doThis: 'Document one flake you fixed: cause, fix, prevention rule.',
          tip: 'Parallel runs expose race conditions — fix before CI shards.',
        },
      ],
      checklist: [
        'Trace opened for at least one failure',
        'HTML report generated',
        'Video or screenshot on failure configured',
        'Flake fix documented',
      ],
      practice: {
        title: 'Break and fix',
        brief: 'Break a locator on purpose, debug with trace, fix, attach before/after notes in PR description style.',
      },
      resources: [
        r('doc', 'Playwright — Trace Viewer', 'https://playwright.dev/python/docs/trace-viewer', 'EN'),
        r('doc', 'pytest-html', 'https://pytest-html.readthedocs.io/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-cp-c',
      kind: 'checkpoint',
      phase: 'C · Framework',
      level: 'intermediate',
      title: 'Checkpoint C — mini-framework refactor',
      minutes: 30,
      durationLabel: 'Gate',
      overview:
        'Your repo should look like a junior automation engineer’s project: POM, pytest fixtures, config, reports, documented architecture.',
      learn: ['Framework checkpoint criteria'],
      steps: [
        {
          title: 'Pass criteria',
          body: 'Compare repo to a job posting’s “nice to have” list.',
          doThis: 'Verify every item before Phase D.',
          items: [
            'pages/ POM covering Sauce Demo flows',
            'conftest.py fixtures (users, config, optional auth)',
            'data/ driven tests + env-based BASE_URL',
            'pytest.ini with markers',
            'HTML or Allure report artifact',
            'ARCHITECTURE.md explains structure',
            'Full suite green headless locally',
          ],
        },
      ],
      checklist: [
        'All Checkpoint C criteria met',
        'Tag v0.3-phase-c on GitHub',
        'Can explain folder structure in 2 minutes aloud',
      ],
      practice: {
        title: 'Mock interview',
        brief: 'Record yourself walking through repo structure for 3 minutes. Watch once and fix unclear explanations.',
      },
    }),

    ch({
      id: 'pw-ch13',
      phase: 'D · Job Skills',
      level: 'advanced',
      title: 'API testing with Playwright + pytest',
      minutes: 90,
      durationLabel: 'Weeks 16–17',
      overview:
        'UI alone is not enough. Playwright’s APIRequestContext hits REST endpoints fast. Combine API setup with UI assertions — create data via API, verify in browser. Practice on JSONPlaceholder, reqres, and httpbin.',
      learn: [
        'APIRequestContext — GET, POST, PUT, DELETE',
        'Status codes, JSON body asserts',
        'Hybrid: API seed + UI verify',
        'Contract basics — schema spot checks',
      ],
      steps: [
        {
          title: 'First API test',
          body: 'Use playwright.request.new_context() or the built-in request fixture pattern.',
          doThis: 'GET jsonplaceholder posts/1 — assert status 200 and userId field.',
          code: 'def test_get_post(api_request_context):\n    response = api_request_context.get(\n        "https://jsonplaceholder.typicode.com/posts/1"\n    )\n    assert response.status == 200\n    data = response.json()\n    assert data["id"] == 1\n    assert "title" in data',
        },
        {
          title: 'POST and validation',
          body: 'Create resource, assert 201/200, validate response shape. Negative: assert 400/404 on bad input.',
          doThis: 'POST to jsonplaceholder /posts with body. Assert id returned.',
        },
        {
          title: 'reqres and httpbin drills',
          body: 'reqres.in simulates auth headers and pagination. httpbin echoes requests for debugging.',
          doThis: 'Test reqres login success and failure. Test httpbin basic auth.',
          items: [
            'JSONPlaceholder — https://jsonplaceholder.typicode.com/',
            'Reqres — https://reqres.in/',
            'httpbin — https://httpbin.org/',
          ],
        },
        {
          title: 'Hybrid pattern',
          body: 'API creates user or product; UI test logs in and sees it. Faster and stabler than UI-only setup.',
          doThis: 'Sketch hybrid flow for your capstone even if demo site is UI-only — document the pattern.',
        },
      ],
      checklist: [
        '5+ API tests with status and JSON asserts',
        'Tested GET, POST, and one negative case',
        'Documented hybrid API+UI pattern',
      ],
      practice: {
        title: 'API mini-suite',
        brief: 'Create tests/api/ with CRUD-ish tests against JSONPlaceholder. Run with pytest tests/api/.',
      },
      resources: [
        r('doc', 'Playwright — API Testing', 'https://playwright.dev/python/docs/api-testing', 'EN'),
        r('lab', 'JSONPlaceholder', 'https://jsonplaceholder.typicode.com/', 'EN'),
        r('lab', 'Reqres', 'https://reqres.in/', 'EN'),
        r('lab', 'httpbin', 'https://httpbin.org/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch14',
      phase: 'D · Job Skills',
      level: 'advanced',
      title: 'CI/CD with GitHub Actions',
      minutes: 60,
      durationLabel: 'Week 18',
      overview:
        'Employers want green CI badges. Run pytest + Playwright on every push/PR: install deps, browsers, cache pip, upload artifacts on failure. Main branch protected with required checks.',
      learn: [
        'GitHub Actions workflow YAML',
        'playwright install --with-deps in CI',
        'Artifacts: report, trace, screenshot',
        'Secrets and env in workflows',
      ],
      steps: [
        {
          title: 'Basic workflow',
          body: 'Trigger on push and pull_request. Use ubuntu-latest. Python setup action + pip cache.',
          doThis: 'Add .github/workflows/tests.yml. Push and watch Actions tab.',
          code: 'name: Playwright Tests\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: "3.12"\n      - run: pip install -r requirements.txt\n      - run: playwright install --with-deps chromium\n      - run: pytest --html=report.html --self-contained-html\n      - uses: actions/upload-artifact@v4\n        if: failure()\n        with:\n          name: test-report\n          path: report.html',
        },
        {
          title: 'Requirements file',
          body: 'Pin major versions in requirements.txt for reproducible CI.',
          doThis: 'pip freeze > requirements.txt (curate — keep it readable).',
        },
        {
          title: 'Badge and branch protection',
          body: 'Add CI badge to README. Enable required status check on main if available.',
          doThis: 'README badge linking to Actions workflow. Screenshot green run.',
        },
      ],
      checklist: [
        'CI workflow runs on push',
        'Playwright browsers install in CI',
        'Failure uploads report artifact',
        'README shows CI badge',
      ],
      practice: {
        title: 'Break CI on purpose',
        brief: 'Push failing test on branch. Confirm PR shows red X. Revert and confirm green.',
      },
      resources: [
        r('doc', 'GitHub Actions — Quickstart', 'https://docs.github.com/en/actions/quickstart', 'EN'),
        r('doc', 'Playwright — CI', 'https://playwright.dev/python/docs/ci', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch15',
      phase: 'D · Job Skills',
      level: 'advanced',
      title: 'Advanced Playwright patterns',
      minutes: 90,
      durationLabel: 'Weeks 19–20',
      overview:
        'Level up: parallel execution, visual regression basics, network mocking, mobile viewports, and file download/upload. Know when to use — and when to skip — advanced patterns in interviews.',
      learn: [
        'pytest-xdist parallel runs',
        'page.route mock API responses',
        'Mobile viewport emulation',
        'Download/upload handlers',
        'to_have_screenshot when appropriate',
      ],
      steps: [
        {
          title: 'Parallel with pytest-xdist',
          body: 'pytest -n auto speeds local and CI runs. Tests must be isolated — no shared state.',
          doThis: 'pip install pytest-xdist. Run pytest -n 4. Fix any shared-state failures.',
        },
        {
          title: 'Network mocking',
          body: 'page.route intercepts requests — stub slow or flaky third-party APIs.',
          doThis: 'Mock a JSON response and assert UI renders mocked data.',
          code: 'def handle(route):\n    route.fulfill(status=200, body=\'{"name": "mock"}\')\n\npage.route("**/api/user", handle)',
        },
        {
          title: 'Mobile viewport',
          body: 'context.new_page with viewport iPhone size. Smoke responsive layouts.',
          doThis: 'Run one Sauce Demo test at 390x844 viewport.',
        },
        {
          title: 'Visual regression caution',
          body: 'to_have_screenshot catches visual drift but needs stable baselines and review discipline.',
          doThis: 'Try one screenshot assertion on static page. Document flakiness risks.',
        },
      ],
      checklist: [
        'Parallel run succeeded',
        'One network mock test',
        'Mobile viewport test',
        'Can explain when NOT to use visual regression',
      ],
      practice: {
        title: 'Advanced pick-one',
        brief: 'Deep-dive one pattern (mock, mobile, or download) on automationexercise.com full flow.',
      },
      resources: [
        r('doc', 'Playwright — Network', 'https://playwright.dev/python/docs/network', 'EN'),
        r('doc', 'Playwright — Emulation', 'https://playwright.dev/python/docs/emulation', 'EN'),
        r('doc', 'Playwright — Screenshots', 'https://playwright.dev/python/docs/screenshots', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch16',
      phase: 'D · Job Skills',
      level: 'advanced',
      title: 'Soft skills for QA Automation roles',
      minutes: 60,
      durationLabel: 'parallel weeks 18–20',
      overview:
        'Code gets interviews; communication gets offers. Practice explaining tradeoffs, writing bug reports engineers respect, estimating automation effort, and whiteboarding a test strategy.',
      learn: [
        'Explain framework choices without buzzwords',
        'Bug report and RCA communication',
        'Test strategy one-pager',
        'STAR stories for behavioral rounds',
      ],
      steps: [
        {
          title: 'Explain your stack in 60 seconds',
          body: '“Python pytest Playwright POM GitHub Actions” — then why each, and one tradeoff you accept.',
          doThis: 'Write and rehearse a 60-second intro. Record audio.',
        },
        {
          title: 'Tradeoff stories',
          body: 'Prepare answers: role locators vs CSS, UI vs API setup, smoke vs full regression runtime, when not to automate.',
          doThis: 'Document 5 tradeoff Q&A pairs in INTERVIEW.md.',
        },
        {
          title: 'Test strategy exercise',
          body: 'Given a checkout feature, outline risks, pyramid layers, what to automate first, CI cadence.',
          doThis: 'One-page test strategy for Sauce Demo checkout — pretend you join the team tomorrow.',
        },
        {
          title: 'Behavioral STAR',
          body: 'Situation, Task, Action, Result — for conflict, deadline, flake crisis, learning new tool.',
          doThis: 'Write 3 STAR stories from this learning journey (even if hypothetical team context).',
        },
      ],
      checklist: [
        '60-second stack pitch rehearsed',
        'INTERVIEW.md with tradeoffs and STAR',
        'Test strategy one-pager complete',
      ],
      practice: {
        title: 'Peer mock',
        brief: 'Pair with a friend: 15 min “explain your repo” + 15 min “test this login” whiteboard.',
      },
      resources: [
        r('community', 'Ministry of Testing', 'https://www.ministryoftesting.com/', 'EN'),
        r('article', 'Test Pyramid — Martin Fowler', 'https://martinfowler.com/articles/practical-test-pyramid.html', 'EN'),
      ],
    }),

    ch({
      id: 'pw-cp-d',
      kind: 'checkpoint',
      phase: 'D · Job Skills',
      level: 'advanced',
      title: 'Checkpoint D — CI-green hybrid suite',
      minutes: 30,
      durationLabel: 'Gate',
      overview:
        'Phase D proof: UI + API tests, GitHub Actions green on main, artifacts on failure, and you can demo it live.',
      learn: ['Job-skills gate criteria'],
      steps: [
        {
          title: 'Pass criteria',
          body: 'This is the “show employers” milestone before capstone polish.',
          doThis: 'Verify live on GitHub.',
          items: [
            'tests/ UI suite (POM) — 15+ tests',
            'tests/api/ — 5+ API tests',
            'At least one documented hybrid or mock pattern',
            'GitHub Actions green on main branch',
            'Failure uploads report or trace artifact',
            'INTERVIEW.md or README interview section started',
          ],
        },
      ],
      checklist: [
        'All Checkpoint D criteria verified',
        'Shared green CI screenshot in repo docs/',
        'Can demo CI run in under 5 minutes',
      ],
      practice: {
        title: 'Employer smoke demo',
        brief: 'Practice: clone fresh → pip install → playwright install → pytest — narrate each step.',
      },
    }),

    ch({
      id: 'pw-ch17',
      phase: 'E · Portfolio',
      level: 'advanced',
      title: 'Capstone portfolio project',
      minutes: 120,
      durationLabel: 'Weeks 21–23',
      overview:
        'Build a flagship public repo — not tutorial homework. Pick a real demo site (Sauce Demo extended, Automation Exercise, or OrangeHRM), deliver POM framework, API tests, CI, docs, and a short demo video. This is your LinkedIn anchor.',
      learn: [
        'Capstone scope control — depth over breadth',
        'Professional README and docs/',
        'Demo video or GIF',
        'Portfolio narrative for recruiters',
      ],
      steps: [
        {
          title: 'Choose scope',
          body: 'One primary app, 20–30 meaningful tests, API layer, CI green. Add nice-to-haves only after core is solid.',
          doThis: 'Write CAPSTONE.md with scope, out-of-scope, and success metrics.',
          items: [
            'Option A — Sauce Demo: login, inventory, cart, checkout, API mocks',
            'Option B — Automation Exercise: registration, products, cart',
            'Option C — OrangeHRM: auth, admin module smoke',
          ],
        },
        {
          title: 'Polish README',
          body: 'Hero section: title, badge, stack icons, 30-second pitch, screenshot, quick start, architecture diagram (ASCII ok).',
          doThis: 'README passes the “recruiter 30-second scan” test.',
        },
        {
          title: 'docs/ folder',
          body: 'TEST_STRATEGY.md, ARCHITECTURE.md, CONTRIBUTING.md (even solo — shows professionalism).',
          doThis: 'Link docs from README. Mention pytest markers and how to run smoke only.',
        },
        {
          title: 'Demo artifact',
          body: '2–3 minute screen recording: clone, install, run smoke, open report, show CI.',
          doThis: 'Upload unlisted YouTube or Loom. Link from README.',
        },
      ],
      checklist: [
        'CAPSTONE.md scope agreed',
        '20–30 tests with clear naming',
        'README with badge, screenshot, video link',
        'docs/ folder complete',
      ],
      practice: {
        title: 'Ship v1.0.0',
        brief: 'GitHub Release v1.0.0 with changelog. Pin repo on GitHub profile.',
      },
      resources: [
        r('lab', 'Automation Exercise', 'https://automationexercise.com/', 'EN'),
        r('lab', 'Sauce Demo', 'https://www.saucedemo.com/', 'EN'),
        r('lab', 'OrangeHRM Demo', 'https://opensource-demo.orangehrmlive.com/', 'EN'),
      ],
    }),

    ch({
      id: 'pw-ch18',
      phase: 'E · Portfolio',
      level: 'advanced',
      title: 'Job-ready polish',
      minutes: 60,
      durationLabel: 'Week 24',
      overview:
        'Final mile: LinkedIn and resume alignment, GitHub profile cleanup, apply rhythm, and continued learning plan. Job-ready is a launch point, not a finish line.',
      learn: [
        'Resume bullets that quantify automation work',
        'LinkedIn project section and headline',
        'Application rhythm and tracking',
        'Post-offer learning backlog',
      ],
      steps: [
        {
          title: 'Resume project bullet',
          body: 'Action + stack + outcome. “Built pytest-Playwright POM framework with 25 E2E tests and GitHub Actions CI; reduced manual regression from X hours to Y minutes.”',
          doThis: 'Add 2–3 bullets pointing to your capstone repo URL.',
        },
        {
          title: 'LinkedIn alignment',
          body: 'Headline: QA Automation Engineer | Python | Playwright | pytest. Featured section: capstone repo + demo video.',
          doThis: 'Update headline and add project with screenshot.',
        },
        {
          title: 'GitHub profile',
          body: 'Pin capstone repo. Consistent commit history. Remove half-finished junk or archive it.',
          doThis: 'Profile README optional but powerful — link roadmap completion date.',
        },
        {
          title: 'Apply rhythm',
          body: 'Track applications: company, date, role, follow-up. Quality applications beat spray-and-pray.',
          doThis: 'Set weekly apply target (e.g. 5 tailored applications). Start this week.',
        },
      ],
      checklist: [
        'Resume lists capstone with metrics',
        'LinkedIn project featured',
        'GitHub pin set',
        'Application tracker started',
      ],
      practice: {
        title: 'First week applying',
        brief: 'Send 5 applications with customized cover line referencing your public repo.',
      },
      note: 'Keep learning: explore mobile real devices, contract testing, or performance — after offers or alongside apps.',
    }),

    ch({
      id: 'pw-timeline',
      kind: 'guide',
      phase: 'Reference',
      level: 'beginner',
      title: 'Master timeline, practice sites & weekly rhythm',
      minutes: 25,
      overview:
        'Reference chapter: week-by-week map, practice site URLs, core resource stack, first 7 days checklist, and glossary. Return here when you feel lost.',
      learn: [
        '24-week phase map',
        'Practice site catalog',
        'Weekly study rhythm',
        'Automation glossary',
      ],
      steps: [
        {
          title: 'Week-by-week timeline',
          body: 'Approximate map — adjust pace using the Start guide.',
          items: [
            'Weeks 1–3 — Python for automation (Phase A)',
            'Week 4 — Git + manual QA lite',
            'Week 5 — Checkpoint A',
            'Week 6 — Playwright first contact',
            'Week 7 — Locators (most important skill)',
            'Week 8 — Actions, waits, assertions',
            'Weeks 9–10 — Context, pages, auth',
            'Week 10 — Checkpoint B smoke suite',
            'Week 11 — pytest pro',
            'Weeks 12–13 — Page Object Model',
            'Week 14 — Data-driven & config',
            'Week 15 — Debugging & reporting',
            'Week 15 — Checkpoint C framework',
            'Weeks 16–17 — API testing',
            'Week 18 — GitHub Actions CI',
            'Weeks 19–20 — Advanced patterns + soft skills',
            'Week 20 — Checkpoint D hybrid CI',
            'Weeks 21–23 — Capstone portfolio',
            'Week 24 — Job-ready polish',
          ],
        },
        {
          title: 'Practice sites',
          body: 'Free public targets for UI and API drills.',
          items: [
            'Sauce Demo — https://www.saucedemo.com/',
            'The Internet — https://the-internet.herokuapp.com/',
            'Automation Exercise — https://automationexercise.com/',
            'OrangeHRM Demo — https://opensource-demo.orangehrmlive.com/',
            'JSONPlaceholder — https://jsonplaceholder.typicode.com/',
            'Reqres — https://reqres.in/',
            'httpbin — https://httpbin.org/',
            'Playwright TodoMVC — https://demo.playwright.dev/todomvc',
          ],
        },
        {
          title: 'Core resource stack',
          body: 'Bookmark these five — they cover 90% of questions.',
          items: [
            'Playwright Python docs — https://playwright.dev/python/docs/intro',
            'pytest docs — https://docs.pytest.org/en/stable/',
            'Automation Panda tutorials — https://automationpanda.com/tag/playwright/',
            'Python official tutorial — https://docs.python.org/3/tutorial/',
            'GitHub Actions + Playwright CI — https://playwright.dev/python/docs/ci',
          ],
        },
        {
          title: 'First 7 days',
          body: 'If you are overwhelmed, do only this:',
          doThis: 'Day 1–7 checklist below. Ignore everything else until Day 8.',
          items: [
            'Day 1 — Install Python, editor, Git; create GitHub repo',
            'Day 2 — Terminal practice; hello.py committed',
            'Day 3 — Variables, loops, functions exercises',
            'Day 4 — JSON file read script',
            'Day 5 — venv + pip install requests',
            'Day 6 — Git branches + .gitignore + README',
            'Day 7 — Manual test cases for Sauce Demo login',
          ],
        },
        {
          title: 'Glossary',
          body: 'Terms you will hear in interviews.',
          items: [
            'E2E — End-to-end test through UI like a user',
            'POM — Page Object Model; locators hidden in page classes',
            'Fixture — pytest setup/teardown hook',
            'Smoke — Fast critical-path suite',
            'Flake — Intermittent failure without product bug',
            'Headless — Browser without visible window (CI default)',
            'storage_state — Saved cookies/localStorage for auth reuse',
            'Hybrid test — API setup + UI assertion',
          ],
        },
      ],
      checklist: [
        'Timeline saved or printed',
        'Practice sites bookmarked',
        'First 7 days plan scheduled',
      ],
      practice: {
        title: 'Weekly rhythm template',
        brief: 'Every Sunday: plan 3 goals. Every study day: 10 min review, 60–90 min do, 10 min commit. Every checkpoint week: mock demo.',
      },
    }),
  ],
  resources: {
    docs: [
      { name: 'Playwright Python', url: 'https://playwright.dev/python/docs/intro' },
      { name: 'pytest', url: 'https://docs.pytest.org/en/stable/' },
      { name: 'Python Tutorial', url: 'https://docs.python.org/3/tutorial/' },
      { name: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
      { name: 'Playwright CI Guide', url: 'https://playwright.dev/python/docs/ci' },
    ],
    tools: [
      'Python 3.11+',
      'VS Code or Cursor + Python extension',
      'Git + GitHub',
      'pytest + pytest-playwright',
      'pytest-html / Allure',
      'pytest-xdist',
      'Playwright Trace Viewer',
      'GitHub Actions',
    ],
    books: [
      'Automate the Boring Stuff with Python — https://automatetheboringstuff.com/',
      'Official Playwright Python docs (primary reference)',
    ],
    practice: [
      'https://www.saucedemo.com/',
      'https://the-internet.herokuapp.com/',
      'https://automationexercise.com/',
      'https://opensource-demo.orangehrmlive.com/',
      'https://jsonplaceholder.typicode.com/',
      'https://reqres.in/',
      'https://httpbin.org/',
      'https://demo.playwright.dev/todomvc',
    ],
    videos: [
      { name: 'Playwright Dev YouTube', url: 'https://www.youtube.com/@Playwrightdev' },
      { name: 'freeCodeCamp Python', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
      { name: 'Automation Panda — Playwright Python', url: 'https://automationpanda.com/2023/11/08/playwright-python-tutorial-an-introduction/' },
    ],
  },
}
