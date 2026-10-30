"use client";
import Link from "next/link";
import { useState } from "react";
import { cartProducts, useCart } from "@/components/cart/CartProvider";
import { site } from "@/config/site";
import { cartTotal, formatNaira, whatsappUrl } from "@/lib/utils";
export default function CheckoutPage() {
  const { items } = useCart();
  const rows = cartProducts(items);
  const total = cartTotal(rows);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    city: "",
    delivery: "Standard delivery estimate",
  });
  const [error, setError] = useState("");
  const update = (key: string, value: string) =>
    setForm({ ...form, [key]: value });
  const message = `Hello CCTV Care, I would like to discuss this demo cart selection:\n${rows.map((r) => `- ${r.product.name} x${r.quantity}`).join("\n")}\nEstimated items total: ${formatNaira(total)}\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.city}, ${form.state}\nPlease confirm availability, delivery and final pricing.`;
  const link = whatsappUrl(message);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.address ||
      !form.state ||
      !form.city
    ) {
      setError("Please complete all contact and delivery fields.");
      return;
    }
    setError("");
    setDone(true);
  }
  if (!rows.length)
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-black text-navy">Your cart is empty</h1>
        <Link className="mt-5 inline-block text-blue" href="/store">
          Return to store
        </Link>
      </div>
    );
  return (
    <div className="container py-14">
      <p className="eyebrow">Demo checkout</p>
      <h1 className="mt-3 text-4xl font-black text-navy">
        Review your enquiry
      </h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        <form
          onSubmit={submit}
          className="rounded-2xl border border-line p-6 sm:p-8"
        >
          <div className="mb-6 rounded-xl bg-blue/10 p-4 text-sm leading-6 text-navy">
            <strong>WhatsApp checkout:</strong> this is not a payment or order
            submission. We will prepare an enquiry for the business team to
            confirm availability and pricing.
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["name", "Full name"],
              ["phone", "Phone number"],
              ["email", "Email address"],
              ["city", "City"],
              ["state", "State"],
              ["address", "Delivery address"],
            ].map(([key, label]) => (
              <label
                className={key === "address" ? "sm:col-span-2" : ""}
                key={key}
              >
                <span className="mb-1.5 block text-sm font-bold">{label}</span>
                <input
                  required
                  value={form[key as keyof typeof form]}
                  onChange={(e) => update(key, e.target.value)}
                  type={key === "email" ? "email" : "text"}
                  className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
                />
              </label>
            ))}
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-bold">
              Delivery estimate
            </span>
            <select
              value={form.delivery}
              onChange={(e) => update("delivery", e.target.value)}
              className="w-full rounded-xl border border-line px-4 py-3"
            >
              <option>Standard delivery estimate</option>
              <option>Discuss delivery with team</option>
              <option>Collection arrangement</option>
            </select>
          </label>
          {error && (
            <p className="mt-4 text-sm font-bold text-red-600" role="alert">
              {error}
            </p>
          )}
          {done ? (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <h2 className="font-bold text-emerald-800">
                Your demo enquiry is ready
              </h2>
              <p className="mt-2 text-sm leading-6 text-emerald-800/80">
                No order was created and no personal information was sent by
                this site.
              </p>
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block rounded-xl bg-emerald-700 px-5 py-3 font-bold text-white"
                >
                  Open WhatsApp message
                </a>
              ) : (
                <p className="mt-4 text-sm font-bold text-amber-700">
                  WhatsApp is not configured in site settings. Ask the business
                  to confirm your enquiry manually.
                </p>
              )}
            </div>
          ) : (
            <button className="mt-7 w-full rounded-xl bg-blue px-5 py-3.5 font-bold text-white hover:bg-navy">
              Prepare WhatsApp enquiry
            </button>
          )}
        </form>
        <aside className="h-fit rounded-2xl bg-mist p-6">
          <h2 className="font-black text-navy">Your items</h2>
          {rows.map((r) => (
            <div
              className="flex justify-between gap-4 border-b border-line py-4 text-sm"
              key={r.product.id}
            >
              <span>
                {r.product.name} × {r.quantity}
              </span>
              <strong>{formatNaira(r.product.priceNGN * r.quantity)}</strong>
            </div>
          ))}
          <div className="flex justify-between pt-5 text-lg font-black text-navy">
            <span>Items total</span>
            <span>{formatNaira(total)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
