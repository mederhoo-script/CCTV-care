"use client";
import { useState } from "react";
import { site } from "@/config/site";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container py-14">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Contact CCTV Care</p>
          <h1 className="mt-3 text-4xl font-black text-navy">
            Let’s talk about your security needs.
          </h1>
          <p className="mt-5 leading-8 text-ink/65">
            Use the enquiry form or contact details below. Choose WhatsApp after
            completing the form to send your message to the team.
          </p>
          <div className="mt-8 grid gap-4 text-sm">
            <a
              className="rounded-xl bg-mist p-4 font-bold"
              href={`tel:${site.phone}`}
            >
              Phone: {site.phone}
            </a>
            <a
              className="rounded-xl bg-mist p-4 font-bold"
              href={`mailto:${site.email}`}
            >
              Email: {site.email}
            </a>
            <div className="rounded-xl bg-mist p-4 font-bold">
              {site.location}
            </div>
          </div>
        </div>
        <form
          className="rounded-2xl border border-line p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block">
            <span className="mb-2 block text-sm font-bold">Name</span>
            <input
              required
              className="w-full rounded-xl border border-line px-4 py-3"
            />
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-bold">Email</span>
            <input
              required
              type="email"
              className="w-full rounded-xl border border-line px-4 py-3"
            />
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-bold">Message</span>
            <textarea
              required
              rows={6}
              className="w-full rounded-xl border border-line px-4 py-3"
            />
          </label>
          {sent ? (
            <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800">
              Your enquiry is ready. It has not been sent until you choose to
              continue with the business team.
            </p>
          ) : (
            <button className="mt-5 rounded-xl bg-blue px-6 py-3 font-bold text-white">
              Prepare enquiry
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
