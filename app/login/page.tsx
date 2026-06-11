"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBrowserSupabase } from "@/lib/supabase-browser";

const C = {
  charcoal:    "#2D2926",
  darkBox:     "#3A3530",
  darkOverlay: "#2A2520",
  yellow:      "#C9B10A",
  textLight:   "#FFFFFF",
  textSubtle:  "#B8B0A8",
};
const F = {
  heading: "Georgia, 'Times New Roman', serif",
  body:    "Calibri, 'Trebuchet MS', Arial, sans-serif",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const supabase = getBrowserSupabase();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError("Invalid email or password.");
      return;
    }
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: C.darkOverlay }}>
      <header className="flex items-center justify-center px-5 py-4" style={{ background: C.charcoal }}>
        <Image src="/images/dtec_30_years.png" alt="DTEC" width={90} height={36}
          className="object-contain" style={{ filter: "invert(1)", opacity: 0.8 }} />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl" style={{ background: C.darkBox }}>
          <div className="px-8 py-6 text-center" style={{ borderBottom: `3px solid ${C.yellow}` }}>
            <h2 className="text-xl font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>
              Sign In
            </h2>
            <p className="text-xs mt-1" style={{ color: C.textSubtle, fontFamily: F.body }}>
              DTEC Stormwater Training
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
            <div>
              <label className="block text-xs font-bold mb-1.5 tracking-widest"
                style={{ color: C.yellow, fontFamily: F.body }}>EMAIL</label>
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" required autoFocus
                className="w-full px-4 py-3 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                style={{ background: C.darkOverlay, color: C.textLight, fontFamily: F.body }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1.5 tracking-widest"
                style={{ color: C.yellow, fontFamily: F.body }}>PASSWORD</label>
              <input
                type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                style={{ background: C.darkOverlay, color: C.textLight, fontFamily: F.body }}
              />
            </div>

            {error && (
              <p className="text-xs" style={{ color: "#e05050", fontFamily: F.body }}>{error}</p>
            )}

            <button type="submit" disabled={loading || !email || !password}
              className="w-full py-3 rounded-xl font-medium text-sm transition-opacity disabled:opacity-30"
              style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div className="px-8 pb-6 text-center">
            <p className="text-xs" style={{ color: C.textSubtle, fontFamily: F.body }}>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline" style={{ color: C.yellow }}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
