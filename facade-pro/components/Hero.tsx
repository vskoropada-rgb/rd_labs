'use client'

import { motion } from 'framer-motion'
import { ArrowDown, CheckCircle2 } from 'lucide-react'

const trustPoints = [
  '9+ років досвіду',
  'Безкоштовний виїзд',
  'Гарантія 5 років',
  'Фіксована ціна',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0D0D0A] to-[#12100A]" />

      {/* Warm glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C9A84C]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#C9A84C]/3 rounded-full blur-[80px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* Vertical accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 border border-[#C9A84C]/25 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-medium">
              Фасадні роботи у Львові та по всій Україні
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Утеплення фасадів{' '}
            <span className="text-[#C9A84C] italic font-light">під ключ</span>
            <br />
            <span className="text-white/80">у Львові</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888880] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Замовити утеплення будинку, ОСББ або комерційного об'єкта.
            Якісні фасадні роботи з гарантією — від розрахунку до здачі.
          </motion.p>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-12"
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-white text-sm">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#C9A84C] text-black px-8 py-4 font-bold text-base rounded-sm hover:bg-[#E8C96A] transition-all hover:scale-[1.02] active:scale-100"
            >
              Отримати безкоштовний кошторис
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-[#2A2A2A] text-white px-8 py-4 font-medium text-base rounded-sm hover:border-[#C9A84C]/40 transition-all hover:text-[#C9A84C]"
            >
              Переглянути роботи
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-[#1E1E1E] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { num: '9+', label: 'Років на ринку' },
            { num: '200+', label: 'Об\'єктів здано' },
            { num: '5 р.', label: 'Гарантія якості' },
            { num: '0 грн', label: 'Виїзд та замір' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-[#C9A84C] mb-1">{s.num}</div>
              <div className="text-[#888880] text-sm">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A84C]/40"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  )
}
