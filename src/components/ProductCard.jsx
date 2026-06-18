"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
          <span>{product.category}</span>
          <span>Rp{product.price.toLocaleString("id-ID")}</span>
        </div>
        <h3 className="text-base font-semibold text-slate-900 line-clamp-2">{product.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Lihat Detail
          </Link>
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            + Keranjang
          </button>
        </div>
      </div>
    </article>
  );
}
