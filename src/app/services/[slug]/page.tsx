import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getService, services } from "@/data/catalog";
import { serviceWhatsApp } from "@/lib/utils";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const s = getService(params.slug);
  if (!s) {
    notFound();
    return null;
  }
  const wa = serviceWhatsApp(s);
  return (
    <div>
      <div className="bg-navy text-white">
        <div className="container grid items-center gap-8 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">CCTV Care service</p>
            <h1 className="mt-4 text-4xl font-black sm:text-5xl">{s.name}</h1>
            <p className="mt-5 text-lg leading-8 text-white/70">{s.intro}</p>
            <Link
              className="mt-7 inline-block rounded-full bg-blue px-6 py-3.5 font-bold"
              href="/request-quote"
            >
              Request a quote
            </Link>
          </div>
          <img
            className="aspect-[4/3] rounded-3xl object-cover"
            src={s.image}
            alt=""
          />
        </div>
      </div>
      <div className="container grid gap-12 py-14 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <h2 className="text-2xl font-black text-navy">
            A clearer way forward
          </h2>
          <p className="mt-4 leading-8 text-ink/65">{s.description}</p>
          <h2 className="mt-10 text-2xl font-black text-navy">Scope of work</h2>
          <ul className="mt-4 grid gap-3">
            {s.scope.map((x) => (
              <li className="rounded-xl bg-mist p-4" key={x}>
                ✓ {x}
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl border border-line p-6">
          <h2 className="font-black text-navy">Why customers value this</h2>
          <ul className="mt-4 grid gap-3 text-sm text-ink/70">
            {s.benefits.map((x) => (
              <li key={x}>✓ {x}</li>
            ))}
          </ul>
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-7 block rounded-xl bg-blue px-5 py-3 text-center font-bold text-white"
            >
              Ask about this service
            </a>
          ) : (
            <p className="mt-7 text-sm text-ink/55">
              WhatsApp contact needs configuration.
            </p>
          )}
        </aside>
      </div>
      <section className="container pb-16">
        <h2 className="text-2xl font-black text-navy">
          Other ways we can help
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services
            .filter((x) => x.slug !== s.slug)
            .slice(0, 4)
            .map((x) => (
              <Link
                className="rounded-full border border-line px-4 py-2 text-sm font-bold hover:border-blue hover:text-blue"
                href={`/services/${x.slug}`}
                key={x.slug}
              >
                {x.name} <ArrowRight className="ml-1 inline" size={14} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
