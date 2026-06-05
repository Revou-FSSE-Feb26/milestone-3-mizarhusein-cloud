import Navigation from "@/components/Navigation";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Frequently Asked Questions</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Pertanyaan Umum</h1>
          <div className="mt-10 space-y-6">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Bagaimana cara memesan produk?</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Pilih produk dari halaman utama, buka detail produk, lalu klik tombol "Tambah ke Keranjang".
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Apakah produk ini aman untuk hewan peliharaan?</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Semua produk adalah contoh mockup untuk latihan. Pastikan memeriksa bahan sebelum pembelian nyata.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Apakah ada garansi pengiriman?</h2>
              <p className="mt-3 text-slate-600 leading-7">
                Halaman ini berfungsi sebagai demo. Pengiriman dan admin dashboard belum diimplementasikan.
              </p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
