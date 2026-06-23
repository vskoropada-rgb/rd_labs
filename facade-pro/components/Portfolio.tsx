'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = ['Всі роботи', 'Приватні будинки', 'ЖК та ОСББ', 'Комерційні']

const projects = [
  {
    id: 1,
    title: 'Котедж у Брюховичах',
    type: 'Приватні будинки',
    area: '380 м²',
    material: 'Мінвата 150 мм',
    photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    alt: 'Приватний будинок після утеплення фасаду',
  },
  {
    id: 2,
    title: 'ЖК на вул. Шевченка',
    type: 'ЖК та ОСББ',
    area: '4 800 м²',
    material: 'EPS 100 мм',
    photo: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    alt: 'Утеплення фасаду житлового комплексу',
  },
  {
    id: 3,
    title: 'Офісний центр',
    type: 'Комерційні',
    area: '1 200 м²',
    material: 'Мінвата 100 мм',
    photo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    alt: 'Фасадні роботи на офісному центрі',
  },
  {
    id: 4,
    title: 'Таунхаус у Сихові',
    type: 'Приватні будинки',
    area: '240 м²',
    material: 'EPS 80 мм',
    photo: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    alt: 'Утеплення таунхаусу — фасадні роботи',
  },
  {
    id: 5,
    title: 'Багатоквартирний ЖК',
    type: 'ЖК та ОСББ',
    area: '6 200 м²',
    material: 'Мінвата 120 мм',
    photo: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80',
    alt: 'Масштабне утеплення фасаду великого ЖК',
  },
  {
    id: 6,
    title: 'Торговий центр',
    type: 'Комерційні',
    area: '800 м²',
    material: 'EPS 100 мм',
    photo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    alt: 'Фасадні роботи на торговому центрі',
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

        {/* Filter */}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer bg-[#111]"
              >
                {/* Real photo */}
                <Image
                  src={project.photo}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Permanent dark bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Bottom label (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-semibold">
                    {project.type}
                  </span>
                  <h3 className="text-white font-semibold text-base mt-1">{project.title}</h3>

                  {/* Details — visible on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300">
                    <div className="text-[#888880] text-sm mt-1.5">
                      {project.area} · {project.material}
                    </div>
                    <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium mt-2">
                      <span>Детальніше</span>
                      <ArrowRight size={14} />
                    </div>
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
