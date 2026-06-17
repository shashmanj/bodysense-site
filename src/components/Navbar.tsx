const LINKS = [
  { label: 'HOW IT WORKS', href: '#app' },
  { label: 'FEATURES', href: '#app' },
  { label: 'METHODOLOGY', href: '#app' },
  { label: 'TESTFLIGHT', href: '#cta' },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
      <a href="#top" className="font-inter text-[17px] font-semibold tracking-tight text-[#1f1d1a]">
        BodySense AI<sup className="ml-0.5 align-super text-[9px]">™</sup>
      </a>

      <nav className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] text-[#1f1d1a]/65 transition-colors duration-200 hover:text-[#1f1d1a]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://bodysenseai.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#1f1d1a] px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-[#f4f1ea] transition-transform duration-200 hover:scale-[1.03]"
      >
        GET THE APP
      </a>
    </header>
  )
}
