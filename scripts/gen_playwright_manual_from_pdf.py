#!/usr/bin/env python3
"""Generate src/data/manuals/playwright-python.js from .tmp-pw-manual.txt (PDF extract).

Prefer layout-mode extract. Prefer Combined Guide regions over thin TOC outlines.
Part 2 Function Reference is already folded into Combined — not emitted as orphans.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC_TXT = ROOT / ".tmp-pw-manual.txt"
OUT_JS = ROOT / "src/data/manuals/playwright-python.js"
DOC = "https://playwright.dev/python/docs"
COVER = "covers/playwright-cover.png"

# Stable URL ids — do not rename.
CHAPTERS = [
    # Part 0
    dict(id="pw-0-what", num="0", title="0. What is Playwright, Really", phase="Part 0 · Background", level="beginner", minutes=35, durationLabel="Day 1"),
    dict(id="pw-0-where", num="1", title="1. Where Playwright is Used", phase="Part 0 · Background", level="beginner", minutes=30),
    dict(id="pw-0-cando", num="2", title="2. What Playwright Can Do", phase="Part 0 · Background", level="beginner", minutes=35),
    dict(id="pw-0-why", num="3", title="3. Why Companies Choose Playwright Over Alternatives", phase="Part 0 · Background", level="beginner", minutes=30),
    dict(id="pw-0-not", num="4", title="4. What This Manual Will NOT Cover", phase="Part 0 · Background", level="beginner", minutes=20),
    # Part 1
    dict(id="pw-1-intro", num="1", title="1. Introduction to Playwright", phase="Part 1 · Foundations", level="beginner", minutes=40, durationLabel="Week 1"),
    dict(id="pw-1-setup", num="2", title="2. Environment Setup", phase="Part 1 · Foundations", level="beginner", minutes=45),
    dict(id="pw-1-arch", num="3", title="3. Playwright Architecture", phase="Part 1 · Foundations", level="beginner", minutes=40),
    dict(id="pw-1-first", num="4", title="4. First Script", phase="Part 1 · Foundations", level="beginner", minutes=50),
    # Part 2
    dict(id="pw-2-locators", num="5", title="5. Locators Deep Dive", phase="Part 2 · Core Interactions", level="beginner", minutes=60),
    dict(id="pw-2-actions", num="6", title="6. Actions", phase="Part 2 · Core Interactions", level="beginner", minutes=45),
    dict(id="pw-2-expect", num="7", title="7. Assertions with expect()", phase="Part 2 · Core Interactions", level="beginner", minutes=45),
    dict(id="pw-2-waits", num="8", title="8. Waits & Auto-waiting", phase="Part 2 · Core Interactions", level="beginner", minutes=40),
    dict(id="pw-2-tabs", num="9", title="9. Tabs, Windows, iFrames", phase="Part 2 · Core Interactions", level="intermediate", minutes=40),
    dict(id="pw-2-files", num="10", title="10. File Uploads & Downloads", phase="Part 2 · Core Interactions", level="intermediate", minutes=35),
    dict(id="pw-2-dialogs", num="11", title="11. Alerts, Dialogs, Popups", phase="Part 2 · Core Interactions", level="intermediate", minutes=35),
    # Part 3
    dict(id="pw-3-pytest", num="12", title="12. Pytest Basics for Playwright", phase="Part 3 · Test Structure & Framework", level="intermediate", minutes=50),
    dict(id="pw-3-org", num="13", title="13. Test Organization", phase="Part 3 · Test Structure & Framework", level="intermediate", minutes=40),
    dict(id="pw-3-pom", num="14", title="14. Page Object Model (POM)", phase="Part 3 · Test Structure & Framework", level="intermediate", minutes=55),
    dict(id="pw-3-config", num="15", title="15. Configuration Management", phase="Part 3 · Test Structure & Framework", level="intermediate", minutes=40),
    dict(id="pw-3-data", num="16", title="16. Test Data Management", phase="Part 3 · Test Structure & Framework", level="intermediate", minutes=40),
    # Part 4
    dict(id="pw-4-network", num="17", title="17. Network Interception & Mocking", phase="Part 4 · Advanced Techniques", level="advanced", minutes=50),
    dict(id="pw-4-api", num="18", title="18. API Testing with Playwright", phase="Part 4 · Advanced Techniques", level="advanced", minutes=50),
    dict(id="pw-4-visual", num="19", title="19. Visual & Accessibility Testing", phase="Part 4 · Advanced Techniques", level="advanced", minutes=45),
    dict(id="pw-4-auth", num="20", title="20. Authentication & Session Reuse", phase="Part 4 · Advanced Techniques", level="advanced", minutes=45),
    dict(id="pw-4-shadow", num="21", title="21. Shadow DOM & Complex Components", phase="Part 4 · Advanced Techniques", level="advanced", minutes=40),
    dict(id="pw-4-parallel", num="22", title="22. Parallel Execution & Sharding", phase="Part 4 · Advanced Techniques", level="advanced", minutes=40),
    dict(id="pw-4-cross", num="23", title="23. Cross-browser & Cross-device Testing", phase="Part 4 · Advanced Techniques", level="advanced", minutes=40),
    dict(id="pw-4-debug", num="24", title="24. Debugging Tools", phase="Part 4 · Advanced Techniques", level="advanced", minutes=45),
    # Part 5
    dict(id="pw-5-ci", num="25", title="25. CI/CD Integration", phase="Part 5 · CI/CD & Reporting", level="advanced", minutes=50),
    dict(id="pw-5-report", num="26", title="26. Test Reporting", phase="Part 5 · CI/CD & Reporting", level="advanced", minutes=40),
    dict(id="pw-5-docker", num="27", title="27. Dockerizing Playwright Tests", phase="Part 5 · CI/CD & Reporting", level="advanced", minutes=40),
    dict(id="pw-5-logging", num="28", title="28. Logging & Error Handling", phase="Part 5 · CI/CD & Reporting", level="advanced", minutes=35),
    # Part 6
    dict(id="pw-6-framework", num="29", title="29. Building a Scalable Framework from Scratch", phase="Part 6 · Pro-Level Practices", level="pro", minutes=60),
    dict(id="pw-6-scale", num="30", title="30. Managing Test Suites at Scale", phase="Part 6 · Pro-Level Practices", level="pro", minutes=45),
    dict(id="pw-6-review", num="31", title="31. Code Review & Best Practices", phase="Part 6 · Pro-Level Practices", level="pro", minutes=40),
    dict(id="pw-6-perf", num="32", title="32. Performance Considerations", phase="Part 6 · Pro-Level Practices", level="pro", minutes=40),
    # Part 7
    dict(id="pw-7-capstone", num="33", title="33. Real-World Capstone Project", phase="Part 7 · Real-World Project & Job Readiness", level="pro", minutes=90),
    dict(id="pw-7-portfolio", num="34", title="34. Portfolio Building", phase="Part 7 · Real-World Project & Job Readiness", level="pro", minutes=45),
    dict(id="pw-7-interview", num="35", title="35. Interview Prep", phase="Part 7 · Real-World Project & Job Readiness", level="pro", minutes=50),
    dict(id="pw-7-career", num="36", title="36. Career Positioning", phase="Part 7 · Real-World Project & Job Readiness", level="pro", minutes=40),
    # Part 8
    dict(id="pw-8-books", num="52", title="52. Books & Long-Form Reading", phase="Part 8 · Resources", level="reference", minutes=20),
    dict(id="pw-8-blogs", num="53", title="53. Blogs & Written Tutorials", phase="Part 8 · Resources", level="reference", minutes=15),
    dict(id="pw-8-newsletters", num="54", title="54. Newsletters", phase="Part 8 · Resources", level="reference", minutes=10),
    dict(id="pw-8-podcasts", num="55", title="55. Podcasts", phase="Part 8 · Resources", level="reference", minutes=10),
    dict(id="pw-8-courses", num="56", title="56. Courses & Structured Learning Platforms", phase="Part 8 · Resources", level="reference", minutes=20),
    dict(id="pw-8-certs", num="57", title="57. Certifications", phase="Part 8 · Resources", level="reference", minutes=15),
    dict(id="pw-8-conferences", num="58", title="58. Conferences & Talks", phase="Part 8 · Resources", level="reference", minutes=15),
    dict(id="pw-8-social", num="59", title="59. Social & Real-Time Communities", phase="Part 8 · Resources", level="reference", minutes=15),
    dict(id="pw-8-extensions", num="60", title="60. Browser Extensions & Developer Tools", phase="Part 8 · Resources", level="reference", minutes=15),
    dict(id="pw-8-comparisons", num="61", title="61. Comparison & Decision-Making References", phase="Part 8 · Resources", level="reference", minutes=15),
    dict(id="pw-8-glossary", num="62", title="62. Glossary of Terms", phase="Part 8 · Resources", level="reference", minutes=20),
    dict(id="pw-8-practice", num="63", title="63. Sample Data & Practice Sites", phase="Part 8 · Resources", level="reference", minutes=15),
    dict(id="pw-8-ecosystem", num="64", title="64. Staying Plugged Into the Ecosystem", phase="Part 8 · Resources", level="reference", minutes=15),
]

CHECKPOINTS = [
    dict(id="pw-cp-foundations", after="pw-1-first", phase="Part 1 · Foundations", title="Checkpoint — Foundations", overview="You can install Playwright, explain Browser→Context→Page, and run a headed first script."),
    dict(id="pw-cp-core", after="pw-2-dialogs", phase="Part 2 · Core Interactions", title="Checkpoint — Core Interactions", overview="You locate with get_by_*, act, assert with expect(), and handle tabs/frames/files/dialogs without sleep hacks."),
    dict(id="pw-cp-framework", after="pw-3-data", phase="Part 3 · Framework", title="Checkpoint — Framework", overview="Pytest fixtures, markers, POM pages, config, and data-driven tests form a maintainable suite."),
    dict(id="pw-cp-advanced", after="pw-4-debug", phase="Part 4 · Advanced", title="Checkpoint — Advanced", overview="You can mock network, hit APIs, reuse auth, run parallel/cross-browser, and debug with traces."),
    dict(id="pw-cp-cicd", after="pw-5-logging", phase="Part 5 · CI/CD", title="Checkpoint — CI/CD", overview="Suite runs in CI with reports, optional Docker, and useful failure logs."),
    dict(id="pw-cp-pro", after="pw-6-perf", phase="Part 6 · Pro", title="Checkpoint — Pro Practices", overview="Framework layout, suite governance, review habits, and performance tradeoffs are intentional."),
    dict(id="pw-cp-career", after="pw-7-career", phase="Part 7 · Career", title="Checkpoint — Job Ready", overview="Capstone README + demo link + three interview stories written."),
]

HERO_STICKIES = [
    {"id": "hack", "x": 36, "y": 28, "rot": -7, "label": "Pathwise hack", "body": "Spin the board · tap stickies. Fresh study map — not the old cover.", "color": "mint"},
    {"id": "hub", "x": 310, "y": 150, "rot": 2, "label": "Page under test", "body": "The big window is a real page Playwright drives — locators match what users see.", "color": "cream"},
    {"id": "paths", "x": 48, "y": 300, "rot": -2, "label": "Automation path", "body": "Dashed roads = open → act → assert. Short trips flake less.", "color": "sky"},
    {"id": "browsers", "x": 520, "y": 40, "rot": 5, "label": "Multi-browser", "body": "Chromium, Firefox, WebKit — same script. That’s why Playwright beat single-engine tools.", "color": "peach"},
]

NOISE_RE = re.compile(
    r"(?im)^(?:Claude is AI.*|Document · MD.*|Part\d? ?core interactions combined.*|"
    r"Part\d? test structure.*combined.*|Ready to move on to Part.*|"
    r"Orchestrated unified document.*|Combined the narrative.*|"
    r"Add links Part 8:.*|pasted\s*)$"
)


def load_clean_text() -> str:
    raw = SRC_TXT.read_text(encoding="utf-8")
    # Prefer already-clean layout extract; strip page markers.
    text = re.sub(r"===== PAGE \d+ =====\n?", "\n", raw)
    text = text.replace("\u00a0", " ")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    # Drop obvious Claude/chrome lines
    kept = []
    for line in text.splitlines():
        if NOISE_RE.match(line.strip()):
            continue
        if "Claude is AI and can make mistakes" in line:
            continue
        kept.append(line)
    return "\n".join(kept)


def region(text: str, start_pat: str, end_pat: str | None) -> str:
    sm = re.search(start_pat, text)
    if not sm:
        return ""
    start = sm.start()
    if end_pat:
        em = re.search(end_pat, text[sm.end() :])
        end = sm.end() + em.start() if em else len(text)
    else:
        end = len(text)
    return text[start:end]


def prefer_combined(full: str) -> str:
    """Build a corpus that prefers Combined Guide sections for Parts 2–7."""
    # Part 0–1: until Part 2 Combined
    p0 = region(full, r"(?m)^Part 0:", r"(?m)^Part 2: Core Interactions — Combined")
    if not p0:
        p0 = region(full, r"(?m)^0\. What is Playwright, Really", r"(?m)^Part 2: Core Interactions — Combined")

    p2 = region(full, r"(?m)^Part 2: Core Interactions — Combined", r"(?m)^Part 2: Core Interactions — Function Reference")
    # Skip standalone Function Reference — already folded into Combined (esp. expect).

    # Prefer Combined Part 3 (dash title) over thin outline
    p3 = region(full, r"(?m)^Part 3: Test Structure & Framework —", r"(?m)^Part 4: Advanced Techniques —")
    if not p3:
        p3 = region(full, r"(?m)^Part 3: Test Structure & Framework\s*$", r"(?m)^Part 4: Advanced Techniques —")

    p4 = region(full, r"(?m)^Part 4: Advanced Techniques —", r"(?m)^Part 5: CI/CD & Reporting — Combined")
    p5 = region(full, r"(?m)^Part 5: CI/CD & Reporting — Combined", r"(?m)^Part 6: Pro-Level Practices —")
    p6 = region(full, r"(?m)^Part 6: Pro-Level Practices —", r"(?m)^Part 7: Real-World Project & Job")
    p7 = region(full, r"(?m)^Part 7: Real-World Project & Job", r"(?m)^Part 8: Resources")
    p8 = region(full, r"(?m)^Part 8: Resources", None)
    if not p8:
        p8 = region(full, r"(?m)^52\. Books & Long-Form Reading", None)

    return "\n\n".join(x for x in (p0, p2, p3, p4, p5, p6, p7, p8) if x)


def extract_chapter_body(corpus: str, title: str, num: str) -> str:
    # Exact title line
    pat = rf"(?m)^{re.escape(title)}\s*$"
    matches = list(re.finditer(pat, corpus))
    if not matches:
        # allow minor title drift
        loose = rf"(?m)^{num}\.\s+.+$"
        matches = list(re.finditer(loose, corpus))
        # pick the one whose line shares most words with title
        best = None
        best_score = -1
        want = set(re.findall(r"[A-Za-z0-9]+", title.lower()))
        for m in matches:
            line = m.group(0)
            got = set(re.findall(r"[A-Za-z0-9]+", line.lower()))
            score = len(want & got)
            if score > best_score:
                best_score = score
                best = m
        matches = [best] if best and best_score >= 2 else []
    if not matches:
        return ""

    # Prefer the longest body among duplicates (Combined > outline)
    bodies = []
    for m in matches:
        # end at next chapter-number heading at same or any higher numbered chapter, or Part N
        rest = corpus[m.end() :]
        end_m = re.search(
            rf"(?m)^(?:Part \d+:|(?:{int(num)+1}|\d{{2}})\.\s+[A-Z0-9\"].{{3,90}})\s*$",
            rest,
        )
        # Also stop at next known chapter title patterns more carefully:
        end_m2 = re.search(r"(?m)^(?:\d{1,2})\.\s+[A-Z`].{5,90}\s*$", rest)
        end = len(rest)
        for cand in (end_m, end_m2):
            if cand and cand.start() < end:
                # avoid stopping on numbered list items like "1. Selenium's flakiness"
                line = cand.group(0).strip()
                if line.startswith("Part "):
                    end = cand.start()
                    continue
                if re.match(r"^\d+\.\s+`", line):
                    continue
                mnum = re.match(r"^(\d+)\.\s+(.+)$", line)
                if not mnum:
                    continue
                chap_num = int(mnum.group(1))
                rest_title = mnum.group(2).strip()
                # Mid-prose numbered lists: long sentence fragments
                if rest_title and rest_title[0].islower():
                    continue
                if len(line) > 90 or line.endswith("."):
                    continue
                # Any other chapter-style heading ends this chapter (handles Part 8 dupes)
                if chap_num != int(num):
                    end = cand.start()
        bodies.append(rest[:end].strip())
    bodies.sort(key=len, reverse=True)
    body = bodies[0]
    # Trim leading Combined Guide chrome
    body = re.sub(r"(?m)^(?:Guide \(Explanations.*|Combined Guide.*|Reference\)|Library \(Expanded\)|Readiness — Combined Guide|Function Reference\))\s*$", "", body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return body


def is_code_line(line: str) -> bool:
    s = line.strip()
    if not s:
        return False
    if s.startswith("●") or s.startswith("○") or s.startswith("•"):
        return False
    # "async behavior" is prose; only treat real async statements as code
    if re.match(r"^async\s+(?!def\b|with\b|for\b)", s):
        return False
    # Avoid prose false positives: "from the…", "with full…", "class names…"
    if re.match(r"^from\s+(?![\w.]+\s+import\b)", s):
        return False
    if re.match(r"^with\s+(?!sync_playwright\b|open\b|[\w\.]+\()", s):
        return False
    if re.match(r"^class\s+(?![A-Z_])", s):
        return False
    code_starts = (
        "from ", "import ", "with ", "def ", "class ",
        "async def ", "async with ", "async for ", "await ",
        "page.", "expect(", "expect.", "browser.", "context.", "pytest",
        "locator.", "response.", "request.", "print(", "assert ",
        "@pytest", "---", "===", "pip ", "playwright ", "npm ", "npx ",
        "docker ", "RUN ", "FROM ", "COPY ", "CMD ", "ENV ", "name:",
        "on:", "jobs:", "steps:", "uses:", "run:", "- uses:", "- run:",
        "strategy:", "matrix:", "timeout:", "permissions:",
    )
    if s.startswith(code_starts):
        return True
    if s.startswith("#") and ("get_by" in s or " — " in s or "matches" in s):
        # section comment headers in PDF are often "# get_by_role — ..."
        return False
    if s.startswith("#"):
        return True
    if re.match(r"^[a-z_][\w\.]*\(", s):
        return True
    if re.match(r"^(if|for|while|else|elif|try|except|finally|return|yield)\b", s):
        return True
    # indented code leftovers (skip long indented prose)
    if line.startswith("    ") and re.search(r"[=\(\)\.\[\{]", s) and not s.startswith("●"):
        if len(s.split()) > 12 and not re.search(r"[=\[\{]|:\s*$", s):
            return False
        return True
    return False


def demash_paragraph(para: str) -> list[str]:
    """Split PDF lines where a heading was glued to the following sentence."""
    s = para.strip()
    if len(s) < 40 or s.startswith(("●", "○", "•", "#")):
        return [s]
    # Common glued patterns: "Heading Words Next sentence…"
    markers = (
        " Two distinct",
        " Selenium and older",
        " Restating this",
        " Practically relevant",
        " Three concrete",
        " Playwright is MIT",
        " This is the most important",
        " This is where scripts",
    )
    for marker in markers:
        idx = s.find(marker)
        if 8 <= idx <= 90:
            head = s[:idx].strip()
            body = s[idx:].strip()
            if head and body and not head.endswith((".", ",", ";")):
                return [head, body]
    # Generic: Title Case head (no period) then space + Capital sentence (≥6 words each side-ish)
    m = re.match(
        r"^((?:[A-Z][\w/\-]+(?:\s+(?:and|or|vs|of|the|a|an|to|for|with|in|on|by|from|at|due|older|web|app|job|market|support|flakiness|reliability|speed|modern|auto-waiting|demand|tools|companies|choose|playwright|alternatives))*|\s+\([^)]+\))+)"
        r"\s+([A-Z][a-z].{20,})$",
        s,
    )
    if m:
        head, body = m.group(1).strip(), m.group(2).strip()
        if 8 <= len(head) <= 90 and head.count(" ") >= 1:
            return [head, body]
    return [s]


def reflow_paragraphs(body: str) -> str:
    """Join soft-wrapped PDF lines into paragraphs; keep blank lines as breaks."""
    paragraphs: list[str] = []
    buf: list[str] = []

    def flush():
        nonlocal buf
        if not buf:
            return
        if all(is_code_line(x) or not x.strip() for x in buf if x.strip()):
            paragraphs.append("\n".join(x.rstrip() for x in buf).strip())
        else:
            text = " ".join(x.strip() for x in buf if x.strip())
            text = re.sub(r" {2,}", " ", text)
            paragraphs.append(text)
        buf = []

    lines = body.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            flush()
            i += 1
            continue
        s = line.strip()
        # Bullets: join soft-wrapped continuation lines into one bullet para
        if s.startswith(("●", "○", "•")):
            flush()
            parts = [s]
            i += 1
            while i < len(lines):
                nxt = lines[i].strip()
                if not nxt:
                    break
                if nxt.startswith(("●", "○", "•")):
                    break
                if is_code_line(lines[i]):
                    break
                # stop before a clear section heading (not a dangling ")...")
                if (
                    (" — " in nxt or re.match(r"^[A-Z].{8,90}\([^)]+\)\s*$", nxt))
                    and not nxt.endswith(")")
                    and len(nxt.split()) <= 14
                ):
                    break
                parts.append(nxt)
                i += 1
            paragraphs.append(" ".join(parts))
            continue
        if is_code_line(line) and not s.startswith("# "):
            if buf and not all(is_code_line(x) for x in buf if x.strip()):
                flush()
            buf.append(line.rstrip())
            i += 1
            continue
        if buf and all(is_code_line(x) for x in buf if x.strip()):
            flush()
        buf.append(line)
        i += 1
    flush()
    # Demash glued heading+sentence paragraphs
    expanded: list[str] = []
    for p in paragraphs:
        expanded.extend(demash_paragraph(p))
    return "\n\n".join(expanded)


def is_heading_para(para: str) -> bool:
    s = para.strip()
    if not s or "\n" in s:
        return False
    if len(s) > 110:
        return False
    if s.startswith(("●", "○", "•", "-", "```", ".", "'", '"')):
        return False
    if s.startswith(("Types/params", "Pointers:", "What it does:")):
        return False
    # Continuation fragments / code crumbs mistaken for headings
    if s.startswith("re.") or "re.compile" in s:
        return False
    if re.match(r"^\.\w+", s):
        return False
    if s.endswith(")") and "(" not in s:
        return False
    if s.endswith(")") and not re.match(
        r"^(?:get_by_|expect|page\.|locator|Why |filter|nth)", s
    ):
        # allow balanced API titles, reject "DevOps pipeline support)"
        if s.count("(") == 0 or not s[0].isupper():
            return False
    # Section comment headings from PDF ("# get_by_role — ..."), not prose code comments
    if s.startswith("#"):
        inner = s.lstrip("#").strip()
        if any(k in inner for k in ("get_by_", "expect(", "locator(", "page.", " — matches", " — asserts")):
            return True
        if re.match(r"^(get_by_|expect|page\.|locator|filter|nth|route|storage)", inner):
            return True
        return False
    # Function / API signature headings
    if re.match(
        r"^(?:expect(?:\.soft)?(?:\([\w\.]*\))?\.?)?"
        r"[\w\.]+(?:\([^)]*\))?"
        r"(?:\s*/\s*\.?[\w\.\(\)]+)*"
        r"\s*$",
        s,
    ) and any(
        k in s
        for k in (
            "get_by_", "to_", "wait_", "route", "storage_state", "expect",
            "filter", "nth", "locator", "page.", "launch", "goto", "click", "fill",
        )
    ):
        return True
    if re.match(r"^(?:get_by_|expect|page\.|locator)[\w\.]*\([^)]*\)\s*$", s):
        return True
    # Em-dash section titles
    if " — " in s and re.match(r"^[A-Z0-9#]", s) and not s.endswith(".") and len(s.split()) <= 16:
        return True
    # Parenthetical section titles (optional trailing phrase)
    if re.match(r"^[A-Z].{8,90}\([^)]+\).{0,40}$", s) and not s.endswith(".") and len(s.split()) <= 14:
        return True
    # Standalone short label paragraphs after demash (e.g. "Growing job market demand")
    if (
        re.match(r"^[A-Z0-9].+", s)
        and not s.endswith((".", ":", ","))
        and 2 <= len(s.split()) <= 10
        and len(s) <= 70
        and not re.search(r"\b(the|this|that|these|those|when|which|because)\b", s, re.I)
    ):
        return True
    # Short headings (allow several lowercase words e.g. Open-source, actively…)
    if (
        re.match(r"^[A-Z0-9].+", s)
        and not s.endswith(".")
        and 2 <= len(s.split()) <= 12
        and not s.endswith(",")
    ):
        words = re.findall(r"[A-Za-z0-9][A-Za-z0-9\-]*", s)
        connectors = {"and", "or", "of", "the", "a", "an", "to", "for", "with", "vs", "in", "on", "by", "from", "at"}
        significant = [w for w in words if w.lower() not in connectors]
        if not significant or not significant[0][0].isupper():
            return False
        # Prefer real headings: at least 2 capitals, or em-dash already handled above
        caps = sum(1 for w in significant if w[0].isupper())
        lowerish = sum(1 for w in significant[1:] if w.islower())
        if caps >= 2 and lowerish <= 3 and len(significant) <= 8:
            return True
        # Single-capital short labels like "conftest.py" / "Overview" aren't in this branch
        if caps == 1 and lowerish == 0 and len(significant) <= 4:
            return True
    return False


def split_steps(body: str) -> list[dict]:
    body = reflow_paragraphs(body)
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    sections: list[tuple[str, list[str]]] = []
    cur_title = "Overview"
    cur: list[str] = []

    def flush():
        nonlocal cur, cur_title
        if cur or cur_title != "Overview":
            sections.append((cur_title, cur[:]))
        cur = []

    for para in paras:
        if is_heading_para(para):
            flush()
            title = para[2:].strip() if para.startswith("# ") else para.lstrip("#").strip()
            cur_title = title
            continue
        cur.append(para)
    flush()

    # Drop empty overview if later sections exist
    if len(sections) > 1 and sections[0][0] == "Overview" and not any(x.strip() for x in sections[0][1]):
        sections = sections[1:]

    steps = []
    for title, content in sections:
        # content paragraphs → reconstruct lines for code detection
        lines: list[str] = []
        for block in content:
            if "\n" in block and all(is_code_line(x) or not x.strip() for x in block.splitlines() if x.strip()):
                lines.extend(block.splitlines())
                lines.append("")
            else:
                lines.append(block)
                lines.append("")
        step = lines_to_step(title, lines)
        if step["body"].strip() or step.get("code") or step.get("items"):
            steps.append(step)

    if len(steps) == 1 and len(steps[0]["body"]) > 1800:
        steps = paragraph_chunk_steps(
            steps[0]["body"], steps[0].get("code"), base_title=steps[0]["title"]
        )
    final = []
    for st in steps:
        if len(st["body"]) > 2200 and not st.get("code"):
            final.extend(paragraph_chunk_steps(st["body"], None, base_title=st["title"]))
        else:
            final.append(st)
    return final or [{"title": "Read", "body": body.strip()[:4000]}]


def paragraph_chunk_steps(body: str, code: str | None, base_title: str = "Section") -> list[dict]:
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    steps = []
    buf = []
    n = 1
    for p in paras:
        buf.append(p)
        if sum(len(x) for x in buf) >= 900:
            steps.append({"title": f"{base_title} ({n})" if n > 1 or base_title == "Section" else base_title, "body": "\n\n".join(buf)})
            n += 1
            buf = []
    if buf:
        title = base_title if n == 1 else f"{base_title} ({n})"
        st = {"title": title, "body": "\n\n".join(buf)}
        if code:
            st["code"] = code
        steps.append(st)
    elif code:
        steps.append({"title": base_title, "body": "", "code": code})
    return steps


def normalize_bullets(text: str) -> tuple[str, list[str] | None]:
    lines = text.splitlines()
    items = []
    prose = []
    for line in lines:
        s = line.strip()
        m = re.match(r"^[●•○]\s*(.*)$", s)
        if m:
            items.append(m.group(1).strip())
        else:
            prose.append(line)
    body = "\n".join(prose).strip()
    body = re.sub(r"\n{3,}", "\n\n", body)
    body = re.sub(r" {2,}", " ", body).strip()
    return body, (items if items else None)


def extract_code_blocks(lines: list[str]) -> tuple[list[str], str | None]:
    prose_lines: list[str] = []
    code_chunks: list[list[str]] = []
    buf: list[str] = []
    in_code = False

    def flush_code():
        nonlocal buf, in_code
        if buf:
            code_chunks.append(buf[:])
        buf = []
        in_code = False

    for line in lines:
        if is_code_line(line):
            in_code = True
            buf.append(line.rstrip())
        else:
            if in_code:
                # allow blank line inside code lightly
                if not line.strip() and buf:
                    buf.append("")
                    continue
                flush_code()
            prose_lines.append(line)
    flush_code()

    code = None
    if code_chunks:
        # keep largest + any secondary short chunks joined
        code_chunks.sort(key=lambda c: sum(len(x) for x in c), reverse=True)
        parts = ["\n".join(c).strip() for c in code_chunks if "\n".join(c).strip()]
        code = "\n\n".join(parts[:3])
        # dedupe excessive blank
        code = re.sub(r"\n{3,}", "\n\n", code).strip()
        if len(code) > 2500:
            code = code[:2500].rstrip() + "\n# …"
    return prose_lines, code


def lines_to_step(title: str, content: list[str]) -> dict:
    prose_lines, code = extract_code_blocks(content)
    raw = "\n".join(prose_lines).strip()
    body, items = normalize_bullets(raw)
    # Clean title
    title = title.strip()
    if title.startswith("#"):
        title = title.lstrip("#").strip()
    step: dict = {"title": title[:120] or "Step", "body": body}
    if code:
        step["code"] = code
        # first code block as tryIt when short
        if len(code) < 500 and "\n" in code:
            step["tryIt"] = {
                "prompt": "Run / study this snippet",
                "code": code.split("\n\n")[0][:800],
                "result": "Matches the manual’s example behavior when the page under test cooperates.",
            }
    if items and len(items) >= 2:
        step["items"] = items[:20]
        if not body:
            step["body"] = "Key points:"
    return step


def first_sentences(text: str, n: int = 2) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    parts = re.split(r"(?<=[.!?])\s+", text)
    return " ".join(parts[:n])[:400]


def learn_bullets(body: str, steps: list[dict]) -> list[str]:
    learns = []
    for st in steps:
        t = st["title"]
        if not t or t in ("Overview", "Read", "Section"):
            continue
        if t.endswith((":", ",")) or t[0].islower():
            continue
        if len(t) > 90:
            continue
        learns.append(t[:80])
        if len(learns) >= 5:
            break
    if not learns:
        s = first_sentences(body, 3)
        learns = [x.strip()[:80] for x in re.split(r"(?<=\.)\s+", s) if x.strip()][:3]
    return learns[:5]


def checklist_for(title: str, steps: list[dict]) -> list[str]:
    items = [f"I can explain: {steps[0]['title']}" if steps else f"I skimmed {title}"]
    if len(steps) > 1:
        items.append(f"I practiced: {steps[1]['title']}")
    items.append("I noted one takeaway in LEARNING.md")
    return items[:4]


def js_string(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_obj(obj, indent=2) -> str:
    """Emit JS object/array literal from Python structures (JSON-compatible)."""
    return json.dumps(obj, ensure_ascii=False, indent=indent)


def build_step_js(step: dict, *, hero: bool = False) -> dict:
    out = {
        "title": step["title"],
        "body": step.get("body") or "",
    }
    if step.get("learnMore"):
        out["learnMore"] = step["learnMore"]
    img = {"src": COVER, "alt": step["title"]}
    if hero:
        img["stickies"] = HERO_STICKIES
    out["image"] = img
    if step.get("resources"):
        out["resources"] = step["resources"]
    else:
        out["resources"] = [{"label": "Docs", "url": f"{DOC}/intro", "kind": "Docs"}]
    if step.get("quiz"):
        out["quiz"] = step["quiz"]
    if step.get("tryIt"):
        out["tryIt"] = step["tryIt"]
    if step.get("doThis"):
        out["doThis"] = step["doThis"]
    if step.get("tip"):
        out["tip"] = step["tip"]
    if step.get("code"):
        out["code"] = step["code"]
    if step.get("items"):
        out["items"] = step["items"]
    return out


QUIZZES = {
    "pw-0-what": {
        "question": "Playwright’s core engineers previously built which tool?",
        "options": ["Selenium IDE", "Puppeteer", "Cypress", "Watir"],
        "answer": 1,
        "explain": "Andrey Lushnikov, Pavel Feldman, and Boris Yankov came from the Puppeteer team at Google.",
    },
    "pw-0-why": {
        "question": "A common reason teams leave Selenium is…",
        "options": [
            "Playwright cannot open URLs",
            "High flakiness and slow feedback loops",
            "Selenium supports more browsers than Playwright",
            "Selenium has no language bindings",
        ],
        "answer": 1,
        "explain": "Manual waits and protocol overhead made Selenium suites flaky and slow.",
    },
    "pw-2-locators": {
        "question": "Preferred Playwright locator style is…",
        "options": ["Deep XPath only", "User-facing get_by_role / label / text", "Random CSS hashes", "Sleep then click coords"],
        "answer": 1,
        "explain": "User-facing locators track how users and assistive tech see the page.",
    },
    "pw-2-expect": {
        "question": "expect() differs from assert because it…",
        "options": ["Never fails", "Auto-retries until timeout", "Only works in JS", "Skips the DOM"],
        "answer": 1,
        "explain": "Web-first assertions poll until the condition passes or times out.",
    },
}


def make_checkpoint(cp: dict) -> dict:
    return {
        "id": cp["id"],
        "phase": cp["phase"],
        "level": "checkpoint",
        "kind": "checkpoint",
        "title": cp["title"],
        "minutes": 45,
        "overview": cp["overview"],
        "learn": [cp["overview"]],
        "steps": [
            build_step_js(
                {
                    "title": "Pass criteria",
                    "body": cp["overview"],
                    "quiz": {
                        "question": "A checkpoint is done when…",
                        "options": [
                            "You bookmarked the docs",
                            "You can demo the criteria without notes",
                            "You skipped practice",
                            "You only watched a video",
                        ],
                        "answer": 1,
                    },
                    "doThis": "Record a 2-minute Loom/demo proving the criteria.",
                }
            )
        ],
        "checklist": [cp["overview"], "Demo recorded or peer-reviewed"],
    }


def build_manual(corpus: str) -> dict:
    chapters_out = []
    cp_by_after = {c["after"]: c for c in CHECKPOINTS}

    for meta in CHAPTERS:
        body = extract_chapter_body(corpus, meta["title"], meta["num"])
        if not body:
            print("WARN missing body for", meta["id"], meta["title"])
            body = f"{meta['title']}\n\nContent unavailable in extract — see Playwright docs."
        steps = split_steps(body)
        # Attach quiz to first step when mapped
        if meta["id"] in QUIZZES and steps:
            steps[0]["quiz"] = QUIZZES[meta["id"]]
        if meta["id"] == "pw-0-what" and steps:
            steps[0]["doThis"] = 'Write one sentence: “Playwright exists because ___.”'
            steps[0]["resources"] = [
                {"label": "Docs", "url": f"{DOC}/intro", "kind": "Docs"},
                {"label": "GitHub", "url": "https://github.com/microsoft/playwright-python", "kind": "Repo"},
                {"label": "Article", "url": "https://automationpanda.com/2023/11/08/playwright-python-tutorial-an-introduction/", "kind": "Article"},
            ]

        overview = first_sentences(re.sub(r"\s+", " ", body), 2)
        if len(overview) < 40:
            overview = meta["title"] + " — from the Pathwise Playwright Python manual."

        ch_obj = {
            "id": meta["id"],
            "phase": meta["phase"],
            "level": meta["level"],
            "title": meta["title"],
            "minutes": meta.get("minutes", 20),
            "overview": overview,
            "learn": learn_bullets(body, steps),
            "steps": [
                build_step_js(st, hero=(meta["id"] == "pw-0-what" and i == 0))
                for i, st in enumerate(steps)
            ],
            "checklist": checklist_for(meta["title"], steps),
            "practice": {
                "title": f"{meta['title']} deliverable",
                "brief": f"Apply one idea from “{steps[0]['title'] if steps else meta['title']}” in a small script or note.",
            },
            "resources": [
                {"type": "doc", "name": "Playwright Python Docs", "url": f"{DOC}/intro", "lang": "EN", "free": True}
            ],
        }
        if meta.get("durationLabel"):
            ch_obj["durationLabel"] = meta["durationLabel"]
        chapters_out.append(ch_obj)

        if meta["id"] in cp_by_after:
            chapters_out.append(make_checkpoint(cp_by_after[meta["id"]]))

    return {
        "id": "playwright",
        "title": "Playwright with Python",
        "tagline": "Complete Beginner-to-Pro Manual — background through job-ready capstone, plus a full resources library.",
        "category": "automation",
        "accent": "#1B4D3E",
        "cover": COVER,
        "duration": "4–6 months (1–2 hrs/day)",
        "levelSpan": "Zero → Job-ready",
        "who": "Beginners and manual QAs aiming to become Playwright Automation Engineers with Python.",
        "outcomes": [
            "Automate Chromium/Firefox/WebKit with sync Playwright + pytest",
            "Build POM frameworks with data, mocking, auth reuse, and CI reporting",
            "Ship a capstone portfolio and interview-ready stories",
            "Know where to keep learning — books, communities, and ecosystem signals",
        ],
        "pace": {
            "hoursPerDay": "1–2 hours/day",
            "recommended": "~4–6 months",
            "accelerated": "~3 months at 3–4 hrs/day",
            "slow": "~7–9 months if busy",
        },
        "chapters": chapters_out,
    }


def to_js(manual: dict) -> str:
    """Serialize manual to JS using ch() helpers for chapters."""
    lines = [
        "import { ch } from '../helpers'",
        "",
        "/** Playwright + Python — Beginner → Pro manual (generated from PDF extract). */",
        "export const playwrightPythonManual = {",
    ]
    for key in ("id", "title", "tagline", "category", "accent", "cover", "duration", "levelSpan", "who"):
        lines.append(f"  {key}: {js_string(manual[key])},")
    lines.append(f"  outcomes: {emit_obj(manual['outcomes'], indent=2).replace(chr(10), chr(10)+'  ')},")
    lines.append(f"  pace: {emit_obj(manual['pace'], indent=2).replace(chr(10), chr(10)+'  ')},")
    lines.append("  chapters: [")
    for ch in manual["chapters"]:
        # ch() wraps chapter defs; strip nothing
        payload = {k: v for k, v in ch.items()}
        dumped = emit_obj(payload, indent=2)
        # indent chapter object inside ch({...})
        indented = "\n".join("    " + ln if ln else ln for ln in dumped.splitlines())
        # ch({ ... }) — replace outer braces placement
        assert indented.startswith("    {") and indented.endswith("}")
        inner = indented[4:]  # drop first indent before {
        # Actually format as ch({ ... })
        obj_lines = dumped.splitlines()
        lines.append("    ch({")
        for ln in obj_lines[1:-1]:
            lines.append("      " + ln[2:] if ln.startswith("  ") else "      " + ln)
        lines.append("    }),")
    lines.append("  ],")
    lines.append("}")
    lines.append("")
    return "\n".join(lines)


def main():
    if not SRC_TXT.exists():
        raise SystemExit(f"Missing {SRC_TXT} — extract PDF first with layout mode")
    full = load_clean_text()
    corpus = prefer_combined(full)
    (ROOT / ".tmp-pw-corpus.txt").write_text(corpus, encoding="utf-8")
    manual = build_manual(corpus)
    js = to_js(manual)
    OUT_JS.write_text(js, encoding="utf-8")
    ids = [c["id"] for c in manual["chapters"]]
    print(f"Wrote {OUT_JS} ({OUT_JS.stat().st_size} bytes)")
    print(f"Chapters: {len(ids)}")
    print("IDs:", ", ".join(ids))
    # sanity: early chapter depth
    what = next(c for c in manual["chapters"] if c["id"] == "pw-0-what")
    blob = " ".join(s["body"] for s in what["steps"])
    for needle in ("Andrey Lushnikov", "Puppeteer", "January 2020"):
        print(f"  pw-0-what has {needle!r}: {needle in blob}")
    part8 = [i for i in ids if i.startswith("pw-8-")]
    print(f"Part 8 chapters: {len(part8)}")


if __name__ == "__main__":
    main()
