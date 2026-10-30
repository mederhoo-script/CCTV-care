import { categories, products, services } from "@/data/catalog";
import { CatalogRepository } from "@/lib/data/contracts";
export const staticProvider: CatalogRepository = {
  async getAll() {
    return products;
  },
  async getBySlug(slug) {
    return products.find((p) => p.slug === slug);
  },
  async getFeatured() {
    return products.filter((p) => p.featured);
  },
  async getByCategory(slug) {
    const category = categories.find((c) => c.slug === slug);
    return category ? products.filter((p) => p.categoryId === category.id) : [];
  },
  async search(query) {
    const value = query.toLowerCase();
    return products.filter((p) =>
      `${p.name} ${p.shortDescription} ${p.brand}`
        .toLowerCase()
        .includes(value),
    );
  },
  async getRelated(productId) {
    const product = products.find((p) => p.id === productId);
    return product
      ? products.filter(
          (p) => p.categoryId === product.categoryId && p.id !== productId,
        )
      : [];
  },
  async getCategories() {
    return categories;
  },
  async getServices() {
    return services;
  },
};
