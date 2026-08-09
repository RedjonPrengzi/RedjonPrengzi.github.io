// Generates one static page per bar under dailyBars/bar/<id>/, plus an index
// and sitemap entries. GitHub Pages has no rewrites, so every shareable URL
// needs a real file on disk.
//
// Run from the repo root:  node dailyBars/generate-bar-pages.mjs
//
// The gist is the same catalog the app syncs from, so the site can be rebuilt
// without the mobile repo checked out.

import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const CATALOG_URL =
  'https://gist.githubusercontent.com/RedjonPrengzi/912fb1d2ebff881da770a2004bd38747/raw/gistfile1.txt';
const SITE_ORIGIN = 'https://redjonprengzi.github.io';
const BASE = `${SITE_ORIGIN}/dailyBars`;
const APP_STORE_URL = 'https://apps.apple.com/us/app/daily-bars/id6757107337';
const OG_IMAGE = `${BASE}/app-screenshot.png`;

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'dailyBars', 'bar');

const SITEMAP_BEGIN = '  <!-- BEGIN daily-bars generated -->';
const SITEMAP_END = '  <!-- END daily-bars generated -->';

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// --- Ported verbatim from the app's src/utils/rhyme.ts so the highlighting on
// --- the web page matches what a reader sees in the app.

function findNthOccurrence(text, word, occurrence = 1) {
  const textLower = text.toLowerCase();
  const wordLower = word.toLowerCase();
  const escapedWord = wordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(?<![\\w'])${escapedWord}(?![\\w'])`, 'gi');

  let foundCount = 0;
  let match;

  while ((match = regex.exec(textLower)) !== null) {
    foundCount++;
    if (foundCount === occurrence) return match.index;
  }

  if (foundCount === 0) {
    let searchStart = 0;
    foundCount = 0;

    while (foundCount < occurrence) {
      const matchIndex = textLower.indexOf(wordLower, searchStart);
      if (matchIndex === -1) return -1;
      foundCount++;
      if (foundCount === occurrence) return matchIndex;
      searchStart = matchIndex + 1;
    }
  }

  return -1;
}

function normalizeHighlights(verse, highlights) {
  const max = verse.length;

  return highlights
    .map((h) => {
      let startIndex = h.startIndex;
      let endIndex = h.endIndex;

      const hasValidIndices =
        typeof startIndex === 'number' &&
        typeof endIndex === 'number' &&
        startIndex > 0 &&
        endIndex > startIndex;

      if (!hasValidIndices && h.word) {
        const matchIndex = findNthOccurrence(verse, h.word, h.occurrence ?? 1);

        if (matchIndex !== -1) {
          startIndex = matchIndex;
          endIndex = matchIndex + h.word.length;
        } else {
          startIndex = 0;
          endIndex = 0;
        }
      }

      return {
        startIndex: Math.max(0, Math.min(startIndex ?? 0, max)),
        endIndex: Math.max(0, Math.min(endIndex ?? 0, max)),
        groupId: h.groupId,
      };
    })
    .filter((h) => h.endIndex > h.startIndex)
    .sort((a, b) => {
      if (a.startIndex !== b.startIndex) return a.startIndex - b.startIndex;
      return b.endIndex - a.endIndex;
    });
}

function renderVerse(verse, highlights) {
  const normalized = normalizeHighlights(verse, highlights ?? []);
  let out = '';
  let cursor = 0;

  for (const h of normalized) {
    if (h.startIndex < cursor) continue;
    if (h.startIndex > cursor) out += escapeHtml(verse.slice(cursor, h.startIndex));

    const group = Math.max(1, Math.min(8, h.groupId));
    out += `<span class="r r${group}">${escapeHtml(verse.slice(h.startIndex, h.endIndex))}</span>`;
    cursor = h.endIndex;
  }

  if (cursor < verse.length) out += escapeHtml(verse.slice(cursor));

  return out;
}

// --- Page templates

// Every page sits at /dailyBars/bar/<id>/, so site assets are always two up.
// There is deliberately no link onward to another bar: the app's premise is one
// verse a day, and a browsable catalogue on the web undercuts it.
const PREFIX = '../../';

const HEAD = `    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Oswald:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${PREFIX}style.css">
    <link rel="stylesheet" href="${PREFIX}bar.css">`;

const NAV = `    <nav class="navbar">
        <div class="container nav-container">
            <div class="logo"><a href="${PREFIX}index.html" style="color:inherit;text-decoration:none">THE DAILY BAR</a></div>
            <ul class="nav-links">
                <li><a href="${PREFIX}index.html">Home</a></li>
                <li><a href="${APP_STORE_URL}" class="btn-outline" target="_blank" rel="noopener">Get the App</a></li>
            </ul>
        </div>
    </nav>`;

const FOOTER = `    <footer>
        <div class="container footer-content-center">
            <p class="footer-brand">THE DAILY BAR</p>
            <div class="footer-links-center">
                <a href="${PREFIX}index.html">Daily Bars</a>
                <a href="${PREFIX}privacy-policy.html">Privacy</a>
                <a href="${PREFIX}terms.html">Terms</a>
                <a href="mailto:prengzi.redjon@gmail.com">Support</a>
            </div>
            <p class="footer-copyright">&copy; 2026 Redjon Prengzi.</p>
        </div>
    </footer>`;

// Pinned to the bottom because iOS Safari draws the Smart App Banner at the top.
const INSTALL_BAR = `    <div class="install-bar">
        <div class="install-copy">
            <strong>Daily Bars</strong>
            <span>One hand-picked verse a day, broken down like studio notes.</span>
        </div>
        <a href="${APP_STORE_URL}" class="btn-store" target="_blank" rel="noopener">Get the App</a>
    </div>`;

function barPage(bar) {
  const url = `${BASE}/bar/${bar.id}/`;
  const title = `"${bar.songTitle}" by ${bar.artist} — Rhyme Scheme Breakdown | Daily Bars`;
  const description = `${bar.verse.replace(/\s+/g, ' ').slice(0, 150).trim()}…`;

  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${url}">
    <!-- Native Safari banner: reads OPEN when the app is installed, VIEW when it isn't. -->
    <meta name="apple-itunes-app" content="app-id=6757107337">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${escapeHtml(`"${bar.songTitle}" — ${bar.artist}`)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta property="og:site_name" content="The Daily Bar by Redjon Prengzi">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(`"${bar.songTitle}" — ${bar.artist}`)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${OG_IMAGE}">
    <meta name="twitter:creator" content="@RediPrengzi">
${HEAD}
</head>

<body>
    <a href="#main" class="skip-link">Skip to main content</a>
${NAV}

    <main id="main" class="bar-main">
        <div class="container">
            <p class="bar-eyebrow">Bar #${escapeHtml(bar.id)}</p>
            <h1 class="bar-title">${escapeHtml(bar.songTitle)}</h1>
            <p class="bar-artist">${escapeHtml(bar.artist)}</p>

            <div class="bar-panel">
                <p class="bar-verse">${renderVerse(bar.verse, bar.rhymeAnalysis?.highlights)}</p>
            </div>

            <div class="bar-panel">
                <h2 class="bar-subhead">Rhyme Scheme</h2>
                <p>${escapeHtml(bar.rhymeAnalysis?.scheme ?? '')}</p>
            </div>

            <div class="bar-panel">
                <h2 class="bar-subhead">Producer Notes</h2>
                <p>${escapeHtml(bar.technicalBreakdown ?? '')}</p>
            </div>

            <div class="bar-cta">
                <p>Get one hand-picked verse every day, broken down like studio notes.</p>
                <a href="${APP_STORE_URL}" class="btn-store" target="_blank" rel="noopener">Download for iOS</a>
            </div>
        </div>
    </main>

${FOOTER}
${INSTALL_BAR}
</body>

</html>
`;
}

async function updateSitemap(bars) {
  const path = join(ROOT, 'sitemap.xml');
  const today = new Date().toISOString().slice(0, 10);

  const entries = bars
    .map((bar) => `${BASE}/bar/${bar.id}/`)
    .map(
      (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`,
    )
    .join('\n');

  const block = `${SITEMAP_BEGIN}\n${entries}\n${SITEMAP_END}`;
  const original = await readFile(path, 'utf8');

  const next = original.includes(SITEMAP_BEGIN)
    ? original.replace(
        new RegExp(`${SITEMAP_BEGIN}[\\s\\S]*?${SITEMAP_END}`),
        () => block,
      )
    : original.replace('</urlset>', `${block}\n</urlset>`);

  await writeFile(path, next, 'utf8');
}

async function main() {
  const response = await fetch(`${CATALOG_URL}?t=${Date.now()}`);
  if (!response.ok) throw new Error(`Catalog fetch failed: ${response.status}`);

  const bars = (await response.json()).filter(
    (bar) => bar?.id && bar.songTitle && bar.artist && bar.verse,
  );
  if (bars.length === 0) throw new Error('Catalog returned no usable bars');

  // Rebuild from scratch so bars pulled from the catalog don't linger as pages.
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  for (const bar of bars) {
    const dir = join(OUT_DIR, bar.id);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), barPage(bar), 'utf8');
  }

  await updateSitemap(bars);

  console.log(`Generated ${bars.length} bar pages and updated sitemap.xml`);
}

await main();
