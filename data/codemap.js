// codeMap.js


  // codeMap.js (inchangé)
const thesaurus = {
  "1":   { label: "Patrimoine bâti", description: "Ensemble des constructions relevant du patrimoine architectural." },

  "11":  { label: "Culte", description: "Espaces et édifices religieux, lieux spirituels ou liturgiques." },
  "111": { label: "Orthodoxe", description: "Édifices du culte orthodoxe (églises), petites chapelles, lieux rituels grecs." },

  "12":  { label: "Historique", description: "Patrimoine lié à l'histoire longue de la ville." },

  "13":  { label: "Remarquable", description: "Bâtiments se distinguant par leur architecture ou leur importance locale." },

  "14":  { label: "Ruines et bâtiments abandonnés", description: "Structures détériorées ou lieux désertés." },

  "15":  { label: "Friches", description: "Espaces laissés à l'abandon ou non développés, souvent réinvestis de manière imprévue." },
  "151": { label: "Friche urbaine", description: "Terrains abandonnés en milieu urbain, souvent envahis par la végétation." },
  "153": { label: "Friche industrielle", description: "Sites industriels désaffectés, souvent en reconversion ou en ruine." },


  "2":   { label: "Mobilier urbain", description: "Éléments fonctionnels et esthétiques intégrés dans l'espace public." },

  "21":  { label: "Mobilier fonctionnel", description: "Éléments utilitaires dans l’espace public (bancs, poubelles, éclairage, etc.)." },
  "22":  { label: "Mobilier technique", description: "Installations techniques liées à l’infrastructure urbaine (poteaux électriques, bornes, etc.)." },

  "3":   { label: "Transport et mobilité", description: "Infrastructures et modes de transport facilitant la circulation en ville." },

  "31":  { label: "Motorisée", description: "Transports utilisant des véhicules à moteur (voitures, bus, motos, etc.)." },
  "32":  { label: "Douce", description: "Transports non motorisés tels que la marche, le vélo, ou les transports publics." },

  "4":   { label: "Art, représentation & symbolique urbaine", description: "Formes d’expression artistique ou symbolique dans l'espace public." },

  "41":  { label: "Art officiel", description: "Œuvres d’art intégrées dans l’espace public par des instances officielles." },
  "411": { label: "Installations artistiques", description: "Œuvres d'art créées ou exposées dans des lieux publics ou urbains." },
  "412": { label: "Fresques murales", description: "Œuvres d'art peintes directement sur des murs ou façades, créées ou exposées dans des espaces publics ou urbains, contribuant à l'enrichissement du paysage visuel et culturel de la ville." },

  "42":  { label: "Graffitis & inscriptions urbaines", description: "Messages visuels et inscriptions présentes sur les murs de la ville." },


  "5":   { label: "Société et politique", description: "Manifestations visibles des dynamiques sociales et politiques qui façonnent les sociétés. Ces événements peuvent revêtir diverses formes, allant des rassemblements populaires aux actions de protestation." },

  "51":  { label: "Manifestations", description: "Événements publics ou rassemblements à caractère politique ou social." },
  "511": { label: "Rassemblements", description: "Groupes de personnes se réunissant pour des actions collectives." },
  "512": { label: "Processions / marches", description: "Défilés organisés, souvent à but revendicatif ou commémoratif." },

  "52":  { label: "Mouvements et revendications", description: "Signes de luttes sociales ou politiques exprimées dans l'espace public." },
  "521": { label: "Anarchisme", description: "Symboles, graffitis et autres marques exprimant l'idéologie anarchiste." },
  "522": { label: "Autres mouvements", description: "Revendications sociales ou politiques provenant de divers mouvements." },


  "6":   { label: "Commerces et services urbains", description: "Lieux et infrastructures liés à l’activité commerciale et aux services dans la ville." },


  "7":   { label: "Architecture", description: "Ensembles bâtis, styles, formes et structures caractéristiques de l'environnement construit." },

"71":  { label: "Typologies architecturales", description: "Catégories de constructions définies par leur style, leur période ou leur fonction." },

"711": { label: "Antiques", description: "Typologies issues de l'architecture antique grecque et romaine." },
"7111": { label: "Ordre dorique", description: "Style antique caractérisé par des colonnes massives et sans base." },
"7112": { label: "Ordre ionique", description: "Style antique reconnaissable à ses colonnes à volutes." },
"7113": { label: "Ordre corinthien", description: "Style antique distinctif avec chapiteaux ornés de feuilles d’acanthe." },

"712": { 
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

"713": { 
  label: "Ottoman", 
  description: "Styles issus de la période ottomane, influencés par l’architecture islamique et l’organisation urbaine turque." 
},

"714": { label: "Néoclassique", description: "Architecture inspirée de l'Antiquité, réinterprétée à partir du XVIIIe siècle." },

"715": { 
  label: "Moderne et contemporaine", 
  description: "Architectures du XXe siècle à aujourd’hui, fondées sur l'innovation structurelle et fonctionnelle." 
},
"7151": { 
  label: "Modernisme (polykatoikies)", 
  description: "Immeubles d’habitation en béton armé des années 1950–1980, typiques du paysage athénien." 
},
"7152": { 
  label: "Architecture brutaliste", 
  description: "Structures en béton brut, aux formes géométriques affirmées (ex. universités, bâtiments administratifs)." 
},
"7153": { 
  label: "Architecture contemporaine", 
  description: "Bâtiments récents utilisant verre, acier et géométrie innovante (ex. Stavros Niarchos Foundation Center)." 
},

"72":  { label: "Éléments architecturaux", description: "Parties constitutives d'un bâtiment, décoratives ou structurelles." },

"721": { label: "Balcons / loggias", description: "Espaces extérieurs attenants aux façades, ouverts ou semi-fermés." },
"722": { label: "Colonnes et piliers", description: "Éléments verticaux porteurs, de styles antiques ou modernes." },
"723": { label: "Arcades", description: "Séries d’arches soutenues par des colonnes ou piliers." },
"725": { label: "Toitures", description: "Parties supérieures d’un bâtiment, plates ou inclinées." },
"726": { label: "Façades", description: "Parois extérieures d’un bâtiment, définies par leurs matériaux et traitements." },


"73":  { label: "Matériaux et techniques", description: "Substances et procédés utilisés pour la construction et la structure des bâtiments." },

"731": { label: "Pierre", description: "Matériau traditionnel utilisé pour la construction monumentale ou vernaculaire." },
"732": { label: "Béton armé", description: "Matériau moderne composé de béton renforcé par une armature métallique." },
"733": { label: "Brique", description: "Élément de construction en terre cuite utilisé pour murs et structures." },
"734": { label: "Métal", description: "Matériau utilisé pour structures, charpentes ou éléments décoratifs." },
"735": { label: "Bois", description: "Matériau organique utilisé pour charpentes, menuiseries et constructions variées." },


"74": { label: "Représentations architecturales", description: "Différentes représentations graphiques utilisées pour illustrer la conception architecturale."  },
"741": { label: "Plans", description: "Représentations à échelle réduite d'un bâtiment, montrant la disposition des espaces." },
"742": { label: "Coupes", description: "Coupe transversale d’un bâtiment pour montrer la structure interne et les différentes hauteurs."  },
"743": { label: "Élévations", description: "Représentation verticale d’un bâtiment montrant sa façade." },
"744": { label: "Dessins d'architecture", description: "Représentations graphiques des idées, concepts ou détails architecturaux sous forme de dessins, croquis ou plans." },

"8":   { label: "Temporalité", description: "Périodes historiques permettant de situer les éléments patrimoniaux dans le temps." },

"81":  { label: "Antiquité", description: "Période correspondant au développement des civilisations grecque et romaine." },

"811": { label: "Période archaïque", description: "VIIIe – VIe siècle av. J.-C. : premiers développements de la cité grecque." },
"812": { label: "Période classique", description: "Ve – IVe siècle av. J.-C. : apogée de la culture et de l’art grecs." },
"813": { label: "Période hellénistique", description: "323 – 31 av. J.-C. : diffusion de la culture grecque après Alexandre." },
"814": { label: "Période romaine", description: "31 av. J.-C. – IVe siècle ap. J.-C. : domination romaine et intégration culturelle." },

"82":  { label: "Période byzantine", description: "Période marquée par l’installation du christianisme, la transformation urbaine et le développement de l’architecture religieuse à Athènes." },


"83":  { label: "Période ottomane", description: "Période de domination ottomane influençant l’organisation urbaine et architecturale." },

"84":  { label: "Période contemporaine", description: "Époque moderne et actuelle, marquée par de profondes transformations sociales et urbaines." },

"841": { label: "Formation de l’État grec", description: "1830 – 1912 : Indépendance et structuration de l’État moderne ; reconstruction d’Athènes comme capitale néoclassique" },
"842": { label: "Crise économique grecque", description: "2010 – 2020 : période de récession ayant fortement marqué l’espace urbain." }

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
/*
const codeMap = {
  "1":   "Patrimoine bâti",
    "11":  "Culte",
      "111": "Orthodoxe (églises, ekklisakia)",

    "12":  "Historique",
      "121": "Antique (agora antique)",

    "13":  "Remarquable",
      "131": "Maisons remarquables",

    "14":  "Ruines et bâtiments abandonnés",
      "141": "Ruines",
      "142": "Bâtiments abandonnés / désaffectés",

    "15":  "Friches",
      "151": "Friche urbaine",
      "152": "Friche végétalisée",
      "153": "Friche industrielle",

  "2":   "Mobilier urbain",
    "21":  "Mobilier fonctionnel",

    "22":  "Mobilier technique",

  "3":   "Transport et mobilité",
    "31":  "Motorisée",

    "32":  "Douce",

  "4":   "Art, représentation & symbolique urbaine",
    "41":  "Art officiel",
      "411": "Installations artistiques",

    "42":  "Graffitis & inscriptions urbaines",
      "421": "Symboles anarchistes",
      "422": "Motifs récurrents",
      "423": "Graffitis divers",

  "5":   "Expressions et signes socio-politiques",
    "51":  "Manifestations",
      "511": "Rassemblements",
      "512": "Processions / marches",

    "52":  "Mouvements et revendications",
      "521": "Anarchisme",
      "522": "Autres mouvements",
      "523": "Affiches / stickers militants",

  "6":   "Commerces et services urbains"
};
*/