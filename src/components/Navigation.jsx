"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function Navigation() {
  const { isLoggedIn, logout, user } = useAuth();
  const { totalItems } = useCart();

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

          {isLoggedIn && (
            <Link href="/admin" className="hover:text-slate-900">
              Admin
            </Link>
          )}

          {/* Cart icon */}
          <Link href="/cart" className="relative hover:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          {/* Auth button */}
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 hidden sm:block">
                {user?.username}
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
