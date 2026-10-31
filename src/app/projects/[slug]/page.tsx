import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/catalog";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export default function Project({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) {
    notFound();
    return null;
  }
  return (
    <div className="container py-14">
      <Link className="text-sm font-bold text-blue" href="/projects">
        ← Back to projects
      </Link>
      <div className="mt-7 grid gap-10 md:grid-cols-2">
        <img
          className="aspect-[4/3] w-full rounded-3xl object-cover"
          src={p.image}
          alt={p.title}
        />
        <div>
          <p className="eyebrow">{p.type} · Project concept</p>
          <h1 className="mt-3 text-4xl font-black text-navy">{p.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/65">{p.description}</p>
          <p className="mt-6 rounded-xl bg-mist p-4 text-sm leading-6 text-ink/60">
            This project profile is provided as a planning reference and is not
            a claim of a completed verified installation.
          </p>
          <Link
            className="mt-7 inline-block rounded-xl bg-blue px-6 py-3 font-bold text-white"
            href="/request-quote"
          >
            Plan a similar project
          </Link>
        </div>
      </div>
    </div>
  );
}
