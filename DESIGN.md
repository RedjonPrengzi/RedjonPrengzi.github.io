---
name: Redjon Prengzi Portfolio
description: Charcoal developer studio with focused app showcases and a warm desk image.
colors:
  background: "#0a0a0b"
  foreground: "#f4f4f5"
  muted: "#a1a1aa"
  line: "#ffffff1a"
  lavender: "#b6a5dc"
  logline: "#f0515a"
  ravn: "#ad90ff"
  quitpilot: "#3cc6a6"
  verbalyze: "#35cfff"
  fastual: "#34dc81"
  daily-bar: "#ffb31f"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "96px"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03125em"
  headline:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.03em"
  app-statement:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "46px"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "'Bricolage Grotesque', sans-serif"
    fontSize: "17px"
    fontWeight: 600
rounded:
  panel: "36px"
  panel-mobile: "28px"
  badge: "14px"
  pill: "999px"
spacing:
  small: "14px"
  medium: "24px"
  large: "28px"
  panel-gap: "32px"
  broad: "48px"
  spacious: "64px"
components:
  button-light:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-light-hover:
    backgroundColor: "{colors.lavender}"
  button-outline:
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  app-panel:
    textColor: "{colors.foreground}"
    rounded: "{rounded.panel}"
    padding: "64px 80px"
  app-panel-mobile:
    rounded: "{rounded.panel-mobile}"
    padding: "32px 24px"
---

# Design System: Redjon Prengzi Portfolio

## Overview

**Creative North Star: "Developer Desk"**

A charcoal developer studio: warm desk imagery introduces the maker, while generous tinted panels let the shipped apps carry the evidence. Bricolage Grotesque supplies a direct, slightly informal voice across the whole homepage. Large, tightly tracked statements sit beside readable supporting copy and rounded actions.

Restraint remains the product commitment: each app solves one useful job, and the page gives each job space to be understood. The desk scene is an original generated atmospheric illustration, not documentation of the developer's actual workspace. Real app icons and screenshots belong to the catalogue.

This document describes the current homepage only, extracted from `index.html` and `src/input.css` (compiled to `style.css`). The app subpages retain independent existing visual systems; these tokens do not authorize restyling them. The approved direction and homepage composition live in `.impeccable/surfaces/index-html.md`. Older homepage type and slab descriptions in `PRODUCT.md` are historical; durable product truth, routes, and evidence constraints still apply.

**Key Characteristics:**
- Charcoal ground, bright ink, muted supporting copy, and lavender emphasis.
- One Bricolage Grotesque family with size and weight defining the hierarchy.
- Broad rounded panels, pill actions, and quiet hairline boundaries.
- App-specific tonal surfaces with actual app imagery.
- Color and underline responses instead of moving or shadow-lifting cards.

## Colors

The palette combines a neutral charcoal studio with a soft lavender accent and app-owned color tints. Frontmatter values are normative; the source custom properties retain the same names for the shared colors.

### Primary
- **Studio Lavender** (`lavender`): hero emphasis, primary action hover, and visible keyboard focus.

### Secondary
- **Logline Coral**, **Ravn Lilac**, **QuitPilot Teal**, **Verbalyze Cyan**, **Fastual Green**, and **Daily Bar Amber**: corresponding app category copy, feature checks, and softly tinted panel atmosphere. Each panel also uses its own muted supporting ink and dark tint in the source; those contextual mixtures are not separate global colors.

### Neutral
- **Studio Charcoal** (`background`): page ground, dark action text, and header contact background.
- **Bright Ink** (`foreground`): headlines, primary text, and light pill actions.
- **Muted Ink** (`muted`): section descriptions, approach copy, and footer supporting text.
- **Quiet Line** (`line`): panel outlines, catalogue bridge, principles divider, and footer divider.

### Named Rules
**The App-Owned Color Rule.** Keep a panel's category, feature checks, and atmosphere tied to that app's accent; primary download actions remain light for consistent recognition.

## Typography

**Display Font:** Bricolage Grotesque (sans-serif fallback)
**Body Font:** Bricolage Grotesque (sans-serif fallback)

**Character:** A single expressive sans family avoids a decorative secondary voice. Big statements are compact and tightly tracked; supporting paragraphs keep normal tracking and relaxed leading.

### Hierarchy
- **Display:** hero statement; scales from the frontmatter desktop role to 84px at 1000px, 64px at 600px, and 54px at 360px. The second line carries lavender emphasis.
- **Headline:** approach statement; contact uses the same weight and tracking with its own 56px desktop / 36px phone size. The catalogue heading is a 72px, 700-weight sibling.
- **App statement:** the job the app performs; compact panels use 34px. Featured panels reduce with available width, reaching 37px on phones and 32px on the narrowest breakpoint.
- **Title:** app identity; compact panels use 22px and featured panels use 27px on phones.
- **Body:** app descriptions; supporting copy spans 17-19px, with hero introduction at 22px desktop / 19px phone. Measures are constrained per context rather than by a universal character limit.
- **Action:** pill labels; navigation and detail links use sentence-case 14-16px text.

### Named Rules
**The Single Voice Rule.** Use Bricolage Grotesque for homepage statements, descriptions, navigation, and actions; hierarchy comes from size and weight rather than a serif or icon-font display treatment.

## Layout

The centered container caps at 1440px. Its gutters step from 64px to 40px at 1300px, 32px at 1000px, 24px at 600px, and 20px at 360px. Catalogue panels share a 32px desktop gap. Large section spacing gives the catalogue, approach, and contact clear boundaries without decorative dividers everywhere.

Featured app panels are two-column copy-and-screenshot spreads with an alternating reversed variant. At 760px they become one column, copy first. Compact app panels form three columns and become one column at the same breakpoint. The principles follow that responsive change: desktop columns have vertical dividers and 40px internal padding, while phone rows remove the vertical borders and padding. The desktop footer gives the identity the remaining width and both link columns their content width; footer identity spans both columns on smaller screens.

At 600px the header retains Contact and hides the two desktop navigation links; catalogue access remains available through the hero and bridge. The hero uses distinct landscape and portrait crops, with phone copy occupying the portrait image's clear upper space. Preserve `#work`, `#about`, and `#contact`, clean app-directory URLs, semantic landmarks, and the skip link.

## Elevation & Depth

Panels are flat at rest and on hover: the homepage has no authored card shadows or lift transforms. Depth comes from low-opacity radial app tints, subtle borders, image composition, and the warmer photographic hero. Contact uses a lavender-dark radial wash. Button backgrounds change on hover, and text links draw a 1px underline in from the left; focus uses a lavender outline (2px, 5px offset). Pressable pills and badges settle slightly on press (1px down, 98% scale, 120ms). The hero is the only entrance animation: both headline lines, the introduction, and the primary action fade in while rising 16px, 800ms on an expo ease-out, staggered over 280ms. Color transitions take 200-220ms. Reduced motion disables the hero entrance and smooth scrolling and reduces transitions and animations to 0.01ms.

### Named Rules
**The Tonal Depth Rule.** Use restrained tonal surfaces and real product imagery to separate content; do not reintroduce the retired slab-shadow or glyph-glow vocabulary on the homepage.

## Shapes

Large app and contact containers share the panel radius; the phone variant softens to the smaller panel radius. Primary actions and header Contact use pills. App Store badges are rounded rectangles, and the app icons retain rounded-square silhouettes. Panel outlines and section dividers are quiet single-pixel strokes. Screenshots are clipped with rounded corners; compact panels crop their image at the lower edge.

## Components

### Buttons
Friendly, clear light pills.
- **Primary:** bright fill, charcoal text, action typography, frontmatter padding, and a 56px minimum height.
- **Hover / Focus:** lavender fill on hover; shared lavender focus outline. No hover translation.
- **Copy address:** outlined secondary pill with bright ink, a quiet line border, and inline copy SVG. Hover adds a faint white fill; the disabled waiting state reduces opacity. Result text occupies a reserved live-status line.

### App Store Badge
A consistent download anchor on every app surface.
- White fill, charcoal text, rounded rectangle, inline Apple SVG, and a two-line store label.
- Hover changes the fill to a pale neutral; keyboard focus uses the shared outline.
- Compact cards use a smaller badge variant. The small auxiliary caption is a badge detail, not a general UI type size.

### Cards / Containers
Roomy app-owned surfaces, with the product doing the talking.
- Shared outlined rounded form; app-specific dark tint and radial accent wash.
- Featured variant: identity, large job statement, description, feature list, actions, and paired screenshots.
- Compact variant: identity, statement, description, actions, and a single lower screenshot crop.
- Cards themselves are not clickable; store and detail anchors carry the actions. No card hover elevation.

### Navigation
Sentence-case text beside a compact developer wordmark. Desktop Contact is an outlined dark pill; on phones it becomes a plain link. Text brightens on hover and receives the shared focus outline. Navigation, detail, and footer text links draw their underline in on hover and focus. There is no current homepage menu overlay.

### Contact Panel
A centered tonal panel with a full-width headline, supporting paragraph, and two adjacent actions: light email pill with mail SVG and outlined Copy address pill with copy SVG. Icons are 20px with 10px action gaps. The headline fits one line at the 1440px desktop composition; the action row wraps when needed on smaller screens. The email anchor remains usable if clipboard access fails, and the result is announced below the row.

### Approach Principles
Three equal desktop columns beneath a quiet top divider, with vertical dividers separating the columns. Each begins with a bright line SVG (28px target, scissors, or door), followed by a 700-weight title and muted body. Icon-to-title and title-to-body gaps are 14px. The phone layout stacks the principles and removes vertical dividers.

## Do's and Don'ts

### Do:
- **Do** use the homepage's charcoal, Bricolage, lavender, and rounded-panel vocabulary together.
- **Do** keep each app's tonal atmosphere and metadata tied to its own identity.
- **Do** use actual app imagery and functional download/detail links as the catalogue's evidence.
- **Do** retain visible keyboard focus, the skip link, reduced-motion behavior, stable anchors, and clean app routes.
- **Do** preserve readable supporting ink against each contextual surface.

### Don't:
- **Don't** impose this homepage system on unchanged app subpages.
- **Don't** restore the superseded serif, slab-shadow, glyph-glow, or widely tracked uppercase homepage system.
- **Don't** add app screenshots or icons to the desk hero; its image and clear text area carry the opening.
- **Don't** present the generated desk illustration as the owner's real photographed workspace.
- **Don't** invent testimonials, download metrics, client logos, or other evidence the portfolio does not have.
