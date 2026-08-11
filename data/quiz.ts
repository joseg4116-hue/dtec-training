export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type QuizBank = {
  moduleId: string;
  passingScore: number;
  questionsPerSession: number;
  questions: QuizQuestion[];
};

export const quizBanks: QuizBank[] = [
  // ── CORE VALUES — EN ──────────────────────────────────────────────────────
  {
    moduleId: "core-values-en",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "cv-01",
        question: "What are DTEC's five core values?",
        options: [
          "Speed, Cost, Quality, Trust, Teamwork",
          "Trust, Teamwork, Quality, Safety, Respect",
          "Safety, Speed, Profit, Respect, Trust",
          "Teamwork, Trust, Compliance, Speed, Quality",
        ],
        correctIndex: 1,
      },
      {
        id: "cv-02",
        question: "True or False: If you make a mistake on the job, the safest move is to stay quiet about it so you don't get in trouble.",
        options: ["True", "False"],
        correctIndex: 1,
      },
      {
        id: "cv-03",
        question: "Which of these best reflects DTEC's definition of Quality?",
        options: [
          "Quality only matters for the erosion and sediment control devices we install",
          "Quality applies to our installs, but also to how we drive, communicate with clients, and keep our workspace",
          "Quality is mostly the supervisor's job to check",
          "Quality means doing things fast above all else",
        ],
        correctIndex: 1,
      },
      {
        id: "cv-04",
        question: "True or False: If you see a coworker taking a safety shortcut, it's not your place to say anything since it's their job, not yours.",
        options: ["True", "False"],
        correctIndex: 1,
      },
      {
        id: "cv-05",
        question: "True or False: Having a past that includes incarceration, gang affiliation, or a struggle with drugs or alcohol automatically disqualifies someone from working at DTEC.",
        options: ["True", "False"],
        correctIndex: 1,
      },
      {
        id: "cv-06",
        question: "What is an IDP, and who can help you create one?",
        options: [
          "An Individual Development Plan you build with your supervisor or DTEC's trainer",
          "An Incident Documentation Packet filed by your supervisor after a safety event",
          "An Internal Discipline Policy managed solely by HR",
          "An Inspection and Damage Photo log kept by the field crew",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ── CORE VALUES — ES ──────────────────────────────────────────────────────
  {
    moduleId: "core-values-es",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "cv-es-01",
        question: "¿Cuáles son los cinco valores fundamentales de DTEC?",
        options: [
          "Velocidad, Costo, Calidad, Confianza, Trabajo en Equipo",
          "Confianza, Trabajo en Equipo, Calidad, Seguridad, Respeto",
          "Seguridad, Velocidad, Ganancia, Respeto, Confianza",
          "Trabajo en Equipo, Confianza, Cumplimiento, Velocidad, Calidad",
        ],
        correctIndex: 1,
      },
      {
        id: "cv-es-02",
        question: "Verdadero o Falso: Si cometes un error en el trabajo, lo más seguro es quedarte callado para no meterte en problemas.",
        options: ["Verdadero", "Falso"],
        correctIndex: 1,
      },
      {
        id: "cv-es-03",
        question: "¿Cuál de estas opciones refleja mejor la definición de Calidad de DTEC?",
        options: [
          "La calidad solo importa en los dispositivos de control de erosión y sedimento que instalamos",
          "La calidad aplica a nuestras instalaciones, pero también a cómo manejamos, nos comunicamos con los clientes y mantenemos nuestro espacio de trabajo",
          "La calidad es principalmente responsabilidad del supervisor",
          "La calidad significa hacer las cosas rápido por encima de todo",
        ],
        correctIndex: 1,
      },
      {
        id: "cv-es-04",
        question: "Verdadero o Falso: Si ves a un compañero tomando un atajo de seguridad, no es tu lugar decir nada porque es su trabajo, no el tuyo.",
        options: ["Verdadero", "Falso"],
        correctIndex: 1,
      },
      {
        id: "cv-es-05",
        question: "Verdadero o Falso: Tener un pasado que incluye encarcelamiento, afiliación a pandillas o lucha con drogas o alcohol automáticamente descalifica a alguien para trabajar en DTEC.",
        options: ["Verdadero", "Falso"],
        correctIndex: 1,
      },
      {
        id: "cv-es-06",
        question: "¿Qué es un IDP, y quién puede ayudarte a crear uno?",
        options: [
          "Un Plan de Desarrollo Individual que construyes con tu supervisor o el capacitador de DTEC",
          "Un Paquete de Documentación de Incidentes que llena tu supervisor después de un evento de seguridad",
          "Una Política de Disciplina Interna manejada únicamente por Recursos Humanos",
          "Un registro de Inspección y Fotos de Daños que mantiene el equipo de campo",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ── MODULE 00 — EN ────────────────────────────────────────────────────────
  {
    moduleId: "00-en",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "en-01",
        question: "What is stormwater runoff?",
        options: [
          "Treated wastewater released from construction sites",
          "Rain and snowmelt that flows over land instead of soaking in",
          "Underground water that seeps into storm drains",
          "Water used to clean construction equipment on site",
        ],
        correctIndex: 1,
      },
      {
        id: "en-02",
        question: "According to the training, stormwater is the _____ source of water quality impairment in the U.S.",
        options: ["Second largest", "Third largest", "#1", "Fourth largest"],
        correctIndex: 2,
      },
      {
        id: "en-03",
        question: "What does BMP stand for?",
        options: [
          "Basic Management Plan",
          "Bureau of Management and Permits",
          "Building Maintenance Protocol",
          "Best Management Practice",
        ],
        correctIndex: 3,
      },
      {
        id: "en-04",
        question: "What does NPDES stand for?",
        options: [
          "National Permit for Discharge and Environmental Standards",
          "National Pollutant Discharge Elimination System",
          "Northwest Pollution and Drainage Enforcement System",
          "National Program for Drainage and Environmental Safety",
        ],
        correctIndex: 1,
      },
      {
        id: "en-05",
        question: "Which agency administers Colorado's CDPS stormwater permit program?",
        options: [
          "EPA Region 8",
          "CDPHE — Colorado's state health department",
          "Colorado Department of Transportation (CDOT)",
          "Colorado Division of Water Resources",
        ],
        correctIndex: 1,
      },
      {
        id: "en-06",
        question: "What historic event directly led to the passage of the Clean Water Act?",
        options: [
          "The Love Canal chemical disaster",
          "The Deepwater Horizon oil spill",
          "The Three Mile Island nuclear accident",
          "The Cuyahoga River catching fire",
        ],
        correctIndex: 3,
      },
      {
        id: "en-07",
        question: "In what year was the Clean Water Act passed?",
        options: ["1948", "1965", "1972", "1987"],
        correctIndex: 2,
      },
      {
        id: "en-08",
        question: "How many acres of land disturbance require NPDES permit coverage?",
        options: ["5 acres or more", "2 acres or more", "10 acres or more", "1 acre or more"],
        correctIndex: 3,
      },
      {
        id: "en-09",
        question: "How often must site inspections be conducted under the CDPS permit?",
        options: ["Every 7 days", "Every 21 days", "Every 14 days", "Every 30 days"],
        correctIndex: 2,
      },
      {
        id: "en-10",
        question: "What is the maximum fine per day per violation that CDPHE can issue?",
        options: ["$5,000", "$10,000", "$25,000", "$50,000"],
        correctIndex: 2,
      },
      {
        id: "en-11",
        question: "What does NOI stand for in the context of stormwater permits?",
        options: [
          "Notice of Inspection",
          "National Operations Index",
          "Notice of Intent",
          "Notice of Infraction",
        ],
        correctIndex: 2,
      },
      {
        id: "en-12",
        question: "Which of the following inspectors can issue a stop-work order directly on a construction site?",
        options: [
          "Only federal EPA inspectors",
          "Only CDPHE state inspectors",
          "Local MS4 inspectors (city/county)",
          "Only the project general contractor",
        ],
        correctIndex: 2,
      },
    ],
  },

  // ── MODULE 00 — ES ────────────────────────────────────────────────────────
  {
    moduleId: "00-es",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "es-01",
        question: "¿Qué es el agua de lluvia (stormwater runoff)?",
        options: [
          "Aguas residuales tratadas liberadas desde sitios de construcción",
          "La lluvia y el deshielo que corre por el suelo en lugar de absorberse",
          "Agua subterránea que se filtra en los desagüés pluviales",
          "Agua usada para limpiar el equipo de construcción en obra",
        ],
        correctIndex: 1,
      },
      {
        id: "es-02",
        question: "Según la capacitación, el agua de lluvia es la _____ causa de contaminación del agua en EE.UU.",
        options: ["Segunda mayor", "Tercera mayor", "Cuarta mayor", "#1"],
        correctIndex: 3,
      },
      {
        id: "es-03",
        question: "¿Qué significa BMP?",
        options: [
          "Plan Básico de Manejo",
          "Buró de Manejo y Permisos",
          "Best Management Practice (Mejor Práctica de Manejo)",
          "Protocolo de Mantenimiento de Construcción",
        ],
        correctIndex: 2,
      },
      {
        id: "es-04",
        question: "¿Qué significa NPDES?",
        options: [
          "Norma de Permisos para Descargas y Estándares Ambientales",
          "Sistema Nacional de Permisos para Desagüe y Seguridad",
          "National Pollutant Discharge Elimination System",
          "Programa Nacional para Drenaje y Seguridad Ambiental",
        ],
        correctIndex: 2,
      },
      {
        id: "es-05",
        question: "¿Qué agencia administra el programa de permisos CDPS de Colorado?",
        options: [
          "EPA Región 8",
          "Departamento de Transporte de Colorado (CDOT)",
          "División de Recursos Hídricos de Colorado",
          "CDPHE — el departamento de salud del estado",
        ],
        correctIndex: 3,
      },
      {
        id: "es-06",
        question: "¿Qué evento histórico llevó directamente a la aprobación de la Ley de Agua Limpia?",
        options: [
          "El desastre químico de Love Canal",
          "El derrame de petróleo de Deepwater Horizon",
          "El incendio del río Cuyahoga",
          "El accidente nuclear de Three Mile Island",
        ],
        correctIndex: 2,
      },
      {
        id: "es-07",
        question: "¿En qué año se aprobó la Ley de Agua Limpia?",
        options: ["1948", "1965", "1987", "1972"],
        correctIndex: 3,
      },
      {
        id: "es-08",
        question: "¿Cuántos acres de perturbación de terreno requieren cobertura de permiso NPDES?",
        options: ["5 acres o más", "2 acres o más", "1 acre o más", "10 acres o más"],
        correctIndex: 2,
      },
      {
        id: "es-09",
        question: "¿Con qué frecuencia se deben realizar inspecciones bajo el permiso CDPS?",
        options: ["Cada 7 días", "Cada 21 días", "Cada 30 días", "Cada 14 días"],
        correctIndex: 3,
      },
      {
        id: "es-10",
        question: "¿Cuál es la multa máxima por día por violación que puede emitir CDPHE?",
        options: ["$5,000", "$10,000", "$50,000", "$25,000"],
        correctIndex: 3,
      },
      {
        id: "es-11",
        question: "¿Qué significa NOI en el contexto de los permisos de agua de lluvia?",
        options: [
          "Notificación de Inspección",
          "Índice Nacional de Operaciones",
          "Notice of Intent (Aviso de Intención)",
          "Notificación de Infracción",
        ],
        correctIndex: 2,
      },
      {
        id: "es-12",
        question: "¿Cuál de los siguientes inspectores puede emitir una orden de paro de obra directamente en el sitio?",
        options: [
          "Solo inspectores federales de la EPA",
          "Solo inspectores estatales de CDPHE",
          "Solo el contratista general del proyecto",
          "Inspectores MS4 locales (ciudad/condado)",
        ],
        correctIndex: 3,
      },
    ],
  },

  // ── MODULE 01 — EN ────────────────────────────────────────────────────────
  {
    moduleId: "01-en",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "03-en-01",
        question: "What is the difference between erosion and sediment?",
        options: [
          "They are the same thing — both refer to soil washing off a site",
          "Erosion is the process of soil moving; sediment is the result — soil that already moved",
          "Erosion is the dirt on the street; sediment is the process of it getting there",
          "Erosion only happens on steep slopes; sediment only happens near water",
        ],
        correctIndex: 1,
      },
      {
        id: "03-en-02",
        question: "What is erosion?",
        options: [
          "Soil particles that have settled in a storm drain or creek",
          "The mud left on a road after a rainstorm",
          "The process of wind and water picking up and carrying soil away",
          "A chemical pollutant leaving a construction site",
        ],
        correctIndex: 2,
      },
      {
        id: "03-en-03",
        question: "What is sediment?",
        options: [
          "The process of water carrying soil downhill",
          "A type of BMP used on steep slopes",
          "A stormwater permit issued by CDPHE",
          "Soil that has been eroded and deposited somewhere it doesn't belong",
        ],
        correctIndex: 3,
      },
      {
        id: "03-en-04",
        question: "What is the job of an erosion control BMP?",
        options: [
          "Catch soil that is already moving and keep it on site",
          "Keep soil from moving in the first place",
          "Treat stormwater before it leaves the site",
          "Mark the site boundary for CDPHE inspectors",
        ],
        correctIndex: 1,
      },
      {
        id: "03-en-05",
        question: "Which of the following is an example of an erosion control BMP?",
        options: [
          "Silt fence",
          "Straw wattles",
          "Inlet protection",
          "Erosion control blanket (ECB)",
        ],
        correctIndex: 3,
      },
      {
        id: "03-en-06",
        question: "Which of the following is an example of a sediment control BMP?",
        options: [
          "Erosion control blanket (ECB)",
          "Hydraulic mulch (hydromulch)",
          "Silt fence",
          "Hydroseeding",
        ],
        correctIndex: 2,
      },
      {
        id: "03-en-07",
        question: "Besides soil, what other pollutants can leave a construction site in runoff?",
        options: [
          "Only dust — liquid pollutants sink into the ground",
          "Nothing — CDPS permits only regulate sediment",
          "Hydraulic oil, diesel, and gas from equipment",
          "Only materials stored in a concrete washout area",
        ],
        correctIndex: 2,
      },
      {
        id: "03-en-08",
        question: "According to the training, what is the best strategy for managing sediment on a construction site?",
        options: [
          "Install sediment control BMPs and remove them before inspections",
          "Stop erosion at the source — then use sediment control BMPs as a backup",
          "Focus only on sediment control since erosion control is the owner's responsibility",
          "Wait for a rain event, then install BMPs where runoff is visible",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ── MODULE 01 — ES ────────────────────────────────────────────────────────
  {
    moduleId: "01-es",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "03-es-01",
        question: "¿Cuál es la diferencia entre erosión y sedimento?",
        options: [
          "Son lo mismo — ambos se refieren a tierra que se lava de una obra",
          "La erosión es la tierra en la calle; el sedimento es el proceso de cómo llegó ahí",
          "La erosión solo ocurre en pendientes; el sedimento solo ocurre cerca del agua",
          "La erosión es el proceso de la tierra moviéndose; el sedimento es el resultado — tierra que ya se movió",
        ],
        correctIndex: 3,
      },
      {
        id: "03-es-02",
        question: "¿Qué es la erosión?",
        options: [
          "Partículas de tierra que se asentaron en una alcantarilla o arroyo",
          "El proceso en que el viento y el agua levantan y arrastran la tierra",
          "El lodo que queda en la calle después de una lluvia",
          "Un contaminante químico que sale de una obra de construcción",
        ],
        correctIndex: 1,
      },
      {
        id: "03-es-03",
        question: "¿Qué es el sedimento?",
        options: [
          "El proceso del agua llevando tierra cuesta abajo",
          "Un tipo de BMP usado en pendientes pronunciadas",
          "Tierra que fue erosionada y depositada donde no debe estar",
          "Un permiso de aguas pluviales emitido por CDPHE",
        ],
        correctIndex: 2,
      },
      {
        id: "03-es-04",
        question: "¿Cuál es la función de un BMP de control de erosión?",
        options: [
          "Atrapar la tierra que ya se está moviendo y mantenerla en el sitio",
          "Evitar que la tierra se mueva desde un principio",
          "Tratar el agua de lluvia antes de que salga del sitio",
          "Marcar el límite del sitio para los inspectores de CDPHE",
        ],
        correctIndex: 1,
      },
      {
        id: "03-es-05",
        question: "¿Cuál de los siguientes es un ejemplo de BMP de control de erosión?",
        options: [
          "Cerca de limo (silt fence)",
          "Rollos de paja (wattles)",
          "Manta de control de erosión (ECB)",
          "Protección de alcantarillas",
        ],
        correctIndex: 2,
      },
      {
        id: "03-es-06",
        question: "¿Cuál de los siguientes es un ejemplo de BMP de control de sedimento?",
        options: [
          "Manta de control de erosión (ECB)",
          "Mulch hidráulico (hydromulch)",
          "Hidrosiembra",
          "Cerca de limo (silt fence)",
        ],
        correctIndex: 3,
      },
      {
        id: "03-es-07",
        question: "Además de la tierra, ¿qué otros contaminantes pueden salir de una obra con el agua de lluvia?",
        options: [
          "Solo polvo — los contaminantes líquidos se absorben en el suelo",
          "Nada — los permisos CDPS solo regulan el sedimento",
          "Solo materiales almacenados en el área de lavado de concreto",
          "Aceite hidráulico, diesel y gasolina de la maquinaria",
        ],
        correctIndex: 3,
      },
      {
        id: "03-es-08",
        question: "Según la capacitación, ¿cuál es la mejor estrategia para manejar el sedimento en una obra?",
        options: [
          "Instalar BMPs de sedimento y quitarlos antes de las inspecciones",
          "Esperar una lluvia y luego instalar BMPs donde se vea el escurrimiento",
          "Detener la erosión en el origen — y usar BMPs de sedimento como respaldo",
          "Enfocarse solo en el sedimento porque el control de erosión es responsabilidad del dueño",
        ],
        correctIndex: 2,
      },
    ],
  },

  // ── MODULE 02 — SILT FENCE — EN ──────────────────────────────────────────
  {
    moduleId: "02-en",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "sf-en-01",
        question: "What does silt fence actually do?",
        options: [
          "Stops soil from moving in the first place",
          "Catches soil that's already moving and lets water pond so sediment drops out",
          "Treats polluted water chemically before it leaves the site",
          "Replaces the need for a SWPPP",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-02",
        question: "Under the standard spec (most municipalities), what is the minimum trench size for silt fence?",
        options: [
          "6 inches deep x 4 inches wide",
          "10 inches deep x 4 inches wide",
          "4 inches deep x 6 inches wide",
          "12 inches deep x 6 inches wide",
        ],
        correctIndex: 0,
      },
      {
        id: "sf-en-03",
        question: "On a Parker Spec job, how deep must the trench be, and what extra material is required?",
        options: [
          "6 inches deep, no extra material",
          "10 inches deep, with lath stapled to the uphill side of the fabric",
          "8 inches deep, with wire mesh backing",
          "10 inches deep, with a second layer of fabric",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-04",
        question: "What is DTEC's stake spacing standard, and how does it compare to most specs?",
        options: [
          "10 feet — the same as most specs",
          "8 feet — tighter than the 10 feet most specs allow",
          "12 feet — looser than most specs",
          "6 feet — DTEC doesn't follow a fixed spacing",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-05",
        question: "What are the three methods DTEC uses to install silt fence?",
        options: [
          "Hand trench, Trencher (skid / walk-behind), Tommy attachment",
          "Hand trench, Excavator, Silt sock",
          "Trencher, Hydroseeder, Rock check dam",
          "Tommy attachment, Wattle roller, Hand trench",
        ],
        correctIndex: 0,
      },
      {
        id: "sf-en-06",
        question: "What is the DTEC staple pattern, and why does it matter?",
        options: [
          "2 staples straight across — it's the fastest method",
          "4–5 staples on a diagonal across the fabric threads — if the top stays attached, all of it stays attached",
          "1 staple per stake — enough to hold posts, not fabric",
          "Staples aren't used; zip ties are the DTEC standard",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-07",
        question: "On the Tommy attachment method, what should you do if the ground is too hard, compacted, or rocky?",
        options: [
          "Switch immediately to a hand trench",
          "Run the Tommy through without fabric first to loosen the line, then make the install pass",
          "Add extra stakes to compensate",
          "Skip that section and note it in the SWPPP",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-08",
        question: "What does the red seam on Talon TSF-GA-C fabric tell you?",
        options: [
          "It marks where the fabric was manufactured",
          "It's a factory seam at 12\" and 24\" from the bottom that shows burial depth — near the ground means buried right, riding high means the trench is too shallow",
          "It shows where to place staples",
          "It indicates the fabric has a manufacturing defect",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-09",
        question: "Which side does the fabric go on, and which side do the stakes go on?",
        options: [
          "Fabric downhill, stakes uphill",
          "Fabric uphill, stakes downhill — the stake takes the load",
          "It doesn't matter as long as they're touching",
          "Both go on the downhill side",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-10",
        question: "What's the purpose of a J-hook at the end of a silt fence run?",
        options: [
          "It marks the end of the run for inspectors",
          "It turns the last 10–20 ft upslope so runoff can't sneak around the open end",
          "It anchors the roll of extra fabric",
          "It connects two rolls of fabric together",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-11",
        question: "How should silt fence joints be finished?",
        options: [
          "Overlapped loosely so they can be adjusted later",
          "Both end stakes wrapped together, rotated, and driven so the fabric overlaps with zero gaps",
          "Taped together with waterproof tape",
          "Left with a small gap for drainage",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-en-12",
        question: "According to \"The Final Walk\" checklist, what should happen before you load up and leave the site?",
        options: [
          "Just confirm the stakes are still standing",
          "Photos on the work order, plus a full check of trench, fabric tension, joints, J-hooks, and the red seam line",
          "Nothing — the crew lead checks it the next morning",
          "Only check for rips or holes",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ── MODULE 02 — SILT FENCE — ES ──────────────────────────────────────────
  {
    moduleId: "02-es",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "sf-es-01",
        question: "¿Qué hace realmente el silt fence (cerca de sedimento)?",
        options: [
          "Evita que la tierra se mueva desde el principio",
          "Atrapa la tierra que ya se está moviendo y deja que el agua se encharque para que el sedimento se asiente",
          "Trata químicamente el agua contaminada antes de que salga del sitio",
          "Reemplaza la necesidad de un SWPPP",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-02",
        question: "Bajo la especificación estándar (la mayoría de los municipios), ¿cuál es el tamaño mínimo de la zanja para silt fence?",
        options: [
          "6 pulgadas de profundidad x 4 pulgadas de ancho",
          "10 pulgadas de profundidad x 4 pulgadas de ancho",
          "4 pulgadas de profundidad x 6 pulgadas de ancho",
          "12 pulgadas de profundidad x 6 pulgadas de ancho",
        ],
        correctIndex: 0,
      },
      {
        id: "sf-es-03",
        question: "En un trabajo con Parker Spec, ¿qué tan profunda debe ser la zanja y qué material extra se requiere?",
        options: [
          "6 pulgadas de profundidad, sin material extra",
          "10 pulgadas de profundidad, con lath engrapado al lado de arriba (pendiente arriba) de la tela",
          "8 pulgadas de profundidad, con malla de alambre",
          "10 pulgadas de profundidad, con una segunda capa de tela",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-04",
        question: "¿Cuál es el estándar de espaciado de estacas de DTEC, y cómo se compara con la mayoría de las especificaciones?",
        options: [
          "10 pies — igual que la mayoría de las especificaciones",
          "8 pies — más cerrado que los 10 pies que permiten la mayoría de las especificaciones",
          "12 pies — más abierto que la mayoría",
          "6 pies — DTEC no sigue un espaciado fijo",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-05",
        question: "¿Cuáles son los tres métodos que usa DTEC para instalar silt fence?",
        options: [
          "Zanja a mano, Máquina trinchera (skid / caminando), Aditamento Tommy",
          "Zanja a mano, Excavadora, Silt sock",
          "Máquina trinchera, Hidrosembradora, Presa de roca",
          "Aditamento Tommy, Rodillo de wattle, Zanja a mano",
        ],
        correctIndex: 0,
      },
      {
        id: "sf-es-06",
        question: "¿Cuál es el patrón de grapado de DTEC, y por qué importa?",
        options: [
          "2 grapas en línea recta — es el método más rápido",
          "4–5 grapas en diagonal cruzando los hilos de la tela — si la parte de arriba queda sujeta, toda la tela queda sujeta",
          "1 grapa por estaca — suficiente para sujetar los postes, no la tela",
          "No se usan grapas; los amarres de plástico son el estándar de DTEC",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-07",
        question: "En el método del aditamento Tommy, ¿qué debes hacer si el suelo está muy duro, compactado o rocoso?",
        options: [
          "Cambiar de inmediato a zanja a mano",
          "Pasar el Tommy sin tela primero para aflojar la línea, y luego hacer la pasada de instalación",
          "Agregar estacas extra para compensar",
          "Saltar esa sección y anotarlo en el SWPPP",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-08",
        question: "¿Qué te indica la costura roja en la tela Talon TSF-GA-C?",
        options: [
          "Marca dónde se fabricó la tela",
          "Es una costura de fábrica a 12\" y 24\" desde abajo que muestra la profundidad de enterrado — cerca del suelo significa bien enterrada, alta significa que la zanja quedó muy baja",
          "Muestra dónde poner las grapas",
          "Indica que la tela tiene un defecto de fabricación",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-09",
        question: "¿De qué lado va la tela y de qué lado van las estacas?",
        options: [
          "Tela pendiente abajo, estacas pendiente arriba",
          "Tela pendiente arriba, estacas pendiente abajo — la estaca carga el peso",
          "No importa mientras se toquen",
          "Ambas van del lado de abajo",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-10",
        question: "¿Para qué sirve el J-hook al final de una línea de silt fence?",
        options: [
          "Marca el final de la línea para los inspectores",
          "Gira los últimos 10–20 pies pendiente arriba para que el agua no se escape por el extremo abierto",
          "Ancla el rollo de tela sobrante",
          "Conecta dos rollos de tela entre sí",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-11",
        question: "¿Cómo se deben terminar las uniones (joints) del silt fence?",
        options: [
          "Superpuestas sin apretar para poder ajustarlas después",
          "Ambas estacas del extremo envueltas juntas, rotadas, y clavadas para que la tela se superponga sin espacios",
          "Pegadas con cinta impermeable",
          "Dejadas con un pequeño espacio para drenaje",
        ],
        correctIndex: 1,
      },
      {
        id: "sf-es-12",
        question: "Según la lista de \"La Caminata Final\", ¿qué debe pasar antes de cargar el equipo e irte del sitio?",
        options: [
          "Solo confirmar que las estacas siguen paradas",
          "Fotos en la orden de trabajo, más una revisión completa de la zanja, tensión de la tela, uniones, J-hooks y la línea de costura roja",
          "Nada — el líder de cuadrilla lo revisa la mañana siguiente",
          "Solo revisar que no haya rasgaduras o agujeros",
        ],
        correctIndex: 1,
      },
    ],
  },

  // ── FIELD OPS — READING BMP DRAWINGS — EN ────────────────────────────────
  {
    moduleId: "field-bmp-en",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "bmp-en-01",
        question: "Which of these is NOT one of the six things to find on a cover sheet?",
        options: ["Project name & address", "Vicinity map", "Sheet list table", "Weather forecast for the site"],
        correctIndex: 3,
      },
      {
        id: "bmp-en-02",
        question: "Where is the sheet number located on every page?",
        options: ["Top-left corner", "Bottom-right corner of the title block", "Center of the page", "It varies by engineer"],
        correctIndex: 1,
      },
      {
        id: "bmp-en-03",
        question: "What should you do first when orienting yourself on a plan?",
        options: ["Read the legend", "Match your position to the plan's North arrow", "Find the scale", "Call the project manager"],
        correctIndex: 1,
      },
      {
        id: "bmp-en-04",
        question: "Why is the vicinity map often your only way to find a project location?",
        options: [
          "Most projects don't have a set address yet",
          "GPS doesn't work on construction sites",
          "The cover sheet doesn't include an address",
          "Vicinity maps replace the need for a sheet index",
        ],
        correctIndex: 0,
      },
      {
        id: "bmp-en-05",
        question: "Besides \"Stormwater,\" what other words should you look for in sheet titles when finding your section?",
        options: ["\"BMP\" or \"Erosion Control\"", "\"Grading\" or \"Utility\"", "\"Landscape\" or \"Irrigation\"", "\"Survey\" or \"Topo\""],
        correctIndex: 0,
      },
      {
        id: "bmp-en-06",
        question: "True or False: Symbols in a BMP legend are standardized and identical across every engineer's plan set.",
        options: ["True", "False"],
        correctIndex: 1,
      },
      {
        id: "bmp-en-07",
        question: "What does LOC stand for?",
        options: ["Limits of Construction", "Location of Contractor", "Line of Control", "Limits of Compliance"],
        correctIndex: 0,
      },
      {
        id: "bmp-en-08",
        question: "What does LOD mark?",
        options: ["The exact center of the project", "The outer edge of any possible disturbance", "The location of the dumpster", "The distance to the nearest fire hydrant"],
        correctIndex: 1,
      },
      {
        id: "bmp-en-09",
        question: "If the scale is 1\" = 40' and you measure 2 inches on the plan, what is the real-world distance?",
        options: ["40 feet", "80 feet", "120 feet", "20 feet"],
        correctIndex: 1,
      },
      {
        id: "bmp-en-10",
        question: "In the Perimeter Controls example, what runs together along the Limits of Construction?",
        options: ["Construction Fence and Silt Fence", "Rock Socks and VTC pads", "Concrete Washout Area and Stockpile", "ECB and Silt Fence"],
        correctIndex: 0,
      },
      {
        id: "bmp-en-11",
        question: "In the Access & Washout Controls example, where does the Concrete Washout Area sit?",
        options: ["South of each VTC pad", "North of each VTC pad", "Inside the LOD only", "Along the west perimeter"],
        correctIndex: 1,
      },
      {
        id: "bmp-en-12",
        question: "Why does ECB go down before seeding?",
        options: [
          "It protects the seed bed as much as the soil underneath",
          "It's required only on slopes steeper than 3:1",
          "It replaces the need for silt fence",
          "It's applied after vegetation is established",
        ],
        correctIndex: 0,
      },
    ],
  },

  // ── FIELD OPS — READING BMP DRAWINGS — ES ────────────────────────────────
  {
    moduleId: "field-bmp-es",
    passingScore: 0.8,
    questionsPerSession: 6,
    questions: [
      {
        id: "bmp-es-01",
        question: "¿Cuál de estas NO es una de las seis cosas que buscar en la hoja de portada?",
        options: ["Nombre y dirección del proyecto", "Mapa de ubicación", "Tabla de hojas", "Pronóstico del clima del sitio"],
        correctIndex: 3,
      },
      {
        id: "bmp-es-02",
        question: "¿Dónde está el número de hoja en cada página?",
        options: ["Arriba a la izquierda", "Abajo a la derecha del bloque de título", "En el centro de la página", "Varía según el ingeniero"],
        correctIndex: 1,
      },
      {
        id: "bmp-es-03",
        question: "¿Qué debes hacer primero para orientarte en un plano?",
        options: ["Leer la leyenda", "Ajustar tu posición con la flecha del norte del plano", "Buscar la escala", "Llamar al gerente del proyecto"],
        correctIndex: 1,
      },
      {
        id: "bmp-es-04",
        question: "¿Por qué el mapa de ubicación suele ser tu única forma de encontrar un proyecto?",
        options: [
          "Muchos proyectos todavía no tienen dirección",
          "El GPS no funciona en sitios de construcción",
          "La hoja de portada no incluye dirección",
          "El mapa de ubicación reemplaza la tabla de hojas",
        ],
        correctIndex: 0,
      },
      {
        id: "bmp-es-05",
        question: "Además de \"Stormwater,\" ¿qué otras palabras debes buscar en los títulos de las hojas?",
        options: ["\"BMP\" o \"Erosion Control\"", "\"Grading\" o \"Utility\"", "\"Landscape\" o \"Irrigation\"", "\"Survey\" o \"Topo\""],
        correctIndex: 0,
      },
      {
        id: "bmp-es-06",
        question: "Verdadero o falso: los símbolos de una leyenda de BMP son estándar e idénticos en el plano de cualquier ingeniero.",
        options: ["Verdadero", "Falso"],
        correctIndex: 1,
      },
      {
        id: "bmp-es-07",
        question: "¿Qué significa LOC?",
        options: ["Limits of Construction (Límites de Construcción)", "Ubicación del Contratista", "Línea de Control", "Límites de Cumplimiento"],
        correctIndex: 0,
      },
      {
        id: "bmp-es-08",
        question: "¿Qué marca el LOD?",
        options: ["El centro exacto del proyecto", "El borde exterior de cualquier alteración posible", "La ubicación del contenedor de basura", "La distancia al hidrante más cercano"],
        correctIndex: 1,
      },
      {
        id: "bmp-es-09",
        question: "Si la escala es 1\" = 40' y mides 2 pulgadas en el plano, ¿cuál es la distancia real?",
        options: ["40 pies", "80 pies", "120 pies", "20 pies"],
        correctIndex: 1,
      },
      {
        id: "bmp-es-10",
        question: "En el ejemplo de Controles de Perímetro, ¿qué va junto por los Limits of Construction?",
        options: ["La CF y la SF", "Los RS y los VTC", "El CWA y el Stock Pile", "El ECB y la SF"],
        correctIndex: 0,
      },
      {
        id: "bmp-es-11",
        question: "En el ejemplo de Controles de Acceso y Lavado, ¿dónde queda el CWA?",
        options: ["Al sur de cada VTC", "Al norte de cada VTC", "Solo dentro del LOD", "Por el perímetro oeste"],
        correctIndex: 1,
      },
      {
        id: "bmp-es-12",
        question: "¿Por qué se coloca el ECB antes de la siembra?",
        options: [
          "Protege la cama de semilla igual que al suelo de abajo",
          "Solo se requiere en taludes más pronunciados que 3:1",
          "Reemplaza la necesidad de silt fence",
          "Se aplica después de que la vegetación esté establecida",
        ],
        correctIndex: 0,
      },
    ],
  },
];

export function getQuizBank(moduleId: string): QuizBank | undefined {
  return quizBanks.find((q) => q.moduleId === moduleId);
}
