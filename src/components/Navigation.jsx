import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold text-slate-900">
          <Image
            src="/logo.png"
            alt="PAWPAYA Logo"
            width={170}
            height={60}
            />
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-700">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/products" className="hover:text-slate-900">
            Produk
          </Link>
          <Link href="/promotion" className="hover:text-slate-900">
            Promotion
          </Link>
          <Link href="/faq" className="hover:text-slate-900">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
