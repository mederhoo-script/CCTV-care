import { Category, Product, Service } from "@/types";
export interface ProductRepository {
  getAll(): Promise<Product[]>;
  getBySlug(slug: string): Promise<Product | undefined>;
  getFeatured(): Promise<Product[]>;
  getByCategory(categorySlug: string): Promise<Product[]>;
  search(query: string): Promise<Product[]>;
  getRelated(productId: string): Promise<Product[]>;
}
export interface CatalogRepository extends ProductRepository {
  getCategories(): Promise<Category[]>;
  getServices(): Promise<Service[]>;
}
