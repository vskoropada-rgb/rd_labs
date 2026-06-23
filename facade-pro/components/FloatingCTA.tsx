'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function FloatingCTA({ phone = '+38 (000) 000-00-00' }: { phone?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tel = phone.replace(/\D/g, '')

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`tel:+${tel}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#C9A84C] text-black px-5 py-3.5 rounded-sm font-bold text-sm shadow-lg shadow-black/40 hover:bg-[#E8C96A] transition-colors lg:hidden"
          aria-label="Зателефонувати"
        >
          <Phone size={17} />
          Зателефонувати
        </motion.a>
      )}
    </AnimatePresence>
  )
}
