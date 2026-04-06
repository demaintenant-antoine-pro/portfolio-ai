const {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext
} = React;
const LangCtx = createContext('en');

/* ─── TRANSLATIONS ────────────────────────────────────────────────────────── */
const T = {
  en: {
    nav: ['about', 'dashboard', 'pipeline', 'experience', 'projects', 'stack', 'certificates', 'roi', 'terminal', 'testimonials', 'blog', 'contact'],
    navLabels: {
      about: 'About',
      dashboard: 'Dashboard',
      pipeline: 'Pipeline',
      experience: 'XP',
      projects: 'Projects',
      stack: 'Stack',
      certificates: 'Certs',
      roi: 'ROI',
      terminal: 'Terminal',
      testimonials: 'Reviews',
      blog: 'Blog',
      contact: 'Contact'
    },
    badge: '🟢 Available worldwide · France · Dubai · Canada · Singapore · Remote',
    heroSub1: "I architect end-to-end AI transformation",
    heroSub1b: "integrating your existing tools into autonomous systems",
    heroSub2: "— autonomous data pipelines, executive-grade decision dashboards, and LLM-powered workflows. Teams I work with consistently reduce manual overhead by 60–85% and shift capacity toward strategic priorities.",
    heroSub3: "AI Architect · Automation · BI · 5+ yrs CPG, SaaS & CSR.",
    heroSub4: "",
    xp: "yrs XP",
    ctaRoi: "Calculate My ROI →",
    ctaContact: "Get in Touch",
    ctaCV: "↓ Download CV",
    liveCounter: "Hours of reporting saved since you loaded this page",
    metrics: [{
      n: '85',
      s: '%',
      l: 'Processing Capacity Gained'
    }, {
      n: '270',
      s: '%',
      l: 'Pipeline Efficiency Boost'
    }, {
      n: '30',
      s: '+',
      l: 'Workflows Automated'
    }, {
      n: '6',
      s: 'mo',
      l: 'Analytics Dept Built 0→1'
    }],
    dashEyebrow: 'Live Demo',
    dashTitle: 'Executive',
    dashTitleEm: 'Dashboard',
    dashDesc: "Replica of a live executive dashboard — real-time revenue, ML forecasting, zero manual intervention.",
    dashKpis: [['$2.4M', 'YTD Revenue', '↑ +18% vs LY'], ['85%', 'Reporting Saved', '30+ workflows'], ['4.2%', 'Forecast MAPE', '↓ from 8.1%'], ['10+', 'Power BI Dashboards', 'All BUs'], ['30+', 'Channels', 'Daily, auto'], ['06:00', 'Auto-Report', '0 manual']],
    dashChart1: 'Revenue + Forecast · Enterprise Client',
    dashChart2: 'Revenue by Channel',
    pipeEyebrow: 'Interactive Demo',
    pipeTitle: 'Automation',
    pipeTitleEm: 'Pipeline',
    pipeDesc: "Raw POS data → stakeholder reports in under 6 min. Try dragging stages to reorder them.",
    pipeReady: 'Idle. Press RUN.',
    pipeRun: '▶ RUN PIPELINE',
    pipeRunning: '⟳ RUNNING...',
    pipeDragHint: '💡 Drag stages to reorder — then try to RUN',
    pipeWrongMsgs: ["❌ ERROR: Forecast before Clean — Prophet is not a garbage collector.", "❌ FATAL: Notify before Power BI? Emailing null?", "❌ CRITICAL: Ingestion after Forecast? Predicting data that doesn't exist yet.", "❌ 500: Clean before Ingestion? Can't mop a floor that isn't installed.", "❌ ERROR: Notify before Forecast? Bold strategy. Let me know how that goes."],
    expEyebrow: 'Career Timeline',
    expTitle: 'Where I built',
    expTitleEm: 'things that still run.',
    expFilterAll: 'All',
    skillsEyebrow: 'Arsenal',
    skillsTitle: 'Tools I use.',
    skillsTitleDim: 'Not just listed.',
    radarTitle: 'Competency Radar',
    projectsEyebrow: 'Signature Projects',
    projectsTitle: 'What I actually',
    projectsTitleEm: 'built.',
    projectsDesc: '3 categories · Auto reports · AI dashboards on your pain point · Custom automations by department.',
    stackEyebrow: 'Tech Stack',
    stackTitle: 'Tools I ship with.',
    stackTitleEm: 'Not just buzzwords.',
    roiEyebrow: 'ROI Calculator',
    roiTitle: 'Find out what',
    roiTitleEm: 'not',
    roiTitle2: 'hiring me costs.',
    roiH3: "What's your data ops costing you?",
    roiP: "Move the sliders. Watch the pain materialize.",
    roiSliders: [{
      label: "Analysts on manual reports",
      unit: "people"
    }, {
      label: "Hours / week per analyst",
      unit: "h/wk"
    }, {
      label: "Avg hourly cost",
      unit: "$/h"
    }, {
      label: "Error rate in reporting",
      unit: "%"
    }],
    roiComment: '// Automation impact analysis',
    roiLbl1: 'Annual cost of manual reporting',
    roiLbl2: '+ Hidden error cost',
    roiLbl3: 'Total annual pain',
    roiLbl4: 'After automation (12% residual)',
    roiLbl5: '🚀 Annual savings unlocked',
    roiSuffix1: 'analyst',
    roiSuffix2: 'analysts',
    roiWks: 'wks',
    roiRoi: 'ROI on hiring Antoine: ~',
    roiDisclaimer: '// Conservative estimate. Real results may cause audible gasping.',
    terminalEyebrow: 'Interactive Terminal',
    terminalTitle: 'Ask me',
    terminalTitleEm: 'anything.',
    terminalDesc: "Type commands to explore. Try: help, whoami, skills, ./hire_antoine.sh",
    terminalHint: "Type 'help' to start · TAB autocomplete · ↑↓ history",
    testiEyebrow: 'Social Proof',
    testiTitle: "Don't take",
    testiTitleEm: "my word for it.",
    testiBlur: 'Anonymous · NDA',
    testiSoon: 'COMING SOON',
    worldLabel: 'Click a country →',
    countryClose: 'CLOSE // ESC',
    blogEyebrow: 'Notes & Thoughts',
    blogTitle: 'What I think',
    blogTitleEm: 'out loud.',
    blogDesc: "AI, automation and data — without the jargon.",
    blogRead: 'Read →',
    blogReadTime: 'min read',
    blogClose: 'CLOSE',
    contactEyebrow: 'Contact',
    contactTitle: "Let's build",
    contactTitleEm: "something real.",
    contactCopyHint: 'CLICK TO COPY',
    contactCopied: '✓ Copied!',
    contactLocation: 'Location',
    contactPhone: 'Phone',
    contactH3: "I'm selective about what I build next.",
    contactP: "If you have a data problem costing real money — manual reports, broken pipelines, zero visibility — I'm interested.<br/><br/>If you want charts to be prettier, I'll politely refer you to Canva.",
    contactStatus: 'Open to new missions · Worldwide · 2026',
    visitors: 'visitors',
    footerKonami: "// Try the Konami code ↑↑↓↓←→←→BA",
    eggTitle: 'KONAMI DETECTED',
    eggP1: "You're a developer, a gamer, or dangerously bored.",
    eggP2: "Either way — you passed.",
    eggP3: "People who find easter eggs ship features.",
    eggCode: "// Secret: 85% pipeline automation achieved.\n// Time to implement: 3 months.\n// Manual alternative: never.",
    eggClose: 'CLOSE',
    scrollTop: '↑',
    recruiterBtn: 'RECRUITER MODE',
    recruiterTitle: 'RECRUITER MODE',
    recruiterSub: 'Personalize this portfolio for your profile',
    recruiterQ: 'Who are you today?',
    recruiterProfiles: [{
      icon: '🏢',
      label: 'Executive / C-Suite',
      sub: 'I care about ROI, team impact, and business outcomes'
    }, {
      icon: '💻',
      label: 'Tech Lead / CTO',
      sub: 'Show me the architecture, stack, and code quality'
    }, {
      icon: '📊',
      label: 'Data / Analytics Manager',
      sub: 'I want to see methodology and tooling depth'
    }, {
      icon: '🤝',
      label: 'HR / Talent Acquisition',
      sub: 'Give me the career summary and soft skills'
    }]
  },
  fr: {
    nav: ['about', 'dashboard', 'pipeline', 'experience', 'projects', 'stack', 'certificates', 'roi', 'terminal', 'testimonials', 'blog', 'contact'],
    navLabels: {
      about: 'Profil',
      dashboard: 'Dashboard',
      pipeline: 'Pipeline',
      experience: 'Expérience',
      projects: 'Projets',
      stack: 'Stack',
      certificates: 'Certifs',
      roi: 'ROI',
      terminal: 'Terminal',
      testimonials: 'Avis',
      blog: 'Blog',
      contact: 'Contact'
    },
    badge: '🟢 Disponible partout · France · Dubai · Canada · Singapour · Remote',
    heroSub1: "Je pilote la transformation IA de bout en bout",
    heroSub1b: "en intégrant vos outils existants en systèmes autonomes",
    heroSub2: "— pipelines de données autonomes, dashboards décisionnels et workflows LLM. Les équipes avec lesquelles je travaille réduisent systématiquement la charge opérationnelle de 60 à 85 % et recentrent leurs ressources sur les priorités stratégiques.",
    heroSub3: "Architecte IA · Automatisation · BI · 5+ ans CPG, SaaS & RSE.",
    heroSub4: "",
    xp: "ans d'XP",
    ctaRoi: "Calculer mon ROI →",
    ctaContact: "Me contacter",
    ctaCV: "↓ Télécharger CV",
    liveCounter: "Heures de reporting économisées depuis que vous êtes sur cette page",
    metrics: [{
      n: '85',
      s: '%',
      l: 'Gain capacité de traitement'
    }, {
      n: '270',
      s: '%',
      l: 'Efficacité pipeline boostée'
    }, {
      n: '30',
      s: '+',
      l: 'Workflows automatisés'
    }, {
      n: '6',
      s: 'mois',
      l: 'Dept Analytics 0→1'
    }],
    dashEyebrow: 'Démo Live',
    dashTitle: 'Dashboard',
    dashTitleEm: 'Exécutif',
    dashDesc: "Réplique d'un dashboard exécutif réel — suivi revenus temps réel, prévisions ML, zéro intervention manuelle.",
    dashKpis: [['2,4M€', 'CA YTD', '↑ +18% vs N-1'], ['85%', 'Temps reporting', '30+ workflows'], ['4,2%', 'MAPE Prévisions', '↓ depuis 8,1%'], ['10+', 'Dashboards Power BI', 'Toutes BUs'], ['30+', 'Canaux', 'Daily, auto'], ['06:00', 'Rapport Auto', '0 manuel']],
    dashChart1: 'Tendance CA + Prévision · Client Entreprise',
    dashChart2: 'CA par Canal',
    pipeEyebrow: 'Démo Interactive',
    pipeTitle: 'Pipeline',
    pipeTitleEm: "d'Automatisation",
    pipeDesc: "Données brutes POS → rapport exécutif en moins de 6 min. Glissez les étapes pour les réordonner.",
    pipeReady: 'Inactif. Appuyez sur RUN.',
    pipeRun: '▶ LANCER',
    pipeRunning: '⟳ EN COURS...',
    pipeDragHint: '💡 Glissez les étapes pour les réordonner — puis lancez RUN',
    pipeWrongMsgs: ["❌ ERREUR : Prévision avant Nettoyage — Prophet n'est pas un ramasse-miettes.", "❌ FATAL : Notification avant Power BI ? Email envoyé à null ?", "❌ CRITIQUE : Ingestion après Prévision ? Vous prédisez des données inexistantes.", "❌ 500 : Nettoyage avant Ingestion ? On ne nettoie pas un sol inexistant.", "❌ ERREUR : Notifier avant Prévoir ? Stratégie audacieuse."],
    expEyebrow: 'Parcours',
    expTitle: "Là où j'ai construit",
    expTitleEm: 'des choses qui tournent encore.',
    expFilterAll: 'Tous',
    skillsEyebrow: 'Arsenal',
    skillsTitle: 'Mes outils.',
    skillsTitleDim: 'Pas juste une liste.',
    radarTitle: 'Radar de Compétences',
    projectsEyebrow: 'Projets Signature',
    projectsTitle: 'Ce que j\'ai vraiment',
    projectsTitleEm: 'construit.',
    projectsDesc: '3 catégories · Rapports auto · Dashboards IA sur votre pain point · Automatisations customs par département.',
    stackEyebrow: 'Stack Technique',
    stackTitle: 'Ce avec quoi je livre.',
    stackTitleEm: 'Pas des buzzwords.',
    roiEyebrow: 'Calculateur ROI',
    roiTitle: 'Découvrez ce que',
    roiTitleEm: 'ne pas',
    roiTitle2: 'me recruter vous coûte.',
    roiH3: "Combien coûte votre data ops actuelle ?",
    roiP: "Bougez les curseurs. Regardez la douleur se matérialiser.",
    roiSliders: [{
      label: "Analystes sur des rapports manuels",
      unit: "personnes"
    }, {
      label: "Heures / semaine par analyste",
      unit: "h/sem"
    }, {
      label: "Coût horaire moyen",
      unit: "€/h"
    }, {
      label: "Taux d'erreur dans les rapports",
      unit: "%"
    }],
    roiComment: "// Analyse d'impact de l'automatisation",
    roiLbl1: 'Coût annuel du reporting manuel',
    roiLbl2: '+ Coût caché des erreurs',
    roiLbl3: 'Douleur annuelle totale',
    roiLbl4: 'Après automatisation (12% résiduel)',
    roiLbl5: '🚀 Économies annuelles débloquées',
    roiSuffix1: 'analyste',
    roiSuffix2: 'analystes',
    roiWks: 'sem',
    roiRoi: "ROI sur le recrutement d'Antoine : ~",
    roiDisclaimer: '// Estimation conservatrice. Les vrais résultats peuvent provoquer des gasps.',
    terminalEyebrow: 'Terminal Interactif',
    terminalTitle: 'Posez-moi',
    terminalTitleEm: 'vos questions.',
    terminalDesc: "Tapez des commandes pour explorer. Essayez : help, whoami, skills, ./hire_antoine.sh",
    terminalHint: "Tapez 'help' · TAB pour compléter · ↑↓ historique",
    testiEyebrow: 'Preuves Sociales',
    testiTitle: "Ne prenez pas",
    testiTitleEm: "ma parole.",
    testiBlur: 'Anonyme · NDA',
    testiSoon: 'BIENTÔT',
    worldLabel: 'Cliquez un pays →',
    countryClose: 'FERMER',
    blogEyebrow: 'Notes & Réflexions',
    blogTitle: 'Ce que je pense',
    blogTitleEm: 'tout haut.',
    blogDesc: "IA, automatisation et data — sans jargon inutile.",
    blogRead: 'Lire →',
    blogReadTime: 'min',
    blogClose: 'FERMER',
    contactEyebrow: 'Contact',
    contactTitle: "Construisons",
    contactTitleEm: "quelque chose de réel.",
    contactCopyHint: 'CLIQUER POUR COPIER',
    contactCopied: '✓ Copié !',
    contactLocation: 'Localisation',
    contactPhone: 'Téléphone',
    contactH3: "Je suis sélectif sur ce que je construis ensuite.",
    contactP: "Si vous avez un problème data qui coûte vraiment — rapports manuels, pipelines cassés, zéro visibilité — je suis intéressé.<br/><br/>Si vous voulez des graphiques plus jolis, je vous oriente vers Canva.",
    contactStatus: 'Disponible partout dans le monde · 2026',
    visitors: 'visiteurs',
    footerKonami: "// Essayez le code Konami ↑↑↓↓←→←→BA",
    eggTitle: 'CODE KONAMI DÉTECTÉ',
    eggP1: "Développeur, gamer ou dangereusement ennuyé.",
    eggP2: "Dans tous les cas — test réussi.",
    eggP3: "Les chercheurs d'easter eggs livrent des features.",
    eggCode: "// Stat secrète : 85% d'automatisation pipeline.\n// Durée implémentation : 3 mois.\n// Alternative manuelle : jamais.",
    eggClose: 'FERMER',
    scrollTop: '↑',
    recruiterBtn: 'MODE RECRUTEUR',
    recruiterTitle: 'MODE RECRUTEUR',
    recruiterSub: 'Personnalisez ce portfolio selon votre profil',
    recruiterQ: 'Qui êtes-vous aujourd\'hui ?',
    recruiterProfiles: [{
      icon: '🏢',
      label: 'Dirigeant / C-Suite',
      sub: 'Je veux le ROI, l\'impact business et les résultats'
    }, {
      icon: '💻',
      label: 'Tech Lead / CTO',
      sub: 'Montrez-moi l\'architecture, la stack et la qualité'
    }, {
      icon: '📊',
      label: 'Manager Data / Analytics',
      sub: 'Je veux voir la méthodologie et la maîtrise des outils'
    }, {
      icon: '🤝',
      label: 'RH / Talent Acquisition',
      sub: 'Le résumé de carrière et les soft skills'
    }]
  }
};

/* ─── HUMAN TEXTS — même structure que T, langage simple sans jargon ──────── */
const TH = {
  en: {
    nav: ['about', 'dashboard', 'pipeline', 'experience', 'projects', 'certificates', 'roi', 'terminal', 'testimonials', 'blog', 'contact'],
    navLabels: {
      about: 'Home',
      dashboard: 'Proof',
      pipeline: 'Demo',
      experience: 'Journey',
      projects: 'Results',
      certificates: 'Certs',
      roi: 'ROI',
      terminal: 'Ask me',
      testimonials: 'Reviews',
      blog: 'Blog',
      contact: 'Contact'
    },
    heroSub1: "I deploy AI in your company",
    heroSub1b: "and automate everything that moves",
    heroSub2: "— so your teams stop wasting time on manual work and start making decisions that generate revenue. Finance, Sales, Supply, HR: every process becomes an autonomous system that maximizes your ROI.",
    heroSub3: "AI Transformation · Automation · BI · 5+ years CPG, SaaS & CSR.",
    heroSub4: "",
    xp: "yrs experience",
    ctaRoi: "Calculate what this costs me →",
    ctaContact: "Talk in 30 min",
    ctaCV: "↓ Download CV",
    liveCounter: "Hours of manual reporting done worldwide since you opened this page",
    metrics: [{
      n: '85',
      s: '%',
      l: 'Reporting time saved'
    }, {
      n: '30',
      s: '+',
      l: 'Tasks automated'
    }, {
      n: '6',
      s: 'mo',
      l: 'Analytics dept from zero'
    }, {
      n: '4.2',
      s: '%',
      l: 'AI forecast error'
    }],
    dashEyebrow: 'Live Demo',
    dashTitle: 'Real',
    dashTitleEm: 'Executive Dashboard',
    dashDesc: "A live dashboard replica — real revenue tracking, AI forecasting, zero manual work. This is what your team could have.",
    dashKpis: [['$2.4M', 'YTD Revenue', '↑ +18% vs LY'], ['85%', 'Reporting Saved', '30+ tasks'], ['4.2%', 'Forecast Error', '↓ from 8.1%'], ['10+', 'Dashboards', 'All teams'], ['30+', 'Channels', 'Daily, auto'], ['06:00', 'Auto-Report', '0 manual']],
    dashChart1: 'Revenue + Forecast · Enterprise Client',
    dashChart2: 'Revenue by Channel',
    pipeEyebrow: 'Interactive Demo',
    pipeTitle: 'Raw data to inbox',
    pipeTitleEm: 'in 6 minutes.',
    pipeDesc: "This is what happens inside my systems. Raw data in — clean reports out. Try dragging stages to reorder.",
    pipeReady: 'Ready. Press RUN.',
    pipeRun: '▶ RUN',
    pipeRunning: '⟳ RUNNING...',
    pipeDragHint: '💡 Drag stages to reorder — then RUN to see what happens',
    pipeWrongMsgs: ["❌ Forecast before Clean — predicting dirty data won't end well.", "❌ Notify before Dashboard — emailing an empty report?", "❌ Ingestion after Forecast — can't predict data that doesn't exist.", "❌ Clean before Ingestion — cleaning a floor that isn't there.", "❌ Notify before Forecast — bold strategy."],
    expEyebrow: 'Work History',
    expTitle: 'Where I built',
    expTitleEm: 'things that still run.',
    expFilterAll: 'All',
    skillsEyebrow: 'What I know',
    skillsTitle: 'Skills that deliver.',
    skillsTitleDim: 'Used daily.',
    radarTitle: 'Overview',
    projectsEyebrow: 'Real Projects',
    projectsTitle: 'What I actually',
    projectsTitleEm: 'built.',
    projectsDesc: 'Systems running today. Real problems solved, real results measured.',
    stackEyebrow: 'My Tools',
    stackTitle: 'What I work with.',
    stackTitleEm: 'Every day.',
    roiEyebrow: 'ROI Calculator',
    roiTitle: 'What does',
    roiTitleEm: 'not fixing this',
    roiTitle2: 'cost you?',
    roiH3: "What is your manual reporting actually costing?",
    roiP: "Move the sliders. See the real cost of doing nothing.",
    roiSliders: [{
      label: "People on manual reports",
      unit: "people"
    }, {
      label: "Hours / week per person",
      unit: "h/wk"
    }, {
      label: "Average hourly cost",
      unit: "$/h"
    }, {
      label: "Error rate in reports",
      unit: "%"
    }],
    roiComment: '// Cost of inaction',
    roiLbl1: 'Annual cost of manual work',
    roiLbl2: '+ Hidden cost of errors',
    roiLbl3: 'Total annual cost of the problem',
    roiLbl4: 'After automation (12% residual)',
    roiLbl5: '💰 Money saved per year',
    roiSuffix1: 'person',
    roiSuffix2: 'people',
    roiWks: 'wks',
    roiRoi: 'ROI on hiring Antoine: ~',
    roiDisclaimer: '// Conservative estimate. Real results often higher.',
    terminalEyebrow: 'Ask Me Anything',
    terminalTitle: 'I answer',
    terminalTitleEm: 'your questions.',
    terminalDesc: "Ask anything — rates, timeline, what I can automate, how I work. Try: help, rates, contact",
    terminalHint: "Type 'help' to start",
    testiEyebrow: 'What people say',
    testiTitle: "Don't take",
    testiTitleEm: "my word for it.",
    testiBlur: 'Anonymous · NDA',
    testiSoon: 'COMING SOON',
    worldLabel: 'Click a country →',
    countryClose: 'CLOSE',
    blogEyebrow: 'Thoughts',
    blogTitle: 'What I think',
    blogTitleEm: 'out loud.',
    blogDesc: "Automation, data and AI — no jargon.",
    blogRead: 'Read →',
    blogReadTime: 'min read',
    blogClose: 'CLOSE',
    contactEyebrow: 'Contact',
    contactTitle: "Let's solve",
    contactTitleEm: "something real.",
    contactCopyHint: 'CLICK TO COPY',
    contactCopied: '✓ Copied!',
    contactLocation: 'Location',
    contactPhone: 'Phone',
    contactH3: "I'm selective about my next project.",
    contactP: "If you have a real problem — manual reports, broken processes, zero visibility — I'm interested.<br/><br/>If you just want prettier charts, I'll point you to Canva.",
    contactStatus: 'Open to new projects · Worldwide · 2026',
    visitors: 'visitors',
    footerKonami: "// Try the Konami code ↑↑↓↓←→←→BA",
    eggTitle: 'YOU FOUND IT',
    eggP1: "You explored enough to find this.",
    eggP2: "That curiosity is exactly what I like.",
    eggP3: "People who dig deeper ship better work.",
    eggCode: "// What I saved a client last year:\n// 15h/week × 52 = 780 hours recovered.\n// That's 97 working days. Back.",
    eggClose: 'CLOSE',
    scrollTop: '↑',
    recruiterBtn: 'MY PROFILE ⚡',
    recruiterTitle: 'PERSONALIZE THIS',
    recruiterSub: 'Choose your profile for a tailored view',
    recruiterQ: 'Who are you today?',
    recruiterProfiles: [{
      icon: '🏢',
      label: 'Executive / CEO / CFO',
      sub: 'I want ROI, business impact, real numbers'
    }, {
      icon: '📊',
      label: 'Operations Manager',
      sub: 'Show me how you help my team'
    }, {
      icon: '🤝',
      label: 'HR / Talent Acquisition',
      sub: 'Career story and soft skills'
    }, {
      icon: '💡',
      label: 'Entrepreneur / Founder',
      sub: 'What can you do for my startup?'
    }]
  },
  fr: {
    nav: ['about', 'dashboard', 'pipeline', 'experience', 'projects', 'certificates', 'roi', 'terminal', 'testimonials', 'blog', 'contact'],
    navLabels: {
      about: 'Accueil',
      dashboard: 'Preuve',
      pipeline: 'Démo',
      experience: 'Parcours',
      projects: 'Résultats',
      certificates: 'Certifs',
      roi: 'ROI',
      terminal: 'Posez-moi',
      testimonials: 'Avis',
      blog: 'Blog',
      contact: 'Contact'
    },
    heroSub1: "Je déploie l'IA dans votre entreprise",
    heroSub1b: "et j'automatise tout ce qui bouge",
    heroSub2: "— pour que vos équipes arrêtent de perdre du temps sur du travail manuel et commencent à prendre des décisions qui génèrent du revenu. Finance, Sales, Supply, RH : chaque processus devient un système autonome qui maximise votre ROI.",
    heroSub3: "Transformation IA · Automatisation · BI · 5+ ans CPG, SaaS & RSE.",
    heroSub4: "",
    xp: "ans d'expérience",
    ctaRoi: "Calculer ce que ça me coûte →",
    ctaContact: "Parler en 30 min",
    ctaCV: "↓ Télécharger CV",
    liveCounter: "Heures de reporting manuel faites dans le monde depuis que vous êtes sur cette page",
    metrics: [{
      n: '85',
      s: '%',
      l: 'Temps de reporting économisé'
    }, {
      n: '30',
      s: '+',
      l: 'Tâches automatisées'
    }, {
      n: '6',
      s: 'mois',
      l: 'Dept analytics de zéro'
    }, {
      n: '4,2',
      s: '%',
      l: 'Taux erreur prévisions IA'
    }],
    dashEyebrow: 'Démo Live',
    dashTitle: 'Vrai',
    dashTitleEm: 'Dashboard Exécutif',
    dashDesc: "Une réplique d'un dashboard réel — suivi revenus, prévisions IA, zéro travail manuel. C'est ce que votre équipe pourrait avoir.",
    dashKpis: [['2,4M€', 'CA YTD', '↑ +18% vs N-1'], ['85%', 'Reporting économisé', '30+ tâches'], ['4,2%', 'Taux erreur', '↓ depuis 8,1%'], ['10+', 'Dashboards', 'Toutes équipes'], ['30+', 'Canaux', 'Daily, auto'], ['06:00', 'Rapport Auto', '0 manuel']],
    dashChart1: 'Tendance CA + Prévision · Client Entreprise',
    dashChart2: 'CA par Canal',
    pipeEyebrow: 'Démo Interactive',
    pipeTitle: 'De la donnée brute',
    pipeTitleEm: 'à votre boîte mail en 6 min.',
    pipeDesc: "C'est ce qui se passe dans mes systèmes. Données brutes en entrée — rapports propres en sortie. Glissez les étapes pour les réordonner.",
    pipeReady: 'Prêt. Appuyez sur RUN.',
    pipeRun: '▶ LANCER',
    pipeRunning: '⟳ EN COURS...',
    pipeDragHint: '💡 Glissez les étapes — puis RUN pour voir ce qui se passe',
    pipeWrongMsgs: ["❌ Prévision avant Nettoyage — prédire des données sales, mauvaise idée.", "❌ Notification avant Dashboard — envoyer un rapport vide ?", "❌ Ingestion après Prévision — prédire des données inexistantes.", "❌ Nettoyage avant Ingestion — nettoyer ce qui n'existe pas encore.", "❌ Notifier avant Prévoir — stratégie audacieuse."],
    expEyebrow: 'Expériences',
    expTitle: "Là où j'ai construit",
    expTitleEm: 'des choses qui tournent encore.',
    expFilterAll: 'Tous',
    skillsEyebrow: 'Ce que je sais faire',
    skillsTitle: 'Compétences qui livrent.',
    skillsTitleDim: 'Au quotidien.',
    radarTitle: 'Vue d\'ensemble',
    projectsEyebrow: 'Projets réels',
    projectsTitle: "Ce que j'ai vraiment",
    projectsTitleEm: 'construit.',
    projectsDesc: 'Des systèmes en production. Des problèmes réels résolus, des résultats mesurés.',
    stackEyebrow: 'Mes outils',
    stackTitle: 'Ce avec quoi je travaille.',
    stackTitleEm: 'Tous les jours.',
    roiEyebrow: 'Calculateur ROI',
    roiTitle: 'Combien coûte',
    roiTitleEm: 'ne rien faire',
    roiTitle2: 'vraiment ?',
    roiH3: "Combien vous coûte vraiment votre reporting manuel ?",
    roiP: "Bougez les curseurs. Voyez le vrai coût de l'inaction.",
    roiSliders: [{
      label: "Personnes sur des rapports manuels",
      unit: "pers."
    }, {
      label: "Heures / semaine par personne",
      unit: "h/sem"
    }, {
      label: "Coût horaire moyen",
      unit: "€/h"
    }, {
      label: "Taux d'erreur dans les rapports",
      unit: "%"
    }],
    roiComment: "// Coût de l'inaction",
    roiLbl1: 'Coût annuel du travail manuel',
    roiLbl2: '+ Coût caché des erreurs',
    roiLbl3: 'Coût total annuel du problème',
    roiLbl4: 'Après automatisation (12% résiduel)',
    roiLbl5: '💰 Argent économisé par an',
    roiSuffix1: 'personne',
    roiSuffix2: 'personnes',
    roiWks: 'sem',
    roiRoi: "ROI sur le recrutement d'Antoine : ~",
    roiDisclaimer: '// Estimation conservatrice. Les vrais résultats sont souvent supérieurs.',
    terminalEyebrow: "Posez-moi n'importe quoi",
    terminalTitle: 'Je réponds à',
    terminalTitleEm: 'vos questions.',
    terminalDesc: "Posez n'importe quelle question — tarifs, délais, ce que je peux automatiser. Essayez : help, tarifs, contact",
    terminalHint: "Tapez 'help' pour commencer",
    testiEyebrow: 'Ce que disent les autres',
    testiTitle: "Ne prenez pas",
    testiTitleEm: "ma parole.",
    testiBlur: 'Anonyme · NDA',
    testiSoon: 'BIENTÔT',
    worldLabel: 'Cliquez un pays →',
    countryClose: 'FERMER',
    blogEyebrow: 'Réflexions',
    blogTitle: 'Ce que je pense',
    blogTitleEm: 'tout haut.',
    blogDesc: "Automatisation, data et IA — sans jargon.",
    blogRead: 'Lire →',
    blogReadTime: 'min',
    blogClose: 'FERMER',
    contactEyebrow: 'Contact',
    contactTitle: "Résolvons",
    contactTitleEm: "quelque chose de réel.",
    contactCopyHint: 'CLIQUER POUR COPIER',
    contactCopied: '✓ Copié !',
    contactLocation: 'Localisation',
    contactPhone: 'Téléphone',
    contactH3: "Je suis sélectif sur mon prochain projet.",
    contactP: "Si vous avez un problème réel — rapports manuels, processus cassés, zéro visibilité — je suis intéressé.<br/><br/>Si vous voulez juste des graphiques plus jolis, je vous oriente vers Canva.",
    contactStatus: 'Disponible partout dans le monde · 2026',
    visitors: 'visiteurs',
    footerKonami: "// Essayez le code Konami ↑↑↓↓←→←→BA",
    eggTitle: 'VOUS L\'AVEZ TROUVÉ',
    eggP1: "Vous avez exploré assez pour trouver ça.",
    eggP2: "Ce type de curiosité, c'est exactement ce que j'apprécie.",
    eggP3: "Les gens qui cherchent plus loin livrent mieux.",
    eggCode: "// Ce que j'ai économisé à un client l'an dernier :\n// 15h/semaine × 52 = 780h récupérées.\n// Soit 97 jours de travail. Rendus.",
    eggClose: 'FERMER',
    scrollTop: '↑',
    recruiterBtn: 'MON PROFIL ⚡',
    recruiterTitle: 'PERSONNALISEZ',
    recruiterSub: 'Choisissez votre profil pour une vue adaptée',
    recruiterQ: 'Qui êtes-vous aujourd\'hui ?',
    recruiterProfiles: [{
      icon: '🏢',
      label: 'Dirigeant / CEO / CFO',
      sub: 'Je veux le ROI, l\'impact business et les chiffres'
    }, {
      icon: '📊',
      label: 'Manager Opérationnel',
      sub: 'Montrez-moi comment vous aidez mon équipe'
    }, {
      icon: '🤝',
      label: 'RH / Talent Acquisition',
      sub: 'Le parcours et les qualités humaines'
    }, {
      icon: '💡',
      label: 'Entrepreneur / Fondateur',
      sub: 'Que pouvez-vous faire pour ma startup ?'
    }]
  }
};

/* ─── RECRUITER PROFILES ────────────────────────────────────────────────────── */
const RECRUITER_PROFILES = {
  executive: {
    en: {
      title: 'Optimized for Executive View',
      highlights: ['85% reduction in reporting workload → ~1 FTE recovered', '270% sales pipeline efficiency via CRM automation', 'Built Analytics dept from 0 in 6 months · Still running today', 'ROI on hiring: typically 400–600% in year 1'],
      note: "You care about outcomes. Here's what I deliver: autonomous systems that give your team back time and your leadership real visibility — at scale, without hand-holding."
    },
    fr: {
      title: 'Vue optimisée Dirigeant',
      highlights: ['85% de charge reporting économisée → ~1 ETP récupéré', '270% d\'efficacité pipeline commercial via automatisation CRM', 'Dept Analytics construit de 0 en 6 mois · Tourne encore aujourd\'hui', 'ROI du recrutement : typiquement 400–600% en année 1'],
      note: "Vous voulez des résultats. Voici ce que je livre : des systèmes autonomes qui rendent du temps à vos équipes et une vraie visibilité à votre direction — à l'échelle, sans micromanagement."
    }
  },
  tech: {
    en: {
      title: 'Optimized for Tech View',
      highlights: ['Python + n8n agentic pipelines (LLM orchestration)', 'Scrapy + Selenium web scraping at scale (1,300 SKUs daily)', 'Prophet ML forecasting · MAPE 4.2% on 13-week horizon', 'React frontend · SQL · Git · REST APIs · Cloud-ready'],
      note: "Stack is Python/n8n/Power BI/LLMs. I write clean, maintainable code. I architect for reliability and automation-first. The pipeline you see in this portfolio runs in production."
    },
    fr: {
      title: 'Vue optimisée Tech',
      highlights: ['Pipelines agentiques Python + n8n (orchestration LLM)', 'Web scraping Scrapy + Selenium à l\'échelle (1 300 SKUs/jour)', 'Prévision ML Prophet · MAPE 4,2% sur horizon 13 semaines', 'React · SQL · Git · API REST · Cloud-ready'],
      note: "Stack : Python/n8n/Power BI/LLMs. Code propre, maintenable. Architecture orientée fiabilité et automation-first. Le pipeline visible dans ce portfolio tourne en production."
    }
  },
  data: {
    en: {
      title: 'Optimized for Data View',
      highlights: ['NLP sentiment pipeline · 10,000+ reviews/month · auto-reporting', 'SKU-level demand forecasting · STL decomposition + Prophet', 'Power BI governance · DAX · 10+ dashboards · all business units', 'Data quality automation · error detection · OOS scanning'],
      note: "Methodology: start with the business question, work backwards to the data. I document, I govern, I version. The output is always something a non-technical stakeholder can act on."
    },
    fr: {
      title: 'Vue optimisée Data',
      highlights: ['Pipeline NLP sentiment · 10 000+ avis/mois · rapports auto', 'Prévision demand SKU-level · décomposition STL + Prophet', 'Gouvernance Power BI · DAX · 10+ dashboards · toutes BUs', 'Automatisation qualité data · détection erreurs · scan OOS'],
      note: "Méthodologie : partir de la question business, remonter vers la data. Je documente, je gouverne, je versionne. L'output est toujours actionnable par un stakeholder non-technique."
    }
  },
  hr: {
    en: {
      title: 'Optimized for HR View',
      highlights: ['5+ years across CPG, SaaS, CSR · France, Spain, USA, Canada', 'Built teams & systems from zero · Autonomous & self-directed', 'Bilingual FR/EN · Multicultural · Relocatable globally · Remote-ready', 'Open worldwide: France, Dubai, Canada, Singapore, Europe & beyond'],
      note: "I'm a builder who communicates clearly, ships fast, and always ties work back to business impact. Available for CDI, CDD, or freelance missions. Open to opportunities worldwide — France, Dubai, Canada, Singapore are preferences but I'm genuinely flexible."
    },
    fr: {
      title: 'Vue optimisée RH',
      highlights: ['5+ ans en CPG, SaaS, RSE · France, Espagne, USA, Canada', 'Construit équipes & systèmes de 0 · Autonome & proactif', 'Bilingue FR/EN · Multiculturel · Mobile internationalement · Remote-ready', 'Ouvert partout : France, Dubai, Canada, Singapour, Europe'],
      note: "Je suis un builder qui communique clairement, livre vite et relie toujours le travail à l'impact business. Disponible CDI, CDD ou mission freelance. Ouvert aux opportunités mondiales — préférence France, Dubai, Canada, Singapour mais genuinement flexible."
    }
  }
};

/* ─── DATA ────────────────────────────────────────────────────────────────── */
const EXPERIENCES = {
  en: [{
    id: 0,
    date: "Jun 2025 – Present",
    role: "AI Specialist & BI Lead",
    company: "NAOS – Bioderma · NORAM",
    location: "Montréal, Canada",
    revenue: "€950M",
    highlights: ["Architecting enterprise-wide Generative AI & Agentic workflow integration across North American operations.", "Engineering AI agent networks (n8n, Python, LLMs) for end-to-end autonomous data pipelines.", "Built daily competitive intelligence scraper: 40+ competitors, 1,300 SKUs — promos, OOS, launches, pricing, sentiment — auto Power BI every morning.", "Master sales automation: merges all rep extracts, flags errors, detects OOS, splits sell-out by rep, generates dashboards — fully hands-free.", "85% gain in processing capacity by migrating 30+ manual workstreams.", "Working in Agile sprints: 2-week delivery cycles, continuous improvement, zero endless planning."],
    tags: ["n8n", "Python", "LLMs", "Power BI", "Agentic AI", "Web Scraping", "NLP", "Stock Forecasting", "Agile"]
  }, {
    id: 1,
    date: "May 2024 – Jun 2025",
    role: "Business Analyst (VIE)",
    company: "NAOS – Bioderma · USA",
    location: "United States",
    revenue: "€950M",
    highlights: ["Built the US Analytics department from zero — governance, protocols, frameworks in 6 months.", "10+ automated Power BI dashboards with real-time cross-BU visibility.", "SKU-level sell-through forecasting for major retail partners.", "Stock forecasting model reducing OOS events across 5 retail channels.", "NLP pipeline analyzing 10,000+ customer reviews monthly."],
    tags: ["Power BI", "Forecasting", "Retail", "Stock Planning", "NLP", "Data Governance"]
  }, {
    id: 2,
    date: "Feb 2023 – Feb 2024",
    role: "Business Developer",
    company: "Reech Influence Cloud · SaaS",
    location: "Paris, France",
    revenue: "€13M",
    highlights: ["First Luxury and CAC40 clients — unlocked new high-value market segment.", "270% sales pipeline efficiency boost through CRM process redesign."],
    tags: ["Sales Strategy", "CRM", "Luxury", "CAC40", "HubSpot"]
  }, {
    id: 3,
    date: "Mar – Jul 2022",
    role: "Data Analyst (Master Thesis)",
    company: "NOOS · CSR",
    location: "Madrid, Spain",
    revenue: "€9M",
    highlights: ["ML & NLP models for B2B employee engagement via semantic analysis.", "Automated 15,000+ data points with Python & Power BI."],
    tags: ["Python", "NLP", "ML", "Power BI", "B2B"]
  }],
  fr: [{
    id: 0,
    date: "Juin 2025 – Présent",
    role: "Spécialiste IA & BI Lead",
    company: "NAOS – Bioderma · NORAM",
    location: "Montréal, Canada",
    revenue: "950M€",
    highlights: ["Architecture IA Générative & workflows Agentiques à l'échelle NORAM.", "Réseaux d'agents IA (n8n, Python, LLMs) pour des pipelines de données autonomes.", "Scraper de veille concurrentielle quotidien : 40+ concurrents, 1 300 SKUs — promos, ruptures, lancements, prix, sentiment — Power BI auto chaque matin.", "Automatisation master ventes : fusion extraits, détection erreurs, scan OOS, répartition sell-out, dashboards — zéro touche.", "85% de gain en capacité en migrant 30+ workstreams manuels.", "Méthode Agile : sprints de 2 semaines, livraisons continues, zéro réunion inutile."],
    tags: ["n8n", "Python", "LLMs", "Power BI", "IA Agentique", "Web Scraping", "NLP", "Prévision Stock", "Agile"]
  }, {
    id: 1,
    date: "Mai 2024 – Juin 2025",
    role: "Business Analyst (VIE)",
    company: "NAOS – Bioderma · USA",
    location: "États-Unis",
    revenue: "950M€",
    highlights: ["Construction du département Analytics US de zéro en 6 mois.", "10+ dashboards Power BI automatisés avec visibilité cross-BU temps réel.", "Prévisions sell-through SKU-level pour les grands partenaires retail.", "Modèle de prévision de stock réduisant les ruptures sur 5 canaux retail.", "Pipeline NLP : 10 000+ avis clients mensuels."],
    tags: ["Power BI", "Prévision", "Retail", "Stock Planning", "NLP", "Gouvernance Data"]
  }, {
    id: 2,
    date: "Fév 2023 – Fév 2024",
    role: "Business Developer",
    company: "Reech Influence Cloud · SaaS",
    location: "Paris, France",
    revenue: "13M€",
    highlights: ["Premiers clients Luxe et CAC40 — nouveau segment haute valeur.", "+270% efficacité pipeline commercial via refonte CRM."],
    tags: ["Stratégie Commerciale", "CRM", "Luxe", "CAC40", "HubSpot"]
  }, {
    id: 3,
    date: "Mars – Juil 2022",
    role: "Data Analyst (Mémoire Master)",
    company: "NOOS · RSE",
    location: "Madrid, Espagne",
    revenue: "9M€",
    highlights: ["Modèles ML & NLP pour l'engagement employé B2B via analyse sémantique.", "Automatisation de 15 000+ points de données Python & Power BI."],
    tags: ["Python", "NLP", "ML", "Power BI", "B2B"]
  }]
};
const SKILLS = {
  en: [{
    icon: "📊",
    name: "Power BI",
    desc: "Enterprise dashboards, DAX, governance",
    pct: 95
  }, {
    icon: "🤖",
    name: "Agentic AI",
    desc: "n8n, LLMs, autonomous pipelines",
    pct: 90
  }, {
    icon: "🐍",
    name: "Python",
    desc: "Forecasting, NLP, ML, data eng.",
    pct: 82
  }, {
    icon: "⚡",
    name: "Automation",
    desc: "End-to-end workflow automation",
    pct: 95
  }, {
    icon: "📈",
    name: "Forecasting",
    desc: "SKU-level models, retail analytics",
    pct: 88
  }, {
    icon: "💰",
    name: "Revenue Ops",
    desc: "Financial reporting, ROI optimization",
    pct: 92
  }],
  fr: [{
    icon: "📊",
    name: "Power BI",
    desc: "Dashboards entreprise, DAX, gouvernance",
    pct: 95
  }, {
    icon: "🤖",
    name: "IA Agentique",
    desc: "n8n, LLMs, pipelines autonomes",
    pct: 90
  }, {
    icon: "🐍",
    name: "Python",
    desc: "Prévision, NLP, ML, data engineering",
    pct: 82
  }, {
    icon: "⚡",
    name: "Automatisation",
    desc: "Workflows de bout en bout",
    pct: 95
  }, {
    icon: "📈",
    name: "Prévision",
    desc: "Modèles SKU-level, analytics retail",
    pct: 88
  }, {
    icon: "💰",
    name: "Revenue Ops",
    desc: "Reporting financier, optimisation ROI",
    pct: 92
  }]
};
const RADAR_DATA = {
  en: {
    labels: ['BI & Analytics', 'AI / Automation', 'Supply & Ops', 'Data Engineering', 'Sales / Finance', 'Communication'],
    data: [95, 90, 80, 78, 85, 82],
    details: [{
      label: 'BI & Analytics',
      pct: 95,
      sub: 'Power BI · DAX · KPI design'
    }, {
      label: 'AI / Automation',
      pct: 90,
      sub: 'n8n · LLMs · Agentic pipelines'
    }, {
      label: 'Supply & Ops',
      pct: 80,
      sub: 'Forecasting · Demand planning'
    }, {
      label: 'Data Engineering',
      pct: 78,
      sub: 'Python · SQL · ETL'
    }, {
      label: 'Sales / Finance',
      pct: 85,
      sub: 'Revenue ops · ROI modelling'
    }, {
      label: 'Communication',
      pct: 82,
      sub: 'Executive reporting · Storytelling'
    }]
  },
  fr: {
    labels: ['BI & Analytics', 'IA / Automation', 'Supply & Ops', 'Data Engineering', 'Ventes / Finance', 'Communication'],
    data: [95, 90, 80, 78, 85, 82],
    details: [{
      label: 'BI & Analytics',
      pct: 95,
      sub: 'Power BI · DAX · Design KPI'
    }, {
      label: 'IA / Automation',
      pct: 90,
      sub: 'n8n · LLMs · Pipelines agentiques'
    }, {
      label: 'Supply & Ops',
      pct: 80,
      sub: 'Prévision · Demand planning'
    }, {
      label: 'Data Engineering',
      pct: 78,
      sub: 'Python · SQL · ETL'
    }, {
      label: 'Ventes / Finance',
      pct: 85,
      sub: 'Revenue ops · Modélisation ROI'
    }, {
      label: 'Communication',
      pct: 82,
      sub: 'Reporting exécutif · Storytelling'
    }]
  }
};
const STACK = [{
  name: 'Power BI',
  cat: 'BI & Analytics',
  level: 'EXPERT',
  e: '📊'
}, {
  name: 'Python',
  cat: 'Data Engineering',
  level: 'ADVANCED',
  e: '🐍'
}, {
  name: 'n8n',
  cat: 'Automation',
  level: 'EXPERT',
  e: '⚡'
}, {
  name: 'Claude AI',
  cat: 'AI / LLM',
  level: 'EXPERT',
  e: '🤖'
}, {
  name: 'GPT-4',
  cat: 'AI / LLM',
  level: 'ADVANCED',
  e: '🧠'
}, {
  name: 'React',
  cat: 'Frontend',
  level: 'INTERMEDIATE',
  e: '⚛️'
}, {
  name: 'SQL',
  cat: 'Database',
  level: 'EXPERT',
  e: '🗄️'
}, {
  name: 'Git',
  cat: 'DevOps',
  level: 'ADVANCED',
  e: '🔀'
}, {
  name: 'Excel',
  cat: 'Finance & Ops',
  level: 'EXPERT',
  e: '📈'
}, {
  name: 'HubSpot',
  cat: 'CRM & Sales',
  level: 'ADVANCED',
  e: '🎯'
}, {
  name: 'Pandas',
  cat: 'Data Engineering',
  level: 'ADVANCED',
  e: '🐼'
}, {
  name: 'Notion',
  cat: 'Productivity',
  level: 'ADVANCED',
  e: '📝'
}];
const PIPELINE_STAGES_DEF = {
  en: [{
    id: 'src',
    icon: '🗄️',
    label: 'Source',
    detail: 'Retail API'
  }, {
    id: 'ing',
    icon: '⬇️',
    label: 'Ingest',
    detail: 'Python ETL'
  }, {
    id: 'cln',
    icon: '🧹',
    label: 'Clean',
    detail: 'Pandas'
  }, {
    id: 'mdl',
    icon: '🤖',
    label: 'Forecast',
    detail: 'Prophet'
  }, {
    id: 'bi',
    icon: '📊',
    label: 'Power BI',
    detail: 'Embed'
  }, {
    id: 'ntf',
    icon: '📬',
    label: 'Notify',
    detail: 'Slack+Mail'
  }],
  fr: [{
    id: 'src',
    icon: '🗄️',
    label: 'Source',
    detail: 'API Retail'
  }, {
    id: 'ing',
    icon: '⬇️',
    label: 'Ingestion',
    detail: 'Python ETL'
  }, {
    id: 'cln',
    icon: '🧹',
    label: 'Nettoyage',
    detail: 'Pandas'
  }, {
    id: 'mdl',
    icon: '🤖',
    label: 'Prévision',
    detail: 'Prophet'
  }, {
    id: 'bi',
    icon: '📊',
    label: 'Power BI',
    detail: 'Embed'
  }, {
    id: 'ntf',
    icon: '📬',
    label: 'Notifier',
    detail: 'Slack+Mail'
  }]
};
const CORRECT_ORDER = ['src', 'ing', 'cln', 'mdl', 'bi', 'ntf'];
const TESTIMONIALS = [{
  name: 'Guillaume Martin',
  title: {
    en: 'Finance Director',
    fr: 'Directeur Financier'
  },
  company: 'Naos',
  linkedin: 'https://www.linkedin.com/in/guillaume-martin-90789150/',
  date: {
    en: "March 2026 · Guillaume was Antoine's senior but not his direct manager",
    fr: "Mars 2026 · Guillaume était le supérieur de Antoine mais n'était pas le responsable direct de Antoine"
  },
  avatarImg: '/images/testimonials/guillaume-martin.png',
  avatar: 'GM',
  color: '#6366F1',
  stars: 5,
  q: {
    en: "I had the pleasure of working with Antoine and can confidently say he stands out for both his professionalism and forward-thinking mindset. Antoine combines strong execution capabilities with an ability to quickly grasp complex topics and turn them into actionable solutions. He has a sharp sense of priorities, consistently focusing on what truly drives impact while maintaining a high level of quality in his work. What particularly differentiates him is his natural curiosity and his ability to leverage AI and emerging technologies in a pragmatic and value-driven way. He stays on top of trends and integrates them intelligently into his approach. Reliable, structured, and always solution-oriented, Antoine is someone you can trust to deliver in demanding environments while continuously pushing boundaries. I would highly recommend Antoine to any organization looking for a talented and forward-looking professional.",
    fr: "J'ai eu le plaisir de travailler avec Antoine et je peux dire avec confiance qu'il se distingue par son professionnalisme et son état d'esprit tourné vers l'avenir. Antoine combine de solides capacités d'exécution avec une aptitude à saisir rapidement des sujets complexes et à les transformer en solutions concrètes. Il a un sens aigu des priorités, se concentrant toujours sur ce qui génère un impact réel tout en maintenant un haut niveau de qualité. Ce qui le différencie particulièrement, c'est sa curiosité naturelle et sa capacité à exploiter l'IA et les technologies émergentes de manière pragmatique et orientée valeur. Fiable, structuré et toujours orienté solutions, Antoine est quelqu'un sur qui on peut compter pour délivrer dans des environnements exigeants. Je recommande vivement Antoine à toute organisation à la recherche d'un professionnel talentueux et tourné vers l'avenir."
  }
}, {
  name: 'Aziz Agoumy',
  title: {
    en: 'Head of E-commerce North America',
    fr: 'Head of E-commerce North America'
  },
  company: 'Naos',
  linkedin: 'https://www.linkedin.com/in/aziz-agoumy-4753b2a3/',
  date: {
    en: "March 2026 · Aziz was Antoine's senior but not his direct manager",
    fr: "Mars 2026 · Aziz était le supérieur de Antoine mais n'était pas le responsable direct de Antoine"
  },
  avatarImg: '/images/testimonials/aziz-agoumy.jpeg',
  avatar: 'AA',
  color: '#F97316',
  stars: 5,
  q: {
    en: "I've had the pleasure of working with Antoine for the past two years at NAOS, where he has been our go-to expert for BI and AI. His ability to navigate complex data collection, analysis, reporting, and deliver sharp market insights is truly impressive. Tasks that could easily take weeks or even months, Antoine manages to solve within minutes. Beyond his technical expertise, Antoine is an easygoing colleague who consistently brings energy and fun to the workplace. He is always willing to go above and beyond to support his teammates and help the team succeed. I highly recommend Antoine to any team that enjoys tackling challenges and confidently navigating uncertainty.",
    fr: "J'ai eu le plaisir de travailler avec Antoine pendant deux ans chez NAOS, où il a été notre expert référent en BI et IA. Sa capacité à gérer des collectes de données complexes, des analyses, du reporting et à délivrer des insights marché précis est vraiment impressionnante. Des tâches qui pourraient prendre des semaines voire des mois, Antoine les résout en quelques minutes. Au-delà de son expertise technique, Antoine est un collègue sympathique qui apporte constamment énergie et bonne humeur. Il est toujours prêt à aller plus loin pour soutenir ses coéquipiers. Je recommande vivement Antoine à toute équipe qui aime relever des défis et naviguer dans l'incertitude avec confiance."
  }
}, {
  name: 'Theo Massot',
  title: {
    en: 'Business Data Analyst',
    fr: 'Business Data Analyst'
  },
  company: 'Naos',
  linkedin: 'https://www.linkedin.com/in/theomassot/',
  date: {
    en: 'March 2026 · worked with Antoine in the same team',
    fr: 'Mars 2026 · a travaillé avec Antoine dans la même équipe'
  },
  avatarImg: '/images/testimonials/theo-massot.png',
  avatar: 'TM',
  color: '#38BDF8',
  stars: 5,
  q: {
    en: "I worked with Antoine on AI and Business Intelligence topics, and he notably supported me during my onboarding at NAOS, which made a real difference in quickly getting up to speed. What defines him: a genuine ability to implement concrete solutions — workflow automation, LLM integration, automated reporting — with a solid grasp of the business stakes behind them. His strengths: strong applied AI expertise with the ability to identify the right use cases and deploy them effectively, deep know-how in automation via n8n, Power Automate and Python, and a real talent for bringing teams along in adopting new tools. A serious, operational profile I recommend for any role at the intersection of AI and data.",
    fr: "J'ai travaillé avec Antoine sur des sujets IA et Business Intelligence, et il m'a notamment accompagné lors de mon intégration chez NAOS, ce qui a fait une vraie différence dans ma prise en main rapide des sujets. Ce qui le caractérise : une capacité réelle à implémenter des solutions concrètes, automatisation de workflows, intégration de LLMs, reporting automatisé, avec une bonne compréhension des enjeux business derrière. Ses points forts : une maîtrise solide de l'IA appliquée avec une capacité à identifier les bons cas d'usage et les déployer efficacement, une expertise en automatisation via n8n, Power Automate et Python, et une vraie pédagogie pour embarquer les équipes dans l'adoption des nouveaux outils. Un profil sérieux et opérationnel, que je recommande pour tout rôle à l'intersection de l'IA et de la donnée."
  }
}, {
  name: 'Robin Blondeau',
  title: {
    en: 'Customer Success Manager',
    fr: 'Customer Success Manager'
  },
  company: 'Reech Influence Cloud',
  linkedin: 'https://www.linkedin.com/in/robin-blondeau-95633aa9/',
  date: {
    en: 'May 2024 · worked with Antoine across teams',
    fr: 'Mai 2024 · a travaillé avec Antoine dans des équipes différentes'
  },
  avatarImg: '/images/testimonials/robin-blondeau.jpeg',
  avatar: 'RB',
  color: '#415a77',
  stars: 5,
  q: {
    en: "Antoine is a conscientious and resourceful person: beyond his assignments and established processes, he constantly seeks to optimise his work and doesn't hesitate to be proactive. I also highlight his strong analytical capacity to find solutions and build action plans that allow him to be highly autonomous across many areas. On a human level, he is deeply empathetic and driven — sociable and cheerful, he's a force behind great team cohesion.",
    fr: "Antoine est une personne consciencieuse et astucieuse : au delà de ses missions et du respect des process établis, il est en constante volonté d'optimiser ses fonctions et n'hésite pas à être force de proposition. De plus, je souligne sa grande capacité d'analyse à trouver des solutions et aboutir à des plans d'action qui lui permettent d'être très autonome. Sur un aspect plus humain, c'est une personne profondément empathique et volontaire. Sociable et jovial, il est moteur dans la création d'une bonne cohésion d'équipe !"
  }
}, {
  name: 'Thomas Becuwe',
  title: {
    en: 'Account Executive',
    fr: 'Account Executive'
  },
  company: 'Tomorro',
  linkedin: 'https://www.linkedin.com/in/thomasbecuwe/',
  date: {
    en: 'May 2024 · worked with Antoine in the same team',
    fr: 'Mai 2024 · a travaillé avec Antoine dans la même équipe'
  },
  avatarImg: '/images/testimonials/thomas-becuwe.jpeg',
  avatar: 'TB',
  color: '#FF2D78',
  stars: 5,
  q: {
    en: "Having worked closely with Antoine, I was struck by his energy. He's someone who succeeds in everything he undertakes — and he undertakes a lot — through determination, drive and a touch of talent. I worked with him on commercial missions: lead sourcing with SalesNav, hunting major accounts (TotalEnergie, Dior, Tod's...), software demos and deal closing. He performed on all fronts. Day to day, Antoine is a natural leader. He drives a team, inspires performance, and his interpersonal skills make internal communication effortless. I can only recommend Antoine.",
    fr: "Ayant travaillé étroitement avec Antoine, j'ai été frappé par son énergie. C'est une personne qui réussit ce qu'elle entreprend (et elle entreprend beaucoup) grâce à sa détermination, son envie de réussir et une touche de talent. Je l'ai cotoyé sur des missions commerciales : sourcing de lead avec SalesNav, chasse grands comptes (TotalEnergie, Dior, Tod's...), démo et closing. Performant sur tous les fronts. Au quotidien, Antoine est naturellement un leader. Il sait driver une équipe, donne envie de performer et ses qualités relationnelles rendent les communications internes très fluides. Je ne peux que le recommander."
  }
}, {
  name: 'Matthieu Conil',
  title: {
    en: 'Brand Strategy & Communication',
    fr: 'Stratégie de marque & Communication'
  },
  company: 'Reech Influence Cloud',
  linkedin: 'https://www.linkedin.com/in/matthieu-conil-93266378/',
  date: {
    en: 'May 2024 · worked with Antoine in the same team',
    fr: 'Mai 2024 · a travaillé avec Antoine dans la même équipe'
  },
  avatarImg: '/images/testimonials/matthieu-conil.jpeg',
  avatar: 'MC',
  color: '#00F0A8',
  stars: 5,
  q: {
    en: "Antoine has an ability to quickly grasp business stakes and market dynamics, anticipate needs, and show proactivity in his missions — always pushing into new verticals. He demonstrates great professionalism, giving his time freely to help colleagues. Antoine is invested, reliable, genuinely pleasant and always in good spirits — someone with real human qualities. It was a genuine pleasure working closely with him, and I recommend him wholeheartedly.",
    fr: "Antoine a une aptitude à comprendre rapidement les enjeux de l'entreprise et de son marché, à anticiper les besoins, et à faire preuve de proactivité dans ses missions, pour sans cesse aller démarcher de nouvelles verticales. Il fait preuve d'un grand professionnalisme, n'hésitant pas à donner de sa personne et de son temps pour aider ses collègues. Antoine est une personne investie, sur qui on peut compter, très agréable et sympathique, toujours de bonne humeur. C'était un réel plaisir de travailler en étroite collaboration avec lui et je le recommande vivement !"
  }
}];
const COUNTRIES = {
  en: [{
    iso: 'fr',
    n: 'France',
    emoji: '🥐',
    sub: 'Homeland · Versailles · Brittany',
    tags: ['Birthplace', 'Versailles (city, not castle 😄)', '15 years of piano', 'Rugby · Football · Sailing', 'Brittany forever'],
    text: "Born and raised in France, I grew up in Versailles — the city, not the castle. 15 years of classical piano, rugby, football and sailing. That mix of discipline and creativity is what defines me. And Brittany — its wild coastlines and salted-butter crêpes — remains my favourite place to recharge."
  }, {
    iso: 'ca',
    n: 'Canada',
    emoji: '🍁',
    sub: 'VIE · Montréal · AI & Automation',
    tags: ['VIE NAOS', 'Montréal', 'AI & Data', '−30°C (yes, really)'],
    text: "Montréal is where I truly flourished. My VIE at NAOS Bioderma let me build an Analytics department from scratch and deeply explore AI and BI automation. Between Python pipelines and NORAM team meetings, I learned to appreciate Canadian winters — the kind of cold that wakes you up, literally and figuratively."
  }, {
    iso: 'de',
    n: 'Germany',
    emoji: '🍺',
    sub: '1 year of studies · Full immersion',
    tags: ['Studies', 'German Rigour', 'Engineering & Business'],
    text: "A year in Germany exposed me to German rigour — impeccable processes, deep work culture, engineering approach to every problem. Germany taught me that precision doesn't exclude creativity — it amplifies it."
  }, {
    iso: 'it',
    n: 'Italy',
    emoji: '🍕',
    sub: '1 year of studies · Turin',
    tags: ['Turin', 'Gastronomy', 'Dolce vita'],
    text: "Turin — the understated capital of Northern Italy, infinitely more authentic than Rome or Milan. Italy reminded me that quality of execution — whether pasta or dashboards — is always noticed."
  }, {
    iso: 'es',
    n: 'Spain',
    emoji: '🌞',
    sub: 'IE Business School · Madrid · 📷 Film',
    tags: ['IE Business School', 'NooS CSR', 'Madrid — my favourite', '📷 Film Photography', 'Analog & Creativity'],
    text: "Absolute love at first sight. Madrid marked me the most. Completed my Master's at IE Business School while supporting NooS in its data and CSR challenges. It's also where I discovered analog photography — the deliberateness of loading film, composing without instant feedback. Working in a city where real life begins after midnight changes your perspective on time, creativity, and what it means to slow down."
  }, {
    iso: 'tr',
    n: 'Turkey',
    emoji: '🌙',
    sub: 'First internship · Foundational',
    tags: ['First Internship', 'Istanbul'],
    text: "My very first internship. Turkey threw me into the deep end. Istanbul — between Europe and Asia — is a city that never leaves you indifferent. Taught me adaptability and that the best experiences are those that unsettle you at first."
  }],
  fr: [{
    iso: 'fr',
    n: 'France',
    emoji: '🥐',
    sub: 'Patrie · Versailles · Bretagne',
    tags: ['Versailles (pas le château 😄)', '15 ans de piano', 'Rugby · Football · Voile', 'La Bretagne forever'],
    text: "Né et grandi en France, j'ai passé mon lycée à Versailles — dans la ville, pas au château. 15 ans de piano classique, rugby, football et voile. Ce mélange de rigueur et créativité me définit. Et la Bretagne — ses côtes sauvages et ses crêpes au beurre salé — reste mon endroit préféré pour me ressourcer."
  }, {
    iso: 'ca',
    n: 'Canada',
    emoji: '🍁',
    sub: 'VIE · Montréal · IA & Auto',
    tags: ['VIE NAOS', 'Montréal', 'IA & Data', '−30°C (oui vraiment)'],
    text: "C'est à Montréal que je me suis vraiment épanoui. Mon VIE chez NAOS Bioderma m'a permis de construire un département Analytics de zéro et d'explorer l'IA et l'automatisation BI. Entre pipelines Python et réunions NORAM, j'ai appris à apprécier les hivers canadiens."
  }, {
    iso: 'de',
    n: 'Allemagne',
    emoji: '🍺',
    sub: "1 an d'études",
    tags: ['Études', 'Rigueur germanique'],
    text: "Une année d'études en Allemagne m'a exposé à la rigueur germanique dans toute sa splendeur. L'Allemagne m'a appris que la précision n'exclut pas la créativité — elle la renforce."
  }, {
    iso: 'it',
    n: 'Italie',
    emoji: '🍕',
    sub: "1 an d'études · Turin",
    tags: ['Turin', 'Gastronomie', 'Dolce vita'],
    text: "Turin — la capitale discrète de l'Italie du Nord, infiniment plus authentique que Rome ou Milan. L'Italie m'a rappelé que la qualité d'exécution — pasta ou dashboards — est toujours remarquée."
  }, {
    iso: 'es',
    n: 'Espagne',
    emoji: '🌞',
    sub: 'IE Business School · Madrid · 📷 Photo',
    tags: ['IE Business School', 'Madrid — coup de cœur', '📷 Photo Argentique', 'Créativité & Analogique'],
    text: "Coup de cœur absolu. Madrid est la ville qui m'a le plus marqué. Master à l'IE Business School en accompagnant NooS sur ses problématiques data et RSE. C'est aussi là que j'ai découvert la photographie argentique — la lenteur délibérée de charger une pellicule, de composer sans feedback immédiat. Dans une ville où la vraie vie commence après minuit, ça remet en question tout ce qu'on croit sur le temps, la créativité et la beauté du ralenti."
  }, {
    iso: 'tr',
    n: 'Turquie',
    emoji: '🌙',
    sub: 'Premier stage · Fondateur',
    tags: ['Premier stage', 'Istanbul'],
    text: "Mon tout premier stage. La Turquie m'a jeté dans le grand bain. Istanbul — entre Europe et Asie — est une ville qui ne te laisse jamais indifférent. Elle a posé les bases de tout ce qui a suivi."
  }]
};
const BLOG_POSTS = {
  en: [{
    tag: 'AI & AUTOMATION',
    title: 'Why your data teams still waste 60% of their time',
    date: 'Feb 2026',
    readTime: '4',
    excerpt: "Most data teams spend more time preparing data than analysing it. Here's why — and how to flip it.",
    body: `<p>I've spent 18 months building automation systems for commercial teams. Always the same pattern: <strong>50–70% of analytical time is spent on preparation</strong> — extracting files, merging, cleaning, reformatting.</p><p>High-value human time burned on tasks Python handles in 12 seconds. Nobody takes 2 weeks to <strong>automate what takes 2 days every week</strong>. Urgency of daily work crushes structural investment.</p><p><strong>Typical result:</strong> a team of 3 analysts recovers the equivalent of one full headcount on value-added tasks.</p>`
  }, {
    tag: 'COMPETITIVE INTELLIGENCE',
    title: '40 competitors, 1,300 SKUs, zero analyst — how?',
    date: 'Jan 2026',
    readTime: '5',
    excerpt: "How I built a system monitoring 40 competitors across 1,300 SKUs every morning, without human intervention.",
    body: `<p>Manual competitive intelligence is one of the most underestimated cost centres in product marketing. Hours every week checking prices, promotions, stock-outs, new launches — dozens of sites.</p><p>I built an alternative: <strong>a Python scraper running every night</strong>, covering 40+ competitors across 1,300 SKUs, auto-generating Power BI fed with fresh morning data.</p><p><strong>Stack:</strong> Python (Scrapy + Selenium), n8n orchestration, Power BI, Slack alerts.</p>`
  }, {
    tag: 'PERSPECTIVE',
    title: 'AI doesn\'t replace data analysts — it changes what they do',
    date: 'Mar 2026',
    readTime: '3',
    excerpt: "The AI vs human debate is badly framed. What should a data analyst spend time on in 2026?",
    body: `<p>18 months integrating AI tools into analytical workflows. Always the same fear: "will it replace analysts?"</p><p>Short answer: no. Long answer: <strong>it will make obsolete those who refuse to evolve</strong>.</p><p>The analysts who thrive in 2026 are those who use AI to eliminate mechanical work and focus on real added value: interpretation, storytelling, strategic recommendation.</p>`
  }],
  fr: [{
    tag: 'IA & AUTOMATISATION',
    title: "Pourquoi vos équipes data perdent encore 60% de leur temps",
    date: 'Fév 2026',
    readTime: '4',
    excerpt: "La plupart des équipes data passent plus de temps à préparer les données qu'à les analyser.",
    body: `<p>18 mois à construire des systèmes d'automatisation. Toujours le même pattern : <strong>50–70% du temps analytique est consacré à la préparation</strong> — extraire, merger, nettoyer, reformater.</p><p>Du temps humain de haute valeur brûlé sur des tâches que Python fait en 12 secondes. Personne ne prend 2 semaines pour <strong>automatiser ce qui prend 2 jours chaque semaine</strong>.</p><p><strong>Résultat type :</strong> une équipe de 3 analystes récupère l'équivalent d'un ETP complet.</p>`
  }, {
    tag: 'INTELLIGENCE COMPÉTITIVE',
    title: '40 concurrents, 1300 SKUs, zéro analyste — comment ?',
    date: 'Janv 2026',
    readTime: '5',
    excerpt: "Comment surveiller 40 concurrents sur 1 300 références chaque matin, sans intervention humaine.",
    body: `<p>La veille concurrentielle manuelle — un poste de coût sous-estimé. Des heures chaque semaine pour vérifier prix, promos, ruptures, nouveautés sur des dizaines de sites.</p><p>J'ai construit une alternative : <strong>un scraper Python qui tourne chaque nuit</strong>, couvre 40+ concurrents sur 1 300 SKUs, génère automatiquement un Power BI alimenté avec les données fraîches.</p><p><strong>Stack :</strong> Python (Scrapy + Selenium), n8n, Power BI, alertes Slack.</p>`
  }, {
    tag: 'RÉFLEXION',
    title: "L'IA ne remplace pas les data analysts",
    date: 'Mars 2026',
    readTime: '3',
    excerpt: "Le débat IA vs humain est mal posé. À quoi consacrer son temps en 2026 ?",
    body: `<p>18 mois d'intégration d'outils IA dans des workflows analytiques. Toujours la même peur : "ça va remplacer les analystes ?"</p><p>Non. Mais ça va <strong>rendre obsolètes ceux qui refusent d'évoluer</strong>.</p><p>Les analystes qui prospèrent en 2026 sont ceux qui utilisent l'IA pour éliminer le travail mécanique et se concentrent sur la vraie valeur ajoutée.</p>`
  }]
};
const TERMINAL_CMDS = {
  en: {
    help: {
      output: [{
        t: 'sys',
        m: 'Available commands:'
      }, {
        t: 'cmd',
        m: '  whoami         → About Antoine'
      }, {
        t: 'cmd',
        m: '  skills         → Technical skills'
      }, {
        t: 'cmd',
        m: '  experience     → Career timeline'
      }, {
        t: 'cmd',
        m: '  projects       → Signature projects'
      }, {
        t: 'cmd',
        m: '  contact        → How to reach me'
      }, {
        t: 'cmd',
        m: '  availability   → Current status'
      }, {
        t: 'cmd',
        m: '  ./hire_antoine.sh → The important one'
      }, {
        t: 'dim',
        m: '  clear          → Clear terminal'
      }, {
        t: 'dim',
        m: '  secret         → 👀'
      }]
    },
    whoami: {
      output: [{
        t: 'sys',
        m: 'Antoine de Maintenant'
      }, {
        t: 'info',
        m: 'Role    : AI Specialist & BI Lead @ NAOS Bioderma NORAM'
      }, {
        t: 'info',
        m: 'Base    : Montréal, Canada'
      }, {
        t: 'info',
        m: 'Focus   : Turning manual chaos into autonomous systems'
      }, {
        t: 'info',
        m: 'Stack   : n8n · Python · Power BI · LLMs'
      }, {
        t: 'info',
        m: 'Built   : Analytics dept from scratch in 6 months'
      }, {
        t: 'acc2',
        m: 'Status  : OPEN TO NEW MISSIONS · 2026'
      }]
    },
    skills: {
      output: [{
        t: 'sys',
        m: 'Technical competencies:'
      }, {
        t: 'info',
        m: '████████████████████ Power BI        95%'
      }, {
        t: 'info',
        m: '██████████████████░░ Agentic AI      90%'
      }, {
        t: 'info',
        m: '█████████████████░░░ Revenue Ops     85%'
      }, {
        t: 'info',
        m: '████████████████░░░░ Forecasting     80%'
      }, {
        t: 'info',
        m: '████████████████░░░░ Python          80%'
      }, {
        t: 'info',
        m: '████████████████░░░░ Data Eng.       78%'
      }]
    },
    experience: {
      output: [{
        t: 'sys',
        m: 'Career timeline:'
      }, {
        t: 'info',
        m: '2025→now  AI Specialist & BI Lead · NAOS NORAM · Montréal'
      }, {
        t: 'info',
        m: '2024–2025 Business Analyst VIE · NAOS USA · United States'
      }, {
        t: 'info',
        m: '2023–2024 Business Developer · Reech SaaS · Paris'
      }, {
        t: 'info',
        m: '2022      Data Analyst Thesis · NOOS CSR · Madrid'
      }]
    },
    projects: {
      output: [{
        t: 'sys',
        m: 'Signature projects (NDA):'
      }, {
        t: 'info',
        m: '🔍 Competitor engine  — 40 brands · 1,300 SKUs · daily'
      }, {
        t: 'info',
        m: '⚙️  Sales master auto  — multi-rep · zero touch'
      }, {
        t: 'info',
        m: '📦 Stock forecasting  — 13wk · MAPE 4.2%'
      }, {
        t: 'info',
        m: '💬 NLP review pipeline — 10k+/mo · auto-report'
      }]
    },
    contact: {
      output: [{
        t: 'sys',
        m: 'How to reach me:'
      }, {
        t: 'info',
        m: '📧 antoinedemaintenant@alumni.ie.edu'
      }, {
        t: 'info',
        m: '🔗 linkedin.com/in/antoine2maintenant'
      }, {
        t: 'info',
        m: '📍 Montréal, Canada · France'
      }, {
        t: 'info',
        m: '📱 +1 (263) 385-6506'
      }]
    },
    availability: {
      output: [{
        t: 'sys',
        m: 'Current availability:'
      }, {
        t: 'acc3',
        m: '✅ STATUS: OPEN TO NEW MISSIONS · 2026'
      }, {
        t: 'info',
        m: 'Looking for: Data/AI leadership, automation architecture'
      }, {
        t: 'info',
        m: 'Locations: France · Dubai · Canada · Singapore · Europe · Remote'
      }, {
        t: 'info',
        m: 'Preference: France, Dubai, Canada, Singapore — open worldwide'
      }]
    },
    secret: {
      output: [{
        t: 'acc4',
        m: '👾 SECRET UNLOCKED'
      }, {
        t: 'info',
        m: 'The Three.js sphere has 1,800 particles.'
      }, {
        t: 'info',
        m: 'This portfolio has 5 hidden easter eggs.'
      }, {
        t: 'info',
        m: 'You found 1. Try the Konami code. ↑↑↓↓←→←→BA'
      }, {
        t: 'acc2',
        m: 'Hint: also try ./hack.sh'
      }]
    },
    './hack.sh': {
      output: [{
        t: 'sys',
        m: '> Initiating hostile takeover of your data stack...'
      }, {
        t: 'info',
        m: '[██████████░░░░░░░░░░] 52%'
      }, {
        t: 'acc2',
        m: '> Detected: 14 manual Excel reports'
      }, {
        t: 'acc2',
        m: '> Detected: 3 broken pipelines'
      }, {
        t: 'acc2',
        m: '> Detected: 0 automated workflows'
      }, {
        t: 'err',
        m: '> CRITICAL: Business running on vibes and PivotTables'
      }, {
        t: 'acc4',
        m: '> SOLUTION FOUND: hire Antoine.'
      }, {
        t: 'acc3',
        m: '✅ Automation scheduled. ETA: 2 weeks.'
      }]
    },
    './hire_antoine.sh': {
      output: [{
        t: 'sys',
        m: 'Executing hire sequence...'
      }, {
        t: 'info',
        m: '[============================] 100%'
      }, {
        t: 'acc3',
        m: '✅ Excellent decision. ROI incoming.'
      }, {
        t: 'info',
        m: 'Next step: antoinedemaintenant@alumni.ie.edu'
      }, {
        t: 'acc2',
        m: '>> First automation: 2 weeks'
      }, {
        t: 'acc2',
        m: '>> First dashboard: 3 weeks'
      }, {
        t: 'acc2',
        m: '>> ROI breakeven: ~6 months'
      }]
    }
  },
  fr: {
    help: {
      output: [{
        t: 'sys',
        m: 'Commandes disponibles :'
      }, {
        t: 'cmd',
        m: "  whoami         → À propos d'Antoine"
      }, {
        t: 'cmd',
        m: '  skills         → Compétences techniques'
      }, {
        t: 'cmd',
        m: '  experience     → Parcours professionnel'
      }, {
        t: 'cmd',
        m: '  projects       → Projets signature'
      }, {
        t: 'cmd',
        m: '  contact        → Comment me joindre'
      }, {
        t: 'cmd',
        m: '  availability   → Disponibilité'
      }, {
        t: 'cmd',
        m: '  ./hire_antoine.sh → La commande importante'
      }, {
        t: 'dim',
        m: '  clear          → Vider le terminal'
      }, {
        t: 'dim',
        m: '  secret         → 👀'
      }]
    },
    whoami: {
      output: [{
        t: 'sys',
        m: 'Antoine de Maintenant'
      }, {
        t: 'info',
        m: 'Rôle    : Spécialiste IA & BI Lead @ NAOS Bioderma NORAM'
      }, {
        t: 'info',
        m: 'Base    : Montréal, Canada'
      }, {
        t: 'info',
        m: 'Focus   : Transformer le chaos manuel en systèmes autonomes'
      }, {
        t: 'info',
        m: 'Stack   : n8n · Python · Power BI · LLMs'
      }, {
        t: 'info',
        m: 'Construit : Dept analytics de zéro en 6 mois'
      }, {
        t: 'acc2',
        m: 'Statut  : DISPONIBLE · 2026'
      }]
    },
    skills: {
      output: [{
        t: 'sys',
        m: 'Compétences techniques :'
      }, {
        t: 'info',
        m: '████████████████████ Power BI        95%'
      }, {
        t: 'info',
        m: '██████████████████░░ IA Agentique    90%'
      }, {
        t: 'info',
        m: '█████████████████░░░ Revenue Ops     85%'
      }, {
        t: 'info',
        m: '████████████████░░░░ Prévision       80%'
      }, {
        t: 'info',
        m: '████████████████░░░░ Python          80%'
      }, {
        t: 'info',
        m: '████████████████░░░░ Data Eng.       78%'
      }]
    },
    experience: {
      output: [{
        t: 'sys',
        m: 'Parcours :'
      }, {
        t: 'info',
        m: '2025→now  Spécialiste IA & BI Lead · NAOS NORAM · Montréal'
      }, {
        t: 'info',
        m: '2024–2025 Business Analyst VIE · NAOS USA'
      }, {
        t: 'info',
        m: '2023–2024 Business Developer · Reech SaaS · Paris'
      }, {
        t: 'info',
        m: '2022      Data Analyst Mémoire · NOOS RSE · Madrid'
      }]
    },
    projects: {
      output: [{
        t: 'sys',
        m: 'Projets signature (NDA) :'
      }, {
        t: 'info',
        m: '🔍 Moteur concurrentiel — 40 marques · 1 300 SKUs · daily'
      }, {
        t: 'info',
        m: '⚙️  Auto master ventes  — multi-reps · zéro touche'
      }, {
        t: 'info',
        m: '📦 Prévision stock     — 13sem · MAPE 4,2%'
      }, {
        t: 'info',
        m: '💬 Pipeline NLP avis   — 10k+/mois · rapport auto'
      }]
    },
    contact: {
      output: [{
        t: 'sys',
        m: 'Comment me joindre :'
      }, {
        t: 'info',
        m: '📧 antoinedemaintenant@alumni.ie.edu'
      }, {
        t: 'info',
        m: '🔗 linkedin.com/in/antoine2maintenant'
      }, {
        t: 'info',
        m: '📍 Montréal, Canada · France'
      }, {
        t: 'info',
        m: '📱 +1 (263) 385-6506'
      }]
    },
    availability: {
      output: [{
        t: 'sys',
        m: 'Disponibilité actuelle :'
      }, {
        t: 'acc3',
        m: '✅ STATUT : DISPONIBLE · 2026'
      }, {
        t: 'info',
        m: 'Recherche : Leadership data/IA, architecture automation'
      }, {
        t: 'info',
        m: 'Lieux : France · Dubai · Canada · Singapour · Europe · Remote'
      }, {
        t: 'info',
        m: 'Préférence : France, Dubai, Canada, Singapour — ouvert partout'
      }]
    },
    secret: {
      output: [{
        t: 'acc4',
        m: '👾 SECRET DÉBLOQUÉ'
      }, {
        t: 'info',
        m: 'La sphère Three.js a 1 800 particules.'
      }, {
        t: 'info',
        m: 'Ce portfolio a 5 easter eggs cachés.'
      }, {
        t: 'info',
        m: 'Vous en avez trouvé 1. Essayez le code Konami. ↑↑↓↓←→←→BA'
      }, {
        t: 'acc2',
        m: 'Indice : essayez aussi ./hack.sh'
      }]
    },
    './hack.sh': {
      output: [{
        t: 'sys',
        m: '> Prise de contrôle hostile de votre data stack...'
      }, {
        t: 'info',
        m: '[██████████░░░░░░░░░░] 52%'
      }, {
        t: 'acc2',
        m: '> Détecté : 14 rapports Excel manuels'
      }, {
        t: 'acc2',
        m: '> Détecté : 3 pipelines cassés'
      }, {
        t: 'acc2',
        m: '> Détecté : 0 workflows automatisés'
      }, {
        t: 'err',
        m: '> CRITIQUE : Business tournant sur des vibes et des TCD'
      }, {
        t: 'acc4',
        m: '> SOLUTION TROUVÉE : recrutez Antoine.'
      }, {
        t: 'acc3',
        m: '✅ Automatisation planifiée. ETA : 2 semaines.'
      }]
    },
    './hire_antoine.sh': {
      output: [{
        t: 'sys',
        m: 'Exécution séquence de recrutement...'
      }, {
        t: 'info',
        m: '[============================] 100%'
      }, {
        t: 'acc3',
        m: '✅ Excellente décision. ROI en approche.'
      }, {
        t: 'info',
        m: 'Prochaine étape : antoinedemaintenant@alumni.ie.edu'
      }, {
        t: 'acc2',
        m: '>> Première automation : 2 semaines'
      }, {
        t: 'acc2',
        m: '>> Premier dashboard : 3 semaines'
      }, {
        t: 'acc2',
        m: '>> ROI breakeven : ~6 mois'
      }]
    }
  }
};

/* ─── ANIMATED METRIC ───────────────────────────────────────────────────────── */
function AnimatedMetric({
  n,
  s,
  l,
  delay = 0
}) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started) setStarted(true);
    }, {
      threshold: .5
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const target = parseInt(n, 10);
    const dur = 2000;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(e * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    setTimeout(() => requestAnimationFrame(tick), delay);
  }, [started, n, delay]);
  return /*#__PURE__*/React.createElement("div", {
    className: "metric",
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    className: "metric-num"
  }, val, s), /*#__PURE__*/React.createElement("span", {
    className: "metric-lbl"
  }, l));
}

/* ─── LIVE COUNTER ──────────────────────────────────────────────────────────── */
function LiveCounter({
  lang
}) {
  const t = T[lang];
  const start = useRef(Date.now());
  const [val, setVal] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      const hrs = (Date.now() - start.current) / 3600000;
      setVal((hrs * 85 * 40).toFixed(1));
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "live-counter reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lc-label"
  }, t.liveCounter)), /*#__PURE__*/React.createElement("div", {
    className: "lc-val"
  }, val));
}

/* ─── DASHBOARD ─────────────────────────────────────────────────────────────── */
/* ─ SALES POINTS DATA ─ */
const SALES_PTS = [{
  city: 'Paris',
  x: 215,
  y: 115,
  sales: 142,
  trend: '+12%',
  weather: '☁️',
  temp: '14°C'
}, {
  city: 'Lyon',
  x: 268,
  y: 230,
  sales: 89,
  trend: '+8%',
  weather: '⛅',
  temp: '17°C'
}, {
  city: 'Marseille',
  x: 266,
  y: 308,
  sales: 76,
  trend: '+15%',
  weather: '☀️',
  temp: '21°C'
}, {
  city: 'Bordeaux',
  x: 148,
  y: 255,
  sales: 54,
  trend: '-8%',
  weather: '🌧️',
  temp: '16°C',
  warn: true
}, {
  city: 'Lille',
  x: 208,
  y: 56,
  sales: 48,
  trend: '+6%',
  weather: '🌧️',
  temp: '11°C'
}, {
  city: 'Strasbourg',
  x: 335,
  y: 125,
  sales: 38,
  trend: '+18%',
  weather: '☁️',
  temp: '13°C'
}, {
  city: 'Nantes',
  x: 113,
  y: 186,
  sales: 31,
  trend: '+10%',
  weather: '⛅',
  temp: '15°C'
}];
const STOCK_RISK = [{
  name: 'Produit A',
  units: 320,
  weeks: 1.4,
  color: '#FF2D78',
  status: 'CRITIQUE',
  action: 'Commander maintenant',
  lead: 'Lead: 3 sem.',
  data: [480, 430, 390, 360, 320, 270, 200, 110]
}, {
  name: 'Produit B',
  units: 850,
  weeks: 3.2,
  color: '#FFB800',
  status: 'VIGILANCE',
  action: 'Préparer commande',
  lead: 'Lead: 2 sem.',
  data: [900, 870, 850, 820, 780, 720, 650, 560]
}, {
  name: 'Produit C',
  units: 2100,
  weeks: 7.8,
  color: '#00F0A8',
  status: 'OK',
  action: 'Stock suffisant',
  lead: 'Lead: 4 sem.',
  data: [2100, 2050, 2000, 1940, 1870, 1790, 1700, 1600]
}];
const DASH_ALERTS = [{
  type: 'warn',
  msg: 'Ventes Bordeaux sous objectif (−8%)',
  icon: '⚠️',
  color: '#FFB800'
}, {
  type: 'ok',
  msg: 'Objectif Q4 atteint à 112% — rapport prêt',
  icon: '✅',
  color: '#00F0A8'
}, {
  type: 'info',
  msg: 'Prospect détecté : CMO TechCorp Paris',
  icon: '💡',
  color: '#415a77'
}];
const DASH_NEWS = [{
  tag: 'Marché',
  txt: 'Les PME françaises adoptent massivement l\'IA en 2025'
}, {
  tag: 'Finance',
  txt: 'Automatisation comptable : +40% productivité mesurée'
}, {
  tag: 'Tech',
  txt: 'Make.com déploie des agents autonomes EU'
}, {
  tag: 'Retail',
  txt: 'Shopify intègre des agents IA pour les stocks'
}];
function StockSparkline({
  data,
  color
}) {
  const max = Math.max(...data),
    min = Math.min(...data),
    W = 56,
    H = 30;
  const pts = data.map((v, i) => {
    const x = i / (data.length - 1) * W;
    const y = H - (v - min) / (max - min || 1) * (H - 4) - 2;
    return `${x},${y}`;
  }).join(' ');
  const area = `0,${H} ${pts} ${W},${H}`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    height: "32",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `sg${color.slice(1)}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: `url(#sg${color.slice(1)})`
  }), /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "1.8"
  }));
}
function FranceMap({
  lang
}) {
  const [hov, setHov] = useState(null);
  const maxS = Math.max(...SALES_PTS.map(p => p.sales));
  // Simplified but recognizable French regions as separate SVG paths
  const REGIONS = [{
    id: 'idf',
    name: 'Île-de-France',
    d: 'M195 148L210 143L222 150L220 165L208 170L196 163Z',
    cx: 208,
    cy: 157
  }, {
    id: 'nor',
    name: 'Normandie',
    d: 'M128 88L168 78L198 85L200 112L178 118L148 115L120 105Z',
    cx: 160,
    cy: 98
  }, {
    id: 'bre',
    name: 'Bretagne',
    d: 'M58 108L100 100L118 110L112 138L88 152L60 148L44 128Z',
    cx: 82,
    cy: 128
  }, {
    id: 'pdl',
    name: 'Pays de la Loire',
    d: 'M100 148L140 140L165 152L162 178L138 188L108 182L90 168Z',
    cx: 128,
    cy: 165
  }, {
    id: 'cen',
    name: 'Centre-Val de Loire',
    d: 'M158 148L195 142L216 158L212 185L188 195L160 188L148 172Z',
    cx: 182,
    cy: 170
  }, {
    id: 'bou',
    name: 'Bourgogne',
    d: 'M218 158L252 152L268 168L262 198L240 208L218 200L208 182Z',
    cx: 238,
    cy: 180
  }, {
    id: 'hdf',
    name: 'Hauts-de-France',
    d: 'M178 55L212 48L238 58L240 80L218 88L192 88L172 76Z',
    cx: 206,
    cy: 70
  }, {
    id: 'ges',
    name: 'Grand Est',
    d: 'M228 75L268 65L295 78L300 108L278 122L248 118L225 100Z',
    cx: 262,
    cy: 95
  }, {
    id: 'ara',
    name: 'Auvergne-Rhône-Alpes',
    d: 'M222 198L262 190L292 205L295 245L268 262L235 255L215 235Z',
    cx: 255,
    cy: 228
  }, {
    id: 'occ',
    name: 'Occitanie',
    d: 'M158 248L200 238L242 248L248 285L218 305L180 302L152 278Z',
    cx: 200,
    cy: 272
  }, {
    id: 'naq',
    name: 'Nouvelle-Aquitaine',
    d: 'M100 198L152 188L178 205L175 252L148 272L108 265L82 238Z',
    cx: 130,
    cy: 230
  }, {
    id: 'pca',
    name: "Provence-Alpes-Côte d'Azur",
    d: 'M262 240L298 232L320 252L315 280L288 292L260 278Z',
    cx: 292,
    cy: 262
  }, {
    id: 'cor',
    name: 'Corse',
    d: 'M298 288L310 280L322 295L318 318L305 322L294 308Z',
    cx: 308,
    cy: 302
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "40 40 295 295",
    style: {
      display: 'block',
      flexShrink: 0,
      width: '55%',
      minHeight: 180
    },
    height: "100%"
  }, REGIONS.map(r => {
    const pt = SALES_PTS.find(p => p.city && r.name && (r.id === 'idf' && p.city === 'Paris' || r.id === 'ara' && p.city === 'Lyon' || r.id === 'pca' && p.city === 'Marseille' || r.id === 'naq' && p.city === 'Bordeaux' || r.id === 'hdf' && p.city === 'Lille'));
    const active = pt && hov === pt.city;
    const hasData = !!pt;
    return /*#__PURE__*/React.createElement("g", {
      key: r.id,
      style: {
        cursor: hasData ? 'pointer' : 'default'
      },
      onMouseEnter: () => pt && setHov(pt.city),
      onMouseLeave: () => setHov(null)
    }, /*#__PURE__*/React.createElement("path", {
      d: r.d,
      fill: active ? 'rgba(191,58,255,0.35)' : hasData ? 'rgba(191,58,255,0.18)' : 'rgba(191,58,255,0.06)',
      stroke: "rgba(191,58,255,0.4)",
      strokeWidth: "1.2"
    }), hasData && /*#__PURE__*/React.createElement("circle", {
      cx: r.cx,
      cy: r.cy,
      r: 4 + pt.sales / maxS * 6,
      fill: pt.warn ? '#FFB800' : '#415a77',
      opacity: 0.9
    }), active && pt && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: r.cx - 55,
      y: r.cy - 58,
      width: 110,
      height: 52,
      rx: 6,
      fill: "rgba(10,6,28,0.97)",
      stroke: "#BF3AFF",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: r.cx,
      y: r.cy - 42,
      textAnchor: "middle",
      fill: "#fff",
      fontSize: 10,
      fontWeight: "700"
    }, pt.city), /*#__PURE__*/React.createElement("text", {
      x: r.cx,
      y: r.cy - 28,
      textAnchor: "middle",
      fill: "#BF3AFF",
      fontSize: 8
    }, pt.sales, " ventes \xB7 ", pt.trend), /*#__PURE__*/React.createElement("text", {
      x: r.cx,
      y: r.cy - 16,
      textAnchor: "middle",
      fill: "#7A6B9E",
      fontSize: 8
    }, pt.weather, " ", pt.temp)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      fontSize: 9,
      flex: 1,
      paddingTop: 4,
      overflowY: 'auto',
      maxHeight: 220
    }
  }, SALES_PTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHov(p.city),
    onMouseLeave: () => setHov(null),
    style: {
      padding: '5px 8px',
      borderRadius: 5,
      border: `1px solid ${hov === p.city ? 'rgba(191,58,255,0.5)' : 'rgba(191,58,255,0.15)'}`,
      background: hov === p.city ? 'rgba(191,58,255,0.1)' : 'transparent',
      cursor: 'pointer',
      transition: 'all .2s',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text)',
      fontSize: 10
    }
  }, p.city), /*#__PURE__*/React.createElement("div", {
    style: {
      color: p.warn ? '#FFB800' : 'var(--accent3)',
      fontFamily: "'Space Mono',monospace",
      fontSize: 8
    }
  }, p.sales, " ventes \xB7 ", p.trend)))));
}
function Dashboard({
  lang
}) {
  const t = T[lang];
  const lRef = useRef(),
    bRef = useRef(),
    lC = useRef(),
    bC = useRef();
  const [alIdx, setAlIdx] = useState(0);
  const [sentAction, setSentAction] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const now = new Date();
  const timeStr = now.toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const [clock, setClock] = useState(timeStr);
  useEffect(() => {
    const iv = setInterval(() => setAlIdx(a => (a + 1) % DASH_ALERTS.length), 3800);
    const ck = setInterval(() => {
      const n = new Date();
      setClock(n.toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);
    return () => {
      clearInterval(iv);
      clearInterval(ck);
    };
  }, [lang]);
  useEffect(() => {
    if (!lRef.current || !bRef.current) return;
    const labels = lang === 'fr' ? ['Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'] : ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const gc = 'rgba(255,255,255,0.05)',
      tc = 'rgba(200,186,232,0.55)';
    lC.current = new Chart(lRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: lang === 'fr' ? 'Réel' : 'Actual',
          data: [180, 210, 195, 240, 225, 260, 290, 310, 340, null, null, null, null],
          borderColor: '#415a77',
          backgroundColor: 'rgba(191,58,255,0.08)',
          tension: .4,
          pointRadius: 2.5,
          pointBackgroundColor: '#415a77',
          fill: true,
          borderWidth: 2
        }, {
          label: lang === 'fr' ? 'Prévision IA' : 'AI Forecast',
          data: [null, null, null, null, null, null, null, null, 340, 380, 420, 400, 450],
          borderColor: '#00F0A8',
          backgroundColor: 'rgba(0,240,168,0.05)',
          tension: .4,
          pointRadius: 2.5,
          pointBackgroundColor: '#00F0A8',
          borderDash: [4, 3],
          fill: true,
          borderWidth: 1.5
        }, {
          label: 'N−1',
          data: [155, 178, 168, 205, 192, 228, 252, 270, 295, 310, 340, 325, 365],
          borderColor: 'rgba(122,107,158,0.35)',
          backgroundColor: 'transparent',
          tension: .4,
          pointRadius: 0,
          borderDash: [2, 2],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            labels: {
              color: tc,
              font: {
                family: 'Space Mono',
                size: 8
              },
              boxWidth: 8,
              padding: 16
            }
          },
          tooltip: {
            backgroundColor: 'rgba(10,6,18,0.9)',
            titleFont: {
              family: 'Space Mono',
              size: 10
            },
            bodyFont: {
              family: 'Space Mono',
              size: 9
            },
            padding: 10,
            borderColor: 'rgba(191,58,255,0.3)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            ticks: {
              color: tc,
              font: {
                family: 'Space Mono',
                size: 8
              }
            },
            grid: {
              color: gc
            }
          },
          y: {
            ticks: {
              color: tc,
              font: {
                family: 'Space Mono',
                size: 8
              },
              callback: v => `€${v}K`
            },
            grid: {
              color: gc
            }
          }
        }
      }
    });
    bC.current = new Chart(bRef.current, {
      type: 'bar',
      data: {
        labels: ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille'],
        datasets: [{
          label: '2024',
          data: [142, 89, 76, 54, 48],
          backgroundColor: 'rgba(191,58,255,.65)',
          borderRadius: 3
        }, {
          label: '2023',
          data: [120, 72, 65, 60, 42],
          backgroundColor: 'rgba(191,58,255,.2)',
          borderRadius: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: tc,
              font: {
                family: 'Space Mono',
                size: 8
              },
              boxWidth: 8
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: tc,
              font: {
                family: 'Space Mono',
                size: 8
              }
            },
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
              color: tc,
              font: {
                family: 'Space Mono',
                size: 8
              },
              callback: v => `${v}K`
            },
            grid: {
              color: gc
            }
          }
        }
      }
    });
    return () => {
      lC.current?.destroy();
      bC.current?.destroy();
    };
  }, [lang]);
  const [analysts, setAnalysts] = useState(3);
  const [hoursWasted, setHoursWasted] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(55);
  const al = DASH_ALERTS[alIdx];
  const tabs = lang === 'fr' ? [{
    id: 'overview',
    label: 'Vue globale'
  }, {
    id: 'sales',
    label: 'Ventes'
  }, {
    id: 'supply',
    label: 'Supply'
  }, {
    id: 'ai',
    label: 'IA · Prévisions'
  }, {
    id: 'hiring',
    label: '⚠️ Coût inaction'
  }] : [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'sales',
    label: 'Sales'
  }, {
    id: 'supply',
    label: 'Supply'
  }, {
    id: 'ai',
    label: 'AI · Forecast'
  }, {
    id: 'hiring',
    label: '⚠️ Cost of Inaction'
  }];

  /* ── Shared card style ── */
  const card = {
    backdropFilter: 'var(--glass-blur)',
    WebkitBackdropFilter: 'var(--glass-blur)',
    background: 'var(--glass-bg)',
    border: '1px solid var(--glass-border)',
    borderRadius: 12,
    padding: '16px 20px',
    boxShadow: 'var(--glass-shadow)'
  };
  const label8 = {
    fontFamily: "'Space Mono',monospace",
    fontSize: 8,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--text-mute)'
  };
  const bigNum = {
    fontFamily: "'Bebas Neue',sans-serif",
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: 'var(--glass-shadow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      borderBottom: '1px solid var(--glass-border)',
      padding: '10px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexShrink: 0
    }
  }, ['#FF5F57', '#FFBD2E', '#28C840'].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c,
      opacity: .9
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      ...label8,
      color: '#415a77',
      letterSpacing: '3px',
      fontSize: 9
    }
  }, "ADM \xB7 BI \xB7 PLATFORM"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--glass-border)',
      backdropFilter: 'blur(8px)',
      border: '1px solid var(--glass-border)',
      borderRadius: 8,
      padding: '4px 12px',
      fontFamily: "'Space Mono',monospace",
      fontSize: 8,
      color: 'var(--text-mute)'
    }
  }, "analytics.adm.pro/dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent3)',
      boxShadow: '0 0 6px var(--accent3)',
      animation: 'blink 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...label8,
      color: 'var(--accent3)',
      fontSize: 8
    }
  }, lang === 'fr' ? 'EN DIRECT' : 'LIVE')), /*#__PURE__*/React.createElement("span", {
    style: {
      ...label8,
      color: 'var(--text-dim)',
      fontSize: 9
    }
  }, clock))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--glass-bg)',
      borderBottom: '1px solid var(--glass-border)',
      display: 'flex',
      alignItems: 'stretch',
      padding: '0 18px',
      gap: 0,
      overflowX: 'auto'
    }
  }, tabs.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: () => setActiveTab(tab.id),
    style: {
      padding: '10px 16px',
      background: 'transparent',
      border: 'none',
      borderBottom: `2px solid ${activeTab === tab.id ? 'var(--accent1)' : 'transparent'}`,
      color: activeTab === tab.id ? 'var(--accent1)' : 'var(--text-mute)',
      fontFamily: "'Space Mono',monospace",
      fontSize: 8,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'all .2s',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, tab.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 0 0 16px',
      borderLeft: '1px solid var(--glass-border)',
      margin: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, al.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: 7.5,
      color: 'var(--text-sec)',
      maxWidth: 220,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, al.msg), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSentAction(al.msg),
    style: {
      padding: '3px 10px',
      borderRadius: 6,
      border: '1px solid var(--glass-border)',
      background: sentAction === al.msg ? 'rgba(48,209,88,.12)' : 'var(--glass-bg)',
      color: sentAction === al.msg ? 'var(--accent3)' : 'var(--text-dim)',
      fontSize: 7,
      cursor: 'pointer',
      fontFamily: "'Space Mono',monospace",
      letterSpacing: '1px',
      whiteSpace: 'nowrap',
      transition: 'all .2s',
      flexShrink: 0,
      backdropFilter: 'blur(8px)'
    }
  }, sentAction === al.msg ? '✓ OK' : 'ACT →'))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 20px',
      background: 'var(--glass-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 8,
      marginBottom: 14
    }
  }, t.dashKpis.map(([v, l, d], i) => {
    const colors = ['var(--accent1)', 'var(--accent3)', 'var(--accent2)', 'var(--accent4)', 'var(--accent3)', 'var(--accent1)'];
    const col = colors[i % colors.length];
    const isUp = d.startsWith('↑') || d.startsWith('+');
    const isDown = d.startsWith('↓') || d.startsWith('-');
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        ...card,
        padding: '12px 14px',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 3,
        bottom: 0,
        background: col,
        borderRadius: '4px 0 0 4px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        marginBottom: 6,
        lineHeight: 1.5
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        ...bigNum,
        fontSize: '1.8rem',
        color: col
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: 8,
        marginTop: 5,
        color: isUp ? 'var(--accent3)' : isDown ? 'var(--accent2)' : 'var(--accent4)'
      }
    }, d)));
  })), activeTab === 'overview' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label8,
      color: '#415a77'
    }
  }, t.dashChart1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, [['var(--accent1)', lang === 'fr' ? 'Réel' : 'Actual'], ['#00F0A8', 'IA'], ['rgba(122,107,158,.55)', 'N−1']].map(([c, lbl], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 2,
      background: c,
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...label8,
      fontSize: 7
    }
  }, lbl))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: lRef
  }))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 12
    }
  }, t.dashChart2), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: bRef
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 8
    }
  }, lang === 'fr' ? 'CARTE VENTES · FRANCE' : 'SALES MAP · FRANCE'), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 190,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(FranceMap, {
    lang: lang
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 10
    }
  }, lang === 'fr' ? 'MARCHÉ · PULSE' : 'MARKET · PULSE'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      flex: 1
    }
  }, DASH_NEWS.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      padding: '8px 0',
      borderBottom: i < DASH_NEWS.length - 1 ? '1px solid var(--border-dim)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: 7,
      fontWeight: 700,
      padding: '3px 7px',
      borderRadius: 3,
      background: 'rgba(191,58,255,.1)',
      color: '#415a77',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      letterSpacing: .5
    }
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-sec)',
      lineHeight: 1.55
    }
  }, n.txt)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSentAction('news'),
    style: {
      marginTop: 12,
      width: '100%',
      padding: '8px',
      background: sentAction === 'news' ? 'rgba(0,240,168,.1)' : 'rgba(255,255,255,.03)',
      border: '1px solid',
      borderColor: sentAction === 'news' ? 'rgba(0,240,168,.3)' : 'var(--border-dim)',
      borderRadius: 5,
      color: sentAction === 'news' ? '#00F0A8' : 'var(--text-dim)',
      fontSize: 8,
      cursor: 'pointer',
      fontFamily: "'Space Mono',monospace",
      letterSpacing: '1px',
      transition: 'all .2s'
    }
  }, sentAction === 'news' ? '✓ Envoyé' : '📤 ' + (lang === 'fr' ? 'ENVOYER AUX ÉQUIPES' : 'SEND TO TEAMS'))))), activeTab === 'sales' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, [{
    label: lang === 'fr' ? 'CA YTD' : 'Revenue YTD',
    v: '€2.4M',
    delta: '+18%',
    color: '#415a77'
  }, {
    label: lang === 'fr' ? 'Deals closés' : 'Deals closed',
    v: '47',
    delta: lang === 'fr' ? '+12 ce mois' : '+12 this month',
    color: 'var(--accent3)'
  }, {
    label: lang === 'fr' ? 'Taux conversion' : 'Win rate',
    v: '34%',
    delta: '+8pts vs N-1',
    color: 'var(--accent2)'
  }].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...card
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      marginBottom: 8
    }
  }, k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bigNum,
      fontSize: '2.6rem',
      color: k.color
    }
  }, k.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: 8,
      color: '#00F0A8',
      marginTop: 6
    }
  }, k.delta)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 14
    }
  }, lang === 'fr' ? 'PIPELINE PAR STAGE' : 'PIPELINE BY STAGE'), [{
    stage: 'Qualification',
    v: 24,
    pct: 100,
    color: 'rgba(122,107,158,.7)'
  }, {
    stage: lang === 'fr' ? 'Démo envoyée' : 'Demo sent',
    v: 18,
    pct: 75,
    color: '#415a77'
  }, {
    stage: lang === 'fr' ? 'Proposition' : 'Proposal',
    v: 11,
    pct: 46,
    color: 'var(--accent2)'
  }, {
    stage: 'Négociation',
    v: 6,
    pct: 25,
    color: 'var(--accent4)'
  }, {
    stage: lang === 'fr' ? 'Gagné' : 'Won',
    v: 4,
    pct: 17,
    color: 'var(--accent3)'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-sec)'
    }
  }, s.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: 9,
      color: s.color,
      fontWeight: 700
    }
  }, s.v)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'rgba(255,255,255,.06)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${s.pct}%`,
      background: s.color,
      borderRadius: 2,
      transition: 'width .8s ease'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 12
    }
  }, lang === 'fr' ? 'ALERTES PROSPECTS' : 'PROSPECT ALERTS'), [{
    ico: '🔥',
    txt: lang === 'fr' ? 'TotalEnergies — pas de réponse 8j' : 'TotalEnergies — 8d no response'
  }, {
    ico: '⚡',
    txt: lang === 'fr' ? 'Dior — demo planifiée demain 14h' : 'Dior — demo scheduled tomorrow 2pm'
  }, {
    ico: '✅',
    txt: lang === 'fr' ? 'LVMH — bon de commande reçu' : 'LVMH — PO received'
  }, {
    ico: '📩',
    txt: lang === 'fr' ? '3 nouveaux leads inbound' : '3 new inbound leads today'
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '9px 0',
      borderBottom: i < 3 ? '1px solid var(--border-dim)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      flexShrink: 0
    }
  }, a.ico), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-sec)',
      lineHeight: 1.55
    }
  }, a.txt)))))), activeTab === 'supply' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, [{
    label: lang === 'fr' ? 'Taux de service' : 'Service level',
    v: '98.2%',
    delta: '+1.4pts',
    color: 'var(--accent3)'
  }, {
    label: lang === 'fr' ? 'Ruptures actives' : 'Active stockouts',
    v: '3',
    delta: lang === 'fr' ? '−5 vs sem. préc.' : '−5 vs prev. week',
    color: 'var(--accent4)'
  }, {
    label: lang === 'fr' ? 'Délai fournisseur' : 'Supplier lead',
    v: '12j',
    delta: lang === 'fr' ? 'Optimisé −3j' : 'Optimised −3d',
    color: '#415a77'
  }].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      marginBottom: 8
    }
  }, k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bigNum,
      fontSize: '2.6rem',
      color: k.color
    }
  }, k.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: 8,
      color: 'var(--accent3)',
      marginTop: 6
    }
  }, k.delta)))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 14
    }
  }, lang === 'fr' ? 'RISQUES RUPTURE · PRÉVISION IA 8 SEMAINES' : 'STOCKOUT RISK · AI FORECAST 8 WEEKS'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, STOCK_RISK.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--glass-bg)',
      border: `1px solid ${s.color}33`,
      borderRadius: 8,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text)'
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 7.5,
      fontWeight: 700,
      padding: '2px 8px',
      borderRadius: 3,
      background: `${s.color}20`,
      color: s.color,
      fontFamily: "'Space Mono',monospace"
    }
  }, s.status)), /*#__PURE__*/React.createElement(StockSparkline, {
    data: s.data,
    color: s.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: s.color,
      fontFamily: "'Bebas Neue',sans-serif"
    }
  }, s.weeks, lang === 'fr' ? ' sem.' : ' wks'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: s.color,
      fontFamily: "'Space Mono',monospace"
    }
  }, s.action))))))), activeTab === 'ai' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 14
    }
  }, lang === 'fr' ? 'MODÈLE PRÉVISION VENTES · IA' : 'SALES FORECAST MODEL · AI'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 14
    }
  }, [{
    label: lang === 'fr' ? 'Précision' : 'Accuracy',
    v: '95.8%',
    color: 'var(--accent3)'
  }, {
    label: 'MAPE',
    v: '4.2%',
    color: 'var(--accent4)'
  }, {
    label: lang === 'fr' ? 'Prévision M+1' : 'M+1 forecast',
    v: '€420K',
    color: '#415a77'
  }, {
    label: lang === 'fr' ? 'Dernière MAJ' : 'Last update',
    v: '06:00',
    color: 'var(--accent3)'
  }].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--glass-bg)',
      borderRadius: 7,
      padding: '10px 14px',
      border: '1px solid var(--border-dim)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      fontSize: 7,
      marginBottom: 5
    }
  }, k.label), /*#__PURE__*/React.createElement("div", {
    style: {
      ...bigNum,
      fontSize: '1.7rem',
      color: k.color
    }
  }, k.v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: lRef
  }))), /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label8,
      color: '#415a77',
      marginBottom: 14
    }
  }, lang === 'fr' ? 'AUTOMATISATIONS ACTIVES' : 'ACTIVE AUTOMATIONS'), [{
    icon: '📊',
    name: lang === 'fr' ? 'Reporting hebdo auto' : 'Weekly auto-report',
    status: lang === 'fr' ? 'Lundi 06:00 · 0 intervention' : 'Mon 06:00 · 0 intervention'
  }, {
    icon: '🤖',
    name: lang === 'fr' ? 'Prévision IA quotidienne' : 'Daily AI forecast',
    status: '02:00 · Python + Power BI'
  }, {
    icon: '📩',
    name: lang === 'fr' ? 'Alertes stock critique' : 'Critical stock alerts',
    status: lang === 'fr' ? 'Temps réel · Slack + Email' : 'Real-time · Slack + Email'
  }, {
    icon: '🔍',
    name: lang === 'fr' ? 'Veille concurrentielle' : 'Competitive intel',
    status: lang === 'fr' ? '40 concurrents · 1300 SKUs' : '40 competitors · 1300 SKUs'
  }, {
    icon: '📈',
    name: lang === 'fr' ? 'Scoring leads inbound' : 'Inbound lead scoring',
    status: lang === 'fr' ? 'Pipeline auto · CRM sync' : 'Auto pipeline · CRM sync'
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 0',
      borderBottom: i < 4 ? '1px solid var(--border-dim)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      flexShrink: 0
    }
  }, a.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--text)',
      marginBottom: 2
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: 7.5,
      color: 'var(--text-mute)'
    }
  }, a.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#00F0A8',
      boxShadow: '0 0 6px #00F0A8',
      flexShrink: 0
    }
  }))))), activeTab === 'hiring' && (() => {
    const weekCost = analysts * hoursWasted * hourlyRate;
    const yearCost = weekCost * 52;
    const savedYear = Math.round(yearCost * 0.85);
    const roiPct = Math.round((savedYear / 80000 - 1) * 100);
    const pctA = (analysts - 1) / 19 * 100 + '%';
    const pctH = (hoursWasted - 2) / 38 * 100 + '%';
    const pctR = (hourlyRate - 20) / 180 * 100 + '%';
    const sliders = [{
      lbl: lang === 'fr' ? 'PERSONNES EN REPORTING MANUEL' : 'PEOPLE IN MANUAL REPORTING',
      v: analysts,
      set: setAnalysts,
      min: 1,
      max: 20,
      unit: lang === 'fr' ? 'pers.' : 'people',
      pct: pctA
    }, {
      lbl: lang === 'fr' ? 'HEURES / SEMAINE PERDUES' : 'HOURS / WEEK WASTED',
      v: hoursWasted,
      set: setHoursWasted,
      min: 2,
      max: 40,
      unit: 'h',
      pct: pctH
    }, {
      lbl: lang === 'fr' ? 'TAUX HORAIRE MOYEN' : 'AVG HOURLY RATE',
      v: hourlyRate,
      set: setHourlyRate,
      min: 20,
      max: 200,
      unit: '€/h',
      pct: pctR
    }];
    const gCard = {
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 14,
      boxShadow: 'var(--glass-shadow)'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...gCard,
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        borderLeft: '3px solid var(--danger)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        flexShrink: 0
      }
    }, "\u23F3"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        color: 'var(--danger)',
        marginBottom: 3,
        fontSize: 7.5,
        letterSpacing: '2px'
      }
    }, lang === 'fr' ? 'CALCULATEUR · COÛT DU STATU QUO' : 'CALCULATOR · COST OF DOING NOTHING'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--text-sec)',
        lineHeight: 1.6
      }
    }, lang === 'fr' ? 'Chaque heure de reporting manuel est de l\'argent brûlé. Ajustez les curseurs — le compteur tourne en direct.' : 'Every hour of manual reporting is money burned. Adjust the sliders — the meter runs live.'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, sliders.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        ...gCard,
        padding: '14px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...label8,
        fontSize: 7,
        color: 'var(--text-mute)'
      }
    }, s.lbl), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '1.7rem',
        color: 'var(--danger)',
        lineHeight: 1
      }
    }, s.v, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.58rem',
        fontFamily: "'Space Mono',monospace",
        color: 'var(--text-mute)',
        marginLeft: 3
      }
    }, s.unit))), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: s.min,
      max: s.max,
      value: s.v,
      onChange: e => s.set(+e.target.value),
      style: {
        width: '100%',
        height: 4,
        borderRadius: 3,
        appearance: 'none',
        WebkitAppearance: 'none',
        cursor: 'pointer',
        outline: 'none',
        background: `linear-gradient(90deg,var(--danger) ${s.pct},rgba(217,91,91,.18) ${s.pct})`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "'Space Mono',monospace",
        fontSize: 6.5,
        color: 'var(--text-mute)',
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement("span", null, s.min, s.unit === '€/h' ? '€/h' : ''), /*#__PURE__*/React.createElement("span", null, s.max, s.unit === '€/h' ? '€/h' : ''))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...gCard,
        padding: '14px 16px',
        borderLeft: '3px solid var(--accent4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        fontSize: 7,
        marginBottom: 7,
        color: 'var(--text-mute)'
      }
    }, lang === 'fr' ? 'COÛT HEBDOMADAIRE' : 'WEEKLY BURN'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '2.2rem',
        color: 'var(--accent4)',
        lineHeight: 1
      }
    }, "\u20AC", Math.round(weekCost).toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        fontSize: 6.5,
        color: 'var(--text-mute)',
        marginTop: 5
      }
    }, lang === 'fr' ? `${analysts} × ${hoursWasted}h × ${hourlyRate}€` : `${analysts} × ${hoursWasted}h × €${hourlyRate}`)), /*#__PURE__*/React.createElement("div", {
      style: {
        ...gCard,
        padding: '18px 16px',
        textAlign: 'center',
        background: 'rgba(217,91,91,.1)',
        border: '1px solid rgba(217,91,91,.28)',
        borderTop: '2px solid rgba(217,91,91,.5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        color: 'var(--danger)',
        marginBottom: 8,
        fontSize: 7.5,
        letterSpacing: '2px'
      }
    }, lang === 'fr' ? '🔥 ARGENT BRÛLÉ PAR AN' : '🔥 MONEY BURNED PER YEAR'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '3.2rem',
        color: 'var(--danger)',
        lineHeight: 1,
        letterSpacing: '1px'
      }
    }, "\u20AC", yearCost.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: 7,
        color: 'var(--text-mute)',
        marginTop: 7
      }
    }, Math.round(analysts * hoursWasted), " h/", lang === 'fr' ? 'sem' : 'week', " \xB7 ", lang === 'fr' ? '0 valeur produite' : '0 value produced')), /*#__PURE__*/React.createElement("div", {
      style: {
        ...gCard,
        padding: '14px 16px',
        background: 'rgba(92,184,122,.08)',
        border: '1px solid rgba(92,184,122,.25)',
        borderTop: '2px solid rgba(92,184,122,.45)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        color: 'var(--accent3)',
        marginBottom: 10,
        fontSize: 7,
        letterSpacing: '2px'
      }
    }, lang === 'fr' ? '✦ RÉCUPÉRÉ PAR AUTOMATISATION' : '✦ RECOVERED VIA AUTOMATION'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '2.2rem',
        color: 'var(--accent3)',
        lineHeight: 1
      }
    }, "\u20AC", savedYear.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        ...gCard,
        padding: '5px 12px',
        textAlign: 'center',
        background: 'rgba(94,141,238,.12)',
        border: '1px solid rgba(94,141,238,.25)',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '1.5rem',
        color: '#415a77',
        lineHeight: 1
      }
    }, roiPct, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        fontSize: 6,
        color: 'var(--text-mute)'
      }
    }, "ROI Y1"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 4,
        background: 'rgba(255,255,255,.08)',
        borderRadius: 3,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: '85%',
        background: `linear-gradient(90deg,var(--accent3),var(--accent1))`,
        borderRadius: 3
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: "'Space Mono',monospace",
        fontSize: 6,
        color: 'var(--text-mute)',
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement("span", null, "0%"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent3)'
      }
    }, "85% ", lang === 'fr' ? 'récupéré' : 'recovered'), /*#__PURE__*/React.createElement("span", null, "100%"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...gCard,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
        padding: '14px 18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 28,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        fontSize: 6.5,
        color: 'var(--text-mute)',
        marginBottom: 4
      }
    }, lang === 'fr' ? 'PAYBACK ESTIMÉ' : 'ESTIMATED PAYBACK'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '1.7rem',
        color: '#415a77',
        lineHeight: 1
      }
    }, lang === 'fr' ? '< 3 mois' : '< 3 months')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label8,
        fontSize: 6.5,
        color: 'var(--text-mute)',
        marginBottom: 4
      }
    }, lang === 'fr' ? 'ÉCONOMIE AN 3' : '3-YEAR SAVING'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '1.7rem',
        color: 'var(--accent3)',
        lineHeight: 1
      }
    }, "\u20AC", Math.round(savedYear * 3).toLocaleString()))), /*#__PURE__*/React.createElement("button", {
      onClick: () => window.location.href = 'mailto:antoinedemaintenant@alumni.ie.edu',
      style: {
        padding: '11px 22px',
        borderRadius: 10,
        border: 'none',
        background: 'linear-gradient(135deg,var(--accent1),var(--accent2))',
        color: '#fff',
        fontFamily: "'Space Mono',monospace",
        fontSize: 8,
        letterSpacing: '1.5px',
        cursor: 'pointer',
        transition: 'all .25s',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        boxShadow: '0 4px 16px rgba(94,141,238,.35)'
      }
    }, "\uD83D\uDCE9 ", lang === 'fr' ? 'Stopper l\'hémorragie →' : 'Stop the bleeding →')));
  })()));
}

/* ─── PIPELINE ──────────────────────────────────────────────────────────────── */
function Pipeline({
  lang
}) {
  const t = T[lang];
  const CATS = lang === 'fr' ? [{
    id: 'finance',
    icon: '💰',
    label: 'Finance & Clôture',
    color: '#00F0A8'
  }, {
    id: 'sales',
    icon: '📈',
    label: 'Ventes & CRM',
    color: '#415a77'
  }, {
    id: 'supply',
    icon: '📦',
    label: 'Supply Chain',
    color: '#FFB800'
  }, {
    id: 'linkedin',
    icon: '🤝',
    label: 'Prospection LinkedIn',
    color: '#0091FF'
  }, {
    id: 'reporting',
    icon: '📊',
    label: 'Reporting Auto',
    color: '#FF2D78'
  }] : [{
    id: 'finance',
    icon: '💰',
    label: 'Finance & Close',
    color: '#00F0A8'
  }, {
    id: 'sales',
    icon: '📈',
    label: 'Sales & CRM',
    color: '#415a77'
  }, {
    id: 'supply',
    icon: '📦',
    label: 'Supply Chain',
    color: '#FFB800'
  }, {
    id: 'linkedin',
    icon: '🤝',
    label: 'LinkedIn Prospecting',
    color: '#0091FF'
  }, {
    id: 'reporting',
    icon: '📊',
    label: 'Auto Reporting',
    color: '#FF2D78'
  }];
  const FLOWS = lang === 'fr' ? {
    finance: [{
      icon: '🗄️',
      label: 'SAP / ERP',
      detail: 'Export comptable auto',
      color: '#00F0A8'
    }, {
      icon: '🔄',
      label: 'ETL Python',
      detail: 'Transform · nettoyage',
      color: '#00F0A8'
    }, {
      icon: '📊',
      label: 'Tableaux / KPIs',
      detail: 'Builder Power BI · DAX',
      color: '#00F0A8'
    }, {
      icon: '🤖',
      label: 'LLM Commentaires',
      detail: 'GPT-4 · analyse IA',
      color: '#00F0A8'
    }, {
      icon: '📄',
      label: 'Bilan PDF',
      detail: 'Génération auto Word/PDF',
      color: '#00F0A8'
    }, {
      icon: '📬',
      label: 'Envoi automatique',
      detail: 'Équipes + DG · 0 action',
      color: '#00F0A8'
    }],
    sales: [{
      icon: '🛒',
      label: 'Shopify',
      detail: 'Ventes temps réel',
      color: '#415a77'
    }, {
      icon: '📊',
      label: 'Google Analytics',
      detail: 'Trafic · conversions',
      color: '#415a77'
    }, {
      icon: '🔍',
      label: 'SEMrush',
      detail: 'SEO · concurrents',
      color: '#415a77'
    }, {
      icon: '🔀',
      label: 'N8N / Make.com',
      detail: 'Orchestration auto',
      color: '#415a77'
    }, {
      icon: '📈',
      label: 'Power BI live',
      detail: 'Dashboard unifié',
      color: '#415a77'
    }, {
      icon: '📱',
      label: 'Alertes Slack',
      detail: 'Seuils · notif équipes',
      color: '#415a77'
    }],
    supply: [{
      icon: '🏭',
      label: 'ERP Stock',
      detail: 'Niveaux réels',
      color: '#FFB800'
    }, {
      icon: '🧮',
      label: 'Prévision IA',
      detail: 'Prophet / ML',
      color: '#FFB800'
    }, {
      icon: '📉',
      label: 'Détection',
      detail: 'Risques rupture',
      color: '#FFB800'
    }, {
      icon: '📧',
      label: 'PO auto',
      detail: 'Bon commande',
      color: '#FFB800'
    }, {
      icon: '✅',
      label: 'Validation',
      detail: 'Approbation DG',
      color: '#FFB800'
    }],
    linkedin: [{
      icon: '🎯',
      label: 'ICP Ciblage',
      detail: 'Critères ideal',
      color: '#0091FF'
    }, {
      icon: '🔍',
      label: 'Sales Nav',
      detail: 'Scraping auto',
      color: '#0091FF'
    }, {
      icon: '🤖',
      label: 'IA Rédac',
      detail: 'Message perso',
      color: '#0091FF'
    }, {
      icon: '📤',
      label: 'Séquence',
      detail: '3 touchpoints',
      color: '#0091FF'
    }, {
      icon: '📥',
      label: 'CRM Sync',
      detail: 'Réponses trackées',
      color: '#0091FF'
    }],
    reporting: [{
      icon: '📡',
      label: 'Sources',
      detail: 'API + Sheets',
      color: '#FF2D78'
    }, {
      icon: '🔄',
      label: 'ETL auto',
      detail: 'Refresh nuit',
      color: '#FF2D78'
    }, {
      icon: '📊',
      label: 'Power BI',
      detail: 'Calculs DAX',
      color: '#FF2D78'
    }, {
      icon: '🤖',
      label: 'Narration IA',
      detail: 'Insights texte',
      color: '#FF2D78'
    }, {
      icon: '📨',
      label: 'Distribution',
      detail: 'Mail hebdo auto',
      color: '#FF2D78'
    }]
  } : {
    finance: [{
      icon: '🗄️',
      label: 'SAP / ERP',
      detail: 'Auto accounting export',
      color: '#00F0A8'
    }, {
      icon: '🔄',
      label: 'ETL Python',
      detail: 'Transform · clean',
      color: '#00F0A8'
    }, {
      icon: '📊',
      label: 'Tables / KPIs',
      detail: 'Power BI builder · DAX',
      color: '#00F0A8'
    }, {
      icon: '🤖',
      label: 'LLM Commentary',
      detail: 'GPT-4 · AI analysis',
      color: '#00F0A8'
    }, {
      icon: '📄',
      label: 'Balance PDF',
      detail: 'Auto Word/PDF gen',
      color: '#00F0A8'
    }, {
      icon: '📬',
      label: 'Auto delivery',
      detail: 'Teams + CEO · 0 action',
      color: '#00F0A8'
    }],
    sales: [{
      icon: '🛒',
      label: 'Shopify',
      detail: 'Real-time sales',
      color: '#415a77'
    }, {
      icon: '📊',
      label: 'Google Analytics',
      detail: 'Traffic · conversions',
      color: '#415a77'
    }, {
      icon: '🔍',
      label: 'SEMrush',
      detail: 'SEO · competitors',
      color: '#415a77'
    }, {
      icon: '🔀',
      label: 'N8N / Make.com',
      detail: 'Auto orchestration',
      color: '#415a77'
    }, {
      icon: '📈',
      label: 'Power BI live',
      detail: 'Unified dashboard',
      color: '#415a77'
    }, {
      icon: '📱',
      label: 'Slack alerts',
      detail: 'Thresholds · team notifs',
      color: '#415a77'
    }],
    supply: [{
      icon: '🏭',
      label: 'ERP Stock',
      detail: 'Real levels',
      color: '#FFB800'
    }, {
      icon: '🧮',
      label: 'AI Forecast',
      detail: 'Prophet / ML',
      color: '#FFB800'
    }, {
      icon: '📉',
      label: 'Detection',
      detail: 'Stockout risk',
      color: '#FFB800'
    }, {
      icon: '📧',
      label: 'Auto PO',
      detail: 'Purchase order',
      color: '#FFB800'
    }, {
      icon: '✅',
      label: 'Validation',
      detail: 'CEO approval',
      color: '#FFB800'
    }],
    linkedin: [{
      icon: '🎯',
      label: 'ICP Targeting',
      detail: 'Ideal criteria',
      color: '#0091FF'
    }, {
      icon: '🔍',
      label: 'Sales Nav',
      detail: 'Auto scraping',
      color: '#0091FF'
    }, {
      icon: '🤖',
      label: 'AI Writing',
      detail: 'Personal msg',
      color: '#0091FF'
    }, {
      icon: '📤',
      label: 'Sequence',
      detail: '3 touchpoints',
      color: '#0091FF'
    }, {
      icon: '📥',
      label: 'CRM Sync',
      detail: 'Tracked replies',
      color: '#0091FF'
    }],
    reporting: [{
      icon: '📡',
      label: 'Sources',
      detail: 'API + Sheets',
      color: '#FF2D78'
    }, {
      icon: '🔄',
      label: 'Auto ETL',
      detail: 'Night refresh',
      color: '#FF2D78'
    }, {
      icon: '📊',
      label: 'Power BI',
      detail: 'DAX calcs',
      color: '#FF2D78'
    }, {
      icon: '🤖',
      label: 'AI Narrative',
      detail: 'Text insights',
      color: '#FF2D78'
    }, {
      icon: '📨',
      label: 'Distribution',
      detail: 'Weekly auto mail',
      color: '#FF2D78'
    }]
  };
  const DESCS = lang === 'fr' ? {
    finance: 'Récupération automatique des données comptables, analyse par IA, génération du document de clôture et envoi automatique aux équipes — sans aucune saisie manuelle.',
    sales: 'Surveillance des ventes en temps réel, alertes automatiques sur les écarts, dashboard Power BI live mis à jour chaque heure et diffusé aux commerciaux.',
    supply: 'Prévision des ruptures de stock 8 semaines à l\'avance, génération automatique des bons de commande et workflow d\'approbation digitalisé.',
    linkedin: 'Identification des prospects idéaux via Sales Navigator, personnalisation des messages par IA et séquence de relance automatisée avec suivi CRM.',
    reporting: 'Collecte multi-sources, transformation nocturne, rapport Power BI enrichi par narration IA et envoyé automatiquement chaque lundi matin.'
  } : {
    finance: 'Automatic retrieval of accounting data, AI-powered analysis, financial close document generation and auto-delivery to stakeholders — zero manual input.',
    sales: 'Real-time sales monitoring, automatic gap alerts, live Power BI dashboard updated every hour and pushed to the sales team.',
    supply: '8-week stockout forecasting with AI, automatic purchase order generation and digitized approval workflow.',
    linkedin: 'Ideal prospect identification via Sales Navigator, AI-personalized messages and automated follow-up sequence with CRM tracking.',
    reporting: 'Multi-source collection, overnight transformation, Power BI report enriched with AI narrative and automatically sent every Monday morning.'
  };
  const STATS = lang === 'fr' ? {
    finance: ['−40h/mois clôture', '−95% erreurs saisie', 'Livré en 6 min auto'],
    sales: ['Alertes < 5 min', 'Dashboard 100% live', '0 rapport manuel'],
    supply: ['Ruptures −80%', 'Lead time optimisé', 'PO en 1 clic'],
    linkedin: ['5× plus de réponses', '100 prospects/jour', 'Séquence 3 msgs'],
    reporting: ['Lundi 8h00 auto', '14 rapports/semaine', '0 copier-coller']
  } : {
    finance: ['−40h/month close', '−95% entry errors', 'Delivered in 6 min'],
    sales: ['Alerts < 5 min', '100% live dashboard', '0 manual report'],
    supply: ['Stockouts −80%', 'Lead time optimized', 'PO in 1 click'],
    linkedin: ['5× more replies', '100 prospects/day', '3-msg sequence'],
    reporting: ['Monday 8AM auto', '14 reports/week', '0 copy-paste']
  };
  const [active, setActive] = useState('finance');
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(-1);
  const [logs, setLogs] = useState([]);
  const logRef = useRef();
  const cat = CATS.find(c => c.id === active);
  const flow = FLOWS[active];
  const desc = DESCS[active];
  const stats = STATS[active];
  useEffect(() => {
    setDone(-1);
    setLogs([]);
    setRunning(false);
  }, [active, lang]);
  async function runFlow() {
    if (running) return;
    setRunning(true);
    setDone(-1);
    setLogs([]);
    for (let i = 0; i < flow.length; i++) {
      await new Promise(r => setTimeout(r, 750));
      setDone(i);
      setLogs(l => [...l, {
        step: flow[i].label,
        detail: flow[i].detail
      }]);
      if (logRef.current) setTimeout(() => {
        if (logRef.current) logRef.current.scrollTop = 9999;
      }, 50);
    }
    setRunning(false);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "pipeline-wrap reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setActive(c.id),
    style: {
      padding: '8px 14px',
      borderRadius: 8,
      border: `1.5px solid ${active === c.id ? c.color : 'var(--border-dim)'}`,
      background: active === c.id ? `rgba(${c.color === '#00F0A8' ? '0,240,168' : c.color === '#415a77' ? '191,58,255' : c.color === '#FFB800' ? '255,184,0' : c.color === '#0091FF' ? '0,145,255' : '255,45,120'},0.12)` : 'var(--bg)',
      color: active === c.id ? c.color : 'var(--text-dim)',
      fontSize: 11,
      fontFamily: "'Space Mono',monospace",
      fontWeight: 700,
      cursor: 'pointer',
      letterSpacing: '0.5px',
      transition: 'all .25s',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, c.icon), /*#__PURE__*/React.createElement("span", null, c.label)))), /*#__PURE__*/React.createElement("div", {
    className: "pipeline-stages",
    style: {
      marginBottom: 14
    }
  }, flow.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `p-node${running && i === done + 1 ? ' running' : ''}${i <= done ? ' done' : ''}`,
    style: i <= done ? {
      borderColor: cat.color,
      background: `rgba(${cat.color === '#00F0A8' ? '0,240,168' : cat.color === '#415a77' ? '191,58,255' : cat.color === '#FFB800' ? '255,184,0' : cat.color === '#0091FF' ? '0,145,255' : '255,45,120'},0.1)`
    } : {}
  }, i < done && /*#__PURE__*/React.createElement("span", {
    className: "p-node-tick",
    style: {
      background: cat.color
    }
  }, "\u2713"), i === done && running && /*#__PURE__*/React.createElement("span", {
    className: "p-node-tick",
    style: {
      background: cat.color
    }
  }, "\u27F3"), /*#__PURE__*/React.createElement("span", {
    className: "p-node-icon"
  }, s.icon), /*#__PURE__*/React.createElement("span", {
    className: "p-node-label"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "p-node-detail"
  }, s.detail)), i < flow.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "p-connector"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-connector-fill",
    style: {
      width: done >= i ? '100%' : '0%',
      background: cat.color,
      transition: 'width 0.4s'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--glass-bg)',
      border: '1px solid var(--border-dim)',
      borderRadius: 8,
      padding: '12px 16px',
      marginBottom: 12,
      fontSize: 12,
      color: 'var(--text-sec)',
      lineHeight: 1.7
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: `rgba(${cat.color === '#00F0A8' ? '0,240,168' : cat.color === '#415a77' ? '191,58,255' : cat.color === '#FFB800' ? '255,184,0' : cat.color === '#0091FF' ? '0,145,255' : '255,45,120'},0.08)`,
      border: `1px solid rgba(${cat.color === '#00F0A8' ? '0,240,168' : cat.color === '#415a77' ? '191,58,255' : cat.color === '#FFB800' ? '255,184,0' : cat.color === '#0091FF' ? '0,145,255' : '255,45,120'},0.25)`,
      borderRadius: 8,
      padding: '8px 12px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: cat.color,
      fontFamily: "'Space Mono',monospace"
    }
  }, s)))), logs.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pipeline-log",
    ref: logRef,
    style: {
      marginBottom: 12
    }
  }, logs.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "log-line"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: cat.color
    }
  }, "[", l.step, "]"), " ", l.detail, " \u2713")), !running && done === flow.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "log-line",
    style: {
      color: cat.color,
      fontWeight: 700
    }
  }, "\u2705 ", lang === 'fr' ? 'Automatisation complète — 0 intervention manuelle' : 'Automation complete — 0 manual intervention')), /*#__PURE__*/React.createElement("button", {
    className: "run-btn",
    onClick: runFlow,
    disabled: running,
    style: {
      background: `linear-gradient(135deg,${cat.color},${cat.color === '#00F0A8' ? '#415a77' : cat.color === '#415a77' ? '#FF2D78' : '#00F0A8'})`
    }
  }, running ? lang === 'fr' ? 'EN COURS...' : 'RUNNING...' : lang === 'fr' ? `▶ SIMULER ${cat.label.toUpperCase()}` : `▶ SIMULATE ${cat.label.toUpperCase()}`));
}
/* ─── ROI ───────────────────────────────────────────────────────────────────── */
function ROICalc({
  lang
}) {
  const t = T[lang];
  const [analysts, setA] = useState(3);
  const [hours, setH] = useState(15);
  const [rate, setR] = useState(45);
  const [err, setE] = useState(12);
  const [units, setU] = useState(1);
  const [budget, setBudget] = useState('');
  const wkH = analysts * hours,
    waste = wkH * rate * 52,
    errCost = err / 100 * waste * .8,
    total = waste + errCost,
    after = total * .12,
    savings = total - after;
  const totalScaled = total * units,
    savingsScaled = savings * units;
  const roi = (savingsScaled / 80000 * 100).toFixed(0);
  const budgetNum = parseFloat(budget) || 0;
  const budgetRoi = budgetNum > 0 ? ((savingsScaled / budgetNum - 1) * 100).toFixed(0) : null;
  const fmt = n => n >= 1000 ? `${lang === 'fr' ? '' : '$'}${(n / 1000).toFixed(0)}K${lang === 'fr' ? '€' : ''}` : `${lang === 'fr' ? '' : '$'}${Math.round(n)}${lang === 'fr' ? '€' : ''}`;
  const sv = [{
    val: analysts,
    set: setA,
    min: 1,
    max: 20
  }, {
    val: hours,
    set: setH,
    min: 2,
    max: 40
  }, {
    val: rate,
    set: setR,
    min: 20,
    max: 150
  }, {
    val: err,
    set: setE,
    min: 1,
    max: 40
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "roi-wrap reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-inputs"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: "1.5rem",
      letterSpacing: "2px",
      marginBottom: "5px",
      color: "var(--text)"
    }
  }, t.roiH3), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: ".78rem",
      color: "var(--text-sec)",
      lineHeight: "1.75",
      marginBottom: "18px"
    }
  }, t.roiP), t.roiSliders.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "roi-input-group"
  }, /*#__PURE__*/React.createElement("label", null, s.label, " ", /*#__PURE__*/React.createElement("span", {
    className: "roi-val-badge"
  }, sv[i].val, " ", s.unit)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: sv[i].min,
    max: sv[i].max,
    value: sv[i].val,
    onChange: e => sv[i].set(+e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "roi-input-group",
    style: {
      marginTop: '12px',
      borderTop: '1px solid var(--border-dim)',
      paddingTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("label", null, lang === 'fr' ? 'Business Units / Équipes concernées' : 'Business Units / Teams impacted', " ", /*#__PURE__*/React.createElement("span", {
    className: "roi-val-badge"
  }, units, " BU", units > 1 ? 's' : '')), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 1,
    max: 20,
    value: units,
    onChange: e => setU(+e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '16px',
      borderTop: '1px solid var(--border-dim)',
      paddingTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '.7rem',
      color: 'var(--text-sec)',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: "'Space Mono',monospace"
    }
  }, lang === 'fr' ? '💰 Votre budget : salaire annuel ou mission freelance' : '💰 Your budget: annual salary or freelance contract'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.9rem',
      color: 'var(--accent4)'
    }
  }, lang === 'fr' ? '€' : '$'), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    placeholder: lang === 'fr' ? 'Ex: 80000' : 'E.g. 80000',
    value: budget,
    onChange: e => setBudget(e.target.value),
    style: {
      flex: 1,
      background: 'var(--glass-bg)',
      border: '1px solid var(--border)',
      color: 'var(--text)',
      fontFamily: "'Space Mono',monospace",
      fontSize: '.8rem',
      padding: '10px 12px',
      borderRadius: '6px',
      outline: 'none'
    }
  })), budgetRoi !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      fontFamily: "'Space Mono',monospace",
      fontSize: '.6rem',
      color: 'var(--accent3)',
      background: 'rgba(0,240,168,.07)',
      border: '1px solid rgba(0,240,168,.2)',
      borderRadius: '6px',
      padding: '8px 12px'
    }
  }, lang === 'fr' ? `✅ ROI sur votre investissement : ~${budgetRoi}% — payé en ` : `✅ ROI on your investment: ~${budgetRoi}% — paid back in `, /*#__PURE__*/React.createElement("strong", null, Math.max(1, budgetNum / savingsScaled * 12).toFixed(1)), " ", lang === 'fr' ? 'mois' : 'months'))), /*#__PURE__*/React.createElement("div", {
    className: "roi-out"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: ".46rem",
      color: "var(--text-dim)",
      letterSpacing: "3px",
      textTransform: "uppercase",
      marginBottom: "6px"
    }
  }, t.roiComment), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-lbl"
  }, t.roiLbl1), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-val pink"
  }, fmt(waste)), /*#__PURE__*/React.createElement("div", {
    className: "roi-helper"
  }, wkH, "h/", lang === 'fr' ? 'sem' : 'week', " \xD7 ", analysts, " ", analysts > 1 ? t.roiSuffix2 : t.roiSuffix1, " \xD7 52", t.roiWks)), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-lbl"
  }, t.roiLbl2, " (", err, "%)"), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-val purple"
  }, fmt(errCost))), units > 1 && /*#__PURE__*/React.createElement("div", {
    className: "roi-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-lbl"
  }, "\xD7 ", units, " BU", units > 1 ? 's' : '', " ", lang === 'fr' ? 'concernées' : 'impacted'), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-val",
    style: {
      color: 'var(--accent4)',
      fontSize: '1.4rem'
    }
  }, "= ", fmt(totalScaled))), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-lbl"
  }, t.roiLbl3), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-val pink",
    style: {
      fontSize: "3rem"
    }
  }, fmt(units > 1 ? totalScaled : total))), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-lbl"
  }, t.roiLbl4), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-val",
    style: {
      color: "var(--text-sec)",
      fontSize: "1.6rem"
    }
  }, fmt((units > 1 ? totalScaled : total) * .12))), /*#__PURE__*/React.createElement("div", {
    className: "roi-savings-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-lbl"
  }, t.roiLbl5), /*#__PURE__*/React.createElement("div", {
    className: "roi-metric-val green",
    style: {
      fontSize: "2.6rem"
    }
  }, fmt(units > 1 ? savingsScaled : savings)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".6rem",
      color: "var(--accent3)",
      marginTop: "5px",
      fontFamily: "'Space Mono',monospace"
    }
  }, t.roiRoi, roi, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".54rem",
      color: "var(--text-mute)",
      fontFamily: "'Space Mono',monospace",
      fontStyle: "italic"
    }
  }, t.roiDisclaimer))));
}

/* ─── RADAR ─────────────────────────────────────────────────────────────────── */
function RadarChart({
  lang
}) {
  const t = T[lang];
  const canvasRef = useRef();
  const chartRef = useRef();
  const data = RADAR_DATA[lang];
  const COLORS = ['#415a77', '#FF2D78', '#00F0A8', '#FFB800', '#00C8FF', '#FF8C42'];
  useEffect(() => {
    if (!canvasRef.current) return;
    chartRef.current?.destroy();
    const th = document.body.getAttribute('data-theme');
    const gridColor = th === 'light' ? 'rgba(114,0,212,.1)' : 'rgba(191,58,255,.12)';
    const tickColor = th === 'light' ? '#6050A0' : '#7A6B9E';
    chartRef.current = new Chart(canvasRef.current, {
      type: 'radar',
      data: {
        labels: data.labels,
        datasets: [{
          data: data.data,
          fill: true,
          backgroundColor: 'rgba(191,58,255,.15)',
          borderColor: '#415a77',
          borderWidth: 2,
          pointBackgroundColor: COLORS,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1400,
          easing: 'easeOutQuart'
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 25,
              color: tickColor,
              backdropColor: 'transparent',
              font: {
                family: 'Space Mono',
                size: 8
              }
            },
            grid: {
              color: gridColor
            },
            pointLabels: {
              color: tickColor,
              font: {
                family: 'Space Mono',
                size: 9,
                weight: '600'
              }
            },
            angleLines: {
              color: gridColor
            }
          }
        }
      }
    });
    return () => chartRef.current?.destroy();
  }, [lang]);
  return /*#__PURE__*/React.createElement("div", {
    className: "radar-wrap reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radar-chart-wrap"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "radar-legend"
  }, data.details.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "radar-legend-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radar-legend-dot",
    style: {
      background: COLORS[i]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "radar-legend-label"
  }, d.label), /*#__PURE__*/React.createElement("div", {
    className: "radar-legend-sub"
  }, d.sub)), /*#__PURE__*/React.createElement("div", {
    className: "radar-legend-pct"
  }, d.pct, "%")))));
}

/* ─── TERMINAL CHATBOT ──────────────────────────────────────────────────────── */
function TerminalChatbot({
  lang
}) {
  const t = T[lang];
  const cmds = TERMINAL_CMDS[lang];
  const [history, setHistory] = useState([{
    t: 'sys',
    m: lang === 'fr' ? "Bienvenue — antoine@portfolio:~$" : "Welcome — antoine@portfolio:~$"
  }, {
    t: 'dim',
    m: lang === 'fr' ? "Tapez 'help' pour voir les commandes." : "Type 'help' to see commands."
  }]);
  const [input, setInput] = useState('');
  const [cmdHist, setCmdHist] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [typing, setTyping] = useState(false);
  const outRef = useRef();
  const inRef = useRef();
  useEffect(() => {
    setHistory([{
      t: 'sys',
      m: lang === 'fr' ? "Bienvenue — antoine@portfolio:~$" : "Welcome — antoine@portfolio:~$"
    }, {
      t: 'dim',
      m: lang === 'fr' ? "Tapez 'help' pour voir les commandes." : "Type 'help' to see commands."
    }]);
  }, [lang]);
  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [history, typing]);
  const colorClass = {
    sys: 'chat-line-sys',
    info: 'chat-line-info',
    cmd: 'chat-line-info',
    dim: 'chat-line-dim',
    acc2: 'chat-line-acc2',
    acc3: 'chat-line-sys',
    acc4: 'chat-line-acc4',
    err: 'chat-line-err'
  };
  async function runCmd(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setCmdHist(h => [raw, ...h]);
    setHistIdx(-1);
    setHistory(h => [...h, {
      t: 'user',
      m: `> ${raw}`
    }]);
    if (cmd === 'clear') {
      setTimeout(() => setHistory([]), 100);
      return;
    }
    const def = cmds[cmd] || cmds[raw.trim()];
    if (!def) {
      setHistory(h => [...h, {
        t: 'err',
        m: lang === 'fr' ? `Commande '${cmd}' introuvable. Tapez 'help'.` : `Command '${cmd}' not found. Type 'help'.`
      }]);
      return;
    }
    window.XP && window.XP.earn('terminal_cmd');
    setTyping(true);
    for (let i = 0; i < def.output.length; i++) {
      await new Promise(r => setTimeout(r, i === 0 ? 200 : 75));
      setHistory(h => [...h, def.output[i]]);
    }
    setTyping(false);
  }
  function handleKey(e) {
    if (e.key === 'Enter') {
      runCmd(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      const ni = Math.min(histIdx + 1, cmdHist.length - 1);
      setHistIdx(ni);
      setInput(cmdHist[ni] || '');
    } else if (e.key === 'ArrowDown') {
      const ni = Math.max(histIdx - 1, -1);
      setHistIdx(ni);
      setInput(ni === -1 ? '' : cmdHist[ni] || '');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const keys = Object.keys(cmds);
      const m = keys.find(k => k.startsWith(input));
      if (m) setInput(m);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "terminal-chat reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-dot t-red"
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-dot t-yellow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-dot t-green"
  }), /*#__PURE__*/React.createElement("span", {
    className: "terminal-path"
  }, "antoine@portfolio:~$")), /*#__PURE__*/React.createElement("div", {
    className: "chat-output",
    ref: outRef,
    onClick: () => inRef.current?.focus()
  }, history.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: l.t === 'user' ? 'chat-line-user' : colorClass[l.t] || 'chat-line-info'
  }, l.m)), typing && /*#__PURE__*/React.createElement("div", {
    className: "chat-line-dim"
  }, "\u258A")), /*#__PURE__*/React.createElement("div", {
    className: "chat-input-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chat-prompt-label"
  }, "$"), /*#__PURE__*/React.createElement("input", {
    ref: inRef,
    className: "chat-input",
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: handleKey,
    autoComplete: "off",
    spellCheck: "false",
    placeholder: t.terminalHint
  })), /*#__PURE__*/React.createElement("div", {
    className: "chat-hint"
  }, "TAB autocomplete \xB7 \u2191\u2193 history \xB7 try: help, ./hack.sh, secret"));
}

/* ─── ELI5 MODAL ────────────────────────────────────────────────────────────── */
function ELI5Modal({
  lang,
  onClose,
  onContact
}) {
  const cards = {
    en: [{
      emoji: '🤖',
      title: 'What I Actually Do',
      text: `Imagine your company drowns in Excel files every week — someone spends 10 hours manually copying numbers from one spreadsheet to another just to make a report. I build <strong>robots</strong> that do all that automatically, every day, while everyone sleeps. The report is just… there. Ready. Perfect.`
    }, {
      emoji: '📊',
      title: 'The Dashboards',
      text: `Instead of a 40-tab Excel file that only one person understands, I create a <strong>live screen</strong> (like a car dashboard) where any manager can see in 10 seconds: are we selling well? Do we have stock? Is the competition doing something weird? All automatic, always up to date.`
    }, {
      emoji: '🔍',
      title: 'Spying on the Competition',
      text: `Every morning at 6am, my system visits <strong>40+ competitor websites</strong> by itself, reads prices, promotions, and product launches, and sends a clean summary report. It's like having a spy who never sleeps and never makes mistakes.`
    }, {
      emoji: '💬',
      title: 'Reading Thousands of Reviews',
      text: `I built a system that reads <strong>10,000+ customer reviews per month</strong> from Amazon, Sephora, etc., understands whether they're happy or not, and automatically creates a report: "This week, customers love the scent but hate the packaging." Zero human needed.`
    }, {
      emoji: '📦',
      title: 'Predicting Stock',
      text: `Using AI, I predict <strong>how much of each product you'll sell</strong> over the next 13 weeks, store by store. So you never run out of stock (losing sales) and never order too much (wasting money). My error rate: 4.2% — better than most humans.`
    }, {
      emoji: '⚙️',
      title: 'Agile @ NAOS',
      text: `At NAOS, I work in <strong>Agile sprints</strong> — short 2-week cycles where we ship real features fast. No endless planning. We test, we learn, we improve. It's how I delivered a full analytics department in 6 months instead of 2 years.`
    }],
    fr: [{
      emoji: '🤖',
      title: 'Ce que je fais vraiment',
      text: `Imaginez que votre entreprise se noie dans des fichiers Excel chaque semaine — quelqu'un passe 10h à copier manuellement des chiffres d'un tableau à l'autre juste pour faire un rapport. Je construis des <strong>robots</strong> qui font tout ça automatiquement, chaque jour, pendant que tout le monde dort. Le rapport est juste… là. Prêt. Parfait.`
    }, {
      emoji: '📊',
      title: 'Les Dashboards',
      text: `Au lieu d'un fichier Excel de 40 onglets que seule une personne comprend, je crée un <strong>écran en direct</strong> (comme le tableau de bord d'une voiture) où n'importe quel manager voit en 10 secondes : est-ce qu'on vend bien ? A-t-on du stock ? Est-ce que la concurrence fait un truc bizarre ? Tout automatique, toujours à jour.`
    }, {
      emoji: '🔍',
      title: 'Espionner la concurrence',
      text: `Chaque matin à 6h, mon système visite <strong>40+ sites concurrents</strong> tout seul, lit les prix, les promos et les nouveautés, et envoie un rapport propre. C'est comme avoir un espion qui ne dort jamais et ne fait jamais d'erreurs.`
    }, {
      emoji: '💬',
      title: 'Lire des milliers d\'avis',
      text: `J'ai construit un système qui lit <strong>10 000+ avis clients par mois</strong> sur Amazon, Sephora, etc., comprend si les gens sont contents ou non, et crée automatiquement un rapport : "Cette semaine, les clients adorent le parfum mais détestent l'emballage." Zéro humain nécessaire.`
    }, {
      emoji: '📦',
      title: 'Prédire les stocks',
      text: `Grâce à l'IA, je prédit <strong>combien de chaque produit vous allez vendre</strong> dans les 13 prochaines semaines, magasin par magasin. Donc vous ne tombez jamais en rupture (perte de ventes) et ne commandez jamais trop (gaspillage d'argent). Mon taux d'erreur : 4,2% — mieux que la plupart des humains.`
    }, {
      emoji: '⚙️',
      title: 'Agile chez NAOS',
      text: `Chez NAOS, je travaille en <strong>sprints Agile</strong> — des cycles courts de 2 semaines où l'on livre des vraies fonctionnalités rapidement. Pas de planification sans fin. On teste, on apprend, on améliore. C'est comme ça que j'ai livré un département analytics complet en 6 mois au lieu de 2 ans.`
    }]
  };
  const c = cards[lang];
  return /*#__PURE__*/React.createElement("div", {
    className: "eli5-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "eli5-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "eli5-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eli5-title"
  }, "\uD83D\uDCA1 ", lang === 'fr' ? 'Expliquez-moi simplement' : 'Explain it Simply'), /*#__PURE__*/React.createElement("div", {
    className: "eli5-sub"
  }, lang === 'fr' ? 'Tout ce que je fais — sans le jargon tech' : 'Everything I do — zero tech jargon')), /*#__PURE__*/React.createElement("button", {
    className: "eli5-close",
    onClick: onClose
  }, "\u2715")), c.map((card, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "eli5-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eli5-card-emoji"
  }, card.emoji), /*#__PURE__*/React.createElement("div", {
    className: "eli5-card-title"
  }, card.title), /*#__PURE__*/React.createElement("div", {
    className: "eli5-card-text",
    dangerouslySetInnerHTML: {
      __html: card.text
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "eli5-cta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eli5-badge"
  }, "\u2705 ", lang === 'fr' ? 'Pas de jargon. Que des résultats.' : 'No jargon. Just results.'), /*#__PURE__*/React.createElement("button", {
    className: "book-call-btn",
    style: {
      marginTop: 0
    },
    onClick: onContact
  }, "\uD83D\uDCC5 ", lang === 'fr' ? 'Parlons-en en 30 min →' : 'Let\'s talk in 30 min →'))));
}

/* ─── RECRUITER MODAL ───────────────────────────────────────────────────────── */
function RecruiterModal({
  lang,
  onClose
}) {
  const t = T[lang];
  const [profile, setProfile] = useState(null);
  const profileKeys = ['executive', 'tech', 'data', 'hr'];
  function pick(i) {
    setProfile(profileKeys[i]);
    window.XP && window.XP.earn('recruiter');
  }
  const pdata = profile && RECRUITER_PROFILES[profile]?.[lang];
  return /*#__PURE__*/React.createElement("div", {
    className: "recruiter-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "recruiter-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "recruiter-modal-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recruiter-modal-title"
  }, "\u26A1 ", t.recruiterTitle), /*#__PURE__*/React.createElement("div", {
    className: "recruiter-modal-sub"
  }, t.recruiterSub)), !profile ? /*#__PURE__*/React.createElement("div", {
    className: "recruiter-modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recruiter-q"
  }, t.recruiterQ), /*#__PURE__*/React.createElement("div", {
    className: "recruiter-options"
  }, t.recruiterProfiles.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "recruiter-option",
    onClick: () => pick(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "recruiter-option-icon"
  }, p.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: '2px'
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.72rem',
      color: 'var(--text-mute)'
    }
  }, p.sub)))))) : /*#__PURE__*/React.createElement("div", {
    className: "recruiter-mode-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recruiter-mode-title"
  }, pdata?.title), /*#__PURE__*/React.createElement("div", {
    className: "recruiter-highlight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recruiter-highlight-title"
  }, lang === 'fr' ? 'CE QUI COMPTE POUR VOUS' : 'WHAT MATTERS TO YOU'), /*#__PURE__*/React.createElement("div", {
    className: "recruiter-highlight-items"
  }, pdata?.highlights.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "recruiter-highlight-item"
  }, h)))), /*#__PURE__*/React.createElement("div", {
    className: "recruiter-mode-text"
  }, pdata?.note), /*#__PURE__*/React.createElement("button", {
    className: "recruiter-close-btn",
    onClick: onClose
  }, lang === 'fr' ? '✓ COMPRIS, MERCI' : '✓ GOT IT, THANKS'))));
}

/* ─── BLOG ──────────────────────────────────────────────────────────────────── */
function Blog({
  lang
}) {
  const t = T[lang];
  const [openPost, setOpenPost] = useState(null);
  const posts = BLOG_POSTS[lang];
  return /*#__PURE__*/React.createElement(React.Fragment, null, openPost && /*#__PURE__*/React.createElement("div", {
    className: "blog-modal-overlay",
    onClick: () => setOpenPost(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-modal-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-modal-tag"
  }, openPost.tag), /*#__PURE__*/React.createElement("div", {
    className: "blog-modal-title"
  }, openPost.title), /*#__PURE__*/React.createElement("div", {
    className: "blog-modal-meta"
  }, openPost.date, " \xB7 ", openPost.readTime, " ", t.blogReadTime), /*#__PURE__*/React.createElement("div", {
    className: "blog-modal-body",
    dangerouslySetInnerHTML: {
      __html: openPost.body
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "blog-modal-close",
    onClick: () => setOpenPost(null)
  }, t.blogClose)))), /*#__PURE__*/React.createElement("div", {
    className: "blog-grid"
  }, posts.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `blog-card reveal reveal-delay-${i + 1}`,
    onClick: () => setOpenPost(p)
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-tag"
  }, p.tag), /*#__PURE__*/React.createElement("div", {
    className: "blog-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "blog-excerpt"
  }, p.excerpt), /*#__PURE__*/React.createElement("div", {
    className: "blog-meta"
  }, /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.readTime, " ", t.blogReadTime)), /*#__PURE__*/React.createElement("div", {
    className: "blog-read-more"
  }, t.blogRead)))));
}

/* ─── MISC COMPONENTS ───────────────────────────────────────────────────────── */
function ScrollToTop({
  lang
}) {
  const t = T[lang];
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    className: `scroll-top${show ? ' visible' : ''}`,
    onClick: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, t.scrollTop);
}
function FloatingPills({
  lang,
  mode
}) {
  // phase: 'float' | 'explode' | 'hidden' | 'return'
  const [phase, setPhase] = useState('float');
  const phaseRef = useRef('float');
  const isHuman = mode === 'human';
  const grad = isHuman ? 'linear-gradient(135deg,#415a77,#7C3AED)' : 'linear-gradient(135deg,#BF3AFF,#FF2D78)';
  const glows = isHuman ? ['rgba(65,90,119,.55)', 'rgba(124,58,237,.45)', 'rgba(65,90,119,.4)'] : ['rgba(191,58,255,.55)', 'rgba(191,58,255,.45)', 'rgba(255,45,120,.4)'];
  const labelColor = isHuman ? '#7C3AED' : '#415a77';
  const label3Color = isHuman ? '#7C3AED' : '#FF2D78';
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);
  useEffect(() => {
    let t1 = null,
      t2 = null;
    const onScroll = () => {
      const down = window.scrollY > 80;
      const p = phaseRef.current;
      if (down && p === 'float') {
        setPhase('explode');
        phaseRef.current = 'explode';
        t1 = setTimeout(() => {
          setPhase('hidden');
          phaseRef.current = 'hidden';
        }, 500);
      } else if (!down && (p === 'hidden' || p === 'explode')) {
        clearTimeout(t1);
        setPhase('return');
        phaseRef.current = 'return';
        t2 = setTimeout(() => {
          setPhase('float');
          phaseRef.current = 'float';
        }, 650);
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  const pills = [{
    tag: 'a',
    href: 'mailto:antoinedemaintenant@alumni.ie.edu',
    icon: '✉️',
    size: 50,
    gi: 0,
    lc: labelColor,
    label: lang === 'fr' ? 'M\'écrire' : 'Email me',
    top: '26%',
    right: '20px',
    floatAnim: 'floatA 3.2s ease-in-out infinite',
    explodeAnim: 'explodePill1 0.5s ease-in forwards',
    returnAnim: 'returnPill1 0.65s cubic-bezier(.18,.89,.32,1.28) forwards'
  }, {
    tag: 'a',
    href: '#certificates',
    onClick: true,
    icon: '🎓',
    size: 46,
    gi: 1,
    lc: labelColor,
    label: lang === 'fr' ? '8 Certifs' : '8 Certs',
    top: '42%',
    right: '60px',
    floatAnim: 'floatB 4s 0.8s ease-in-out infinite',
    explodeAnim: 'explodePill2 0.5s 0.05s ease-in forwards',
    returnAnim: 'returnPill2 0.65s 0.05s cubic-bezier(.18,.89,.32,1.28) forwards'
  }, {
    tag: 'button',
    icon: '💼',
    size: 46,
    gi: 2,
    lc: label3Color,
    label: lang === 'fr' ? 'Expériences' : 'Experience',
    top: '58%',
    right: '28px',
    floatAnim: 'floatC 3.6s 1.5s ease-in-out infinite',
    explodeAnim: 'explodePill3 0.5s 0.1s ease-in forwards',
    returnAnim: 'returnPill3 0.65s 0.1s cubic-bezier(.18,.89,.32,1.28) forwards'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, pills.map((p, i) => {
    const anim = phase === 'float' ? p.floatAnim : phase === 'explode' ? p.explodeAnim : phase === 'return' ? p.returnAnim : 'none';
    const st = {
      position: 'fixed',
      right: p.right,
      top: p.top,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      textDecoration: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      zIndex: 480,
      animation: anim,
      visibility: phase === 'hidden' ? 'hidden' : 'visible',
      pointerEvents: phase === 'hidden' || phase === 'explode' ? 'none' : 'auto'
    };
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: p.size,
        height: p.size,
        borderRadius: '50%',
        background: grad,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 26px ${glows[p.gi]}`,
        fontSize: p.size === 50 ? 22 : 20
      }
    }, p.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: p.size === 50 ? '.4rem' : '.38rem',
        color: p.lc,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }
    }, p.label), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: p.size === 50 ? 18 : 14,
        background: grad.replace('135deg', '180deg').replace(/,[^,]+\)$/, ',transparent)')
      }
    }));
    if (p.tag === 'button') return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => {
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      },
      style: st
    }, inner);
    if (p.onClick) return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: p.href,
      onClick: e => {
        e.preventDefault();
        const el = document.getElementById('certificates');
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      },
      style: st
    }, inner);
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: p.href,
      style: st
    }, inner);
  }));
}
function VisitorBadge({
  lang
}) {
  const t = T[lang];
  const [c, setC] = useState(2847);
  useEffect(() => {
    const iv = setInterval(() => setC(x => x + Math.floor(Math.random() * 2)), 55000);
    return () => clearInterval(iv);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "visitor-badge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb-dot"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text)"
    }
  }, c.toLocaleString()), /*#__PURE__*/React.createElement("span", null, t.visitors));
}
/* ─── VISITOR LIVE MAP ───────────────────────────────────────────────────────── */
function VisitorMap({
  lang,
  mode
}) {
  const WORKER_URL = "https://dm_antoine--a8211e3c18ee11f18d2742dde27851f2.web.val.run";
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const markersLayer = useRef(null);
  const [myGeo, setMyGeo] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [realCount, setRealCount] = useState(null); // real count from tracking POST response
  const FALLBACK = 2847;
  const isHuman = mode === 'human';

  // 1. Geo-locate current visitor (real IP)
  useEffect(() => {
    fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(5000)
    }).then(r => r.json()).then(d => {
      if (d && d.latitude) {
        setMyGeo({
          lat: d.latitude,
          lon: d.longitude,
          city: d.city,
          country: d.country_name,
          countryCode: d.country_code
        });
      }
    }).catch(() => {});
  }, []);

  // 2. GET worker → count réel + locations historiques
  const [pastLocations, setPastLocations] = useState([]);
  useEffect(() => {
    // Fallback depuis l'event POST si dispo immédiatement
    if (typeof window.__realVisitCount === 'number') setRealCount(window.__realVisitCount);else {
      try {
        const s = sessionStorage.getItem('__visitCount');
        if (s) setRealCount(parseInt(s));
      } catch (e) {}
    }
    // Event POST
    const handler = e => {
      if (typeof e.detail === 'number') setRealCount(e.detail);
    };
    window.addEventListener('workerCount', handler);
    // GET pour count + locations historiques
    fetch(WORKER_URL, {
      method: 'GET',
      signal: AbortSignal.timeout(5000)
    }).then(r => r.ok ? r.json() : null).then(d => {
      if (!d) return;
      if (typeof d.count === 'number' && d.count > 0) setRealCount(d.count);
      if (Array.isArray(d.locations) && d.locations.length > 0) setPastLocations(d.locations);
    }).catch(() => {});
    return () => window.removeEventListener('workerCount', handler);
  }, []);
  const displayCount = realCount ?? FALLBACK;

  // 3. Init Leaflet — tiles adapt to mode (dark/light)
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;
    const tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png';
    const initMap = L => {
      if (!mapRef.current) return;
      const map = L.map(mapRef.current, {
        center: [30, 15],
        zoom: 3,
        minZoom: 2,
        maxZoom: 6,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
        dragging: true,
        worldCopyJump: true
      });
      L.tileLayer(tileUrl, {
        maxZoom: 19
      }).addTo(map);
      markersLayer.current = L.layerGroup().addTo(map);
      leafletMap.current = map;
      setMapReady(true);
    };
    if (window.L) initMap(window.L);else {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      s.onload = () => initMap(window.L);
      document.head.appendChild(s);
    }
    return () => {
      if (leafletMap.current) {
        try {
          leafletMap.current.remove();
        } catch (e) {}
        leafletMap.current = null;
      }
    };
  }, [isHuman]);

  // 4. Pin current visitor + past locations on map
  useEffect(() => {
    if (!leafletMap.current || !markersLayer.current || !window.L) return;
    const L = window.L;
    markersLayer.current.clearLayers();
    const dotColor = isHuman ? '#7C3AED' : '#00F0A8';

    // Past locations (real historical visitors from worker)
    pastLocations.forEach(v => {
      if (!v.lat || !v.lon) return;
      const pastIcon = L.divIcon({
        className: '',
        html: `<div style="width:8px;height:8px;border-radius:50%;background:${isHuman ? '#415a77' : '#415a77'};opacity:0.7;box-shadow:0 0 8px ${isHuman ? '#415a77' : '#415a77'};"></div>`,
        iconSize: [8, 8],
        iconAnchor: [4, 4]
      });
      const m = L.marker([v.lat, v.lon], {
        icon: pastIcon,
        zIndexOffset: 0
      });
      const flag = v.cc ? `<img src="https://flagcdn.com/16x12/${v.cc.toLowerCase()}.png" style="margin-right:5px;vertical-align:middle;border-radius:2px"/>` : '';
      m.bindPopup(`<div style="min-width:110px;font-family:sans-serif">${flag}<strong>${v.city || v.country || '?'}</strong><br/><span style="color:${isHuman ? '#415a77' : '#415a77'};font-size:10px">${lang === 'fr' ? 'Visiteur passé' : 'Past visitor'}</span></div>`);
      markersLayer.current.addLayer(m);
    });

    // Current visitor
    if (myGeo) {
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:14px;height:14px;border-radius:50%;background:${dotColor};box-shadow:0 0 14px ${dotColor};border:2px solid #fff;"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      const marker = L.marker([myGeo.lat, myGeo.lon], {
        icon,
        zIndexOffset: 1000
      });
      const flag = myGeo.countryCode ? `<img src="https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png" style="margin-right:5px;vertical-align:middle;border-radius:2px"/>` : '';
      marker.bindPopup(`<div style="min-width:130px;font-family:sans-serif">${flag}<strong>${myGeo.city || myGeo.country || '?'}</strong><br/><span style="color:${dotColor};font-size:10px">← ${lang === 'fr' ? 'Vous êtes ici' : 'You are here'}</span></div>`);
      markersLayer.current.addLayer(marker);
      leafletMap.current.setView([myGeo.lat, myGeo.lon], 4, {
        animate: true,
        duration: 1.2
      });
    }
  }, [myGeo, pastLocations, isHuman, lang]);
  const ua = navigator.userAgent;
  const device = /iPhone|iPad/.test(ua) ? '📱 iPhone' : /Android/.test(ua) ? '📱 Android' : /Mac/.test(ua) ? '🖥️ Mac' : /Windows/.test(ua) ? '🖥️ Windows' : /Linux/.test(ua) ? '🐧 Linux' : '🖥️ Desktop';
  const browserLang = (navigator.language || 'en').split('-')[0].toUpperCase();

  /* ── HUMAN MODE ─────────────────────────────────────────────────── */
  if (isHuman) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--bg)',
        padding: '80px 0',
        borderTop: '1px solid var(--border-dim)',
        borderBottom: '1px solid var(--border-dim)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 24,
        marginBottom: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: '#7C3AED',
        boxShadow: '0 0 12px #7C3AED99',
        animation: 'pulse 2s infinite',
        display: 'inline-block'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.48rem',
        color: '#7C3AED',
        letterSpacing: '4px',
        textTransform: 'uppercase'
      }
    }, lang === 'fr' ? 'EN CE MOMENT MÊME · DONNÉES RÉELLES' : 'RIGHT NOW · REAL DATA')), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: 'clamp(2rem,4vw,3.2rem)',
        color: 'var(--text)',
        letterSpacing: '2px',
        lineHeight: 1.05,
        margin: 0
      }
    }, lang === 'fr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Vous lisez depuis", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: '#7C3AED'
      }
    }, myGeo ? `${myGeo.city || myGeo.country || '…'} ${myGeo.countryCode ? `🏴` : '🌍'}` : 'quelque part sur Terre 🌍')) : /*#__PURE__*/React.createElement(React.Fragment, null, "You're reading from", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        color: '#7C3AED'
      }
    }, myGeo ? `${myGeo.city || myGeo.country || '…'} 🌍` : 'somewhere on Earth 🌍')))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '3.8rem',
        color: '#7C3AED',
        lineHeight: 1
      }
    }, realCount ? realCount.toLocaleString() : /*#__PURE__*/React.createElement(React.Fragment, null, FALLBACK.toLocaleString(), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.5rem',
        color: 'var(--text-mute)',
        marginLeft: 6,
        letterSpacing: '1px',
        verticalAlign: 'middle'
      }
    }, "min."))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.46rem',
        color: 'var(--text-mute)',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }
    }, lang === 'fr' ? 'visites depuis le début' : 'visits since launch', !realCount && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#7C3AED88',
        fontSize: '.38rem'
      }
    }, "(", lang === 'fr' ? 'worker non exposé' : 'tracking not yet responded', ")"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 24,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        borderRadius: 18,
        overflow: 'hidden',
        border: '1px solid var(--border-dim)',
        boxShadow: '0 4px 24px rgba(124,58,237,.08)'
      }
    }, !mapReady && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        fontFamily: "'Space Mono',monospace",
        fontSize: '.5rem',
        color: 'var(--text-mute)',
        letterSpacing: '2px',
        background: 'var(--bg-card)'
      }
    }, "Chargement\u2026"), /*#__PURE__*/React.createElement("div", {
      ref: mapRef,
      id: "visitor-map-human",
      style: {
        height: 340,
        width: '100%',
        borderRadius: 18
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom,transparent 70%,var(--bg))',
        pointerEvents: 'none',
        zIndex: 400
      }
    }), myGeo && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        zIndex: 500,
        background: 'rgba(255,255,255,.92)',
        border: '1px solid rgba(124,58,237,.2)',
        borderRadius: 10,
        padding: '8px 14px',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: '#7C3AED',
        boxShadow: '0 0 8px #7C3AED',
        display: 'inline-block',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.42rem',
        color: '#7C3AED',
        letterSpacing: '1px'
      }
    }, myGeo.city || myGeo.country, " \xB7 ", lang === 'fr' ? 'vous' : 'you'), myGeo.countryCode && /*#__PURE__*/React.createElement("img", {
      src: `https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png`,
      style: {
        height: 11,
        borderRadius: 2
      },
      alt: ""
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, [{
      icon: '📍',
      label: lang === 'fr' ? 'Votre ville' : 'Your city',
      value: myGeo ? `${myGeo.city || '—'}, ${myGeo.country || ''}` : lang === 'fr' ? 'Localisation…' : 'Locating…',
      accent: '#7C3AED',
      live: true
    }, {
      icon: '🖥️',
      label: lang === 'fr' ? 'Votre appareil' : 'Your device',
      value: device,
      accent: '#EC4899'
    }, {
      icon: '🌐',
      label: lang === 'fr' ? 'Langue détectée' : 'Browser language',
      value: browserLang,
      accent: '#F59E0B'
    }, {
      icon: '🔢',
      label: lang === 'fr' ? 'Vous êtes visiteur n°' : 'You are visitor #',
      value: `${(displayCount + 1).toLocaleString()}`,
      accent: '#10B981'
    }].map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--bg-card)',
        border: `1px solid ${c.accent}20`,
        borderLeft: `3px solid ${c.accent}`,
        borderRadius: 12,
        padding: '16px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        transition: 'transform .18s,box-shadow .18s',
        cursor: 'default'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateX(4px)';
        e.currentTarget.style.boxShadow = `0 6px 20px ${c.accent}18`;
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '1.3rem',
        flexShrink: 0
      }
    }, c.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.4rem',
        color: 'var(--text-mute)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, c.label, c.live && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: '#10B981',
        display: 'inline-block',
        animation: 'pulse 2s infinite'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Space Grotesk',sans-serif",
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--text)',
        lineHeight: 1.2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.value)))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.38rem',
        color: 'var(--text-mute)',
        letterSpacing: '1px',
        paddingTop: 4,
        lineHeight: 1.7
      }
    }, "\uD83D\uDCE1 ", lang === 'fr' ? 'Géoloc. anonyme par IP · aucune donnée perso stockée' : 'Anonymous IP geoloc · no personal data stored'))), pastLocations.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32,
        paddingTop: 24,
        borderTop: '1px solid var(--border-dim)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.44rem',
        color: 'var(--text-mute)',
        letterSpacing: '3px',
        textTransform: 'uppercase'
      }
    }, lang === 'fr' ? '👥 Villes qui ont lu ce portfolio' : '👥 Cities that read this portfolio'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Space Mono',monospace",
        fontSize: '.38rem',
        color: 'var(--text-mute)',
        opacity: .55
      }
    }, "\xB7 ", lang === 'fr' ? 'ville seulement · 100% anonyme · pas de données perso' : 'city only · 100% anonymous · no personal data')), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, pastLocations.slice(0, 15).map((v, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '7px 14px',
        borderRadius: 30,
        background: 'var(--bg-card)',
        border: '1px solid var(--border-dim)',
        fontFamily: "'Space Grotesk',sans-serif",
        fontSize: '.82rem',
        color: 'var(--text)',
        transition: 'transform .15s,box-shadow .15s',
        cursor: 'default'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(124,58,237,.12)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }
    }, v.cc && /*#__PURE__*/React.createElement("img", {
      src: `https://flagcdn.com/16x12/${v.cc.toLowerCase()}.png`,
      style: {
        height: 11,
        borderRadius: 2,
        flexShrink: 0
      },
      alt: ""
    }), /*#__PURE__*/React.createElement("span", null, v.city || v.country || '—')))))));
  }

  /* ── TECH MODE ──────────────────────────────────────────────────── */
  return /*#__PURE__*/React.createElement("div", {
    className: "vmap-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vmap-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vmap-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.5rem',
      color: 'var(--accent3)',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent3)',
      boxShadow: '0 0 10px var(--accent3)',
      animation: 'pulse 2s infinite',
      display: 'inline-block',
      flexShrink: 0
    }
  }), lang === 'fr' ? 'LIVE · Votre position réelle' : 'LIVE · Your real position'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: 'clamp(1.8rem,3.5vw,3rem)',
      color: 'var(--text)',
      letterSpacing: '2px',
      lineHeight: 1,
      margin: 0
    }
  }, lang === 'fr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Vous vous connectez ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: '#415a77'
    }
  }, "depuis ", myGeo ? `${myGeo.city || myGeo.country || '…'}` : '…')) : /*#__PURE__*/React.createElement(React.Fragment, null, "You're connecting ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: '#415a77'
    }
  }, "from ", myGeo ? `${myGeo.city || myGeo.country || '…'}` : '…'))), myGeo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "'Space Mono',monospace",
      fontSize: '.44rem',
      color: 'var(--accent3)',
      letterSpacing: '1px',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, "\uD83D\uDCCD ", myGeo.city, myGeo.city && myGeo.country ? ', ' : '', myGeo.country, myGeo.countryCode && /*#__PURE__*/React.createElement("img", {
    src: `https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png`,
    style: {
      height: 10,
      verticalAlign: 'middle',
      borderRadius: 2
    },
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stats-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-n"
  }, realCount ? realCount.toLocaleString() : `${FALLBACK.toLocaleString()}+`), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-l"
  }, lang === 'fr' ? 'sessions totales' : 'total sessions', !realCount && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.36rem',
      color: 'var(--text-mute)',
      opacity: .6
    }
  }, "(fallback)")))), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-n"
  }, myGeo ? '1' : '—'), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-l"
  }, lang === 'fr' ? 'actif maintenant' : 'active now')), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-n"
  }, pastLocations.length || '—'), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-l"
  }, lang === 'fr' ? 'visites géolocalisées' : 'geolocated visits')), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-n"
  }, device), /*#__PURE__*/React.createElement("div", {
    className: "vmap-stat-l"
  }, lang === 'fr' ? 'votre device' : 'your device')))), /*#__PURE__*/React.createElement("div", {
    className: "vmap-container"
  }, !mapReady && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      fontFamily: "'Space Mono',monospace",
      fontSize: '.54rem',
      color: 'var(--text-mute)',
      letterSpacing: '3px'
    }
  }, "// LOADING MAP..."), /*#__PURE__*/React.createElement("div", {
    ref: mapRef,
    id: "visitor-map"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vmap-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 14,
      zIndex: 500,
      display: 'flex',
      gap: 14,
      background: 'rgba(5,2,16,.82)',
      border: '1px solid var(--border-dim)',
      borderRadius: 8,
      padding: '6px 12px',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: "'Space Mono',monospace",
      fontSize: '.38rem',
      color: 'var(--accent3)',
      letterSpacing: '1px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#00F0A8',
      boxShadow: '0 0 6px #00F0A8',
      display: 'inline-block'
    }
  }), lang === 'fr' ? 'Vous — données IP réelles' : 'You — real IP data'))), /*#__PURE__*/React.createElement("div", {
    className: "vmap-recent"
  }, myGeo ? /*#__PURE__*/React.createElement("span", {
    className: "vmap-ping vmap-ping-me"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vmap-ping-dot",
    style: {
      background: '#00F0A8',
      boxShadow: '0 0 6px #00F0A8'
    }
  }), myGeo.countryCode && /*#__PURE__*/React.createElement("img", {
    src: `https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png`,
    style: {
      height: 10,
      borderRadius: 2,
      verticalAlign: 'middle'
    },
    alt: ""
  }), myGeo.city || myGeo.country, " (", lang === 'fr' ? 'vous' : 'you', ")") : /*#__PURE__*/React.createElement("span", {
    className: "vmap-empty"
  }, "// ", lang === 'fr' ? 'Géolocalisation…' : 'Geolocating…')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: "'Space Mono',monospace",
      fontSize: '.4rem',
      color: 'var(--text-mute)',
      letterSpacing: '1px'
    }
  }, "// ", lang === 'fr' ? 'Géoloc. IP anonyme · 0 données simulées · compteur réel si worker expose GET' : 'Anonymous IP geoloc · 0 simulated data · real count if worker exposes GET')));
}
function CopyEmailButton({
  lang
}) {
  const t = T[lang];
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText('antoinedemaintenant@alumni.ie.edu').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `copy-toast${copied ? ' show' : ''}`
  }, t.contactCopied), /*#__PURE__*/React.createElement("a", {
    href: "mailto:antoinedemaintenant@alumni.ie.edu",
    className: "contact-card",
    onClick: e => {
      e.preventDefault();
      copy();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-icon"
  }, "\uD83D\uDCE7"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-lbl"
  }, "Email ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent3)',
      fontSize: '.38rem',
      marginLeft: '5px',
      fontFamily: "'Space Mono',monospace"
    }
  }, t.contactCopyHint)), /*#__PURE__*/React.createElement("div", {
    className: "contact-val"
  }, "antoinedemaintenant@alumni.ie.edu"))));
}
function CountryModal({
  country,
  onClose,
  lang
}) {
  const t = T[lang];
  if (!country) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "country-modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "country-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "country-modal-header"
  }, /*#__PURE__*/React.createElement("img", {
    className: "country-modal-flag",
    src: `https://flagcdn.com/80x60/${country.iso}.png`,
    alt: country.n
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "country-modal-title"
  }, country.emoji, " ", country.n), /*#__PURE__*/React.createElement("div", {
    className: "country-modal-sub"
  }, country.sub))), /*#__PURE__*/React.createElement("div", {
    className: "country-modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "country-modal-tags"
  }, country.tags.map((tag, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "country-modal-tag"
  }, tag))), /*#__PURE__*/React.createElement("div", {
    className: "country-modal-text"
  }, country.text), /*#__PURE__*/React.createElement("button", {
    className: "country-modal-close",
    onClick: onClose
  }, t.countryClose))));
}

/* ─── CALENDLY MOCK ──────────────────────────────────────────────────────────── */
function CalendlyModal({
  lang,
  onClose
}) {
  const [selDay, setSelDay] = useState(null);
  const [selTime, setSelTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
  // Build a simple 4-week calendar starting from today
  const today = new Date();
  const todayNum = today.getDate();
  const firstDow = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  // available days: not weekend, not past, not today
  const isAvail = d => {
    const dow = new Date(today.getFullYear(), today.getMonth(), d).getDay();
    return d > todayNum && dow !== 0 && dow !== 6;
  };
  function confirm() {
    if (!selDay || !selTime) return;
    setConfirmed(true);
    window.SFX && SFX.achieve();
    window.XP && XP.earn('contact');
    // open real calendly in bg
    window.open('https://calendly.com/antoinedemaintenant-alumni/30min', '_blank');
  }
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return /*#__PURE__*/React.createElement("div", {
    className: "cal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cal-title"
  }, "\uD83D\uDCC5 ", lang === 'fr' ? 'Réserver un call' : 'Book a Call'), /*#__PURE__*/React.createElement("div", {
    className: "cal-sub"
  }, lang === 'fr' ? '30 min · Visio · Gratuit' : '30 min · Video call · Free')), /*#__PURE__*/React.createElement("button", {
    className: "cal-close-x",
    onClick: onClose
  }, "\u2715")), !confirmed ? /*#__PURE__*/React.createElement("div", {
    className: "cal-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.5rem',
      color: 'var(--text-dim)',
      letterSpacing: '2px',
      marginBottom: '12px',
      textTransform: 'uppercase'
    }
  }, today.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'long',
    year: 'numeric'
  }).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    className: "cal-fake"
  }, (lang === 'fr' ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] : days).map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "cal-day-header"
  }, d)), cells.map((d, i) => d === null ? /*#__PURE__*/React.createElement("div", {
    key: 'e' + i,
    className: "cal-day empty"
  }) : /*#__PURE__*/React.createElement("div", {
    key: d,
    className: `cal-day${d === todayNum ? ' past' : ''}${isAvail(d) ? ' available' : ''}${selDay === d ? ' selected' : ''}`,
    onClick: () => isAvail(d) && setSelDay(d)
  }, d))), selDay && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.5rem',
      color: 'var(--accent3)',
      letterSpacing: '2px',
      marginBottom: '8px',
      textTransform: 'uppercase'
    }
  }, lang === 'fr' ? `Créneaux le ${selDay}` : `Slots on ${selDay}`), /*#__PURE__*/React.createElement("div", {
    className: "cal-time-slots"
  }, times.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: `cal-slot${selTime === t ? ' selected' : ''}`,
    onClick: () => setSelTime(t)
  }, t)))), /*#__PURE__*/React.createElement("button", {
    className: "cal-confirm",
    onClick: confirm,
    disabled: !selDay || !selTime
  }, selDay && selTime ? `✓ ${lang === 'fr' ? 'Confirmer' : 'Confirm'} ${selDay} @ ${selTime}` : lang === 'fr' ? 'Sélectionnez une date et un créneau' : 'Select a date and time slot'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.44rem',
      color: 'var(--text-mute)',
      textAlign: 'center',
      marginTop: '10px',
      letterSpacing: '1px'
    }
  }, lang === 'fr' ? '→ Vous serez redirigé vers Calendly pour confirmation' : '→ You\'ll be redirected to Calendly for final confirmation')) : /*#__PURE__*/React.createElement("div", {
    className: "cal-body cal-confirmed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-confirmed-icon"
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    className: "cal-confirmed-title"
  }, lang === 'fr' ? 'Call réservé !' : 'Call Booked!'), /*#__PURE__*/React.createElement("div", {
    className: "cal-confirmed-text"
  }, lang === 'fr' ? `${selDay} @ ${selTime} — Vous recevrez un email de confirmation.` : `${selDay} @ ${selTime} — You'll receive a confirmation email.`, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#415a77'
    }
  }, lang === 'fr' ? 'Antoine vous contacte sous 2h.' : 'Antoine will reach out within 2h.')))));
}

/* ─── WORLD MAP (D3 — visited countries only) ───────────────────────────────── */
function WorldMap({
  countries,
  setActiveCountry,
  lang
}) {
  const [hov, setHov] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, countries.map((c, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActiveCountry(c),
    onMouseEnter: () => setHov(i),
    onMouseLeave: () => setHov(null),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 0,
      padding: 0,
      overflow: 'hidden',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      background: 'var(--card-solid)',
      border: `1px solid ${hov === i ? 'var(--accent1)' : 'var(--glass-border)'}`,
      borderRadius: 18,
      cursor: 'pointer',
      transition: 'all .28s cubic-bezier(.16,1,.3,1)',
      textAlign: 'left',
      transform: hov === i ? 'translateY(-4px)' : 'none',
      boxShadow: hov === i ? 'var(--glass-shadow)' : '0 2px 12px rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      padding: '16px 18px 12px',
      background: 'rgba(255,255,255,.06)',
      borderBottom: '1px solid var(--glass-border)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 34,
      lineHeight: 1,
      flexShrink: 0
    }
  }, c.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 800,
      fontSize: '1.1rem',
      color: 'var(--text)',
      letterSpacing: '-.2px',
      lineHeight: 1,
      marginBottom: 4
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.4rem',
      color: 'var(--accent2)',
      letterSpacing: '2px',
      textTransform: 'uppercase'
    }
  }, c.sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px 14px',
      flex: 1,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontSize: '.76rem',
      color: 'var(--text-sec)',
      lineHeight: 1.65,
      marginBottom: 10
    }
  }, c.text?.slice(0, 88), c.text?.length > 88 ? '…' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, c.tags?.slice(0, 3).map((tag, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontSize: '.6rem',
      fontWeight: 500,
      color: '#415a77',
      background: 'rgba(255,255,255,.06)',
      border: '1px solid var(--glass-border)',
      padding: '3px 9px',
      borderRadius: 20
    }
  }, tag))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      background: 'var(--card-solid)',
      border: '1px solid var(--glass-border)',
      borderRadius: 12,
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--accent3)',
      animation: 'pulse 2s infinite',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 600,
      fontSize: '.76rem',
      color: 'var(--accent3)'
    }
  }, lang === 'fr' ? 'Disponible partout dans le monde · Remote-first' : 'Available worldwide · Remote-first')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 800,
      fontSize: '1.3rem',
      color: '#415a77',
      letterSpacing: '-1px'
    }
  }, countries.length, " ", lang === 'fr' ? 'pays' : 'countries')));
}

/* ─── HUMAN ROI ──────────────────────────────────────────────────────────────── */
function HumanROI({
  ht,
  lang
}) {
  const [p1, setP1] = useState(5);
  const [p2, setP2] = useState(20);
  const [p3, setP3] = useState(90);
  const [p4, setP4] = useState(20);
  const [units, setUnits] = useState(3);
  const [budget, setBudget] = useState('');
  const [activeTab, setActiveTab] = useState('cost');
  const [barsVisible, setBarsVisible] = useState(false);
  const barsRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setBarsVisible(true);
    }, {
      threshold: 0.3
    });
    if (barsRef.current) obs.observe(barsRef.current);
    return () => obs.disconnect();
  }, []);
  const annualWaste = p1 * p2 * p3 * 52;
  const errCost = p4 / 100 * annualWaste * 0.8;
  const totalAll = (annualWaste + errCost) * units;
  const savings = totalAll * 0.88;
  const budgetNum = parseFloat((budget || '').replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
  const paybackMonths = budgetNum > 0 ? (budgetNum / savings * 12).toFixed(1) : null;
  const budgetRoiPct = budgetNum > 0 ? Math.round((savings / budgetNum - 1) * 100) : null;
  const refBudget = budgetNum > 0 ? budgetNum : 80000;
  const roiPct = Math.round(savings / refBudget * 100);
  const yr1 = savings,
    yr2 = savings * 1.28,
    yr3 = savings * 1.62,
    maxVal = yr3;
  const fmt = n => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return Math.round(n / 1000) + 'K';
    return Math.round(n) + '';
  };
  const sliders = [{
    v: p1,
    s: setP1,
    min: 1,
    max: 20,
    lbl: ht.rs[0],
    hint: ht.rsHint?.[0] || '',
    unit: ht.ru[0]
  }, {
    v: p2,
    s: setP2,
    min: 2,
    max: 40,
    lbl: ht.rs[1],
    hint: ht.rsHint?.[1] || '',
    unit: ht.ru[1]
  }, {
    v: p3,
    s: setP3,
    min: 20,
    max: 200,
    lbl: ht.rs[2],
    hint: ht.rsHint?.[2] || '',
    unit: ht.ru[2]
  }, {
    v: p4,
    s: setP4,
    min: 1,
    max: 40,
    lbl: ht.rs[3],
    hint: ht.rsHint?.[3] || '',
    unit: ht.ru[3]
  }];
  const TABS = [['cost', lang === 'fr' ? '💸 Coût actuel' : '💸 Current cost'], ['roi', '📈 ROI'], ['scale', lang === 'fr' ? '🚀 Sur 3 ans' : '🚀 3-year']];

  // Dark dashboard card style
  const card = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-dim)',
    borderRadius: 10,
    padding: '16px 18px'
  };
  const mono = {
    fontFamily: "'Space Mono',monospace"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--glass-bg)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 4px 30px rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--glass-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid var(--border-dim)',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#FF5F57'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#FFBD2E'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#28C840'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 9,
      color: '#415a77',
      letterSpacing: '3px',
      textTransform: 'uppercase'
    }
  }, "ROI\xB7SIMULATOR"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#00F0A8',
      boxShadow: '0 0 6px #00F0A8'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 8,
      color: '#00F0A8',
      letterSpacing: '1px'
    }
  }, lang === 'fr' ? 'EN DIRECT' : 'LIVE'))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--glass-bg)',
      borderBottom: '1px solid var(--border-dim)',
      display: 'flex',
      padding: '0 20px'
    }
  }, TABS.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setActiveTab(k),
    style: {
      padding: '10px 16px',
      background: 'transparent',
      border: 'none',
      borderBottom: `2px solid ${activeTab === k ? '#415a77' : 'transparent'}`,
      color: activeTab === k ? '#415a77' : 'var(--text-mute)',
      fontFamily: "'Space Mono',monospace",
      fontSize: 9,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'all .2s'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, sliders.map((r, i) => {
    const pct = (r.v - r.min) / (r.max - r.min) * 100 + '%';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        ...card
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 8,
        color: 'var(--text-sec)',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }
    }, r.lbl), /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 10,
        fontWeight: 700,
        color: '#415a77'
      }
    }, r.v, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 7,
        color: 'var(--text-mute)'
      }
    }, r.unit))), r.hint && /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 7,
        color: 'var(--text-mute)',
        fontStyle: 'italic',
        marginBottom: 6
      }
    }, r.hint), /*#__PURE__*/React.createElement("input", {
      type: "range",
      style: {
        width: '100%',
        height: 5,
        borderRadius: 3,
        appearance: 'none',
        WebkitAppearance: 'none',
        cursor: 'pointer',
        outline: 'none',
        background: `linear-gradient(90deg,#007AFF ${pct},rgba(0,122,255,0.15) ${pct})`
      },
      min: r.min,
      max: r.max,
      value: r.v,
      onChange: e => r.s(+e.target.value)
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 8,
      color: 'var(--text-sec)',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    }
  }, ht.ru2), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 10,
      fontWeight: 700,
      color: '#415a77'
    }
  }, units, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 7,
      color: 'var(--text-mute)'
    }
  }, ht.ru3))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)',
      fontStyle: 'italic',
      marginBottom: 6
    }
  }, lang === 'fr' ? 'Chaque équipe multiplie l\'économie' : 'Each team multiplies savings'), /*#__PURE__*/React.createElement("input", {
    type: "range",
    style: {
      width: '100%',
      height: 5,
      borderRadius: 3,
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      outline: 'none',
      background: `linear-gradient(90deg,#007AFF ${(units - 1) / 14 * 100 + '%'},rgba(0,122,255,0.15) ${(units - 1) / 14 * 100 + '%'})`
    },
    min: 1,
    max: 15,
    value: units,
    onChange: e => setUnits(+e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, activeTab === 'cost' && /*#__PURE__*/React.createElement(React.Fragment, null, [[ht.rl[0], annualWaste * units, '#636366'], [ht.rl[1], errCost * units, '#778da9'], [ht.rl[2], totalAll, '#FF3B30']].map(([lbl, val, col], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...card,
      borderLeft: `3px solid ${col}`,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: 3,
      background: `linear-gradient(180deg,${col},transparent)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '2.2rem',
      color: col,
      lineHeight: 1
    }
  }, ht.cur, fmt(val)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      background: 'rgba(255,59,48,0.06)',
      border: '1px solid rgba(255,59,48,0.22)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, lang === 'fr' ? 'Coût mensuel (÷12)' : 'Monthly cost (÷12)'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '2.8rem',
      color: '#FF3B30',
      lineHeight: 1
    }
  }, ht.cur, fmt(totalAll / 12), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1rem',
      color: 'var(--text-mute)'
    }
  }, "/", lang === 'fr' ? 'mois' : 'mo')))), activeTab === 'roi' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      borderTop: '3px solid #007AFF'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)',
      textTransform: 'uppercase',
      marginBottom: 4
    }
  }, ht.rl[3]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '1.8rem',
      color: 'var(--text-sec)',
      lineHeight: 1
    }
  }, ht.cur, fmt(totalAll * 0.12))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(52,199,89,0.07)',
      border: '1px solid rgba(52,199,89,0.28)',
      borderRadius: 10,
      padding: '20px 18px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 8,
      color: 'var(--accent3)',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, ht.rl[4]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '3.5rem',
      color: 'var(--accent3)',
      lineHeight: 1
    }
  }, ht.cur, fmt(savings)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 8,
      color: 'var(--text-mute)',
      marginTop: 6
    }
  }, lang === 'fr' ? 'par an · après automatisation' : 'per year · after automation'), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 9,
      color: '#415a77',
      marginTop: 8,
      fontWeight: 700
    }
  }, ht.rr1, " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--accent3)'
    }
  }, roiPct, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)',
      letterSpacing: '1px',
      marginBottom: 8
    }
  }, ht.rb), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: ht.rbp,
    value: budget,
    onChange: e => setBudget(e.target.value),
    style: {
      width: '100%',
      background: 'var(--glass-bg)',
      border: '1px solid var(--border)',
      borderRadius: 6,
      padding: '8px 12px',
      color: 'var(--text)',
      fontFamily: "'Space Mono',monospace",
      fontSize: 11,
      outline: 'none',
      boxSizing: 'border-box'
    }
  })), paybackMonths && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(0,240,168,0.06)',
      border: '1px solid rgba(0,240,168,0.25)',
      borderRadius: 10,
      padding: '14px 16px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '2rem',
      color: '#00F0A8',
      lineHeight: 1
    }
  }, paybackMonths), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)'
    }
  }, ht.rr2)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '2rem',
      color: '#415a77',
      lineHeight: 1
    }
  }, budgetRoiPct, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)'
    }
  }, "ROI net")))), activeTab === 'scale' && /*#__PURE__*/React.createElement("div", {
    ref: barsRef
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 8,
      color: 'var(--text-sec)',
      marginBottom: 14,
      lineHeight: 1.6
    }
  }, lang === 'fr' ? 'Plus on automatise, plus le ROI grandit' : 'The more we automate, the bigger the ROI'), [[lang === 'fr' ? 'An 1' : 'Year 1', yr1, '#415a77', lang === 'fr' ? 'Automatisation initiale' : 'Initial automation'], [lang === 'fr' ? 'An 2' : 'Year 2', yr2, '#5AC8FA', lang === 'fr' ? '+28% nouveaux workflows' : '+28% new workflows'], [lang === 'fr' ? 'An 3' : 'Year 3', yr3, '#778da9', lang === 'fr' ? 'Pleine échelle' : 'Full scale']].map(([yr, val, col, note], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      ...card,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 9,
      color: col,
      fontWeight: 700
    }
  }, yr), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '1.6rem',
      color: col,
      lineHeight: 1
    }
  }, ht.cur, fmt(val))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--border-dim)',
      borderRadius: 3,
      overflow: 'hidden',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: barsVisible ? `${val / maxVal * 100}%` : '0%',
      background: col,
      borderRadius: 3,
      transition: 'width 1.2s ease ' + i * 0.3 + 's'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)'
    }
  }, note))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(0,240,168,0.06)',
      border: '1px solid rgba(0,240,168,0.2)',
      borderRadius: 10,
      padding: '14px 16px',
      textAlign: 'center',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      fontSize: 7,
      color: 'var(--text-mute)',
      marginBottom: 4
    }
  }, lang === 'fr' ? 'Total 3 ans' : '3-year total'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '2.5rem',
      color: '#00F0A8',
      lineHeight: 1
    }
  }, ht.cur, fmt(yr1 + yr2 + yr3)))))));
}

/* ─── HUMAN APP ──────────────────────────────────────────────────────────────── */

const CHAPTERS = [{
  id: 'about',
  label: 'INTRO'
}, {
  id: 'dashboard',
  label: 'PROOF'
}, {
  id: 'pipeline',
  label: 'DEMO'
}, {
  id: 'experience',
  label: 'XP'
}, {
  id: 'projects',
  label: 'WORK'
}, {
  id: 'certificates',
  label: 'CERTS'
}, {
  id: 'roi',
  label: 'ROI'
}, {
  id: 'terminal',
  label: 'CHAT'
}, {
  id: 'contact',
  label: 'HIRE'
}];

/* ─── CERT WALL ──────────────────────────────────────────────────────────────── */
function CertWall({
  lang
}) {
  const FEATURED = [{
    title: 'Claude with the\nAnthropic API',
    issuer: 'Anthropic',
    date: 'March 5, 2026',
    id: 'ghr3bg5ef69v',
    url: 'https://verify.skilljar.com/c/ghr3bg5ef69v',
    tier: lang === 'fr' ? '⚡ Avancé · API' : '⚡ Advanced · API',
    accent: '#00F0A8',
    bg: 'linear-gradient(145deg,rgba(0,20,14,.95) 0%,rgba(0,35,22,.9) 100%)',
    border: 'rgba(0,240,168,.35)',
    glow: 'rgba(0,240,168,.18)',
    tierBg: 'rgba(0,240,168,.12)',
    tierBorder: 'rgba(0,240,168,.3)',
    linkBg: 'rgba(0,240,168,.1)',
    linkBorder: 'rgba(0,240,168,.35)'
  }, {
    title: 'Claude Code\nin Action',
    issuer: 'Anthropic',
    date: 'March 5, 2026',
    id: 'iwggxbjy345g',
    url: 'https://verify.skilljar.com/c/iwggxbjy345g',
    tier: lang === 'fr' ? '🔥 Avancé · Claude Code' : '🔥 Advanced · Claude Code',
    accent: '#415a77',
    bg: 'linear-gradient(145deg,rgba(14,8,28,.97) 0%,rgba(26,10,46,.92) 100%)',
    border: 'rgba(191,58,255,.4)',
    glow: 'rgba(191,58,255,.2)',
    tierBg: 'rgba(191,58,255,.12)',
    tierBorder: 'rgba(191,58,255,.35)',
    linkBg: 'rgba(191,58,255,.1)',
    linkBorder: 'rgba(191,58,255,.4)'
  }, {
    title: 'Model Context Protocol:\nAdvanced Topics',
    issuer: 'Anthropic',
    date: 'March 5, 2026',
    id: 'zx7bi5fvcntf',
    url: 'https://verify.skilljar.com/c/zx7bi5fvcntf',
    tier: lang === 'fr' ? '🏆 Avancé · MCP' : '🏆 Advanced · MCP',
    accent: '#FF2D78',
    bg: 'linear-gradient(145deg,rgba(20,4,12,.97) 0%,rgba(32,6,18,.92) 100%)',
    border: 'rgba(255,45,120,.38)',
    glow: 'rgba(255,45,120,.18)',
    tierBg: 'rgba(255,45,120,.1)',
    tierBorder: 'rgba(255,45,120,.32)',
    linkBg: 'rgba(255,45,120,.1)',
    linkBorder: 'rgba(255,45,120,.38)'
  }];
  const SECONDARY = [{
    title: 'Intro to Model Context Protocol',
    issuer: 'Anthropic',
    id: 'qi53hzrjg8gn',
    url: 'https://verify.skilljar.com/c/qi53hzrjg8gn',
    accent: '#415a77',
    top: 'rgba(191,58,255,1)'
  }, {
    title: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    id: 'dqyxy2w7mzeh',
    url: 'https://verify.skilljar.com/c/dqyxy2w7mzeh',
    accent: '#415a77',
    top: 'rgba(191,58,255,.7)'
  }, {
    title: 'Claude 101',
    issuer: 'Anthropic',
    id: '6d7hy9sqveor',
    url: 'https://verify.skilljar.com/c/6d7hy9sqveor',
    accent: '#415a77',
    top: 'rgba(191,58,255,.5)'
  }, {
    title: 'AI Fluency for Educators',
    issuer: 'Anthropic × UCC · HEA',
    id: 't2uvpt7tmqon',
    url: 'https://verify.skilljar.com/c/t2uvpt7tmqon',
    accent: '#C46A1F',
    top: 'rgba(196,106,31,.9)'
  }, {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic × UCC · HEA',
    id: 'zzx6ga534uim',
    url: 'https://verify.skilljar.com/c/zzx6ga534uim',
    accent: '#C46A1F',
    top: 'rgba(196,106,31,.9)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "cert-wall"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cert-stat-banner"
  }, [['8', lang === 'fr' ? 'CERTIFICATIONS TOTALES' : 'TOTAL CERTS'], null, ['3', lang === 'fr' ? 'NIVEAU AVANCÉ' : 'ADVANCED LEVEL'], null, ['2', lang === 'fr' ? 'CO-DIPLÔMÉS UNIVERSITÉ' : 'UNIVERSITY CO-ISSUED'], null, ['Mar 2026', lang === 'fr' ? 'TOUTES OBTENUES LE' : 'ALL EARNED']].map((item, i) => item === null ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cert-stat-div"
  }) : /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cert-stat-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cert-stat-n"
  }, item[0]), /*#__PURE__*/React.createElement("span", {
    className: "cert-stat-l"
  }, item[1])))), /*#__PURE__*/React.createElement("div", {
    className: "cert-featured-row"
  }, FEATURED.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cert-feat",
    style: {
      background: c.bg,
      border: `1px solid ${c.border}`,
      boxShadow: `0 20px 60px ${c.glow},inset 0 1px 0 rgba(255,255,255,.04)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cert-feat-num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "cert-feat-tier",
    style: {
      color: c.accent,
      background: c.tierBg,
      border: `1px solid ${c.tierBorder}`
    }
  }, c.tier), /*#__PURE__*/React.createElement("div", {
    className: "cert-feat-title"
  }, c.title.split('\n').map((l, j) => /*#__PURE__*/React.createElement("span", {
    key: j
  }, l, j === 0 && /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("div", {
    className: "cert-feat-issuer"
  }, c.issuer), /*#__PURE__*/React.createElement("div", {
    className: "cert-feat-footer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cert-feat-date"
  }, "\uD83D\uDCC5 ", c.date), /*#__PURE__*/React.createElement("a", {
    href: c.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "cert-feat-link",
    style: {
      background: c.linkBg,
      border: `1px solid ${c.linkBorder}`,
      color: c.accent
    }
  }, "\u2705 ", lang === 'fr' ? 'Vérifier' : 'Verify', " \u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "cert-secondary-row"
  }, SECONDARY.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cert-sec"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: c.top,
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cert-sec-title"
  }, c.title), /*#__PURE__*/React.createElement("div", {
    className: "cert-sec-issuer"
  }, c.issuer), /*#__PURE__*/React.createElement("a", {
    href: c.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "cert-sec-link"
  }, "\u2705 ", lang === 'fr' ? 'Vérifier →' : 'Verify →')))));
}
function PortfolioApp({
  initLang,
  mode,
  onSwitchMode
}) {
  const [theme, setTheme] = useState(() => mode === 'human' ? 'light' : 'dark');
  const [lang, setLang] = useState(initLang || 'en');
  const [activeExp, setActiveExp] = useState(0);
  const [tagFilter, setTagFilter] = useState('All');
  const [showEgg, setShowEgg] = useState(false);
  const [showRecruiter, setShowRecruiter] = useState(false);
  const [showEli5, setShowEli5] = useState(false);
  const [activeCountry, setActiveCountry] = useState(null);
  const [soundOn, setSoundOn] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [typed, setTyped] = useState('');
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const t = (mode === 'human' ? TH : T)[lang];
  const exps = EXPERIENCES[lang];
  const exp = exps[activeExp] || exps[0];
  const skills = SKILLS[lang];
  const countries = COUNTRIES[lang];
  const LINES = mode === 'human' ? {
    en: ['Time saver.', 'Excel killer.', 'Report automator.', 'Revenue booster.', 'Decision enabler.'],
    fr: ['Gain de temps.', 'Rapports automatisés.', 'Zéro saisie manuelle.', 'Hausse de revenus.', 'Aide à la décision.']
  } : {
    en: ['BI Engineer.', 'AI Architect.', 'Revenue Optimizer.', 'Automation Dealer.', 'Data Storyteller.'],
    fr: ['Ingénieur BI.', 'Architecte IA.', 'Optimiseur de Revenus.', 'Dealer d\'Automatisation.', 'Data Storyteller.']
  };
  useEffect(() => setActiveExp(0), [lang]);
  useEffect(() => setTagFilter(t.expFilterAll), [lang]);

  // Typewriter
  useEffect(() => {
    const lines = LINES[lang],
      cur = lines[lineIdx % lines.length];
    const tm = setTimeout(() => {
      if (!deleting) {
        if (charIdx < cur.length) {
          setTyped(cur.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else setTimeout(() => setDeleting(true), 1800);
      } else {
        if (charIdx > 0) {
          setTyped(cur.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setLineIdx(i => (i + 1) % lines.length);
        }
      }
    }, deleting ? 36 : 65);
    return () => clearTimeout(tm);
  }, [charIdx, deleting, lineIdx, lang]);
  useEffect(() => {
    const t = mode === 'human' ? 'light' : 'dark';
    setTheme(t);
    document.body.setAttribute('data-theme', t);
  }, [mode]);
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    window.konamiCb = () => setShowEgg(true);
    return () => {
      window.konamiCb = null;
    };
  }, []);
  useEffect(() => {
    const h = e => {
      if (e.key === 'Escape') {
        setShowEgg(false);
        setActiveCountry(null);
        setShowRecruiter(false);
        setShowCalendly(false);
        setShowEli5(false);
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  // Chapter nav
  useEffect(() => {
    const nav = document.getElementById('chapter-nav');
    if (!nav) return;
    nav.innerHTML = '';
    CHAPTERS.forEach((ch, i) => {
      const d = document.createElement('div');
      d.className = `ch-dot${i === activeChapter ? ' active' : ''}`;
      d.title = ch.label;
      d.innerHTML = `<span class="ch-label">${ch.label}</span>`;
      d.onclick = () => document.getElementById(ch.id)?.scrollIntoView({
        behavior: 'smooth'
      });
      nav.appendChild(d);
    });
  }, [activeChapter]);

  // Scroll observer for XP + chapter tracking
  useEffect(() => {
    // On mount, immediately reveal any .reveal elements already in viewport
    const revealInView = () => {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
      });
    };
    revealInView();
    window.addEventListener('scroll', revealInView, {
      passive: true
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          const id = e.target.id;
          if (id) {
            window.XP && window.XP.earn(id);
            const ci = CHAPTERS.findIndex(c => c.id === id);
            if (ci >= 0) setActiveChapter(ci);
          }
        }
      });
    }, {
      threshold: .05,
      rootMargin: '0px 0px -20px 0px'
    });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    // observe sections for XP
    CHAPTERS.forEach(ch => {
      const el = document.getElementById(ch.id);
      if (el) obs.observe(el);
    });
    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', revealInView);
    };
  }, []);
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
    // Force reveal on elements inside target section that may be in viewport
    setTimeout(() => {
      el.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(r => r.classList.add('visible'));
    }, 600);
  };
  const allTags = [t.expFilterAll, ...new Set(exps.flatMap(e => e.tags))];
  const years = (new Date() - new Date('2022-03-01')) / (1000 * 60 * 60 * 24 * 365.25);
  return /*#__PURE__*/React.createElement(LangCtx.Provider, {
    value: lang
  }, showEgg && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: () => setShowEgg(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "3rem",
      marginBottom: "12px",
      animation: "float 2s infinite"
    }
  }, "\uD83D\uDD79\uFE0F"), /*#__PURE__*/React.createElement("h2", null, t.eggTitle), /*#__PURE__*/React.createElement("p", null, t.eggP1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), t.eggP2, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent1)"
    }
  }, t.eggP3)), /*#__PURE__*/React.createElement("div", {
    className: "modal-code"
  }, t.eggCode.split('\n').map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: () => setShowEgg(false)
  }, t.eggClose))), showRecruiter && /*#__PURE__*/React.createElement(RecruiterModal, {
    lang: lang,
    onClose: () => setShowRecruiter(false)
  }), showEli5 && /*#__PURE__*/React.createElement(ELI5Modal, {
    lang: lang,
    onClose: () => setShowEli5(false),
    onContact: () => {
      setShowEli5(false);
      scrollTo('contact');
    }
  }), showCalendly && /*#__PURE__*/React.createElement(CalendlyModal, {
    lang: lang,
    onClose: () => setShowCalendly(false)
  }), activeCountry && /*#__PURE__*/React.createElement(CountryModal, {
    country: activeCountry,
    onClose: () => setActiveCountry(null),
    lang: lang
  }), /*#__PURE__*/React.createElement(ScrollToTop, {
    lang: lang
  }), /*#__PURE__*/React.createElement(VisitorBadge, {
    lang: lang
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-logo",
    onClick: () => scrollTo('about')
  }, mode === 'human' ? /*#__PURE__*/React.createElement("span", null, "Antoine", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#415a77'
    }
  }, ".")) : 'ADM.SYS // v5'), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, t.nav.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "nav-link",
    onClick: () => scrollTo(s)
  }, t.navLabels[s]))), /*#__PURE__*/React.createElement("div", {
    className: "nav-controls"
  }, mode !== 'human' && /*#__PURE__*/React.createElement("button", {
    className: `sound-btn${soundOn ? ' on' : ''}`,
    onClick: () => {
      const s = SFX.toggle();
      setSoundOn(s);
    },
    title: soundOn ? 'Sound OFF' : 'Sound ON (8-bit)'
  }, soundOn ? '🔊' : '🔇'), /*#__PURE__*/React.createElement("a", {
    href: "https://calendly.com/antoinedemaintenant-alumni/30min",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 20,
      background: 'rgba(0,240,168,.1)',
      border: '1px solid rgba(0,240,168,.35)',
      color: 'var(--accent3)',
      fontFamily: "'Space Mono',monospace",
      fontSize: '.48rem',
      letterSpacing: '1px',
      textDecoration: 'none',
      transition: 'all .25s',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      animation: 'ctapulse 3s ease-in-out infinite'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(0,240,168,.2)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(0,240,168,.1)';
      e.currentTarget.style.transform = 'none';
    }
  }, "\uD83D\uDCC5 ", lang === 'fr' ? '30 min →' : '30 min →'), /*#__PURE__*/React.createElement("button", {
    className: `recruiter-btn${showRecruiter ? ' active' : ''}`,
    onClick: () => {
      setShowRecruiter(true);
      SFX.click();
    }
  }, t.recruiterBtn, " \u26A1"), /*#__PURE__*/React.createElement("button", {
    className: "mode-switch-btn",
    onClick: onSwitchMode,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 20,
      border: '1px solid var(--border-dim)',
      background: 'var(--bg-card)',
      cursor: 'pointer',
      transition: 'all .25s',
      fontFamily: "'Space Mono',monospace",
      fontSize: '.52rem',
      color: 'var(--text-dim)',
      letterSpacing: '1px',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9,
      background: mode === 'human' ? 'rgba(0,240,168,.2)' : 'rgba(191,58,255,.2)',
      border: `1.5px solid ${mode === 'human' ? '#00F0A8' : '#415a77'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 10,
      flexShrink: 0
    }
  }, mode === 'human' ? '🧠' : '⚡'), mode === 'human' ? lang === 'fr' ? '⚙️ Tech' : '⚙️ Tech' : '🧭 ' + (lang === 'fr' ? 'Métier' : 'Biz')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1px'
    }
  }, [['en', '🇬🇧'], ['fr', '🇫🇷']].map(([l, f]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: `theme-btn${lang === l ? ' active' : ''}`,
    onClick: () => setLang(l)
  }, f, " ", l.toUpperCase()))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 5,
      background: mode === 'human' ? 'rgba(0,122,255,.04)' : 'rgba(191,58,255,.06)',
      borderTop: `1px solid ${mode === 'human' ? 'rgba(0,122,255,.1)' : 'rgba(191,58,255,.15)'}`,
      borderBottom: `1px solid ${mode === 'human' ? 'rgba(0,122,255,.1)' : 'rgba(191,58,255,.15)'}`,
      padding: '10px 0',
      overflow: 'hidden',
      marginTop: '60px',
      display: 'flex',
      alignItems: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      whiteSpace: 'nowrap',
      animation: 'tickerScroll 28s linear infinite',
      flexShrink: 0,
      alignItems: 'center'
    }
  }, [0, 1].map(ri => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: 'flex',
      gap: 0,
      alignItems: 'center'
    }
  }, (lang === 'fr' ? [{
    emoji: '⚡',
    txt: '85% de temps reporting économisé'
  }, {
    emoji: '🤖',
    txt: '30+ workflows automatisés'
  }, {
    emoji: '📊',
    txt: '270% efficacité pipeline'
  }, {
    emoji: '🚀',
    txt: 'Analytics 0→1 en 6 mois'
  }, {
    emoji: '🧠',
    txt: 'IA · n8n · Python · LLMs'
  }, {
    emoji: '🔍',
    txt: '40 concurrents · 1 300 SKUs · daily'
  }, {
    emoji: '💰',
    txt: 'ROI 400-600% an 1'
  }, {
    emoji: '🌍',
    txt: 'France · Dubai · Canada · Singapour'
  }] : [{
    emoji: '⚡',
    txt: '85% reporting time saved'
  }, {
    emoji: '🤖',
    txt: '30+ workflows automated'
  }, {
    emoji: '📊',
    txt: '270% pipeline efficiency'
  }, {
    emoji: '🚀',
    txt: 'Analytics dept 0→1 in 6 months'
  }, {
    emoji: '🧠',
    txt: 'AI · n8n · Python · LLMs'
  }, {
    emoji: '🔍',
    txt: '40 competitors · 1,300 SKUs · daily'
  }, {
    emoji: '💰',
    txt: '400-600% ROI Year 1'
  }, {
    emoji: '🌍',
    txt: 'France · Dubai · Canada · Singapore'
  }]).map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 28px',
      fontFamily: "'Space Mono',monospace",
      fontSize: '.58rem',
      color: mode === 'human' ? 'rgba(60,60,67,.55)' : 'rgba(200,180,240,.75)',
      letterSpacing: '1.5px',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.8rem'
    }
  }, item.emoji), /*#__PURE__*/React.createElement("span", null, item.txt), /*#__PURE__*/React.createElement("span", {
    style: {
      color: mode === 'human' ? 'rgba(0,122,255,.3)' : 'rgba(191,58,255,.4)',
      marginLeft: 4
    }
  }, "\u25C6"))))))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "hero",
    style: mode === 'human' ? {
      minHeight: '92vh',
      paddingTop: 0,
      paddingBottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 80px',
      maxWidth: 'none'
    } : {}
  }, mode === 'human' ?
  /*#__PURE__*/
  /* ── HUMAN MODE: two-column full-width ── */
  React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
      maxWidth: 1400,
      margin: '0 auto',
      width: '100%',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-wrap",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-badge-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-badge-status"
  }, lang === 'fr' ? 'Disponible' : 'Available'), ['France', 'Dubai', 'Canada', 'Singapore', 'Remote'].map((city, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "hero-city-pill"
  }, city))), /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glitch-wrap",
    "data-text": "ANTOINE"
  }, "ANTOINE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "DE")), /*#__PURE__*/React.createElement("div", {
    className: "outline"
  }, "MAINTENANT")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      maxWidth: 520,
      marginBottom: 36
    }
  }, t.heroSub1, " ", /*#__PURE__*/React.createElement("span", null, t.heroSub1b), " ", t.heroSub2), /*#__PURE__*/React.createElement("div", {
    className: "typewriter-row",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "prompt"
  }, '>'), typed, /*#__PURE__*/React.createElement("span", {
    className: "t-cursor"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: () => scrollTo('roi')
  }, t.ctaRoi), /*#__PURE__*/React.createElement("a", {
    href: "https://raw.githubusercontent.com/demaintenant-antoine-pro/portfolio-ai/main/CV_Antoine.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-secondary"
  }, t.ctaCV)), /*#__PURE__*/React.createElement(LiveCounter, {
    lang: lang
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, [{
    n: '85%',
    badge: '↑ +270%',
    badgeColor: '#778da9',
    title: lang === 'fr' ? 'Reporting économisé' : 'Reporting time saved',
    sub: lang === 'fr' ? '30+ workflows automatisés · 0 intervention manuelle' : '30+ workflows automated · 0 manual intervention',
    color: '#415a77'
  }, {
    n: '400%',
    badge: 'ROI Y1',
    badgeColor: '#778da9',
    title: lang === 'fr' ? 'Retour sur investissement' : 'Return on investment',
    sub: lang === 'fr' ? 'Analytics dept 0→1 en 6 mois · MAPE 4.2%' : 'Analytics dept 0→1 in 6 months · MAPE 4.2%',
    color: 'var(--accent4)'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 20,
      boxShadow: 'var(--glass-shadow)',
      padding: '28px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      minWidth: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 800,
      fontSize: '1.9rem',
      color: s.color,
      lineHeight: 1,
      letterSpacing: '-2px'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 600,
      fontSize: '.62rem',
      color: s.badgeColor,
      marginTop: 4,
      letterSpacing: '.3px'
    }
  }, s.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: 'var(--glass-border)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 700,
      fontSize: '.8rem',
      color: 'var(--text)',
      lineHeight: 1.3,
      marginBottom: 6
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontSize: '.65rem',
      color: 'var(--text-mute)',
      lineHeight: 1.5
    }
  }, s.sub)))))) :
  /*#__PURE__*/
  /* ── TECH MODE: original layout ── */
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-badge-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero-badge-status"
  }, lang === 'fr' ? 'Disponible' : 'Available'), ['France', 'Dubai', 'Canada', 'Singapore', 'Remote'].map((city, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "hero-city-pill"
  }, city))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '40px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glitch-wrap",
    "data-text": "ANTOINE"
  }, "ANTOINE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "DE")), /*#__PURE__*/React.createElement("div", {
    className: "outline"
  }, "MAINTENANT")))), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, t.heroSub1, " ", /*#__PURE__*/React.createElement("span", null, t.heroSub1b), " ", t.heroSub2, /*#__PURE__*/React.createElement("br", null), t.heroSub3, /*#__PURE__*/React.createElement("br", null), t.heroSub4), /*#__PURE__*/React.createElement("span", {
    className: "xp-badge-inline"
  }, "\u26A1 ", years.toFixed(1), " ", t.xp), /*#__PURE__*/React.createElement("div", {
    className: "typewriter-row",
    style: {
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "prompt"
  }, '>'), typed, /*#__PURE__*/React.createElement("span", {
    className: "t-cursor"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: () => scrollTo('roi')
  }, t.ctaRoi), /*#__PURE__*/React.createElement("a", {
    href: "https://raw.githubusercontent.com/demaintenant-antoine-pro/portfolio-ai/main/CV_Antoine.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-secondary"
  }, t.ctaCV)), /*#__PURE__*/React.createElement(LiveCounter, {
    lang: lang
  }))), /*#__PURE__*/React.createElement(FloatingPills, {
    lang: lang,
    mode: mode
  }), /*#__PURE__*/React.createElement("div", {
    id: "dashboard",
    className: "section-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-full-inner",
    style: {
      paddingTop: '80px',
      paddingBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-header",
    style: {
      padding: '0 0 32px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-label"
  }, "Chapter 01 \u2014 The Proof"), /*#__PURE__*/React.createElement("div", {
    className: "chapter-num",
    style: {
      position: 'absolute',
      top: '-20px',
      right: '0',
      fontSize: '5rem',
      color: 'var(--border-dim)'
    }
  }, "01")), /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.dashEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.dashTitle, " ", /*#__PURE__*/React.createElement("em", null, t.dashTitleEm)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.84rem',
      color: 'var(--text-sec)',
      maxWidth: '560px',
      marginBottom: '32px',
      lineHeight: '1.8'
    }
  }, t.dashDesc), /*#__PURE__*/React.createElement(Dashboard, {
    lang: lang
  }))), /*#__PURE__*/React.createElement("section", {
    id: "pipeline",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-label"
  }, "Chapter 02 \u2014 The Demo"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      right: '0',
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '5rem',
      color: 'var(--border-dim)',
      lineHeight: 1
    }
  }, "02")), /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.pipeEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.pipeTitle, " ", /*#__PURE__*/React.createElement("em", null, t.pipeTitleEm)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.84rem',
      color: 'var(--text-sec)',
      maxWidth: '560px',
      marginBottom: '32px',
      lineHeight: '1.8'
    }
  }, t.pipeDesc), /*#__PURE__*/React.createElement(Pipeline, {
    lang: lang
  })), /*#__PURE__*/React.createElement("section", {
    id: "experience",
    className: "section",
    style: {
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-label"
  }, "Chapter 03 \u2014 The Journey"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      right: '0',
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '5rem',
      color: 'var(--border-dim)',
      lineHeight: 1
    }
  }, "03")), /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.expEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.expTitle, " ", /*#__PURE__*/React.createElement("em", null, t.expTitleEm)), /*#__PURE__*/React.createElement("div", {
    className: "exp-filter-bar"
  }, allTags.map(tag => /*#__PURE__*/React.createElement("button", {
    key: tag,
    className: `filter-btn${tagFilter === tag ? ' active' : ''}`,
    onClick: () => {
      setTagFilter(tag);
      if (tag !== t.expFilterAll) {
        const m = exps.findIndex(e => e.tags.includes(tag));
        if (m >= 0) setActiveExp(m);
      } else setActiveExp(0);
    }
  }, tag))), /*#__PURE__*/React.createElement("div", {
    className: "exp-layout reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-nav"
  }, exps.map(e => {
    const hidden = tagFilter !== t.expFilterAll && !e.tags.includes(tagFilter);
    if (hidden) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      className: `exp-nav-item${activeExp === e.id ? ' active' : ''}`,
      onClick: () => setActiveExp(e.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "exp-nav-date"
    }, e.date), /*#__PURE__*/React.createElement("div", {
      className: "exp-nav-role"
    }, e.role), /*#__PURE__*/React.createElement("div", {
      className: "exp-nav-co"
    }, e.company));
  })), /*#__PURE__*/React.createElement("div", {
    className: "exp-detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-detail-role"
  }, exp.role), /*#__PURE__*/React.createElement("div", {
    className: "exp-detail-meta"
  }, /*#__PURE__*/React.createElement("span", null, exp.company), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, exp.location), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, exp.revenue)), /*#__PURE__*/React.createElement("ul", {
    className: "exp-bullets"
  }, exp.highlights.map((h, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, h))), /*#__PURE__*/React.createElement("div", {
    className: "exp-tags"
  }, exp.tags.map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    className: "exp-tag"
  }, tag))))))), /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.skillsEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.skillsTitle, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-dim)'
    }
  }, t.skillsTitleDim)), /*#__PURE__*/React.createElement("div", {
    className: "skills-grid"
  }, skills.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `skill-card reveal reveal-delay-${i % 3 + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "skill-icon"
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "skill-name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "skill-desc"
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "skill-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skill-fill",
    style: {
      width: `${s.pct}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "skill-pct"
  }, s.pct, "%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow",
    style: {
      marginBottom: '0'
    }
  }, t.radarTitle), /*#__PURE__*/React.createElement(RadarChart, {
    lang: lang
  }))), /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "section",
    style: {
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-label"
  }, "Chapter 04 \u2014 The Work"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      right: '0',
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '5rem',
      color: 'var(--border-dim)',
      lineHeight: 1
    }
  }, "04")), /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.projectsEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.projectsTitle, " ", /*#__PURE__*/React.createElement("em", null, t.projectsTitleEm)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.84rem',
      color: 'var(--text-sec)',
      maxWidth: '560px',
      marginBottom: '36px',
      lineHeight: '1.8'
    }
  }, t.projectsDesc), /*#__PURE__*/React.createElement("div", {
    className: "projects-grid"
  }, [{
    icon: '📊',
    badge: lang === 'fr' ? 'DASHBOARD IA SUR-MESURE' : 'AI DECISION DASHBOARD',
    title: lang === 'fr' ? 'Dashboard décisionnel construit sur votre pain point exact' : 'Decision dashboard built on your exact pain point',
    desc: lang === 'fr' ? 'KPIs actionnables, alertes seuils critiques, prévisions 13 semaines (MAPE 4,2%), veille concurrentielle 40+ marques. Un outil de décision — pas un template.' : 'Actionable KPIs, critical threshold alerts, 13-week forecasting (MAPE 4.2%), competitive intelligence on 40+ brands. A decision tool — not a template.',
    tags: ['Power BI', 'Python', 'Prophet', 'SQL'],
    roi: {
      label: lang === 'fr' ? 'ROI MESURÉ' : 'MEASURED ROI',
      items: [{
        v: lang === 'fr' ? '−40h/mois' : '−40h/month',
        d: lang === 'fr' ? 'reporting manuel' : 'manual reporting'
      }, {
        v: '4.2%',
        d: 'MAPE forecast'
      }, {
        v: lang === 'fr' ? '< 5 min' : '< 5 min',
        d: lang === 'fr' ? 'délai alerte' : 'alert latency'
      }]
    }
  }, {
    icon: '🤖',
    badge: lang === 'fr' ? 'AUTOMATISATION FINANCIÈRE' : 'FINANCIAL AUTOMATION',
    title: lang === 'fr' ? 'Clôture financière en 6 min — sans aucune saisie manuelle' : 'Financial close in 6 minutes — zero manual input',
    desc: lang === 'fr' ? 'Export ERP → transformation → commentaires IA → Word/PDF → envoi automatique équipes et DG. Ce qui prenait 2 jours se fait seul à 6h du matin.' : 'ERP export → transformation → AI commentary → Word/PDF → auto delivery to teams & CEO. What took 2 days now runs alone at 6am.',
    tags: ['N8N', 'GPT-4', 'Python', 'SAP'],
    roi: {
      label: lang === 'fr' ? 'GAINS DIRECTS' : 'DIRECT SAVINGS',
      items: [{
        v: '−95%',
        d: lang === 'fr' ? 'erreurs saisie' : 'entry errors'
      }, {
        v: '6 min',
        d: lang === 'fr' ? 'vs 2 jours avant' : 'vs 2 days before'
      }, {
        v: '12+',
        d: lang === 'fr' ? 'équipes servies' : 'teams served'
      }]
    }
  }, {
    icon: '🔗',
    badge: lang === 'fr' ? 'PROSPECTION LINKEDIN AUTO' : 'LINKEDIN AUTO PROSPECTING',
    title: lang === 'fr' ? '100 prospects qualifiés par jour — séquence personnalisée par IA' : '100 qualified prospects per day — AI-personalized outreach',
    desc: lang === 'fr' ? 'Ciblage ICP via Sales Navigator, messages personnalisés par IA, séquence 3 touchpoints, sync CRM automatique. Le pipeline se remplit pendant que vous travaillez.' : 'ICP targeting via Sales Navigator, AI-personalized messages, 3-touchpoint sequence, auto CRM sync. The pipeline fills while you work.',
    tags: ['Sales Navigator', 'GPT-4', 'Make.com', 'CRM'],
    roi: {
      label: lang === 'fr' ? 'RÉSULTATS' : 'RESULTS',
      items: [{
        v: '5×',
        d: lang === 'fr' ? 'taux de réponse' : 'reply rate'
      }, {
        v: '100/j',
        d: lang === 'fr' ? 'prospects auto' : 'auto prospects'
      }, {
        v: '−80%',
        d: lang === 'fr' ? 'temps prospection' : 'prospecting time'
      }]
    }
  }, {
    icon: '📦',
    badge: lang === 'fr' ? 'SUPPLY CHAIN IA' : 'AI SUPPLY CHAIN',
    title: lang === 'fr' ? 'Zéro rupture de stock — prévision et commande automatique' : 'Zero stockouts — AI forecasting and automatic purchase orders',
    desc: lang === 'fr' ? 'Prévision niveau SKU 8 semaines, détection risques rupture, génération PO automatique, workflow approbation digitalisé. Surplus et ruptures éliminés simultanément.' : '8-week SKU-level forecasting, stockout risk detection, automatic PO generation, digitized approval workflow. Surplus and stockouts eliminated simultaneously.',
    tags: ['Python', 'Prophet', 'N8N', 'ERP'],
    roi: {
      label: lang === 'fr' ? 'IMPACT MESURÉ' : 'MEASURED IMPACT',
      items: [{
        v: '−80%',
        d: lang === 'fr' ? 'ruptures de stock' : 'stockouts'
      }, {
        v: '8 sem.',
        d: lang === 'fr' ? 'horizon prévision' : 'forecast horizon'
      }, {
        v: 'PO',
        d: lang === 'fr' ? 'auto en 1 clic' : 'auto in 1 click'
      }]
    }
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `project-card reveal reveal-delay-${i % 2 + 1}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "project-badge"
  }, p.badge), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.5rem',
      lineHeight: 1
    }
  }, p.icon)), /*#__PURE__*/React.createElement("div", {
    className: "project-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "project-desc"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(0,240,168,0.06)',
      border: '1px solid rgba(0,240,168,0.22)',
      borderRadius: 8,
      padding: '10px 14px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: '1.5px',
      color: '#00F0A8',
      fontFamily: "'Space Mono',monospace",
      marginBottom: 8
    }
  }, p.roi.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, p.roi.items.map((r, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: '#00F0A8',
      fontFamily: "'Space Grotesk',sans-serif"
    }
  }, r.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: 'var(--text-dim)',
      marginTop: 2,
      lineHeight: 1.3
    }
  }, r.d))))), /*#__PURE__*/React.createElement("div", {
    className: "project-tags"
  }, p.tags.map((tg, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "project-tag"
  }, tg)))))))), mode !== 'human' && /*#__PURE__*/React.createElement("section", {
    id: "stack",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.stackEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.stackTitle, " ", /*#__PURE__*/React.createElement("em", null, t.stackTitleEm)), /*#__PURE__*/React.createElement("div", {
    className: "stack-grid reveal"
  }, STACK.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stack-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-level"
  }, s.level), /*#__PURE__*/React.createElement("span", {
    className: "stack-emoji"
  }, s.e), /*#__PURE__*/React.createElement("div", {
    className: "stack-name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "stack-cat"
  }, s.cat)))))), /*#__PURE__*/React.createElement("section", {
    id: "terminal",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-label"
  }, "Chapter 06 \u2014 The Interface"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      right: '0',
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '5rem',
      color: 'var(--border-dim)',
      lineHeight: 1
    }
  }, "06")), /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.terminalEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.terminalTitle, " ", /*#__PURE__*/React.createElement("em", null, t.terminalTitleEm)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.84rem',
      color: 'var(--text-sec)',
      maxWidth: '560px',
      marginBottom: '32px',
      lineHeight: '1.8'
    }
  }, t.terminalDesc), /*#__PURE__*/React.createElement(TerminalChatbot, {
    lang: lang
  }))), /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    className: "section",
    style: {
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.testiEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.testiTitle, " ", /*#__PURE__*/React.createElement("em", null, t.testiTitleEm)), /*#__PURE__*/React.createElement("div", {
    className: "testi-grid reveal"
  }, TESTIMONIALS.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "testi-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "testi-stars"
  }, '★'.repeat(item.stars)), /*#__PURE__*/React.createElement("div", {
    className: "testi-quote"
  }, "\"", item.q[lang], "\""), /*#__PURE__*/React.createElement("div", {
    className: "testi-author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "testi-avatar",
    style: {
      background: item.color + '22',
      borderColor: item.color,
      border: '1.5px solid',
      padding: 0,
      overflow: 'hidden'
    }
  }, item.photo ? /*#__PURE__*/React.createElement("img", {
    src: item.photo,
    alt: item.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: item.color,
      fontWeight: 700,
      fontSize: '.6rem'
    }
  }, item.avatar)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "testi-name"
  }, item.name), /*#__PURE__*/React.createElement("div", {
    className: "testi-role"
  }, item.title[lang], " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#415a77'
    }
  }, item.company)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.4rem',
      color: 'var(--text-mute)',
      letterSpacing: '1px',
      marginTop: '3px'
    }
  }, item.date[lang]), /*#__PURE__*/React.createElement("a", {
    href: item.linkedin,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.4rem',
      color: 'var(--accent3)',
      letterSpacing: '1px',
      marginTop: '4px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD17"), " LinkedIn")))))))), /*#__PURE__*/React.createElement("section", {
    id: "certificates",
    className: "section reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, "\uD83C\uDF93 ", lang === 'fr' ? 'Anthropic School · Mars 2026' : 'Anthropic School · March 2026'), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, lang === 'fr' ? /*#__PURE__*/React.createElement(React.Fragment, null, "8 ", /*#__PURE__*/React.createElement("em", null, "Certifications"), " obtenues") : /*#__PURE__*/React.createElement(React.Fragment, null, "8 ", /*#__PURE__*/React.createElement("em", null, "Certifications"), " earned")), /*#__PURE__*/React.createElement(CertWall, {
    lang: lang
  }))), /*#__PURE__*/React.createElement("div", {
    className: "world-map-section",
    style: {
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto',
      padding: '0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 600,
      fontSize: '.65rem',
      color: 'var(--accent2)',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\uD83C\uDF0D ", lang === 'fr' ? 'Présence Internationale' : 'International Presence'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 800,
      fontSize: 'clamp(2rem,4vw,3.2rem)',
      color: 'var(--text)',
      letterSpacing: '-1.5px',
      lineHeight: 1.05,
      marginBottom: 0
    }
  }, lang === 'fr' ? 'Opérationnel' : 'Operational', /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--accent3)',
      fontStyle: 'italic'
    }
  }, lang === 'fr' ? 'partout dans le monde.' : 'anywhere in the world.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 16,
      padding: '16px 24px',
      textAlign: 'center',
      boxShadow: 'var(--glass-shadow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 800,
      fontSize: '3rem',
      color: '#415a77',
      lineHeight: 1,
      letterSpacing: '-2px'
    }
  }, countries.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 500,
      fontSize: '.65rem',
      color: 'var(--text-mute)',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginTop: 4
    }
  }, lang === 'fr' ? 'pays vécus' : 'countries lived'))), /*#__PURE__*/React.createElement(WorldMap, {
    countries: countries,
    setActiveCountry: setActiveCountry,
    lang: lang
  }))), /*#__PURE__*/React.createElement(VisitorMap, {
    lang: lang,
    mode: mode
  }), /*#__PURE__*/React.createElement("section", {
    id: "blog",
    className: "section",
    style: {
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1500px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.blogEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.blogTitle, " ", /*#__PURE__*/React.createElement("em", null, t.blogTitleEm)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.84rem',
      color: 'var(--text-sec)',
      maxWidth: '560px',
      marginBottom: '36px',
      lineHeight: '1.8'
    }
  }, t.blogDesc), /*#__PURE__*/React.createElement(Blog, {
    lang: lang
  }))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chapter-label"
  }, "Chapter 07 \u2014 The Decision"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20px',
      right: '0',
      fontFamily: "'Bebas Neue',sans-serif",
      fontSize: '5rem',
      color: 'var(--border-dim)',
      lineHeight: 1
    }
  }, "07")), /*#__PURE__*/React.createElement("div", {
    className: "section-eyebrow"
  }, t.contactEyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, t.contactTitle, " ", /*#__PURE__*/React.createElement("em", null, t.contactTitleEm)), /*#__PURE__*/React.createElement("div", {
    className: "contact-layout reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-cards"
  }, /*#__PURE__*/React.createElement(CopyEmailButton, {
    lang: lang
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/antoine2maintenant/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-icon"
  }, "\uD83D\uDD17"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-lbl"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("div", {
    className: "contact-val"
  }, "linkedin.com/in/antoine2maintenant"))), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/demaintenant-antoine-pro",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-icon"
  }, "\uD83D\uDC19"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-lbl"
  }, "GitHub"), /*#__PURE__*/React.createElement("div", {
    className: "contact-val"
  }, "github.com/demaintenant-antoine-pro"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-card",
    style: {
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-icon"
  }, "\uD83C\uDF0D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-lbl"
  }, t.contactLocation), /*#__PURE__*/React.createElement("div", {
    className: "contact-val"
  }, "France \xB7 Dubai \xB7 Canada \xB7 Singapore \xB7 Remote"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-card",
    style: {
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-icon"
  }, "\uD83D\uDCDE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-lbl"
  }, lang === 'fr' ? 'Ligne directe (Canada)' : 'Direct Line (Canada)'), /*#__PURE__*/React.createElement("div", {
    className: "contact-val"
  }, "+1 (263) 385-6506"))), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/33610825921?text=Bonjour%20Antoine%2C%20j'ai%20vu%20votre%20portfolio%20et%20je%20voudrais%20en%20savoir%20plus%20!",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "contact-icon"
  }, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "contact-lbl"
  }, "WhatsApp ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent3)',
      fontSize: '.38rem',
      marginLeft: '5px',
      fontFamily: "'Space Mono',monospace"
    }
  }, lang === 'fr' ? 'MESSAGE PRÉREMPLI' : 'PRE-FILLED MSG')), /*#__PURE__*/React.createElement("div", {
    className: "contact-val"
  }, "+33 6 10 82 59 21 \u2014 ", lang === 'fr' ? 'Envoyer un message →' : 'Send a message →')))), /*#__PURE__*/React.createElement("div", {
    className: "contact-cta reveal reveal-right"
  }, /*#__PURE__*/React.createElement("h3", null, t.contactH3), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t.contactP
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Space Mono',monospace",
      fontSize: '.56rem',
      color: '#415a77',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "status-dot"
  }), t.contactStatus), /*#__PURE__*/React.createElement("button", {
    className: "book-call-btn",
    onClick: () => {
      setShowCalendly(true);
      SFX.click();
    }
  }, "\uD83D\uDCC5 ", lang === 'fr' ? 'Réserver un call de 30 min' : 'Book a 30-min call', " \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px',
      fontFamily: "'Space Mono',monospace",
      fontSize: '.44rem',
      color: 'var(--text-mute)',
      letterSpacing: '2px'
    }
  }, t.footerKonami));
}

/* ─── ROOT APP ─────────────────────────────────────────────────────────────── */
function App() {
  const [mode, setMode] = useState(() => window._psMode || null);
  const [initLang, setInitLang] = useState(() => window._psLang || 'en');
  useEffect(() => {
    function handler(e) {
      setMode(e.detail.mode);
      setInitLang(e.detail.lang || 'en');
    }
    window.addEventListener('psChosen', handler);
    const poll = setInterval(() => {
      if (window._psMode && !window._psBootPending) {
        setMode(m => m || window._psMode);
        setInitLang(l => l || window._psLang || 'en');
        clearInterval(poll);
      }
    }, 150);
    return () => {
      window.removeEventListener('psChosen', handler);
      clearInterval(poll);
    };
  }, []);
  function switchMode() {
    const next = mode === 'human' ? 'tech' : 'human';
    setMode(next);
    if (next === 'human') {
      document.body.classList.add('human-mode');
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('human-mode');
      document.body.setAttribute('data-theme', 'dark');
    }
  }
  if (!mode) return null;
  return /*#__PURE__*/React.createElement(PortfolioApp, {
    initLang: initLang,
    mode: mode,
    onSwitchMode: switchMode
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
