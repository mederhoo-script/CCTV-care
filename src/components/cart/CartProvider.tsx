"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem } from "@/types";
import { products } from "@/data/catalog";
type CartContext = {
  items: CartItem[];
  add: (id: string, quantity?: number) => void;
  update: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
};
const Context = createContext<CartContext | null>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cctv-care-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("cctv-care-cart", JSON.stringify(items));
    } catch {}
  }, [items]);
  const value = useMemo(
    () => ({
      items,
      add: (id: string, quantity = 1) =>
        setItems((prev) => {
          const found = prev.find((i) => i.productId === id);
          return found
            ? prev.map((i) =>
                i.productId === id
                  ? { ...i, quantity: Math.min(20, i.quantity + quantity) }
                  : i,
              )
            : [...prev, { productId: id, quantity: Math.min(20, quantity) }];
        }),
      update: (id: string, quantity: number) =>
        setItems((prev) =>
          quantity < 1
            ? prev.filter((i) => i.productId !== id)
            : prev.map((i) =>
                i.productId === id
                  ? { ...i, quantity: Math.min(20, quantity) }
                  : i,
              ),
        ),
      remove: (id: string) =>
        setItems((prev) => prev.filter((i) => i.productId !== id)),
      clear: () => setItems([]),
      count: items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    [items],
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export const useCart = () => {
  const value = useContext(Context);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
};
export const cartProducts = (items: CartItem[]) =>
  items
    .map((i) => ({
      product: products.find((p) => p.id === i.productId),
      quantity: i.quantity,
    }))
    .filter(
      (i): i is { product: (typeof products)[number]; quantity: number } =>
        Boolean(i.product),
    );
