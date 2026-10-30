import { notFound } from "next/navigation";
const pages: Record<
  string,
  { title: string; intro: string; sections: [string, string][] }
> = {
  shipping: {
    title: "Shipping guide",
    intro:
      "Starter information for a future shipping policy. Confirm details before launch.",
    sections: [
      [
        "Delivery estimates",
        "Delivery timelines, areas, fees and fulfilment partners are not configured in this Phase 1 demo.",
      ],
      [
        "Confirmation",
        "Final delivery details should be confirmed with the business before payment or dispatch.",
      ],
    ],
  },
  returns: {
    title: "Returns",
    intro: "Starter returns information — this page is not legal advice.",
    sections: [
      [
        "Before purchase",
        "Inspect product compatibility and ask questions before purchasing.",
      ],
      [
        "Business confirmation required",
        "Return windows, exclusions, condition requirements and refunds must be confirmed before launch.",
      ],
    ],
  },
  privacy: {
    title: "Privacy",
    intro: "This demo does not send forms to a backend or require an account.",
    sections: [
      [
        "Demo behaviour",
        "Cart data may be stored locally in your browser. Checkout and enquiry forms are not transmitted by this site.",
      ],
      [
        "Before launch",
        "The business should publish a reviewed privacy notice covering its real data practices.",
      ],
    ],
  },
  terms: {
    title: "Terms of use",
    intro: "Starter terms for a Phase 1 demonstration website.",
    sections: [
      [
        "Illustrative content",
        "Catalog prices, inventory, projects and service claims are illustrative and must be verified.",
      ],
      [
        "Before launch",
        "Business terms, payment, delivery, returns and liability provisions should be reviewed and approved before launch.",
      ],
    ],
  },
};
export function generateStaticParams() {
  return Object.keys(pages).map((policy) => ({ policy }));
}
export default function Policy({ params }: { params: { policy: string } }) {
  const p = pages[params.policy];
  if (!p) {
    notFound();
    return null;
  }
  return (
    <div className="container max-w-3xl py-14">
      <p className="eyebrow">CCTV Care information</p>
      <h1 className="mt-3 text-4xl font-black text-navy">{p.title}</h1>
      <p className="mt-5 text-lg leading-8 text-ink/65">{p.intro}</p>
      <div className="mt-10 grid gap-5">
        {p.sections.map(([h, t]) => (
          <section className="rounded-2xl bg-mist p-6" key={h}>
            <h2 className="font-black text-navy">{h}</h2>
            <p className="mt-3 leading-7 text-ink/65">{t}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
