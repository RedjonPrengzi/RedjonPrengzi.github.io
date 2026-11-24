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
- Don't reintroduce the superseded serif, slab-shadow, glyph-glow, or widely tracked uppercase homepage system on any page, including the app subpages.
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
Map: assets/fonts/
Map: assets/fonts.css
Map: PRODUCT.md
Full: .impeccable/design-full.md (read a section when you need its detail)
