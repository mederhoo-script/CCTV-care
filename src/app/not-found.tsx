import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-black text-navy">
        That page is out of view.
      </h1>
      <p className="mt-3 text-ink/60">
        The product, service or page you requested could not be found.
      </p>
      <Link
        className="mt-7 inline-block rounded-xl bg-blue px-6 py-3 font-bold text-white"
        href="/"
      >
        Return home
      </Link>
    </div>
  );
}
