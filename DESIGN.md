---
name: Redjon Prengzi Portfolio
description: Dark editorial app-showcase hub for a single-purpose mobile app studio.
colors:
  depth-black: "#030303"
  depth-charcoal: "#0a0a0c"
  mesh-1: "#0f172a"
  mesh-2: "#1e1b4b"
  mesh-3: "#020617"
  ink-bright: "#ffffff"
  ink-primary: "oklch(70.4% 0.04 256.788)"
  ink-secondary: "oklch(44.6% 0.043 257.281)"
  editorial-purple: "oklch(62.7% 0.265 303.9)"
  editorial-red: "oklch(63.7% 0.237 25.331)"
  editorial-emerald: "oklch(69.6% 0.17 162.48)"
  editorial-cyan: "oklch(71.5% 0.143 215.221)"
  editorial-amber: "oklch(76.9% 0.188 70.08)"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  display-italic:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontWeight: 300
    lineHeight: 1.625
    letterSpacing: "0.025em"
  label:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontWeight: 700
    fontSize: "0.6875rem"
    letterSpacing: "0.3em"
    textTransform: uppercase
rounded:
  none: "0"
  sm: "0.25rem"
  md: "0.375rem"
spacing:
  base: "0.25rem"
  section-y: "6rem"
  section-y-lg: "10rem"
  container-max: "80rem"
---

# Design System: Redjon Prengzi Portfolio

## Overview

**Creative North Star: "The Editorial Sanctum"**

A dark editorial publication that happens to be a website. The page reads like a curated print folio: a Playfair Display italic voice carries every peak moment, Plus Jakarta Sans keeps the body quiet and legible, and the whole thing sits on a near-black ground (`#030303`) that lets type and a single accent hue do the work. Restraint is the thesis the product sells ("Clarity is the ultimate feature"), and the visual system has to embody it, not just decorate it.

Depth is structural, not decorative. Slab shadows (large offset, soft blur, faint top-left highlight) are how cards separate from the mesh-gradient atmosphere and how the eye learns what is interactive. The accent hues, one per app, are scarce on purpose — they appear only on the glyph, the primary call-to-action, and a glow, and nowhere else. The system has no light mode by commitment; the near-black ground is the stage, not a choice.

The anti-reference is the engagement-maximizing app aesthetic the catalog exists to reject: bright whites, saturated gradients, card grids of equal weight, and accent color sprayed across every surface. Here, atmosphere comes from layered radial meshes, authority comes from the serif italic, and a single accent per surface carries identity without volume.

**Key Characteristics:**
- Dark-only editorial palette on `#030303`; no light mode.
- Playfair Display (serif, italic-as-emphasis) for display; Plus Jakarta Sans for body and labels.
- One accent hue per app surface, used on ≤3 elements (glyph, primary CTA, optional glow).
- Structural slab shadows carry depth; mesh gradients carry atmosphere.
- Wide letter-spacing (`0.3em–0.5em`) and uppercase on micro-labels; tight tracking (`-0.025em`) on display.
- Italic is a peak-only device, never body copy.

## Colors

A single near-black ground carries the whole system; five editorial accents provide per-app identity, each used sparingly on its own surface.

### Primary
- **Depth Black** (`#030303`): the page ground and the brand `theme-color`. Every section either sits on this flat or layers a mesh gradient over it.
- **Ink Bright** (`#ffffff`): display type, primary CTA text, and the hover terminal state.

### Secondary (the per-app accent family)
Each app owns one hue, applied to its glyph, its primary "Download" CTA, and its glyph-glow. The hue is never used on body copy, borders, or backgrounds outside its app surface.
- **Editorial Purple** (`oklch(62.7% 0.265 303.9)`): Ravn.
- **Editorial Red** (`oklch(63.7% 0.237 25.331)`): Logline (currently the featured app).
- **Editorial Emerald** (`oklch(69.6% 0.17 162.48)`): QuitPilot.
- **Editorial Cyan** (`oklch(71.5% 0.143 215.221)`): Verbalyze AI and Fastual (shared hue).
- **Editorial Amber** (`oklch(76.9% 0.188 70.08)`): The Daily Bar.

### Neutral (the ink ramp)
- **Ink Primary** (`oklch(70.4% 0.04 256.788)`, slate-400): body copy and secondary text. The AA-passing shade against `#030303`.
- **Ink Secondary** (`oklch(44.6% 0.043 257.281)`, slate-600): footer copyright and the quietest micro-labels only.

### Named Rules
**The One Hue Rule.** A single accent hue appears on any given app surface — on the glyph, the primary CTA, and the glow, and nowhere else. Its scarcity is the point; spraying an accent across borders, backgrounds, or body copy breaks the system.

**The Body-Ink Floor Rule.** Body and secondary text uses Ink Primary (slate-400, oklch 70.4%) or lighter. Ink Secondary (slate-500/600) fails WCAG AA against `#030303` and is reserved for non-essential micro-labels like the footer copyright.

## Typography

**Display Font:** Playfair Display (with Georgia, serif)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif)

**Character:** A serif/sans pairing where the serif italic is the personality and the sans is the stagehand. Playfair Display italic carries every peak — hero emphasis, section titles, the thesis line, the contact headline — and never appears in body copy. Plus Jakarta Sans keeps everything else quiet, light-weight, and legible, so the italic moments stay special.

### Hierarchy
- **Display** (Playfair, light 300, `text-8xl`/`6rem`–`text-9xl`/`8rem`, line-height 1.25, tracking `-0.025em`): hero and contact headlines only. The page's loudest type.
- **Display Italic** (Playfair, normal 400, italic, same scale): the emphasis device inside display type (e.g., the italic "thing" in the hero, italic section titles). Peak-only.
- **Thesis** (Playfair, italic, `text-5xl`/`3rem`–`text-6xl`/`3.75rem`, tracking tight, `text-wrap: balance`): the single manifesto line per section ("Clarity is the ultimate feature."). One per scroll.
- **Title** (Playfair, italic, `text-2xl`–`text-4xl`, tracking tight): app card names and section sub-headings.
- **Body** (Plus Jakarta Sans, light 300, `text-base`/`1rem`–`text-lg`/`1.125rem`, line-height 1.625, tracking `0.025em`, measure 65–75ch): all paragraph copy. Never italic.
- **Label** (Plus Jakarta Sans, bold 700, `text-[11px]`/`0.6875rem`, tracking `0.2em–0.5em`, uppercase): CTAs, nav links, Featured tags, footer copyright. The minimum legible size for functional text is `text-[11px]`.

### Named Rules
**The Italic Reserve Rule.** Italic Playfair appears only on display, thesis, and title moments — hero emphasis, section headlines, the manifesto line, contact headline, and app card names. Card descriptions, body paragraphs, and supporting copy use regular Plus Jakarta Sans. If italic appears in body copy, the peak moments lose their force.

**The Tracking Split Rule.** Display tracks tight (`-0.025em` to `-0.05em`); labels track wide (`0.2em` to `0.5em`) and uppercase. The two never cross.

## Layout

A single-column scroll narrative on a max-width `80rem` (`max-w-7xl`) container, with section vertical padding at `6rem` (mobile) to `10rem` (desktop). The page alternates between flat `bg-depth-black` sections and `mesh-gradient` atmosphere sections to create rhythm: hero (mesh) → work (flat) → philosophy (mesh) → contact (mesh) → footer (flat).

The work section uses an **editorial spotlight** pattern: a full-width featured `<article>` (currently Logline) above a 3-column secondary grid (5 cards) on desktop, collapsing to 2 columns at the `sm` breakpoint and 1 column on mobile. The spotlight carries the larger type scale, a Featured tag, and the full app description; secondary cards are compact with a shorter description and tighter padding.

Two faint vertical hairlines (`w-px`, `bg-white/[0.02]`) anchor the work section at the quarter marks — a structural device, not decoration. Stable anchors `#work`, `#about`, `#contact` carry inbound links and must not change.

Breakpoints follow Tailwind defaults: `sm` 40rem, `md` 48rem, `lg` 64rem. Body measure stays 65–75ch via `max-w-2xl` on paragraph blocks.

## Elevation & Depth

Depth is structural, carried by slab shadows. The system does not use tonal layering as its primary depth device — the slab shadow is what tells the eye "this is a card, this is interactive."

### Shadow Vocabulary
- **Slab Rest** (`box-shadow: 20px 20px 60px #010102, -5px -5px 20px rgba(255,255,255,0.02)`): the default state of every `.slab-card`. Large offset (20px), long blur (60px), faint top-left highlight. Reads as a raised slab on the dark ground.
- **Slab Hover** (`box-shadow: 12px 20px 40px #010102, -2px -2px 10px rgba(255,255,255,0.05)` + `transform: translateY(-4px)`): the card lifts and the shadow tightens. The 500ms `cubic-bezier(0.23, 1, 0.32, 1)` transition is the only authored motion on a card.
- **Glyph Glow** (`filter: drop-shadow(0 0 15px currentColor)` at `opacity: 0.8`, intensifying to `25px` / `opacity: 1` / `scale(1.1) rotate(5deg)` on card hover): the accent-colored halo on Material Symbols glyphs. Secondary atmosphere, not structural.

### Named Rules
**The Slab-Only Depth Rule.** Cards are the only elements that cast shadows. Glyph glow is a filter effect on a single element, not a box-shadow, and it is the only non-slab depth device. Do not add drop shadows, inner shadows, or colored halos to buttons, inputs, or text — the slab vocabulary is closed.

**The Reduced-Motion Rule.** All transitions and the glyph-glow filter are neutralized under `prefers-reduced-motion: reduce` (transition-duration `0.01ms`, hover transforms removed, glow filter pinned to the rest state). Motion is a privilege, not a default.

## Shapes

The form language is almost entirely sharp. Cards and containers use `rounded-sm` (0.25rem) at most — a barely-there softening that reads as intentional rather than round. The focus-visible ring (`box-shadow: 0 0 0 2px rgba(255,255,255,0.3), 0 0 0 4px #030303`) is a double-ring halo, not a border-radius-dependent shape.

Borders are 1px and low-opacity (`border-white/5` at rest, `border-white/20` on hover, `border-white/20` on section dividers). There are no pill shapes, no large radii, no rounded buttons. The Material Symbols glyphs are the only rounded silhouettes on the page, and they sit inside sharp containers by contrast.

**The Sharp-Edge Rule.** Container radii stay at `rounded-sm` (0.25rem) or none. Pills and large radii (`rounded-lg` and up) are reserved for controls that do not exist in this system yet; do not introduce them on cards, buttons, or inputs without an explicit world decision.

## Components

### Slab Card
The signature component. A raised slab on the dark ground, carrying one app's identity.
- **Shape:** `rounded-sm` (0.25rem), 1px border (`white/5` rest, `white/20` hover).
- **Background:** linear-gradient `145deg, #0e0e12, #050507` (neutral) or a per-app tinted variant on the featured card only (inline `style`, e.g. Logline's `linear-gradient(145deg,#1f1012,#0a0608)` with `rgba(239,68,68,0.22)` border).
- **Shadow:** Slab Rest → Slab Hover on `:hover`, 500ms ease.
- **Featured variant:** `.slab-card-featured` is accent-agnostic in CSS (neutral deep gradient, `white/10` border); the accent tint is applied via inline `style` on whichever card is featured, so swapping the featured app touches one inline style, not the stylesheet.

### Primary CTA (text link)
- **Shape:** no container; bare uppercase text link with wide tracking.
- **Style:** `text-[11px]`, `uppercase`, `tracking-[0.2em–0.3em]`, `font-bold`, the app's accent hue (e.g. `text-red-500`), lightening one step on hover (`text-red-400`). 11px is the minimum.
- **Secondary CTA:** `text-[11px]`, regular weight, `text-slate-400`, `tracking-wide`, hover to `text-slate-200`. Always sits below the primary.

### Email Link (contact)
- **Style:** oversized `mailto` (`text-2xl`–`text-5xl`, `font-bold`, white), with a 700ms underline-grow (`w-0` → `group-hover:w-full`) and a hover text-shadow glow (`0 0 30px rgba(255,255,255,0.5)`). The contact surface is a moment, not a form.

### Navigation
- **Desktop:** fixed top, `text-[11px]` uppercase labels, `tracking-[0.3em]`, `text-slate-400` → `text-white` on hover, with a `nav-link` padding wrapper.
- **Mobile:** full-screen overlay (`mesh-gradient` background), `text-2xl` italic Playfair links, focus-trapped, Escape/outside-tap to close, focus returned to toggle on close.

### Material Symbols Glyph
- **Role:** the per-app identity mark inside each slab card.
- **Style:** `text-6xl`/`text-8xl` (featured) or `text-5xl`/`text-6xl` (secondary), the app's accent hue at `/80` opacity, with `glyph-glow` filter. The icon name must be added to the Material Symbols stylesheet URL's `icon=` parameter or it will not render.

## Do's and Don'ts

### Do:
- **Do** use Playfair Display italic only for display, thesis, and title moments; body copy is Plus Jakarta Sans regular.
- **Do** apply exactly one accent hue per app surface — glyph, primary CTA, and glow — and keep it off everything else.
- **Do** keep body and secondary text at Ink Primary (slate-400) or lighter; it is the AA-passing shade against `#030303`.
- **Do** carry the featured card's accent tint via inline `style`, not via a stylesheet class, so swapping the featured app is a one-line change.
- **Do** neutralize all motion and the glyph-glow filter under `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** introduce a light mode. The near-black ground is a brand commitment, not a theme toggle.
- **Don't** use italic on card descriptions or body paragraphs. Italic is a peak-only device; overuse flattens the peaks.
- **Don't** use Ink Secondary (slate-500/600) for body copy — it fails WCAG AA (4.2–4.3:1) against the ground. Reserve it for the footer copyright only.
- **Don't** add drop shadows, colored halos, or pill shapes to buttons, inputs, or text. The slab-card vocabulary is the only shadow system; sharp edges are the only form language.
- **Don't** use functional text below `text-[11px]`. 9–10px labels fail legibility and touch-target thresholds.
- **Don't** reformat the stable anchors (`#work`, `#about`, `#contact`); they carry inbound links.
