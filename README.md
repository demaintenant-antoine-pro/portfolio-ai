# Antoine de Maintenant — Interactive Portfolio

**Live:** [demaintenant-antoine-pro.github.io/portfolio-ai](https://demaintenant-antoine-pro.github.io/portfolio-ai)

> AI Specialist · BI Lead · Automation Architect  
> Turning manual operations into autonomous, real-time intelligence pipelines.

---

## About this project

Interactive portfolio built as a React SPA — dual profile experience, interactive demos, and live visitor tracking. Deployed via GitHub Pages.

**Features:**
- Dual profile selector — Tech mode (dark terminal) / Human mode (glassmorphism)
- XP system with interactive experience timeline
- ROI Calculator — shows the cost of *not* hiring
- Pipeline drag-and-drop demo
- Visitor tracking (geo, OS, click heatmap, session duration) via Val.town
- Testimonials from past managers, certificates
- EN/FR language toggle
- Terminal emulator, Konami code easter egg

---

## Structure

```
portfolio-ai/
├── index.html        → Entry point (~100 lines, clean HTML structure)
├── style.css         → All styles (~1,400 lines)
├── app.jsx           → React source (JSX, ~2,700 lines)
├── app.js            → Compiled output — served to browser
├── main.js           → Profile selector, Matrix rain, visitor tracker
├── images/
│   └── testimonials/ → Testimonial photos
├── CV_Antoine.pdf    → Downloadable CV
└── README.md
```

---

## How to update content

**CSS changes:**
```bash
# Edit style.css directly, then push
git add style.css && git commit -m "style: ..." && git push
```

**React/content changes:**
```bash
# 1. Edit app.jsx
# 2. Recompile
npx babel app.jsx --out-file app.js --presets @babel/preset-react
# 3. Push
git add app.jsx app.js && git commit -m "feat: ..." && git push
```

**CV update:**
Replace `CV_Antoine.pdf` and push — no other change needed.

---

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | React 18 (CDN), vanilla CSS |
| Build | Babel CLI (JSX pre-compiled, not in-browser) |
| Animations | CSS keyframes, Three.js, Canvas API |
| Tracking | Val.town serverless worker |
| Hosting | GitHub Pages |

---

## Contact

- antoinedemaintenant@alumni.ie.edu
- [linkedin.com/in/antoine2maintenant](https://linkedin.com/in/antoine2maintenant)
- Montreal, QC
