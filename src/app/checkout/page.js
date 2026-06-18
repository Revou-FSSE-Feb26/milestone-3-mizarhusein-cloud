"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!form.address.trim()) newErrors.address = "Alamat wajib diisi";
    if (!form.phone.trim()) newErrors.phone = "Nomor telepon wajib diisi";
    else if (!/^\d{10,15}$/.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "Nomor telepon tidak valid (10-15 digit)";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    clearCart();
    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <main className="mx-auto max-w-lg px-4 py-20 text-center">
          <div className="rounded-[2rem] bg-white p-10 shadow-sm">
            <p className="text-5xl mb-4">🎉</p>
            <h1 className="text-2xl font-semibold text-slate-900">Pesanan Berhasil!</h1>
            <p className="mt-3 text-slate-600">
              Terima kasih, <strong>{form.name}</strong>! Pesananmu telah kami terima dan akan segera diproses.
            </p>
            <button
              onClick={() => router.push("/products")}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Lanjut Belanja
            </button>
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
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Checkout</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Konfirmasi Pesanan</h1>
          {user && (
            <p className="mt-1 text-sm text-slate-500">Masuk sebagai: <strong>{user.username}</strong></p>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px] items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-5" noValidate>
            <h2 className="text-lg font-semibold text-slate-900">Data Pengiriman</h2>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                  errors.name ? "border-red-400 bg-red-50" : "border-slate-200"
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Alamat Pengiriman</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                placeholder="Jalan, Kelurahan, Kota, Provinsi"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none ${
                  errors.address ? "border-red-400 bg-red-50" : "border-slate-200"
                }`}
              />
              {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="0812XXXXXXXX"
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                  errors.phone ? "border-red-400 bg-red-50" : "border-slate-200"
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={loading || cart.length === 0}
              className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Konfirmasi Pesanan"}
            </button>
          </form>

          {/* Order summary */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Ringkasan Pesanan</h2>
            <div className="mt-4 space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-slate-600">
                  <span className="line-clamp-1 flex-1 pr-2">
                    {item.title} <span className="text-slate-400">x{item.qty}</span>
                  </span>
                  <span className="shrink-0">Rp{(item.price * item.qty).toLocaleString("id-ID")}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-slate-200 pt-4 flex justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>Rp{totalPrice.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
