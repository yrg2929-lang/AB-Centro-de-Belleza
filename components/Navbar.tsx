'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: '#faf7f4',
        boxShadow: scrolled ? '0 1px 20px rgba(28,16,8,0.10)' : '0 1px 4px rgba(28,16,8,0.06)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
        {/* Logo + Brand */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          {/* hosted logo goes here */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/571126678_828973516740848_8447722791193695558_n-QpWIyMvjIVz5hTRUE8YZHLQ5GU1GAx.jpg"
            alt="AB Centro de Belleza logo"
            className="logo-img rounded-full object-cover"
            style={{ height: 52, width: 52 }}
          />
          <span
            className="hidden sm:block text-[#1c1008] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600 }}
          >
            AB Centro de Belleza
          </span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#1c1008] font-sans text-sm font-medium tracking-wide hover:text-[#9e6b72] transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/524771574824?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 text-sm font-medium text-white rounded-md transition-opacity hover:opacity-90"
          style={{ background: '#9e6b72', fontFamily: "'DM Sans', sans-serif" }}
        >
          Agendar Cita
        </a>
      </nav>
    </header>
  )
}
