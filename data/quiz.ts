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
];

export function getQuizBank(moduleId: string): QuizBank | undefined {
  return quizBanks.find((q) => q.moduleId === moduleId);
}
