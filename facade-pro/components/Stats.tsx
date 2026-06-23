'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

interface CounterProps {
  to: number
  suffix: string
}

function Counter({ to, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return controls.stop
  }, [isInView, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { to: 9, suffix: '+', label: 'Років досвіду', sub: 'Працюємо з 2015 року' },
  { to: 200, suffix: '+', label: "Об'єктів завершено", sub: 'Приватні та комерційні' },
  { to: 5, suffix: ' р.', label: 'Гарантія', sub: 'На всі виконані роботи' },
  { to: 100, suffix: '%', label: 'Фіксована ціна', sub: 'Жодних прихованих доплат' },
]

export default function Stats() {
  return (
    <section className="bg-[#C9A84C] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-1.5">
                <Counter to={stat.to} suffix={stat.suffix} />
              </div>
              <div className="font-semibold text-black/75 text-sm mb-0.5">{stat.label}</div>
              <div className="text-black/50 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
