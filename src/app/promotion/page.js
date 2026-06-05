import Navigation from "@/components/Navigation";

export default function PromotionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Promotion</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Penawaran Spesial Minggu Ini</h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            Dapatkan diskon eksklusif untuk semua produk hewan peliharaan kami. Promo ini berlaku
            untuk setiap pembelian paket perawatan kucing, anjing, dan guinea pig.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Paket Perawatan Anjing</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Diskon 20% untuk paket grooming dan mainan, agar hewan peliharaan Anda tetap bahagia.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Set Aksesoris Kucing</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Gratis pengiriman untuk pembelian aksesoris kucing minimal Rp200.000.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Bonus Makanan Guinea Pig</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Beli 2 paket hay premium, dapatkan 1 paket bonus secara cuma-cuma.
              </p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
