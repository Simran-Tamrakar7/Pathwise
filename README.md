# Pathwise

Have-it-all learning manuals: covers, clickable/downloadable roadmaps, book-style chapters, resources & citations — beginner → pro.

Stack: **Next.js** (static export) + **Tailwind CSS** + existing Pathwise design CSS.

## Genres

Automation · Design · AI & Prompts · Foundations · Soft Skills

## Run

```bash
npm install
npm run dev
```

Build for GitHub Pages (`/Pathwise` basePath → `out/`):

```bash
npm run build
```

Live:
- GitHub Pages: https://simran-tamrakar7.github.io/Pathwise/
- Vercel: deploy with empty `NEXT_PUBLIC_BASE_PATH` (site at `/`)

## Add a manual

1. Add a cover to `public/covers/`
2. Add an entry under `src/data/manuals/` (use `ch()` helper)
3. Export it from `src/data/manuals.js`

Roadmaps auto-build from chapters. Download filename: `{id}-roadmap.svg`.
