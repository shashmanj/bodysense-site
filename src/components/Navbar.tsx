const LINKS = [
  { label: 'HOW IT WORKS', href: '#app' },
  { label: 'FEATURES', href: '#app' },
  { label: 'METHODOLOGY', href: '#app' },
  { label: 'TESTFLIGHT', href: '#cta' },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
      <a href="#top" className="font-inter text-[17px] font-semibold tracking-tight text-white">
        BodySense AI<sup className="ml-0.5 align-super text-[9px]">™</sup>
      </a>

      <nav className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://bodysenseai.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="liquid-glass rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors hover:text-white"
      >
        GET THE APP
      </a>
    </header>
  )
}
