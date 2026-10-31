"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { getProduct, products } from "@/data/catalog";
import { formatNaira, productWhatsApp } from "@/lib/utils";
import { Availability, ProductCard } from "@/components/store/ProductCard";
import { useCart } from "@/components/cart/CartProvider";
import { useState } from "react";
export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) {
    notFound();
    return null;
  }
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const related = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);
  const wa = productWhatsApp(product);
  return (
    <div className="container py-10 md:py-14">
      <Link href="/store" className="text-sm font-bold text-blue">
        <ArrowLeft className="mr-1 inline" size={16} /> Back to store
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-3xl bg-mist">
            <img
              src={product.images[0]}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="eyebrow">
            {product.brand} · {product.sku}
          </p>
          <h1 className="mt-3 text-4xl font-black text-navy">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-ink/65">
            {product.description}
          </p>
          <div className="mt-6 flex items-end gap-3">
            <strong className="text-3xl text-navy">
              {formatNaira(product.priceNGN)}
            </strong>
            {product.compareAtPriceNGN && (
              <del className="text-ink/45">
                {formatNaira(product.compareAtPriceNGN)}
              </del>
            )}
          </div>
          <div className="mt-5">
            <Availability product={product} />
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <div className="flex items-center rounded-xl border border-line">
              <button
                aria-label="Decrease quantity"
                className="p-3"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                <Minus size={17} />
              </button>
              <span className="w-10 text-center font-bold">{qty}</span>
              <button
                aria-label="Increase quantity"
                className="p-3"
                onClick={() => setQty(Math.min(20, qty + 1))}
              >
                <Plus size={17} />
              </button>
            </div>
            <button
              className="rounded-xl bg-blue px-7 py-3 font-bold text-white hover:bg-navy"
              onClick={() => add(product.id, qty)}
            >
              Add to cart
            </button>
            {wa ? (
              <a
                className="rounded-xl border border-line px-5 py-3 font-bold text-navy hover:border-blue hover:text-blue"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                Product enquiry
              </a>
            ) : (
              <span className="rounded-xl border border-line px-5 py-3 text-sm text-ink/55">
                WhatsApp contact not configured
              </span>
            )}
          </div>
          <div className="mt-8 rounded-2xl bg-mist p-5 text-sm leading-6 text-ink/65">
            Delivery estimates will be confirmed with the team. This enquiry
            does not reserve stock or create an order.
          </div>
          <div className="mt-8 border-t border-line pt-7">
            <h2 className="font-bold text-navy">Specifications</h2>
            <dl className="mt-3 divide-y divide-line">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div
                  className="flex justify-between gap-5 py-3 text-sm"
                  key={k}
                >
                  <dt className="text-ink/60">{k}</dt>
                  <dd className="font-bold text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-black text-navy">You may also need</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
