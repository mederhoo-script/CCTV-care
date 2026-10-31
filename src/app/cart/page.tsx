"use client";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { cartProducts, useCart } from "@/components/cart/CartProvider";
import { formatNaira, cartTotal } from "@/lib/utils";
export default function CartPage() {
  const { items, update, remove, clear } = useCart();
  const rows = cartProducts(items);
  const total = cartTotal(rows);
  return (
    <div className="container py-14">
      <p className="eyebrow">Your selection</p>
      <h1 className="mt-3 text-4xl font-black text-navy">Shopping cart</h1>
      {rows.length ? (
        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="divide-y divide-line rounded-2xl border border-line">
            {rows.map(({ product, quantity }) => (
              <div className="flex gap-4 p-5" key={product.id}>
                <img
                  className="h-24 w-24 rounded-xl object-cover"
                  src={product.images[0]}
                  alt=""
                />
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <h2 className="font-bold text-navy">{product.name}</h2>
                    <p className="text-sm text-ink/60">
                      {formatNaira(product.priceNGN)} each
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-lg border border-line">
                      <button
                        aria-label="Decrease"
                        className="p-2"
                        onClick={() => update(product.id, quantity - 1)}
                      >
                        <Minus size={15} />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">
                        {quantity}
                      </span>
                      <button
                        aria-label="Increase"
                        className="p-2"
                        onClick={() => update(product.id, quantity + 1)}
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                    <button
                      aria-label={`Remove ${product.name}`}
                      className="text-ink/45 hover:text-red-600"
                      onClick={() => remove(product.id)}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-2xl bg-mist p-6">
            <h2 className="text-xl font-black text-navy">Summary</h2>
            <div className="mt-5 flex justify-between border-b border-line pb-4 text-sm">
              <span>Subtotal</span>
              <strong>{formatNaira(total)}</strong>
            </div>
            <div className="flex justify-between py-4 text-sm">
              <span>Delivery</span>
              <span className="text-ink/60">Confirmed on enquiry</span>
            </div>
            <div className="flex justify-between text-lg font-black text-navy">
              <span>Estimated total</span>
              <span>{formatNaira(total)}</span>
            </div>
            <p className="mt-4 text-xs leading-5 text-ink/55">
              Shipping and final pricing are confirmed with the team before a
              real purchase.
            </p>
            <Link
              className="mt-6 block rounded-xl bg-blue px-5 py-3.5 text-center font-bold text-white hover:bg-navy"
              href="/checkout"
            >
              Continue to checkout
            </Link>
            <button
              className="mt-3 w-full py-2 text-sm font-bold text-ink/60 hover:text-red-600"
              onClick={clear}
            >
              Clear cart
            </button>
          </aside>
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-line p-14 text-center">
          <h2 className="text-xl font-bold text-navy">Your cart is empty</h2>
          <p className="mt-2 text-ink/60">
            Add equipment to see your selection here.
          </p>
          <Link
            className="mt-6 inline-block rounded-xl bg-blue px-6 py-3 font-bold text-white"
            href="/store"
          >
            Browse the store
          </Link>
        </div>
      )}
    </div>
  );
}
