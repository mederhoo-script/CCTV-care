"use client";
import { useState } from "react";
import { site } from "@/config/site";
import { whatsappUrl } from "@/lib/utils";
export default function Quote() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "CCTV installation",
    property: "Residential",
    cameras: "",
    contact: "WhatsApp",
    location: "",
    description: "",
  });
  const [error, setError] = useState("");
  const set = (k: string, v: string) => setForm({ ...form, [k]: v });
  const link = whatsappUrl(
    `Hello CCTV Care, I would like to request a quote.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nProperty: ${form.property}\nLocation: ${form.location}\nProject: ${form.description}`,
  );
  return (
    <div className="container max-w-4xl py-14">
      <p className="eyebrow">Start a conversation</p>
      <h1 className="mt-3 text-4xl font-black text-navy">Request a quote</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/65">
        Tell us a little about the property and what you want to achieve. Our
        team will review your enquiry and follow up with the next steps.
      </p>
      <form
        className="mt-9 rounded-2xl border border-line p-6 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            !form.name ||
            !form.phone ||
            !form.location ||
            !form.description
          ) {
            setError("Please complete the required fields.");
            return;
          }
          setError("");
          setSent(true);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["name", "Full name"],
            ["phone", "Phone number"],
            ["email", "Email address"],
            ["location", "Property location"],
          ].map(([k, l]) => (
            <label key={k}>
              <span className="mb-1.5 block text-sm font-bold">
                {l}
                {k !== "email" && " *"}
              </span>
              <input
                required={k !== "email"}
                type={k === "email" ? "email" : "text"}
                value={form[k as keyof typeof form]}
                onChange={(e) => set(k, e.target.value)}
                className="w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-blue"
              />
            </label>
          ))}
          <label>
            <span className="mb-1.5 block text-sm font-bold">
              Service type *
            </span>
            <select
              value={form.service}
              onChange={(e) => set("service", e.target.value)}
              className="w-full rounded-xl border border-line px-4 py-3"
            >
              {[
                "CCTV installation",
                "Maintenance & repairs",
                "System upgrades",
                "Site assessment",
                "Remote viewing",
                "Business surveillance",
                "Residential surveillance",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="mb-1.5 block text-sm font-bold">
              Property type
            </span>
            <select
              value={form.property}
              onChange={(e) => set("property", e.target.value)}
              className="w-full rounded-xl border border-line px-4 py-3"
            >
              <option>Residential</option>
              <option>Business</option>
              <option>Industrial</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            <span className="mb-1.5 block text-sm font-bold">
              Number of cameras
            </span>
            <input
              value={form.cameras}
              onChange={(e) => set("cameras", e.target.value)}
              className="w-full rounded-xl border border-line px-4 py-3"
              placeholder="e.g. 6"
            />
          </label>
          <label>
            <span className="mb-1.5 block text-sm font-bold">
              Preferred contact
            </span>
            <select
              value={form.contact}
              onChange={(e) => set("contact", e.target.value)}
              className="w-full rounded-xl border border-line px-4 py-3"
            >
              <option>WhatsApp</option>
              <option>Phone</option>
              <option>Email</option>
            </select>
          </label>
        </div>
        <label className="mt-4 block">
          <span className="mb-1.5 block text-sm font-bold">
            Project description *
          </span>
          <textarea
            required
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-line px-4 py-3"
            placeholder="What would you like to monitor?"
          />
        </label>
        {error && (
          <p className="mt-4 text-sm font-bold text-red-600" role="alert">
            {error}
          </p>
        )}
        {sent ? (
          <div className="mt-6 rounded-xl bg-emerald-50 p-5 text-sm leading-6 text-emerald-800">
            Your request has been prepared for follow-up. It has not been sent
            until you choose to continue in WhatsApp.
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block font-bold underline"
              >
                Continue in WhatsApp
              </a>
            )}
            {!link && (
              <p className="mt-2 text-amber-700">
                Configure the WhatsApp number in site settings to enable the
                handoff.
              </p>
            )}
          </div>
        ) : (
          <button className="mt-6 rounded-xl bg-blue px-6 py-3.5 font-bold text-white hover:bg-navy">
            Prepare enquiry
          </button>
        )}
      </form>
    </div>
  );
}
