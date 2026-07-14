# PrivChat Website

Official V1 website for PrivChat. The site is statically prerendered for SEO:
10 routes x 3 languages = 30 complete HTML pages.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build runs TypeScript checks, creates the client bundle, creates an SSR
renderer, and prerenders every route into full static HTML with page-specific
`title`, `description`, canonical links, and hreflang alternates.

- `/`
- `/chat/`
- `/game/`
- `/agents/`
- `/platform/`
- `/sdk/`
- `/architecture/`
- `/tutorials/`
- `/open-source/`
- `/enterprise/`

Each route is emitted in English, Simplified Chinese (`/zh-hans/...`), and
Traditional Chinese (`/zh-hant/...`). The build also emits `404.html`,
`sitemap.xml`, `robots.txt`, and `CNAME`.

## Screenshots

```bash
npm run shoot
```

This captures desktop and mobile screenshots for every public page into
`output/playwright/`.

## Content Principles

- Lead with realtime infrastructure, not only chat SDK.
- Use only current, defensible product surfaces on the homepage.
- Keep future products in roadmap until there is a real page, demo, or docs.
- Avoid fake metrics. Publish benchmark numbers only with reproducible scripts.
- Optimize the first developer path: install, connect, authenticate, subscribe, receive.

## Project Files

- `src/pages/`: route-level page content
- `src/seo.ts`: page metadata for every language and route
- `src/entry-server.tsx`: SSR render entry used by prerendering
- `scripts/prerender.mjs`: static HTML, sitemap, robots, and 404 generation
- `src/App.tsx`: application shell and route selection
- `src/styles.css`: responsive visual system
- `public/assets/privchat-hero.png`: generated hero visual

## Specification

The evergreen website specification lives in
`../privchat-docs/spec/01-global/WEBSITE_SPEC.md`. It is the source of truth
for positioning, page roles, page sections, i18n, SEO, deployment, and
maintenance rules.

`WEBSITE_SPEC.md` in this repository is only a historical decision log for V1.x
changes.
