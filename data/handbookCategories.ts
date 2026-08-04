import { Lang } from "@/types/module";

export type HandbookCategory = {
  id: string;
  label: string;
  nums: string[];
};

export const handbookCategories: Record<Lang, HandbookCategory[]> = {
  en: [
    {
      id: "conduct",
      label: "Company & Conduct",
      nums: ["101", "102", "103", "104", "105", "400", "401"],
    },
    {
      id: "employment-basics",
      label: "Employment Basics",
      nums: ["200", "201", "202"],
    },
    {
      id: "pay-timekeeping",
      label: "Pay & Timekeeping",
      nums: ["209.5", "210", "211", "212", "213", "215", "216", "217", "218", "219"],
    },
    {
      id: "benefits-time-off",
      label: "Benefits & Time Off",
      nums: ["203", "204", "205", "206", "207", "208", "209", "214", "500"],
    },
    {
      id: "equipment-vehicles-tech",
      label: "Equipment, Vehicles & Technology",
      nums: ["300", "301", "302", "303", "304"],
    },
    {
      id: "safety-drug-testing",
      label: "Safety & Drug Testing",
      nums: ["501"],
    },
  ],
  es: [
    {
      id: "conduct",
      label: "Empresa y Conducta",
      nums: ["101", "102", "103", "104", "105", "400", "401"],
    },
    {
      id: "employment-basics",
      label: "Fundamentos del Empleo",
      nums: ["200", "201", "202"],
    },
    {
      id: "pay-timekeeping",
      label: "Pago y Registro de Horas",
      nums: ["209.5", "210", "211", "212", "213", "215", "216", "217", "218", "219"],
    },
    {
      id: "benefits-time-off",
      label: "Beneficios y Tiempo Libre",
      nums: ["203", "204", "205", "206", "207", "208", "209", "214", "500"],
    },
    {
      id: "equipment-vehicles-tech",
      label: "Equipos, Vehículos y Tecnología",
      nums: ["300", "301", "302", "303", "304"],
    },
    {
      id: "safety-drug-testing",
      label: "Seguridad y Pruebas de Drogas",
      nums: ["501"],
    },
  ],
};
