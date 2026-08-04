import { ChevronDown, Info } from "lucide-react";
import { Lang } from "@/types/module";
import { HandbookSection } from "@/data/handbook";
import { C, serif } from "./theme";

const LABELS = {
  en: { toggle: "Important Notice & About This Handbook", revised: "Revised" },
  es: { toggle: "Aviso Importante y Sobre este Manual", revised: "Revisado el" },
};

export function DisclaimerNotice({
  lang,
  disclaimer,
  revised,
  introSections,
  open,
  onToggle,
}: {
  lang: Lang;
  disclaimer: string;
  revised: string;
  introSections: HandbookSection[];
  open: boolean;
  onToggle: () => void;
}) {
  const t = LABELS[lang];
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: C.textLight, border: "1px solid #D0CECA" }}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2 min-w-0">
          <Info size={15} className="shrink-0" style={{ color: C.textMuted }} />
          <span className="text-[13px] font-medium truncate" style={{ color: C.textMuted }}>
            {t.toggle}
          </span>
        </div>
        <ChevronDown
          size={15}
          className="shrink-0 transition-transform duration-200"
          style={{ color: C.textMuted, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-4" style={{ borderTop: "1px solid #EFEDEA" }}>
          <div className="pt-3">
            <p className="text-[11px] leading-snug uppercase tracking-wide" style={{ color: C.textMuted }}>
              {disclaimer}
            </p>
            <p className="text-[11px] mt-1.5" style={{ color: C.textMuted }}>
              {t.revised} {revised}
            </p>
          </div>

          {introSections.map((s) => (
            <div key={s.id}>
              <h3 className="text-[13px] font-bold mb-1.5" style={{ color: C.textDark, fontFamily: serif }}>
                {s.title}
              </h3>
              <div className="space-y-2">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-[13px] leading-[1.6]" style={{ color: C.textMuted }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
