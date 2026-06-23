'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const categories = ['Всі роботи', 'Будинки', 'ОСББ', 'Комерційні']

const projects = [
  {
    id: 1,
    title: 'Котедж у Брюховичах',
    type: 'Будинки',
    area: '380 м²',
    material: 'Мінвата 150 мм',
    hue: '#1C2016',
  },
  {
    id: 2,
    title: 'ОСББ вул. Шевченка',
    type: 'ОСББ',
    area: '2 400 м²',
    material: 'EPS 100 мм',
    hue: '#16181C',
  },
  {
    id: 3,
    title: 'Офісний центр',
    type: 'Комерційні',
    area: '1 200 м²',
    material: 'Мінвата 100 мм',
    hue: '#1C1616',
  },
  {
    id: 4,
    title: 'Таунхаус у Сихові',
    type: 'Будинки',
    area: '240 м²',
    material: 'EPS 80 мм',
    hue: '#161C1C',
  },
  {
    id: 5,
    title: 'Житловий комплекс',
    type: 'ОСББ',
    area: '3 600 м²',
    material: 'Мінвата 120 мм',
    hue: '#1C1C16',
  },
  {
    id: 6,
    title: 'Торговий центр',
    type: 'Комерційні',
    area: '800 м²',
    material: 'EPS 100 мм',
    hue: '#16161C',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('Всі роботи')

  const filtered =
    active === 'Всі роботи' ? projects : projects.filter((p) => p.type === active)

  return (
    <section id="portfolio" className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            Наші роботи
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Портфоліо</h2>
          <div className="w-14 h-0.5 bg-[#C9A84C] mt-6" />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm rounded-sm transition-all ${
                active === cat
                  ? 'bg-[#C9A84C] text-black font-semibold'
                  : 'border border-[#2A2A2A] text-[#888880] hover:border-[#C9A84C]/35 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
                style={{ backgroundColor: project.hue }}
              >
                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 border border-white/8 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white/15 text-xl font-bold">{project.id}</span>
                  </div>
                  <span className="text-white/10 text-xs">Фото проєкту</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">
                    {project.type}
                  </span>
                  <h3 className="text-white font-semibold text-lg mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <div className="text-[#888880] text-sm mb-4">
                    {project.area} · {project.material}
                  </div>
                  <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium">
                    <span>Детальніше</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-block border border-[#C9A84C]/40 text-[#C9A84C] px-8 py-3.5 text-sm font-medium rounded-sm hover:bg-[#C9A84C]/8 transition-colors"
          >
            Обговорити ваш проєкт
          </a>
        </motion.div>
      </div>
    </section>
  )
}
