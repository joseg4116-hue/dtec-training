import { ChevronDown } from "lucide-react";
import { HandbookSection } from "@/data/handbook";
import { PolicyItem } from "./PolicyItem";
import { C, serif } from "./theme";

export function CategorySection({
  label,
  sections,
  query,
  open,
  onToggleCategory,
  openPolicies,
  onTogglePolicy,
  forceOpenPolicies,
}: {
  label: string;
  sections: HandbookSection[];
  query: string;
  open: boolean;
  onToggleCategory: () => void;
  openPolicies: Record<string, boolean>;
  onTogglePolicy: (id: string) => void;
  forceOpenPolicies: boolean;
}) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: C.textLight, border: "1px solid #D0CECA" }}>
      <button
        type="button"
        onClick={onToggleCategory}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left active:scale-[0.99] transition-transform duration-150"
        style={{ background: C.charcoal }}
      >
        <span className="font-bold text-[15px]" style={{ color: C.textLight, fontFamily: serif }}>
          {label}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-medium" style={{ color: C.textSubtle }}>
            {sections.length}
          </span>
          <ChevronDown
            size={18}
            className="transition-transform duration-200"
            style={{ color: C.yellow, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>
      </button>

      {open && (
        <div className="p-3 space-y-2" style={{ background: C.lightGray }}>
          {sections.map((s) => (
            <PolicyItem
              key={s.id}
              section={s}
              query={query}
              open={forceOpenPolicies || !!openPolicies[s.id]}
              onToggle={() => onTogglePolicy(s.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
