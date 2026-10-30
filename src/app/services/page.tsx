import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/catalog";
export default function Services() {
  return (
    <div className="container py-14">
      <p className="eyebrow">What we do</p>
      <h1 className="mt-3 text-4xl font-black text-navy sm:text-5xl">
        Practical security support, end to end.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/65">
        From planning a first system to keeping an existing one dependable, our
        services are designed to make the technical side clear.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <Link
            className="group grid overflow-hidden rounded-2xl border border-line sm:grid-cols-[.8fr_1.2fr]"
            href={`/services/${s.slug}`}
            key={s.slug}
          >
            <img
              className="h-full min-h-48 w-full object-cover"
              src={s.image}
              alt=""
            />
            <div className="p-6">
              <h2 className="text-xl font-black text-navy">{s.name}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/65">{s.intro}</p>
              <span className="mt-5 inline-block font-bold text-blue">
                Explore service <ArrowRight className="ml-1 inline" size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
