export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Hello World. Built with Next.js, TypeScript, and Tailwind CSS.
      </div>
    </footer>
  );
}
