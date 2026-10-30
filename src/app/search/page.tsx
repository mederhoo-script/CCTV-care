"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products, services } from "@/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";
export default function SearchPage() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  const match = products.filter((p) =>
    `${p.name} ${p.shortDescription}`.toLowerCase().includes(q.toLowerCase()),
  );
  const serviceMatch = services.filter((s) =>
    `${s.name} ${s.intro}`.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <div className="container py-14">
      <p className="eyebrow">Search CCTV Care</p>
      <h1 className="mt-3 text-4xl font-black text-navy">
        What are you looking for?
      </h1>
      <form className="mt-7 flex gap-3">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search products and services"
          className="flex-1 rounded-xl border border-line px-4 py-3"
        />
        <button className="rounded-xl bg-blue px-6 font-bold text-white">
          Search
        </button>
      </form>
      {q && (
        <>
          <h2 className="mt-10 text-xl font-black text-navy">
            Results for “{q}”
          </h2>
          {match.length ? (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {match.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            !serviceMatch.length && (
              <p className="mt-5 text-ink/60">
                No matching products or services. Try “camera”, “installation”
                or “storage”.
              </p>
            )
          )}
          {serviceMatch.length > 0 && (
            <div className="mt-10 grid gap-3">
              {serviceMatch.map((s) => (
                <Link
                  className="rounded-xl border border-line p-5 font-bold text-navy hover:border-blue"
                  href={`/services/${s.slug}`}
                  key={s.slug}
                >
                  {s.name}
                  <p className="mt-1 text-sm font-normal text-ink/60">
                    {s.intro}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
