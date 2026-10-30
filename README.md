# CCTV Care

Phase 1 is a static, responsive Next.js frontend for CCTV Care. It runs without a database, authentication, payment provider, logistics API, or environment variables.

## Run locally

```bash
npm install
npm run dev
```

Validation commands:

```bash
npm run typecheck
npm run build
```

The project uses the App Router, TypeScript strict mode, Tailwind CSS and Lucide React. The `/src/data/catalog.ts` file contains all illustrative products, categories, services, projects and FAQs. Business details and the optional WhatsApp number are centralized in `/src/config/site.ts`.

Local image assets live under `/public/images`:

- `brand/` contains the CCTV Care logo.
- `heroes/` contains the selected installation and camera images used by the homepage hero.
- `products/` contains product imagery used by catalog cards and product pages.
- `references/` contains the remaining supplied catalog/reference images with normalized filenames.

The active image map is centralized in `/src/config/images.ts`, so replacing an image does not require searching through page components.

## WhatsApp checkout

The cart and checkout are local browser demonstrations. Checkout validates the form, builds a readable cart enquiry and opens WhatsApp only when `site.whatsapp` is configured with a verified destination number. It does not create an order, charge a card, reserve inventory or transmit data to a backend.

## Architecture

`src/lib/data/contracts.ts` defines the repository boundary and `src/lib/data/providers/static-provider.ts` is the only active provider. A future Supabase provider can implement the same contract without making UI components database-aware.

## Phase 2 intentionally deferred

- Supabase schema, reads/writes, authentication and authorization
- Admin and inventory management
- Payment initialization and server-side verification
- Logistics rates, shipment creation and tracking
- Persisted orders, quotes, customers and service requests
- Production legal, business contact, stock and pricing confirmation

All project examples, prices and imagery in this phase are illustrative demo content and should be verified before launch.
