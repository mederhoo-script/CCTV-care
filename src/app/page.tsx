import Link from "next/link";
import { ArrowRight, Eye, Wrench } from "lucide-react";
import { categories, products, projects, services } from "@/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";
import { HeroSection } from "@/components/home/HeroSection";
import { ImageMarquee } from "@/components/home/ImageMarquee";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageMarquee />
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Browse with purpose</p>
              <h2 className="mt-2 text-3xl font-black text-navy sm:text-4xl">
                Find your next layer of security
              </h2>
            </div>
            <Link className="hidden font-bold text-blue sm:block" href="/store">
              View all products <ArrowRight className="ml-1 inline" size={17} />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                href={`/store/${c.slug}`}
                key={c.id}
                className="group relative overflow-hidden rounded-2xl bg-navy"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="aspect-square w-full object-cover opacity-65 transition group-hover:scale-105 group-hover:opacity-80 sm:aspect-[1.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                <div className="absolute bottom-0 p-3 text-white sm:p-5">
                  <h3 className="text-sm font-bold sm:text-lg">{c.name}</h3>
                  <p className="mt-1 hidden text-sm text-white/75 sm:block">
                    {c.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Popular picks</p>
              <h2 className="mt-2 text-3xl font-black text-navy sm:text-4xl">
                Equipment to get started
              </h2>
            </div>
            <Link className="hidden font-bold text-blue sm:block" href="/store">
              Shop the range <ArrowRight className="ml-1 inline" size={17} />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {products
              .filter((p) => p.featured)
              .slice(0, 4)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">More than equipment</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-navy">
              Security is a system, not a single camera.
            </h2>
            <p className="mt-5 leading-7 text-ink/65">
              From first assessment to ongoing support, we make the technical
              side clear and useful. Start with a product, a question or a
              conversation about your property.
            </p>
            <Link
              className="mt-7 inline-block rounded-full bg-navy px-6 py-3.5 font-bold text-white hover:bg-blue"
              href="/services"
            >
              Explore services <ArrowRight className="ml-2 inline" size={17} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((s, i) => (
              <Link
                href={`/services/${s.slug}`}
                key={s.slug}
                className="rounded-2xl border border-line p-6 transition hover:border-blue hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-blue">
                  {i % 2 ? <Wrench /> : <Eye />}
                </span>
                <h3 className="mt-5 font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{s.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-navy py-16 text-white">
        <div className="container grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-blue">Make the next step simple</p>
            <h2 className="mt-3 text-3xl font-black">
              Not sure what your property needs?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/65">
              Tell us what you want to monitor and we’ll help you shape a
              practical starting point. Our team will confirm the right solution
              and next steps with you.
            </p>
          </div>
          <Link
            className="rounded-full bg-blue px-7 py-4 text-center font-bold hover:bg-white hover:text-navy"
            href="/request-quote"
          >
            Request a quote
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Project thinking</p>
              <h2 className="mt-2 text-3xl font-black text-navy">
                Designed around real spaces
              </h2>
            </div>
            <Link className="font-bold text-blue" href="/projects">
              See gallery <ArrowRight className="ml-1 inline" size={17} />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <Link
                href={`/projects/${p.slug}`}
                key={p.slug}
                className="overflow-hidden rounded-2xl border border-line"
              >
                <img
                  className="aspect-[1.4] w-full object-cover"
                  src={p.image}
                  alt={p.title}
                />
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue">
                    {p.type}
                  </span>
                  <h3 className="mt-2 font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
