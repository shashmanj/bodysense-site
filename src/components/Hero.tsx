import { useEffect, useState } from 'react'
import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-between px-6 pb-14 pt-32 text-center"
    >
      <div
        className={cn(
          'transition-all duration-1000',
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        )}
      >
        <h1
          className="font-inter font-normal leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(40px, 5.4vw, 72px)' }}
        >
          <span className="block text-white">Understand your body.</span>
          <span className="block text-white/55">Live your way.</span>
        </h1>
      </div>

      <div
        id="cta"
        className={cn(
          'flex flex-col items-center gap-6 transition-all delay-300 duration-1000',
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        )}
      >
        <p className="max-w-[620px] text-[15px] leading-relaxed text-white">
          BodySense AI reads your real signals — glucose, blood pressure, HRV, sleep — and turns them
          into simple daily guidance.
          <span className="text-white/55"> Tailored to your body, grounded in NHS NICE.</span>
        </p>

        <a
          href="https://bodysenseai.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]"
        >
          Join the TestFlight
        </a>

        <div className="flex items-center gap-2 text-white/70">
          <Lock size={13} strokeWidth={1.5} />
          <span className="text-[11px] font-medium tracking-[0.14em]">
            PRIVATE BY DESIGN. ON-DEVICE FIRST.
          </span>
        </div>
      </div>
    </section>
  )
}
