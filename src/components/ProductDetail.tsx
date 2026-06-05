"use client";

import { useState } from "react";
import Link from "next/link";
import products from "@/data/products";

type Props = {
  productId: string;
};

export default function ProductDetail({ productId }: Props) {
  console.log("PRODUCT ID:", productId);
  const [added, setAdded] = useState(false);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="min-h-[60vh] px-4 py-10 text-center">
        <p className="text-lg font-semibold text-slate-900">Produk tidak ditemukan</p>
        <Link href="/" className="mt-4 inline-block text-slate-700 underline">
          Kembali ke halaman utama
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
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              {product.category}
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">{product.name}</h1>
            <p className="text-xl font-semibold text-slate-900">
              Rp{product.price.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Deskripsi Produk</h2>
            <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
            <p className="mt-4 leading-7 text-slate-600">{product.details}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setAdded(true)}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Tambah ke Keranjang
            </button>
            {added && (
              <p className="rounded-full bg-emerald-100 px-4 py-2 text-sm text-emerald-700">
                {product.name} ditambahkan ke keranjang.
              </p>
            )}
          </div>

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
