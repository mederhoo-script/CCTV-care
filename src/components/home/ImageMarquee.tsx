import { images } from "@/config/images";

const items = [
  ...images.heroSlides,
  {
    src: images.product.outdoorBullet,
    alt: "Outdoor bullet CCTV camera",
  },
  {
    src: images.product.indoorDome,
    alt: "Indoor dome CCTV camera",
  },
  {
    src: images.product.dualLens,
    alt: "Dual lens CCTV camera",
  },
  {
    src: images.references.office,
    alt: "Business surveillance camera installation",
  },
];

export function ImageMarquee() {
  return (
    <div className="image-marquee border-y border-line bg-mist py-3">
      <div className="image-marquee-track">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className="mx-1.5 h-20 w-28 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
