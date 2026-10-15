export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">H</span>
          Hello World
        </a>
        <a
          href="https://github.com/mdjahid11978-design/hello-world"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
