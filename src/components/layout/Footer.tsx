import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { images } from "@/config/images";
export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={images.logo}
              alt="CCTV Care"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <strong className="text-xl">CCTV Care</strong>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/65">
            {site.description}
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Explore</h3>
          <div className="grid gap-3 text-sm text-white/65">
            <Link href="/store">CCTV store</Link>
            <Link href="/services">Our services</Link>
            <Link href="/projects">Project gallery</Link>
            <Link href="/faq">FAQs</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Information</h3>
          <div className="grid gap-3 text-sm text-white/65">
            <Link href="/about">About CCTV Care</Link>
            <Link href="/shipping">Shipping guide</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Talk to the team</h3>
          <div className="grid gap-3 text-sm text-white/65">
            <span className="flex gap-2">
              <MapPin size={17} className="shrink-0 text-blue" />
              {site.location}
            </span>
            <a className="flex gap-2" href={`tel:${site.phone}`}>
              <Phone size={17} className="text-blue" />
              {site.phone}
            </a>
            <a className="flex gap-2" href={`mailto:${site.email}`}>
              <Mail size={17} className="text-blue" />
              {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} CCTV Care. Phase 1 demo experience —
        Design By MEDERHOO.
      </div>
    </footer>
  );
}
