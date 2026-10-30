"use client";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-3xl font-black text-navy">Something went wrong</h1>
      <p className="mt-3 text-ink/60">Please try this page again.</p>
      <button
        className="mt-6 rounded-xl bg-blue px-6 py-3 font-bold text-white"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
