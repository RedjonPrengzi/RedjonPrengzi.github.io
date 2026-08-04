# Project Context — RedjonPrengzi.github.io

## Stack
- Static GitHub Pages site (no build step for the landing page; `.nojekyll` present)
- Landing page (`index.html`): self-contained — inline CSS/JS, GSAP 3.13 (+ ScrollTrigger, SplitText) via jsdelivr CDN
- Sub-pages (`ravn/`, `logline/`, `quitpilot/`, `verbalyze/`, `fastual/`, `dailyBars/`): each bundles its own `style.css`/`script.js` (Tailwind v4 compiled output)
- `package.json`/`pnpm` + `src/` exist only for the Tailwind build of sub-pages

## Project Structure
- Clean URLs: links use `href="ravn"` (directory index pattern), not `.html`
- `sitemap.xml`, `robots.txt`, `app-ads.txt`, Google site verification at root
- `og-image.jpg` (5 MB — candidate for compression)

## Conventions Observed
- Heavy SEO investment: JSON-LD (Person, WebSite, SoftwareApplication ×6), OG/Twitter cards, canonical URLs — preserve verbatim on redesigns
- Google Analytics 4: `G-N24K5M22QV`
- Each app has a brand accent color: Ravn purple, Logline red, QuitPilot emerald, Verbalyze cyan, Fastual sky, Daily Bar amber

## Gotchas & Traps
- Root `style.css`/`script.js` are now ORPHANED (landing page is self-contained as of 2026-06-12); sub-pages reference their own copies, not root
- Material Symbols font URL must list every icon name used in its `icon=` param
- Anchor IDs `#work`, `#about`, `#contact` may have inbound links — keep stable

## Open Questions
- Should orphaned root `style.css`/`script.js` be deleted?
- Should `og-image.jpg` be regenerated to match the new Raven & Bone aesthetic?

## Decision Log
| Date | Decision | Rationale | Alternatives Rejected |
|------|----------|-----------|----------------------|
| 2026-06-12 | Landing redesign: "Raven & Bone" editorial dark theme (Fraunces/Archivo/IBM Plex Mono, ink #0a0908, bone #e9e4da, ember #e8542f) | Distinctive, ties to Ravn/Huginn-Muninn brand story | Keeping Tailwind + Playfair look |
| 2026-06-12 | Custom 2D-canvas boids murmuration instead of Three.js | Same visual impact, ~0 KB dependency vs ~600 KB, better mobile perf | Three.js particle system |
| 2026-06-12 | index.html fully self-contained (inline CSS/JS) | User constraint: touch only index.html; avoids breaking shared assets | Editing root style.css/script.js |
