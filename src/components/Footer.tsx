export function Footer() {
  return (
    <footer className="relative isolate px-6 py-24 text-center">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#f4f1ea]" />
      <div className="relative z-10 mx-auto max-w-2xl">
        <h3 className="font-inter text-3xl font-medium tracking-[-0.02em] text-[#1f1d1a] md:text-4xl">
          Understand your body. <span className="text-[#1f1d1a]/45">Live your way.</span>
        </h3>
        <a
          href="https://bodysenseai.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#1f1d1a] px-8 py-3.5 text-[15px] font-medium text-[#f4f1ea] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_44px_-16px_rgba(31,29,26,0.55)] active:scale-[0.97]"
        >
          Join the TestFlight
        </a>
        <p className="mt-12 text-[11px] font-medium tracking-[0.16em] text-[#1f1d1a]/40">
          © 2026 BODYSENSE AI · MADE IN MANCHESTER
        </p>
      </div>
    </footer>
  )
}
