export function Footer() {
  return (
    <footer className="relative isolate px-6 py-24 text-center">
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-black" />
      <div className="relative z-10 mx-auto max-w-2xl">
        <h3 className="font-inter text-3xl font-medium tracking-[-0.02em] md:text-4xl">
          Understand your body. <span className="text-white/55">Live your way.</span>
        </h3>
        <a
          href="https://bodysenseai.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]"
        >
          Join the TestFlight
        </a>
        <p className="mt-12 text-[11px] font-medium tracking-[0.16em] text-white/40">
          © 2026 BODYSENSE AI · MADE IN MANCHESTER
        </p>
      </div>
    </footer>
  )
}
