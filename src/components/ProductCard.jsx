import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
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
        <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        <Link
          href={`/products/${product.id}`}
          className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}
