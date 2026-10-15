export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 text-center">
      <p className="mb-4 inline-block rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
        Next.js 14 · TypeScript · Tailwind CSS
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        Build faster with a clean foundation
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
        A production-ready starter with App Router, strict TypeScript, Tailwind,
        API routes, CI, and Vercel deployment — ready to extend.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href="https://github.com/mdjahid11978-design/hello-world"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          View on GitHub
        </a>
        <a
          href="/api/hello"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold hover:bg-gray-50"
        >
          Try the API
        </a>
      </div>
    </section>
  );
}
