# ⚡ Antoine de Maintenant — Interactive Portfolio

**Live:** [demaintenant-antoine-pro.github.io/portfolio-ai](https://demaintenant-antoine-pro.github.io/portfolio-ai)

> BI Engineer · AI Specialist · Automation Architect  
> Turning manual data operations into automated, real-time intelligence.

---

## 🖥️ About this project

Interactive portfolio built as a single HTML file — no framework, no build step, no dependencies to install. Deployed instantly via GitHub Pages.

**Features:**
- ROI Calculator — shows recruiters the cost of *not* hiring me
- Interactive experience timeline
- Tech stack visual grid
- Testimonials from past managers
- CV download (one click)
- Hacker / Recruiter mode toggle
- Scroll progress bar + particle animation
- Konami code easter egg 🕹️

---

## 📁 Structure

```
portfolio-ai/
├── index.html        → Full site (React + inline CSS, no build needed)
├── CV_Antoine.pdf    → Downloadable CV — replace to update
├── .gitignore        → Ignores OS/editor temp files
└── README.md         → This file
```

---

## 🔄 How to update the CV

1. Export your new CV as PDF
2. Name it exactly **`CV_Antoine.pdf`**
3. Replace the old file in this folder
4. Push to GitHub (see commands below)

The site never needs to change — only the PDF.

---

## 🚀 How to push updates

```bash
# 1. Navigate to the project folder
cd C:\Users\AntoinedeMaintenant\Documents\portfolio-ai

# 2. Stage all changes
git add .

# 3. Commit with a message
git commit -m "Your message here"

# 4. Push to GitHub → auto-deploys in ~1 min
git push
```

---

## 🛠️ Tech stack

| Layer | Tech |
|---|---|
| Frontend | React 18 (CDN), vanilla CSS |
| Animations | CSS keyframes, Canvas API |
| PDF | ReportLab (Python) |
| Hosting | GitHub Pages (free) |
| CI/CD | Push to main → live in 60s |

---

## 📬 Contact

- 📧 antoinedemaintenant@alumni.ie.edu
- 🔗 [linkedin.com/in/antoine2maintenant](https://linkedin.com/in/antoine2maintenant)
- 📍 Montreal, QC · France
