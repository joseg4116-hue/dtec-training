"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getQuizBank, QuizQuestion } from "@/data/quiz";
import { modules } from "@/data/modules";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, XCircle, Home, RotateCcw, BookOpen, UserCircle } from "lucide-react";

const C = {
  charcoal:    "#2D2926",
  darkBox:     "#3A3530",
  darkOverlay: "#2A2520",
  yellow:      "#C9B10A",
  lightGray:   "#EBEBEB",
  white:       "#FFFFFF",
  textDark:    "#1E1B18",
  textMuted:   "#5A5550",
  textLight:   "#FFFFFF",
  textSubtle:  "#B8B0A8",
};

const F = {
  heading: "Georgia, 'Times New Roman', serif",
  body:    "Calibri, 'Trebuchet MS', Arial, sans-serif",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type SessionQuestion = {
  original: QuizQuestion;
  shuffledOptions: string[];
  correctShuffledIndex: number;
};

function buildSession(questions: QuizQuestion[], count: number): SessionQuestion[] {
  return shuffle(questions).slice(0, count).map((q) => {
    const indexed = q.options.map((opt, i) => ({ opt, correct: i === q.correctIndex }));
    const shuffled = shuffle(indexed);
    return {
      original: q,
      shuffledOptions: shuffled.map((x) => x.opt),
      correctShuffledIndex: shuffled.findIndex((x) => x.correct),
    };
  });
}

export default function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const bank = getQuizBank(id);
  const module = modules.find((m) => m.id === id);

  const [phase, setPhase] = useState<"name" | "quiz" | "result">("name");
  const [nameInput, setNameInput] = useState("");
  const [takerName, setTakerName] = useState("");
  const [session, setSession] = useState<SessionQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const isES = id.endsWith("-es");
  const t = {
    title:        isES ? "Examen" : "Quiz",
    nameLabel:    isES ? "Tu nombre completo" : "Your full name",
    namePlaceholder: isES ? "Escribe tu nombre..." : "Enter your name...",
    startQuiz:    isES ? "Comenzar Examen" : "Start Quiz",
    nameRequired: isES ? "Por favor escribe tu nombre para continuar." : "Please enter your name to continue.",
    about:        isES ? "Este examen tiene 6 preguntas. Necesitas 80% para aprobar." : "This quiz has 6 questions. You need 80% to pass.",
    question:     isES ? "Pregunta" : "Question",
    of:           isES ? "de" : "of",
    next:         isES ? "Siguiente" : "Next",
    finish:       isES ? "Ver Resultados" : "See Results",
    passed:       isES ? "¡Aprobado!" : "Passed!",
    failed:       isES ? "No Aprobado" : "Not Passed",
    score:        isES ? "Tu puntaje" : "Your score",
    passingIs:    isES ? "Mínimo para aprobar: 80%" : "Passing score: 80%",
    retake:       isES ? "Volver a Intentar" : "Retake Quiz",
    backLesson:   isES ? "Volver a la Lección" : "Back to Lesson",
    home:         isES ? "Inicio" : "Home",
    noQuiz:       isES ? "No hay examen disponible." : "No quiz available for this module.",
    great:        isES ? "¡Buen trabajo," : "Great work,",
    tryAgain:     isES ? "Sigue practicando," : "Keep studying,",
  };

  const startSession = (name: string) => {
    if (!bank) return;
    setTakerName(name);
    setSession(buildSession(bank.questions, bank.questionsPerSession));
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setPhase("quiz");
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = nameInput.trim();
    if (!trimmed) return;
    startSession(trimmed);
  };

  const handleRetake = () => {
    setNameInput("");
    setPhase("name");
  };

  if (!bank || !module) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: C.lightGray }}>
        <p style={{ color: C.textMuted, fontFamily: F.body }}>{t.noQuiz}</p>
      </div>
    );
  }

  const total = bank.questionsPerSession;
  const score = answers.filter(Boolean).length;
  const passed = score / total >= bank.passingScore;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
  };

  const handleNext = () => {
    if (selected === null) return;
    const q = session[current];
    const correct = selected === q.correctShuffledIndex;
    const newAnswers = [...answers, correct];
    setAnswers(newAnswers);

    if (current + 1 >= total) {
      const finalScore = newAnswers.filter(Boolean).length;
      const finalPassed = finalScore / total >= bank.passingScore;
      // Save result to Supabase
      fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: takerName,
          module_id: id,
          lang: isES ? "es" : "en",
          score: finalScore,
          total,
          passed: finalPassed,
        }),
      }).catch(() => {}); // fire-and-forget; don't block UI
      setPhase("result");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  // ── Name screen ──────────────────────────────────────────────────────────
  if (phase === "name") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: C.darkOverlay }}>
        <header className="flex items-center justify-between px-5 py-3" style={{ background: C.charcoal }}>
          <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
            <Home size={15} /> {t.home}
          </Link>
          <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32} className="object-contain" style={{ filter: "invert(1)", opacity: 0.7 }} />
          <div className="w-16" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl" style={{ background: C.darkBox }}>
            <div className="px-8 py-6 text-center" style={{ borderBottom: `3px solid ${C.yellow}` }}>
              <UserCircle className="mx-auto mb-3" size={48} style={{ color: C.yellow }} />
              <h2 className="text-xl font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>
                {t.title}
              </h2>
              <p className="text-sm mt-2" style={{ color: C.textSubtle, fontFamily: F.body }}>
                {t.about}
              </p>
            </div>

            <form onSubmit={handleNameSubmit} className="px-8 py-6 space-y-4">
              <div>
                <label className="block text-xs font-bold mb-2 tracking-widest" style={{ color: C.yellow, fontFamily: F.body }}>
                  {t.nameLabel.toUpperCase()}
                </label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder={t.namePlaceholder}
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                  style={{ background: C.darkOverlay, color: C.textLight, fontFamily: F.body }}
                />
              </div>
              <button
                type="submit"
                disabled={!nameInput.trim()}
                className="w-full py-3 rounded-xl font-medium text-sm transition-opacity disabled:opacity-30"
                style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}
              >
                {t.startQuiz}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ── Result screen ────────────────────────────────────────────────────────
  if (phase === "result") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: C.darkOverlay }}>
        <header className="flex items-center justify-between px-5 py-3" style={{ background: C.charcoal }}>
          <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
            <Home size={15} /> {t.home}
          </Link>
          <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32} className="object-contain" style={{ filter: "invert(1)", opacity: 0.7 }} />
          <div className="w-16" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl" style={{ background: C.darkBox }}>
            {/* Score banner */}
            <div className="px-8 py-6 text-center" style={{ background: passed ? "#1a3a1a" : "#3a1a1a", borderBottom: `3px solid ${C.yellow}` }}>
              {passed
                ? <CheckCircle className="mx-auto mb-3" size={48} style={{ color: C.yellow }} />
                : <XCircle className="mx-auto mb-3" size={48} color="#e05050" />}
              <p className="text-sm mb-1" style={{ color: C.textSubtle, fontFamily: F.body }}>
                {passed ? t.great : t.tryAgain} <span style={{ color: C.textLight }}>{takerName}</span>
              </p>
              <h2 className="text-2xl font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>
                {passed ? t.passed : t.failed}
              </h2>
              <p className="text-4xl font-bold mt-2" style={{ color: C.yellow, fontFamily: F.heading }}>
                {score} / {total}
              </p>
              <p className="text-sm mt-1" style={{ color: C.textSubtle, fontFamily: F.body }}>
                {t.score}: {Math.round((score / total) * 100)}% — {t.passingIs}
              </p>
            </div>

            {/* Per-question breakdown */}
            <div className="px-6 py-5 space-y-2">
              {session.map((sq, i) => (
                <div key={i} className="flex items-center gap-3">
                  {answers[i]
                    ? <CheckCircle size={16} style={{ color: C.yellow }} className="shrink-0" />
                    : <XCircle size={16} color="#e05050" className="shrink-0" />}
                  <p className="text-xs leading-snug" style={{ color: C.textSubtle, fontFamily: F.body }}>
                    {sq.original.question}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="px-6 pb-6 flex flex-col gap-3">
              <button onClick={handleRetake}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm"
                style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}>
                <RotateCcw size={16} /> {t.retake}
              </button>
              <Link href={`/modules/${id}/lesson`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm border"
                style={{ borderColor: C.textSubtle, color: C.textLight, fontFamily: F.body }}>
                <BookOpen size={16} /> {t.backLesson}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz screen ──────────────────────────────────────────────────────────
  const q = session[current];
  if (!q) return null;

  const progress = (current / total) * 100;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: C.darkOverlay }}>
      <header className="flex items-center justify-between px-5 py-3" style={{ background: C.charcoal }}>
        <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
          <Home size={15} /> {t.home}
        </Link>
        <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32} className="object-contain" style={{ filter: "invert(1)", opacity: 0.7 }} />
        <span className="text-xs" style={{ color: C.textSubtle, fontFamily: F.body }}>
          {t.question} {current + 1} {t.of} {total}
        </span>
      </header>

      <div className="h-1" style={{ background: C.darkBox }}>
        <div className="h-full transition-all duration-300" style={{ width: `${progress}%`, background: C.yellow }} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5 py-8">
        <div className="w-full max-w-lg">
          <div className="rounded-2xl p-6 mb-5 shadow-lg" style={{ background: C.darkBox }}>
            <p className="text-xs font-bold mb-3 tracking-widest" style={{ color: C.yellow, fontFamily: F.body }}>
              {t.question.toUpperCase()} {current + 1}
            </p>
            <p className="text-base md:text-lg font-medium leading-snug" style={{ color: C.textLight, fontFamily: F.heading }}>
              {q.original.question}
            </p>
          </div>

          <div className="space-y-3">
            {q.shuffledOptions.map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect = i === q.correctShuffledIndex;
              const revealed = selected !== null;

              let bg = C.darkBox;
              let border = "transparent";
              let textColor = C.textSubtle;

              if (revealed && isCorrect) { bg = "#1a3a1a"; border = C.yellow; textColor = C.textLight; }
              else if (revealed && isSelected && !isCorrect) { bg = "#3a1a1a"; border = "#e05050"; textColor = C.textLight; }
              else if (isSelected) { border = C.yellow; textColor = C.textLight; }

              return (
                <button key={i} onClick={() => handleSelect(i)}
                  className="w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all text-sm"
                  style={{ background: bg, borderColor: border, color: textColor, fontFamily: F.body }}>
                  <span className="font-bold mr-3" style={{ color: C.yellow }}>
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            disabled={selected === null}
            className="w-full mt-6 py-3 rounded-xl font-medium text-sm transition-opacity disabled:opacity-30"
            style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}>
            {current + 1 === total ? t.finish : t.next}
          </button>
        </div>
      </div>
    </div>
  );
}
