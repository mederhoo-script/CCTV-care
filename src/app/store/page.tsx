"use client";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { categories, products } from "@/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";
export default function StorePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("relevance");
  const [show, setShow] = useState(false);
  const filtered = useMemo(
    () =>
      products
        .filter(
          (p) =>
            (category === "all" || p.categoryId === category) &&
            `${p.name} ${p.brand} ${p.shortDescription}`
              .toLowerCase()
              .includes(query.toLowerCase()),
        )
        .sort((a, b) =>
          sort === "price-low"
            ? a.priceNGN - b.priceNGN
            : sort === "price-high"
              ? b.priceNGN - a.priceNGN
              : sort === "name"
                ? a.name.localeCompare(b.name)
                : Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
        ),
    [query, category, sort],
  );
  return (
    <div className="container py-2 md:py-5">
      <div className="max-w-2xl">
        <p className="eyebrow">The CCTV Care store</p>
        <h1 className="mt-0 text-4xl font-black text-navy sm:text-5xl">
          Equipment for clearer coverage.
        </h1>
      </div>
      <div className="mt-1 flex flex-col gap-3 rounded-2xl border border-line bg-mist p-0 lg:flex-row">
        <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-0">
          <Search size={19} className="text-ink/40" />
          <input
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cameras, recorders, storage..."
            className="w-full bg-transparent py-0 outline-none"
          />
        </div>
        <button
          className="flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-0 py-0 font-bold lg:hidden"
          onClick={() => setShow(!show)}
        >
          <SlidersHorizontal size={17} /> Filters
        </button>
        <div className={`${show ? "grid" : "hidden"} gap-3 lg:flex`}>
          <select
            aria-label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-bold"
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            aria-label="Sort products"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-bold"
          >
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm text-ink/60">{filtered.length} products shown</p>
        {(query || category !== "all") && (
          <button
            className="flex items-center gap-1 text-sm font-bold text-blue"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            Clear filters <X size={15} />
          </button>
        )}
      </div>
      {filtered.length ? (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-line p-14 text-center">
          <h2 className="text-xl font-bold text-navy">
            No products match that search
          </h2>
          <p className="mt-2 text-ink/60">
            Try a broader term or clear your filters.
          </p>
        </div>
      )}
    </div>
  );
}
