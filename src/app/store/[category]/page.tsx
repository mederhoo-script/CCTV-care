import { notFound } from "next/navigation";
import { categories, products } from "@/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}
export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) {
    notFound();
    return null;
  }
  const list = products.filter((p) => p.categoryId === category.id);
  return (
    <div className="container py-14">
      <p className="eyebrow">Store category</p>
      <h1 className="mt-3 text-4xl font-black text-navy">{category.name}</h1>
      <p className="mt-3 max-w-xl text-lg text-ink/65">
        {category.description}
      </p>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
