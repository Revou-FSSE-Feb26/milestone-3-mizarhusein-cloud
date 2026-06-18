"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <main className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="rounded-[2rem] bg-white p-10 shadow-sm">
            <p className="text-5xl mb-4">🛒</p>
            <h1 className="text-2xl font-semibold text-slate-900">Keranjang kosong</h1>
            <p className="mt-3 text-slate-600">Belum ada produk yang ditambahkan ke keranjang.</p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Mulai Belanja
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Belanja</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Keranjang ({totalItems} item)
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px] items-start">
          {/* Cart items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">{item.category}</p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900 line-clamp-2">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Rp{item.price.toLocaleString("id-ID")}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <p className="text-sm font-semibold text-slate-900">
                        Rp{(item.price * item.qty).toLocaleString("id-ID")}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-slate-500 hover:text-slate-700 underline"
            >
              Kosongkan keranjang
            </button>
          </div>

          {/* Order summary */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Ringkasan Pesanan</h2>

            <div className="mt-4 space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-slate-600">
                  <span className="line-clamp-1 flex-1 pr-2">{item.title}</span>
                  <span className="shrink-0">Rp{(item.price * item.qty).toLocaleString("id-ID")}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-slate-200 pt-4">
              <div className="flex justify-between text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>Rp{totalPrice.toLocaleString("id-ID")}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-6 block w-full rounded-full bg-slate-900 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Lanjut ke Checkout
            </Link>
            <Link
              href="/products"
              className="mt-3 block w-full rounded-full border border-slate-200 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Lanjut Belanja
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
