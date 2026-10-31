import Link from "next/link";
import { projects } from "@/data/catalog";
export default function Projects() {
  return (
    <div className="container py-14">
      <p className="eyebrow">Project thinking</p>
      <h1 className="mt-3 text-4xl font-black text-navy">
        A considered view of every space.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink/65">
        Illustrative concepts showing how a surveillance plan can respond to
        different environments.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Link
            className="overflow-hidden rounded-2xl border border-line"
            href={`/projects/${p.slug}`}
            key={p.slug}
          >
            <img
              className="aspect-[1.3] w-full object-cover"
              src={p.image}
              alt={p.title}
            />
            <div className="p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue">
                {p.type} · Project concept
              </span>
              <h2 className="mt-2 text-xl font-black text-navy">{p.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
