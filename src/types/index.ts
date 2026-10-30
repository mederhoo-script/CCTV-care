export type Availability = "in-stock" | "limited" | "pre-order";
export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  priceNGN: number;
  compareAtPriceNGN?: number;
  categoryId: string;
  brand: string;
  images: string[];
  specifications: Record<string, string>;
  featured?: boolean;
  availability: Availability;
  badges?: string[];
  sku: string;
};
export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};
export type Service = {
  slug: string;
  name: string;
  intro: string;
  description: string;
  benefits: string[];
  scope: string[];
  image: string;
};
export type Project = {
  slug: string;
  title: string;
  type: string;
  location?: string;
  description: string;
  image: string;
  demo: boolean;
};
export type FAQ = { question: string; answer: string; category: string };
export type CartItem = { productId: string; quantity: number };
export type OrderDraft = {
  name: string;
  phone: string;
  email: string;
  address: string;
  state: string;
  city: string;
  delivery: string;
};
export type QuoteRequest = {
  name: string;
  phone: string;
  email: string;
  service: string;
  property: string;
  cameras: string;
  contact: string;
  location: string;
  description: string;
};
