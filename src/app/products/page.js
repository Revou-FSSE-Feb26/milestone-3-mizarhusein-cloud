"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
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
        <div className="mb-10 rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">RevoShop</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Daftar Produk Shelter</h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            Jelajahi produk terbaik untuk kucing, anjing, dan guinea pig. Semua produk dibuat
            untuk memberikan kenyamanan dan perawatan yang tepat bagi hewan peliharaan Anda.
          </p>
        </div>

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 px-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-72 animate-pulse rounded-3xl bg-slate-200" />
            ))}
          </div>
        )}
        {error && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
        )}
        {!loading && !error && <ProductGrid products={products} />}
      </main>
    </div>
  );
}
