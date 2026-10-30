import { Category, FAQ, Product, Project, Service } from "@/types";
import { images } from "@/config/images";
export const categories: Category[] = [
  {
    id: "cameras",
    slug: "cameras",
    name: "CCTV Cameras",
    description: "Indoor, outdoor, dome and IP cameras for every view.",
    image: images.product.outdoorBullet,
  },
  {
    id: "recorders",
    slug: "recorders",
    name: "DVR & NVR Recorders",
    description: "Reliable recording and remote access at your fingertips.",
    image: images.product.isolated,
  },
  {
    id: "kits",
    slug: "kits",
    name: "Complete CCTV Kits",
    description: "Everything you need for a straightforward installation.",
    image: images.product.wireless,
  },
  {
    id: "accessories",
    slug: "accessories",
    name: "Cables & Accessories",
    description: "The small essentials that make systems dependable.",
    image: images.product.dualLens,
  },
  {
    id: "storage",
    slug: "storage",
    name: "Storage",
    description: "Surveillance-rated storage for continuous recording.",
    image: images.product.isolated,
  },
  {
    id: "networking",
    slug: "networking",
    name: "Networking & Power",
    description: "Power, connectivity and PoE for modern security systems.",
    image: images.product.homeCamera,
  },
];
const productImage = (slug: string, categoryId: string) => {
  if (slug.includes("dome")) return images.product.indoorDome;
  if (slug.includes("dual") || slug.includes("ip-"))
    return images.product.dualLens;
  if (slug.includes("wireless") || slug.includes("ptz")) {
    return images.product.wireless;
  }
  if (categoryId === "cameras") return images.product.outdoorBullet;
  if (categoryId === "kits") return images.product.homeCamera;
  return images.product.isolated;
};
const products: Product[] = [
  [
    "hd-bullet-2mp",
    "2MP Outdoor Bullet Camera",
    "Weather-ready night vision camera.",
    45000,
    "cameras",
    "Hikvision",
    ["1080p", "IP67", "30m IR"],
    "in-stock",
  ],
  [
    "dome-4mp",
    "4MP Indoor Dome Camera",
    "Discreet high-definition indoor coverage.",
    62000,
    "cameras",
    "Dahua",
    ["4MP", "Smart IR", "IK10"],
    "in-stock",
  ],
  [
    "ip-turret-5mp",
    "5MP IP Turret Camera",
    "Sharp IP video with smart motion detection.",
    98000,
    "cameras",
    "Hikvision",
    ["5MP", "PoE", "40m IR"],
    "limited",
  ],
  [
    "colorvu-4mp",
    "4MP ColorVu Night Camera",
    "Colour detail in low-light environments.",
    145000,
    "cameras",
    "Hikvision",
    ["4MP", "Full-colour night", "IP67"],
    "pre-order",
  ],
  [
    "ptz-mini",
    "Mini PTZ Camera",
    "Flexible pan, tilt and zoom monitoring.",
    185000,
    "cameras",
    "Dahua",
    ["4x optical zoom", "Wi-Fi", "Human detection"],
    "limited",
  ],
  [
    "4ch-dvr",
    "4-Channel 1080p DVR",
    "Compact recorder for smaller properties.",
    85000,
    "recorders",
    "Hikvision",
    ["4 channels", "H.265+", "Remote view"],
    "in-stock",
  ],
  [
    "8ch-dvr",
    "8-Channel 5MP DVR",
    "Room to grow with dependable recording.",
    135000,
    "recorders",
    "Dahua",
    ["8 channels", "5MP", "1 SATA bay"],
    "in-stock",
  ],
  [
    "8ch-nvr",
    "8-Channel PoE NVR",
    "Plug-and-play IP recording with PoE.",
    210000,
    "recorders",
    "Hikvision",
    ["8 PoE ports", "4K output", "H.265+"],
    "limited",
  ],
  [
    "16ch-nvr",
    "16-Channel Network Video Recorder",
    "Central recording for larger systems.",
    315000,
    "recorders",
    "Hikvision",
    ["16 channels", "4K", "2 SATA bays"],
    "in-stock",
  ],
  [
    "4-camera-kit",
    "4-Camera Home Kit",
    "A practical starter kit for home security.",
    385000,
    "kits",
    "CCTV Care",
    ["4 cameras", "4ch DVR", "1TB HDD"],
    "in-stock",
  ],
  [
    "8-camera-kit",
    "8-Camera Business Kit",
    "Complete coverage for growing businesses.",
    720000,
    "kits",
    "CCTV Care",
    ["8 cameras", "8ch DVR", "2TB HDD"],
    "limited",
  ],
  [
    "ip-4-camera-kit",
    "4-Camera PoE IP Kit",
    "Modern IP surveillance made simple.",
    680000,
    "kits",
    "CCTV Care",
    ["4 IP cameras", "PoE NVR", "2TB HDD"],
    "pre-order",
  ],
  [
    "surveillance-1tb",
    "1TB Surveillance HDD",
    "Built for always-on recording workloads.",
    78000,
    "storage",
    "Western Digital",
    ["1TB", "SATA", "24/7 rated"],
    "in-stock",
  ],
  [
    "surveillance-2tb",
    "2TB Surveillance HDD",
    "More retention for busy systems.",
    125000,
    "storage",
    "Seagate",
    ["2TB", "SATA", "24/7 rated"],
    "in-stock",
  ],
  [
    "cat6-305m",
    "Cat6 Network Cable 305m",
    "Reliable cable for IP camera runs.",
    165000,
    "accessories",
    "D-Link",
    ["305m", "Solid copper", "23AWG"],
    "in-stock",
  ],
  [
    "bnc-pack",
    "BNC Connectors (20 pack)",
    "Secure terminations for coaxial systems.",
    12000,
    "accessories",
    "CCTV Care",
    ["20 pieces", "Twist-on", "RG59 compatible"],
    "in-stock",
  ],
  [
    "12v-power",
    "12V CCTV Power Supply",
    "Stable regulated power for cameras.",
    28000,
    "networking",
    "CCTV Care",
    ["12V 10A", "Metal case", "Fused"],
    "in-stock",
  ],
  [
    "8-port-poe",
    "8-Port PoE Switch",
    "Power and connect IP cameras neatly.",
    115000,
    "networking",
    "TP-Link",
    ["8 PoE ports", "120W", "Gigabit uplink"],
    "in-stock",
  ],
  [
    "ups-security",
    "Security Systems UPS",
    "Keep recording through short power cuts.",
    145000,
    "networking",
    "APC",
    ["650VA", "AVR", "6 outlets"],
    "limited",
  ],
  [
    "camera-bracket",
    "Universal Camera Bracket",
    "Adjustable wall and ceiling mount.",
    18000,
    "accessories",
    "CCTV Care",
    ["Metal", "Adjustable", "Outdoor ready"],
    "in-stock",
  ],
].map(
  (
    [
      slug,
      name,
      shortDescription,
      priceNGN,
      categoryId,
      brand,
      specs,
      availability,
    ],
    i,
  ) => ({
    id: `p-${i + 1}`,
    slug: slug as string,
    name: name as string,
    shortDescription: shortDescription as string,
    description: `${name} is a carefully selected demo product for dependable surveillance installations. Talk to our team for compatibility guidance and a tailored recommendation for your property.`,
    priceNGN: priceNGN as number,
    compareAtPriceNGN: i % 4 === 0 ? (priceNGN as number) + 18000 : undefined,
    categoryId: categoryId as string,
    brand: brand as string,
    images: [productImage(slug as string, categoryId as string)],
    specifications: Object.fromEntries(
      (specs as string[]).map((s, j) => [`Feature ${j + 1}`, s]),
    ),
    featured: i < 8,
    availability: availability as Product["availability"],
    badges: i < 3 ? ["Popular"] : undefined,
    sku: `CC-${String(i + 1).padStart(3, "0")}`,
  }),
);
export const services: Service[] = [
  {
    slug: "cctv-installation",
    name: "CCTV installation",
    intro:
      "A considered installation designed around how your property is used.",
    description:
      "From camera placement to secure cabling and system handover, we help you build a surveillance setup that makes sense.",
    benefits: [
      "Purposeful camera placement",
      "Neat, labelled installation",
      "Practical user handover",
    ],
    scope: [
      "Site and coverage review",
      "Camera and recorder installation",
      "Mobile viewing setup",
    ],
    image: images.references.installation,
  },
  {
    slug: "maintenance-repairs",
    name: "Maintenance & repairs",
    intro: "Keep your security system ready when you need it.",
    description:
      "Routine checks and responsive troubleshooting help reduce blind spots, downtime and avoidable equipment failures.",
    benefits: ["Health checks", "Fault diagnosis", "Clear recommendations"],
    scope: [
      "Camera and cable inspection",
      "Storage and recorder checks",
      "Cleaning and configuration",
    ],
    image: images.references.installation,
  },
  {
    slug: "system-upgrades",
    name: "System upgrades",
    intro: "Modernise an existing system without replacing everything.",
    description:
      "We can assess older installations and recommend sensible upgrades for image quality, storage, remote access or coverage.",
    benefits: ["Phased upgrades", "Compatibility advice", "Better visibility"],
    scope: [
      "Current system audit",
      "Upgrade planning",
      "Installation and testing",
    ],
    image: images.references.office,
  },
  {
    slug: "site-assessments",
    name: "Site assessments & design",
    intro: "Start with a clear plan for the right coverage.",
    description:
      "A structured assessment turns your security goals into a practical equipment and installation plan.",
    benefits: ["Coverage planning", "Equipment guidance", "Transparent scope"],
    scope: [
      "Needs discussion",
      "Risk and access review",
      "Written recommendation",
    ],
    image: images.references.installation,
  },
  {
    slug: "remote-viewing",
    name: "Remote viewing configuration",
    intro: "Check in on your property from wherever you are.",
    description:
      "We configure supported systems for secure remote access and explain the controls your team needs.",
    benefits: ["Remote visibility", "User guidance", "Privacy-aware setup"],
    scope: ["Network review", "App configuration", "Access walkthrough"],
    image: images.references.office,
  },
  {
    slug: "business-surveillance",
    name: "Business surveillance",
    intro: "Support safer operations with visibility that works.",
    description:
      "From shops and offices to warehouses, we design business surveillance around people, assets and operational routines.",
    benefits: [
      "Scalable coverage",
      "Business-focused design",
      "Support options",
    ],
    scope: ["Site assessment", "System design", "Installation and support"],
    image: images.references.office,
  },
  {
    slug: "residential-surveillance",
    name: "Residential surveillance",
    intro: "Feel more informed about the places that matter.",
    description:
      "Thoughtful home surveillance can help you monitor entrances, shared spaces and important boundaries.",
    benefits: [
      "Simple controls",
      "Discreet options",
      "Family-friendly guidance",
    ],
    scope: ["Home coverage review", "Installation", "Handover and support"],
    image: images.references.home,
  },
  {
    slug: "technical-support",
    name: "Technical support",
    intro: "Helpful answers when your system needs attention.",
    description:
      "Get practical help with configuration, viewing issues and general system guidance.",
    benefits: [
      "Clear explanations",
      "Remote guidance where possible",
      "Escalation advice",
    ],
    scope: [
      "Issue discovery",
      "Configuration support",
      "Next-step recommendations",
    ],
    image: images.references.office,
  },
];
export const projects: Project[] = [
  {
    slug: "home-coverage-demo",
    title: "Home coverage concept",
    type: "Residential",
    location: "Demo project",
    description:
      "A considered four-camera concept focused on entrances and shared outdoor areas.",
    image: images.references.home,
    demo: true,
  },
  {
    slug: "retail-visibility-demo",
    title: "Retail visibility concept",
    type: "Business",
    location: "Demo project",
    description:
      "A practical layout concept for point-of-sale, entrances and customer areas.",
    image: images.references.office,
    demo: true,
  },
  {
    slug: "warehouse-monitoring-demo",
    title: "Warehouse monitoring concept",
    type: "Industrial",
    location: "Demo project",
    description:
      "A scalable surveillance approach for wide spaces and key access points.",
    image: images.references.installation,
    demo: true,
  },
];
export const faqs: FAQ[] = [
  {
    category: "Services",
    question: "Do you install systems purchased elsewhere?",
    answer:
      "Yes, subject to a compatibility and site assessment. We will explain any risks or additional requirements before work begins.",
  },
  {
    category: "Services",
    question: "Can you help me choose the right cameras?",
    answer:
      "Absolutely. Share your property type, areas of concern and preferred viewing needs and we can recommend a practical starting point.",
  },
  {
    category: "Store",
    question: "Are the prices on the store live inventory prices?",
    answer:
      "No. These are illustrative demo prices for Phase 1. Confirmed availability and pricing should be agreed before purchase.",
  },
  {
    category: "Store",
    question: "How do I ask about a product?",
    answer:
      "Use the product enquiry action or contact the team. In demo mode, WhatsApp actions only open a prefilled message when a number is configured.",
  },
  {
    category: "Support",
    question: "Do you offer maintenance after installation?",
    answer:
      "Maintenance and troubleshooting are part of our service offering. Request a quote to discuss a suitable support arrangement.",
  },
  {
    category: "Demo",
    question: "Is checkout a real payment flow?",
    answer:
      "No. Checkout is a front-end demonstration. The current handoff prepares a WhatsApp message and does not charge a card or create an order.",
  },
];
export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
export { products };
