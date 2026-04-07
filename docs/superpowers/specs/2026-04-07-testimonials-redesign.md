# Testimonials Redesign — Spec
**Date :** 2026-04-07  
**Statut :** Approuvé

---

## Problème

Les 6 témoignages affichent leur texte complet (~200-300 mots chacun) dans une grille de cartes. La section est trop lourde, peu scannnable, et prend trop de place verticale.

---

## Design retenu

### Layout
- Grille **3 colonnes**, 2 rangées (6 cartes au total)
- Responsive : 2 colonnes sur tablette, 1 colonne sur mobile

### Chaque carte (compact)
1. `★★★★★` (étoiles)
2. **Citation clé** — 1 phrase percutante, couleur `var(--accent3)` (#00F0A8)
3. **Résumé** — 1-2 lignes, couleur `var(--text-mute)`
4. Lien `Full review →` (couleur accent propre à chaque personne) → ouvre la modale
5. Séparateur
6. **Photo ronde** (32px) + Nom + Titre + Entreprise

### Modale (full review)
- Overlay sombre, centré
- Photo (48px) + Nom + Titre + Entreprise + Date + 🔗 LinkedIn
- Citation complète en italique
- Bouton `CLOSE` / touche Escape

---

## Données

| Personne | Entreprise | Couleur | Citation clé (EN) | Citation clé (FR) |
|---|---|---|---|---|
| Guillaume Martin | NAOS (Bioderma - Institut Esthederm) | #6366F1 | "Someone you can trust to deliver in demanding environments." | "Quelqu'un sur qui compter pour délivrer dans des environnements exigeants." |
| Aziz Agoumy | NAOS (Bioderma - Institut Esthederm) | #F97316 | "Tasks that take weeks, Antoine solves in minutes." | "Des tâches qui prennent des semaines, Antoine les résout en minutes." |
| Theo Massot | NAOS (Bioderma - Institut Esthederm) | #38BDF8 | "A serious, operational AI profile I highly recommend." | "Un profil sérieux et opérationnel que je recommande vivement." |
| Robin Blondeau | Reech Influence Cloud | #415a77 | "Highly autonomous, always proactive, strong analytical capacity." | "Très autonome, toujours force de proposition, grande capacité d'analyse." |
| Thomas Becuwe | Tomorro | #FF2D78 | "He succeeds in everything he undertakes — and he undertakes a lot." | "Il réussit ce qu'il entreprend — et il entreprend beaucoup." |
| Matthieu Conil | Reech Influence Cloud | #00F0A8 | "Anticipates needs, always proactive, a genuine pleasure to work with." | "Anticipe les besoins, toujours proactif, un réel plaisir de travailler avec lui." |

---

## Résumés courts (EN / FR)

**Guillaume Martin**  
EN: Strong execution, forward-thinking mindset, sharp sense of priorities focused on real impact.  
FR: Solides capacités d'exécution, esprit tourné vers l'avenir, sens aigu des priorités.

**Aziz Agoumy**  
EN: Go-to expert for BI and AI at NAOS. Impressive data skills, great teammate, always above and beyond.  
FR: Expert référent BI et IA chez NAOS. Compétences data impressionnantes, toujours prêt à aller plus loin.

**Theo Massot**  
EN: Solid applied AI expertise, automation know-how (n8n, Python), real talent for bringing teams along.  
FR: Maîtrise solide de l'IA appliquée, expertise automation (n8n, Python), vraie pédagogie pour embarquer les équipes.

**Robin Blondeau**  
EN: Conscientious, resourceful, strong analytical capacity. Empathetic and a driver of team cohesion.  
FR: Consciencieux, astucieux, grande capacité d'analyse. Empathique et moteur de cohésion d'équipe.

**Thomas Becuwe**  
EN: Energy, determination, and drive. Performed across commercial missions, natural team leader.  
FR: Énergie, détermination et envie. Performant sur les missions commerciales, leader naturel.

**Matthieu Conil**  
EN: Quickly grasps business stakes, invested, reliable, always in good spirits.  
FR: Comprend rapidement les enjeux business, investi, fiable, toujours de bonne humeur.

---

## Implémentation

### Fichiers à modifier
- `app.jsx` — composant testimonials + nouvelle modale `TestiModal`
- `style.css` — nouveaux styles `.testi-key-quote`, `.testi-summary`, `.testi-modal-*`
- Recompiler `app.js` après modifications

### Nouveaux éléments
1. Ajouter `keyQuote: { en: '...', fr: '...' }` et `summary: { en: '...', fr: '...' }` dans chaque objet `TESTIMONIALS`
2. Ajouter `company: 'NAOS (Bioderma - Institut Esthederm)'` (correction) dans les 3 premiers
3. Nouveau composant `TestiModal` — réutilise le pattern `CalendlyModal`/`CountryModal`
4. State `showTesti` + `activeTesti` dans `PortfolioApp`
5. Mettre à jour la grille CSS : `grid-template-columns: repeat(3, 1fr)` avec breakpoints responsive

### Ce qui ne change pas
- Les photos (chemins déjà corrects après fix de session précédente)
- Les étoiles
- Le lien LinkedIn
- Les textes complets (juste déplacés dans la modale)
