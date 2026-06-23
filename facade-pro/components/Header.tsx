'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Послуги', href: '#services' },
  { label: 'Портфоліо', href: '#portfolio' },
  { label: 'Про нас', href: '#about' },
  { label: 'Процес', href: '#process' },
  { label: 'Контакти', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#C9A84C] rounded-sm flex items-center justify-center flex-shrink-0">
            <span className="text-black font-bold text-xs leading-none">СБД</span>
          </div>
          <span className="text-white font-semibold text-base hidden sm:block">
            Світ Будівництва<span className="text-[#C9A84C]"> ПРО</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#888880] hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+380000000000"
            className="hidden lg:flex items-center gap-2 text-[#C9A84C] text-sm hover:text-[#E8C96A] transition-colors"
          >
            <Phone size={15} />
            +38 (000) 000-00-00
          </a>
          <a
            href="#contact"
            className="bg-[#C9A84C] text-black px-5 py-2.5 text-sm font-bold rounded-sm hover:bg-[#E8C96A] transition-colors hidden sm:block"
          >
            Кошторис
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-1"
            aria-label="Меню"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#1E1E1E] px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#888880] hover:text-white transition-colors border-b border-[#1A1A1A] text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+380000000000"
            className="flex items-center gap-2 text-[#C9A84C] text-sm pt-4"
          >
            <Phone size={15} />
            +38 (000) 000-00-00
          </a>
        </div>
      )}
    </motion.header>
  )
}
