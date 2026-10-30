"use client";
import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { images } from "@/config/images";
export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const links = [
    ["Shop", "/store"],
    ["Services", "/services"],
    ["Projects", "/projects"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="bg-navy text-white">
        <div className="overflow-hidden py-1 text-xs font-bold">
          <div className="announcement-track">
            <div className="flex items-center gap-8 px-4">
              <span>Professional surveillance solutions across Nigeria</span>
              <span>
                Demo storefront — prices and checkout are illustrative.
              </span>
              <span>Nationwide installation and technical support.</span>
              <span>Browse cameras, kits, recorders and accessories.</span>
            </div>
            <div className="flex items-center gap-8 px-4" aria-hidden="true">
              <span>Professional surveillance solutions across Nigeria</span>
              <span>
                Demo storefront — prices and checkout are illustrative.
              </span>
              <span>Nationwide installation and technical support.</span>
              <span>Browse cameras, kits, recorders and accessories.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex h-[54px] items-center justify-between gap-5">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={images.logo}
            alt="CCTV Care"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span>
            <strong className="block text-lg leading-none text-navy">
              CCTV <span className="text-blue">Care</span>
            </strong>
            <small className="text-[7px] font-bold uppercase tracking-widest text-blue">
              See. Secure. Support.
            </small>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link
              className="focus-ring text-sm font-bold text-ink/80 transition hover:text-blue"
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            aria-label="Search"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full hover:bg-mist"
            href="/search"
          >
            <Search size={19} />
          </Link>
          <Link
            aria-label={`Cart with ${count} items`}
            className="focus-ring relative grid h-10 w-10 place-items-center rounded-full hover:bg-mist"
            href="/cart"
          >
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute right-0 top-0 grid h-5 min-w-5 place-items-center rounded-full bg-blue px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
          <Link
            className="hidden rounded-full bg-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-navy sm:inline-block"
            href="/request-quote"
          >
            Request a quote
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-white px-5 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <Link
              className="block border-b border-line py-3 font-bold last:border-0"
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className="mt-4 block rounded-full bg-blue px-5 py-3 text-center font-bold text-white"
            href="/request-quote"
            onClick={() => setOpen(false)}
          >
            Request a quote
          </Link>
        </nav>
      )}
    </header>
  );
}
