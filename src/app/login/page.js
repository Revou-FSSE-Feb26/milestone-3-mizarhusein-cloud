"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navigation from "@/components/Navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Username dan password tidak boleh kosong.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await login(username, password);
      router.push(redirect);
    } catch {
      setError("Username atau password salah. Coba: mor_2314 / 83r5^_");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="mx-auto max-w-md px-4 py-16">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">PAWPAYA</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">Login</h1>
          <p className="mt-2 text-slate-600 text-sm">Masuk ke akun PAWPAYA kamu</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="mor_2314"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Demo credentials</p>
            <p className="text-xs text-slate-600">Username: <span className="font-mono font-semibold">mor_2314</span></p>
            <p className="text-xs text-slate-600">Password: <span className="font-mono font-semibold">83r5^_</span></p>
          </div>
        </div>
      </main>
    </div>
  );
}
