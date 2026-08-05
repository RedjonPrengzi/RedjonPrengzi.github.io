# Product

<!-- impeccable:product-schema 1 -->

> **Provenance:** Primary goal and app-set scope confirmed by the owner on 2026-08-05. All other facts below are inferred from the repository (code, copy, SEO/structured data) and were presented for correction at that time; none were independently user-confirmed.

## Platform

web

## Stack

Static site on GitHub Pages (`.nojekyll` present; no SSR). The landing page (`index.html`) consumes compiled Tailwind v4 output — `src/input.css` → `style.css` via `@tailwindcss/cli` — plus vanilla `script.js` for the mobile menu. Each app ships its own self-contained sub-page bundle under its own directory (`ravn/`, `logline/`, etc.). Fonts and Material Symbols are loaded from the Google Fonts CDN.

## Users

- **Primary:** people discovering and evaluating the apps — potential downloaders arriving from search, links, or the App Store ecosystem.
- **Secondary:** anyone assessing Redjon Prengzi's craft and credibility as a mobile developer (peers, press, recruiters, would-be collaborators). The contact CTA ("Let's build something that matters") serves this audience but is **not** the site's primary goal.

## Product Purpose

A personal portfolio and app-showcase hub for Redjon Prengzi, a mobile developer who builds focused, single-purpose native iOS/Android apps in his spare time. The site is the canonical entry point that funnels visitors to each app's App Store listing while establishing a credible body of work. **Success = app downloads and recognition of craft** — not lead generation, which is secondary.

## Positioning

A one-developer app studio whose entire catalog is defined by restraint: every app does *one thing well*, rejecting the engagement-maximizing bloat (endless feeds, notifications, complexity-as-value) common to the category. Each product began as a personal solution to a real problem and shipped as a clean, opinionated tool. That "anti-bloat, single-purpose" position is the claim a neighboring app-maker's portfolio could not truthfully copy.

## Operating Context

- Static hosting on GitHub Pages; the root is the landing page, six directories hold per-app pages.
- Visitors land on the hero, scroll the curated work grid, then optionally read the philosophy and contact sections.
- Apps are distributed via the Apple App Store (linked from each card and sub-page); the site routes to those listings rather than hosting the apps.
- Contact flows through `prengzi.redjon@gmail.com` and outbound links to GitHub, X, and LinkedIn.

## Capabilities and Constraints

- **Catalog (stable and complete — owner-confirmed 2026-08-05):** six apps, each with its own sub-page, App Store link, and brand accent color:
  - Ravn — productivity, **purple**
  - Logline — entertainment, **red** (Featured)
  - QuitPilot — health, **emerald**
  - Verbalyze AI — health, **cyan**
  - Fastual — health, **cyan**
  - The Daily Bar — entertainment, **amber**
- **Routing convention:** clean directory URLs (`href="ravn"`, not `ravn.html`).
- **SEO / structured-data investment (preserve verbatim on edits):** JSON-LD Person, WebSite, and SoftwareApplication ×6; Open Graph and Twitter cards; canonical URLs; `sitemap.xml`, `robots.txt`, `app-ads.txt`; Google Search Console verification file.
- **Analytics:** Google Analytics 4, property `G-N24K5M22QV`.
- **Stable anchors:** `#work`, `#about`, `#contact` may carry inbound links — keep them.
- **Icon-font gotcha:** the Material Symbols stylesheet URL must list every icon name used in its `icon=` parameter; adding an icon means updating that URL.
- **Theme:** dark-only editorial palette; no light mode.
- **Mobile menu:** vanilla-JS toggle in `script.js`; `prefers-reduced-motion` respected via CSS.

## Brand Commitments

- **Voice / philosophy:** "Clarity is the ultimate feature." Intentional products that respect the user's time, solve one problem completely, and get out of the way.
- **Type:** Playfair Display (serif — display and italic moments) + Plus Jakarta Sans (sans — body). This is the *actual shipped* pairing. (A prior `PROJECT_CONTEXT.md` referenced an unbuilt "Raven & Bone" Fraunces/Archivo system; it does not match the files in the repo.)
- **Color:** the per-app accent colors listed above; an "RP" serif-italic monogram is used in the favicon, header, and footer.
- **Tone:** editorial, restrained, confident; wide letter-spacing on micro-labels; italic serif for personality.

## Evidence on Hand

- Real, owner-written app descriptions and taglines (in `index.html` and each sub-page).
- Real App Store URLs for all six apps.
- Real contact details: `prengzi.redjon@gmail.com`, GitHub (`RedjonPrengzi`), X (`@RediPrengzi`), LinkedIn.
- `og-image.jpg` exists (~5 MB) but may not match the current visual direction.
- **Absences future work must not fabricate:** no headshot or portrait, no testimonials, no press quotes, no client/customer logos, no download counts or metrics.

## Product Principles

1. **One thing well.** Every app — and every page — earns its place by doing a single job completely.
2. **Clarity over engagement.** Design for the user's intent, not for retention metrics; restraint is the feature.
3. **Credibility through craft.** The portfolio's authority comes from shipped, opinionated work, not from claims.
4. **Protect the routing and SEO surface.** Clean URLs, stable anchors, and structured data are durable infrastructure; don't break them for a visual change.

## Accessibility & Inclusion

- Established baseline: skip-to-content link, `:focus-visible` ring, `prefers-reduced-motion` handling, ARIA on the mobile-menu button and controls, semantic landmarks (`header` / `main` / `nav` / `footer`).
- Dark-only; contrast tuned for the near-black ground (secondary text kept legible against `#030303`).
