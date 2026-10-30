"use client";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
import { Product } from "@/types";
import { formatNaira } from "@/lib/utils";
import { useCart } from "@/components/cart/CartProvider";
export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="group min-w-0">
      <div className="relative aspect-square overflow-hidden rounded-[1.15rem] bg-mist">
        <Link href={`/products/${product.slug}`} className="block h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {product.badges?.[0] && (
            <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
              {product.badges[0]}
            </span>
          )}
        </Link>
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          className="focus-ring absolute bottom-2.5 right-2.5 grid h-9 w-9 place-items-center rounded-full bg-white text-navy shadow-md transition hover:bg-blue hover:text-white sm:bottom-3 sm:right-3 sm:h-10 sm:w-10"
          onClick={() => add(product.id)}
        >
          <Plus size={19} strokeWidth={2.5} />
        </button>
      </div>
      <Link href={`/products/${product.slug}`} className="block">
        <div className="pt-3 sm:pt-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue sm:text-xs">
            {product.brand}
          </p>
          <h3 className="min-h-10 text-sm font-bold leading-5 text-navy sm:text-base">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink/60 sm:text-sm">
            {product.shortDescription}
          </p>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div>
              <strong className="block text-sm text-navy sm:text-base">
                {formatNaira(product.priceNGN)}
              </strong>
              {product.compareAtPriceNGN && (
                <del className="text-[10px] text-ink/45 sm:text-xs">
                  {formatNaira(product.compareAtPriceNGN)}
                </del>
              )}
            </div>
            <span
              className={`text-right text-[10px] font-bold sm:text-xs ${product.availability === "in-stock" ? "text-emerald-600" : "text-amber-600"}`}
            >
              {product.availability === "in-stock"
                ? "In stock"
                : product.availability === "limited"
                  ? "Limited"
                  : "Pre-order"}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
export function Availability({ product }: { product: Product }) {
  return (
    <span className="flex items-center gap-2 text-sm font-bold text-emerald-700">
      <Check size={16} />{" "}
      {product.availability === "in-stock"
        ? "Available to order"
        : product.availability === "limited"
          ? "Limited availability"
          : "Available on request"}
    </span>
  );
}
