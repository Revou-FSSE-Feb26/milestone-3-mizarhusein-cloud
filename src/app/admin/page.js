"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/context/AuthContext";

const EMPTY_FORM = { title: "", price: "", description: "", category: "", image: "" };

export default function AdminPage() {
  const { isLoggedIn, authLoading } = useAuth();
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!authLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, authLoading, router]);

  useEffect(() => {
    if (!isLoggedIn) return;
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat produk");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [isLoggedIn]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const validateForm = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Nama produk wajib diisi";
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0)
      errs.price = "Harga harus berupa angka positif";
    if (!form.description.trim()) errs.description = "Deskripsi wajib diisi";
    if (!form.category.trim()) errs.category = "Kategori wajib diisi";
    if (!form.image.trim()) errs.image = "URL gambar wajib diisi";
    return errs;
  };

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const openAdd = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setFormErrors({});
    setShowForm(true);
  };

  const openEdit = (product) => {
    setEditingId(product.id);
    setForm({
      title: product.title,
      price: String(product.price),
      description: product.description,
      category: product.category,
      image: product.image,
    });
    setFormErrors({});
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }
    setSubmitting(true);
    const payload = { ...form, price: Number(form.price) };

    try {
      if (editingId) {
        const res = await fetch(`/api/products/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Gagal mengupdate produk");
        const updated = await res.json();
        setProducts((prev) => prev.map((p) => (p.id === editingId ? { ...p, ...updated } : p)));
        showToast("Produk berhasil diupdate");
      } else {
        const res = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Gagal menambahkan produk");
        const created = await res.json();
        setProducts((prev) => [{ ...payload, id: created.id ?? Date.now() }, ...prev]);
        showToast("Produk berhasil ditambahkan");
      }
      setShowForm(false);
      setForm(EMPTY_FORM);
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Gagal menghapus produk");
      setProducts((prev) => prev.filter((p) => p.id !== id));
      showToast("Produk berhasil dihapus");
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  if (authLoading) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-20 right-4 z-50 rounded-2xl px-5 py-3 text-sm font-medium text-white shadow-lg transition ${
            toast.type === "error" ? "bg-red-500" : "bg-emerald-500"
          }`}
        >
          {toast.msg}
        </div>
      )}

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Admin Panel</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manajemen Produk</h1>
          </div>
          <button
            onClick={openAdd}
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            + Tambah Produk
          </button>
        </div>

        {/* Add / Edit Form */}
        {showForm && (
          <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              {editingId ? "Edit Produk" : "Tambah Produk Baru"}
            </h2>
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Produk</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Contoh: Smart Dog Leash"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    formErrors.title ? "border-red-400 bg-red-50" : "border-slate-200"
                  }`}
                />
                {formErrors.title && <p className="mt-1 text-xs text-red-500">{formErrors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Harga (Rp)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleFormChange}
                  placeholder="85000"
                  min="0"
                  step="0.01"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    formErrors.price ? "border-red-400 bg-red-50" : "border-slate-200"
                  }`}
                />
                {formErrors.price && <p className="mt-1 text-xs text-red-500">{formErrors.price}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Kategori</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                  placeholder="electronics"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    formErrors.category ? "border-red-400 bg-red-50" : "border-slate-200"
                  }`}
                />
                {formErrors.category && <p className="mt-1 text-xs text-red-500">{formErrors.category}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Deskripsi</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  rows={3}
                  placeholder="Deskripsi singkat produk..."
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none ${
                    formErrors.description ? "border-red-400 bg-red-50" : "border-slate-200"
                  }`}
                />
                {formErrors.description && <p className="mt-1 text-xs text-red-500">{formErrors.description}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">URL Gambar</label>
                <input
                  type="text"
                  name="image"
                  value={form.image}
                  onChange={handleFormChange}
                  placeholder="https://..."
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    formErrors.image ? "border-red-400 bg-red-50" : "border-slate-200"
                  }`}
                />
                {formErrors.image && <p className="mt-1 text-xs text-red-500">{formErrors.image}</p>}
              </div>

              <div className="sm:col-span-2 flex gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
                >
                  {submitting ? "Menyimpan..." : editingId ? "Simpan Perubahan" : "Tambah Produk"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-full border border-slate-200 px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Table */}
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 animate-pulse rounded-2xl bg-slate-200" />
            ))}
          </div>
        ) : error ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-5 py-4 text-left">Produk</th>
                  <th className="px-5 py-4 text-left hidden md:table-cell">Kategori</th>
                  <th className="px-5 py-4 text-right">Harga</th>
                  <th className="px-5 py-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center p-1">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <span className="font-medium text-slate-900 line-clamp-2 max-w-xs">
                          {product.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-600 hidden md:table-cell capitalize">
                      {product.category}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-slate-900">
                      Rp{product.price.toLocaleString("id-ID")}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(product)}
                          className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="rounded-full border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t border-slate-200 px-5 py-3 text-xs text-slate-500">
              {products.length} produk ditemukan
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
