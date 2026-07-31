import { ch } from '../helpers'

export const automationManuals = [
  {
    id: 'test-automation',
    title: 'Test Automation',
    tagline: 'Why we automate, what to automate, and how to think like an engineer.',
    category: 'automation',
    accent: '#0B6E4F',
    cover: 'covers/test-automation-cover.png',
    duration: '4–6 weeks',
    levelSpan: 'Beginner → Pro',
    who: 'Anyone starting QA automation with zero background.',
    outcomes: [
      'Explain the test pyramid and choose the right layer',
      'Write maintainable automated checks with clear intent',
      'Design a stable automation strategy for a real product',
    ],
    chapters: [
      ch({
        id: 'ta-mindset',
        level: 'beginner',
        title: 'Testing vs automation mindset',
        minutes: 25,
        overview:
          'Manual testing explores. Automation repeats certainty. This chapter builds the judgment to know which tool to pick — and why “automate everything” is a trap that burns teams.',
        learn: [
          'The job of testing vs the job of automation',
          'When automation pays for itself',
          'How to talk about risk without jargon',
        ],
        steps: [
          {
            title: 'Separate discovery from repetition',
            body: 'Exploration finds bugs and questions. Automation locks in answers you already trust. If you automate while still discovering, you freeze the wrong behavior.',
            doThis: 'Write two columns: “I still need to learn…” and “I need this checked every commit.” Move items ruthlessly.',
            tip: 'If a flow changes weekly, automate the stable core — not the fashion.',
          },
          {
            title: 'Cost of a check',
            body: 'Every automated check has write cost, wait cost, and flake cost. UI checks are the most expensive. Prefer fast feedback closer to the code when you can.',
            doThis: 'Pick one product feature. List 5 checks. Label each Unit / API / UI. Defend one label out loud.',
          },
          {
            title: 'Define “done” for an automated test',
            body: 'A good test fails for the right reason, reads like a story, and leaves an artifact (log, screenshot, trace) when it fails.',
            doThis: 'Write a one-sentence acceptance for your first future test: “Given… when… then…”',
          },
        ],
        checklist: [
          'I can explain testing vs automation to a non-engineer',
          'I have a risk list for one feature',
          'I know which layer my first check belongs to',
        ],
        practice: {
          title: 'Risk map',
          brief: 'For a demo login page, list 8 risks. Circle the 3 worth automating first. Share why the other 5 wait.',
        },
        links: [
          { name: 'Ministry of Testing', url: 'https://www.ministryoftesting.com/', kind: 'community' },
          { name: 'Practical Test Pyramid (Fowler)', url: 'https://martinfowler.com/articles/practical-test-pyramid.html', kind: 'article' },
        ],
        citations: [
          { name: 'Crispin & Gregory — Agile Testing', url: 'https://agiletester.ca/' },
        ],
      }),
      ch({
        id: 'ta-pyramid',
        level: 'beginner',
        title: 'The test pyramid in practice',
        minutes: 30,
        overview:
          'The pyramid is a budget. Most checks should be fast and close to logic. A few UI journeys prove the seams. This chapter turns the diagram into daily decisions.',
        learn: ['Unit, integration, UI tradeoffs', 'How to spot duplicate coverage', 'Smoke vs deep suites'],
        steps: [
          {
            title: 'Draw your real pyramid',
            body: 'Ideal pyramids are rare. Start with what you have, then rebalance. Count tests by layer and by runtime.',
            doThis: 'Sketch three layers. Estimate count and minutes for each. Circle the top-heavy parts.',
          },
          {
            title: 'Kill vanity coverage',
            body: 'A 200-test UI suite that duplicates API checks wastes CI. Prefer one clear owner per risk.',
            doThis: 'Find two tests that assert the same thing. Delete or demote one on paper.',
            tip: 'Coverage % without risk context is a vanity metric.',
          },
          {
            title: 'Smoke pack',
            body: 'A 5–10 minute smoke suite should prove “the product boots and money paths work.” Deep suites run less often or in parallel shards.',
            doThis: 'Name 5 smoke scenarios for an e-commerce site.',
          },
        ],
        checklist: ['I can defend a pyramid for my product', 'I drafted a smoke pack', 'I know what NOT to put in UI'],
        practice: { title: 'Pyramid memo', brief: 'One page: current pyramid, ideal pyramid, 3 moves this month.' },
        links: [{ name: 'Google Testing Blog', url: 'https://testing.googleblog.com/', kind: 'blog' }],
        citations: [{ name: 'Fowler — Test Pyramid', url: 'https://martinfowler.com/bliki/TestPyramid.html' }],
      }),
      ch({
        id: 'ta-selectors',
        level: 'beginner',
        title: 'Selectors, the DOM, and stable locators',
        minutes: 35,
        overview:
          'Flaky tests often start with brittle locators. Learn to read the DOM, prefer roles and test IDs, and treat selectors as product contracts.',
        learn: ['DOM basics for testers', 'Role / label / test-id hierarchy', 'Why XPath spaghetti dies'],
        steps: [
          {
            title: 'Tour DevTools',
            body: 'Elements, Console, Network. You will live here. Practice selecting nodes and reading accessibility names.',
            doThis: 'Open any form. Find the accessible name of the submit button in DevTools.',
          },
          {
            title: 'Locator preference order',
            body: 'Prefer getByRole / label text → test id → CSS → XPath last. User-facing queries survive redesigns better.',
            doThis: 'Rewrite three CSS selectors as role or test-id queries on paper.',
            tip: 'Ask eng for data-testid on critical controls — it’s a feature, not a cheat.',
          },
          {
            title: 'Assert outcomes, not pixels',
            body: 'Assert URL, text, enabled state, API response — not “div.x is red” unless visual risk is the point.',
            doThis: 'For a login success, write 2 good asserts and 1 bad assert.',
          },
        ],
        checklist: ['I can find roles in DevTools', 'I have a locator style rule', 'I know when test ids are OK'],
        practice: {
          title: 'Locator lab',
          brief: 'On the-internet.herokuapp.com, list locators for 5 controls using roles first.',
        },
        links: [
          { name: 'The Internet (practice)', url: 'https://the-internet.herokuapp.com/', kind: 'lab' },
          { name: 'MDN — Accessibility', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility', kind: 'doc' },
        ],
        citations: [],
      }),
      ch({
        id: 'ta-first-script',
        level: 'beginner',
        title: 'Your first automated script',
        minutes: 40,
        overview:
          'Ship the loop: open → act → assert → see it fail → see it pass. Clean structure comes after the dopamine of green.',
        learn: ['Install a runner', 'Write one happy path', 'Read a failure calmly'],
        steps: [
          {
            title: 'Pick a stack for this week',
            body: 'Playwright or Cypress are both fine starts. Commit to one for 7 days so tool-hopping doesn’t steal learning.',
            doThis: 'Install one tool. Run their sample test. Screenshot the green result.',
          },
          {
            title: 'Automate login happy path',
            body: 'Visit, type, click, assert landing. Keep it ugly but clear. Names matter more than cleverness.',
            doThis: 'Automate Sauce Demo or a public demo login. Commit the file.',
          },
          {
            title: 'Break it on purpose',
            body: 'Change an assertion so it fails. Read the error. Fix. This trains debugging muscle.',
            doThis: 'Fail → read → fix → note what the error taught you in 2 sentences.',
          },
        ],
        checklist: ['Green test in CI or local', 'I can explain my test to a friend', 'I saved a failure artifact'],
        practice: { title: 'Happy path + one negative', brief: 'Add wrong-password assert. Keep both tests isolated.' },
        links: [
          { name: 'Sauce Demo', url: 'https://www.saucedemo.com/', kind: 'lab' },
          { name: 'Playwright intro', url: 'https://playwright.dev/docs/intro', kind: 'doc' },
        ],
        citations: [],
      }),
      ch({
        id: 'ta-structure',
        level: 'intermediate',
        title: 'Page objects, data, and waits',
        minutes: 45,
        overview:
          'Structure is kindness to future-you. Hide selectors behind intent, seed data via API, and wait for conditions — never sleep.',
        learn: ['POM / screenplay ideas', 'Fixture data', 'Deterministic waits'],
        steps: [
          {
            title: 'Extract a page object',
            body: 'Methods named like user intent: loginAs(user), addItem(name). Selectors live in one place.',
            doThis: 'Refactor your login test into a LoginPage with two methods.',
          },
          {
            title: 'Data without shared pollution',
            body: 'Unique emails, API create/delete, or transactional resets. Shared “admin” users create ghosts.',
            doThis: 'Generate a unique user per run (timestamp or uuid).',
            tip: 'Prefer API setup + UI assert for speed.',
          },
          {
            title: 'Ban hard sleeps',
            body: 'Wait for network idle, element visible, or response. Sleeps hide races until CI load exposes them.',
            doThis: 'Find any waitForTimeout/sleep. Replace with a condition wait.',
          },
        ],
        checklist: ['POM for one flow', 'Unique test data', 'Zero hard sleeps in my suite'],
        practice: { title: 'Stabilize a flake', brief: 'Reproduce a flake 5 times. Fix root cause. Document it.' },
        links: [{ name: 'Playwright — locators', url: 'https://playwright.dev/docs/locators', kind: 'doc' }],
        citations: [{ name: 'xUnit Test Patterns — Meszaros', url: 'http://xunitpatterns.com/' }],
      }),
      ch({
        id: 'ta-ci',
        level: 'intermediate',
        title: 'CI, artifacts, and ownership',
        minutes: 40,
        overview:
          'Tests that only run on your laptop are hobbies. Wire CI, fail loud with traces/videos, and assign owners to red builds.',
        learn: ['PR checks', 'Artifacts', 'Flake budgets'],
        steps: [
          {
            title: 'Run on every PR',
            body: 'GitHub Actions (or similar) on pull_request. Keep smoke fast so people don’t skip.',
            doThis: 'Add a workflow that runs your suite and uploads artifacts on failure.',
          },
          {
            title: 'Own the red',
            body: 'Dashboards without owners are wallpaper. Define who triages within 24h.',
            doThis: 'Write a 5-line “red build ritual” for your team (even if the team is just you).',
          },
        ],
        checklist: ['CI green on main', 'Artifact on fail', 'Triage ritual written'],
        practice: { title: 'Actions pipeline', brief: 'Ship a workflow + README section “How to debug CI fails.”' },
        links: [{ name: 'GitHub Actions', url: 'https://docs.github.com/en/actions', kind: 'doc' }],
        citations: [],
      }),
      ch({
        id: 'ta-strategy',
        level: 'advanced',
        title: 'Risk-based strategy & framework design',
        minutes: 50,
        overview:
          'Pro craft is judgment under constraints. Cover revenue and trust paths, design frameworks teams can extend, and mentor standards.',
        learn: ['Risk-based selection', 'Multi-layer strategy', 'Standards & mentoring'],
        steps: [
          {
            title: 'Write the strategy one-pager',
            body: 'Goals, layers, smoke vs deep, flake budget, ownership, tools. One page beats a wiki novel.',
            doThis: 'Draft the one-pager for a fictional checkout product.',
          },
          {
            title: 'Framework for humans',
            body: 'Helpers, env configs, secrets handling, plugins. Optimize for onboarding time — not clever abstractions.',
            doThis: 'List 5 “golden path” docs a new hire needs on day 1.',
          },
        ],
        checklist: ['Strategy one-pager', 'Flake budget defined', 'Onboarding checklist'],
        practice: { title: 'Defend tradeoffs', brief: 'Present strategy to a friend. They attack it. Revise.' },
        links: [{ name: 'Ministry of Testing — automation', url: 'https://www.ministryoftesting.com/articles', kind: 'article' }],
        citations: [{ name: 'Agile Testing — Crispin & Gregory', url: 'https://agiletester.ca/' }],
      }),
    ],
    resources: {
      docs: [
        { name: 'Ministry of Testing', url: 'https://www.ministryoftesting.com/' },
        { name: 'Practical Test Pyramid', url: 'https://martinfowler.com/articles/practical-test-pyramid.html' },
      ],
      tools: ['Browser DevTools', 'Playwright or Cypress', 'GitHub Actions', 'Allure'],
      books: ['Agile Testing (Crispin & Gregory)', 'xUnit Test Patterns (Meszaros)'],
      practice: ['https://the-internet.herokuapp.com/', 'https://www.saucedemo.com/'],
      videos: [{ name: 'Test Automation University', url: 'https://testautomationu.applitools.com/' }],
    },
  },
  {
    id: 'cypress',
    title: 'Cypress',
    tagline: 'End-to-end testing that feels like developing in the browser.',
    category: 'automation',
    accent: '#2E7D32',
    cover: 'covers/cypress-cover.png',
    duration: '3–5 weeks',
    levelSpan: 'Beginner → Pro',
    who: 'Developers and QA who want fast, debuggable UI tests.',
    outcomes: [
      'Write reliable Cypress specs with good selectors',
      'Stub network traffic and seed state via API',
      'Ship Cypress in CI with artifacts and retries',
    ],
    chapters: [
      ch({
        id: 'cy-setup',
        level: 'beginner',
        title: 'Install, project layout, first green',
        minutes: 30,
        overview: 'Know where config, specs, and support files live. Get one green test before you decorate the suite.',
        learn: ['cypress.config', 'e2e folder', 'Runner time-travel'],
        steps: [
          {
            title: 'Scaffold',
            body: 'npm init + cypress. Open the app. Run the sample. Feel the command log.',
            doThis: 'Install Cypress. Open Cypress App. Run one included example.',
          },
          {
            title: 'Your first spec',
            body: 'cy.visit, get, type, click, should. Prefer data-cy attributes.',
            doThis: 'Spec a public form: fill → submit → assert message.',
            tip: 'Hover the command log — snapshots are the superpower.',
          },
        ],
        checklist: ['Cypress opens', 'One custom green spec', 'I used should() not ad-hoc ifs'],
        practice: { title: 'Signup happy path', brief: 'Assert success text + URL if it changes.' },
        links: [
          { name: 'Cypress Docs', url: 'https://docs.cypress.io/', kind: 'doc' },
          { name: 'example.cypress.io', url: 'https://example.cypress.io', kind: 'lab' },
        ],
        citations: [],
      }),
      ch({
        id: 'cy-selectors',
        level: 'beginner',
        title: 'Selectors & assertions that stick',
        minutes: 35,
        overview: 'Retry-ability is Cypress’s gift. Don’t fight it with arbitrary waits. Choose locators the app can keep stable.',
        learn: ['Best selectors', 'should vs then', 'Debugging failures'],
        steps: [
          {
            title: 'Selector rules',
            body: 'data-cy / roles over brittle CSS. Avoid depending on nth-child fashion.',
            doThis: 'Add data-cy to a local HTML toy page and select it from Cypress.',
          },
          {
            title: 'Assert state',
            body: 'Visible, contain, have.value — assert outcomes users care about.',
            doThis: 'Write 3 assertions for one screen. Delete the weakest.',
          },
        ],
        checklist: ['Selector guide in README', 'No cy.wait(ms) in my specs'],
        practice: { title: 'Negative path', brief: 'Empty required field → assert validation.' },
        links: [{ name: 'Best Practices', url: 'https://docs.cypress.io/guides/references/best-practices', kind: 'doc' }],
        citations: [{ name: 'UI Testing with Cypress — Filip Hric', url: 'https://filiphric.com/' }],
      }),
      ch({
        id: 'cy-commands',
        level: 'intermediate',
        title: 'Custom commands, session, intercept',
        minutes: 45,
        overview: 'DRY with intent. cy.session for auth. cy.intercept to stub and spy. Keep tests readable.',
        learn: ['Custom commands', 'cy.session', 'cy.intercept aliases'],
        steps: [
          {
            title: 'login() command',
            body: 'Wrap auth without hiding too much. Parameters stay visible in the spec.',
            doThis: 'Create cy.login(user) and use it in two specs.',
          },
          {
            title: 'Intercept a POST',
            body: 'Stub success and failure. Assert UI handles both.',
            doThis: 'cy.intercept + wait(@alias) on a form submit.',
            tip: 'Prefer real API for happy path; stub edges.',
          },
        ],
        checklist: ['Custom command used', 'One intercept test', 'cy.session for auth'],
        practice: { title: 'Auth + stub', brief: 'Session login + one stubbed 500 error toast.' },
        links: [{ name: 'cy.intercept', url: 'https://docs.cypress.io/api/commands/intercept', kind: 'doc' }],
        citations: [],
      }),
      ch({
        id: 'cy-ci-pro',
        level: 'advanced',
        title: 'CI, flake budgets, team standards',
        minutes: 40,
        overview: 'Parallelization, retries as signal, plugins for seed tasks, accessibility checks on critical flows.',
        learn: ['CI artifacts', 'Flake budgets', 'cypress-axe'],
        steps: [
          {
            title: 'Pipeline with videos',
            body: 'Fail builds with downloadable artifacts. Retries reveal flakes — don’t normalize them.',
            doThis: 'Wire GitHub Actions. Upload videos/screenshots on failure.',
          },
          {
            title: 'Coding standard',
            body: 'Folder layout, naming, selector policy, PR checklist.',
            doThis: 'Write a one-page Cypress standard and apply it to your suite.',
          },
        ],
        checklist: ['CI artifacts', 'Standard doc', 'Flake list with owners'],
        practice: { title: 'Standard PR', brief: 'Open a PR that only applies your standard (renames, selectors).' },
        links: [
          { name: 'Real World App', url: 'https://github.com/cypress-io/cypress-realworld-app', kind: 'lab' },
          { name: 'cypress-axe', url: 'https://github.com/component-driven/cypress-axe', kind: 'tool' },
        ],
        citations: [],
      }),
    ],
    resources: {
      docs: [
        { name: 'Cypress Docs', url: 'https://docs.cypress.io/' },
        { name: 'Best Practices', url: 'https://docs.cypress.io/guides/references/best-practices' },
      ],
      tools: ['Cypress App', 'VS Code', 'axe-core', 'GitHub Actions'],
      books: ['UI Testing with Cypress (Filip Hric)'],
      practice: ['https://example.cypress.io', 'https://www.saucedemo.com/'],
      videos: [{ name: 'Cypress YouTube', url: 'https://www.youtube.com/c/Cypressio' }],
    },
  },
]
