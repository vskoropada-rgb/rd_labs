'use client'

import { motion } from 'framer-motion'
import { ArrowDown, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const trustPoints = [
  '9+ років досвіду',
  'Безкоштовний виїзд',
  'Гарантія 5 років',
  'Фіксована ціна',
]

const wordReveal = {
  hidden: { y: '110%', opacity: 0 },
  show: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

const headline1 = 'Утеплення фасадів'.split(' ')
const headline2 = 'під ключ'.split(' ')

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt="Фасадні роботи — утеплення будинку"
          fill
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30" />
      </div>

      {/* Gold ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(201,168,76,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 border border-[#C9A84C]/25 rounded-full px-4 py-2 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-sm font-medium">
              Фасадні роботи у Львові та по всій Україні
            </span>
          </motion.div>

          {/* H1 — word-by-word reveal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] mb-6">
            {/* Line 1 — white words */}
            <div className="overflow-hidden flex flex-wrap gap-x-4 mb-2">
              {headline1.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={i}
                  variants={wordReveal}
                  initial="hidden"
                  animate="show"
                  className="inline-block text-white"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            {/* Line 2 — gold italic */}
            <div className="overflow-hidden flex flex-wrap gap-x-4">
              {headline2.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={headline1.length + i}
                  variants={wordReveal}
                  initial="hidden"
                  animate="show"
                  className="inline-block text-[#C9A84C] italic font-light"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                custom={headline1.length + headline2.length}
                variants={wordReveal}
                initial="hidden"
                animate="show"
                className="inline-block text-white/60 font-light not-italic"
              >
                у Львові
              </motion.span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[#888880] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Замовити утеплення будинку, ОСББ або комерційного об&apos;єкта.
            Якісні фасадні роботи з гарантією — від розрахунку до здачі.
          </motion.p>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-12"
          >
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span className="text-white/80 text-sm">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-20 pt-10 border-t border-[#1E1E1E] grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { num: '9+', label: 'Років на ринку' },
            { num: '200+', label: "Об'єктів здано" },
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
