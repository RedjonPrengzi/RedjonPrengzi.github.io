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

<!-- impeccable:design-map -->
Name: Redjon Prengzi Portfolio
Colors: background #0a0a0b, foreground #f4f4f5, muted #a1a1aa, line #ffffff1a, lavender #b6a5dc, logline #f0515a, ravn #ad90ff, quitpilot #3cc6a6, verbalyze #35cfff, fastual #34dc81, daily-bar #ffb31f
Fonts: Bricolage Grotesque (display, headline, app-statement, title, body, action)
Spacing: small 14px, medium 24px, large 28px, panel-gap 32px, broad 48px, spacious 64px
Radius: panel 36px, panel-mobile 28px, badge 14px, pill 999px
North Star: "Developer Desk"
Rules:
- The App-Owned Color Rule. Keep a panel's category, feature checks, and atmosphere tied to that app's accent; primary download actions remain light for consistent recognition.
- The Single Voice Rule. Use Bricolage Grotesque for homepage statements, descriptions, navigation, and actions; hierarchy comes from size and weight rather than a serif or icon-font display treatment.
- The Tonal Depth Rule. Use restrained tonal surfaces and real product imagery to separate content; do not reintroduce the retired slab-shadow or glyph-glow vocabulary on the homepage.
Don't:
- Don't reintroduce the superseded serif, slab-shadow, glyph-glow, or widely tracked uppercase homepage system on the homepage; app landing pages keep their own type and accent systems (see below).
- Don't restore the superseded serif, slab-shadow, glyph-glow, or widely tracked uppercase homepage system.
- Don't add app screenshots or icons to the desk hero; its image and clear text area carry the opening.
- Don't present the generated desk illustration as the owner's real photographed workspace.
- Don't invent testimonials, download metrics, client logos, or other evidence the portfolio does not have.
Do:
- Do use the homepage's charcoal, Bricolage, lavender, and rounded-panel vocabulary together.
- Do keep each app's tonal atmosphere and metadata tied to its own identity.
- Do use actual app imagery and functional download/detail links as the catalogue's evidence.
- Do retain visible keyboard focus, the skip link, reduced-motion behavior, stable anchors, and clean app routes.
- Do preserve readable supporting ink against each contextual surface.
Map: index.html
Map: src/input.css
Map: style.css
Map: assets/site.css
Map: assets/app.css
Map: assets/app.js
Map: assets/fonts/
Map: assets/fonts.css
Map: PRODUCT.md
Full: .impeccable/design-full.md (read a section when you need its detail)

## App landing pages (dailyBars, fastual, logline, quitpilot, ravn, verbalyze)

All six app landing pages share one structure and stylesheet — `assets/app.css` +
`assets/app.js` — with per-app identity injected via custom properties on `<body>`
(`--bg`, `--surface`, `--text`, `--muted`, `--accent`, `--on-accent`, `--display`,
`--body`, `--frame`, plus `--accent-fill`/`--h1-max` overrides where a brand needs
them). QuitPilot intentionally runs a light theme; the others are dark.

Shared anatomy: nav (wordmark → section anchors → Privacy → Terms → Get in touch
pill; legal links collapse into the footer under 720px) → two-column hero (claim +
iOS/Android CTAs left, real app screenshot in `.phone-frame` right; text first on
mobile) → features card grid → one optional app-specific section (fastual onboarding
steps, quitpilot dual-mode, ravn philosophy quote, verbalyze how-it-works) → maker's
note (`.story-section`: "A note from the maker" heading + the app's first-person
story from the homepage + "— Redjon, maker of {App}" signature, presented in the
same naked-typography form as Ravn's `.quote-section` — display-font heading with
"maker" as the accent word, muted body, accent italic sign-off; the story itself
is the content, no ornament; Ravn's `.quote-section` fills this role instead) → support card → footer → Android
closed-testing modal. Entrances use `.fade-in-up` on
section parts (title, each card, icons, support-card children, footer blocks) with
staggered `delay-100/200`; the phone frame floats; all motion honors
`prefers-reduced-motion`.

Per-app themes kept from their original pages: dailyBars — dark, Oswald + Inter,
#FFAA00 with rhyme-color card swatches; fastual — "Midnight Forest", Playfair +
Inter, #2FF57E; logline — near-black, Inter, #E11D48; quitpilot — light, Poppins +
Inter, emerald; ravn — dark, Playfair + Inter, #8B5CF6 (fills darken to #7C3AED for
contrast); verbalyze — dark navy, Inter, #06b6d4.

Do: keep new sections inside this anatomy and reuse `.feature-card`, `.mini-card`,
`.support-card`, `.banner`, `.quote-section` slots rather than inventing page-level
CSS. Don't: give an app a different nav order, remove the phone-frame screenshot, or
reintroduce per-app stylesheets — the shared file is the point.
