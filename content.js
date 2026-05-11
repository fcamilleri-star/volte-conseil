/* ═══════════════════════════════════════
   VOLTE — content.js
   
   C'est ICI que vous modifiez tous les
   textes du site. Pas besoin de toucher
   au HTML ou au CSS.
═══════════════════════════════════════ */

const CONTENT = {

  // ── INFOS GÉNÉRALES ──
  site: {
    nom: 'VOLTE',
    tagline: 'Transformation & Maîtrise des Risques',
    email: 'contact@volte-conseil.fr',
    telephone: '',
    localisation: 'Toulouse · Paris · France entière',
    linkedin: 'https://linkedin.com',
  },

  // ── HOMEPAGE ──
  home: {
    hero: {
      eyebrow: 'Cabinet indépendant · Transformation & maîtrise des risques',
      titre_1: "L'étincelle",
      titre_2: 'qui empêche',
      titre_3: 'de tourner en rond.',
      sous_titre: "Nous intervenons là où les organisations sont bloquées, sans cap clair. Nous apportons l'impulsion qui remet les choses en mouvement. Durablement.",
      cta_principal: 'Voir nos interventions',
      cta_secondaire: 'Prendre contact',
      scroll_label: 'Du flou vers la clarté',
    },

    manifeste: {
      citation: 'Direct. Concret. Sans jargon. Sérieux sans être rigide.',
      attribution: 'Notre philosophie',
    },

    stats: [
      { valeur: '15+', label: "Ans d'expérience" },
      { valeur: '48h', label: 'Délai de réponse' },
      { valeur: '2',   label: 'Experts dédiés' },
      { valeur: '0',   label: 'Junior caché' },
    ],

    entretien_decouverte: {
      badge: 'Gratuit',
      titre: 'On vous aide à y voir plus clair.',
      texte: "Grâce à notre outil de diagnostic, nous identifions rapidement les principaux irritants de votre structure et les écarts vis-à-vis des attentes de votre secteur. Vous repartez avec une première lecture claire de vos priorités.",
      mention: 'Sans engagement.',
      cta: 'Organiser un entretien découverte →',
    },

    pour_qui: {
      eyebrow: '01 · Pour qui',
      titre: "Pour les organisations qui n'avancent plus comme elles le voudraient.",
      items: [
        {
          num: '01',
          titre: 'Mutuelles',
          texte: "Pilotage des risques, conformité Solvabilité II, refonte du dispositif de contrôle interne.",
        },
        {
          num: '02',
          titre: 'Organismes de protection sociale',
          texte: "Cadrage de programmes de transformation, gouvernance, maîtrise opérationnelle.",
        },
        {
          num: '03',
          titre: 'TPE-PME',
          texte: "Mise en ordre, structuration, accompagnement des dirigeants face à la complexité.",
        },
        {
          num: '04',
          titre: 'Startups',
          texte: "Transition d'une structure projet vers une organisation pérenne, sans alourdir.",
        },
      ],
    },
  },

  // ── QUI SOMMES-NOUS ──
  equipe: {
    accroche: "Nous avons été de l'autre côté de la table.",
    intro: "VOLTE est né d'un constat simple : les structures qui en ont le plus besoin n'ont pas toujours accès à un conseil à la hauteur de leurs enjeux. Trop cher, trop généraliste, trop éloigné du terrain. Deux consultants indépendants. Des recommandations faites pour être appliquées, pas rangées dans un tiroir.",
    consultants: [
      {
        prenom: 'Florian',
        nom: 'Camilleri',
        initiales: 'FC',
        role: 'Gouvernance · Audit interne · Maîtrise des risques · RGPD',
        citation: "J'ai construit ma conviction sur le terrain, pas en salle de réunion.",
        parcours: "Diplômé de TBS Toulouse et titulaire d'un DU DPO de Paris Dauphine. Audit interne chez Orange, puis EY, puis Responsable audit interne et fonction clé Solvabilité II au Groupe Solimut pendant 5 ans.",
        linkedin: 'https://linkedin.com',
      },
      {
        prenom: 'Marius',
        nom: 'Vidaller',
        initiales: 'MV',
        role: 'Stratégie · Organisation · Projets métiers',
        citation: "Une recommandation qui ne se met pas en œuvre ne vaut rien.",
        parcours: "Diplômé de l'IAE Toulouse. 9 ans de conseil en stratégie et organisation, principalement en protection sociale. Plans stratégiques, réorganisations, pilotage de projets complexes.",
        linkedin: 'https://linkedin.com',
      },
    ],
  },

};
