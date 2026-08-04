import { ChevronDown } from "lucide-react";
import { HandbookSection } from "@/data/handbook";
import { Highlighted } from "./Highlighted";
import { C, serif } from "./theme";

export function PolicyItem({
  section,
  query,
  open,
  onToggle,
}: {
  section: HandbookSection;
  query: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: C.textLight, border: "1px solid #E4E2DE" }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left active:bg-black/5"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          {section.num && (
            <span
              className="shrink-0 text-[11px] font-bold px-1.5 py-0.5 rounded"
              style={{ background: C.lightGray, color: C.textMuted, fontFamily: serif }}
            >
              {section.num}
            </span>
          )}
          <span className="font-semibold text-[15px] leading-snug" style={{ color: C.textDark, fontFamily: serif }}>
            <Highlighted text={section.title} query={query} />
          </span>
        </div>
        <ChevronDown
          size={16}
          className="shrink-0 transition-transform duration-200"
          style={{ color: C.textMuted, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3" style={{ borderTop: "1px solid #EFEDEA" }}>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-[14px] leading-[1.6] pt-3 first:pt-4" style={{ color: C.textDark }}>
              <Highlighted text={p} query={query} />
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
