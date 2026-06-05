"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }) {

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <div className="mx-auto flex max-w-7xl gap-10 px-4 py-10">

      {/* SIDEBAR */}
      <aside className="w-56 shrink-0">

        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Categories
        </h2>

        <div className="flex flex-col gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`rounded-lg px-4 py-3 text-left transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </aside>

      {/* PRODUCT GRID */}
      <div className="grid flex-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
}