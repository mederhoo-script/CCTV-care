import Link from "next/link";
export default function About() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl">
        <p className="eyebrow">About CCTV Care</p>
        <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">
          Security work should feel clear, considered and dependable.
        </h1>
        <p className="mt-6 text-lg leading-8 text-ink/65">
          CCTV Care is a Phase 1 demo experience for a Nigerian surveillance
          business offering equipment, installation, maintenance and practical
          technical support.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [
              "Clarity",
              "We explain options in plain language so decisions feel informed.",
            ],
            [
              "Care",
              "We think about the people, property and routines behind every system.",
            ],
            [
              "Reliability",
              "We focus on sensible equipment, tidy work and support that helps.",
            ],
          ].map(([h, t]) => (
            <div className="rounded-2xl bg-mist p-6" key={h}>
              <h2 className="font-black text-navy">{h}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">{t}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 leading-8 text-ink/65">
          Our advertised service coverage is nationwide. Specific availability,
          business details, pricing, operating hours and credentials should be
          confirmed by the business before launch.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-xl bg-blue px-6 py-3 font-bold text-white"
            href="/store"
          >
            Browse the store
          </Link>
          <Link
            className="rounded-xl border border-line px-6 py-3 font-bold"
            href="/services"
          >
            Explore services
          </Link>
        </div>
      </div>
    </div>
  );
}
