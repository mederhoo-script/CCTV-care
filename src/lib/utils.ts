import { site } from "@/config/site";
import { Product, Service } from "@/types";
export const formatNaira = (amount: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
export const whatsappUrl = (message: string) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
    : "";
export const productWhatsApp = (p: Product) =>
  whatsappUrl(
    `Hello CCTV Care, I would like to enquire about ${p.name} (${p.sku}).`,
  );
export const serviceWhatsApp = (s: Service) =>
  whatsappUrl(`Hello CCTV Care, I would like to enquire about ${s.name}.`);
export const cartTotal = (items: { product: Product; quantity: number }[]) =>
  items.reduce((sum, item) => sum + item.product.priceNGN * item.quantity, 0);
export const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);
