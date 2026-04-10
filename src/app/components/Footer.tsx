export function Footer() {
  return (
    <footer className="py-8 border-t border-neutral-900">
      <div className="flex justify-between items-center">
        <a
          href="/privacy"
          className="text-neutral-600 text-xs hover:text-white transition-colors"
        >
          Privacy Policy
        </a>
        <span className="text-neutral-700 text-xs">
          © 2026 Just One Thing
        </span>
      </div>
    </footer>
  )
}
