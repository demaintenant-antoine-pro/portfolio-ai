const {useState,useEffect,useRef,useCallback,createContext,useContext}=React;
const LangCtx=createContext('en');

/* ─── TRANSLATIONS ────────────────────────────────────────────────────────── */
const T={en:{
  nav:['about','experience','testimonials','dashboard','pipeline','projects','stack','certificates','blog','contact','terminal'],
  navLabels:{about:'About',dashboard:'Dashboard',pipeline:'Pipeline',experience:'XP',projects:'Projects',stack:'Stack',certificates:'Certs',terminal:'Terminal',testimonials:'Reviews',blog:'Blog',contact:'Contact'},
  heroSub1:"AI expert. I embed",heroSub1b:"agentic systems",heroSub2:" into your business ops — and coach C-levels to run them daily. 60–85% time saved.",heroSub3:"AI Architect · Automation · Executive Training · 5+ yrs CPG, SaaS, CSR.",
  xp:"yrs XP",ctaContact:"Get in Touch",ctaCV:"↓ Download CV",
  liveCounter:"Hours of reporting saved since you loaded this page",
  metrics:[{n:'85',s:'%',l:'Processing Capacity Gained'},{n:'270',s:'%',l:'Pipeline Efficiency Boost'},{n:'30',s:'+',l:'Workflows Automated'},{n:'6',s:'mo',l:'Analytics Dept Built 0→1'}],
  dashEyebrow:'Live Demo',dashTitle:'Executive',dashTitleEm:'Dashboard',
  dashDesc:"Replica of a live executive dashboard — real-time revenue, ML forecasting, zero manual intervention.",
  dashKpis:[['$2.4M','YTD Revenue','↑ +18% vs LY'],['85%','Reporting Saved','30+ workflows'],['4.2%','Forecast MAPE','↓ from 8.1%'],['10+','Power BI Dashboards','All BUs'],['30+','Channels','Daily, auto'],['06:00','Auto-Report','0 manual']],
  dashChart1:'Revenue + Forecast · Enterprise Client',dashChart2:'Revenue by Channel',
  pipeEyebrow:'Interactive Demo',pipeTitle:'Automation',pipeTitleEm:'Pipeline',
  pipeDesc:"Raw POS data → stakeholder reports in under 6 min. Try dragging stages to reorder them.",
  pipeReady:'Idle. Press RUN.',pipeRun:'▶ RUN PIPELINE',pipeRunning:'⟳ RUNNING...',
  pipeDragHint:'💡 Drag stages to reorder — then try to RUN',
  pipeWrongMsgs:["❌ ERROR: Forecast before Clean — Prophet is not a garbage collector.","❌ FATAL: Notify before Power BI? Emailing null?","❌ CRITICAL: Ingestion after Forecast? Predicting data that doesn't exist yet.","❌ 500: Clean before Ingestion? Can't mop a floor that isn't installed.","❌ ERROR: Notify before Forecast? Bold strategy. Let me know how that goes."],
  expEyebrow:'Career Timeline',expTitle:'Where I built',expTitleEm:'things that still run.',expFilterAll:'All',
  skillsEyebrow:'Arsenal',skillsTitle:'Tools I use.',skillsTitleDim:'Not just listed.',radarTitle:'Competency Radar',
  projectsEyebrow:'Signature Projects',projectsTitle:'What I actually',projectsTitleEm:'built.',projectsDesc:'3 categories · Auto reports · AI dashboards on your pain point · Custom automations by department.',
  stackEyebrow:'Tech Stack',stackTitle:'Tools I ship with.',stackTitleEm:'Not just buzzwords.',
  terminalEyebrow:'Interactive Terminal',terminalTitle:'Ask me',terminalTitleEm:'anything.',
  terminalDesc:"Type commands to explore. Try: help, whoami, skills, ./hire_antoine.sh",terminalHint:"Type 'help' to start · TAB autocomplete · ↑↓ history",
  testiEyebrow:'Social Proof',testiTitle:"Don't take",testiTitleEm:"my word for it.",testiBlur:'Anonymous · NDA',testiSoon:'COMING SOON',
  worldLabel:'Click a country →',countryClose:'CLOSE // ESC',
  blogEyebrow:'Notes & Thoughts',blogTitle:'What I think',blogTitleEm:'out loud.',blogDesc:"AI, automation and data — without the jargon.",blogRead:'Read →',blogReadTime:'min read',blogClose:'CLOSE',
  contactEyebrow:'Contact',contactTitle:"Let's build",contactTitleEm:"something real.",
  contactCopyHint:'CLICK TO COPY',contactCopied:'✓ Copied!',contactLocation:'Location',
  contactH3:"I'm selective about what I build next.",contactP:"If you have a data problem costing real money — manual reports, broken pipelines, zero visibility — I'm interested.<br/><br/>If you want charts to be prettier, I'll politely refer you to Canva.",
  contactStatus:'Open to new missions · Worldwide · 2026',visitors:'visitors',
  footerKonami:"// Try the Konami code ↑↑↓↓←→←→BA",
  eggTitle:'KONAMI DETECTED',eggP1:"You're a developer, a gamer, or dangerously bored.",eggP2:"Either way — you passed.",eggP3:"People who find easter eggs ship features.",
  eggCode:"// Secret: 85% pipeline automation achieved.\n// Time to implement: 3 months.\n// Manual alternative: never.",eggClose:'CLOSE',scrollTop:'↑',
  recruiterBtn:'RECRUITER MODE',recruiterTitle:'RECRUITER MODE',recruiterSub:'Personalize this portfolio for your profile',
  recruiterQ:'Who are you today?',
  recruiterProfiles:[
    {icon:'🏢',label:'Executive / C-Suite',sub:'I care about ROI, team impact, and business outcomes'},
    {icon:'💻',label:'Tech Lead / CTO',sub:'Show me the architecture, stack, and code quality'},
    {icon:'📊',label:'Data / Analytics Manager',sub:'I want to see methodology and tooling depth'},
    {icon:'🤝',label:'HR / Talent Acquisition',sub:'Give me the career summary and soft skills'},
  ],
},fr:{
  nav:['about','experience','testimonials','dashboard','pipeline','projects','stack','certificates','blog','contact','terminal'],
  navLabels:{about:'Profil',dashboard:'Dashboard',pipeline:'Pipeline',experience:'Expérience',projects:'Projets',stack:'Stack',certificates:'Certifs',terminal:'Terminal',testimonials:'Avis',blog:'Blog',contact:'Contact'},
  heroSub1:"Expert IA. J'intègre",heroSub1b:"des systèmes agentiques",heroSub2:" dans vos opérations — et je forme vos C-levels à les piloter au quotidien. 60 à 85 % de temps gagné.",heroSub3:"Architecte IA · Automatisation · Formation dirigeants · 5+ ans CPG, SaaS, RSE.",
  xp:"ans d'XP",ctaContact:"Me contacter",ctaCV:"↓ Télécharger CV",
  liveCounter:"Heures de reporting économisées depuis que vous êtes sur cette page",
  metrics:[{n:'85',s:'%',l:'Gain capacité de traitement'},{n:'270',s:'%',l:'Efficacité pipeline boostée'},{n:'30',s:'+',l:'Workflows automatisés'},{n:'6',s:'mois',l:'Dept Analytics 0→1'}],
  dashEyebrow:'Démo Live',dashTitle:'Dashboard',dashTitleEm:'Exécutif',
  dashDesc:"Réplique d'un dashboard exécutif réel — suivi revenus temps réel, prévisions ML, zéro intervention manuelle.",
  dashKpis:[['2,4M€','CA YTD','↑ +18% vs N-1'],['85%','Temps reporting','30+ workflows'],['4,2%','MAPE Prévisions','↓ depuis 8,1%'],['10+','Dashboards Power BI','Toutes BUs'],['30+','Canaux','Daily, auto'],['06:00','Rapport Auto','0 manuel']],
  dashChart1:'Tendance CA + Prévision · Client Entreprise',dashChart2:'CA par Canal',
  pipeEyebrow:'Démo Interactive',pipeTitle:'Pipeline',pipeTitleEm:"d'Automatisation",
  pipeDesc:"Données brutes POS → rapport exécutif en moins de 6 min. Glissez les étapes pour les réordonner.",
  pipeReady:'Inactif. Appuyez sur RUN.',pipeRun:'▶ LANCER',pipeRunning:'⟳ EN COURS...',
  pipeDragHint:'💡 Glissez les étapes pour les réordonner — puis lancez RUN',
  pipeWrongMsgs:["❌ ERREUR : Prévision avant Nettoyage — Prophet n'est pas un ramasse-miettes.","❌ FATAL : Notification avant Power BI ? Email envoyé à null ?","❌ CRITIQUE : Ingestion après Prévision ? Vous prédisez des données inexistantes.","❌ 500 : Nettoyage avant Ingestion ? On ne nettoie pas un sol inexistant.","❌ ERREUR : Notifier avant Prévoir ? Stratégie audacieuse."],
  expEyebrow:'Parcours',expTitle:"Là où j'ai construit",expTitleEm:'des choses qui tournent encore.',expFilterAll:'Tous',
  skillsEyebrow:'Arsenal',skillsTitle:'Mes outils.',skillsTitleDim:'Pas juste une liste.',radarTitle:'Radar de Compétences',
  projectsEyebrow:'Projets Signature',projectsTitle:'Ce que j\'ai vraiment',projectsTitleEm:'construit.',projectsDesc:'3 catégories · Rapports auto · Dashboards IA sur votre pain point · Automatisations customs par département.',
  stackEyebrow:'Stack Technique',stackTitle:'Ce avec quoi je livre.',stackTitleEm:'Pas des buzzwords.',
  terminalEyebrow:'Terminal Interactif',terminalTitle:'Posez-moi',terminalTitleEm:'vos questions.',
  terminalDesc:"Tapez des commandes pour explorer. Essayez : help, whoami, skills, ./hire_antoine.sh",terminalHint:"Tapez 'help' · TAB pour compléter · ↑↓ historique",
  testiEyebrow:'Preuves Sociales',testiTitle:"Ne prenez pas",testiTitleEm:"ma parole.",testiBlur:'Anonyme · NDA',testiSoon:'BIENTÔT',
  worldLabel:'Cliquez un pays →',countryClose:'FERMER',
  blogEyebrow:'Notes & Réflexions',blogTitle:'Ce que je pense',blogTitleEm:'tout haut.',blogDesc:"IA, automatisation et data — sans jargon inutile.",blogRead:'Lire →',blogReadTime:'min',blogClose:'FERMER',
  contactEyebrow:'Contact',contactTitle:"Construisons",contactTitleEm:"quelque chose de réel.",
  contactCopyHint:'CLIQUER POUR COPIER',contactCopied:'✓ Copié !',contactLocation:'Localisation',
  contactH3:"Je suis sélectif sur ce que je construis ensuite.",contactP:"Si vous avez un problème data qui coûte vraiment — rapports manuels, pipelines cassés, zéro visibilité — je suis intéressé.<br/><br/>Si vous voulez des graphiques plus jolis, je vous oriente vers Canva.",
  contactStatus:'Disponible partout dans le monde · 2026',visitors:'visiteurs',
  footerKonami:"// Essayez le code Konami ↑↑↓↓←→←→BA",
  eggTitle:'CODE KONAMI DÉTECTÉ',eggP1:"Développeur, gamer ou dangereusement ennuyé.",eggP2:"Dans tous les cas — test réussi.",eggP3:"Les chercheurs d'easter eggs livrent des features.",
  eggCode:"// Stat secrète : 85% d'automatisation pipeline.\n// Durée implémentation : 3 mois.\n// Alternative manuelle : jamais.",eggClose:'FERMER',scrollTop:'↑',
  recruiterBtn:'MODE RECRUTEUR',recruiterTitle:'MODE RECRUTEUR',recruiterSub:'Personnalisez ce portfolio selon votre profil',
  recruiterQ:'Qui êtes-vous aujourd\'hui ?',
  recruiterProfiles:[
    {icon:'🏢',label:'Dirigeant / C-Suite',sub:'Je veux le ROI, l\'impact business et les résultats'},
    {icon:'💻',label:'Tech Lead / CTO',sub:'Montrez-moi l\'architecture, la stack et la qualité'},
    {icon:'📊',label:'Manager Data / Analytics',sub:'Je veux voir la méthodologie et la maîtrise des outils'},
    {icon:'🤝',label:'RH / Talent Acquisition',sub:'Le résumé de carrière et les soft skills'},
  ],
}};

/* ─── HUMAN TEXTS — même structure que T, langage simple sans jargon ──────── */
const TH={en:{
  nav:['about','experience','testimonials','dashboard','pipeline','projects','certificates','blog','contact','terminal'],
  navLabels:{about:'Home',dashboard:'Proof',pipeline:'Demo',experience:'Journey',projects:'Results',certificates:'Certs',terminal:'Ask me',testimonials:'Reviews',blog:'Blog',contact:'Contact'},
  heroSub1:"I integrate AI into your existing operations",heroSub1b:"connecting your tools, automating your workflows",heroSub2:"— enabling your teams to focus on decisions that drive revenue. Across Finance, Sales, Supply Chain and HR, I turn manual processes into autonomous systems that deliver measurable results.",heroSub3:"AI Transformation · Automation · BI · 5+ years CPG, SaaS & CSR.",
  xp:"yrs experience",ctaContact:"Talk in 30 min",ctaCV:"↓ Download CV",
  liveCounter:"Hours of manual reporting done worldwide since you opened this page",
  metrics:[{n:'85',s:'%',l:'Reporting time saved'},{n:'30',s:'+',l:'Tasks automated'},{n:'6',s:'mo',l:'Analytics dept from zero'},{n:'4.2',s:'%',l:'AI forecast error'}],
  dashEyebrow:'Live Demo',dashTitle:'Real',dashTitleEm:'Executive Dashboard',
  dashDesc:"A live dashboard replica — real revenue tracking, AI forecasting, zero manual work. This is what your team could have.",
  dashKpis:[['$2.4M','YTD Revenue','↑ +18% vs LY'],['85%','Reporting Saved','30+ tasks'],['4.2%','Forecast Error','↓ from 8.1%'],['10+','Dashboards','All teams'],['30+','Channels','Daily, auto'],['06:00','Auto-Report','0 manual']],
  dashChart1:'Revenue + Forecast · Enterprise Client',dashChart2:'Revenue by Channel',
  pipeEyebrow:'Interactive Demo',pipeTitle:'Raw data to inbox',pipeTitleEm:'in 6 minutes.',
  pipeDesc:"This is what happens inside my systems. Raw data in — clean reports out. Try dragging stages to reorder.",
  pipeReady:'Ready. Press RUN.',pipeRun:'▶ RUN',pipeRunning:'⟳ RUNNING...',
  pipeDragHint:'💡 Drag stages to reorder — then RUN to see what happens',
  pipeWrongMsgs:["❌ Forecast before Clean — predicting dirty data won't end well.","❌ Notify before Dashboard — emailing an empty report?","❌ Ingestion after Forecast — can't predict data that doesn't exist.","❌ Clean before Ingestion — cleaning a floor that isn't there.","❌ Notify before Forecast — bold strategy."],
  expEyebrow:'Work History',expTitle:'Where I built',expTitleEm:'things that still run.',expFilterAll:'All',
  skillsEyebrow:'What I know',skillsTitle:'Skills that deliver.',skillsTitleDim:'Used daily.',radarTitle:'Overview',
  projectsEyebrow:'Real Projects',projectsTitle:'What I actually',projectsTitleEm:'built.',projectsDesc:'Systems running today. Real problems solved, real results measured.',
  stackEyebrow:'My Tools',stackTitle:'What I work with.',stackTitleEm:'Every day.',
  terminalEyebrow:'Ask Me Anything',terminalTitle:'I answer',terminalTitleEm:'your questions.',
  terminalDesc:"Ask anything — timeline, what I can automate, how I work. Try: help, whoami, contact",terminalHint:"Type 'help' to start",
  testiEyebrow:'What people say',testiTitle:"Don't take",testiTitleEm:"my word for it.",testiBlur:'Anonymous · NDA',testiSoon:'COMING SOON',
  worldLabel:'Click a country →',countryClose:'CLOSE',
  blogEyebrow:'Thoughts',blogTitle:'What I think',blogTitleEm:'out loud.',blogDesc:"Automation, data and AI — no jargon.",blogRead:'Read →',blogReadTime:'min read',blogClose:'CLOSE',
  contactEyebrow:'Contact',contactTitle:"Let's solve",contactTitleEm:"something real.",
  contactCopyHint:'CLICK TO COPY',contactCopied:'✓ Copied!',contactLocation:'Location',
  contactH3:"I'm selective about my next project.",contactP:"If you have a real problem — manual reports, broken processes, zero visibility — I'm interested.<br/><br/>If you just want prettier charts, I'll point you to Canva.",
  contactStatus:'Open to new projects · Worldwide · 2026',visitors:'visitors',
  footerKonami:"// Try the Konami code ↑↑↓↓←→←→BA",
  eggTitle:'YOU FOUND IT',eggP1:"You explored enough to find this.",eggP2:"That curiosity is exactly what I like.",eggP3:"People who dig deeper ship better work.",
  eggCode:"// What I saved a client last year:\n// 15h/week × 52 = 780 hours recovered.\n// That's 97 working days. Back.",eggClose:'CLOSE',scrollTop:'↑',
  recruiterBtn:'MY PROFILE ⚡',recruiterTitle:'PERSONALIZE THIS',recruiterSub:'Choose your profile for a tailored view',
  recruiterQ:'Who are you today?',
  recruiterProfiles:[
    {icon:'🏢',label:'Executive / CEO / CFO',sub:'I want ROI, business impact, real numbers'},
    {icon:'📊',label:'Operations Manager',sub:'Show me how you help my team'},
    {icon:'🤝',label:'HR / Talent Acquisition',sub:'Career story and soft skills'},
    {icon:'💡',label:'Entrepreneur / Founder',sub:'What can you do for my startup?'},
  ],
},fr:{
  nav:['about','experience','testimonials','dashboard','pipeline','projects','certificates','blog','contact','terminal'],
  navLabels:{about:'Accueil',dashboard:'Preuve',pipeline:'Démo',experience:'Parcours',projects:'Résultats',certificates:'Certifs',terminal:'Posez-moi',testimonials:'Avis',blog:'Blog',contact:'Contact'},
  heroSub1:"J'intègre l'IA dans vos opérations existantes",heroSub1b:"en connectant vos outils et automatisant vos processus",heroSub2:"— pour permettre à vos équipes de se concentrer sur les décisions à valeur ajoutée. Finance, Sales, Supply Chain, RH : je transforme le travail manuel en systèmes autonomes qui délivrent des résultats mesurables.",heroSub3:"Transformation IA · Automatisation · BI · 5+ ans CPG, SaaS & RSE.",
  xp:"ans d'expérience",ctaContact:"Parler en 30 min",ctaCV:"↓ Télécharger CV",
  liveCounter:"Heures de reporting manuel faites dans le monde depuis que vous êtes sur cette page",
  metrics:[{n:'85',s:'%',l:'Temps de reporting économisé'},{n:'30',s:'+',l:'Tâches automatisées'},{n:'6',s:'mois',l:'Dept analytics de zéro'},{n:'4,2',s:'%',l:'Taux erreur prévisions IA'}],
  dashEyebrow:'Démo Live',dashTitle:'Vrai',dashTitleEm:'Dashboard Exécutif',
  dashDesc:"Une réplique d'un dashboard réel — suivi revenus, prévisions IA, zéro travail manuel. C'est ce que votre équipe pourrait avoir.",
  dashKpis:[['2,4M€','CA YTD','↑ +18% vs N-1'],['85%','Reporting économisé','30+ tâches'],['4,2%','Taux erreur','↓ depuis 8,1%'],['10+','Dashboards','Toutes équipes'],['30+','Canaux','Daily, auto'],['06:00','Rapport Auto','0 manuel']],
  dashChart1:'Tendance CA + Prévision · Client Entreprise',dashChart2:'CA par Canal',
  pipeEyebrow:'Démo Interactive',pipeTitle:'De la donnée brute',pipeTitleEm:'à votre boîte mail en 6 min.',
  pipeDesc:"C'est ce qui se passe dans mes systèmes. Données brutes en entrée — rapports propres en sortie. Glissez les étapes pour les réordonner.",
  pipeReady:'Prêt. Appuyez sur RUN.',pipeRun:'▶ LANCER',pipeRunning:'⟳ EN COURS...',
  pipeDragHint:'💡 Glissez les étapes — puis RUN pour voir ce qui se passe',
  pipeWrongMsgs:["❌ Prévision avant Nettoyage — prédire des données sales, mauvaise idée.","❌ Notification avant Dashboard — envoyer un rapport vide ?","❌ Ingestion après Prévision — prédire des données inexistantes.","❌ Nettoyage avant Ingestion — nettoyer ce qui n'existe pas encore.","❌ Notifier avant Prévoir — stratégie audacieuse."],
  expEyebrow:'Expériences',expTitle:"Là où j'ai construit",expTitleEm:'des choses qui tournent encore.',expFilterAll:'Tous',
  skillsEyebrow:'Ce que je sais faire',skillsTitle:'Compétences qui livrent.',skillsTitleDim:'Au quotidien.',radarTitle:'Vue d\'ensemble',
  projectsEyebrow:'Projets réels',projectsTitle:"Ce que j'ai vraiment",projectsTitleEm:'construit.',projectsDesc:'Des systèmes en production. Des problèmes réels résolus, des résultats mesurés.',
  stackEyebrow:'Mes outils',stackTitle:'Ce avec quoi je travaille.',stackTitleEm:'Tous les jours.',
  terminalEyebrow:"Posez-moi n'importe quoi",terminalTitle:'Je réponds à',terminalTitleEm:'vos questions.',
  terminalDesc:"Posez n'importe quelle question — tarifs, délais, ce que je peux automatiser. Essayez : help, tarifs, contact",terminalHint:"Tapez 'help' pour commencer",
  testiEyebrow:'Ce que disent les autres',testiTitle:"Ne prenez pas",testiTitleEm:"ma parole.",testiBlur:'Anonyme · NDA',testiSoon:'BIENTÔT',
  worldLabel:'Cliquez un pays →',countryClose:'FERMER',
  blogEyebrow:'Réflexions',blogTitle:'Ce que je pense',blogTitleEm:'tout haut.',blogDesc:"Automatisation, data et IA — sans jargon.",blogRead:'Lire →',blogReadTime:'min',blogClose:'FERMER',
  contactEyebrow:'Contact',contactTitle:"Résolvons",contactTitleEm:"quelque chose de réel.",
  contactCopyHint:'CLIQUER POUR COPIER',contactCopied:'✓ Copié !',contactLocation:'Localisation',
  contactH3:"Je suis sélectif sur mon prochain projet.",contactP:"Si vous avez un problème réel — rapports manuels, processus cassés, zéro visibilité — je suis intéressé.<br/><br/>Si vous voulez juste des graphiques plus jolis, je vous oriente vers Canva.",
  contactStatus:'Disponible partout dans le monde · 2026',visitors:'visiteurs',
  footerKonami:"// Essayez le code Konami ↑↑↓↓←→←→BA",
  eggTitle:'VOUS L\'AVEZ TROUVÉ',eggP1:"Vous avez exploré assez pour trouver ça.",eggP2:"Ce type de curiosité, c'est exactement ce que j'apprécie.",eggP3:"Les gens qui cherchent plus loin livrent mieux.",
  eggCode:"// Ce que j'ai économisé à un client l'an dernier :\n// 15h/semaine × 52 = 780h récupérées.\n// Soit 97 jours de travail. Rendus.",eggClose:'FERMER',scrollTop:'↑',
  recruiterBtn:'MON PROFIL ⚡',recruiterTitle:'PERSONNALISEZ',recruiterSub:'Choisissez votre profil pour une vue adaptée',
  recruiterQ:'Qui êtes-vous aujourd\'hui ?',
  recruiterProfiles:[
    {icon:'🏢',label:'Dirigeant / CEO / CFO',sub:'Je veux le ROI, l\'impact business et les chiffres'},
    {icon:'📊',label:'Manager Opérationnel',sub:'Montrez-moi comment vous aidez mon équipe'},
    {icon:'🤝',label:'RH / Talent Acquisition',sub:'Le parcours et les qualités humaines'},
    {icon:'💡',label:'Entrepreneur / Fondateur',sub:'Que pouvez-vous faire pour ma startup ?'},
  ],
}};

/* ─── RECRUITER PROFILES ────────────────────────────────────────────────────── */
const RECRUITER_PROFILES={
  executive:{
    en:{title:'Optimized for Executive View',highlights:['85% reduction in reporting workload → ~1 FTE recovered','270% sales pipeline efficiency via CRM automation','Built Analytics dept from 0 in 6 months · Still running today','ROI on hiring: typically 400–600% in year 1'],note:"You care about outcomes. Here's what I deliver: autonomous systems that give your team back time and your leadership real visibility — at scale, without hand-holding."},
    fr:{title:'Vue optimisée Dirigeant',highlights:['85% de charge reporting économisée → ~1 ETP récupéré','270% d\'efficacité pipeline commercial via automatisation CRM','Dept Analytics construit de 0 en 6 mois · Tourne encore aujourd\'hui','ROI du recrutement : typiquement 400–600% en année 1'],note:"Vous voulez des résultats. Voici ce que je livre : des systèmes autonomes qui rendent du temps à vos équipes et une vraie visibilité à votre direction — à l'échelle, sans micromanagement."}},
  tech:{
    en:{title:'Optimized for Tech View',highlights:['Python + n8n agentic pipelines (LLM orchestration)','Scrapy + Selenium web scraping at scale (1,300 SKUs daily)','Prophet ML forecasting · MAPE 4.2% on 13-week horizon','React frontend · SQL · Git · REST APIs · Cloud-ready'],note:"Stack is Python/n8n/Power BI/LLMs. I write clean, maintainable code. I architect for reliability and automation-first. The pipeline you see in this portfolio runs in production."},
    fr:{title:'Vue optimisée Tech',highlights:['Pipelines agentiques Python + n8n (orchestration LLM)','Web scraping Scrapy + Selenium à l\'échelle (1 300 SKUs/jour)','Prévision ML Prophet · MAPE 4,2% sur horizon 13 semaines','React · SQL · Git · API REST · Cloud-ready'],note:"Stack : Python/n8n/Power BI/LLMs. Code propre, maintenable. Architecture orientée fiabilité et automation-first. Le pipeline visible dans ce portfolio tourne en production."}},
  data:{
    en:{title:'Optimized for Data View',highlights:['NLP sentiment pipeline · 10,000+ reviews/month · auto-reporting','SKU-level demand forecasting · STL decomposition + Prophet','Power BI governance · DAX · 10+ dashboards · all business units','Data quality automation · error detection · OOS scanning'],note:"Methodology: start with the business question, work backwards to the data. I document, I govern, I version. The output is always something a non-technical stakeholder can act on."},
    fr:{title:'Vue optimisée Data',highlights:['Pipeline NLP sentiment · 10 000+ avis/mois · rapports auto','Prévision demand SKU-level · décomposition STL + Prophet','Gouvernance Power BI · DAX · 10+ dashboards · toutes BUs','Automatisation qualité data · détection erreurs · scan OOS'],note:"Méthodologie : partir de la question business, remonter vers la data. Je documente, je gouverne, je versionne. L'output est toujours actionnable par un stakeholder non-technique."}},
  hr:{
    en:{title:'Optimized for HR View',highlights:['5+ years across CPG, SaaS, CSR · France, Spain, USA, Canada','Built teams & systems from zero · Autonomous & self-directed','Bilingual FR/EN · Multicultural · Relocatable globally · Remote-ready','Open worldwide: France, Dubai, Canada, Singapore, Europe & beyond'],note:"I'm a builder who communicates clearly, ships fast, and always ties work back to business impact. Available for CDI, CDD, or freelance missions. Open to opportunities worldwide — France, Dubai, Canada, Singapore are preferences but I'm genuinely flexible."},
    fr:{title:'Vue optimisée RH',highlights:['5+ ans en CPG, SaaS, RSE · France, Espagne, USA, Canada','Construit équipes & systèmes de 0 · Autonome & proactif','Bilingue FR/EN · Multiculturel · Mobile internationalement · Remote-ready','Ouvert partout : France, Dubai, Canada, Singapour, Europe'],note:"Je suis un builder qui communique clairement, livre vite et relie toujours le travail à l'impact business. Disponible CDI, CDD ou mission freelance. Ouvert aux opportunités mondiales — préférence France, Dubai, Canada, Singapour mais genuinement flexible."}}
};

/* ─── DATA ────────────────────────────────────────────────────────────────── */
const EXPERIENCES={
  en:[
    {id:0,date:"Jun 2025 – Present",role:"AI Specialist & BI Lead",company:"NAOS – Bioderma · NORAM",location:"Montréal, Canada",revenue:"€950M",
     highlights:["Architecting enterprise-wide Generative AI & Agentic workflow integration across North American operations.","Engineering AI agent networks (n8n, Python, LLMs) for end-to-end autonomous data pipelines.","Built daily competitive intelligence scraper: 40+ competitors, 1,300 SKUs — promos, OOS, launches, pricing, sentiment — auto Power BI every morning.","Master sales automation: merges all rep extracts, flags errors, detects OOS, splits sell-out by rep, generates dashboards — fully hands-free.","85% gain in processing capacity by migrating 30+ manual workstreams.","Working in Agile sprints: 2-week delivery cycles, continuous improvement, zero endless planning."],
     tags:["n8n","Python","LLMs","Power BI","Agentic AI","Web Scraping","NLP","Stock Forecasting","Agile"]},
    {id:1,date:"May 2024 – Jun 2025",role:"Business Analyst (VIE)",company:"NAOS – Bioderma · USA",location:"United States",revenue:"€950M",
     highlights:["Built the US Analytics department from zero — governance, protocols, frameworks in 6 months.","10+ automated Power BI dashboards with real-time cross-BU visibility.","SKU-level sell-through forecasting for major retail partners.","Stock forecasting model reducing OOS events across 5 retail channels.","NLP pipeline analyzing 10,000+ customer reviews monthly."],
     tags:["Power BI","Forecasting","Retail","Stock Planning","NLP","Data Governance"]},
    {id:2,date:"Feb 2023 – Feb 2024",role:"Business Developer",company:"Reech Influence Cloud · SaaS",location:"Paris, France",revenue:"€13M",
     highlights:["First Luxury and CAC40 clients — unlocked new high-value market segment.","270% sales pipeline efficiency boost through CRM process redesign."],
     tags:["Sales Strategy","CRM","Luxury","CAC40","HubSpot"]},
    {id:3,date:"Mar – Jul 2022",role:"Data Analyst (Master Thesis)",company:"NOOS · CSR",location:"Madrid, Spain",revenue:"€9M",
     highlights:["ML & NLP models for B2B employee engagement via semantic analysis.","Automated 15,000+ data points with Python & Power BI."],
     tags:["Python","NLP","ML","Power BI","B2B"]},
  ],
  fr:[
    {id:0,date:"Juin 2025 – Présent",role:"Spécialiste IA & BI Lead",company:"NAOS – Bioderma · NORAM",location:"Montréal, Canada",revenue:"950M€",
     highlights:["Architecture IA Générative & workflows Agentiques à l'échelle NORAM.","Réseaux d'agents IA (n8n, Python, LLMs) pour des pipelines de données autonomes.","Scraper de veille concurrentielle quotidien : 40+ concurrents, 1 300 SKUs — promos, ruptures, lancements, prix, sentiment — Power BI auto chaque matin.","Automatisation master ventes : fusion extraits, détection erreurs, scan OOS, répartition sell-out, dashboards — zéro touche.","85% de gain en capacité en migrant 30+ workstreams manuels.","Méthode Agile : sprints de 2 semaines, livraisons continues, zéro réunion inutile."],
     tags:["n8n","Python","LLMs","Power BI","IA Agentique","Web Scraping","NLP","Prévision Stock","Agile"]},
    {id:1,date:"Mai 2024 – Juin 2025",role:"Business Analyst (VIE)",company:"NAOS – Bioderma · USA",location:"États-Unis",revenue:"950M€",
     highlights:["Construction du département Analytics US de zéro en 6 mois.","10+ dashboards Power BI automatisés avec visibilité cross-BU temps réel.","Prévisions sell-through SKU-level pour les grands partenaires retail.","Modèle de prévision de stock réduisant les ruptures sur 5 canaux retail.","Pipeline NLP : 10 000+ avis clients mensuels."],
     tags:["Power BI","Prévision","Retail","Stock Planning","NLP","Gouvernance Data"]},
    {id:2,date:"Fév 2023 – Fév 2024",role:"Business Developer",company:"Reech Influence Cloud · SaaS",location:"Paris, France",revenue:"13M€",
     highlights:["Premiers clients Luxe et CAC40 — nouveau segment haute valeur.","+270% efficacité pipeline commercial via refonte CRM."],
     tags:["Stratégie Commerciale","CRM","Luxe","CAC40","HubSpot"]},
    {id:3,date:"Mars – Juil 2022",role:"Data Analyst (Mémoire Master)",company:"NOOS · RSE",location:"Madrid, Espagne",revenue:"9M€",
     highlights:["Modèles ML & NLP pour l'engagement employé B2B via analyse sémantique.","Automatisation de 15 000+ points de données Python & Power BI."],
     tags:["Python","NLP","ML","Power BI","B2B"]},
  ]
};

const TAG_GROUPS={
  en:[
    {label:'All',matches:null},
    {label:'AI & Auto',matches:['Agentic AI','n8n','LLMs','NLP','ML','Web Scraping']},
    {label:'BI & Data',matches:['Power BI','Python','Forecasting','Stock Forecasting','Stock Planning','Data Governance']},
    {label:'Sales & CRM',matches:['Sales Strategy','CRM','HubSpot','Luxury','CAC40','B2B','Retail']},
  ],
  fr:[
    {label:'Tous',matches:null},
    {label:'IA & Auto',matches:['IA Agentique','n8n','LLMs','NLP','ML','Web Scraping']},
    {label:'BI & Data',matches:['Power BI','Python','Prévision','Prévision Stock','Stock Planning','Gouvernance Data']},
    {label:'Ventes & CRM',matches:['Stratégie Commerciale','CRM','HubSpot','Luxe','CAC40','B2B','Retail']},
  ]
};

const SKILLS={
  en:[{icon:"📊",name:"Power BI",desc:"Enterprise dashboards, DAX, governance",pct:95},{icon:"🤖",name:"Agentic AI",desc:"n8n, LLMs, autonomous pipelines",pct:90},{icon:"🐍",name:"Python",desc:"Forecasting, NLP, ML, data eng.",pct:82},{icon:"⚡",name:"Automation",desc:"End-to-end workflow automation",pct:95},{icon:"📈",name:"Forecasting",desc:"SKU-level models, retail analytics",pct:88},{icon:"💰",name:"Revenue Ops",desc:"Financial reporting, ROI optimization",pct:92}],
  fr:[{icon:"📊",name:"Power BI",desc:"Dashboards entreprise, DAX, gouvernance",pct:95},{icon:"🤖",name:"IA Agentique",desc:"n8n, LLMs, pipelines autonomes",pct:90},{icon:"🐍",name:"Python",desc:"Prévision, NLP, ML, data engineering",pct:82},{icon:"⚡",name:"Automatisation",desc:"Workflows de bout en bout",pct:95},{icon:"📈",name:"Prévision",desc:"Modèles SKU-level, analytics retail",pct:88},{icon:"💰",name:"Revenue Ops",desc:"Reporting financier, optimisation ROI",pct:92}]
};

const RADAR_DATA={
  en:{labels:['BI & Analytics','AI / Automation','Supply & Ops','Data Engineering','Sales / Finance','Communication'],data:[95,90,80,78,85,82],
    details:[{label:'BI & Analytics',pct:95,sub:'Power BI · DAX · KPI design'},{label:'AI / Automation',pct:90,sub:'n8n · LLMs · Agentic pipelines'},{label:'Supply & Ops',pct:80,sub:'Forecasting · Demand planning'},{label:'Data Engineering',pct:78,sub:'Python · SQL · ETL'},{label:'Sales / Finance',pct:85,sub:'Revenue ops · ROI modelling'},{label:'Communication',pct:82,sub:'Executive reporting · Storytelling'}]},
  fr:{labels:['BI & Analytics','IA / Automation','Supply & Ops','Data Engineering','Ventes / Finance','Communication'],data:[95,90,80,78,85,82],
    details:[{label:'BI & Analytics',pct:95,sub:'Power BI · DAX · Design KPI'},{label:'IA / Automation',pct:90,sub:'n8n · LLMs · Pipelines agentiques'},{label:'Supply & Ops',pct:80,sub:'Prévision · Demand planning'},{label:'Data Engineering',pct:78,sub:'Python · SQL · ETL'},{label:'Ventes / Finance',pct:85,sub:'Revenue ops · Modélisation ROI'},{label:'Communication',pct:82,sub:'Reporting exécutif · Storytelling'}]}
};

const STACK=[
  {name:'Power BI',cat:'BI & Analytics',level:'EXPERT',e:'📊'},
  {name:'Python',cat:'Data Engineering',level:'ADVANCED',e:'🐍'},
  {name:'n8n',cat:'Automation',level:'EXPERT',e:'⚡'},
  {name:'Claude AI',cat:'AI / LLM',level:'EXPERT',e:'🤖'},
  {name:'Claude Code',cat:'Coding Agent',level:'EXPERT',e:'💻'},
  {name:'Claude Cowork',cat:'AI Teamwork',level:'ADVANCED',e:'🧩'},
  {name:'Codex',cat:'Coding Agent',level:'ADVANCED',e:'🧠'},
  {name:'GPT-4',cat:'AI / LLM',level:'ADVANCED',e:'🧠'},
  {name:'Obsidian',cat:'Second Brain',level:'EXPERT',e:'🗂️'},
  {name:'SQL',cat:'Database',level:'EXPERT',e:'🗄️'},
  {name:'React',cat:'Frontend',level:'INTERMEDIATE',e:'⚛️'},
  {name:'Git',cat:'DevOps',level:'ADVANCED',e:'🔀'},
  {name:'Excel',cat:'Finance & Ops',level:'EXPERT',e:'📈'},
  {name:'HubSpot',cat:'CRM & Sales',level:'ADVANCED',e:'🎯'},
  {name:'Pandas',cat:'Data Engineering',level:'ADVANCED',e:'🐼'},
  {name:'Notion',cat:'Productivity',level:'ADVANCED',e:'📝'},
];

const PIPELINE_STAGES_DEF={
  en:[{id:'src',icon:'🗄️',label:'Source',detail:'Retail API'},{id:'ing',icon:'⬇️',label:'Ingest',detail:'Python ETL'},{id:'cln',icon:'🧹',label:'Clean',detail:'Pandas'},{id:'mdl',icon:'🤖',label:'Forecast',detail:'Prophet'},{id:'bi',icon:'📊',label:'Power BI',detail:'Embed'},{id:'ntf',icon:'📬',label:'Notify',detail:'Slack+Mail'}],
  fr:[{id:'src',icon:'🗄️',label:'Source',detail:'API Retail'},{id:'ing',icon:'⬇️',label:'Ingestion',detail:'Python ETL'},{id:'cln',icon:'🧹',label:'Nettoyage',detail:'Pandas'},{id:'mdl',icon:'🤖',label:'Prévision',detail:'Prophet'},{id:'bi',icon:'📊',label:'Power BI',detail:'Embed'},{id:'ntf',icon:'📬',label:'Notifier',detail:'Slack+Mail'}],
};
const CORRECT_ORDER=['src','ing','cln','mdl','bi','ntf'];

const TESTIMONIALS = [
  {
    name: 'Guillaume Martin',
    title: { en: 'Finance Director', fr: 'Directeur Financier' },
    company: 'Naos',
    linkedin: 'https://www.linkedin.com/in/guillaume-martin-90789150/',
    date: {
      en: "March 2026 · Guillaume was Antoine's senior but not his direct manager",
      fr: "Mars 2026 · Guillaume était le supérieur de Antoine mais n'était pas le responsable direct de Antoine",
    },
    avatarImg: 'images/testimonials/guillaume-martin.jpg',
    avatar: 'GM',
    color: '#6366F1',
    stars: 5,
    highlight: {
      en: "Reliable, structured, and always solution-oriented — someone you can trust to deliver in demanding environments.",
      fr: "Fiable, structuré et toujours orienté solutions — quelqu'un sur qui on peut compter dans les environnements exigeants.",
    },
    q: {
      en: "I had the pleasure of working with Antoine and can confidently say he stands out for both his professionalism and forward-thinking mindset. Antoine combines strong execution capabilities with an ability to quickly grasp complex topics and turn them into actionable solutions. He has a sharp sense of priorities, consistently focusing on what truly drives impact while maintaining a high level of quality in his work. What particularly differentiates him is his natural curiosity and his ability to leverage AI and emerging technologies in a pragmatic and value-driven way. He stays on top of trends and integrates them intelligently into his approach. Reliable, structured, and always solution-oriented, Antoine is someone you can trust to deliver in demanding environments while continuously pushing boundaries. I would highly recommend Antoine to any organization looking for a talented and forward-looking professional.",
      fr: "J'ai eu le plaisir de travailler avec Antoine et je peux dire avec confiance qu'il se distingue par son professionnalisme et son état d'esprit tourné vers l'avenir. Antoine combine de solides capacités d'exécution avec une aptitude à saisir rapidement des sujets complexes et à les transformer en solutions concrètes. Il a un sens aigu des priorités, se concentrant toujours sur ce qui génère un impact réel tout en maintenant un haut niveau de qualité. Ce qui le différencie particulièrement, c'est sa curiosité naturelle et sa capacité à exploiter l'IA et les technologies émergentes de manière pragmatique et orientée valeur. Fiable, structuré et toujours orienté solutions, Antoine est quelqu'un sur qui on peut compter pour délivrer dans des environnements exigeants. Je recommande vivement Antoine à toute organisation à la recherche d'un professionnel talentueux et tourné vers l'avenir.",
    },
  },
  {
    name: 'Aziz Agoumy',
    title: {
      en: 'Head of E-commerce North America',
      fr: 'Head of E-commerce North America',
    },
    company: 'Naos',
    linkedin: 'https://www.linkedin.com/in/aziz-agoumy-4753b2a3/',
    date: {
      en: "March 2026 · Aziz was Antoine's senior but not his direct manager",
      fr: "Mars 2026 · Aziz était le supérieur de Antoine mais n'était pas le responsable direct de Antoine",
    },
    avatarImg: 'images/testimonials/aziz-agoumy.jpg',
    avatar: 'AA',
    color: '#F97316',
    stars: 5,
    highlight: {
      en: "Tasks that could take weeks or months, Antoine manages to solve within minutes.",
      fr: "Des tâches qui pourraient prendre des semaines ou des mois, Antoine les résout en quelques minutes.",
    },
    q: {
      en: "I've had the pleasure of working with Antoine for the past two years at NAOS, where he has been our go-to expert for BI and AI. His ability to navigate complex data collection, analysis, reporting, and deliver sharp market insights is truly impressive. Tasks that could easily take weeks or even months, Antoine manages to solve within minutes. Beyond his technical expertise, Antoine is an easygoing colleague who consistently brings energy and fun to the workplace. He is always willing to go above and beyond to support his teammates and help the team succeed. I highly recommend Antoine to any team that enjoys tackling challenges and confidently navigating uncertainty.",
      fr: "J'ai eu le plaisir de travailler avec Antoine pendant deux ans chez NAOS, où il a été notre expert référent en BI et IA. Sa capacité à gérer des collectes de données complexes, des analyses, du reporting et à délivrer des insights marché précis est vraiment impressionnante. Des tâches qui pourraient prendre des semaines voire des mois, Antoine les résout en quelques minutes. Au-delà de son expertise technique, Antoine est un collègue sympathique qui apporte constamment énergie et bonne humeur. Il est toujours prêt à aller plus loin pour soutenir ses coéquipiers. Je recommande vivement Antoine à toute équipe qui aime relever des défis et naviguer dans l'incertitude avec confiance.",
    },
  },
  {
    name: 'Theo Massot',
    title: { en: 'Business Data Analyst', fr: 'Business Data Analyst' },
    company: 'Naos',
    linkedin: 'https://www.linkedin.com/in/theomassot/',
    date: {
      en: 'March 2026 · worked with Antoine in the same team',
      fr: 'Mars 2026 · a travaillé avec Antoine dans la même équipe',
    },
    avatarImg: 'images/testimonials/theo-massot.png',
    avatar: 'TM',
    color: '#38BDF8',
    stars: 5,
    highlight: {
      en: "A serious, operational profile I recommend for any role at the intersection of AI and data.",
      fr: "Un profil sérieux et opérationnel, que je recommande pour tout rôle à l'intersection de l'IA et de la donnée.",
    },
    q: {
      en: "I worked with Antoine on AI and Business Intelligence topics, and he notably supported me during my onboarding at NAOS, which made a real difference in quickly getting up to speed. What defines him: a genuine ability to implement concrete solutions — workflow automation, LLM integration, automated reporting — with a solid grasp of the business stakes behind them. His strengths: strong applied AI expertise with the ability to identify the right use cases and deploy them effectively, deep know-how in automation via n8n, Power Automate and Python, and a real talent for bringing teams along in adopting new tools. A serious, operational profile I recommend for any role at the intersection of AI and data.",
      fr: "J'ai travaillé avec Antoine sur des sujets IA et Business Intelligence, et il m'a notamment accompagné lors de mon intégration chez NAOS, ce qui a fait une vraie différence dans ma prise en main rapide des sujets. Ce qui le caractérise : une capacité réelle à implémenter des solutions concrètes, automatisation de workflows, intégration de LLMs, reporting automatisé, avec une bonne compréhension des enjeux business derrière. Ses points forts : une maîtrise solide de l'IA appliquée avec une capacité à identifier les bons cas d'usage et les déployer efficacement, une expertise en automatisation via n8n, Power Automate et Python, et une vraie pédagogie pour embarquer les équipes dans l'adoption des nouveaux outils. Un profil sérieux et opérationnel, que je recommande pour tout rôle à l'intersection de l'IA et de la donnée.",
    },
  },
  {
    name: 'Robin Blondeau',
    title: { en: 'Customer Success Manager', fr: 'Customer Success Manager' },
    company: 'Reech Influence Cloud',
    linkedin: 'https://www.linkedin.com/in/robin-blondeau-95633aa9/',
    date: {
      en: 'May 2024 · worked with Antoine across teams',
      fr: 'Mai 2024 · a travaillé avec Antoine dans des équipes différentes',
    },
    avatarImg: 'images/testimonials/robin-blondeau.jpg',
    avatar: 'RB',
    color: '#415a77',
    stars: 5,
    highlight: {
      en: "He constantly seeks to optimise his work and doesn't hesitate to be proactive.",
      fr: "Il est en constante volonté d'optimiser ses fonctions et n'hésite pas à être force de proposition.",
    },
    q: {
      en: "Antoine is a conscientious and resourceful person: beyond his assignments and established processes, he constantly seeks to optimise his work and doesn't hesitate to be proactive. I also highlight his strong analytical capacity to find solutions and build action plans that allow him to be highly autonomous across many areas. On a human level, he is deeply empathetic and driven — sociable and cheerful, he's a force behind great team cohesion.",
      fr: "Antoine est une personne consciencieuse et astucieuse : au delà de ses missions et du respect des process établis, il est en constante volonté d'optimiser ses fonctions et n'hésite pas à être force de proposition. De plus, je souligne sa grande capacité d'analyse à trouver des solutions et aboutir à des plans d'action qui lui permettent d'être très autonome. Sur un aspect plus humain, c'est une personne profondément empathique et volontaire. Sociable et jovial, il est moteur dans la création d'une bonne cohésion d'équipe !",
    },
  },
  {
    name: 'Thomas Becuwe',
    title: { en: 'Account Executive', fr: 'Account Executive' },
    company: 'Tomorro',
    linkedin: 'https://www.linkedin.com/in/thomasbecuwe/',
    date: {
      en: 'May 2024 · worked with Antoine in the same team',
      fr: 'Mai 2024 · a travaillé avec Antoine dans la même équipe',
    },
    avatarImg: 'images/testimonials/thomas-becuwe.jpg',
    avatar: 'TB',
    color: '#FF2D78',
    stars: 5,
    highlight: {
      en: "He's someone who succeeds in everything he undertakes — and he undertakes a lot — through determination, drive and a touch of talent.",
      fr: "C'est une personne qui réussit ce qu'elle entreprend (et elle entreprend beaucoup) grâce à sa détermination et son envie de réussir.",
    },
    q: {
      en: "Having worked closely with Antoine, I was struck by his energy. He's someone who succeeds in everything he undertakes — and he undertakes a lot — through determination, drive and a touch of talent. I worked with him on commercial missions: lead sourcing with SalesNav, hunting major accounts (TotalEnergie, Dior, Tod's...), software demos and deal closing. He performed on all fronts. Day to day, Antoine is a natural leader. He drives a team, inspires performance, and his interpersonal skills make internal communication effortless. I can only recommend Antoine.",
      fr: "Ayant travaillé étroitement avec Antoine, j'ai été frappé par son énergie. C'est une personne qui réussit ce qu'elle entreprend (et elle entreprend beaucoup) grâce à sa détermination, son envie de réussir et une touche de talent. Je l'ai cotoyé sur des missions commerciales : sourcing de lead avec SalesNav, chasse grands comptes (TotalEnergie, Dior, Tod's...), démo et closing. Performant sur tous les fronts. Au quotidien, Antoine est naturellement un leader. Il sait driver une équipe, donne envie de performer et ses qualités relationnelles rendent les communications internes très fluides. Je ne peux que le recommander.",
    },
  },
  {
    name: 'Matthieu Conil',
    title: {
      en: 'Brand Strategy & Communication',
      fr: 'Stratégie de marque & Communication',
    },
    company: 'Reech Influence Cloud',
    linkedin: 'https://www.linkedin.com/in/matthieu-conil-93266378/',
    date: {
      en: 'May 2024 · worked with Antoine in the same team',
      fr: 'Mai 2024 · a travaillé avec Antoine dans la même équipe',
    },
    avatarImg: 'images/testimonials/matthieu-conil.jpg',
    avatar: 'MC',
    color: '#00F0A8',
    stars: 5,
    highlight: {
      en: "Antoine has an ability to quickly grasp business stakes and market dynamics, anticipate needs, and show proactivity.",
      fr: "Antoine a une aptitude à comprendre rapidement les enjeux de l'entreprise, à anticiper les besoins et à faire preuve de proactivité.",
    },
    q: {
      en: "Antoine has an ability to quickly grasp business stakes and market dynamics, anticipate needs, and show proactivity in his missions — always pushing into new verticals. He demonstrates great professionalism, giving his time freely to help colleagues. Antoine is invested, reliable, genuinely pleasant and always in good spirits — someone with real human qualities. It was a genuine pleasure working closely with him, and I recommend him wholeheartedly.",
      fr: "Antoine a une aptitude à comprendre rapidement les enjeux de l'entreprise et de son marché, à anticiper les besoins, et à faire preuve de proactivité dans ses missions, pour sans cesse aller démarcher de nouvelles verticales. Il fait preuve d'un grand professionnalisme, n'hésitant pas à donner de sa personne et de son temps pour aider ses collègues. Antoine est une personne investie, sur qui on peut compter, très agréable et sympathique, toujours de bonne humeur. C'était un réel plaisir de travailler en étroite collaboration avec lui et je le recommande vivement !",
    },
  },
];

const COUNTRIES={
  en:[
    {iso:'fr',n:'France',emoji:'🥐',sub:'Homeland · Versailles · Brittany',tags:['Birthplace','Versailles (city, not castle 😄)','15 years of piano','Rugby · Football · Sailing','Brittany forever'],text:"Born and raised in France, I grew up in Versailles — the city, not the castle. 15 years of classical piano, rugby, football and sailing. That mix of discipline and creativity is what defines me. And Brittany — its wild coastlines and salted-butter crêpes — remains my favourite place to recharge."},
    {iso:'ca',n:'Canada',emoji:'🍁',sub:'VIE · Montréal · AI & Automation',tags:['VIE NAOS','Montréal','AI & Data','−30°C (yes, really)'],text:"Montréal is where I truly flourished. My VIE at NAOS Bioderma let me build an Analytics department from scratch and deeply explore AI and BI automation. Between Python pipelines and NORAM team meetings, I learned to appreciate Canadian winters — the kind of cold that wakes you up, literally and figuratively."},

{iso:'de',n:'Germany',emoji:'🍺',sub:'1 year of studies · Full immersion',tags:['Studies','German Rigour','Engineering & Business'],text:"A year in Germany exposed me to German rigour — impeccable processes, deep work culture, engineering approach to every problem. Germany taught me that precision doesn't exclude creativity — it amplifies it."},
    {iso:'it',n:'Italy',emoji:'🍕',sub:'1 year of studies · Turin',tags:['Turin','Gastronomy','Dolce vita'],text:"Turin — the understated capital of Northern Italy, infinitely more authentic than Rome or Milan. Italy reminded me that quality of execution — whether pasta or dashboards — is always noticed."},
    {iso:'es',n:'Spain',emoji:'🌞',sub:'IE Business School · Madrid · 📷 Film',tags:['IE Business School','NooS CSR','Madrid — my favourite','📷 Film Photography','Analog & Creativity'],text:"Absolute love at first sight. Madrid marked me the most. Completed my Master's at IE Business School while supporting NooS in its data and CSR challenges. It's also where I discovered analog photography — the deliberateness of loading film, composing without instant feedback. Working in a city where real life begins after midnight changes your perspective on time, creativity, and what it means to slow down."},
    {iso:'tr',n:'Turkey',emoji:'🌙',sub:'First internship · Foundational',tags:['First Internship','Istanbul'],text:"My very first internship. Turkey threw me into the deep end. Istanbul — between Europe and Asia — is a city that never leaves you indifferent. Taught me adaptability and that the best experiences are those that unsettle you at first."},
  ],
  fr:[
    {iso:'fr',n:'France',emoji:'🥐',sub:'Patrie · Versailles · Bretagne',tags:['Versailles (pas le château 😄)','15 ans de piano','Rugby · Football · Voile','La Bretagne forever'],text:"Né et grandi en France, j'ai passé mon lycée à Versailles — dans la ville, pas au château. 15 ans de piano classique, rugby, football et voile. Ce mélange de rigueur et créativité me définit. Et la Bretagne — ses côtes sauvages et ses crêpes au beurre salé — reste mon endroit préféré pour me ressourcer."},
    {iso:'ca',n:'Canada',emoji:'🍁',sub:'VIE · Montréal · IA & Auto',tags:['VIE NAOS','Montréal','IA & Data','−30°C (oui vraiment)'],text:"C'est à Montréal que je me suis vraiment épanoui. Mon VIE chez NAOS Bioderma m'a permis de construire un département Analytics de zéro et d'explorer l'IA et l'automatisation BI. Entre pipelines Python et réunions NORAM, j'ai appris à apprécier les hivers canadiens."},

{iso:'de',n:'Allemagne',emoji:'🍺',sub:"1 an d'études",tags:['Études','Rigueur germanique'],text:"Une année d'études en Allemagne m'a exposé à la rigueur germanique dans toute sa splendeur. L'Allemagne m'a appris que la précision n'exclut pas la créativité — elle la renforce."},
    {iso:'it',n:'Italie',emoji:'🍕',sub:"1 an d'études · Turin",tags:['Turin','Gastronomie','Dolce vita'],text:"Turin — la capitale discrète de l'Italie du Nord, infiniment plus authentique que Rome ou Milan. L'Italie m'a rappelé que la qualité d'exécution — pasta ou dashboards — est toujours remarquée."},
    {iso:'es',n:'Espagne',emoji:'🌞',sub:'IE Business School · Madrid · 📷 Photo',tags:['IE Business School','Madrid — coup de cœur','📷 Photo Argentique','Créativité & Analogique'],text:"Coup de cœur absolu. Madrid est la ville qui m'a le plus marqué. Master à l'IE Business School en accompagnant NooS sur ses problématiques data et RSE. C'est aussi là que j'ai découvert la photographie argentique — la lenteur délibérée de charger une pellicule, de composer sans feedback immédiat. Dans une ville où la vraie vie commence après minuit, ça remet en question tout ce qu'on croit sur le temps, la créativité et la beauté du ralenti."},
    {iso:'tr',n:'Turquie',emoji:'🌙',sub:'Premier stage · Fondateur',tags:['Premier stage','Istanbul'],text:"Mon tout premier stage. La Turquie m'a jeté dans le grand bain. Istanbul — entre Europe et Asie — est une ville qui ne te laisse jamais indifférent. Elle a posé les bases de tout ce qui a suivi."},
  ]
};

const BLOG_POSTS={
  en:[
    {tag:'AI & AUTOMATION',title:'Why your data teams still waste 60% of their time',date:'Feb 2026',readTime:'4',excerpt:"Most data teams spend more time preparing data than analysing it. Here's why — and how to flip it.",body:`<p>I've spent 18 months building automation systems for commercial teams. Always the same pattern: <strong>50–70% of analytical time is spent on preparation</strong> — extracting files, merging, cleaning, reformatting.</p><p>High-value human time burned on tasks Python handles in 12 seconds. Nobody takes 2 weeks to <strong>automate what takes 2 days every week</strong>. Urgency of daily work crushes structural investment.</p><p><strong>Typical result:</strong> a team of 3 analysts recovers the equivalent of one full headcount on value-added tasks.</p>`},
    {tag:'COMPETITIVE INTELLIGENCE',title:'40 competitors, 1,300 SKUs, zero analyst — how?',date:'Jan 2026',readTime:'5',excerpt:"How I built a system monitoring 40 competitors across 1,300 SKUs every morning, without human intervention.",body:`<p>Manual competitive intelligence is one of the most underestimated cost centres in product marketing. Hours every week checking prices, promotions, stock-outs, new launches — dozens of sites.</p><p>I built an alternative: <strong>a Python scraper running every night</strong>, covering 40+ competitors across 1,300 SKUs, auto-generating Power BI fed with fresh morning data.</p><p><strong>Stack:</strong> Python (Scrapy + Selenium), n8n orchestration, Power BI, Slack alerts.</p>`},
    {tag:'PERSPECTIVE',title:'AI doesn\'t replace data analysts — it changes what they do',date:'Mar 2026',readTime:'3',excerpt:"The AI vs human debate is badly framed. What should a data analyst spend time on in 2026?",body:`<p>18 months integrating AI tools into analytical workflows. Always the same fear: "will it replace analysts?"</p><p>Short answer: no. Long answer: <strong>it will make obsolete those who refuse to evolve</strong>.</p><p>The analysts who thrive in 2026 are those who use AI to eliminate mechanical work and focus on real added value: interpretation, storytelling, strategic recommendation.</p>`},
  ],
  fr:[
    {tag:'IA & AUTOMATISATION',title:"Pourquoi vos équipes data perdent encore 60% de leur temps",date:'Fév 2026',readTime:'4',excerpt:"La plupart des équipes data passent plus de temps à préparer les données qu'à les analyser.",body:`<p>18 mois à construire des systèmes d'automatisation. Toujours le même pattern : <strong>50–70% du temps analytique est consacré à la préparation</strong> — extraire, merger, nettoyer, reformater.</p><p>Du temps humain de haute valeur brûlé sur des tâches que Python fait en 12 secondes. Personne ne prend 2 semaines pour <strong>automatiser ce qui prend 2 jours chaque semaine</strong>.</p><p><strong>Résultat type :</strong> une équipe de 3 analystes récupère l'équivalent d'un ETP complet.</p>`},
    {tag:'INTELLIGENCE COMPÉTITIVE',title:'40 concurrents, 1300 SKUs, zéro analyste — comment ?',date:'Janv 2026',readTime:'5',excerpt:"Comment surveiller 40 concurrents sur 1 300 références chaque matin, sans intervention humaine.",body:`<p>La veille concurrentielle manuelle — un poste de coût sous-estimé. Des heures chaque semaine pour vérifier prix, promos, ruptures, nouveautés sur des dizaines de sites.</p><p>J'ai construit une alternative : <strong>un scraper Python qui tourne chaque nuit</strong>, couvre 40+ concurrents sur 1 300 SKUs, génère automatiquement un Power BI alimenté avec les données fraîches.</p><p><strong>Stack :</strong> Python (Scrapy + Selenium), n8n, Power BI, alertes Slack.</p>`},
    {tag:'RÉFLEXION',title:"L'IA ne remplace pas les data analysts",date:'Mars 2026',readTime:'3',excerpt:"Le débat IA vs humain est mal posé. À quoi consacrer son temps en 2026 ?",body:`<p>18 mois d'intégration d'outils IA dans des workflows analytiques. Toujours la même peur : "ça va remplacer les analystes ?"</p><p>Non. Mais ça va <strong>rendre obsolètes ceux qui refusent d'évoluer</strong>.</p><p>Les analystes qui prospèrent en 2026 sont ceux qui utilisent l'IA pour éliminer le travail mécanique et se concentrent sur la vraie valeur ajoutée.</p>`},
  ]
};

const TERMINAL_CMDS={
  en:{
    help:{output:[{t:'sys',m:'Available commands:'},{t:'cmd',m:'  whoami         → About Antoine'},{t:'cmd',m:'  skills         → Technical skills'},{t:'cmd',m:'  experience     → Career timeline'},{t:'cmd',m:'  projects       → Signature projects'},{t:'cmd',m:'  contact        → How to reach me'},{t:'cmd',m:'  availability   → Current status'},{t:'cmd',m:'  ./hire_antoine.sh → The important one'},{t:'dim',m:'  clear          → Clear terminal'},{t:'dim',m:'  secret         → 👀'}]},
    whoami:{output:[{t:'sys',m:'Antoine de Maintenant'},{t:'info',m:'Role    : AI Specialist & BI Lead @ NAOS Bioderma NORAM'},{t:'info',m:'Base    : Montréal, Canada'},{t:'info',m:'Focus   : Turning manual chaos into autonomous systems'},{t:'info',m:'Stack   : n8n · Python · Power BI · LLMs'},{t:'info',m:'Built   : Analytics dept from scratch in 6 months'},{t:'acc2',m:'Status  : OPEN TO NEW MISSIONS · 2026'}]},
    skills:{output:[{t:'sys',m:'Technical competencies:'},{t:'info',m:'████████████████████ Power BI        95%'},{t:'info',m:'██████████████████░░ Agentic AI      90%'},{t:'info',m:'█████████████████░░░ Revenue Ops     85%'},{t:'info',m:'████████████████░░░░ Forecasting     80%'},{t:'info',m:'████████████████░░░░ Python          80%'},{t:'info',m:'████████████████░░░░ Data Eng.       78%'}]},
    experience:{output:[{t:'sys',m:'Career timeline:'},{t:'info',m:'2025→now  AI Specialist & BI Lead · NAOS NORAM · Montréal'},{t:'info',m:'2024–2025 Business Analyst VIE · NAOS USA · United States'},{t:'info',m:'2023–2024 Business Developer · Reech SaaS · Paris'},{t:'info',m:'2022      Data Analyst Thesis · NOOS CSR · Madrid'}]},
    projects:{output:[{t:'sys',m:'Signature projects (NDA):'},{t:'info',m:'🔍 Competitor engine  — 40 brands · 1,300 SKUs · daily'},{t:'info',m:'⚙️  Sales master auto  — multi-rep · zero touch'},{t:'info',m:'📦 Stock forecasting  — 13wk · MAPE 4.2%'},{t:'info',m:'💬 NLP review pipeline — 10k+/mo · auto-report'}]},
    contact:{output:[{t:'sys',m:'How to reach me:'},{t:'info',m:'📧 antoinedemaintenant@alumni.ie.edu'},{t:'info',m:'🔗 linkedin.com/in/antoine2maintenant'},{t:'info',m:'📍 Montréal, Canada · France'},{t:'info',m:'📱 +1 (263) 385-6506'}]},
    availability:{output:[{t:'sys',m:'Current availability:'},{t:'acc3',m:'✅ STATUS: OPEN TO NEW MISSIONS · 2026'},{t:'info',m:'Looking for: Data/AI leadership, automation architecture'},{t:'info',m:'Locations: France · Dubai · Canada · Singapore · Europe · Remote'},{t:'info',m:'Preference: France, Dubai, Canada, Singapore — open worldwide'}]},
    secret:{output:[{t:'acc4',m:'👾 SECRET UNLOCKED'},{t:'info',m:'The Three.js sphere has 1,800 particles.'},{t:'info',m:'This portfolio has 5 hidden easter eggs.'},{t:'info',m:'You found 1. Try the Konami code. ↑↑↓↓←→←→BA'},{t:'acc2',m:'Hint: also try ./hack.sh'}]},
    './hack.sh':{output:[{t:'sys',m:'> Initiating hostile takeover of your data stack...'},{t:'info',m:'[██████████░░░░░░░░░░] 52%'},{t:'acc2',m:'> Detected: 14 manual Excel reports'},{t:'acc2',m:'> Detected: 3 broken pipelines'},{t:'acc2',m:'> Detected: 0 automated workflows'},{t:'err',m:'> CRITICAL: Business running on vibes and PivotTables'},{t:'acc4',m:'> SOLUTION FOUND: hire Antoine.'},{t:'acc3',m:'✅ Automation scheduled. ETA: 2 weeks.'}]},
    './hire_antoine.sh':{output:[{t:'sys',m:'Executing hire sequence...'},{t:'info',m:'[============================] 100%'},{t:'acc3',m:'✅ Excellent decision. ROI incoming.'},{t:'info',m:'Next step: antoinedemaintenant@alumni.ie.edu'},{t:'acc2',m:'>> First automation: 2 weeks'},{t:'acc2',m:'>> First dashboard: 3 weeks'},{t:'acc2',m:'>> ROI breakeven: ~6 months'}]},
  },
  fr:{
    help:{output:[{t:'sys',m:'Commandes disponibles :'},{t:'cmd',m:"  whoami         → À propos d'Antoine"},{t:'cmd',m:'  skills         → Compétences techniques'},{t:'cmd',m:'  experience     → Parcours professionnel'},{t:'cmd',m:'  projects       → Projets signature'},{t:'cmd',m:'  contact        → Comment me joindre'},{t:'cmd',m:'  availability   → Disponibilité'},{t:'cmd',m:'  ./hire_antoine.sh → La commande importante'},{t:'dim',m:'  clear          → Vider le terminal'},{t:'dim',m:'  secret         → 👀'}]},
    whoami:{output:[{t:'sys',m:'Antoine de Maintenant'},{t:'info',m:'Rôle    : Spécialiste IA & BI Lead @ NAOS Bioderma NORAM'},{t:'info',m:'Base    : Montréal, Canada'},{t:'info',m:'Focus   : Transformer le chaos manuel en systèmes autonomes'},{t:'info',m:'Stack   : n8n · Python · Power BI · LLMs'},{t:'info',m:'Construit : Dept analytics de zéro en 6 mois'},{t:'acc2',m:'Statut  : DISPONIBLE · 2026'}]},
    skills:{output:[{t:'sys',m:'Compétences techniques :'},{t:'info',m:'████████████████████ Power BI        95%'},{t:'info',m:'██████████████████░░ IA Agentique    90%'},{t:'info',m:'█████████████████░░░ Revenue Ops     85%'},{t:'info',m:'████████████████░░░░ Prévision       80%'},{t:'info',m:'████████████████░░░░ Python          80%'},{t:'info',m:'████████████████░░░░ Data Eng.       78%'}]},
    experience:{output:[{t:'sys',m:'Parcours :'},{t:'info',m:'2025→now  Spécialiste IA & BI Lead · NAOS NORAM · Montréal'},{t:'info',m:'2024–2025 Business Analyst VIE · NAOS USA'},{t:'info',m:'2023–2024 Business Developer · Reech SaaS · Paris'},{t:'info',m:'2022      Data Analyst Mémoire · NOOS RSE · Madrid'}]},
    projects:{output:[{t:'sys',m:'Projets signature (NDA) :'},{t:'info',m:'🔍 Moteur concurrentiel — 40 marques · 1 300 SKUs · daily'},{t:'info',m:'⚙️  Auto master ventes  — multi-reps · zéro touche'},{t:'info',m:'📦 Prévision stock     — 13sem · MAPE 4,2%'},{t:'info',m:'💬 Pipeline NLP avis   — 10k+/mois · rapport auto'}]},
    contact:{output:[{t:'sys',m:'Comment me joindre :'},{t:'info',m:'📧 antoinedemaintenant@alumni.ie.edu'},{t:'info',m:'🔗 linkedin.com/in/antoine2maintenant'},{t:'info',m:'📍 Montréal, Canada · France'},{t:'info',m:'📱 +1 (263) 385-6506'}]},
    availability:{output:[{t:'sys',m:'Disponibilité actuelle :'},{t:'acc3',m:'✅ STATUT : DISPONIBLE · 2026'},{t:'info',m:'Recherche : Leadership data/IA, architecture automation'},{t:'info',m:'Lieux : France · Dubai · Canada · Singapour · Europe · Remote'},{t:'info',m:'Préférence : France, Dubai, Canada, Singapour — ouvert partout'}]},
    secret:{output:[{t:'acc4',m:'👾 SECRET DÉBLOQUÉ'},{t:'info',m:'La sphère Three.js a 1 800 particules.'},{t:'info',m:'Ce portfolio a 5 easter eggs cachés.'},{t:'info',m:'Vous en avez trouvé 1. Essayez le code Konami. ↑↑↓↓←→←→BA'},{t:'acc2',m:'Indice : essayez aussi ./hack.sh'}]},
    './hack.sh':{output:[{t:'sys',m:'> Prise de contrôle hostile de votre data stack...'},{t:'info',m:'[██████████░░░░░░░░░░] 52%'},{t:'acc2',m:'> Détecté : 14 rapports Excel manuels'},{t:'acc2',m:'> Détecté : 3 pipelines cassés'},{t:'acc2',m:'> Détecté : 0 workflows automatisés'},{t:'err',m:'> CRITIQUE : Business tournant sur des vibes et des TCD'},{t:'acc4',m:'> SOLUTION TROUVÉE : recrutez Antoine.'},{t:'acc3',m:'✅ Automatisation planifiée. ETA : 2 semaines.'}]},
    './hire_antoine.sh':{output:[{t:'sys',m:'Exécution séquence de recrutement...'},{t:'info',m:'[============================] 100%'},{t:'acc3',m:'✅ Excellente décision. ROI en approche.'},{t:'info',m:'Prochaine étape : antoinedemaintenant@alumni.ie.edu'},{t:'acc2',m:'>> Première automation : 2 semaines'},{t:'acc2',m:'>> Premier dashboard : 3 semaines'},{t:'acc2',m:'>> ROI breakeven : ~6 mois'}]},
  }
};

/* ─── ANIMATED METRIC ───────────────────────────────────────────────────────── */
function AnimatedMetric({n,s,l,delay=0}){
  const [val,setVal]=useState(0);const [started,setStarted]=useState(false);const ref=useRef();
  useEffect(()=>{const obs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!started)setStarted(true)},{threshold:.5});if(ref.current)obs.observe(ref.current);return()=>obs.disconnect();},[started]);
  useEffect(()=>{if(!started)return;const target=parseInt(n,10);const dur=2000;const start=performance.now();function tick(now){const p=Math.min((now-start)/dur,1);const e=1-Math.pow(1-p,3);setVal(Math.round(e*target));if(p<1)requestAnimationFrame(tick);}setTimeout(()=>requestAnimationFrame(tick),delay);},[started,n,delay]);
  return(<div className="metric" ref={ref}><span className="metric-num">{val}{s}</span><span className="metric-lbl">{l}</span></div>);
}

/* ─── LIVE COUNTER ──────────────────────────────────────────────────────────── */
function LiveCounter({lang}){
  const t=T[lang];
  const start=useRef(Date.now());
  const [val,setVal]=useState(0);
  useEffect(()=>{const iv=setInterval(()=>{const hrs=(Date.now()-start.current)/3600000;setVal((hrs*85*40).toFixed(1));},1000);return()=>clearInterval(iv);},[]);
  return(
    <div className="live-counter reveal">
      <div><div className="lc-label">{t.liveCounter}</div></div>
      <div className="lc-val">{val}</div>
    </div>
  );
}

/* ─── DASHBOARD ─────────────────────────────────────────────────────────────── */
/* ─ SALES POINTS DATA ─ */
const SALES_PTS=[
  {city:'Paris',x:215,y:115,sales:142,trend:'+12%',weather:'☁️',temp:'14°C'},
  {city:'Lyon',x:268,y:230,sales:89,trend:'+8%',weather:'⛅',temp:'17°C'},
  {city:'Marseille',x:266,y:308,sales:76,trend:'+15%',weather:'☀️',temp:'21°C'},
  {city:'Bordeaux',x:148,y:255,sales:54,trend:'-8%',weather:'🌧️',temp:'16°C',warn:true},
  {city:'Lille',x:208,y:56,sales:48,trend:'+6%',weather:'🌧️',temp:'11°C'},
  {city:'Strasbourg',x:335,y:125,sales:38,trend:'+18%',weather:'☁️',temp:'13°C'},
  {city:'Nantes',x:113,y:186,sales:31,trend:'+10%',weather:'⛅',temp:'15°C'},
];
const STOCK_RISK=[
  {name:'Produit A',units:320,weeks:1.4,color:'#FF2D78',status:'CRITIQUE',action:'Commander maintenant',lead:'Lead: 3 sem.',data:[480,430,390,360,320,270,200,110]},
  {name:'Produit B',units:850,weeks:3.2,color:'#FFB800',status:'VIGILANCE',action:'Préparer commande',lead:'Lead: 2 sem.',data:[900,870,850,820,780,720,650,560]},
  {name:'Produit C',units:2100,weeks:7.8,color:'#00F0A8',status:'OK',action:'Stock suffisant',lead:'Lead: 4 sem.',data:[2100,2050,2000,1940,1870,1790,1700,1600]},
];
const DASH_ALERTS=[
  {type:'warn',msg:'Ventes Bordeaux sous objectif (−8%)',icon:'⚠️',color:'#FFB800'},
  {type:'ok',msg:'Objectif Q4 atteint à 112% — rapport prêt',icon:'✅',color:'#00F0A8'},
  {type:'info',msg:'Prospect détecté : CMO TechCorp Paris',icon:'💡',color:'#415a77'},
];
const DASH_NEWS=[
  {tag:'Marché',txt:'Les PME françaises adoptent massivement l\'IA en 2025'},
  {tag:'Finance',txt:'Automatisation comptable : +40% productivité mesurée'},
  {tag:'Tech',txt:'Make.com déploie des agents autonomes EU'},
  {tag:'Retail',txt:'Shopify intègre des agents IA pour les stocks'},
];

function StockSparkline({data,color}){
  const max=Math.max(...data),min=Math.min(...data),W=56,H=30;
  const pts=data.map((v,i)=>{
    const x=(i/(data.length-1))*W;
    const y=H-((v-min)/(max-min||1))*(H-4)-2;
    return `${x},${y}`;
  }).join(' ');
  const area=`0,${H} ${pts} ${W},${H}`;
  return(<svg viewBox={`0 0 ${W} ${H}`} width="100%" height="32" preserveAspectRatio="none">
    <defs><linearGradient id={`sg${color.slice(1)}`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={color} stopOpacity="0.35"/>
      <stop offset="100%" stopColor={color} stopOpacity="0"/>
    </linearGradient></defs>
    <polygon points={area} fill={`url(#sg${color.slice(1)})`}/>
    <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8"/>
  </svg>);
}

function FranceMap({lang}){
  const [hov,setHov]=useState(null);
  const maxS=Math.max(...SALES_PTS.map(p=>p.sales));
  // Simplified but recognizable French regions as separate SVG paths
  const REGIONS=[
    {id:'idf',name:'Île-de-France',d:'M195 148L210 143L222 150L220 165L208 170L196 163Z',cx:208,cy:157},
    {id:'nor',name:'Normandie',d:'M128 88L168 78L198 85L200 112L178 118L148 115L120 105Z',cx:160,cy:98},
    {id:'bre',name:'Bretagne',d:'M58 108L100 100L118 110L112 138L88 152L60 148L44 128Z',cx:82,cy:128},
    {id:'pdl',name:'Pays de la Loire',d:'M100 148L140 140L165 152L162 178L138 188L108 182L90 168Z',cx:128,cy:165},
    {id:'cen',name:'Centre-Val de Loire',d:'M158 148L195 142L216 158L212 185L188 195L160 188L148 172Z',cx:182,cy:170},
    {id:'bou',name:'Bourgogne',d:'M218 158L252 152L268 168L262 198L240 208L218 200L208 182Z',cx:238,cy:180},
    {id:'hdf',name:'Hauts-de-France',d:'M178 55L212 48L238 58L240 80L218 88L192 88L172 76Z',cx:206,cy:70},
    {id:'ges',name:'Grand Est',d:'M228 75L268 65L295 78L300 108L278 122L248 118L225 100Z',cx:262,cy:95},
    {id:'ara',name:'Auvergne-Rhône-Alpes',d:'M222 198L262 190L292 205L295 245L268 262L235 255L215 235Z',cx:255,cy:228},
    {id:'occ',name:'Occitanie',d:'M158 248L200 238L242 248L248 285L218 305L180 302L152 278Z',cx:200,cy:272},
    {id:'naq',name:'Nouvelle-Aquitaine',d:'M100 198L152 188L178 205L175 252L148 272L108 265L82 238Z',cx:130,cy:230},
    {id:'pca',name:"Provence-Alpes-Côte d'Azur",d:'M262 240L298 232L320 252L315 280L288 292L260 278Z',cx:292,cy:262},
    {id:'cor',name:'Corse',d:'M298 288L310 280L322 295L318 318L305 322L294 308Z',cx:308,cy:302},
  ];
  return(
    <div style={{position:'relative',height:'100%',display:'flex',gap:10}}>
      <svg viewBox="40 40 295 295" style={{display:'block',flexShrink:0,width:'55%',minHeight:180}} height="100%">
        {REGIONS.map(r=>{
          const pt=SALES_PTS.find(p=>p.city&&r.name&&(r.id==='idf'&&p.city==='Paris'||r.id==='ara'&&p.city==='Lyon'||r.id==='pca'&&p.city==='Marseille'||r.id==='naq'&&p.city==='Bordeaux'||r.id==='hdf'&&p.city==='Lille'));
          const active=pt&&hov===pt.city;
          const hasData=!!pt;
          return(
            <g key={r.id} style={{cursor:hasData?'pointer':'default'}}
              onMouseEnter={()=>pt&&setHov(pt.city)}
              onMouseLeave={()=>setHov(null)}>
              <path d={r.d}
                fill={active?'rgba(191,58,255,0.35)':hasData?'rgba(191,58,255,0.18)':'rgba(191,58,255,0.06)'}
                stroke='rgba(191,58,255,0.4)'
                strokeWidth="1.2"/>
              {hasData&&<circle cx={r.cx} cy={r.cy} r={4+(pt.sales/maxS)*6} fill={pt.warn?'#FFB800':'#415a77'} opacity={0.9}/>}
              {active&&pt&&(
                <g>
                  <rect x={r.cx-55} y={r.cy-58} width={110} height={52} rx={6} fill="rgba(10,6,28,0.97)" stroke="#BF3AFF" strokeWidth="1"/>
                  <text x={r.cx} y={r.cy-42} textAnchor="middle" fill="#fff" fontSize={10} fontWeight="700">{pt.city}</text>
                  <text x={r.cx} y={r.cy-28} textAnchor="middle" fill="#BF3AFF" fontSize={8}>{pt.sales} ventes · {pt.trend}</text>
                  <text x={r.cx} y={r.cy-16} textAnchor="middle" fill="#7A6B9E" fontSize={8}>{pt.weather} {pt.temp}</text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      <div style={{display:'flex',flexDirection:'column',gap:5,fontSize:9,flex:1,paddingTop:4,overflowY:'auto',maxHeight:220}}>
        {SALES_PTS.map((p,i)=>(
          <div key={i} onMouseEnter={()=>setHov(p.city)} onMouseLeave={()=>setHov(null)}
            style={{padding:'5px 8px',borderRadius:5,border:`1px solid ${hov===p.city?'rgba(191,58,255,0.5)':'rgba(191,58,255,0.15)'}`,background:hov===p.city?'rgba(191,58,255,0.1)':'transparent',cursor:'pointer',transition:'all .2s',flexShrink:0}}>
            <div style={{fontWeight:700,color:'var(--text)',fontSize:10}}>{p.city}</div>
            <div style={{color:p.warn?'#FFB800':'var(--accent3)',fontFamily:"'Space Mono',monospace",fontSize:8}}>{p.sales} ventes · {p.trend}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard({lang}){
  const t=T[lang];
  const lRef=useRef(),bRef=useRef(),lC=useRef(),bC=useRef();
  const [alIdx,setAlIdx]=useState(0);
  const [sentAction,setSentAction]=useState(null);
  const [activeTab,setActiveTab]=useState('overview');
  const now=new Date();
  const timeStr=now.toLocaleTimeString(lang==='fr'?'fr-FR':'en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const [clock,setClock]=useState(timeStr);

  useEffect(()=>{
    const iv=setInterval(()=>setAlIdx(a=>(a+1)%DASH_ALERTS.length),3800);
    const ck=setInterval(()=>{const n=new Date();setClock(n.toLocaleTimeString(lang==='fr'?'fr-FR':'en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'}));},1000);
    return()=>{clearInterval(iv);clearInterval(ck);};
  },[lang]);

  useEffect(()=>{
    if(!lRef.current||!bRef.current)return;
    const labels=lang==='fr'?['Jun','Jul','Aoû','Sep','Oct','Nov','Déc','Jan','Fév','Mar','Avr','Mai','Jun']:['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];
    const gc='rgba(255,255,255,0.05)',tc='rgba(200,186,232,0.55)';
    lC.current=new Chart(lRef.current,{type:'line',data:{labels,datasets:[
      {label:lang==='fr'?'Réel':'Actual',data:[180,210,195,240,225,260,290,310,340,null,null,null,null],borderColor:'#415a77',backgroundColor:'rgba(191,58,255,0.08)',tension:.4,pointRadius:2.5,pointBackgroundColor:'#415a77',fill:true,borderWidth:2},
      {label:lang==='fr'?'Prévision IA':'AI Forecast',data:[null,null,null,null,null,null,null,null,340,380,420,400,450],borderColor:'#00F0A8',backgroundColor:'rgba(0,240,168,0.05)',tension:.4,pointRadius:2.5,pointBackgroundColor:'#00F0A8',borderDash:[4,3],fill:true,borderWidth:1.5},
      {label:'N−1',data:[155,178,168,205,192,228,252,270,295,310,340,325,365],borderColor:'rgba(122,107,158,0.35)',backgroundColor:'transparent',tension:.4,pointRadius:0,borderDash:[2,2],borderWidth:1},
    ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{labels:{color:tc,font:{family:'Space Mono',size:8},boxWidth:8,padding:16}},tooltip:{backgroundColor:'rgba(10,6,18,0.9)',titleFont:{family:'Space Mono',size:10},bodyFont:{family:'Space Mono',size:9},padding:10,borderColor:'rgba(191,58,255,0.3)',borderWidth:1}},scales:{x:{ticks:{color:tc,font:{family:'Space Mono',size:8}},grid:{color:gc}},y:{ticks:{color:tc,font:{family:'Space Mono',size:8},callback:v=>`€${v}K`},grid:{color:gc}}}}});
    bC.current=new Chart(bRef.current,{type:'bar',data:{labels:['Paris','Lyon','Marseille','Bordeaux','Lille'],datasets:[
      {label:'2024',data:[142,89,76,54,48],backgroundColor:'rgba(191,58,255,.65)',borderRadius:3},
      {label:'2023',data:[120,72,65,60,42],backgroundColor:'rgba(191,58,255,.2)',borderRadius:3},
    ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:tc,font:{family:'Space Mono',size:8},boxWidth:8}}},scales:{x:{ticks:{color:tc,font:{family:'Space Mono',size:8}},grid:{display:false}},y:{ticks:{color:tc,font:{family:'Space Mono',size:8},callback:v=>`${v}K`},grid:{color:gc}}}}});
    // Safety net: force a resize after paint to catch mobile cases where container width was 0 at init
    const tResize=setTimeout(()=>{try{lC.current?.resize();bC.current?.resize();}catch(e){}},150);
    return()=>{clearTimeout(tResize);lC.current?.destroy();bC.current?.destroy()};
  },[lang]);

  const [analysts,setAnalysts]=useState(3);
  const [hoursWasted,setHoursWasted]=useState(12);
  const [hourlyRate,setHourlyRate]=useState(55);
  const al=DASH_ALERTS[alIdx];
  const tabs=lang==='fr'
    ?[{id:'overview',label:'Vue globale'},{id:'sales',label:'Ventes'},{id:'supply',label:'Supply'},{id:'ai',label:'IA · Prévisions'},{id:'hiring',label:'⚠️ Coût inaction'}]
    :[{id:'overview',label:'Overview'},{id:'sales',label:'Sales'},{id:'supply',label:'Supply'},{id:'ai',label:'AI · Forecast'},{id:'hiring',label:'⚠️ Cost of Inaction'}];

  /* ── Shared card style ── */
  const card={backdropFilter:'var(--glass-blur)',WebkitBackdropFilter:'var(--glass-blur)',background:'var(--glass-bg)',border:'1px solid var(--glass-border)',borderRadius:12,padding:'16px 20px',boxShadow:'var(--glass-shadow)'};
  const label8={fontFamily:"'Space Mono',monospace",fontSize:8,letterSpacing:'1.5px',textTransform:'uppercase',color:'var(--text-mute)'};
  const bigNum={fontFamily:"'Bebas Neue',sans-serif",lineHeight:1};

  return(
    <div className="dashboard-root" style={{background:'var(--bg)',border:'1px solid var(--glass-border)',borderRadius:16,overflow:'hidden',boxShadow:'var(--glass-shadow)'}}>

      {/* ── WINDOW CHROME ── */}
      <div style={{background:'var(--bg)',borderBottom:'1px solid var(--glass-border)',padding:'10px 18px',display:'flex',alignItems:'center',gap:14}}>
        {/* Traffic lights */}
        <div style={{display:'flex',gap:6,flexShrink:0}}>
          {['#FF5F57','#FFBD2E','#28C840'].map((c,i)=>(
            <div key={i} style={{width:10,height:10,borderRadius:'50%',background:c,opacity:.9}}/>
          ))}
        </div>
        {/* App title */}
        <span style={{...label8,color:'#415a77',letterSpacing:'3px',fontSize:9}}>ADM · BI · PLATFORM</span>
        {/* Fake URL bar */}
        <div style={{flex:1,background:'var(--glass-border)',backdropFilter:'blur(8px)',border:'1px solid var(--glass-border)',borderRadius:8,padding:'4px 12px',fontFamily:"'Space Mono',monospace",fontSize:8,color:'var(--text-mute)'}}>
          analytics.adm.pro/dashboard
        </div>
        {/* Live badge + clock */}
        <div style={{display:'flex',alignItems:'center',gap:12,flexShrink:0}}>
          <div style={{display:'flex',alignItems:'center',gap:5}}>
            <div style={{width:6,height:6,borderRadius:'50%',background:'var(--accent3)',boxShadow:'0 0 6px var(--accent3)',animation:'blink 2s infinite'}}/>
            <span style={{...label8,color:'var(--accent3)',fontSize:8}}>{lang==='fr'?'EN DIRECT':'LIVE'}</span>
          </div>
          <span style={{...label8,color:'var(--text-dim)',fontSize:9}}>{clock}</span>
        </div>
      </div>

      {/* ── TABS + ROTATING ALERT ── */}
      <div style={{background:'var(--glass-bg)',borderBottom:'1px solid var(--glass-border)',display:'flex',alignItems:'stretch',padding:'0 18px',gap:0,overflowX:'auto'}}>
        {tabs.map(tab=>(
          <button key={tab.id} onClick={()=>setActiveTab(tab.id)} style={{
            padding:'10px 16px',background:'transparent',border:'none',
            borderBottom:`2px solid ${activeTab===tab.id?'var(--accent1)':'transparent'}`,
            color:activeTab===tab.id?'var(--accent1)':'var(--text-mute)',
            fontFamily:"'Space Mono',monospace",fontSize:8,letterSpacing:'1.5px',
            textTransform:'uppercase',cursor:'pointer',transition:'all .2s',
            whiteSpace:'nowrap',flexShrink:0
          }}>
            {tab.label}
          </button>
        ))}
        <div style={{flex:1}}/>
        {/* Alert pill */}
        <div style={{
          display:'flex',alignItems:'center',gap:8,padding:'0 0 0 16px',
          borderLeft:'1px solid var(--glass-border)',margin:'6px 0'
        }}>
          <span style={{fontSize:11}}>{al.icon}</span>
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:7.5,color:'var(--text-sec)',maxWidth:220,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{al.msg}</span>
          <button onClick={()=>setSentAction(al.msg)} style={{
            padding:'3px 10px',borderRadius:6,border:'1px solid var(--glass-border)',
            background:sentAction===al.msg?'rgba(48,209,88,.12)':'var(--glass-bg)',
            color:sentAction===al.msg?'var(--accent3)':'var(--text-dim)',
            fontSize:7,cursor:'pointer',fontFamily:"'Space Mono',monospace",
            letterSpacing:'1px',whiteSpace:'nowrap',transition:'all .2s',flexShrink:0,backdropFilter:'blur(8px)'
          }}>
            {sentAction===al.msg?'✓ OK':'ACT →'}
          </button>
        </div>
      </div>

      {/* ── MAIN AREA ── */}
      <div style={{padding:'16px 18px 20px',background:'var(--glass-bg)'}}>

        {/* KPI STRIP — always visible */}
        <div className="dash-kpi-strip" style={{display:'grid',gap:8,marginBottom:14}}>
          {t.dashKpis.map(([v,l,d],i)=>{
            const colors=['var(--accent1)','var(--accent3)','var(--accent2)','var(--accent4)','var(--accent3)','var(--accent1)'];
            const col=colors[i%colors.length];
            const isUp=d.startsWith('↑')||d.startsWith('+');
            const isDown=d.startsWith('↓')||d.startsWith('-');
            return(
              <div key={i} style={{...card,padding:'12px 14px',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',top:0,left:0,width:3,bottom:0,background:col,borderRadius:'4px 0 0 4px'}}/>
                <div style={{paddingLeft:8}}>
                  <div style={{...label8,marginBottom:6,lineHeight:1.5}}>{l}</div>
                  <div style={{...bigNum,fontSize:'1.8rem',color:col}}>{v}</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:8,marginTop:5,color:isUp?'var(--accent3)':isDown?'var(--accent2)':'var(--accent4)'}}>{d}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── OVERVIEW TAB ── */}
        {activeTab==='overview'&&(
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {/* Charts row */}
            <div className="dash-charts-row" style={{display:'grid',gap:12}}>
              <div style={card}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
                  <span style={{...label8,color:'#415a77'}}>{t.dashChart1}</span>
                  <div style={{display:'flex',gap:12}}>
                    {[['var(--accent1)',lang==='fr'?'Réel':'Actual'],['#00F0A8','IA'],['rgba(122,107,158,.55)','N−1']].map(([c,lbl],i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',gap:4}}>
                        <div style={{width:16,height:2,background:c,borderRadius:1}}/>
                        <span style={{...label8,fontSize:7}}>{lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{height:180,width:'100%',position:'relative'}}><canvas ref={lRef}/></div>
              </div>
              <div style={card}>
                <div style={{...label8,color:'#415a77',marginBottom:12}}>{t.dashChart2}</div>
                <div style={{height:180,width:'100%',position:'relative'}}><canvas ref={bRef}/></div>
              </div>
            </div>
            {/* Map + News row */}
            <div className="dash-map-news" style={{display:'grid',gap:12}}>
              <div style={card}>
                <div style={{...label8,color:'#415a77',marginBottom:8}}>{lang==='fr'?'CARTE VENTES · FRANCE':'SALES MAP · FRANCE'}</div>
                <div style={{height:190,overflow:'hidden'}}><FranceMap lang={lang}/></div>
              </div>
              <div style={{...card,display:'flex',flexDirection:'column'}}>
                <div style={{...label8,color:'#415a77',marginBottom:10}}>{lang==='fr'?'MARCHÉ · PULSE':'MARKET · PULSE'}</div>
                <div style={{display:'flex',flexDirection:'column',gap:0,flex:1}}>
                  {DASH_NEWS.map((n,i)=>(
                    <div key={i} style={{display:'flex',gap:8,alignItems:'flex-start',padding:'8px 0',borderBottom:i<DASH_NEWS.length-1?'1px solid var(--border-dim)':'none'}}>
                      <span style={{fontFamily:"'Space Mono',monospace",fontSize:7,fontWeight:700,padding:'3px 7px',borderRadius:3,background:'rgba(191,58,255,.1)',color:'#415a77',whiteSpace:'nowrap',flexShrink:0,letterSpacing:.5}}>{n.tag}</span>
                      <span style={{fontSize:10,color:'var(--text-sec)',lineHeight:1.55}}>{n.txt}</span>
                    </div>
                  ))}
                </div>
                <button onClick={()=>setSentAction('news')} style={{
                  marginTop:12,width:'100%',padding:'8px',
                  background:sentAction==='news'?'rgba(0,240,168,.1)':'rgba(255,255,255,.03)',
                  border:'1px solid',borderColor:sentAction==='news'?'rgba(0,240,168,.3)':'var(--border-dim)',
                  borderRadius:5,color:sentAction==='news'?'#00F0A8':'var(--text-dim)',
                  fontSize:8,cursor:'pointer',fontFamily:"'Space Mono',monospace",
                  letterSpacing:'1px',transition:'all .2s'
                }}>{sentAction==='news'?'✓ Envoyé':'📤 '+(lang==='fr'?'ENVOYER AUX ÉQUIPES':'SEND TO TEAMS')}</button>
              </div>
            </div>
          </div>
        )}

        {/* ── SALES TAB ── */}
        {activeTab==='sales'&&(
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div className="dash-tri-kpis" style={{display:'grid',gap:12}}>
              {[
                {label:lang==='fr'?'CA YTD':'Revenue YTD',v:'€2.4M',delta:'+18%',color:'#415a77'},
                {label:lang==='fr'?'Deals closés':'Deals closed',v:'47',delta:lang==='fr'?'+12 ce mois':'+12 this month',color:'var(--accent3)'},
                {label:lang==='fr'?'Taux conversion':'Win rate',v:'34%',delta:'+8pts vs N-1',color:'var(--accent2)'}
              ].map((k,i)=>(
                <div key={i} style={{...card}}>
                  <div style={{...label8,marginBottom:8}}>{k.label}</div>
                  <div style={{...bigNum,fontSize:'2.6rem',color:k.color}}>{k.v}</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:8,color:'#00F0A8',marginTop:6}}>{k.delta}</div>
                </div>
              ))}
            </div>
            <div className="dash-pipe-alerts" style={{display:'grid',gap:12}}>
              <div style={card}>
                <div style={{...label8,color:'#415a77',marginBottom:14}}>{lang==='fr'?'PIPELINE PAR STAGE':'PIPELINE BY STAGE'}</div>
                {[
                  {stage:'Qualification',v:24,pct:100,color:'rgba(122,107,158,.7)'},
                  {stage:lang==='fr'?'Démo envoyée':'Demo sent',v:18,pct:75,color:'#415a77'},
                  {stage:lang==='fr'?'Proposition':'Proposal',v:11,pct:46,color:'var(--accent2)'},
                  {stage:'Négociation',v:6,pct:25,color:'var(--accent4)'},
                  {stage:lang==='fr'?'Gagné':'Won',v:4,pct:17,color:'var(--accent3)'}
                ].map((s,i)=>(
                  <div key={i} style={{marginBottom:12}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
                      <span style={{fontSize:10,color:'var(--text-sec)'}}>{s.stage}</span>
                      <span style={{fontFamily:"'Space Mono',monospace",fontSize:9,color:s.color,fontWeight:700}}>{s.v}</span>
                    </div>
                    <div style={{height:4,background:'rgba(255,255,255,.06)',borderRadius:2,overflow:'hidden'}}>
                      <div style={{height:'100%',width:`${s.pct}%`,background:s.color,borderRadius:2,transition:'width .8s ease'}}/>
                    </div>
                  </div>
                ))}
              </div>
              <div style={card}>
                <div style={{...label8,color:'#415a77',marginBottom:12}}>{lang==='fr'?'ALERTES PROSPECTS':'PROSPECT ALERTS'}</div>
                {[
                  {ico:'🔥',txt:lang==='fr'?'TotalEnergies — pas de réponse 8j':'TotalEnergies — 8d no response'},
                  {ico:'⚡',txt:lang==='fr'?'Dior — demo planifiée demain 14h':'Dior — demo scheduled tomorrow 2pm'},
                  {ico:'✅',txt:lang==='fr'?'LVMH — bon de commande reçu':'LVMH — PO received'},
                  {ico:'📩',txt:lang==='fr'?'3 nouveaux leads inbound':'3 new inbound leads today'}
                ].map((a,i)=>(
                  <div key={i} style={{display:'flex',gap:10,alignItems:'flex-start',padding:'9px 0',borderBottom:i<3?'1px solid var(--border-dim)':'none'}}>
                    <span style={{fontSize:16,flexShrink:0}}>{a.ico}</span>
                    <span style={{fontSize:10,color:'var(--text-sec)',lineHeight:1.55}}>{a.txt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SUPPLY TAB ── */}
        {activeTab==='supply'&&(
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div className="dash-tri-kpis" style={{display:'grid',gap:12}}>
              {[
                {label:lang==='fr'?'Taux de service':'Service level',v:'98.2%',delta:'+1.4pts',color:'var(--accent3)'},
                {label:lang==='fr'?'Ruptures actives':'Active stockouts',v:'3',delta:lang==='fr'?'−5 vs sem. préc.':'−5 vs prev. week',color:'var(--accent4)'},
                {label:lang==='fr'?'Délai fournisseur':'Supplier lead',v:'12j',delta:lang==='fr'?'Optimisé −3j':'Optimised −3d',color:'#415a77'}
              ].map((k,i)=>(
                <div key={i} style={card}>
                  <div style={{...label8,marginBottom:8}}>{k.label}</div>
                  <div style={{...bigNum,fontSize:'2.6rem',color:k.color}}>{k.v}</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:8,color:'var(--accent3)',marginTop:6}}>{k.delta}</div>
                </div>
              ))}
            </div>
            <div style={card}>
              <div style={{...label8,color:'#415a77',marginBottom:14}}>{lang==='fr'?'RISQUES RUPTURE · PRÉVISION IA 8 SEMAINES':'STOCKOUT RISK · AI FORECAST 8 WEEKS'}</div>
              <div className="dash-stock-risk" style={{display:'grid',gap:10}}>
                {STOCK_RISK.map((s,i)=>(
                  <div key={i} style={{background:'var(--glass-bg)',border:`1px solid ${s.color}33`,borderRadius:8,padding:'14px 16px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
                      <span style={{fontSize:11,fontWeight:700,color:'var(--text)'}}>{s.name}</span>
                      <span style={{fontSize:7.5,fontWeight:700,padding:'2px 8px',borderRadius:3,background:`${s.color}20`,color:s.color,fontFamily:"'Space Mono',monospace"}}>{s.status}</span>
                    </div>
                    <StockSparkline data={s.data} color={s.color}/>
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:10,alignItems:'baseline'}}>
                      <span style={{fontSize:18,fontWeight:800,color:s.color,fontFamily:"'Bebas Neue',sans-serif"}}>{s.weeks}{lang==='fr'?' sem.':' wks'}</span>
                      <span style={{fontSize:8,color:s.color,fontFamily:"'Space Mono',monospace"}}>{s.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── AI TAB ── */}
        {activeTab==='ai'&&(
          <div className="dash-ai-layout" style={{display:'grid',gap:12}}>
            <div style={card}>
              <div style={{...label8,color:'#415a77',marginBottom:14}}>{lang==='fr'?'MODÈLE PRÉVISION VENTES · IA':'SALES FORECAST MODEL · AI'}</div>
              <div className="dash-ai-mini-grid" style={{display:'grid',gap:10,marginBottom:14}}>
                {[
                  {label:lang==='fr'?'Précision':'Accuracy',v:'95.8%',color:'var(--accent3)'},
                  {label:'MAPE',v:'4.2%',color:'var(--accent4)'},
                  {label:lang==='fr'?'Prévision M+1':'M+1 forecast',v:'€420K',color:'#415a77'},
                  {label:lang==='fr'?'Dernière MAJ':'Last update',v:'06:00',color:'var(--accent3)'}
                ].map((k,i)=>(
                  <div key={i} style={{background:'var(--glass-bg)',borderRadius:7,padding:'10px 14px',border:'1px solid var(--border-dim)'}}>
                    <div style={{...label8,fontSize:7,marginBottom:5}}>{k.label}</div>
                    <div style={{...bigNum,fontSize:'1.7rem',color:k.color}}>{k.v}</div>
                  </div>
                ))}
              </div>
              <div style={{height:140}}><canvas ref={lRef}/></div>
            </div>
            <div style={card}>
              <div style={{...label8,color:'#415a77',marginBottom:14}}>{lang==='fr'?'AUTOMATISATIONS ACTIVES':'ACTIVE AUTOMATIONS'}</div>
              {[
                {icon:'📊',name:lang==='fr'?'Reporting hebdo auto':'Weekly auto-report',status:lang==='fr'?'Lundi 06:00 · 0 intervention':'Mon 06:00 · 0 intervention'},
                {icon:'🤖',name:lang==='fr'?'Prévision IA quotidienne':'Daily AI forecast',status:'02:00 · Python + Power BI'},
                {icon:'📩',name:lang==='fr'?'Alertes stock critique':'Critical stock alerts',status:lang==='fr'?'Temps réel · Slack + Email':'Real-time · Slack + Email'},
                {icon:'🔍',name:lang==='fr'?'Veille concurrentielle':'Competitive intel',status:lang==='fr'?'40 concurrents · 1300 SKUs':'40 competitors · 1300 SKUs'},
                {icon:'📈',name:lang==='fr'?'Scoring leads inbound':'Inbound lead scoring',status:lang==='fr'?'Pipeline auto · CRM sync':'Auto pipeline · CRM sync'}
              ].map((a,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'11px 0',borderBottom:i<4?'1px solid var(--border-dim)':'none'}}>
                  <span style={{fontSize:18,flexShrink:0}}>{a.icon}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:10,fontWeight:600,color:'var(--text)',marginBottom:2}}>{a.name}</div>
                    <div style={{fontFamily:"'Space Mono',monospace",fontSize:7.5,color:'var(--text-mute)'}}>{a.status}</div>
                  </div>
                  <div style={{width:7,height:7,borderRadius:'50%',background:'#00F0A8',boxShadow:'0 0 6px #00F0A8',flexShrink:0}}/>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── COST OF INACTION TAB ── */}
        {activeTab==='hiring'&&(()=>{
          const weekCost=analysts*hoursWasted*hourlyRate;
          const yearCost=weekCost*52;
          const savedYear=Math.round(yearCost*0.85);
          const roiPct=Math.round((savedYear/80000-1)*100);
          const pctA=((analysts-1)/19*100)+'%';
          const pctH=((hoursWasted-2)/38*100)+'%';
          const pctR=((hourlyRate-20)/180*100)+'%';
          const sliders=[
            {lbl:lang==='fr'?'PERSONNES EN REPORTING MANUEL':'PEOPLE IN MANUAL REPORTING',v:analysts,set:setAnalysts,min:1,max:20,unit:lang==='fr'?'pers.':'people',pct:pctA},
            {lbl:lang==='fr'?'HEURES / SEMAINE PERDUES':'HOURS / WEEK WASTED',v:hoursWasted,set:setHoursWasted,min:2,max:40,unit:'h',pct:pctH},
            {lbl:lang==='fr'?'TAUX HORAIRE MOYEN':'AVG HOURLY RATE',v:hourlyRate,set:setHourlyRate,min:20,max:200,unit:'€/h',pct:pctR},
          ];
          const gCard={backdropFilter:'var(--glass-blur)',WebkitBackdropFilter:'var(--glass-blur)',background:'var(--glass-bg)',border:'1px solid var(--glass-border)',borderRadius:14,boxShadow:'var(--glass-shadow)'};
          return(
          <div style={{display:'flex',flexDirection:'column',gap:12}}>

            {/* Intro banner */}
            <div style={{...gCard,padding:'14px 18px',display:'flex',alignItems:'center',gap:14,borderLeft:'3px solid var(--danger)'}}>
              <span style={{fontSize:22,flexShrink:0}}>⏳</span>
              <div>
                <div style={{...label8,color:'var(--danger)',marginBottom:3,fontSize:7.5,letterSpacing:'2px'}}>{lang==='fr'?'CALCULATEUR · COÛT DU STATU QUO':'CALCULATOR · COST OF DOING NOTHING'}</div>
                <div style={{fontSize:10,color:'var(--text-sec)',lineHeight:1.6}}>{lang==='fr'?'Chaque heure de reporting manuel est de l\'argent brûlé. Ajustez les curseurs — le compteur tourne en direct.':'Every hour of manual reporting is money burned. Adjust the sliders — the meter runs live.'}</div>
              </div>
            </div>

            <div className="dash-hiring-layout" style={{display:'grid',gap:12}}>

              {/* LEFT — sliders */}
              <div style={{display:'flex',flexDirection:'column',gap:9}}>
                {sliders.map((s,i)=>(
                  <div key={i} style={{...gCard,padding:'14px 16px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:10}}>
                      <span style={{...label8,fontSize:7,color:'var(--text-mute)'}}>{s.lbl}</span>
                      <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.7rem',color:'var(--danger)',lineHeight:1}}>{s.v}<span style={{fontSize:'.58rem',fontFamily:"'Space Mono',monospace",color:'var(--text-mute)',marginLeft:3}}>{s.unit}</span></span>
                    </div>
                    <input type="range" min={s.min} max={s.max} value={s.v} onChange={e=>s.set(+e.target.value)}
                      style={{width:'100%',height:4,borderRadius:3,appearance:'none',WebkitAppearance:'none',cursor:'pointer',outline:'none',
                        background:`linear-gradient(90deg,var(--danger) ${s.pct},rgba(217,91,91,.18) ${s.pct})`}}/>
                    <div style={{display:'flex',justifyContent:'space-between',fontFamily:"'Space Mono',monospace",fontSize:6.5,color:'var(--text-mute)',marginTop:5}}>
                      <span>{s.min}{s.unit==='€/h'?'€/h':''}</span><span>{s.max}{s.unit==='€/h'?'€/h':''}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT — numbers */}
              <div style={{display:'flex',flexDirection:'column',gap:9}}>

                {/* Weekly burn */}
                <div style={{...gCard,padding:'14px 16px',borderLeft:'3px solid var(--accent4)'}}>
                  <div style={{...label8,fontSize:7,marginBottom:7,color:'var(--text-mute)'}}>{lang==='fr'?'COÛT HEBDOMADAIRE':'WEEKLY BURN'}</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'2.2rem',color:'var(--accent4)',lineHeight:1}}>€{Math.round(weekCost).toLocaleString()}</div>
                  <div style={{...label8,fontSize:6.5,color:'var(--text-mute)',marginTop:5}}>{lang==='fr'?`${analysts} × ${hoursWasted}h × ${hourlyRate}€`:`${analysts} × ${hoursWasted}h × €${hourlyRate}`}</div>
                </div>

                {/* Annual cost — elegant crimson glass */}
                <div style={{...gCard,padding:'18px 16px',textAlign:'center',
                  background:'rgba(217,91,91,.1)',border:'1px solid rgba(217,91,91,.28)',
                  borderTop:'2px solid rgba(217,91,91,.5)'}}>
                  <div style={{...label8,color:'var(--danger)',marginBottom:8,fontSize:7.5,letterSpacing:'2px'}}>{lang==='fr'?'🔥 ARGENT BRÛLÉ PAR AN':'🔥 MONEY BURNED PER YEAR'}</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'3.2rem',color:'var(--danger)',lineHeight:1,letterSpacing:'1px'}}>€{yearCost.toLocaleString()}</div>
                  <div style={{fontFamily:"'Space Mono',monospace",fontSize:7,color:'var(--text-mute)',marginTop:7}}>{Math.round(analysts*hoursWasted)} h/{lang==='fr'?'sem':'week'} · {lang==='fr'?'0 valeur produite':'0 value produced'}</div>
                </div>

                {/* Recovery — elegant teal glass */}
                <div style={{...gCard,padding:'14px 16px',
                  background:'rgba(92,184,122,.08)',border:'1px solid rgba(92,184,122,.25)',
                  borderTop:'2px solid rgba(92,184,122,.45)'}}>
                  <div style={{...label8,color:'var(--accent3)',marginBottom:10,fontSize:7,letterSpacing:'2px'}}>{lang==='fr'?'✦ RÉCUPÉRÉ PAR AUTOMATISATION':'✦ RECOVERED VIA AUTOMATION'}</div>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                    <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'2.2rem',color:'var(--accent3)',lineHeight:1}}>€{savedYear.toLocaleString()}</div>
                    <div style={{...gCard,padding:'5px 12px',textAlign:'center',background:'rgba(94,141,238,.12)',border:'1px solid rgba(94,141,238,.25)',borderRadius:8}}>
                      <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.5rem',color:'#415a77',lineHeight:1}}>{roiPct}%</div>
                      <div style={{...label8,fontSize:6,color:'var(--text-mute)'}}>ROI Y1</div>
                    </div>
                  </div>
                  <div style={{height:4,background:'rgba(255,255,255,.08)',borderRadius:3,overflow:'hidden'}}>
                    <div style={{height:'100%',width:'85%',background:`linear-gradient(90deg,var(--accent3),var(--accent1))`,borderRadius:3}}/>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between',fontFamily:"'Space Mono',monospace",fontSize:6,color:'var(--text-mute)',marginTop:5}}>
                    <span>0%</span><span style={{color:'var(--accent3)'}}>85% {lang==='fr'?'récupéré':'recovered'}</span><span>100%</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom CTA */}
            <div style={{...gCard,display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap',padding:'14px 18px'}}>
              <div style={{display:'flex',gap:28,alignItems:'center',flexWrap:'wrap'}}>
                <div>
                  <div style={{...label8,fontSize:6.5,color:'var(--text-mute)',marginBottom:4}}>{lang==='fr'?'PAYBACK ESTIMÉ':'ESTIMATED PAYBACK'}</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.7rem',color:'#415a77',lineHeight:1}}>{lang==='fr'?'< 3 mois':'< 3 months'}</div>
                </div>
                <div>
                  <div style={{...label8,fontSize:6.5,color:'var(--text-mute)',marginBottom:4}}>{lang==='fr'?'ÉCONOMIE AN 3':'3-YEAR SAVING'}</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'1.7rem',color:'var(--accent3)',lineHeight:1}}>€{Math.round(savedYear*3).toLocaleString()}</div>
                </div>
              </div>
              <button onClick={()=>window.location.href='mailto:antoinedemaintenant@alumni.ie.edu'} style={{
                padding:'11px 22px',borderRadius:10,border:'none',
                background:'linear-gradient(135deg,var(--accent1),var(--accent2))',color:'#fff',
                fontFamily:"'Space Mono',monospace",fontSize:8,letterSpacing:'1.5px',
                cursor:'pointer',transition:'all .25s',textTransform:'uppercase',whiteSpace:'nowrap',flexShrink:0,
                boxShadow:'0 4px 16px rgba(94,141,238,.35)'
              }}>📩 {lang==='fr'?'Stopper l\'hémorragie →':'Stop the bleeding →'}</button>
            </div>

          </div>
        );})()}

      </div>
    </div>
  );
}

/* ─── PIPELINE ──────────────────────────────────────────────────────────────── */
function Pipeline({lang}){
  const t=T[lang];
  const CATS=lang==='fr'?[
    {id:'finance',icon:'💰',label:'Finance & Clôture',color:'#00F0A8'},
    {id:'sales',icon:'📈',label:'Ventes & CRM',color:'#415a77'},
    {id:'supply',icon:'📦',label:'Supply Chain',color:'#FFB800'},
    {id:'linkedin',icon:'🤝',label:'Prospection LinkedIn',color:'#0091FF'},
    {id:'reporting',icon:'📊',label:'Reporting Auto',color:'#FF2D78'},
  ]:[
    {id:'finance',icon:'💰',label:'Finance & Close',color:'#00F0A8'},
    {id:'sales',icon:'📈',label:'Sales & CRM',color:'#415a77'},
    {id:'supply',icon:'📦',label:'Supply Chain',color:'#FFB800'},
    {id:'linkedin',icon:'🤝',label:'LinkedIn Prospecting',color:'#0091FF'},
    {id:'reporting',icon:'📊',label:'Auto Reporting',color:'#FF2D78'},
  ];
  const FLOWS=lang==='fr'?{
    finance:[
      {icon:'🗄️',label:'SAP / ERP',detail:'Export comptable auto',color:'#00F0A8'},
      {icon:'🔄',label:'ETL Python',detail:'Transform · nettoyage',color:'#00F0A8'},
      {icon:'📊',label:'Tableaux / KPIs',detail:'Builder Power BI · DAX',color:'#00F0A8'},
      {icon:'🤖',label:'LLM Commentaires',detail:'GPT-4 · analyse IA',color:'#00F0A8'},
      {icon:'📄',label:'Bilan PDF',detail:'Génération auto Word/PDF',color:'#00F0A8'},
      {icon:'📬',label:'Envoi automatique',detail:'Équipes + DG · 0 action',color:'#00F0A8'},
    ],
    sales:[
      {icon:'🛒',label:'Shopify',detail:'Ventes temps réel',color:'#415a77'},
      {icon:'📊',label:'Google Analytics',detail:'Trafic · conversions',color:'#415a77'},
      {icon:'🔍',label:'SEMrush',detail:'SEO · concurrents',color:'#415a77'},
      {icon:'🔀',label:'N8N / Make.com',detail:'Orchestration auto',color:'#415a77'},
      {icon:'📈',label:'Power BI live',detail:'Dashboard unifié',color:'#415a77'},
      {icon:'📱',label:'Alertes Slack',detail:'Seuils · notif équipes',color:'#415a77'},
    ],
    supply:[
      {icon:'🏭',label:'ERP Stock',detail:'Niveaux réels',color:'#FFB800'},
      {icon:'🧮',label:'Prévision IA',detail:'Prophet / ML',color:'#FFB800'},
      {icon:'📉',label:'Détection',detail:'Risques rupture',color:'#FFB800'},
      {icon:'📧',label:'PO auto',detail:'Bon commande',color:'#FFB800'},
      {icon:'✅',label:'Validation',detail:'Approbation DG',color:'#FFB800'},
    ],
    linkedin:[
      {icon:'🎯',label:'ICP Ciblage',detail:'Critères ideal',color:'#0091FF'},
      {icon:'🔍',label:'Sales Nav',detail:'Scraping auto',color:'#0091FF'},
      {icon:'🤖',label:'IA Rédac',detail:'Message perso',color:'#0091FF'},
      {icon:'📤',label:'Séquence',detail:'3 touchpoints',color:'#0091FF'},
      {icon:'📥',label:'CRM Sync',detail:'Réponses trackées',color:'#0091FF'},
    ],
    reporting:[
      {icon:'📡',label:'Sources',detail:'API + Sheets',color:'#FF2D78'},
      {icon:'🔄',label:'ETL auto',detail:'Refresh nuit',color:'#FF2D78'},
      {icon:'📊',label:'Power BI',detail:'Calculs DAX',color:'#FF2D78'},
      {icon:'🤖',label:'Narration IA',detail:'Insights texte',color:'#FF2D78'},
      {icon:'📨',label:'Distribution',detail:'Mail hebdo auto',color:'#FF2D78'},
    ],
  }:{
    finance:[
      {icon:'🗄️',label:'SAP / ERP',detail:'Auto accounting export',color:'#00F0A8'},
      {icon:'🔄',label:'ETL Python',detail:'Transform · clean',color:'#00F0A8'},
      {icon:'📊',label:'Tables / KPIs',detail:'Power BI builder · DAX',color:'#00F0A8'},
      {icon:'🤖',label:'LLM Commentary',detail:'GPT-4 · AI analysis',color:'#00F0A8'},
      {icon:'📄',label:'Balance PDF',detail:'Auto Word/PDF gen',color:'#00F0A8'},
      {icon:'📬',label:'Auto delivery',detail:'Teams + CEO · 0 action',color:'#00F0A8'},
    ],
    sales:[
      {icon:'🛒',label:'Shopify',detail:'Real-time sales',color:'#415a77'},
      {icon:'📊',label:'Google Analytics',detail:'Traffic · conversions',color:'#415a77'},
      {icon:'🔍',label:'SEMrush',detail:'SEO · competitors',color:'#415a77'},
      {icon:'🔀',label:'N8N / Make.com',detail:'Auto orchestration',color:'#415a77'},
      {icon:'📈',label:'Power BI live',detail:'Unified dashboard',color:'#415a77'},
      {icon:'📱',label:'Slack alerts',detail:'Thresholds · team notifs',color:'#415a77'},
    ],
    supply:[
      {icon:'🏭',label:'ERP Stock',detail:'Real levels',color:'#FFB800'},
      {icon:'🧮',label:'AI Forecast',detail:'Prophet / ML',color:'#FFB800'},
      {icon:'📉',label:'Detection',detail:'Stockout risk',color:'#FFB800'},
      {icon:'📧',label:'Auto PO',detail:'Purchase order',color:'#FFB800'},
      {icon:'✅',label:'Validation',detail:'CEO approval',color:'#FFB800'},
    ],
    linkedin:[
      {icon:'🎯',label:'ICP Targeting',detail:'Ideal criteria',color:'#0091FF'},
      {icon:'🔍',label:'Sales Nav',detail:'Auto scraping',color:'#0091FF'},
      {icon:'🤖',label:'AI Writing',detail:'Personal msg',color:'#0091FF'},
      {icon:'📤',label:'Sequence',detail:'3 touchpoints',color:'#0091FF'},
      {icon:'📥',label:'CRM Sync',detail:'Tracked replies',color:'#0091FF'},
    ],
    reporting:[
      {icon:'📡',label:'Sources',detail:'API + Sheets',color:'#FF2D78'},
      {icon:'🔄',label:'Auto ETL',detail:'Night refresh',color:'#FF2D78'},
      {icon:'📊',label:'Power BI',detail:'DAX calcs',color:'#FF2D78'},
      {icon:'🤖',label:'AI Narrative',detail:'Text insights',color:'#FF2D78'},
      {icon:'📨',label:'Distribution',detail:'Weekly auto mail',color:'#FF2D78'},
    ],
  };
  const DESCS=lang==='fr'?{
    finance:'Récupération automatique des données comptables, analyse par IA, génération du document de clôture et envoi automatique aux équipes — sans aucune saisie manuelle.',
    sales:'Surveillance des ventes en temps réel, alertes automatiques sur les écarts, dashboard Power BI live mis à jour chaque heure et diffusé aux commerciaux.',
    supply:'Prévision des ruptures de stock 8 semaines à l\'avance, génération automatique des bons de commande et workflow d\'approbation digitalisé.',
    linkedin:'Identification des prospects idéaux via Sales Navigator, personnalisation des messages par IA et séquence de relance automatisée avec suivi CRM.',
    reporting:'Collecte multi-sources, transformation nocturne, rapport Power BI enrichi par narration IA et envoyé automatiquement chaque lundi matin.',
  }:{
    finance:'Automatic retrieval of accounting data, AI-powered analysis, financial close document generation and auto-delivery to stakeholders — zero manual input.',
    sales:'Real-time sales monitoring, automatic gap alerts, live Power BI dashboard updated every hour and pushed to the sales team.',
    supply:'8-week stockout forecasting with AI, automatic purchase order generation and digitized approval workflow.',
    linkedin:'Ideal prospect identification via Sales Navigator, AI-personalized messages and automated follow-up sequence with CRM tracking.',
    reporting:'Multi-source collection, overnight transformation, Power BI report enriched with AI narrative and automatically sent every Monday morning.',
  };
  const STATS=lang==='fr'?{
    finance:['−40h/mois clôture','−95% erreurs saisie','Livré en 6 min auto'],
    sales:['Alertes < 5 min','Dashboard 100% live','0 rapport manuel'],
    supply:['Ruptures −80%','Lead time optimisé','PO en 1 clic'],
    linkedin:['5× plus de réponses','100 prospects/jour','Séquence 3 msgs'],
    reporting:['Lundi 8h00 auto','14 rapports/semaine','0 copier-coller'],
  }:{
    finance:['−40h/month close','−95% entry errors','Delivered in 6 min'],
    sales:['Alerts < 5 min','100% live dashboard','0 manual report'],
    supply:['Stockouts −80%','Lead time optimized','PO in 1 click'],
    linkedin:['5× more replies','100 prospects/day','3-msg sequence'],
    reporting:['Monday 8AM auto','14 reports/week','0 copy-paste'],
  };
  const [active,setActive]=useState('finance');
  const [running,setRunning]=useState(false);
  const [done,setDone]=useState(-1);
  const [logs,setLogs]=useState([]);
  const logRef=useRef();
  const cat=CATS.find(c=>c.id===active);
  const flow=FLOWS[active];
  const desc=DESCS[active];
  const stats=STATS[active];
  useEffect(()=>{setDone(-1);setLogs([]);setRunning(false);},[active,lang]);
  async function runFlow(){
    if(running)return;
    setRunning(true);setDone(-1);setLogs([]);
    for(let i=0;i<flow.length;i++){
      await new Promise(r=>setTimeout(r,750));
      setDone(i);
      setLogs(l=>[...l,{step:flow[i].label,detail:flow[i].detail}]);
      if(logRef.current)setTimeout(()=>{if(logRef.current)logRef.current.scrollTop=9999},50);
    }
    setRunning(false);
  }
  return(
    <div className="pipeline-wrap reveal">
      {/* Category selector */}
      <div className="pipeline-cats" style={{display:'flex',gap:8,marginBottom:20,flexWrap:'wrap'}}>
        {CATS.map(c=>(<button key={c.id} onClick={()=>setActive(c.id)} style={{padding:'8px 14px',borderRadius:8,border:`1.5px solid ${active===c.id?c.color:'var(--border-dim)'}`,background:active===c.id?`rgba(${c.color==='#00F0A8'?'0,240,168':c.color==='#415a77'?'191,58,255':c.color==='#FFB800'?'255,184,0':c.color==='#0091FF'?'0,145,255':'255,45,120'},0.12)`:'var(--bg)',color:active===c.id?c.color:'var(--text-dim)',fontSize:11,fontFamily:"'Space Mono',monospace",fontWeight:700,cursor:'pointer',letterSpacing:'0.5px',transition:'all .25s',display:'flex',alignItems:'center',gap:6}}>
          <span>{c.icon}</span><span>{c.label}</span>
        </button>))}
      </div>

      {/* Flow steps */}
      <div className="pipeline-stages" style={{marginBottom:14}}>
        {flow.map((s,i)=>(
          <React.Fragment key={i}>
            <div className={`p-node${running&&i===done+1?' running':''}${i<=done?' done':''}`} style={i<=done?{borderColor:cat.color,background:`rgba(${cat.color==='#00F0A8'?'0,240,168':cat.color==='#415a77'?'191,58,255':cat.color==='#FFB800'?'255,184,0':cat.color==='#0091FF'?'0,145,255':'255,45,120'},0.1)`}:{}}>
              {i<done&&<span className="p-node-tick" style={{background:cat.color}}>✓</span>}
              {i===done&&running&&<span className="p-node-tick" style={{background:cat.color}}>⟳</span>}
              <span className="p-node-icon">{s.icon}</span>
              <span className="p-node-label">{s.label}</span>
              <span className="p-node-detail">{s.detail}</span>
            </div>
            {i<flow.length-1&&<div className="p-connector"><div className="p-connector-fill" style={{width:done>=i?'100%':'0%',background:cat.color,transition:'width 0.4s'}}/></div>}
          </React.Fragment>
        ))}
      </div>

      {/* Description */}
      <div style={{background:'var(--glass-bg)',border:'1px solid var(--border-dim)',borderRadius:8,padding:'12px 16px',marginBottom:12,fontSize:12,color:'var(--text-sec)',lineHeight:1.7}}>
        {desc}
      </div>

      {/* Stats */}
      <div className="pipeline-stats" style={{display:'flex',gap:10,marginBottom:14}}>
        {stats.map((s,i)=>(<div key={i} style={{flex:1,background:`rgba(${cat.color==='#00F0A8'?'0,240,168':cat.color==='#415a77'?'191,58,255':cat.color==='#FFB800'?'255,184,0':cat.color==='#0091FF'?'0,145,255':'255,45,120'},0.08)`,border:`1px solid rgba(${cat.color==='#00F0A8'?'0,240,168':cat.color==='#415a77'?'191,58,255':cat.color==='#FFB800'?'255,184,0':cat.color==='#0091FF'?'0,145,255':'255,45,120'},0.25)`,borderRadius:8,padding:'8px 12px',textAlign:'center'}}>
          <div style={{fontSize:11,fontWeight:700,color:cat.color,fontFamily:"'Space Mono',monospace"}}>{s}</div>
        </div>))}
      </div>

      {/* Log */}
      {logs.length>0&&<div className="pipeline-log" ref={logRef} style={{marginBottom:12}}>
        {logs.map((l,i)=><div key={i} className="log-line"><span style={{color:cat.color}}>[{l.step}]</span> {l.detail} ✓</div>)}
        {!running&&done===flow.length-1&&<div className="log-line" style={{color:cat.color,fontWeight:700}}>✅ {lang==='fr'?'Automatisation complète — 0 intervention manuelle':'Automation complete — 0 manual intervention'}</div>}
      </div>}

      <button className="run-btn" onClick={runFlow} disabled={running} style={{background:`linear-gradient(135deg,${cat.color},${cat.color==='#00F0A8'?'#415a77':cat.color==='#415a77'?'#FF2D78':'#00F0A8'})`}}>
        {running?(lang==='fr'?'EN COURS...':'RUNNING...'):(lang==='fr'?`▶ SIMULER ${cat.label.toUpperCase()}`:`▶ SIMULATE ${cat.label.toUpperCase()}`)}
      </button>
    </div>
  );
}
/* ─── RADAR ─────────────────────────────────────────────────────────────────── */
function RadarChart({lang,compact}){
  const t=T[lang];const canvasRef=useRef();const chartRef=useRef();
  const data=RADAR_DATA[lang];
  const COLORS=['#415a77','#FF2D78','#00F0A8','#FFB800','#00C8FF','#FF8C42'];
  useEffect(()=>{
    if(!canvasRef.current)return;
    chartRef.current?.destroy();
    const th=document.body.getAttribute('data-theme');
    const gridColor=th==='light'?'rgba(114,0,212,.1)':'rgba(191,58,255,.12)';
    const tickColor=th==='light'?'#6050A0':'#7A6B9E';
    chartRef.current=new Chart(canvasRef.current,{type:'radar',data:{labels:data.labels,datasets:[{data:data.data,fill:true,backgroundColor:'rgba(191,58,255,.15)',borderColor:'#415a77',borderWidth:2,pointBackgroundColor:COLORS,pointBorderColor:'#fff',pointBorderWidth:2,pointRadius:5,pointHoverRadius:7}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:1400,easing:'easeOutQuart'},plugins:{legend:{display:false}},scales:{r:{min:0,max:100,ticks:{stepSize:25,color:tickColor,backdropColor:'transparent',font:{family:'Space Mono',size:8}},grid:{color:gridColor},pointLabels:{color:tickColor,font:{family:'Space Mono',size:9,weight:'600'}},angleLines:{color:gridColor}}}}});
    return()=>chartRef.current?.destroy();
  },[lang]);
  return(
    <div className={`radar-wrap reveal${compact?' radar-wrap-compact':''}`}>
      <div className="radar-chart-wrap"><canvas ref={canvasRef}/></div>
      {!compact&&(<div className="radar-legend">{data.details.map((d,i)=>(<div key={i} className="radar-legend-item"><div className="radar-legend-dot" style={{background:COLORS[i]}}/><div style={{flex:1}}><div className="radar-legend-label">{d.label}</div><div className="radar-legend-sub">{d.sub}</div></div><div className="radar-legend-pct">{d.pct}%</div></div>))}</div>)}
    </div>
  );
}

/* ─── TERMINAL CHATBOT ──────────────────────────────────────────────────────── */
function TerminalChatbot({lang}){
  const t=T[lang];const cmds=TERMINAL_CMDS[lang];
  const [history,setHistory]=useState([{t:'sys',m:lang==='fr'?"Bienvenue — antoine@portfolio:~$":"Welcome — antoine@portfolio:~$"},{t:'dim',m:lang==='fr'?"Tapez 'help' pour voir les commandes.":"Type 'help' to see commands."}]);
  const [input,setInput]=useState('');const [cmdHist,setCmdHist]=useState([]);const [histIdx,setHistIdx]=useState(-1);const [typing,setTyping]=useState(false);
  const outRef=useRef();const inRef=useRef();
  useEffect(()=>{setHistory([{t:'sys',m:lang==='fr'?"Bienvenue — antoine@portfolio:~$":"Welcome — antoine@portfolio:~$"},{t:'dim',m:lang==='fr'?"Tapez 'help' pour voir les commandes.":"Type 'help' to see commands."}]);},[lang]);
  useEffect(()=>{if(outRef.current)outRef.current.scrollTop=outRef.current.scrollHeight;},[history,typing]);
  const colorClass={sys:'chat-line-sys',info:'chat-line-info',cmd:'chat-line-info',dim:'chat-line-dim',acc2:'chat-line-acc2',acc3:'chat-line-sys',acc4:'chat-line-acc4',err:'chat-line-err'};
  async function runCmd(raw){
    const cmd=raw.trim().toLowerCase();if(!cmd)return;
    setCmdHist(h=>[raw,...h]);setHistIdx(-1);
    setHistory(h=>[...h,{t:'user',m:`> ${raw}`}]);
    if(cmd==='clear'){setTimeout(()=>setHistory([]),100);return;}
    const def=cmds[cmd]||cmds[raw.trim()];
    if(!def){setHistory(h=>[...h,{t:'err',m:lang==='fr'?`Commande '${cmd}' introuvable. Tapez 'help'.`:`Command '${cmd}' not found. Type 'help'.`}]);return;}
    window.XP&&window.XP.earn('terminal_cmd');
    setTyping(true);
    for(let i=0;i<def.output.length;i++){await new Promise(r=>setTimeout(r,i===0?200:75));setHistory(h=>[...h,def.output[i]]);}
    setTyping(false);
  }
  function handleKey(e){
    if(e.key==='Enter'){runCmd(input);setInput('');}
    else if(e.key==='ArrowUp'){const ni=Math.min(histIdx+1,cmdHist.length-1);setHistIdx(ni);setInput(cmdHist[ni]||'');}
    else if(e.key==='ArrowDown'){const ni=Math.max(histIdx-1,-1);setHistIdx(ni);setInput(ni===-1?'':cmdHist[ni]||'');}
    else if(e.key==='Tab'){e.preventDefault();const keys=Object.keys(cmds);const m=keys.find(k=>k.startsWith(input));if(m)setInput(m);}
  }
  return(
    <div className="terminal-chat reveal">
      <div className="chat-bar"><div className="t-dot t-red"/><div className="t-dot t-yellow"/><div className="t-dot t-green"/><span className="terminal-path">antoine@portfolio:~$</span></div>
      <div className="chat-output" ref={outRef} onClick={()=>inRef.current?.focus()}>
        {history.map((l,i)=>(<div key={i} className={l.t==='user'?'chat-line-user':colorClass[l.t]||'chat-line-info'}>{l.m}</div>))}
        {typing&&<div className="chat-line-dim">▊</div>}
      </div>
      <div className="chat-input-row"><span className="chat-prompt-label">$</span><input ref={inRef} className="chat-input" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKey} autoComplete="off" spellCheck="false" placeholder={t.terminalHint}/></div>
      <div className="chat-hint">TAB autocomplete · ↑↓ history · try: help, ./hack.sh, secret</div>
    </div>
  );
}

/* ─── RECRUITER MODAL ───────────────────────────────────────────────────────── */
function RecruiterModal({lang,onClose}){
  const t=T[lang];const [profile,setProfile]=useState(null);
  const profileKeys=['executive','tech','data','hr'];
  function pick(i){setProfile(profileKeys[i]);window.XP&&window.XP.earn('recruiter');}
  const pdata=profile&&RECRUITER_PROFILES[profile]?.[lang];
  return(
    <div className="recruiter-modal-overlay" onClick={onClose}>
      <div className="recruiter-modal" onClick={e=>e.stopPropagation()}>
        <div className="recruiter-modal-header">
          <div className="recruiter-modal-title">⚡ {t.recruiterTitle}</div>
          <div className="recruiter-modal-sub">{t.recruiterSub}</div>
        </div>
        {!profile?(
          <div className="recruiter-modal-body">
            <div className="recruiter-q">{t.recruiterQ}</div>
            <div className="recruiter-options">
              {t.recruiterProfiles.map((p,i)=>(<button key={i} className="recruiter-option" onClick={()=>pick(i)}><span className="recruiter-option-icon">{p.icon}</span><div><div style={{fontWeight:700,marginBottom:'2px'}}>{p.label}</div><div style={{fontSize:'.72rem',color:'var(--text-mute)'}}>{p.sub}</div></div></button>))}
            </div>
          </div>
        ):(
          <div className="recruiter-mode-content">
            <div className="recruiter-mode-title">{pdata?.title}</div>
            <div className="recruiter-highlight">
              <div className="recruiter-highlight-title">{lang==='fr'?'CE QUI COMPTE POUR VOUS':'WHAT MATTERS TO YOU'}</div>
              <div className="recruiter-highlight-items">{pdata?.highlights.map((h,i)=>(<div key={i} className="recruiter-highlight-item">{h}</div>))}</div>
            </div>
            <div className="recruiter-mode-text">{pdata?.note}</div>
            <button className="recruiter-close-btn" onClick={onClose}>{lang==='fr'?'✓ COMPRIS, MERCI':'✓ GOT IT, THANKS'}</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── BLOG ──────────────────────────────────────────────────────────────────── */
function Blog({lang}){
  const t=T[lang];const [openPost,setOpenPost]=useState(null);const posts=BLOG_POSTS[lang];
  return(<>
    {openPost&&(<div className="blog-modal-overlay" onClick={()=>setOpenPost(null)}><div className="blog-modal" onClick={e=>e.stopPropagation()}><div className="blog-modal-inner"><div className="blog-modal-tag">{openPost.tag}</div><div className="blog-modal-title">{openPost.title}</div><div className="blog-modal-meta">{openPost.date} · {openPost.readTime} {t.blogReadTime}</div><div className="blog-modal-body" dangerouslySetInnerHTML={{__html:openPost.body}}/><button className="blog-modal-close" onClick={()=>setOpenPost(null)}>{t.blogClose}</button></div></div></div>)}
    <div className="blog-grid">{posts.map((p,i)=>(<div key={i} className={`blog-card reveal reveal-delay-${i+1}`} onClick={()=>setOpenPost(p)}><div className="blog-tag">{p.tag}</div><div className="blog-title">{p.title}</div><div className="blog-excerpt">{p.excerpt}</div><div className="blog-meta"><span>{p.date}</span><span>·</span><span>{p.readTime} {t.blogReadTime}</span></div><div className="blog-read-more">{t.blogRead}</div></div>))}</div>
  </>);
}

/* ─── MISC COMPONENTS ───────────────────────────────────────────────────────── */
function ScrollToTop({lang}){const t=T[lang];const [show,setShow]=useState(false);useEffect(()=>{const h=()=>setShow(window.scrollY>400);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);},[]);return(<button className={`scroll-top${show?' visible':''}`} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>{t.scrollTop}</button>);}

function FloatingPills({lang,mode}){
  // phase: 'float' | 'explode' | 'hidden' | 'return'
  const [phase,setPhase]=useState('float');
  const phaseRef=useRef('float');
  const isHuman=mode==='human';
  const grad=isHuman?'linear-gradient(135deg,#415a77,#7C3AED)':'linear-gradient(135deg,#BF3AFF,#FF2D78)';
  const glows=isHuman
    ?['rgba(65,90,119,.55)','rgba(124,58,237,.45)','rgba(65,90,119,.4)']
    :['rgba(191,58,255,.55)','rgba(191,58,255,.45)','rgba(255,45,120,.4)'];
  const labelColor=isHuman?'#7C3AED':'#415a77';
  const label3Color=isHuman?'#7C3AED':'#FF2D78';

  useEffect(()=>{phaseRef.current=phase;},[phase]);

  useEffect(()=>{
    let t1=null,t2=null;
    const onScroll=()=>{
      const down=window.scrollY>80;
      const p=phaseRef.current;
      if(down&&(p==='float')){
        setPhase('explode');phaseRef.current='explode';
        t1=setTimeout(()=>{setPhase('hidden');phaseRef.current='hidden';},500);
      } else if(!down&&(p==='hidden'||p==='explode')){
        clearTimeout(t1);
        setPhase('return');phaseRef.current='return';
        t2=setTimeout(()=>{setPhase('float');phaseRef.current='float';},650);
      }
    };
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>{window.removeEventListener('scroll',onScroll);clearTimeout(t1);clearTimeout(t2);};
  },[]);

  const pills=[
    {tag:'a',href:'mailto:antoinedemaintenant@alumni.ie.edu',icon:'✉️',size:50,gi:0,lc:labelColor,label:lang==='fr'?'M\'écrire':'Email me',top:'26%',right:'20px',floatAnim:'floatA 3.2s ease-in-out infinite',explodeAnim:'explodePill1 0.5s ease-in forwards',returnAnim:'returnPill1 0.65s cubic-bezier(.18,.89,.32,1.28) forwards'},
    {tag:'a',href:'#certificates',onClick:true,icon:'🎓',size:46,gi:1,lc:labelColor,label:lang==='fr'?'8 Certifs':'8 Certs',top:'42%',right:'60px',floatAnim:'floatB 4s 0.8s ease-in-out infinite',explodeAnim:'explodePill2 0.5s 0.05s ease-in forwards',returnAnim:'returnPill2 0.65s 0.05s cubic-bezier(.18,.89,.32,1.28) forwards'},
    {tag:'button',icon:'💼',size:46,gi:2,lc:label3Color,label:lang==='fr'?'Expériences':'Experience',top:'58%',right:'28px',floatAnim:'floatC 3.6s 1.5s ease-in-out infinite',explodeAnim:'explodePill3 0.5s 0.1s ease-in forwards',returnAnim:'returnPill3 0.65s 0.1s cubic-bezier(.18,.89,.32,1.28) forwards'},
  ];

  return(<>{pills.map((p,i)=>{
    const anim=phase==='float'?p.floatAnim:phase==='explode'?p.explodeAnim:phase==='return'?p.returnAnim:'none';
    const st={
      position:'fixed',right:p.right,top:p.top,
      display:'flex',flexDirection:'column',alignItems:'center',gap:6,
      textDecoration:'none',background:'none',border:'none',cursor:'pointer',zIndex:480,
      animation:anim,
      visibility:phase==='hidden'?'hidden':'visible',
      pointerEvents:phase==='hidden'||phase==='explode'?'none':'auto',
    };
    const inner=(<>
      <div style={{width:p.size,height:p.size,borderRadius:'50%',background:grad,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:`0 0 26px ${glows[p.gi]}`,fontSize:p.size===50?22:20}}>{p.icon}</div>
      <span style={{fontFamily:"'Space Mono',monospace",fontSize:p.size===50?'.4rem':'.38rem',color:p.lc,letterSpacing:'2px',textTransform:'uppercase',whiteSpace:'nowrap'}}>{p.label}</span>
      <div style={{width:1,height:p.size===50?18:14,background:grad.replace('135deg','180deg').replace(/,[^,]+\)$/,',transparent)')}}/>
    </>);
    if(p.tag==='button')return(<button key={i} className="floating-pill" onClick={()=>{const el=document.getElementById('experience');if(el)el.scrollIntoView({behavior:'smooth'});}} style={st}>{inner}</button>);
    if(p.onClick)return(<a key={i} className="floating-pill" href={p.href} onClick={e=>{e.preventDefault();const el=document.getElementById('certificates');if(el)el.scrollIntoView({behavior:'smooth'});}} style={st}>{inner}</a>);
    return(<a key={i} className="floating-pill" href={p.href} style={st}>{inner}</a>);
  })}</>);
}
function VisitorBadge({lang}){const t=T[lang];const [c,setC]=useState(2847);useEffect(()=>{const iv=setInterval(()=>setC(x=>x+Math.floor(Math.random()*2)),55000);return()=>clearInterval(iv);},[]);return(<div className="visitor-badge"><div className="vb-dot"/><span style={{color:"var(--text)"}}>{c.toLocaleString()}</span><span>{t.visitors}</span></div>);}
/* ─── VISITOR LIVE MAP ───────────────────────────────────────────────────────── */
// Approx geographic centroid per ISO-3166 country code. Used as a fallback
// when the worker returns a visit with country/city text but no lat/lon —
// without this the map stays empty even though we claim N geolocated visits.
const COUNTRY_CENTROIDS={
  fr:[46.2,2.2],us:[39.8,-98.6],ca:[56.1,-106.3],gb:[54.0,-2.0],uk:[54.0,-2.0],
  de:[51.2,10.4],es:[40.4,-3.7],it:[41.9,12.6],nl:[52.1,5.3],be:[50.5,4.5],
  ch:[46.8,8.2],at:[47.5,14.6],pt:[39.4,-8.2],ie:[53.4,-8.2],se:[60.1,18.6],
  no:[60.5,8.5],dk:[56.3,9.5],fi:[61.9,25.7],pl:[51.9,19.1],cz:[49.8,15.5],
  gr:[39.1,21.8],ro:[45.9,24.9],hu:[47.2,19.5],tr:[39.0,35.2],ua:[48.4,31.2],
  ru:[61.5,105.3],ae:[23.4,53.8],sa:[23.9,45.1],il:[31.0,34.8],lb:[33.9,35.8],
  in:[20.6,78.9],cn:[35.8,104.2],jp:[36.2,138.3],kr:[35.9,127.8],sg:[1.4,103.8],
  my:[4.2,101.9],th:[15.9,100.9],id:[-0.8,113.9],ph:[12.9,121.8],vn:[14.1,108.3],
  hk:[22.4,114.1],tw:[23.7,121.0],au:[-25.3,133.8],nz:[-40.9,174.9],za:[-30.6,22.9],
  mx:[23.6,-102.6],br:[-14.2,-51.9],ar:[-38.4,-63.6],cl:[-35.7,-71.5],co:[4.6,-74.3],
  pe:[-9.2,-75.0],eg:[26.8,30.8],ng:[9.1,8.7],ma:[31.8,-7.1],tn:[33.9,9.5],
  ke:[-0.0,37.9],lu:[49.8,6.1],is:[64.9,-19.0],ee:[58.6,25.0],lv:[56.9,24.6],
  lt:[55.2,23.9],sk:[48.7,19.7],si:[46.1,14.8],hr:[45.1,15.2],bg:[42.7,25.5],
  cy:[35.1,33.4],mt:[35.9,14.4]
};
function VisitorMap({lang,mode}){
  const WORKER_URL="https://dm_antoine--a8211e3c18ee11f18d2742dde27851f2.web.val.run";
  const mapRef=useRef(null);
  const leafletMap=useRef(null);
  const markersLayer=useRef(null);
  const [myGeo,setMyGeo]=useState(null);
  const [mapReady,setMapReady]=useState(false);
  const [realCount,setRealCount]=useState(null); // real count from tracking POST response
  const FALLBACK=2847;
  const isHuman=mode==='human';

  // 1. Geo-locate current visitor (real IP)
  useEffect(()=>{
    fetch('https://ipapi.co/json/',{signal:AbortSignal.timeout(5000)})
      .then(r=>r.json())
      .then(d=>{
        if(d&&d.latitude){
          setMyGeo({lat:d.latitude,lon:d.longitude,city:d.city,country:d.country_name,countryCode:d.country_code});
        }
      })
      .catch(()=>{});
  },[]);

  // 2. GET worker → count réel + locations historiques
  const [pastLocations,setPastLocations]=useState([]);
  useEffect(()=>{
    // Fallback depuis l'event POST si dispo immédiatement
    if(typeof window.__realVisitCount==='number') setRealCount(window.__realVisitCount);
    else{try{const s=sessionStorage.getItem('__visitCount');if(s)setRealCount(parseInt(s));}catch(e){}}
    // Event POST
    const handler=(e)=>{if(typeof e.detail==='number')setRealCount(e.detail);};
    window.addEventListener('workerCount',handler);
    // GET pour count + locations historiques
    fetch(WORKER_URL,{method:'GET',signal:AbortSignal.timeout(5000)})
      .then(r=>r.ok?r.json():null)
      .then(d=>{
        if(!d)return;
        if(typeof d.count==='number'&&d.count>0)setRealCount(d.count);
        if(Array.isArray(d.locations)&&d.locations.length>0)setPastLocations(d.locations);
      })
      .catch(()=>{});
    return()=>window.removeEventListener('workerCount',handler);
  },[]);

  const displayCount=realCount??FALLBACK;

  // 3. Init Leaflet — Voyager tiles (clean neutral grey with labels) in both
  // modes. `dark_all` was still too dim against our black background; Voyager
  // gives actual readability while a small CSS tint keeps it on-theme.
  useEffect(()=>{
    if(!mapRef.current||leafletMap.current)return;
    const tileUrl='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
    const initMap=(L)=>{
      if(!mapRef.current)return;
      const map=L.map(mapRef.current,{
        center:[30,15],zoom:3,minZoom:2,maxZoom:10,
        zoomControl:false,scrollWheelZoom:true,
        attributionControl:false,dragging:true,worldCopyJump:true,
        doubleClickZoom:true,touchZoom:true
      });
      L.control.zoom({position:'topright'}).addTo(map);
      L.tileLayer(tileUrl,{maxZoom:19,subdomains:'abcd'}).addTo(map);
      markersLayer.current=L.layerGroup().addTo(map);
      leafletMap.current=map;
      setMapReady(true);
    };
    if(window.L)initMap(window.L);
    else{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';s.onload=()=>initMap(window.L);document.head.appendChild(s);}
    return()=>{if(leafletMap.current){try{leafletMap.current.remove();}catch(e){}leafletMap.current=null;}};
  },[isHuman]);

  // 4. Pin current visitor + past locations on map
  useEffect(()=>{
    if(!leafletMap.current||!markersLayer.current||!window.L)return;
    const L=window.L;
    markersLayer.current.clearLayers();
    const dotColor=isHuman?'#7C3AED':'#00F0A8';

    // Past locations (real historical visitors from worker).
    // Worker sometimes returns {cc,city,country} without lat/lon — fallback
    // to the country centroid + small jitter so the map shows actual activity
    // instead of staying empty while claiming "20 geolocated visits".
    pastLocations.forEach((v,idx)=>{
      let lat=v.lat, lon=v.lon;
      if((lat==null||lon==null)&&v.cc){
        const c=COUNTRY_CENTROIDS[v.cc.toLowerCase()];
        if(c){
          // Deterministic jitter by index so dots don't stack on identical country
          const j=(idx*0.37)%1;
          lat=c[0]+(j-0.5)*2.4;
          lon=c[1]+((idx*0.71)%1-0.5)*4.0;
        }
      }
      if(lat==null||lon==null)return;
      const pastIcon=L.divIcon({className:'vmap-past-marker',html:`<div class="vmap-dot-past" style="background:${dotColor};box-shadow:0 0 14px ${dotColor},0 0 4px ${dotColor}"></div>`,iconSize:[12,12],iconAnchor:[6,6]});
      const m=L.marker([lat,lon],{icon:pastIcon,zIndexOffset:0});
      const flag=v.cc?`<img src="https://flagcdn.com/16x12/${v.cc.toLowerCase()}.png" style="margin-right:5px;vertical-align:middle;border-radius:2px"/>`:'';
      m.bindPopup(`<div style="min-width:110px;font-family:sans-serif">${flag}<strong>${v.city||v.country||'?'}</strong><br/><span style="color:#415a77;font-size:10px">${lang==='fr'?'Visiteur passé':'Past visitor'}</span></div>`);
      markersLayer.current.addLayer(m);
    });

    // Current visitor — pulsing glow ring
    if(myGeo){
      const icon=L.divIcon({className:'vmap-me-marker',html:`<div class="vmap-dot-me" style="background:${dotColor};box-shadow:0 0 18px ${dotColor},0 0 38px ${dotColor}66"></div><div class="vmap-pulse-ring" style="border-color:${dotColor}"></div>`,iconSize:[18,18],iconAnchor:[9,9]});
      const marker=L.marker([myGeo.lat,myGeo.lon],{icon,zIndexOffset:1000});
      const flag=myGeo.countryCode?`<img src="https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png" style="margin-right:5px;vertical-align:middle;border-radius:2px"/>`:''
      marker.bindPopup(`<div style="min-width:130px;font-family:sans-serif">${flag}<strong>${myGeo.city||myGeo.country||'?'}</strong><br/><span style="color:${dotColor};font-size:10px">← ${lang==='fr'?'Vous êtes ici':'You are here'}</span></div>`);
      markersLayer.current.addLayer(marker);

      // Smart zoom — fit ALL resolved points (including centroid fallbacks)
      const allPts=[];
      pastLocations.forEach((v,idx)=>{
        let lat=v.lat, lon=v.lon;
        if((lat==null||lon==null)&&v.cc){
          const c=COUNTRY_CENTROIDS[v.cc.toLowerCase()];
          if(c){lat=c[0];lon=c[1];}
        }
        if(lat!=null&&lon!=null) allPts.push([lat,lon]);
      });
      allPts.push([myGeo.lat,myGeo.lon]);
      if(allPts.length>=2){
        leafletMap.current.fitBounds(allPts,{padding:[40,40],maxZoom:4,animate:true,duration:1.2});
      } else {
        leafletMap.current.setView([myGeo.lat,myGeo.lon],4,{animate:true,duration:1.2});
      }
    }
  },[myGeo,pastLocations,isHuman,lang]);

  const ua=navigator.userAgent;
  const device=/iPhone|iPad/.test(ua)?'📱 iPhone':/Android/.test(ua)?'📱 Android':/Mac/.test(ua)?'🖥️ Mac':/Windows/.test(ua)?'🖥️ Windows':/Linux/.test(ua)?'🐧 Linux':'🖥️ Desktop';
  const browserLang=(navigator.language||'en').split('-')[0].toUpperCase();

  /* ── HUMAN MODE ─────────────────────────────────────────────────── */
  if(isHuman){
    return(
      <div style={{background:'var(--bg)',padding:'80px 0',borderTop:'1px solid var(--border-dim)',borderBottom:'1px solid var(--border-dim)'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 40px'}}>

          {/* Header row */}
          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',flexWrap:'wrap',gap:24,marginBottom:40}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
                <span style={{width:8,height:8,borderRadius:'50%',background:'#7C3AED',boxShadow:'0 0 12px #7C3AED99',animation:'pulse 2s infinite',display:'inline-block'}}/>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:'.48rem',color:'#7C3AED',letterSpacing:'4px',textTransform:'uppercase'}}>{lang==='fr'?'EN CE MOMENT MÊME · DONNÉES RÉELLES':'RIGHT NOW · REAL DATA'}</span>
              </div>
              <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(2rem,4vw,3.2rem)',color:'var(--text)',letterSpacing:'2px',lineHeight:1.05,margin:0}}>
                {lang==='fr'
                  ?<>Vous lisez depuis<br/><em style={{color:'#7C3AED'}}>{myGeo?`${myGeo.city||myGeo.country||'…'} ${myGeo.countryCode?`🏴`:'🌍'}`:'quelque part sur Terre 🌍'}</em></>
                  :<>You're reading from<br/><em style={{color:'#7C3AED'}}>{myGeo?`${myGeo.city||myGeo.country||'…'} 🌍`:'somewhere on Earth 🌍'}</em></>}
              </h2>
            </div>
            <div style={{textAlign:'right',paddingTop:4}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'3.8rem',color:'#7C3AED',lineHeight:1}}>
                {realCount?realCount.toLocaleString():<>{FALLBACK.toLocaleString()}<span style={{fontFamily:"'Space Mono',monospace",fontSize:'.5rem',color:'var(--text-mute)',marginLeft:6,letterSpacing:'1px',verticalAlign:'middle'}}>min.</span></>}
              </div>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.46rem',color:'var(--text-mute)',letterSpacing:'2px',textTransform:'uppercase'}}>
                {lang==='fr'?'visites depuis le début':'visits since launch'}{!realCount&&<><br/><span style={{color:'#7C3AED88',fontSize:'.38rem'}}>({lang==='fr'?'worker non exposé':'tracking not yet responded'})</span></>}
              </div>
            </div>
          </div>

          {/* Two-col layout: map left, cards right */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:24,alignItems:'start'}}>

            {/* Map — light tiles */}
            <div style={{position:'relative',borderRadius:18,overflow:'hidden',border:'1px solid var(--border-dim)',boxShadow:'0 4px 24px rgba(124,58,237,.08)'}}>
              {!mapReady&&<div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:10,fontFamily:"'Space Mono',monospace",fontSize:'.5rem',color:'var(--text-mute)',letterSpacing:'2px',background:'var(--bg-card)'}}>Chargement…</div>}
              <div ref={mapRef} id="visitor-map-human" style={{height:340,width:'100%',borderRadius:18}}/>
              {/* Subtle overlay to blend with light mode */}
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 70%,var(--bg))',pointerEvents:'none',zIndex:400}}/>
              {myGeo&&<div style={{position:'absolute',bottom:16,left:16,zIndex:500,background:'rgba(255,255,255,.92)',border:'1px solid rgba(124,58,237,.2)',borderRadius:10,padding:'8px 14px',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',gap:8}}>
                <span style={{width:8,height:8,borderRadius:'50%',background:'#7C3AED',boxShadow:'0 0 8px #7C3AED',display:'inline-block',flexShrink:0}}/>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:'.42rem',color:'#7C3AED',letterSpacing:'1px'}}>{myGeo.city||myGeo.country} · {lang==='fr'?'vous':'you'}</span>
                {myGeo.countryCode&&<img src={`https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png`} style={{height:11,borderRadius:2}} alt=""/>}
              </div>}
            </div>

            {/* Info cards */}
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              {[
                {icon:'📍',label:lang==='fr'?'Votre ville':'Your city',value:myGeo?`${myGeo.city||'—'}, ${myGeo.country||''}`:lang==='fr'?'Localisation…':'Locating…',accent:'#7C3AED',live:true},
                {icon:'🖥️',label:lang==='fr'?'Votre appareil':'Your device',value:device,accent:'#EC4899'},
                {icon:'🌐',label:lang==='fr'?'Langue détectée':'Browser language',value:browserLang,accent:'#F59E0B'},
                {icon:'🔢',label:lang==='fr'?'Vous êtes visiteur n°':'You are visitor #',value:`${(displayCount+1).toLocaleString()}`,accent:'#10B981'},
              ].map((c,i)=>(
                <div key={i} style={{
                  background:'var(--bg-card)',
                  border:`1px solid ${c.accent}20`,
                  borderLeft:`3px solid ${c.accent}`,
                  borderRadius:12,padding:'16px 18px',
                  display:'flex',alignItems:'center',gap:14,
                  transition:'transform .18s,box-shadow .18s',cursor:'default'
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateX(4px)';e.currentTarget.style.boxShadow=`0 6px 20px ${c.accent}18`}}
                onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
                  <span style={{fontSize:'1.3rem',flexShrink:0}}>{c.icon}</span>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.4rem',color:'var(--text-mute)',letterSpacing:'2px',textTransform:'uppercase',marginBottom:4,display:'flex',alignItems:'center',gap:6}}>
                      {c.label}{c.live&&<span style={{width:5,height:5,borderRadius:'50%',background:'#10B981',display:'inline-block',animation:'pulse 2s infinite'}}/>}
                    </div>
                    <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:'1rem',fontWeight:700,color:'var(--text)',lineHeight:1.2,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{c.value}</div>
                  </div>
                </div>
              ))}
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.38rem',color:'var(--text-mute)',letterSpacing:'1px',paddingTop:4,lineHeight:1.7}}>
                📡 {lang==='fr'?'Géoloc. anonyme par IP · aucune donnée perso stockée':'Anonymous IP geoloc · no personal data stored'}
              </div>
            </div>

          </div>

          {/* Recent visitors feed */}
          {pastLocations.length>0&&(
            <div style={{marginTop:32,paddingTop:24,borderTop:'1px solid var(--border-dim)'}}>
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16,flexWrap:'wrap'}}>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:'.44rem',color:'var(--text-mute)',letterSpacing:'3px',textTransform:'uppercase'}}>
                  {lang==='fr'?'👥 Villes qui ont lu ce portfolio':'👥 Cities that read this portfolio'}
                </span>
                <span style={{fontFamily:"'Space Mono',monospace",fontSize:'.38rem',color:'var(--text-mute)',opacity:.55}}>
                  · {lang==='fr'?'ville seulement · 100% anonyme · pas de données perso':'city only · 100% anonymous · no personal data'}
                </span>
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {pastLocations.slice(0,15).map((v,i)=>(
                  <div key={i} style={{
                    display:'flex',alignItems:'center',gap:7,
                    padding:'7px 14px',borderRadius:30,
                    background:'var(--bg-card)',border:'1px solid var(--border-dim)',
                    fontFamily:"'Space Grotesk',sans-serif",fontSize:'.82rem',color:'var(--text)',
                    transition:'transform .15s,box-shadow .15s',cursor:'default'
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 4px 16px rgba(124,58,237,.12)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
                    {v.cc&&<img src={`https://flagcdn.com/16x12/${v.cc.toLowerCase()}.png`} style={{height:11,borderRadius:2,flexShrink:0}} alt=""/>}
                    <span>{v.city||v.country||'—'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ── TECH MODE ──────────────────────────────────────────────────── */
  return(
    <div className="vmap-section">
      <div className="vmap-inner">
        <div className="vmap-header">
          <div>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.5rem',color:'var(--accent3)',letterSpacing:'4px',textTransform:'uppercase',marginBottom:10,display:'flex',alignItems:'center',gap:10}}>
              <span style={{width:8,height:8,borderRadius:'50%',background:'var(--accent3)',boxShadow:'0 0 10px var(--accent3)',animation:'pulse 2s infinite',display:'inline-block',flexShrink:0}}/>
              {lang==='fr'?'LIVE · Votre position réelle':'LIVE · Your real position'}
            </div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(1.8rem,3.5vw,3rem)',color:'var(--text)',letterSpacing:'2px',lineHeight:1,margin:0}}>
              {lang==='fr'
                ?<>Vous vous connectez <em style={{color:'#415a77'}}>depuis {myGeo?`${myGeo.city||myGeo.country||'…'}`:'…'}</em></>
                :<>You're connecting <em style={{color:'#415a77'}}>from {myGeo?`${myGeo.city||myGeo.country||'…'}`:'…'}</em></>}
            </h2>
            {myGeo&&<div style={{marginTop:8,fontFamily:"'Space Mono',monospace",fontSize:'.44rem',color:'var(--accent3)',letterSpacing:'1px',display:'flex',alignItems:'center',gap:6}}>
              📍 {myGeo.city}{myGeo.city&&myGeo.country?', ':''}{myGeo.country}
              {myGeo.countryCode&&<img src={`https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png`} style={{height:10,verticalAlign:'middle',borderRadius:2}} alt=""/>}
            </div>}
          </div>
          <div className="vmap-stats-row">
            <div className="vmap-stat">
              <div className="vmap-stat-n">{realCount?realCount.toLocaleString():`${FALLBACK.toLocaleString()}+`}</div>
              <div className="vmap-stat-l">{lang==='fr'?'sessions totales':'total sessions'}{!realCount&&<><br/><span style={{fontSize:'.36rem',color:'var(--text-mute)',opacity:.6}}>(fallback)</span></>}</div>
            </div>
            <div className="vmap-stat"><div className="vmap-stat-n">{myGeo?'1':'—'}</div><div className="vmap-stat-l">{lang==='fr'?'actif maintenant':'active now'}</div></div>
            <div className="vmap-stat"><div className="vmap-stat-n">{pastLocations.length||'—'}</div><div className="vmap-stat-l">{lang==='fr'?'visites géolocalisées':'geolocated visits'}</div></div>
            <div className="vmap-stat"><div className="vmap-stat-n">{device}</div><div className="vmap-stat-l">{lang==='fr'?'votre device':'your device'}</div></div>
          </div>
        </div>
        <div className="vmap-container">
          {!mapReady&&<div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:10,fontFamily:"'Space Mono',monospace",fontSize:'.54rem',color:'var(--text-mute)',letterSpacing:'3px'}}>// LOADING MAP...</div>}
          <div ref={mapRef} id="visitor-map"/>
          <div style={{position:'absolute',bottom:12,left:14,zIndex:500,display:'flex',gap:14,background:'rgba(5,2,16,.82)',border:'1px solid var(--border-dim)',borderRadius:8,padding:'6px 12px',backdropFilter:'blur(8px)'}}>
            <span style={{display:'flex',alignItems:'center',gap:5,fontFamily:"'Space Mono',monospace",fontSize:'.38rem',color:'var(--accent3)',letterSpacing:'1px'}}>
              <span style={{width:8,height:8,borderRadius:'50%',background:'#00F0A8',boxShadow:'0 0 6px #00F0A8',display:'inline-block'}}/>
              {lang==='fr'?'Vous — données IP réelles':'You — real IP data'}
            </span>
          </div>
        </div>
        <div className="vmap-recent">
          {myGeo
            ?<span className="vmap-ping vmap-ping-me">
                <span className="vmap-ping-dot" style={{background:'#00F0A8',boxShadow:'0 0 6px #00F0A8'}}/>
                {myGeo.countryCode&&<img src={`https://flagcdn.com/16x12/${myGeo.countryCode.toLowerCase()}.png`} style={{height:10,borderRadius:2,verticalAlign:'middle'}} alt=""/>}
                {myGeo.city||myGeo.country} ({lang==='fr'?'vous':'you'})
              </span>
            :<span className="vmap-empty">// {lang==='fr'?'Géolocalisation…':'Geolocating…'}</span>
          }
        </div>
        <div style={{marginTop:10,fontFamily:"'Space Mono',monospace",fontSize:'.4rem',color:'var(--text-mute)',letterSpacing:'1px'}}>
          // {lang==='fr'?'Géoloc. IP anonyme · 0 données simulées · compteur réel si worker expose GET':'Anonymous IP geoloc · 0 simulated data · real count if worker exposes GET'}
        </div>
      </div>
    </div>
  );
}

function CopyEmailButton({lang}){
  const t=T[lang];const [copied,setCopied]=useState(false);
  function copy(){navigator.clipboard.writeText('antoinedemaintenant@alumni.ie.edu').then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2200);});}
  return(<>
    <div className={`copy-toast${copied?' show':''}`}>{t.contactCopied}</div>
    <a href="mailto:antoinedemaintenant@alumni.ie.edu" className="contact-card" onClick={e=>{e.preventDefault();copy();}}>
      <span className="contact-icon">📧</span><div><div className="contact-lbl">Email <span style={{color:'var(--accent3)',fontSize:'.38rem',marginLeft:'5px',fontFamily:"'Space Mono',monospace"}}>{t.contactCopyHint}</span></div><div className="contact-val">antoinedemaintenant@alumni.ie.edu</div></div>
    </a>
  </>);
}
function CountryModal({country,onClose,lang}){
  const t=T[lang];if(!country)return null;
  return(<div className="country-modal-overlay" onClick={onClose}><div className="country-modal" onClick={e=>e.stopPropagation()}><div className="country-modal-header"><img className="country-modal-flag" src={`https://flagcdn.com/80x60/${country.iso}.png`} alt={country.n}/><div><div className="country-modal-title">{country.emoji} {country.n}</div><div className="country-modal-sub">{country.sub}</div></div></div><div className="country-modal-body"><div className="country-modal-tags">{country.tags.map((tag,i)=><span key={i} className="country-modal-tag">{tag}</span>)}</div><div className="country-modal-text">{country.text}</div><button className="country-modal-close" onClick={onClose}>{t.countryClose}</button></div></div></div>);
}

/* ─── CALENDLY MOCK ──────────────────────────────────────────────────────────── */
function CalendlyModal({lang,onClose}){
  const [selDay,setSelDay]=useState(null);const [selTime,setSelTime]=useState(null);const [confirmed,setConfirmed]=useState(false);
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const times=['09:00','10:00','11:00','14:00','15:00','16:00','17:00'];
  // Build a simple 4-week calendar starting from today
  const today=new Date();const todayNum=today.getDate();
  const firstDow=new Date(today.getFullYear(),today.getMonth(),1).getDay();
  const daysInMonth=new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
  // available days: not weekend, not past, not today
  const isAvail=(d)=>{const dow=new Date(today.getFullYear(),today.getMonth(),d).getDay();return d>todayNum&&dow!==0&&dow!==6;};
  function confirm(){
    if(!selDay||!selTime)return;
    setConfirmed(true);
    window.SFX&&SFX.achieve();
    window.XP&&XP.earn('contact');
    // open real calendly in bg
    window.open('https://calendly.com/antoinedemaintenant-alumni/30min','_blank');
  }
  const cells=[];
  for(let i=0;i<firstDow;i++)cells.push(null);
  for(let d=1;d<=daysInMonth;d++)cells.push(d);
  return(
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-modal" onClick={e=>e.stopPropagation()}>
        <div className="cal-header">
          <div><div className="cal-title">📅 {lang==='fr'?'Réserver un call':'Book a Call'}</div><div className="cal-sub">{lang==='fr'?'30 min · Visio · Gratuit':'30 min · Video call · Free'}</div></div>
          <button className="cal-close-x" onClick={onClose}>✕</button>
        </div>
        {!confirmed?(
          <div className="cal-body">
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.5rem',color:'var(--text-dim)',letterSpacing:'2px',marginBottom:'12px',textTransform:'uppercase'}}>
              {today.toLocaleString(lang==='fr'?'fr-FR':'en-US',{month:'long',year:'numeric'}).toUpperCase()}
            </div>
            <div className="cal-fake">
              {(lang==='fr'?['Lun','Mar','Mer','Jeu','Ven','Sam','Dim']:days).map(d=>(<div key={d} className="cal-day-header">{d}</div>))}
              {cells.map((d,i)=>d===null?(<div key={'e'+i} className="cal-day empty"/>):(<div key={d} className={`cal-day${d===todayNum?' past':''}${isAvail(d)?' available':''}${selDay===d?' selected':''}`} onClick={()=>isAvail(d)&&setSelDay(d)}>{d}</div>))}
            </div>
            {selDay&&(<>
              <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.5rem',color:'var(--accent3)',letterSpacing:'2px',marginBottom:'8px',textTransform:'uppercase'}}>{lang==='fr'?`Créneaux le ${selDay}`:`Slots on ${selDay}`}</div>
              <div className="cal-time-slots">{times.map(t=>(<div key={t} className={`cal-slot${selTime===t?' selected':''}`} onClick={()=>setSelTime(t)}>{t}</div>))}</div>
            </>)}
            <button className="cal-confirm" onClick={confirm} disabled={!selDay||!selTime}>
              {selDay&&selTime?`✓ ${lang==='fr'?'Confirmer':'Confirm'} ${selDay} @ ${selTime}`:lang==='fr'?'Sélectionnez une date et un créneau':'Select a date and time slot'}
            </button>
            <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.44rem',color:'var(--text-mute)',textAlign:'center',marginTop:'10px',letterSpacing:'1px'}}>{lang==='fr'?'→ Vous serez redirigé vers Calendly pour confirmation':'→ You\'ll be redirected to Calendly for final confirmation'}</div>
          </div>
        ):(
          <div className="cal-body cal-confirmed">
            <div className="cal-confirmed-icon">✅</div>
            <div className="cal-confirmed-title">{lang==='fr'?'Call réservé !':'Call Booked!'}</div>
            <div className="cal-confirmed-text">{lang==='fr'?`${selDay} @ ${selTime} — Vous recevrez un email de confirmation.`:`${selDay} @ ${selTime} — You'll receive a confirmation email.`}<br/><br/><span style={{color:'#415a77'}}>{lang==='fr'?'Antoine vous contacte sous 2h.':'Antoine will reach out within 2h.'}</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── WORLD MAP (D3 — visited countries only) ───────────────────────────────── */
function WorldMap({countries,setActiveCountry,lang}){
  return(
    <div style={{width:'100%'}}>
      <div className="countries-hint">
        <span className="countries-hint-icon">👆</span>
        <span>{lang==='fr'?'Cliquez sur un pays pour découvrir mon histoire là-bas':'Click on any country to discover my story there'}</span>
      </div>
      <div className="countries-grid">
        {countries.map((c,i)=>(
          <button key={i}
            className="country-card-grid"
            aria-label={lang==='fr'?`Découvrir mon histoire en ${c.n}`:`Discover my story in ${c.n}`}
            onClick={()=>setActiveCountry(c)}>
            <img src={`https://flagcdn.com/w80/${c.iso}.png`} alt={c.n} className="country-grid-flag"/>
            <div className="country-grid-body">
              <div className="country-grid-top">
                <div className="country-card-name">{c.n}</div>
                <span className="country-card-chevron" aria-hidden="true">→</span>
              </div>
              <div className="country-card-sub">{c.sub}</div>
              <div className="country-grid-tags">
                {c.tags.slice(0,3).map((tag,j)=>(
                  <span key={j} className="country-card-tag">{tag}</span>
                ))}
              </div>
              <div className="country-grid-more">{lang==='fr'?'Voir plus →':'Read more →'}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="countries-cta">
        <div style={{display:'flex',alignItems:'center',gap:8,minWidth:0,flex:1}}>
          <div style={{width:7,height:7,borderRadius:'50%',background:'var(--accent3)',animation:'pulse 2s infinite',flexShrink:0}}/>
          <span className="countries-cta-label">{lang==='fr'?'Disponible partout · Remote-first':'Available worldwide · Remote-first'}</span>
        </div>
        <span className="countries-cta-num">{countries.length} {lang==='fr'?'pays':'countries'}</span>
      </div>
    </div>
  );
}

/* ─── HUMAN APP ──────────────────────────────────────────────────────────────── */

const CHAPTERS=[
  {id:'about',label:'INTRO'},{id:'experience',label:'JOURNEY'},{id:'testimonials',label:'PROOF'},
  {id:'dashboard',label:'DASHBOARD'},{id:'pipeline',label:'DEMO'},{id:'projects',label:'WORK'},
  {id:'certificates',label:'CERTS'},{id:'contact',label:'HIRE'},{id:'terminal',label:'CHAT'},
];

/* ─── CERT WALL ──────────────────────────────────────────────────────────────── */
const AnthropicMark=({size=18})=>(
  <svg className="anthropic-mark" width={size} height={size} viewBox="0 0 24 24" aria-label="Anthropic">
    <g fill="#D97757">
      <ellipse cx="12" cy="3.5" rx="1.1" ry="3"/>
      <ellipse cx="12" cy="20.5" rx="1.1" ry="3"/>
      <ellipse cx="3.5" cy="12" rx="3" ry="1.1"/>
      <ellipse cx="20.5" cy="12" rx="3" ry="1.1"/>
      <ellipse cx="6" cy="6" rx="1.1" ry="3" transform="rotate(-45 6 6)"/>
      <ellipse cx="18" cy="18" rx="1.1" ry="3" transform="rotate(-45 18 18)"/>
      <ellipse cx="18" cy="6" rx="3" ry="1.1" transform="rotate(-45 18 6)"/>
      <ellipse cx="6" cy="18" rx="3" ry="1.1" transform="rotate(-45 6 18)"/>
    </g>
  </svg>
);

function CertWall({lang}){
  const FEATURED=[
    {
      title:'Claude with the\nAnthropic API',
      issuer:'Anthropic',
      date:'March 5, 2026',
      id:'ghr3bg5ef69v',
      url:'https://verify.skilljar.com/c/ghr3bg5ef69v',
      tier:lang==='fr'?'⚡ Avancé · API':'⚡ Advanced · API',
      accent:'#00F0A8',
      bg:'linear-gradient(145deg,rgba(0,20,14,.95) 0%,rgba(0,35,22,.9) 100%)',
      border:'rgba(0,240,168,.35)',
      glow:'rgba(0,240,168,.18)',
      tierBg:'rgba(0,240,168,.12)',
      tierBorder:'rgba(0,240,168,.3)',
      linkBg:'rgba(0,240,168,.1)',
      linkBorder:'rgba(0,240,168,.35)',
    },
    {
      title:'Claude Code\nin Action',
      issuer:'Anthropic',
      date:'March 5, 2026',
      id:'iwggxbjy345g',
      url:'https://verify.skilljar.com/c/iwggxbjy345g',
      tier:lang==='fr'?'🔥 Avancé · Claude Code':'🔥 Advanced · Claude Code',
      accent:'#415a77',
      bg:'linear-gradient(145deg,rgba(14,8,28,.97) 0%,rgba(26,10,46,.92) 100%)',
      border:'rgba(191,58,255,.4)',
      glow:'rgba(191,58,255,.2)',
      tierBg:'rgba(191,58,255,.12)',
      tierBorder:'rgba(191,58,255,.35)',
      linkBg:'rgba(191,58,255,.1)',
      linkBorder:'rgba(191,58,255,.4)',
    },
    {
      title:'Model Context Protocol:\nAdvanced Topics',
      issuer:'Anthropic',
      date:'March 5, 2026',
      id:'zx7bi5fvcntf',
      url:'https://verify.skilljar.com/c/zx7bi5fvcntf',
      tier:lang==='fr'?'🏆 Avancé · MCP':'🏆 Advanced · MCP',
      accent:'#FF2D78',
      bg:'linear-gradient(145deg,rgba(20,4,12,.97) 0%,rgba(32,6,18,.92) 100%)',
      border:'rgba(255,45,120,.38)',
      glow:'rgba(255,45,120,.18)',
      tierBg:'rgba(255,45,120,.1)',
      tierBorder:'rgba(255,45,120,.32)',
      linkBg:'rgba(255,45,120,.1)',
      linkBorder:'rgba(255,45,120,.38)',
    },
  ];
  const SECONDARY=[
    {title:'Intro to Model Context Protocol',issuer:'Anthropic',id:'qi53hzrjg8gn',url:'https://verify.skilljar.com/c/qi53hzrjg8gn',accent:'#415a77',top:'rgba(191,58,255,1)'},
    {title:'Introduction to Agent Skills',issuer:'Anthropic',id:'dqyxy2w7mzeh',url:'https://verify.skilljar.com/c/dqyxy2w7mzeh',accent:'#415a77',top:'rgba(191,58,255,.7)'},
    {title:'Claude 101',issuer:'Anthropic',id:'6d7hy9sqveor',url:'https://verify.skilljar.com/c/6d7hy9sqveor',accent:'#415a77',top:'rgba(191,58,255,.5)'},
    {title:'AI Fluency for Educators',issuer:'Anthropic × UCC · HEA',id:'t2uvpt7tmqon',url:'https://verify.skilljar.com/c/t2uvpt7tmqon',accent:'#C46A1F',top:'rgba(196,106,31,.9)'},
    {title:'AI Fluency: Framework & Foundations',issuer:'Anthropic × UCC · HEA',id:'zzx6ga534uim',url:'https://verify.skilljar.com/c/zzx6ga534uim',accent:'#C46A1F',top:'rgba(196,106,31,.9)'},
  ];

  return(
    <div className="cert-wall">

      {/* ── STAT BANNER ── */}
      <div className="cert-stat-banner">
        {[
          ['8',lang==='fr'?'CERTIFICATIONS TOTALES':'TOTAL CERTS'],
          null,
          ['3',lang==='fr'?'NIVEAU AVANCÉ':'ADVANCED LEVEL'],
          null,
          ['2',lang==='fr'?'CO-DIPLÔMÉS UNIVERSITÉ':'UNIVERSITY CO-ISSUED'],
          null,
          ['Mar 2026',lang==='fr'?'TOUTES OBTENUES LE':'ALL EARNED'],
        ].map((item,i)=>
          item===null
            ?<div key={i} className="cert-stat-div"/>
            :<div key={i} className="cert-stat-item">
              <span className="cert-stat-n">{item[0]}</span>
              <span className="cert-stat-l">{item[1]}</span>
            </div>
        )}
      </div>

      {/* ── FEATURED — drag/swipe ticker ── */}
      <div className="cert-featured-ticker-wrap">
        <div className="cert-featured-ticker">
          {[...FEATURED,...FEATURED].map((c,i)=>(
            <div key={i} className="cert-feat" aria-hidden={i>=FEATURED.length?'true':'false'}
              style={{background:c.bg,border:`1px solid ${c.border}`,boxShadow:`0 20px 60px ${c.glow},inset 0 1px 0 rgba(255,255,255,.04)`}}>
              <div className="cert-feat-num">{String((i%FEATURED.length)+1).padStart(2,'0')}</div>
              {c.issuer==='Anthropic'&&<div className="cert-feat-logo"><AnthropicMark size={22}/></div>}
              <div className="cert-feat-tier" style={{color:c.accent,background:c.tierBg,border:`1px solid ${c.tierBorder}`}}>
                {c.tier}
              </div>
              <div className="cert-feat-title">{c.title.split('\n').map((l,j)=><span key={j}>{l}{j===0&&<br/>}</span>)}</div>
              <div className="cert-feat-issuer">{c.issuer}</div>
              <div className="cert-feat-footer">
                <span className="cert-feat-date">📅 {c.date}</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer"
                  className="cert-feat-link"
                  style={{background:c.linkBg,border:`1px solid ${c.linkBorder}`,color:c.accent}}>
                  ✅ {lang==='fr'?'Vérifier':'Verify'} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECONDARY — drag/swipe ticker ── */}
      <div className="cert-secondary-ticker-wrap">
        <div className="cert-secondary-ticker">
          {[...SECONDARY,...SECONDARY].map((c,i)=>(
            <div key={i} className="cert-sec" aria-hidden={i>=SECONDARY.length?'true':'false'}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:c.top,opacity:.8}}/>
              {c.issuer.startsWith('Anthropic')&&<div className="cert-sec-logo"><AnthropicMark size={14}/></div>}
              <div className="cert-sec-title">{c.title}</div>
              <div className="cert-sec-issuer">{c.issuer}</div>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="cert-sec-link">
                ✅ {lang==='fr'?'Vérifier →':'Verify →'}
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function PortfolioApp({initLang,mode,onSwitchMode}){
  const [theme,setTheme]=useState(()=>mode==='human'?'light':'dark');
  const [lang,setLang]=useState(initLang||'en');
  const [activeExp,setActiveExp]=useState(0);
  const [tagFilter,setTagFilter]=useState('All');
  const [filtersOpen,setFiltersOpen]=useState(false);
  const [showAllBullets,setShowAllBullets]=useState(false);
  const [showEgg,setShowEgg]=useState(false);
  const [showRecruiter,setShowRecruiter]=useState(false);
  const [activeCountry,setActiveCountry]=useState(null);
  const [soundOn,setSoundOn]=useState(false);
  const [showCalendly,setShowCalendly]=useState(false);
  const [mobileMenuOpen,setMobileMenuOpen]=useState(false);
  useEffect(()=>{document.body.classList.toggle('drawer-open',mobileMenuOpen);return()=>document.body.classList.remove('drawer-open');},[mobileMenuOpen]);
  const [testiModal,setTestiModal]=useState(null);
  const [typed,setTyped]=useState('');
  const [lineIdx,setLineIdx]=useState(0);
  const [charIdx,setCharIdx]=useState(0);
  const [deleting,setDeleting]=useState(false);
  const [activeChapter,setActiveChapter]=useState(0);

  const t=(mode==='human'?TH:T)[lang];const exps=EXPERIENCES[lang];const exp=exps[activeExp]||exps[0];
  const skills=SKILLS[lang];const countries=COUNTRIES[lang];

  const LINES=mode==='human'?{en:['Time saver.','Excel killer.','Report automator.','Revenue booster.','Decision enabler.'],fr:['Gain de temps.','Rapports automatisés.','Zéro saisie manuelle.','Hausse de revenus.','Aide à la décision.']}:{en:['BI Engineer.','AI Architect.','Revenue Optimizer.','Automation Dealer.','Data Storyteller.'],fr:['Ingénieur BI.','Architecte IA.','Optimiseur de Revenus.','Dealer d\'Automatisation.','Data Storyteller.']};

  useEffect(()=>setActiveExp(0),[lang]);
  useEffect(()=>setTagFilter(t.expFilterAll),[lang]);
  useEffect(()=>setShowAllBullets(false),[activeExp,lang]);

  // Typewriter
  useEffect(()=>{
    const lines=LINES[lang],cur=lines[lineIdx%lines.length];
    const tm=setTimeout(()=>{if(!deleting){if(charIdx<cur.length){setTyped(cur.slice(0,charIdx+1));setCharIdx(c=>c+1)}else setTimeout(()=>setDeleting(true),1800);}else{if(charIdx>0){setTyped(cur.slice(0,charIdx-1));setCharIdx(c=>c-1)}else{setDeleting(false);setLineIdx(i=>(i+1)%lines.length);}}},deleting?36:65);
    return()=>clearTimeout(tm);
  },[charIdx,deleting,lineIdx,lang]);

  useEffect(()=>{const t=mode==='human'?'light':'dark';setTheme(t);document.body.setAttribute('data-theme',t);},[mode]);
  useEffect(()=>{document.body.setAttribute('data-theme',theme);},[theme]);
  useEffect(()=>{window.konamiCb=()=>setShowEgg(true);return()=>{window.konamiCb=null};},[]);
  useEffect(()=>{const h=e=>{if(e.key==='Escape'){setShowEgg(false);setActiveCountry(null);setShowRecruiter(false);setShowCalendly(false);}};window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h);},[]);

  // Chapter nav
  useEffect(()=>{
    const nav=document.getElementById('chapter-nav');
    if(!nav)return;
    nav.innerHTML='';
    CHAPTERS.forEach((ch,i)=>{
      const d=document.createElement('div');
      d.className=`ch-dot${i===activeChapter?' active':''}`;
      d.title=ch.label;
      d.innerHTML=`<span class="ch-label">${ch.label}</span>`;
      d.onclick=()=>document.getElementById(ch.id)?.scrollIntoView({behavior:'smooth'});
      nav.appendChild(d);
    });
  },[activeChapter]);

  // Scroll observer for XP + chapter tracking
  useEffect(()=>{
    // On mount, immediately reveal any .reveal elements already in viewport
    const revealInView=()=>{
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el=>{
        const r=el.getBoundingClientRect();
        if(r.top<window.innerHeight&&r.bottom>0)el.classList.add('visible');
      });
    };
    revealInView();
    window.addEventListener('scroll',revealInView,{passive:true});

    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          const id=e.target.id;
          if(id){
            window.XP&&window.XP.earn(id);
            const ci=CHAPTERS.findIndex(c=>c.id===id);
            if(ci>=0)setActiveChapter(ci);
          }
        }
      });
    },{threshold:.05,rootMargin:'0px 0px -20px 0px'});
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el=>obs.observe(el));
    // observe sections for XP
    CHAPTERS.forEach(ch=>{const el=document.getElementById(ch.id);if(el)obs.observe(el);});
    return()=>{obs.disconnect();window.removeEventListener('scroll',revealInView);};
  },[]);

  const scrollTo=id=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.scrollIntoView({behavior:'smooth'});
    // Force reveal on elements inside target section that may be in viewport
    setTimeout(()=>{
      el.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(r=>r.classList.add('visible'));
    },600);
  };
  const tagGroups=TAG_GROUPS[lang];
  const allTags=tagGroups.map(g=>g.label);
  const expMatchesGroup=(e,grpLabel)=>{const g=tagGroups.find(x=>x.label===grpLabel);if(!g||!g.matches)return true;return e.tags.some(t=>g.matches.includes(t));};
  const years=((new Date()-new Date('2022-03-01'))/(1000*60*60*24*365.25));

  return(<LangCtx.Provider value={lang}>
    {showEgg&&(
      <div className="modal-overlay" onClick={()=>setShowEgg(false)}>
        <div className="modal" onClick={e=>e.stopPropagation()}>
          <div style={{fontSize:"3rem",marginBottom:"12px",animation:"float 2s infinite"}}>🕹️</div>
          <h2>{t.eggTitle}</h2>
          <p>{t.eggP1}<br/><br/>{t.eggP2}<br/><span style={{color:"var(--accent1)"}}>{t.eggP3}</span></p>
          <div className="modal-code">{t.eggCode.split('\n').map((l,i)=><div key={i}>{l}</div>)}</div>
          <button className="modal-close" onClick={()=>setShowEgg(false)}>{t.eggClose}</button>
        </div>
      </div>
    )}
    {showRecruiter&&<RecruiterModal lang={lang} onClose={()=>setShowRecruiter(false)}/>}

    {showCalendly&&<CalendlyModal lang={lang} onClose={()=>setShowCalendly(false)}/>}
    {activeCountry&&<CountryModal country={activeCountry} onClose={()=>setActiveCountry(null)} lang={lang}/>}
    <ScrollToTop lang={lang}/>
    <VisitorBadge lang={lang}/>

    {/* NAV */}
    <nav className="nav">
      <div className="nav-logo" onClick={()=>scrollTo('about')}>{mode==='human'?<span>Antoine<span style={{color:'#415a77'}}>.</span></span>:'ADM.SYS // v5'}</div>
      <div className="nav-links">{t.nav.map(s=>(<button key={s} className="nav-link" onClick={()=>scrollTo(s)}>{t.navLabels[s]}</button>))}</div>
      <a className="nav-cta-mobile" href="https://calendly.com/antoinedemaintenant-alumni/30min" target="_blank" rel="noopener noreferrer" aria-label="Book a 30-minute call">📅 30 min</a>
      <button className="nav-hamburger" aria-label={mobileMenuOpen?'Close menu':'Open menu'} aria-expanded={mobileMenuOpen} onClick={()=>setMobileMenuOpen(v=>!v)}>
        <span className={`ham-bar ${mobileMenuOpen?'open1':''}`}/>
        <span className={`ham-bar ${mobileMenuOpen?'open2':''}`}/>
        <span className={`ham-bar ${mobileMenuOpen?'open3':''}`}/>
      </button>
      <div className={`nav-controls ${mobileMenuOpen?'open':''}`}>
        {mode!=='human'&&<button className={`sound-btn${soundOn?' on':''}`} onClick={()=>{const s=SFX.toggle();setSoundOn(s);}} aria-label={soundOn?'Sound OFF':'Sound ON (8-bit)'}>
          {soundOn?'🔊':'🔇'}
        </button>}
        <a href="https://calendly.com/antoinedemaintenant-alumni/30min" target="_blank" rel="noopener noreferrer" className="nav-cta-calendly">
          📅 {lang==='fr'?'30 min →':'30 min →'}
        </a>
        <button className={`recruiter-btn${showRecruiter?' active':''}`} onClick={()=>{setShowRecruiter(true);setMobileMenuOpen(false);SFX.click()}}>{t.recruiterBtn} ⚡</button>
        <button className="mode-switch-btn" onClick={()=>{onSwitchMode();setMobileMenuOpen(false)}} aria-label="Switch interface mode">
          <span className="mode-switch-dot" style={{background:mode==='human'?'rgba(0,240,168,.2)':'rgba(191,58,255,.2)',borderColor:mode==='human'?'#00F0A8':'#415a77'}}>{mode==='human'?'🧠':'⚡'}</span>
          {mode==='human'?(lang==='fr'?'⚙️ Tech':'⚙️ Tech'):'🧭 '+(lang==='fr'?'Métier':'Biz')}
        </button>
        <div className="nav-themes" role="group" aria-label="Language">
          {[['en','🇬🇧'],['fr','🇫🇷']].map(([l,f])=>(<button key={l} className={`theme-btn${lang===l?' active':''}`} onClick={()=>{setLang(l);setMobileMenuOpen(false)}}>{f} {l.toUpperCase()}</button>))}
        </div>
        <div className="mobile-menu-sections">
          {t.nav.map(s=>(<button key={s} className="mobile-menu-link" onClick={()=>{scrollTo(s);setMobileMenuOpen(false)}}>{t.navLabels[s]}</button>))}
        </div>
      </div>
      {mobileMenuOpen && <div className="nav-backdrop" onClick={()=>setMobileMenuOpen(false)}/>}
    </nav>

    {/* TICKER — marquee on one line */}
    <div style={{position:'relative',zIndex:5,background:mode==='human'?'rgba(0,122,255,.04)':'rgba(191,58,255,.06)',borderTop:`1px solid ${mode==='human'?'rgba(0,122,255,.1)':'rgba(191,58,255,.15)'}`,borderBottom:`1px solid ${mode==='human'?'rgba(0,122,255,.1)':'rgba(191,58,255,.15)'}`,padding:'10px 0',overflow:'hidden',marginTop:'60px',display:'flex',alignItems:'center',gap:0}}>
      <div style={{display:'flex',gap:0,whiteSpace:'nowrap',animation:'tickerScroll 28s linear infinite',flexShrink:0,alignItems:'center'}}>
        {[0,1].map(ri=>(
          <div key={ri} style={{display:'flex',gap:0,alignItems:'center'}}>
            {(lang==='fr'?[
              {emoji:'⚡',txt:'85% de temps reporting économisé'},
              {emoji:'🤖',txt:'30+ workflows automatisés'},
              {emoji:'📊',txt:'270% efficacité pipeline'},
              {emoji:'🚀',txt:'Analytics 0→1 en 6 mois'},
              {emoji:'🧠',txt:'IA · n8n · Python · LLMs'},
              {emoji:'🔍',txt:'40 concurrents · 1 300 SKUs · daily'},
              {emoji:'💰',txt:'ROI 400-600% an 1'},
              {emoji:'🌍',txt:'France · Dubai · Canada · Singapour'},
            ]:[
              {emoji:'⚡',txt:'85% reporting time saved'},
              {emoji:'🤖',txt:'30+ workflows automated'},
              {emoji:'📊',txt:'270% pipeline efficiency'},
              {emoji:'🚀',txt:'Analytics dept 0→1 in 6 months'},
              {emoji:'🧠',txt:'AI · n8n · Python · LLMs'},
              {emoji:'🔍',txt:'40 competitors · 1,300 SKUs · daily'},
              {emoji:'💰',txt:'400-600% ROI Year 1'},
              {emoji:'🌍',txt:'France · Dubai · Canada · Singapore'},
            ]).map((item,i)=>(
              <div key={i} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'0 28px',fontFamily:"'Space Mono',monospace",fontSize:'.58rem',color:mode==='human'?'rgba(60,60,67,.55)':'rgba(200,180,240,.75)',letterSpacing:'1.5px',textTransform:'uppercase'}}>
                <span style={{fontSize:'.8rem'}}>{item.emoji}</span>
                <span>{item.txt}</span>
                <span style={{color:mode==='human'?'rgba(0,122,255,.3)':'rgba(191,58,255,.4)',marginLeft:4}}>◆</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* HERO */}
    <section id="about" className="hero" style={mode==='human'?{
      minHeight:'92vh',paddingTop:0,paddingBottom:0,
      display:'flex',flexDirection:'column',justifyContent:'center',
      padding:'0 80px',maxWidth:'none',
    }:{}}>

      {mode==='human'?(
        /* ── HUMAN MODE: two-column full-width ── */
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center',maxWidth:1400,margin:'0 auto',width:'100%',padding:'80px 0'}}>

          {/* LEFT col */}
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            <div className="hero-badge-wrap" style={{marginBottom:32}}>
              <span className="hero-badge-dot"/>
              <span className="hero-badge-status">{lang==='fr'?'Disponible':'Available'}</span>
              {['France','Dubai','Canada','Singapore','Remote'].map((city,i)=>(
                <span key={i} className="hero-city-pill">{city}</span>
              ))}
            </div>

            <h1 className="hero-h1" style={{marginBottom:32}}>
              <div className="glitch-wrap" data-text="ANTOINE">ANTOINE</div>
              <div><span className="accent">DE</span></div>
              <div className="outline">MAINTENANT</div>
            </h1>

            <p className="hero-sub" style={{maxWidth:520,marginBottom:36}}>{t.heroSub1} <span>{t.heroSub1b}</span> {t.heroSub2}</p>

            <div className="typewriter-row" style={{marginBottom:32}}>
              <span className="prompt">{'>'}</span>{typed}<span className="t-cursor"/>
            </div>

            <div className="hero-ctas" style={{marginBottom:32}}>
              <a href="https://raw.githubusercontent.com/demaintenant-antoine-pro/portfolio-ai/main/CV_Antoine.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">{t.ctaCV}</a>
            </div>

            <LiveCounter lang={lang}/>
          </div>

          {/* RIGHT col — score cards */}
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            {[
              {n:'85%',badge:'↑ +270%',badgeColor:'#778da9',title:lang==='fr'?'Reporting économisé':'Reporting time saved',sub:lang==='fr'?'30+ workflows automatisés · 0 intervention manuelle':'30+ workflows automated · 0 manual intervention',color:'#415a77'},
              {n:'400%',badge:'ROI Y1',badgeColor:'#778da9',title:lang==='fr'?'Retour sur investissement':'Return on investment',sub:lang==='fr'?'Analytics dept 0→1 en 6 mois · MAPE 4.2%':'Analytics dept 0→1 in 6 months · MAPE 4.2%',color:'var(--accent4)'},
            ].map((s,i)=>(
              <div key={i} style={{
                backdropFilter:'var(--glass-blur)',
                WebkitBackdropFilter:'var(--glass-blur)',
                background:'var(--glass-bg)',
                border:'1px solid var(--glass-border)',
                borderRadius:20,
                boxShadow:'var(--glass-shadow)',
                padding:'28px 32px',
                display:'flex',alignItems:'center',gap:24,
              }}>
                <div style={{flexShrink:0,minWidth:72}}>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:800,fontSize:'1.9rem',color:s.color,lineHeight:1,letterSpacing:'-2px'}}>{s.n}</div>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:'.62rem',color:s.badgeColor,marginTop:4,letterSpacing:'.3px'}}>{s.badge}</div>
                </div>
                <div style={{width:1,alignSelf:'stretch',background:'var(--glass-border)',flexShrink:0}}/>
                <div style={{flex:1}}>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:'.8rem',color:'var(--text)',lineHeight:1.3,marginBottom:6}}>{s.title}</div>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:'.65rem',color:'var(--text-mute)',lineHeight:1.5}}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      ):(
        /* ── TECH MODE: original layout ── */
        <>
          <div className="hero-badge-wrap">
            <span className="hero-badge-dot"/>
            <span className="hero-badge-status">{lang==='fr'?'Disponible':'Available'}</span>
            {['France','Dubai','Canada','Singapore','Remote'].map((city,i)=>(
              <span key={i} className="hero-city-pill">{city}</span>
            ))}
          </div>
          <div style={{display:'flex',alignItems:'flex-start',gap:'40px',flexWrap:'wrap'}}>
            <div style={{flex:'0 0 auto',position:'relative'}}>
              <h1 className="hero-h1">
                <div className="glitch-wrap" data-text="ANTOINE">ANTOINE</div>
                <div><span className="accent">DE</span></div>
                <div className="outline">MAINTENANT</div>
              </h1>
            </div>
          </div>
          <p className="hero-sub">{t.heroSub1} <span>{t.heroSub1b}</span> {t.heroSub2}<br/>{t.heroSub3}</p>
          <span className="xp-badge-inline">⚡ {years.toFixed(1)} {t.xp}</span>
          <div className="typewriter-row" style={{marginTop:'14px'}}><span className="prompt">{'>'}</span>{typed}<span className="t-cursor"/></div>
          <div className="hero-ctas">
            <a href="https://raw.githubusercontent.com/demaintenant-antoine-pro/portfolio-ai/main/CV_Antoine.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">{t.ctaCV}</a>
          </div>
          <LiveCounter lang={lang}/>
        </>
      )}
    </section>

    {/* FLOATING PILLS — fixed right side, both modes */}
    <FloatingPills lang={lang} mode={mode}/>

    {/* METRICS removed */}

    {/* CH1 — EXPERIENCE */}
    <section id="experience" className="section" style={{background:'transparent'}}>
      <div style={{maxWidth:'1500px',margin:'0 auto'}}>
        <div style={{position:'relative',marginBottom:'32px'}}>
          <div className="chapter-label">Chapter 01 — The Journey</div>
          <div style={{position:'absolute',top:'-20px',right:'0',fontFamily:"'Bebas Neue',sans-serif",fontSize:'5rem',color:'var(--border-dim)',lineHeight:1}}>01</div>
        </div>
        <div className="section-eyebrow">{t.expEyebrow}</div>
        <h2 className="section-title">{t.expTitle} <em>{t.expTitleEm}</em></h2>
        <button className="exp-filter-toggle" onClick={()=>setFiltersOpen(o=>!o)} aria-expanded={filtersOpen} aria-controls="exp-filter-bar">
          <span className="exp-filter-toggle-icon">{filtersOpen?'✕':'🔍'}</span>
          <span className="exp-filter-toggle-label">{lang==='fr'?'Filtrer par techno':'Filter by tech'}</span>
          <span className="exp-filter-toggle-active">{tagFilter}</span>
          <span className="exp-filter-toggle-chevron">{filtersOpen?'▲':'▼'}</span>
        </button>
        <div id="exp-filter-bar" className={`exp-filter-bar${filtersOpen?' open':''}`}>{allTags.map(tag=>(<button key={tag} className={`filter-btn${tagFilter===tag?' active':''}`} onClick={()=>{setTagFilter(tag);setFiltersOpen(false);if(tag!==t.expFilterAll){const m=exps.findIndex(e=>expMatchesGroup(e,tag));if(m>=0)setActiveExp(m)}else setActiveExp(0);}}>{tag}</button>))}</div>
        <div className="exp-layout reveal">
          <div className="exp-nav">{exps.map(e=>{const hidden=tagFilter!==t.expFilterAll&&!expMatchesGroup(e,tagFilter);if(hidden)return null;return(<div key={e.id} className={`exp-nav-item${activeExp===e.id?' active':''}`} onClick={()=>setActiveExp(e.id)}><div className="exp-nav-date">{e.date}</div><div className="exp-nav-role">{e.role}</div><div className="exp-nav-co">{e.company}</div></div>);})}</div>
          <div className="exp-detail">
            <div className="exp-detail-role">{exp.role}</div>
            <div className="exp-detail-meta"><span>{exp.company}</span><span>·</span><span>{exp.location}</span><span>·</span><span>{exp.revenue}</span></div>
            <ul className={`exp-bullets${showAllBullets?' expanded':''}`}>{exp.highlights.map((h,i)=><li key={i}>{h}</li>)}</ul>
            {exp.highlights.length>3&&(
              <button className="exp-bullets-toggle" onClick={()=>setShowAllBullets(s=>!s)} aria-expanded={showAllBullets}>
                {showAllBullets
                  ?(lang==='fr'?'− Voir moins':'− See less')
                  :(lang==='fr'?`+ ${exp.highlights.length-3} points supplémentaires`:`+ ${exp.highlights.length-3} more highlights`)}
              </button>
            )}
            <div className="exp-tags">{exp.tags.map(tag=><span key={tag} className="exp-tag">{tag}</span>)}</div>
          </div>
        </div>
      </div>
    </section>

    {/* CH2 — TESTIMONIALS */}
    <section id="testimonials" className="section" style={{background:'transparent'}}>
      <div style={{maxWidth:'1500px',margin:'0 auto'}}>
        <div style={{position:'relative',marginBottom:'24px'}}>
          <div className="chapter-label">Chapter 02 — The Proof</div>
        </div>
        <div className="section-eyebrow">{t.testiEyebrow}</div>
        <h2 className="section-title">{t.testiTitle} <em>{t.testiTitleEm}</em></h2>
        <div className="testi-ticker-wrap reveal">
          <div className="testi-ticker">
            {[...TESTIMONIALS,...TESTIMONIALS].map((item,i)=>(
              <div key={i} className="testi-card-v2 testi-card-ticker" style={{'--tcard-color':item.color}} aria-hidden={i>=TESTIMONIALS.length?'true':'false'}>
                <div className="tcard-header">
                  <div className="tcard-avatar">
                    <img src={item.avatarImg} alt={item.name}
                      onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}
                    />
                    <span style={{display:'none',color:item.color,fontWeight:700,fontSize:'.65rem'}}>{item.avatar}</span>
                  </div>
                  <div className="tcard-meta">
                    <div className="tcard-name">{item.name}</div>
                    <div className="tcard-role">{item.title[lang]}</div>
                    <div className="tcard-company">{item.company}</div>
                  </div>
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="tcard-li">in</a>
                </div>
                <div className="tcard-stars">{'★'.repeat(item.stars)}</div>
                <div className="tcard-excerpt">"{item.highlight[lang]}"</div>
                <button className="tcard-read" onClick={()=>setTestiModal(item)}>
                  {lang==='fr'?'Lire tout →':'Read full →'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {testiModal&&(
        <div className="testi-modal-bg" onClick={()=>setTestiModal(null)}>
          <div className="testi-modal" onClick={e=>e.stopPropagation()} style={{'--tcard-color':testiModal.color}}>
            <button className="testi-modal-close" onClick={()=>setTestiModal(null)}>✕</button>
            <div className="tcard-header" style={{marginBottom:20}}>
              <div className="tcard-avatar tcard-avatar-lg">
                <img src={testiModal.avatarImg} alt={testiModal.name}
                  onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex';}}
                />
                <span style={{display:'none',color:testiModal.color,fontWeight:700,fontSize:'.85rem'}}>{testiModal.avatar}</span>
              </div>
              <div className="tcard-meta">
                <div className="tcard-name">{testiModal.name}</div>
                <div className="tcard-role">{testiModal.title[lang]}</div>
                <div className="tcard-company">{testiModal.company}</div>
                <div className="tcard-date">{testiModal.date[lang]}</div>
              </div>
              <a href={testiModal.linkedin} target="_blank" rel="noopener noreferrer" className="tcard-li">in</a>
            </div>
            <div className="tcard-stars" style={{marginBottom:16}}>{'★'.repeat(testiModal.stars)}</div>
            <div className="testi-modal-quote">"{testiModal.q[lang]}"</div>
          </div>
        </div>
      )}
    </section>

    {/* CH3 — DASHBOARD */}
    <div id="dashboard" className="section-full">
      <div className="section-full-inner" style={{paddingTop:'80px',paddingBottom:'80px'}}>
        <div className="chapter-header" style={{padding:'0 0 32px',position:'relative'}}>
          <div className="chapter-label">Chapter 03 — The Dashboard</div>
          <div className="chapter-num" style={{position:'absolute',top:'-20px',right:'0',fontSize:'5rem',color:'var(--border-dim)'}}>03</div>
        </div>
        <div className="section-eyebrow">{t.dashEyebrow}</div>
        <h2 className="section-title">{t.dashTitle} <em>{t.dashTitleEm}</em></h2>
        <p style={{fontSize:'.84rem',color:'var(--text-sec)',maxWidth:'560px',marginBottom:'32px',lineHeight:'1.8'}}>{t.dashDesc}</p>
        <Dashboard lang={lang}/>
      </div>
    </div>

    {/* CH4 — PIPELINE */}
    <section id="pipeline" className="section">
      <div style={{position:'relative',marginBottom:'32px'}}>
        <div className="chapter-label">Chapter 04 — The Demo</div>
        <div style={{position:'absolute',top:'-20px',right:'0',fontFamily:"'Bebas Neue',sans-serif",fontSize:'5rem',color:'var(--border-dim)',lineHeight:1}}>04</div>
      </div>
      <div className="section-eyebrow">{t.pipeEyebrow}</div>
      <h2 className="section-title">{t.pipeTitle} <em>{t.pipeTitleEm}</em></h2>
      <p style={{fontSize:'.84rem',color:'var(--text-sec)',maxWidth:'560px',marginBottom:'32px',lineHeight:'1.8'}}>{t.pipeDesc}</p>
      <Pipeline lang={lang}/>
    </section>

    {/* PROJECTS */}
    <section id="projects" className="section" style={{background:'transparent'}}>
      <div style={{maxWidth:'1500px',margin:'0 auto'}}>
        <div style={{position:'relative',marginBottom:'32px'}}>
          <div className="chapter-label">Chapter 05 — The Work</div>
          <div style={{position:'absolute',top:'-20px',right:'0',fontFamily:"'Bebas Neue',sans-serif",fontSize:'5rem',color:'var(--border-dim)',lineHeight:1}}>05</div>
        </div>
        <div className="section-eyebrow">{t.projectsEyebrow}</div>
        <h2 className="section-title">{t.projectsTitle} <em>{t.projectsTitleEm}</em></h2>
        <p style={{fontSize:'.84rem',color:'var(--text-sec)',maxWidth:'560px',marginBottom:'36px',lineHeight:'1.8'}}>{t.projectsDesc}</p>
        {(()=>{const PROJ=[
            {icon:'📊',badge:lang==='fr'?'DASHBOARD IA SUR-MESURE':'AI DECISION DASHBOARD',title:lang==='fr'?'Dashboard décisionnel construit sur votre pain point exact':'Decision dashboard built on your exact pain point',desc:lang==='fr'?'KPIs actionnables, alertes seuils critiques, prévisions 13 semaines (MAPE 4,2%), veille concurrentielle 40+ marques. Un outil de décision — pas un template.':'Actionable KPIs, critical threshold alerts, 13-week forecasting (MAPE 4.2%), competitive intelligence on 40+ brands. A decision tool — not a template.',tags:['Power BI','Python','Prophet','SQL'],roi:{label:lang==='fr'?'ROI MESURÉ':'MEASURED ROI',items:[{v:lang==='fr'?'−40h/mois':'−40h/month',d:lang==='fr'?'reporting manuel':'manual reporting'},{v:'4.2%',d:'MAPE forecast'},{v:lang==='fr'?'< 5 min':'< 5 min',d:lang==='fr'?'délai alerte':'alert latency'}]}},
            {icon:'🤖',badge:lang==='fr'?'AUTOMATISATION FINANCIÈRE':'FINANCIAL AUTOMATION',title:lang==='fr'?'Clôture financière en 6 min — sans aucune saisie manuelle':'Financial close in 6 minutes — zero manual input',desc:lang==='fr'?'Export ERP → transformation → commentaires IA → Word/PDF → envoi automatique équipes et DG. Ce qui prenait 2 jours se fait seul à 6h du matin.':'ERP export → transformation → AI commentary → Word/PDF → auto delivery to teams & CEO. What took 2 days now runs alone at 6am.',tags:['N8N','GPT-4','Python','SAP'],roi:{label:lang==='fr'?'GAINS DIRECTS':'DIRECT SAVINGS',items:[{v:'−95%',d:lang==='fr'?'erreurs saisie':'entry errors'},{v:'6 min',d:lang==='fr'?'vs 2 jours avant':'vs 2 days before'},{v:'12+',d:lang==='fr'?'équipes servies':'teams served'}]}},
            {icon:'🔗',badge:lang==='fr'?'PROSPECTION LINKEDIN AUTO':'LINKEDIN AUTO PROSPECTING',title:lang==='fr'?'100 prospects qualifiés par jour — séquence personnalisée par IA':'100 qualified prospects per day — AI-personalized outreach',desc:lang==='fr'?'Ciblage ICP via Sales Navigator, messages personnalisés par IA, séquence 3 touchpoints, sync CRM automatique. Le pipeline se remplit pendant que vous travaillez.':'ICP targeting via Sales Navigator, AI-personalized messages, 3-touchpoint sequence, auto CRM sync. The pipeline fills while you work.',tags:['Sales Navigator','GPT-4','Make.com','CRM'],roi:{label:lang==='fr'?'RÉSULTATS':'RESULTS',items:[{v:'5×',d:lang==='fr'?'taux de réponse':'reply rate'},{v:'100/j',d:lang==='fr'?'prospects auto':'auto prospects'},{v:'−80%',d:lang==='fr'?'temps prospection':'prospecting time'}]}},
            {icon:'📦',badge:lang==='fr'?'SUPPLY CHAIN IA':'AI SUPPLY CHAIN',title:lang==='fr'?'Zéro rupture de stock — prévision et commande automatique':'Zero stockouts — AI forecasting and automatic purchase orders',desc:lang==='fr'?'Prévision niveau SKU 8 semaines, détection risques rupture, génération PO automatique, workflow approbation digitalisé. Surplus et ruptures éliminés simultanément.':'8-week SKU-level forecasting, stockout risk detection, automatic PO generation, digitized approval workflow. Surplus and stockouts eliminated simultaneously.',tags:['Python','Prophet','N8N','ERP'],roi:{label:lang==='fr'?'IMPACT MESURÉ':'MEASURED IMPACT',items:[{v:'−80%',d:lang==='fr'?'ruptures de stock':'stockouts'},{v:'8 sem.',d:lang==='fr'?'horizon prévision':'forecast horizon'},{v:'PO',d:lang==='fr'?'auto en 1 clic':'auto in 1 click'}]}}
          ];return(
        <div className="projects-ticker-wrap reveal">
          <div className="projects-ticker">
          {[...PROJ,...PROJ].map((p,i)=>(
            <div key={i} className="project-card project-card-ticker" aria-hidden={i>=PROJ.length?'true':'false'}>
              <div className="project-header">
                <span className="project-badge">{p.badge}</span>
                <span style={{fontSize:'1.5rem',lineHeight:1}}>{p.icon}</span>
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div style={{background:'rgba(0,240,168,0.06)',border:'1px solid rgba(0,240,168,0.22)',borderRadius:8,padding:'10px 14px',marginBottom:14}}>
                <div style={{fontSize:8,fontWeight:700,letterSpacing:'1.5px',color:'#00F0A8',fontFamily:"'Space Mono',monospace",marginBottom:8}}>{p.roi.label}</div>
                <div style={{display:'flex',gap:14}}>
                  {p.roi.items.map((r,j)=>(<div key={j} style={{textAlign:'center'}}>
                    <div style={{fontSize:16,fontWeight:800,color:'#00F0A8',fontFamily:"'Space Grotesk',sans-serif"}}>{r.v}</div>
                    <div style={{fontSize:9,color:'var(--text-dim)',marginTop:2,lineHeight:1.3}}>{r.d}</div>
                  </div>))}
                </div>
              </div>
              <div className="project-tags">{p.tags.map((tg,j)=><span key={j} className="project-tag">{tg}</span>)}</div>
            </div>
          ))}
          </div>
        </div>
        );})()}
      </div>
    </section>

    {/* STACK + COMPETENCY RADAR — side-by-side desktop, stacked mobile */}
    {mode!=='human'&&<section id="stack" className="section">
      <div style={{maxWidth:'1500px',margin:'0 auto'}}>
        <div className="section-eyebrow">{t.stackEyebrow}</div>
        <h2 className="section-title">{t.stackTitle} <em>{t.stackTitleEm}</em></h2>
        <div className="stack-radar-grid">
          <div className="stack-radar-chart">
            <RadarChart lang={lang} compact={true}/>
          </div>
          <div className="stack-radar-ticker-wrap stack-ticker-wrap reveal">
            <div className="stack-ticker">
              {[...STACK,...STACK].map((s,i)=>(
                <div key={i} className="stack-card stack-card-compact" aria-hidden={i>=STACK.length?'true':'false'}>
                  <span className="stack-emoji">{s.e}</span>
                  <div className="stack-card-text">
                    <div className="stack-name">{s.name}</div>
                    <div className="stack-cat">{s.cat}</div>
                  </div>
                  <div className="stack-level stack-level-pill">{s.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>}

    {/* CERTIFICATES */}
    <section id="certificates" className="section reveal">
      <div style={{maxWidth:'1500px',margin:'0 auto'}}>
        <div className="section-eyebrow">🎓 {lang==='fr'?'Anthropic School · Mars 2026':'Anthropic School · March 2026'}</div>
        <h2 className="section-title">{lang==='fr'?<>8 <em>Certifications</em> obtenues</>:<>8 <em>Certifications</em> earned</>}</h2>
        <CertWall lang={lang}/>
      </div>
    </section>

    {/* BLOG */}
    <section id="blog" className="section" style={{background:'transparent'}}>
      <div style={{maxWidth:'1500px',margin:'0 auto'}}>
        <div className="section-eyebrow">{t.blogEyebrow}</div>
        <h2 className="section-title">{t.blogTitle} <em>{t.blogTitleEm}</em></h2>
        <p style={{fontSize:'.84rem',color:'var(--text-sec)',maxWidth:'560px',marginBottom:'36px',lineHeight:'1.8'}}>{t.blogDesc}</p>
        <Blog lang={lang}/>
      </div>
    </section>

    {/* WORLD MAP (countries) + VISITOR MAP — side by side on desktop, stacked on mobile */}
    <div className="intl-visitor-grid">
      <div className="world-map-section">
        <div className="world-map-inner">
          <div className="intl-header">
            <div>
              <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:'.65rem',color:'var(--accent2)',letterSpacing:'3px',textTransform:'uppercase',marginBottom:10,display:'flex',alignItems:'center',gap:8}}>
                🌍 {lang==='fr'?'Présence Internationale':'International Presence'}
              </div>
              <h2 className="intl-title">
                {lang==='fr'?'Opérationnel':'Operational'}<br/>
                <em>{lang==='fr'?'partout dans le monde.':'anywhere in the world.'}</em>
              </h2>
            </div>
            <div className="intl-badge">
              <div className="intl-badge-num">{countries.length}</div>
              <div className="intl-badge-label">{lang==='fr'?'pays vécus':'countries lived'}</div>
            </div>
          </div>
          <WorldMap countries={countries} setActiveCountry={setActiveCountry} lang={lang}/>
        </div>
      </div>
      <VisitorMap lang={lang} mode={mode}/>
    </div>

    {/* CH7 — CONTACT */}
    <section id="contact" className="section">
      <div style={{position:'relative',marginBottom:'32px'}}>
        <div className="chapter-label">Chapter 06 — The Decision</div>
        <div style={{position:'absolute',top:'-20px',right:'0',fontFamily:"'Bebas Neue',sans-serif",fontSize:'5rem',color:'var(--border-dim)',lineHeight:1}}>07</div>
      </div>
      <div className="section-eyebrow">{t.contactEyebrow}</div>
      <h2 className="section-title">{t.contactTitle} <em>{t.contactTitleEm}</em></h2>
      <div className="contact-layout reveal">
        <div className="contact-cards">
          <CopyEmailButton lang={lang}/>
          <a href="https://www.linkedin.com/in/antoine2maintenant/" target="_blank" rel="noopener noreferrer" className="contact-card"><span className="contact-icon">🔗</span><div><div className="contact-lbl">LinkedIn</div><div className="contact-val">linkedin.com/in/antoine2maintenant</div></div></a>
          <a href="https://github.com/demaintenant-antoine-pro" target="_blank" rel="noopener noreferrer" className="contact-card"><span className="contact-icon">🐙</span><div><div className="contact-lbl">GitHub</div><div className="contact-val">github.com/demaintenant-antoine-pro</div></div></a>
          <div className="contact-card" style={{cursor:'default'}}><span className="contact-icon">🌍</span><div><div className="contact-lbl">{t.contactLocation}</div><div className="contact-val">France · Dubai · Canada · Singapore · Remote</div></div></div>
          <div className="contact-card" style={{cursor:'default'}}><span className="contact-icon">📞</span><div><div className="contact-lbl">{lang==='fr'?'Ligne directe (Canada)':'Direct Line (Canada)'}</div><div className="contact-val">+1 (263) 385-6506</div></div></div>
          <a href="https://wa.me/33610825921?text=Bonjour%20Antoine%2C%20j'ai%20vu%20votre%20portfolio%20et%20je%20voudrais%20en%20savoir%20plus%20!" target="_blank" rel="noopener noreferrer" className="contact-card"><span className="contact-icon">💬</span><div><div className="contact-lbl">WhatsApp <span style={{color:'var(--accent3)',fontSize:'.38rem',marginLeft:'5px',fontFamily:"'Space Mono',monospace"}}>{lang==='fr'?'MESSAGE PRÉREMPLI':'PRE-FILLED MSG'}</span></div><div className="contact-val">+33 6 10 82 59 21 — {lang==='fr'?'Envoyer un message →':'Send a message →'}</div></div></a>
        </div>
        <div className="contact-cta reveal reveal-right">
          <h3>{t.contactH3}</h3>
          <p dangerouslySetInnerHTML={{__html:t.contactP}}/>
          <div style={{fontFamily:"'Space Mono',monospace",fontSize:'.56rem',color:'#415a77',letterSpacing:'2px',textTransform:'uppercase',display:'flex',alignItems:'center'}}><span className="status-dot"/>{t.contactStatus}</div>
            <button className="book-call-btn" onClick={()=>{setShowCalendly(true);SFX.click();}}>
              📅 {lang==='fr'?'Réserver un call de 30 min':'Book a 30-min call'} →
            </button>
        </div>
      </div>
    </section>

    {/* TERMINAL — very last (after contact, before footer) */}
    <section id="terminal" className="section">
      <div style={{maxWidth:'1500px',margin:'0 auto'}}>
        <div className="section-eyebrow">{t.terminalEyebrow}</div>
        <h2 className="section-title">{t.terminalTitle} <em>{t.terminalTitleEm}</em></h2>
        <p style={{fontSize:'.84rem',color:'var(--text-sec)',maxWidth:'560px',marginBottom:'32px',lineHeight:'1.8'}}>{t.terminalDesc}</p>
        <TerminalChatbot lang={lang}/>
      </div>
    </section>

    <div style={{textAlign:'center',padding:'20px',fontFamily:"'Space Mono',monospace",fontSize:'.44rem',color:'var(--text-mute)',letterSpacing:'2px'}}>
      {t.footerKonami}
    </div>
  </LangCtx.Provider>);
}

/* ─── ROOT APP ─────────────────────────────────────────────────────────────── */
function App(){
  // Tech mode only (Human mode retired — preserved in JSX but unreachable).
  const [ready,setReady]=useState(!!window._psMode);
  const [initLang,setInitLang]=useState(()=>window._psLang||'en');

  useEffect(()=>{
    function handler(e){ setInitLang(e.detail.lang||'en'); setReady(true); }
    window.addEventListener('psChosen',handler);
    const poll=setInterval(()=>{
      if(window._psMode && !window._psBootPending){
        setInitLang(l=>l||window._psLang||'en');
        setReady(true);
        clearInterval(poll);
      }
    },150);
    return()=>{window.removeEventListener('psChosen',handler);clearInterval(poll);};
  },[]);

  useEffect(()=>{
    document.body.setAttribute('data-theme','dark');
    document.body.classList.remove('human-mode');
  },[ready]);

  if(!ready) return null;
  return <PortfolioApp initLang={initLang} mode="tech" onSwitchMode={()=>{}}/>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
