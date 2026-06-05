import Navigation from "@/components/Navigation";
import ProductGrid from "@/components/ProductGrid";
import products from "@/data/products";

export default function ProductsPage() {
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

        <ProductGrid products={products} />
      </main>
    </div>
  );
}
