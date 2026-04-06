# Portfolio AI — Changelog & Suivi des sessions

---

## Session 2026-04-03 — Restructure multi-fichiers

**Objectif :** Passer de `index.html` monolithique (4 941 lignes) à une architecture multi-fichiers propre.

**Réalisé :**
- Extraction CSS → `style.css` (1 471 lignes)
- Extraction JSX React → `app.jsx` (2 733 lignes source)
- Compilation JSX → `app.js` via Babel CLI (suppression Babel in-browser ~700 KB)
- Extraction JS vanilla → `main.js` (profile selector, visitor tracker)
- `index.html` réduit de 4 941 → 103 lignes
- Remplacement React/ReactDOM inline par CDN
- Gain temps de chargement estimé : ~3-4s → ~1-1.5s

**Référence :** `docs/2026-04-03-portfolio-restructure.md`

---

## Session 2026-04-06 — Push GitHub + Audit + Corrections

**Objectif :** Mettre le projet sur GitHub proprement, auditer, corriger.

### Git
- Historique GitHub nettoyé (50+ commits brouillon → 2 commits propres)
- `README.md` mis à jour (nouvelle architecture multi-fichiers)
- `.gitignore` ajouté (node_modules, docs, logs)
- `Documents/portfolio-ai` établi comme dossier de travail officiel

### Contenu
- Intro hero retravaillée EN + FR (ton plus professionnel, connexion outils, productivité équipes, chiffres)

### Audit & Corrections
| # | Problème | Correction |
|---|---|---|
| 🔴 | Photos témoignages en 404 (`.jpeg` vs `.jpg`) | Corrigé — 4 fichiers |
| 🔴 | Commande terminal `rates` inexistante | Remplacée par `whoami` |
| 🔴 | Numérotation chapitres sautait Ch.05 | Corrigé : 01→02→03→04→05→06 |
| 🟡 | Clés traduction mortes (`badge`, `heroSub4`, `contactPhone`) | Supprimées |
| 🟡 | Ternaire inutile dans Leaflet (`isHuman?'#415a77':'#415a77'`) | Simplifié |

### Code mort supprimé
- `ROICalc` — composant + traductions + boutons CTA + entrée CHAPTERS
- `HumanROI` — composant jamais rendu
- `ELI5Modal` — modal inaccessible (trigger jamais appelé)

---

## Prochaines sessions — À faire

- [ ] Vérifier les liens LinkedIn des témoignages (non testables programmatiquement)
- [ ] Vérifier que le worker Val.run est actif en production
- [ ] Contenu : revoir/compléter les expériences et projets
- [ ] Design : améliorations éventuelles
