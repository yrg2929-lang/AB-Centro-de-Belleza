'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BrandStatement from '@/components/BrandStatement'
import About from '@/components/About'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStatement />
      <About />
      <Services />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
