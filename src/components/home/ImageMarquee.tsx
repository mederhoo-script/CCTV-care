import Link from "next/link";
import { images } from "@/config/images";

const items = [
  {
    src: images.heroSlides[0].src,
    alt: images.heroSlides[0].alt,
    title: "Outdoor protection",
    href: "/store/cameras",
  },
  {
    src: images.heroSlides[1].src,
    alt: images.heroSlides[1].alt,
    title: "Clear visibility",
    href: "/store/cameras",
  },
  {
    src: images.heroSlides[2].src,
    alt: images.heroSlides[2].alt,
    title: "Home security",
    href: "/store/kits",
  },
  {
    src: images.product.outdoorBullet,
    alt: "Outdoor bullet CCTV camera",
    title: "Bullet cameras",
    href: "/store/cameras",
  },
  {
    src: images.product.indoorDome,
    alt: "Indoor dome CCTV camera",
    title: "Dome cameras",
    href: "/store/cameras",
  },
  {
    src: images.product.dualLens,
    alt: "Dual lens CCTV camera",
    title: "4K IP systems",
    href: "/store/cameras",
  },
  {
    src: images.references.office,
    alt: "Business surveillance camera installation",
    title: "Business coverage",
    href: "/services/business-surveillance",
  },
  {
    src: images.product.homeCamera,
    alt: "Residential CCTV camera",
    title: "Residential kits",
    href: "/store/kits",
  },
];

export function ImageMarquee() {
  return (
    <div className="image-marquee border-y border-line bg-mist py-3">
      <div className="image-marquee-track">
        {[...items, ...items].map((item, index) => (
          <Link
            href={item.href}
            key={`${item.src}-${index}`}
            className="group mx-1.5 block h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 sm:h-24 sm:w-36"
          >
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061522]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-2 py-1.5 text-left text-[10px] font-bold text-white sm:text-xs">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
