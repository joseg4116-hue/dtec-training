"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBrowserSupabase } from "@/lib/supabase-browser";

const ALLOWED_DOMAIN = "trustdtec.com";

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

export default function SignupPage() {
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);

  const emailDomain = email.split("@")[1]?.toLowerCase();
  const isAllowed   = emailDomain === ALLOWED_DOMAIN;
  const showBlock   = email.includes("@") && !isAllowed;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAllowed) return;
    setError("");
    setLoading(true);
    const supabase = getBrowserSupabase();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name.trim() } },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ background: C.darkOverlay }}>
        <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl text-center"
          style={{ background: C.darkBox }}>
          <div className="px-8 py-6" style={{ borderBottom: `3px solid ${C.yellow}` }}>
            <h2 className="text-xl font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>
              Check your email
            </h2>
          </div>
          <div className="px-8 py-6 space-y-3">
            <p className="text-sm" style={{ color: C.textSubtle, fontFamily: F.body }}>
              We sent a confirmation link to <span style={{ color: C.textLight }}>{email}</span>.
              Click it to activate your account, then sign in.
            </p>
            <Link href="/login"
              className="block w-full py-3 rounded-xl font-medium text-sm text-center"
              style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}>
              Go to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
              Create Account
            </h2>
            <p className="text-xs mt-1" style={{ color: C.textSubtle, fontFamily: F.body }}>
              DTEC Stormwater Training
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
            <div>
              <label className="block text-xs font-bold mb-1.5 tracking-widest"
                style={{ color: C.yellow, fontFamily: F.body }}>FULL NAME</label>
              <input
                type="text" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Your full name" required autoFocus
                className="w-full px-4 py-3 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                style={{ background: C.darkOverlay, color: C.textLight, fontFamily: F.body }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1.5 tracking-widest"
                style={{ color: C.yellow, fontFamily: F.body }}>EMAIL</label>
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@trustdtec.com" required
                className="w-full px-4 py-3 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                style={{ background: C.darkOverlay, color: C.textLight, fontFamily: F.body }}
              />
              {showBlock && (
                <p className="text-xs mt-2 px-3 py-2 rounded-lg"
                  style={{ background: "#3a1a1a", color: "#e05050", fontFamily: F.body }}>
                  Self-registration is only available for @{ALLOWED_DOMAIN} addresses.
                  Contact your DTEC administrator to get access.
                </p>
              )}
            </div>
            {!showBlock && (
              <div>
                <label className="block text-xs font-bold mb-1.5 tracking-widest"
                  style={{ color: C.yellow, fontFamily: F.body }}>PASSWORD</label>
                <input
                  type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 characters" required minLength={6}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                  style={{ background: C.darkOverlay, color: C.textLight, fontFamily: F.body }}
                />
              </div>
            )}

            {error && (
              <p className="text-xs" style={{ color: "#e05050", fontFamily: F.body }}>{error}</p>
            )}

            <button type="submit"
              disabled={loading || !name.trim() || !isAllowed || !password}
              className="w-full py-3 rounded-xl font-medium text-sm transition-opacity disabled:opacity-30"
              style={{ background: C.yellow, color: C.charcoal, fontFamily: F.body }}>
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <div className="px-8 pb-6 text-center">
            <p className="text-xs" style={{ color: C.textSubtle, fontFamily: F.body }}>
              Already have an account?{" "}
              <Link href="/login" className="underline" style={{ color: C.yellow }}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
