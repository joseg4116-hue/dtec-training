"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, CheckCircle, XCircle, RefreshCw, Lock } from "lucide-react";

const C = {
  charcoal:   "#2D2926",
  yellow:     "#C9B10A",
  lightGray:  "#EBEBEB",
  white:      "#FFFFFF",
  textDark:   "#1E1B18",
  textMuted:  "#5A5550",
  textLight:  "#FFFFFF",
  textSubtle: "#B8B0A8",
  darkBox:    "#3A3530",
};

const F = {
  heading: "Georgia, 'Times New Roman', serif",
  body:    "Calibri, 'Trebuchet MS', Arial, sans-serif",
};

type Result = {
  id: string;
  name: string;
  module_id: string;
  lang: string;
  score: number;
  total: number;
  passed: boolean;
  taken_at: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "numeric", minute: "2-digit",
  });
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authKey, setAuthKey] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchResults = async (key: string) => {
    setLoading(true);
    setError("");
    const res = await fetch(`/api/results?key=${encodeURIComponent(key)}`);
    if (res.status === 401) {
      setError("Incorrect password.");
      setLoading(false);
      return;
    }
    if (!res.ok) {
      setError("Something went wrong. Try again.");
      setLoading(false);
      return;
    }
    const data = await res.json();
    setResults(data.results ?? []);
    setAuthed(true);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthKey(password);
    fetchResults(password);
  };

  const passCount = results.filter((r) => r.passed).length;
  const failCount = results.filter((r) => !r.passed).length;

  return (
    <div className="min-h-screen" style={{ background: C.lightGray, fontFamily: F.body }}>
      <header style={{ background: C.charcoal }} className="px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
              <Home size={15} />
            </Link>
            <div>
              <h1 className="text-lg font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>
                Training Results
              </h1>
              <p className="text-xs" style={{ color: C.textSubtle }}>DTEC Admin Dashboard</p>
            </div>
          </div>
          <a href="https://trustdtec.com" target="_blank" rel="noopener noreferrer" style={{ mixBlendMode: "screen" }}>
            <Image
              src="/images/dtec_30_years.png"
              alt="DTEC"
              width={80}
              height={32}
              className="object-contain"
              style={{ filter: "invert(1) opacity(0.85)" }}
            />
          </a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {!authed ? (
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-sm" style={{ background: C.white, border: "1px solid #D0CECA" }}>
              <div className="px-6 py-5" style={{ borderBottom: `3px solid ${C.yellow}` }}>
                <div className="flex items-center gap-3">
                  <Lock size={20} style={{ color: C.yellow }} />
                  <h2 className="font-bold" style={{ color: C.textDark, fontFamily: F.heading }}>
                    Admin Access
                  </h2>
                </div>
              </div>
              <form onSubmit={handleLogin} className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold mb-1.5 tracking-widest" style={{ color: C.textMuted }}>
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    autoFocus
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                    style={{ background: C.lightGray, color: C.textDark }}
                  />
                  {error && <p className="text-xs mt-1.5" style={{ color: "#e05050" }}>{error}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading || !password}
                  className="w-full py-2.5 rounded-xl font-medium text-sm disabled:opacity-40"
                  style={{ background: C.charcoal, color: C.textLight }}
                >
                  {loading ? "Loading…" : "View Results"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Total Quizzes", value: results.length, color: C.charcoal },
                { label: "Passed", value: passCount, color: "#1a3a1a" },
                { label: "Not Passed", value: failCount, color: "#3a1a1a" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl px-5 py-4 shadow-sm" style={{ background: s.color, border: `1px solid #D0CECA` }}>
                  <p className="text-xs mb-1" style={{ color: C.textSubtle }}>{s.label}</p>
                  <p className="text-3xl font-bold" style={{ color: C.yellow, fontFamily: F.heading }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Refresh */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-sm" style={{ color: C.textDark, fontFamily: F.heading }}>
                All Submissions
              </h2>
              <button
                onClick={() => fetchResults(authKey)}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
                style={{ background: C.charcoal, color: C.textLight }}
              >
                <RefreshCw size={12} /> Refresh
              </button>
            </div>

            {/* Table */}
            {results.length === 0 ? (
              <div className="rounded-2xl p-8 text-center" style={{ background: C.white }}>
                <p style={{ color: C.textMuted }}>No results yet.</p>
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: C.white, border: "1px solid #D0CECA" }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: C.charcoal, borderBottom: `2px solid ${C.yellow}` }}>
                        {["Name", "Module", "Lang", "Score", "Result", "Date"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-xs font-bold tracking-widest"
                            style={{ color: C.textSubtle }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r, i) => (
                        <tr key={r.id}
                          style={{ background: i % 2 === 0 ? C.white : "#F9F8F7", borderBottom: "1px solid #ECEAE8" }}>
                          <td className="px-4 py-3 font-medium" style={{ color: C.textDark }}>{r.name}</td>
                          <td className="px-4 py-3" style={{ color: C.textMuted }}>Module {r.module_id.replace("-en","").replace("-es","")}</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-0.5 rounded text-xs font-bold"
                              style={{ background: r.lang === "en" ? "#EEF2FF" : "#FEF9EC", color: r.lang === "en" ? "#4338CA" : "#92400E" }}>
                              {r.lang.toUpperCase()}
                            </span>
                          </td>
                          <td className="px-4 py-3" style={{ color: C.textDark }}>
                            {r.score}/{r.total}
                            <span className="ml-1.5 text-xs" style={{ color: C.textMuted }}>
                              ({Math.round((r.score / r.total) * 100)}%)
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {r.passed
                              ? <span className="flex items-center gap-1 text-xs font-bold" style={{ color: "#C9B10A" }}>
                                  <CheckCircle size={13} /> PASSED
                                </span>
                              : <span className="flex items-center gap-1 text-xs font-bold" style={{ color: "#e05050" }}>
                                  <XCircle size={13} /> FAILED
                                </span>}
                          </td>
                          <td className="px-4 py-3 text-xs" style={{ color: C.textMuted }}>{formatDate(r.taken_at)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
