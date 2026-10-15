export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="font-bold text-lg">Hello World</span>
        <nav className="text-sm text-gray-400">
          <a href="https://github.com/mdjahid11978-design/hello-world" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
