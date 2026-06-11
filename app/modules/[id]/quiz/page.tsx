"use client";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getQuizBank, QuizQuestion } from "@/data/quiz";
import { modules } from "@/data/modules";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, XCircle, Home, RotateCcw, BookOpen, Mail } from "lucide-react";

const EMAIL_KEY = "dtec_email";

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
  const bank   = getQuizBank(id);
  const module = modules.find((m) => m.id === id);

  const [email, setEmail]         = useState("");
  const [emailDraft, setEmailDraft] = useState("");
  const [phase, setPhase]         = useState<"loading" | "ready" | "quiz" | "result">("loading");
  const [session, setSession]     = useState<SessionQuestion[]>([]);
  const [current, setCurrent]     = useState(0);
  const [selected, setSelected]   = useState<number | null>(null);
  const [answers, setAnswers]     = useState<boolean[]>([]);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const isES = id.endsWith("-es");
  const t = {
    title:      isES ? "Examen" : "Quiz",
    about:      isES ? "Este examen tiene 6 preguntas. Necesitas 80% para aprobar." : "This quiz has 6 questions. You need 80% to pass.",
    emailLabel: isES ? "Tu correo electrónico" : "Your email",
    emailHint:  isES ? "Para guardar tu progreso" : "To save your progress",
    startQuiz:  isES ? "Comenzar Examen" : "Start Quiz",
    question:   isES ? "Pregunta" : "Question",
    of:         isES ? "de" : "of",
    next:       isES ? "Siguiente" : "Next",
    finish:     isES ? "Ver Resultados" : "See Results",
    passed:     isES ? "¡Aprobado!" : "Passed!",
    failed:     isES ? "No Aprobado" : "Not Passed",
    score:      isES ? "Tu puntaje" : "Your score",
    passingIs:  isES ? "Mínimo para aprobar: 80%" : "Passing score: 80%",
    retake:     isES ? "Volver a Intentar" : "Retake Quiz",
    backLesson: isES ? "Volver a la Lección" : "Back to Lesson",
    home:       isES ? "Inicio" : "Home",
    noQuiz:     isES ? "No hay examen disponible." : "No quiz available for this module.",
    great:      isES ? "¡Buen trabajo," : "Great work,",
    tryAgain:   isES ? "Sigue practicando," : "Keep studying,",
    takenAs:    isES ? "Examen registrado para" : "Quiz recorded for",
  };

  useEffect(() => {
    const saved = localStorage.getItem(EMAIL_KEY) ?? "";
    setEmail(saved);
    setEmailDraft(saved);
    setPhase("ready");
  }, []);

  const startSession = () => {
    if (!bank) return;
    const trimmed = emailDraft.trim().toLowerCase();
    if (!trimmed) {
      emailInputRef.current?.focus();
      return;
    }
    localStorage.setItem(EMAIL_KEY, trimmed);
    setEmail(trimmed);
    setSession(buildSession(bank.questions, bank.questionsPerSession));
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setPhase("quiz");
  };

  if (!bank || !module) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: C.lightGray }}>
        <p style={{ color: C.textMuted, fontFamily: F.body }}>{t.noQuiz}</p>
      </div>
    );
  }

  const total  = bank.questionsPerSession;
  const score  = answers.filter(Boolean).length;
  const passed = score / total >= bank.passingScore;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
  };

  const handleNext = () => {
    if (selected === null) return;
    const q = session[current];
    const correct     = selected === q.correctShuffledIndex;
    const newAnswers  = [...answers, correct];
    setAnswers(newAnswers);

    if (current + 1 >= total) {
      const finalScore  = newAnswers.filter(Boolean).length;
      const finalPassed = finalScore / total >= bank.passingScore;
      fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          module_id: id,
          lang: isES ? "es" : "en",
          score: finalScore,
          total,
          passed: finalPassed,
        }),
      }).catch(() => {});
      setPhase("result");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  // ── Loading ───────────────────────────────────────────────────────────────
  if (phase === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: C.darkOverlay }}>
        <div className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: C.yellow, borderTopColor: "transparent" }} />
      </div>
    );
  }

  // ── Ready screen ─────────────────────────────────────────────────────────
  if (phase === "ready") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: C.darkOverlay }}>
        <header className="flex items-center justify-between px-5 py-3" style={{ background: C.charcoal }}>
          <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
            <Home size={15} /> {t.home}
          </Link>
          <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32}
            className="object-contain" style={{ filter: "invert(1)", opacity: 0.7 }} />
          <div className="w-16" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl" style={{ background: C.darkBox }}>
            <div className="px-8 py-6 text-center" style={{ borderBottom: `3px solid ${C.yellow}` }}>
              <Mail className="mx-auto mb-3" size={40} style={{ color: C.yellow }} />
              <p className="text-xs mb-2" style={{ color: C.textSubtle, fontFamily: F.body }}>
                {t.emailHint}
              </p>
              <input
                ref={emailInputRef}
                type="email"
                value={emailDraft}
                onChange={(e) => setEmailDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && startSession()}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm text-center outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                style={{ background: C.darkOverlay, color: C.textLight, fontFamily: F.body }}
              />
            </div>
            <div className="px-8 py-6 space-y-4">
              <p className="text-sm text-center" style={{ color: C.textSubtle, fontFamily: F.body }}>
                {t.about}
              </p>
              <button
                onClick={startSession}
                disabled={!emailDraft.trim()}
                className="w-full py-3 rounded-xl font-medium text-sm disabled:opacity-40"
                style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}>
                {t.startQuiz}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Result screen ─────────────────────────────────────────────────────────
  if (phase === "result") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: C.darkOverlay }}>
        <header className="flex items-center justify-between px-5 py-3" style={{ background: C.charcoal }}>
          <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
            <Home size={15} /> {t.home}
          </Link>
          <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32}
            className="object-contain" style={{ filter: "invert(1)", opacity: 0.7 }} />
          <div className="w-16" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl" style={{ background: C.darkBox }}>
            <div className="px-8 py-6 text-center"
              style={{ background: passed ? "#1a3a1a" : "#3a1a1a", borderBottom: `3px solid ${C.yellow}` }}>
              {passed
                ? <CheckCircle className="mx-auto mb-3" size={48} style={{ color: C.yellow }} />
                : <XCircle className="mx-auto mb-3" size={48} color="#e05050" />}
              <h2 className="text-2xl font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>
                {passed ? t.passed : t.failed}
              </h2>
              <p className="text-4xl font-bold mt-2" style={{ color: C.yellow, fontFamily: F.heading }}>
                {score} / {total}
              </p>
              <p className="text-sm mt-1" style={{ color: C.textSubtle, fontFamily: F.body }}>
                {t.score}: {Math.round((score / total) * 100)}% — {t.passingIs}
              </p>
              <p className="text-xs mt-2" style={{ color: C.textSubtle, fontFamily: F.body }}>
                {t.takenAs} <span style={{ color: C.textLight }}>{email}</span>
              </p>
            </div>

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

            <div className="px-6 pb-6 flex flex-col gap-3">
              <button onClick={() => setPhase("ready")}
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

  // ── Quiz screen ───────────────────────────────────────────────────────────
  const q = session[current];
  if (!q) return null;

  const progress = (current / total) * 100;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: C.darkOverlay }}>
      <header className="flex items-center justify-between px-5 py-3" style={{ background: C.charcoal }}>
        <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
          <Home size={15} /> {t.home}
        </Link>
        <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32}
          className="object-contain" style={{ filter: "invert(1)", opacity: 0.7 }} />
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
            <p className="text-base md:text-lg font-medium leading-snug"
              style={{ color: C.textLight, fontFamily: F.heading }}>
              {q.original.question}
            </p>
          </div>

          <div className="space-y-3">
            {q.shuffledOptions.map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect  = i === q.correctShuffledIndex;
              const revealed   = selected !== null;

              let bg = C.darkBox, border = "transparent", textColor = C.textSubtle;
              if (revealed && isCorrect)                       { bg = "#1a3a1a"; border = C.yellow;   textColor = C.textLight; }
              else if (revealed && isSelected && !isCorrect)  { bg = "#3a1a1a"; border = "#e05050"; textColor = C.textLight; }
              else if (isSelected)                             { border = C.yellow; textColor = C.textLight; }

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

          <button onClick={handleNext} disabled={selected === null}
            className="w-full mt-6 py-3 rounded-xl font-medium text-sm transition-opacity disabled:opacity-30"
            style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}>
            {current + 1 === total ? t.finish : t.next}
          </button>
        </div>
      </div>
    </div>
  );
}
