import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4'

/** Fixed full-screen background video with GSAP mouse parallax. */
export function VideoBackground() {
  const moveRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = moveRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * 20
      targetY = ((e.clientY - cy) / cy) * 20
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      gsap.set(el, { x: currentX, y: currentY })
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const handleLoaded = () => {
    if (videoRef.current) videoRef.current.playbackRate = 1.25
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#f4f1ea]">
      {/* static overscan so parallax never reveals an edge */}
      <div className="absolute inset-0 origin-center scale-[1.08]">
        {/* GSAP translates this layer */}
        <div ref={moveRef} className="absolute inset-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoaded}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* soft cream wash — keeps the page light & calm, video reads as gentle texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#f4f1ea]/55 via-[#f4f1ea]/45 to-[#f4f1ea]"
      />
    </div>
  )
}
