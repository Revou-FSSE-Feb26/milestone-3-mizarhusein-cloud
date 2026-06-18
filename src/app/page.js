"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat produk");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="mb-12 rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">RevoPet Shelter</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">
            Shelter Online untuk Kucing, Anjing, dan Guinea Pig
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            Temukan produk perawatan hewan peliharaan terbaik, dari tempat tidur nyaman hingga mainan
            interaktif. Semua produk dibuat untuk memberikan kenyamanan dan kesehatan maksimal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Telusuri Semua Produk
            </Link>
            <Link href="/promotion" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Lihat Promo Terbaru
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Produk Unggulan</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                Pilihan Terbaik untuk Hewan Peliharaanmu
              </h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-slate-900 hover:text-slate-700">
              Lihat Semua
            </Link>
          </div>

          {loading && (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-72 animate-pulse rounded-3xl bg-slate-200" />
              ))}
            </div>
          )}
          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
          )}
          {!loading && !error && (
            <ProductGrid products={products.slice(0, 6)} />
          )}
        </section>
      </main>
    </div>
  );
}
