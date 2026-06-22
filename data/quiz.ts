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
          "Colorado Dept. of Public Health & Environment (CDPHE)",
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
          "Depto. de Salud Pública y Medio Ambiente de Colorado (CDPHE)",
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
];

export function getQuizBank(moduleId: string): QuizBank | undefined {
  return quizBanks.find((q) => q.moduleId === moduleId);
}
