  
/* ---------- gestion d'axes (sélection / reset) ---------- */
/*function enterAxis(axisKey) {
  if (!axes[axisKey]) return;
  currentAxis = axisKey;
  // reset de la navigation d'arborescence (on affiche d'abord les racines de l'axe)
  currentLayerPath = [];
  activeTags = ["All"];

  renderQuickFilters();
  applyFilters();
}*/
  function enterAxis(axisKey) {
  if (!axes[axisKey]) return;
  currentAxis = axisKey;

  // reset de la navigation d'arborescence
  currentLayerPath = [];

  // 1) récupérer toutes les racines de l'axe (ex: ["A.1","A.2"...])
  const roots = Array.isArray(axes[axisKey].roots) ? axes[axisKey].roots.slice() : [];

  // 2) pour chaque racine, récupérer toutes les feuilles (labels) sous cette racine
  const leavesSet = new Set();
  roots.forEach(rootCode => {
    const leaves = getLeavesUnderPath([rootCode]); // renvoie labels en lowercase
    leaves.forEach(l => leavesSet.add(l));
  });

  // 3) appliquer le filter : si on a des feuilles -> activeTags = ces feuilles
  //    sinon on garde "All" (aucun contenu dans cet axe)
  const leavesArr = Array.from(leavesSet);
  activeTags = (leavesArr.length > 0) ? leavesArr : ["All"];

  // rafraîchir l'UI et appliquer le filtre
  renderQuickFilters();
  applyFilters();
}


function resetAxis() {
  currentAxis = null;
  currentLayerPath = [];
  activeTags = ["All"];
  renderQuickFilters();
  applyFilters();
}


  // codeMap.js (inchangé)
const thesaurus = {
  "A": { 
    label: "Matérialité urbaine", 
    description: "composantes physiques et tangibles de l’espace urbain" 
  },
  "C": { 
    label: "Architecture",
    description: "Axe regroupant les typologies, époques, styles et éléments architecturaux." 
  },
  "P": { 
    label: "Phénomènes urbains & dynamiques", 
    description: "Axe regroupant les périodes, phases historiques et temporalités d’Athènes. (interprétatif)" 
  },
  "T": { 
    label: "Périodes historiques",
    description: "Axe regroupant les périodes, phases historiques et temporalités d’Athènes." 
   },




  "A.1":   { label: "Bâti", description: "Ensemble des constructions relevant du patrimoine architectural." },

  "A.1.1":  { label: "Culte", description: "Espaces et édifices religieux, lieux spirituels ou liturgiques." },
  "A.1.1.1": { label: "Orthodoxe", description: "Édifices du culte orthodoxe (églises), petites chapelles, lieux rituels grecs." },

  "A.1.2":  { label: "Historique", description: "Patrimoine lié à l'histoire longue de la ville." },

  "A.1.3":  { label: "Remarquable", description: "Bâtiments se distinguant par leur architecture ou leur importance locale." },

  "A.1.4":  { label: "Friches", description: "Espaces laissés à l'abandon ou non développés." },


  "A.2":   { label: "Mobilier urbain", description: "Éléments fonctionnels et esthétiques intégrés dans l'espace public." },

  "A.2.1":  { label: "Mobilier fonctionnel", description: "Éléments utilitaires dans l’espace public (bancs, poubelles, éclairage, etc.)." },
  "A.2.2":  { label: "Mobilier technique", description: "Installations techniques liées à l’infrastructure urbaine (poteaux électriques, bornes, etc.)." },

  "A.3":   { label: "Transport et mobilité", description: "Infrastructures et modes de transport facilitant la circulation en ville." },

  "A.3.1":  { label: "Mobilité douce", description: "Transports non motorisés tels que la marche ou le vélo." },
  "A.3.2":  { label: "Motorisée", description: "Transports utilisant des véhicules à moteur (voitures, bus, motos, etc.)." },
  "A.3.3":  { label: "Transports collectifs", description: "" },
  "A.3.3.1":  { label: "Bus", description: "" },
  "A.3.3.2":  { label: "Tramway", description: "" },
  "A.3.3.3":  { label: "Métro", description: "" },
/*331 — Bus / trolleybus
332 — Tramway
333 — Métro
334 — Train / Proastiakos
335 — Téléphérique urbain (rare mais utile)
336 — Stations / arrêts / infrastructures
337 — Intermodalité (park and ride, correspondances, nœuds*/

  "A.4":   { label: "Art", description: "Formes d’expression artistique dans l'espace public." },

  "A.4.1":  { label: "Art officiel", description: "Œuvres d’art intégrées dans l’espace public par des instances officielles." },
  "A.4.1.1": { label: "Installations artistiques", description: "Œuvres d'art créées ou exposées dans des lieux publics ou urbains." },
  "A.4.1.2": { label: "Fresques murales", description: "Œuvres d'art peintes directement sur des murs ou façades, créées ou exposées dans des espaces publics ou urbains, contribuant à l'enrichissement du paysage visuel et culturel de la ville." },

  "A.4.2":  { label: "Graffitis & inscriptions urbaines", description: "Messages visuels et inscriptions présentes sur les murs de la ville." },


  "A.6":   { label: "Commerces et services urbains", description: "Lieux et infrastructures liés à l’activité commerciale et aux services dans la ville." },

"A.7":   { label: "Biodiversité", description: "" },
"A.7.1":   { label: "Faune", description: "" },
"A.7.1.1":   { label: "Sauvage", description: "" },
"A.7.1.2":   { label: "Domestique", description: "" },
"A.7.2":   { label: "Flore", description: "" },


"C.1":  { label: "Typologies architecturales", description: "Catégories de constructions définies par leur style, leur période ou leur fonction." },

"C.1.1": { label: "Antiques", description: "Typologies issues de l'architecture antique grecque et romaine." },
"C.1.1.1": { label: "Ordre dorique", description: "Style antique caractérisé par des colonnes massives et sans base." },
"C.1.1.2": { label: "Ordre ionique", description: "Style antique reconnaissable à ses colonnes à volutes." },
"C.1.1.3": { label: "Ordre corinthien", description: "Style antique distinctif avec chapiteaux ornés de feuilles d’acanthe." },

"C.1.2": { 
  label: "Byzantin", 
  description: "Architecture religieuse et urbaine développée entre le IVe et le XVe siècle, caractéristique d'Athènes médiévale." 
},
/*
"7141": { 
  label: "Croix grecque inscrite", 
  description: "Plan en croix inscrite sous coupole, typique des églises byzantines d’Athènes (ex. Kapnikaréa)." 
},
"7142": { 
  label: "Église à dôme (coupole byzantine)", 
  description: "Édifices compacts dominés par une coupole centrale reposant sur un tambour." 
},
"7143": { 
  label: "Décor byzantin", 
  description: "Usage de briques, pierres alternées, arcs cintrés et détails céramiques." 
},*/

"C.1.3": { 
  label: "Ottoman", 
  description: "Styles issus de la période ottomane, influencés par l’architecture islamique et l’organisation urbaine turque." 
},

"C.1.4": { label: "Néoclassique", description: "Architecture inspirée de l'Antiquité, réinterprétée à partir du XVIIIe siècle." },

"C.1.5": { 
  label: "Moderne et contemporaine", 
  description: "Architectures du XXe siècle à aujourd’hui, fondées sur l'innovation structurelle et fonctionnelle." 
},
"C.1.5.1": { 
  label: "Modernisme (polykatoikies)", 
  description: "Immeubles d’habitation en béton armé des années 1950–1980, typiques du paysage athénien." 
},
"C.1.5.2": { 
  label: "Architecture brutaliste", 
  description: "Structures en béton brut, aux formes géométriques affirmées (ex. universités, bâtiments administratifs)." 
},
"C.1.5.3": { 
  label: "Architecture contemporaine", 
  description: "Bâtiments récents utilisant verre, acier et géométrie innovante (ex. Stavros Niarchos Foundation Center)." 
},

"C.2":  { label: "Éléments architecturaux", description: "Parties constitutives d'un bâtiment, décoratives ou structurelles." },

"C.2.1": { label: "Balcons / loggias", description: "Espaces extérieurs attenants aux façades, ouverts ou semi-fermés." },
"C.2.2": { label: "Colonnes et piliers", description: "Éléments verticaux porteurs, de styles antiques ou modernes." },
"C.2.3": { label: "Arcades", description: "Séries d’arches soutenues par des colonnes ou piliers." },
"C.2.4": { label: "Toitures", description: "Parties supérieures d’un bâtiment, plates ou inclinées." },
"C.2.5": { label: "Façades", description: "Parois extérieures d’un bâtiment, définies par leurs matériaux et traitements." },



"C.3":  { label: "Matériaux", description: "Substances et procédés utilisés pour la construction et la structure des bâtiments." },

"C.3.1": { label: "Pierre", description: "Matériau traditionnel utilisé pour la construction monumentale ou vernaculaire." },
"C.3.2": { label: "Béton armé", description: "Matériau moderne composé de béton renforcé par une armature métallique." },
"C.3.3": { label: "Brique", description: "Élément de construction en terre cuite utilisé pour murs et structures." },
"C.3.4": { label: "Métal", description: "Matériau utilisé pour structures, charpentes ou éléments décoratifs." },
"C.3.5": { label: "Bois", description: "Matériau organique utilisé pour charpentes, menuiseries et constructions variées." },


"C.4": { label: "Représentations architecturales", description: "Différentes représentations graphiques utilisées pour illustrer la conception architecturale."  },
"C.4.1": { label: "Plans", description: "Représentations à échelle réduite d'un bâtiment, montrant la disposition des espaces." },
"C.4.2": { label: "Coupes", description: "Coupe transversale d’un bâtiment pour montrer la structure interne et les différentes hauteurs."  },
"C.4.3": { label: "Élévations", description: "Représentation verticale d’un bâtiment montrant sa façade." },
"C.4.4": { label: "Dessins d'architecture", description: "Représentations graphiques des idées, concepts ou détails architecturaux sous forme de dessins, croquis ou plans." },


"T.1":  { 
  "label": "Antiquité", 
  "description": "Période de l'Antiquité grecque et romaine (de l'époque archaïque à la période romaine)." 
},
"T.1.1": { 
  "label": "Période archaïque", 
  "description": "VIIIe–VIe s. av. J.-C." 
},
"T.1.2": { 
  "label": "Période classique", 
  "description": "Ve–IVe s. av. J.-C." 
},
"T.1.3": { 
  "label": "Période hellénistique", 
  "description": "323–31 av. J.-C." 
},
"T.1.4": { 
  "label": "Période romaine", 
  "description": "31 av. J.-C. – IVe s. ap. J.-C." 
},
"T.2": { 
  "label": "Byzantin", 
  "description": "Période byzantine (IVe – XVe s.), subdivisée par phases historiques pertinentes localement." 
},
"T.2.1": { 
  "label": "Proto-byzantin", 
  "description": "IVe–VIIe s." 
},
"T.2.2": { 
  "label": "Moyen-byzantin", 
  "description": "VIIIe–XIIe s." 
},
"T.2.3": { 
  "label": "Tardif-byzantin", 
  "description": "XIIIe–XVe s." 
},
"T.3": { 
  "label": "Période ottomane", 
  "description": "Période de domination ottomane et ses transformations urbaines et architecturales." 
},
"T.4": { 
  "label": "Période moderne & contemporaine", 
  "description": "XIXe siècle à aujourd'hui : néoclassicisme, industrialisation, XXe siècle et mutations récentes." 
},
"T.4.1": { 
  "label": "Formation de l'État grec", 
  "description": "1830–1912 : urbanisme néoclassique et structuration de l'État." 
},
"T.4.2": { 
  "label": "XXe siècle", 
  "description": "Transformations urbaines et architectures du XXe siècle." 
},
"T.4.3": { 
  "label": "Crises & mutations contemporaines", 
  "description": "Phénomènes récents influant l'espace urbain (ex. crise 2010–2020)." 
},
"T.4.3.1": { 
  "label": "Crise économique grecque (2010–2020)", 
  "description": "Période de récession majeure affectant l'espace urbain."
},

/*Voir doc word thesaurus sur drive eivp*/

/*
1.  Morphologie & transformations physiques
o P11 Rénovation / réhabilitation → transformations du bâti existant
o P12 Densification → augmentation de la densité résidentielle ou mixité fonctionnelle
o P13 Gentrification → processus social-économique transformant quartiers
o P14 Informalité / occupation illégale → constructions non autorisées, friches, usages improvisés
o P15 Ilôts de chaleur / microclimat → phénomènes environnementaux urbains




P4 : Politiques & interventions urbaines
P — Phénomènes urbains & dynamiques → P4 : Politiques & interventions urbaines

P41 Politique de végétalisation / plantation d’arbres
Ex. : alignements d’arbres, parcs urbains, rues végétalisées
P42 Politique de rénovation / réhabilitation de quartier
Ex. : réaménagement de friches, réhabilitation de logements anciens
P43 Politique de mobilité / transport
Ex. : pistes cyclables, zones piétonnes, stations vélo en libre-service
P44 Politique de gestion du patrimoine
Ex. : protection de bâtiments historiques, restauration de monuments
P45 Autres interventions urbaines

Code  Description Perspective
P11 Rénovation / réhabilitation Transformation physique du bâti ou de l’espace urbain observée sur le terrain Observation des résultats visibles : bâtiments rénovés, rues réaménagées, friches transformées
P42 Politique de rénovation / réhabilitation  Action planifiée ou mise en œuvre par une autorité publique ou un acteur privé  Observation de l’initiative / intention : programme municipal, projet de rénovation, budget alloué, décision politique
*/

"P.1": { 
  "label": "Morphologie & transformations physiques", 
  "description": "résultat" 
},
"P.1.3": { 
  "label": "Gentrification", 
  "description": "Processus social-économique transformant quartiers" 
},
"P.1.5": { 
  "label": "Ilôts de chaleur / microclimat", 
  "description": "" 
},

"P.3": { 
  "label": "Événements & manifestations", 
  "description": "" 
},

"P.4": { 
  "label": "Politiques & interventions urbaines", 
  "description": "intention" 
},
"P.4.1": { 
  "label": "Politique de végétalisation / plantation d’arbres", 
  "description": "politique prévue" 
},

"P.4.2": { 
  "label": "Politiques de rénovation / réhabilitation / requalification urbaine", 
  "description": "politique prévue" 
},

"P.5": { 
  "label": "Mobilisations & conflits socio-politiques", 
  "description": "Dynamiques politiques ou sociales produisant des signes visibles dans l’espace public." 
},
"P.5.1": { 
  "label": "Contestation politique", 
  "description": "Graffitis, banderoles, assemblées, occupations reflétant une position politique identifiable (ex. anarchisme, antifascisme…)" 
},
"P.5.2": { 
  "label": "Revendications sociales", 
  "description": "Mouvements féministes, LGBTQ+, justice sociale, logement, droits des travailleurs, etc." 
},
};


function extractLabels(codeMap) {
  const result = {};

  for (const key in codeMap) {
    if (codeMap.hasOwnProperty(key)) {
      result[key] = codeMap[key].label;
    }
  }

  return result;
}

const codeMap = extractLabels(thesaurus);