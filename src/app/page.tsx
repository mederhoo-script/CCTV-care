import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { categories, products, projects, services } from "@/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { images } from "@/config/images";
export default function Home() {
  return (
    <>
      <section className="grid-pattern overflow-hidden bg-mist">
        <div className="container grid items-center gap-6 py-8 md:grid-cols-[1.05fr_.95fr] md:gap-10 md:py-12">
          <div>
            <p className="eyebrow">Surveillance, made dependable</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-black leading-[1.04] tracking-tight text-navy sm:text-5xl">
              See what matters.{" "}
              <span className="text-blue">Secure what counts.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink/70 sm:text-lg">
              Professional CCTV installation, quality equipment and practical
              support for homes and businesses across Nigeria.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                className="rounded-full bg-blue px-5 py-3 text-sm font-bold text-white hover:bg-navy"
                href="/store"
              >
                Explore CCTV store{" "}
                <ArrowRight className="ml-1 inline" size={16} />
              </Link>
              <Link
                className="rounded-full border border-navy/20 bg-white px-5 py-3 text-sm font-bold text-navy hover:border-blue hover:text-blue"
                href="/request-quote"
              >
                Request a quote
              </Link>
            </div>
            <div className="mt-5 hidden flex-wrap gap-5 text-sm font-bold text-navy sm:flex">
              <span>
                <CheckCircle2 className="mr-1 inline text-blue" size={17} />{" "}
                Demo-ready catalogue
              </span>
              <span>
                <CheckCircle2 className="mr-1 inline text-blue" size={17} />{" "}
                Nationwide coverage
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <img
                className="h-44 w-full object-cover sm:h-64 md:h-72"
                src={images.heroSlides[0].src}
                alt={images.heroSlides[0].alt}
              />
            </div>
            <div className="absolute bottom-3 left-3 rounded-xl bg-navy/95 px-3 py-2 text-white shadow-xl sm:bottom-5 sm:left-5 sm:px-5 sm:py-3">
              <div className="mb-1 flex items-center gap-2 text-blue">
                <ShieldCheck size={15} />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Built around clarity
                </span>
              </div>
              <strong className="text-sm sm:text-base">
                A plan for every property
              </strong>
            </div>
          </div>
        </div>
        <div className="container pb-7 md:pb-10">
          <HeroCarousel />
        </div>
      </section>
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                href={`/store/${c.slug}`}
                key={c.id}
                className="group relative overflow-hidden rounded-2xl bg-navy"
              >
                <img
                  src={c.image}
                  alt=""
                  className="aspect-[1.5] w-full object-cover opacity-65 transition group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <p className="mt-1 text-sm text-white/75">{c.description}</p>
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
              practical starting point. This demo form does not submit to a
              backend.
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
