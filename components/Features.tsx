const features = [
  {
    title: "App Router",
    description: "File-based routing with React Server Components and layouts.",
  },
  {
    title: "TypeScript Strict",
    description: "Type-safe by default with strict compiler options enabled.",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first styling with a clean, customizable theme.",
  },
  {
    title: "API Routes",
    description: "Built-in API endpoints with the App Router route handlers.",
  },
  {
    title: "CI Ready",
    description: "GitHub Actions workflow that builds on every push and PR.",
  },
  {
    title: "Vercel Ready",
    description: "One-click deployment with zero extra configuration.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
