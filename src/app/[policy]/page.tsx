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
        "Delivery timelines, areas, fees and fulfilment partners will be confirmed with the business.",
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
    intro:
      "This website does not require an account. Contact details are only shared when you choose to continue an enquiry.",
    sections: [
      [
        "Website behaviour",
        "Cart data may be stored locally in your browser. Checkout and enquiry details are only shared when you choose to continue through WhatsApp.",
      ],
      [
        "Before launch",
        "The business should publish a reviewed privacy notice covering its real data practices.",
      ],
    ],
  },
  terms: {
    title: "Terms of use",
    intro:
      "These terms provide general guidance for using the CCTV Care website.",
    sections: [
      [
        "Illustrative content",
        "Catalog prices, inventory, project details and service claims should be confirmed with the business before purchase or engagement.",
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
