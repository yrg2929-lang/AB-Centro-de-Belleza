'use client'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)').matches
    setIsMobile(mobile)
    if (mobile) return

    const onScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      heroRef.current.style.backgroundPositionY = `calc(50% + ${scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative flex items-end"
      style={{
        minHeight: '100vh',
        backgroundImage:
          'url(https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
      aria-label="Hero — AB Centro de Belleza"
    >
      {/* Warm dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(28, 16, 8, 0.38)' }}
        aria-hidden="true"
      />
      {/* Text anchored bottom-left */}
      <div className="relative z-10 px-8 pb-20 md:px-16 md:pb-24 max-w-3xl">
        <p
          className="mb-4 tracking-widest uppercase text-sm font-medium"
          style={{ color: '#9e6b72', fontFamily: "'DM Sans', sans-serif" }}
        >
          León Centro · Guanajuato
        </p>
        <h1
          className="text-white leading-none mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(64px, 9vw, 96px)' }}
        >
          Tu mejor
          <br />
          <em>versión</em>
        </h1>
        <p
          className="text-white/90 mb-10 text-lg leading-relaxed max-w-xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Depilación Láser · Extensiones de Pestañas · Alaciados · Eliminación de Manchas
        </p>
        <a
href="https://wa.me/524771574824?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-white font-medium rounded-md transition-opacity hover:opacity-90 text-base"
          style={{ background: '#9e6b72', fontFamily: "'DM Sans', sans-serif" }}
        >
          Agenda tu Cita
        </a>
      </div>
    </section>
  )
}
