"use client";
import { faqs } from "@/data/catalog";
import { useState } from "react";
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="container max-w-3xl py-14">
      <p className="eyebrow">Questions, answered</p>
      <h1 className="mt-3 text-4xl font-black text-navy">
        Frequently asked questions
      </h1>
      <div className="mt-10 divide-y divide-line rounded-2xl border border-line">
        {faqs.map((f, i) => (
          <div key={f.question}>
            <button
              className="flex w-full items-center justify-between gap-5 p-5 text-left font-bold"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{f.question}</span>
              <span className="text-2xl text-blue">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p className="px-5 pb-5 text-sm leading-7 text-ink/65">
                {f.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
