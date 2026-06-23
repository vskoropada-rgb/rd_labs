'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Михайло Коваль',
    location: 'Львів, Сихів',
    project: 'Утеплення будинку, 320 м²',
    text: 'Замовляли утеплення приватного будинку площею 320 м². Команда спрацювала чисто і в термін. Результат перевершив очікування — вже першої зими помітна різниця. Рекомендую як надійних майстрів фасадних робіт.',
    stars: 5,
  },
  {
    name: 'Оксана Петришин',
    location: 'Голосківська ОСББ, Львів',
    project: 'Утеплення ОСББ, 2 400 м²',
    text: 'ОСББ нашого будинку укладало договір на утеплення фасаду загальною площею 2400 м². Виконали за 3 тижні. Платіжки за опалення зменшились суттєво. Якість робіт і матеріалів — на рівні. Дякуємо!',
    stars: 5,
  },
  {
    name: 'Андрій Гуцуляк',
    location: 'Брюховичі',
    project: 'Утеплення котеджу, мінвата 150 мм',
    text: 'Котедж утеплювали мінватою 150 мм. Дуже задоволений увагою до деталей і якістю штукатурного шару. Майстри — професіонали своєї справи. Потрібно утеплити будинок — однозначно рекомендую.',
    stars: 5,
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  const t = testimonials[idx]

  return (
    <section className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            Відгуки клієнтів
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Що кажуть клієнти
          </h2>
          <div className="w-14 h-0.5 bg-[#C9A84C] mt-6" />
        </motion.div>

        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={17} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>

              <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9A84C] font-bold text-base">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-[#888880] text-sm">
                    {t.location} · {t.project}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 border border-[#2A2A2A] rounded-sm flex items-center justify-center text-white hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors"
              aria-label="Попередній"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 border border-[#2A2A2A] rounded-sm flex items-center justify-center text-white hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors"
              aria-label="Наступний"
            >
              <ChevronRight size={19} />
            </button>
            <span className="text-[#555] text-sm ml-1">
              {idx + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
