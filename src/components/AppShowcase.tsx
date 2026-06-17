import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

const BASE = import.meta.env.BASE_URL

const SCREENS = [
  {
    src: `${BASE}screen-1.png`,
    glow: 'bg-emerald-400/25',
    rotateY: 20,
    z: 0,
    baseY: 12,
    pScroll: 70,
    pMouseX: 16,
    pMouseY: 10,
    width: 'w-[140px] sm:w-[210px]',
  },
  {
    src: `${BASE}screen-2.png`,
    glow: 'bg-amber-400/25',
    rotateY: 0,
    z: 90,
    baseY: -28,
    pScroll: 26,
    pMouseX: 28,
    pMouseY: 20,
    width: 'w-[160px] sm:w-[250px]',
  },
  {
    src: `${BASE}screen-3.png`,
    glow: 'bg-sky-400/25',
    rotateY: -20,
    z: 0,
    baseY: 12,
    pScroll: 70,
    pMouseX: 16,
    pMouseY: 10,
    width: 'w-[140px] sm:w-[210px]',
  },
]

const CHIPS = ['Predictions & early warnings', 'Daily AI guidance', 'Trends & wearable insights']

export function AppShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([])
  const [shown, setShown] = useState(false)

  // reveal on scroll into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // parallax: per-screen depth drift on scroll + mouse, plus a gentle group tilt
  useEffect(() => {
    const section = sectionRef.current
    const group = groupRef.current
    if (!section || !group) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let tmx = 0
    let tmy = 0
    let mx = 0
    let my = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tmx = e.clientX / window.innerWidth - 0.5
      tmy = e.clientY / window.innerHeight - 0.5
    }

    const tick = () => {
      const r = section.getBoundingClientRect()
      const progress = (window.innerHeight / 2 - (r.top + r.height / 2)) / window.innerHeight
      mx += (tmx - mx) * 0.08
      my += (tmy - my) * 0.08

      SCREENS.forEach((s, i) => {
        const el = phoneRefs.current[i]
        if (el) gsap.set(el, { x: mx * s.pMouseX, y: progress * s.pScroll + my * s.pMouseY })
      })
      gsap.set(group, { rotateX: my * -6, rotateY: mx * 8 })
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} id="app" className="relative isolate overflow-hidden px-6 py-32 md:py-44">
      {/* clean light stage with soft, calm colour blooms */}
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#f4f1ea]" />
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute left-[14%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-emerald-300/25 blur-[150px]" />
        <div className="absolute left-1/2 top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/30 blur-[160px]" />
        <div className="absolute right-[14%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-sky-300/25 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#1f1d1a]/45">Your body, understood</p>
        <h2 className="mt-4 font-inter text-4xl font-medium tracking-[-0.02em] text-[#1f1d1a] md:text-6xl">
          See it in your day.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#1f1d1a]/60">
          BodySense AI turns your real signals into small, doable actions — so understanding your body
          becomes living better, every single day.
        </p>
      </div>

      <div
        className={cn(
          'relative z-10 mt-24 [perspective:2200px] transition-all duration-1000 ease-out',
          shown ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        )}
      >
        <div
          ref={groupRef}
          className="flex items-center justify-center gap-2 [transform-style:preserve-3d] sm:gap-6"
        >
          {SCREENS.map((screen, i) => (
            <div
              key={screen.src}
              style={{
                transform: `rotateY(${screen.rotateY}deg) translateZ(${screen.z}px) translateY(${screen.baseY}px)`,
              }}
            >
              <div ref={(el) => { phoneRefs.current[i] = el }} className="relative">
                {/* soft colour glow halo */}
                <div
                  aria-hidden="true"
                  className={cn('absolute -inset-8 rounded-[3rem] blur-[60px]', screen.glow)}
                />
                {/* light glass frame */}
                <div className="glass-frame relative rounded-[2.4rem] p-2.5">
                  <img
                    src={screen.src}
                    alt="BodySense AI app screen"
                    loading="lazy"
                    className={cn('rounded-[2rem]', screen.width)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-20 flex flex-wrap items-center justify-center gap-3">
        {CHIPS.map((chip) => (
          <span
            key={chip}
            className="liquid-glass rounded-full px-4 py-2 text-[11px] tracking-[0.1em] text-[#1f1d1a]/70"
          >
            {chip}
          </span>
        ))}
      </div>
    </section>
  )
}
