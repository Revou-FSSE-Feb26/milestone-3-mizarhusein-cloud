"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  details: string;
  category: string;
  image: string;
};

type Props = {
  productId: string;
};

export default function ProductDetail({ productId }: Props) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produk tidak ditemukan");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-[2rem] bg-slate-200" />
          <div className="space-y-4">
            <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
            <div className="h-10 w-3/4 animate-pulse rounded-xl bg-slate-200" />
            <div className="h-6 w-32 animate-pulse rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-[60vh] px-4 py-10 text-center">
        <p className="text-lg font-semibold text-slate-900">{error || "Produk tidak ditemukan"}</p>
        <Link href="/products" className="mt-4 inline-block text-slate-700 underline">
          Kembali ke semua produk
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              {product.category}
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">{product.title}</h1>
            <p className="text-xl font-semibold text-slate-900">
              Rp{product.price.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Deskripsi Produk</h2>
            <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
            {product.details && (
              <p className="mt-4 leading-7 text-slate-600">{product.details}</p>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Tambah ke Keranjang
            </button>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Lihat Keranjang
            </Link>
          </div>

          {added && (
            <p className="rounded-full bg-emerald-100 px-4 py-2 text-sm text-emerald-700 text-center">
              {product.title} ditambahkan ke keranjang.
            </p>
          )}

          <Link
            href="/products"
            className="inline-flex text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            &larr; Kembali ke semua produk
          </Link>
        </div>
      </div>
    </section>
  );
}
