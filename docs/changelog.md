# Changelog

All notable changes to this portfolio will be documented here.
The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
