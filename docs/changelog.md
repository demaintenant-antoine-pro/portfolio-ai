# Changelog

All notable changes to this portfolio will be documented here.
The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.2.0] — 2026-04-24

*Major positioning shift: "AI Specialist & BI Lead" → "AI Expert".
Full retirement of the unreachable Human-mode code path (~1,500 lines
removed). Hero, link previews and SEO all aligned around the new pitch:
deploy AI in enterprise operations, train C-Levels, build custom apps.*

### Added
- **Hero portrait** — detoured PNG of Antoine with cyberpunk treatment
  (radial blob, scanline, glow) and a floating tag "AI Expert · Agentic
  systems + custom apps" (EN/FR).
- **International Presence grid** — replaces the old 6-country ticker
  with a responsive static grid (2–3 cols) showing flag, name, sub and
  3 tags per country. Pulsing hint pill "👆 Cliquez sur un pays pour
  découvrir mon histoire" (EN/FR) to telegraph that cards are clickable.
- **Country centroid fallback** — 62 ISO-3166 countries with approximate
  centroid + deterministic jitter, so past-visit markers show up on the
  visitor map even when the worker returns `{cc,city,country}` without
  `lat/lon`.
- **Testimonial "The Proof" chapter label** — missing from the story
  arc; now Chapter 02.
- **Leaflet zoom controls** on the visitor map (top-right), styled to
  match the ADM.SYS theme; scroll-wheel + double-click + touch zoom
  enabled; `maxZoom` 8 → 10.
- **Open Graph image template** (`og-image.html`, 1200×630) — source
  for generating `og-image.png` used by LinkedIn / Slack / Twitter
  link previews.

### Changed
- **Hero sub** rewritten around the "AI Expert" trio: "I help enterprises
  deploy AI in their operations, train their C-Levels to run it, and
  build the custom applications that automate the work their current
  stack can't." (EN/FR).
- **Link-preview metadata** — `title`, `og:title`, `twitter:title`,
  JSON-LD `jobTitle`, `meta description`, `og:description`,
  `twitter:description`, `keywords` and `package.json` all realigned
  around "AI Expert" + the deploy/train/build trio.
- **Nav menu order** now matches the real DOM scroll order:
  `about → experience → testimonials → dashboard → pipeline → projects
  → stack → certificates → blog → contact → terminal` (previously
  shuffled). Both FR/EN locales + `CHAPTERS` marginal nav updated.
- **Chapter label "The Proof"** moved from dashboard (Chapter 03) to
  testimonials (Chapter 02); dashboard relabeled "Chapter 03 — The
  Dashboard".
- **Voyager tiles** replace `dark_all`/`dark_nolabels` on the visitor
  map (labels visible, tiles tinted by CSS filter to stay on-theme).
- **Testimonial modal text sizes** bumped for readability (.4 → .62–.64
  rem); modal re-mounted via `ReactDOM.createPortal(document.body)` to
  escape the section's stacking-context trap.

### Fixed
- **Ticker click-through** — `setPointerCapture` on pointerdown was
  redirecting synthesised clicks away from nested buttons ("Read full",
  country cards, project links). Now deferred until 6 px of horizontal
  movement; plain clicks reach their target, swipe still works.
- **Testimonial modal backdrop** — previously rendered inside
  `<section id="testimonials">` whose `position:relative; z-index:5`
  scoped the modal's `z-index:9999` to that context, letting the
  dashboard (later in DOM, same z-index) paint over the blur. Portal to
  `document.body` restores full-viewport coverage.
- **Visitor-map `.vmap-overlay`** gradient that dimmed the bottom 60 px
  of the map for no reason — removed.
- **COUNTRIES data** — all 6 countries (France, Canada, Germany, Italy,
  Spain, Turkey) now reach the UI; ticker was showing only 4 at a time.

### Removed
- **Human mode entirely** — was kept as dead code after `App()` forced
  `mode="tech"`. Deletions (~1,479 lines total):
  - `const TH` FR+EN translations (~80 lines)
  - 22 `mode === 'human'` ternaries in `PortfolioApp` + nav + ticker + hero
  - 35+ `isHuman` checks in `VisitorMap`
  - Full ~110-line Human `if(isHuman){ return ... }` branch in
    `VisitorMap`
  - `mode-switch-btn`, `onSwitchMode` prop chain, `theme` useState,
    dynamic `data-theme` attribute writes
  - `{mode!=='human'&&<section id="stack">}` gate
  - CSS: `body[data-theme=light]` block (223 lines), orphaned
    `.hstory/.htest/.hroi/.hcon/.hcta/.hbook/.himpact/.hfooter/.h-*`
    styles (~218 lines), `.mode-switch-*` rules,
    `[data-theme=warm]` terminal selector, `#visitor-map-human` ID.

### Mobile
- **Chat input focus** — `outline:none` had no fallback; added
  `:focus-visible` outline on the input plus `:focus-within` glow on
  the row, so the terminal pulses purple while typing.
- **Tap feedback on cards** — `:hover` states with no `:active`
  fallback meant touch users saw nothing. Extended the tap-feedback
  rule to `.project-card`, `.blog-card`, `.stack-card`, `.contact-card`,
  `.cert-sec`, `.country-card-grid`, `.testi-card-v2`, `.exp-nav-item`,
  and interactive elements (`filter-btn`, `nav-link`,
  `mobile-menu-link`, floating pills).
- **ROI slider thumb** 14 px → 22 px with an 18 px vertical padding
  around the input so the overall hitbox reaches 40 px+. Added
  `-moz-range-thumb` variant, `hover/active` `scale(1.12)`, and a
  `:focus-visible` outline.

### Under the hood
- `app.jsx`: 2,601 → 2,319 lines (−11%)
- `app.js` (compiled): 7,217 → 6,521 lines (−10%)
- `style.css`: 2,714 → 2,213 lines (−18%)
- Total project: 12,532 → 11,053 lines (−1,479 lines, −12%)

## [1.1.0] — 2026-04-21

### Added
- Open Graph, Twitter Card and JSON-LD structured data for rich link previews and SEO.
- Inline SVG favicon and `apple-touch-icon`.
- `build` / `watch` / `start` npm scripts.
- `LICENSE` (MIT).
- `prefers-reduced-motion` support.
- Mobile: language toggle remains accessible on small screens.

### Changed
- `package.json` metadata cleaned up (author, description, keywords, license).
- Heavy animations (Three.js particle sphere, Matrix rain) are skipped when `prefers-reduced-motion` is set.
- Testimonial image `guillaume-martin.png` compressed.

### Removed
- Dead CSS rules referencing `hero-floating-contact`.

## [1.0.0] — 2026-04-06

### Added
- Initial public release on GitHub Pages.
- Dual profile mode (Tech / Human) with persistent language toggle (EN / FR).
- Interactive sections: experience timeline, pipeline demo, testimonials, blog posts, country map.
- Val.town visitor analytics worker.

### Changed
- Monolithic `index.html` split into `index.html` / `style.css` / `app.jsx` / `app.js` / `main.js`.
- Babel CLI pre-compiles JSX offline instead of in-browser.

### Fixed
- Testimonial photo paths (`.jpeg` → `.jpg`).
- Chapter numbering consistency (01 → 06).
- Dead translation keys removed.
