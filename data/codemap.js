  // codeMap.js (inchangé)


// codeMap.js (unchanged)
const thesaurus = {
  "A": { 
    label: "Urban materiality", 
    description: "Physical and tangible components of urban space" 
  },
  "C": { 
    label: "Architecture",
    description: "Axis grouping typologies, periods, styles, and architectural elements." 
  },
  "P": { 
    label: "Urban phenomena & dynamics", 
    description: "Axis grouping processes, events, and actions that transform the city." 
  },
  "T": { 
    label: "Historical periods",
    description: "Axis grouping the historical periods and temporalities of Athens." 
   },

  "A.1":   { label: "Built environment", description: "All buildings in the city, old or contemporary." },

  "A.1.1":  { label: "Worship", description: "Religious spaces and edifices, spiritual or liturgical sites." },
  "A.1.1.1": { label: "Orthodox", description: "Orthodox worship buildings (churches), small chapels, Greek ritual sites." },

  "A.1.2":  { label: "Historical", description: "Heritage linked to the long history of the city." },

  "A.1.3":  { label: "Remarkable", description: "Buildings distinguished by their architecture or local importance." },

  "A.1.4":  { label: "Abandoned building", description: "Spaces left abandoned or undeveloped." },


  "A.2":   { label: "Urban furniture", description: "Functional and aesthetic elements integrated into public space." },

  "A.2.1":  { label: "Functional furniture", description: "Utility elements in public space (benches, bins, lighting, etc.)." },
  "A.2.2":  { label: "Technical furniture", description: "Technical installations linked to urban infrastructure (electric poles, terminals, etc.)." },

  "A.3":   { label: "Transport and mobility", description: "Infrastructures and modes of transport that enable circulation in the city." },

  "A.3.1":  { label: "Soft mobility", description: "Non-motorized transport such as walking or cycling." },
  "A.3.2":  { label: "Motorized", description: "Transport using motor vehicles (cars, buses, motorcycles, etc.)." },
  "A.3.3":  { label: "Public transport", description: "" },
  "A.3.3.1":  { label: "Bus", description: "" },
  "A.3.3.2":  { label: "Tram", description: "" },
  "A.3.3.3":  { label: "Metro", description: "" },

  "A.4":   { label: "Art", description: "Forms of artistic expression in public space." },

  "A.4.1":  { label: "Official art", description: "Artworks integrated into public space by official institutions." },
  "A.4.1.1": { label: "Art installations", description: "Artworks created or displayed in public or urban spaces." },
  "A.4.1.2": { label: "Murals", description: "Artworks painted directly on walls or façades, enriching the city’s visual and cultural landscape." },

  "A.4.2":  { label: "Graffiti & urban inscriptions", description: "Visual messages and inscriptions on the city’s walls." },


  "A.6":   { label: "Urban commerce and services", description: "Places and infrastructures related to commercial activity and services in the city." },

  "A.7":   { label: "Biodiversity", description: "" },
  "A.7.1":   { label: "Fauna", description: "" },
  "A.7.1.1":   { label: "Wild", description: "" },
  "A.7.1.2":   { label: "Domestic", description: "" },
  "A.7.2":   { label: "Flora", description: "" },

  "A.8":  { label: "Materials", description: "Substances used in the construction of buildings or urban structures." },

  "A.8.1": { label: "Stone", description: "Traditional material used for monumental or vernacular construction." },
  "A.8.2": { label: "Reinforced concrete", description: "Modern material composed of concrete reinforced with metal rebar." },
  "A.8.3": { label: "Brick", description: "Clay construction element used for walls and structures." },
  "A.8.4": { label: "Metal", description: "Material used for structures, frameworks, or decorative elements." },
  "A.8.5": { label: "Wood", description: "Organic material used for frames, joinery, and various constructions." },
  "A.8.6": { label: "Glass", description: "" },


  "C.1":  { label: "Architectural typologies", description: "Categories of buildings defined by their style, period, or function." },

  "C.1.1": { label: "Ancient", description: "Typologies from ancient Greek and Roman architecture." },
  "C.1.1.1": { label: "Doric order", description: "Ancient style characterized by massive columns without bases." },
  "C.1.1.2": { label: "Ionic order", description: "Ancient style recognizable by its volute columns." },
  "C.1.1.3": { label: "Corinthian order", description: "Ancient style with capitals decorated with acanthus leaves." },

  "C.1.2": { 
    label: "Byzantine", 
    description: "Religious and urban architecture from the 4th to 15th century, characteristic of medieval Athens." 
  },

  "C.1.3": { 
    label: "Ottoman", 
    description: "Styles from the Ottoman period, influenced by Islamic architecture and Turkish urban organisation." 
  },

  "C.1.4": { label: "Neoclassical", description: "Architecture inspired by Antiquity, reinterpreted from the 18th century onward." },

  "C.1.5": { 
    label: "Modern and contemporary", 
    description: "Architectures from the 20th century to today, based on structural and functional innovation." 
  },
  "C.1.5.1": { 
    label: "Modernism (polykatoikies)", 
    description: "Reinforced concrete apartment buildings from the 1950s–1980s, typical of the Athenian landscape." 
  },
  "C.1.5.2": { 
    label: "Brutalist architecture", 
    description: "Raw concrete structures with strong geometric forms (e.g. universities, administrative buildings)." 
  },
  "C.1.5.3": { 
    label: "Contemporary architecture", 
    description: "Recent buildings using glass, steel, and innovative geometry (e.g. Stavros Niarchos Foundation Center)." 
  },

  "C.2":  { label: "Architectural elements", description: "Constitutive parts of a building, decorative or structural." },

  "C.2.1": { label: "Balconies / loggias", description: "Exterior spaces attached to façades, open or semi-enclosed." },
  "C.2.2": { label: "Columns and pillars", description: "Vertical load-bearing elements, ancient or modern." },
  "C.2.3": { label: "Arcades", description: "Series of arches supported by columns or pillars." },
  "C.2.4": { label: "Roofs", description: "Upper parts of a building, flat or pitched." },
  "C.2.5": { label: "Façades", description: "Exterior walls of a building, defined by their materials and treatments." },

  "C.4": { label: "Architectural representations", description: "Different graphic representations used to illustrate architectural design."  },
  "C.4.1": { label: "Plans", description: "Scaled representations of a building showing the layout of spaces." },
  "C.4.2": { label: "Sections", description: "Cross-sections of a building showing internal structure and heights."  },
  "C.4.3": { label: "Elevations", description: "Vertical representation of a building showing its façade." },
  "C.4.4": { label: "Architectural drawings", description: "Graphic representations of ideas, concepts, or architectural details in the form of drawings, sketches, or plans." },


  "T.1":  { 
    label: "Antiquity", 
    description: "Period of Greek and Roman Antiquity (from the Archaic to the Roman period)." 
  },
  "T.1.1": { 
    label: "Archaic period", 
    description: "8th–6th c. BC" 
  },
  "T.1.2": { 
    label: "Classical period", 
    description: "5th–4th c. BC" 
  },
  "T.1.3": { 
    label: "Hellenistic period", 
    description: "323–31 BC" 
  },
  "T.1.4": { 
    label: "Roman period", 
    description: "31 BC – 4th c. AD" 
  },

  "T.2": { 
    label: "Byzantine", 
    description: "Byzantine period (4th–15th c.), subdivided into locally relevant historical phases." 
  },
  "T.2.1": { 
    label: "Early Byzantine", 
    description: "4th–7th c." 
  },
  "T.2.2": { 
    label: "Middle Byzantine", 
    description: "8th–12th c." 
  },
  "T.2.3": { 
    label: "Late Byzantine", 
    description: "13th–15th c." 
  },

  "T.3": { 
    label: "Ottoman period", 
    description: "Period of Ottoman rule and its urban and architectural transformations." 
  },

  "T.4": { 
    label: "Modern & contemporary period", 
    description: "19th century to today: neoclassicism, industrialisation, 20th century and recent changes." 
  },
  "T.4.1": { 
    label: "Formation of the Greek state", 
    description: "1830–1912: neoclassical urbanism and state consolidation." 
  },
  "T.4.2": { 
    label: "20th century", 
    description: "Urban transformations and architectures of the 20th century." 
  },
  "T.4.3": { 
    label: "Contemporary crises & transformations", 
    description: "Recent phenomena affecting urban space (e.g. 2010–2020 crisis)." 
  },
  "T.4.3.1": { 
    label: "Greek economic crisis (2010–2020)", 
    description: "Period of major recession affecting urban space."
  },


  "P.1": { 
    label: "Structural socio-spatial processes", 
    description: "Evolutionary transformations."
  },

  "P.1.1": { 
    label: "Gentrification", 
    description: "Progressive socio-economic transformation of a neighbourhood."
  },
  "P.1.2": { 
    label: "Urban informality", 
    description: "Unauthorized constructions or uses, improvised occupations."
  },
  "P.1.3": { 
    label: "Environmental effects", 
    description: ""
  },
  "P.1.3.1": { 
    label: "Heat islands", 
    description: ""
  },
  "P.1.3.2": { 
    label: "Local pollution", 
    description: ""
  },

  "P.2": { 
    label: "Visible physical transformations", 
    description: "Observable material result, regardless of origin."
  },
  "P.2.1": { 
    label: "Completed renovation / rehabilitation", 
    description: ""
  },
  "P.2.2": { 
    label: "Ruination / abandonment", 
    description: ""
  },
  "P.2.3": { 
    label: "Effective requalification", 
    description: ""
  },

  "P.3": { 
    label: "Short-term events & manifestations", 
    description: "Things that occur in a short timeframe."
  },
  "P.3.1": { 
    label: "Public demonstrations / marches", 
    description: ""
  },
  "P.3.2": { 
    label: "Assemblies, sit-ins", 
    description: ""
  },
  "P.3.3": { 
    label: "Festivals, cultural gatherings", 
    description: ""
  },
  "P.3.4": { 
    label: "Local crises (fires, collapses)", 
    description: ""
  },

  "P.4": { 
    label: "Planned policies & interventions", 
    description: "Intentional public decisions."
  },
  "P.4.1": { 
    label: "Greening policies", 
    description: ""
  },
  "P.4.2": { 
    label: "Renovation / requalification policies", 
    description: ""
  },
  "P.4.3": { 
    label: "Mobility / transport policies", 
    description: ""
  },
  "P.4.4": { 
    label: "Social policies (housing, inclusion)", 
    description: ""
  },
  "P.4.5": { 
    label: "Tourism / cultural policies", 
    description: ""
  },

  "P.5": { 
    label: "Sociopolitical mobilisations & conflicts", 
    description: "Collective actions producing visible signs."
  },
  "P.5.1": { 
    label: "Political protest", 
    description: "anarchist, antifascist symbols, political slogans"
  },
  "P.5.2": { 
    label: "Social claims", 
    description: "feminism, LGBTQ+, workers, housing"
  },
};




/*const thesaurus = {
  "A": { 
    label: "Matérialité urbaine", 
    description: "composantes physiques et tangibles de l’espace urbain" 
  },
  "C": { 
    label: "Architecture",
    description: "Axe regroupant les typologies, époques, styles et éléments architecturaux." 
  },
  "P": { 
    label: "Phénomènes & dynamiques urbaines", 
    description: "Axe regroupant les processus, événements et actions qui transforment la ville." 
  },
  "T": { 
    label: "Périodes historiques",
    description: "Axe regroupant les périodes, phases historiques et temporalités d’Athènes." 
   },




  "A.1":   { label: "Bâti", description: "Ensemble des constructions de la ville, anciennes ou contemporaines." },

  "A.1.1":  { label: "Culte", description: "Espaces et édifices religieux, lieux spirituels ou liturgiques." },
  "A.1.1.1": { label: "Orthodoxe", description: "Édifices du culte orthodoxe (églises), petites chapelles, lieux rituels grecs." },

  "A.1.2":  { label: "Historique", description: "Patrimoine lié à l'histoire longue de la ville." },

  "A.1.3":  { label: "Remarquable", description: "Bâtiments se distinguant par leur architecture ou leur importance locale." },

  "A.1.4":  { label: "Bâtiment Abandonné", description: "Espaces laissés à l'abandon ou non développés." },


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

"A.8":  { label: "Matériaux", description: "Substances utilisées dans la construction du bâti ou des structures urbaines." },

"A.8.1": { label: "Pierre", description: "Matériau traditionnel utilisé pour la construction monumentale ou vernaculaire." },
"A.8.2": { label: "Béton armé", description: "Matériau moderne composé de béton renforcé par une armature métallique." },
"A.8.3": { label: "Brique", description: "Élément de construction en terre cuite utilisé pour murs et structures." },
"A.8.4": { label: "Métal", description: "Matériau utilisé pour structures, charpentes ou éléments décoratifs." },
"A.8.5": { label: "Bois", description: "Matériau organique utilisé pour charpentes, menuiseries et constructions variées." },
"A.8.6": { label: "Verre", description: "" },


"C.1":  { label: "Typologies architecturales", description: "Catégories de constructions définies par leur style, leur période ou leur fonction." },

"C.1.1": { label: "Antiques", description: "Typologies issues de l'architecture antique grecque et romaine." },
"C.1.1.1": { label: "Ordre dorique", description: "Style antique caractérisé par des colonnes massives et sans base." },
"C.1.1.2": { label: "Ordre ionique", description: "Style antique reconnaissable à ses colonnes à volutes." },
"C.1.1.3": { label: "Ordre corinthien", description: "Style antique distinctif avec chapiteaux ornés de feuilles d’acanthe." },

"C.1.2": { 
  label: "Byzantin", 
  description: "Architecture religieuse et urbaine développée entre le IVe et le XVe siècle, caractéristique d'Athènes médiévale." 
},

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



"P.1": { 
  "label": "Processus socio-spatiaux structurels", 
  "description": "Transformations évolutives."
},

"P.1.1": { 
  "label": "Gentrification", 
  "description": "Transformation socio-économique progressive d’un quartier"
},
"P.1.2": { 
  "label": "Informalité urbaine", 
  "description": "Constructions ou usages non autorisés, occupations improvisées"
},
"P.1.3": { 
  "label": "Effets environnementaux", 
  "description": ""
},
"P.1.3.1": { 
  "label": "Îlots de chaleur", 
  "description": ""
},
"P.1.3.2": { 
  "label": "Pollution locale", 
  "description": ""
},



"P.2": { 
  "label": "Transformations physiques visibles", 
  "description": "Résultat matériel observable, indépendamment de l’origine."
},
"P.2.1": { 
  "label": "Rénovation / réhabilitation réalisée", 
  "description": ""
},
"P.2.2": { 
  "label": "Ruine / abandon obtenu", 
  "description": ""
},
"P.2.3": { 
  "label": "Requalification effective", 
  "description": ""
},

"P.3": { 
  "label": "Événements & manifestations ponctuelles", 
  "description": "Choses qui arrivent dans un temps court."
},
"P.3.1": { 
  "label": "Manifestations publiques / cortèges", 
  "description": ""
},
"P.3.2": { 
  "label": "Assemblées, sit-in", 
  "description": ""
},
"P.3.3": { 
  "label": "Fêtes, rassemblements culturels", 
  "description": ""
},
"P.3.4": { 
  "label": "Crises locales (incendies, effondrements)", 
  "description": ""
},
"P.4": { 
  "label": "Politiques & interventions planifiées", 
  "description": "Décisions publiques intentionnelles."
},
"P.4.1": { 
  "label": "Politiques de végétalisation", 
  "description": ""
},
"P.4.2": { 
  "label": "Politiques de rénovation/requalification", 
  "description": ""
},
"P.4.3": { 
  "label": "Politiques de mobilité/transport", 
  "description": ""
},
"P.4.4": { 
  "label": "Politiques sociales (logement, inclusion)", 
  "description": ""
},
"P.4.5": { 
  "label": "Politiques touristiques / culturelles", 
  "description": ""
},
"P.5": { 
  "label": "Mobilisations & conflits sociopolitiques", 
  "description": "Actions collectives produisant des signes visibles."
},
"P.5.1": { 
  "label": "Contestations politiques", 
  "description": "symboles anarchistes, antifascistes, slogans politiques"
},
"P.5.2": { 
  "label": "Revendications sociales", 
  "description": "féminisme, LGBTQ+, travailleurs, logement"
},

};
*/


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