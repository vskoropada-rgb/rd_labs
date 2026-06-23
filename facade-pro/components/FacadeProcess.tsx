'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const layers = [
  {
    num: '01',
    name: 'Несуча стіна',
    material: 'Бетон / цегла / газоблок',
    flex: 5,
    color: '#3A3A3A',
    textColor: '#aaaaaa',
    border: '#4A4A4A',
    mm: '200–400 мм',
  },
  {
    num: '02',
    name: 'Клейовий розчин',
    material: 'Ceresit CT 85',
    flex: 0.6,
    color: '#6B5B45',
    textColor: '#d4c4a8',
    border: '#7B6B55',
    mm: '10 мм',
  },
  {
    num: '03',
    name: 'Утеплювач',
    material: 'Мінвата / EPS',
    flex: 4.5,
    color: '#C9A84C',
    textColor: '#1a1000',
    border: '#E8C96A',
    mm: '100–150 мм',
  },
  {
    num: '04',
    name: 'Армування',
    material: 'Сітка + клей',
    flex: 0.5,
    color: '#4A7A5A',
    textColor: '#c0e0c8',
    border: '#5A8A6A',
    mm: '10 мм',
  },
  {
    num: '05',
    name: 'Ґрунтовка',
    material: 'Quartz / Baumit',
    flex: 0.35,
    color: '#6A6055',
    textColor: '#c8c0b8',
    border: '#7A7065',
    mm: '5 мм',
  },
  {
    num: '06',
    name: 'Штукатурка',
    material: '"Короїд" / "Шуба"',
    flex: 0.65,
    color: '#B8A070',
    textColor: '#1a1000',
    border: '#C8B080',
    mm: '5–8 мм',
  },
]

function LayerBlock({ layer, index }: { layer: typeof layers[0]; index: number }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: layer.flex,
        backgroundColor: layer.color,
        borderRight: `1px solid ${layer.border}`,
        transformOrigin: 'left center',
        minWidth: layer.flex < 1 ? '18px' : undefined,
      }}
      className="relative h-full flex items-center justify-center overflow-hidden group"
    >
      {/* Label inside wide layers */}
      {layer.flex >= 1.5 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.18 + 0.5, duration: 0.4 }}
          className="text-center px-2 select-none"
        >
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-1 opacity-60"
            style={{ color: layer.textColor }}
          >
            {layer.num}
          </div>
          <div
            className="font-semibold text-sm leading-tight"
            style={{ color: layer.textColor }}
          >
            {layer.name}
          </div>
          <div
            className="text-[10px] mt-1 opacity-70"
            style={{ color: layer.textColor }}
          >
            {layer.mm}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function FacadeProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="bg-[#060606] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            Технологія
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Як утеплюється фасад
          </h2>
          <p className="text-[#888880] mt-4 max-w-xl text-base leading-relaxed">
            Правильне утеплення — це система з 6 шарів. Кожен виконує свою роль.
            Ми не економимо на жодному.
          </p>
          <div className="w-14 h-0.5 bg-[#C9A84C] mt-6" />
        </motion.div>

        {/* Cross-section diagram */}
        <motion.div style={{ y }} className="mb-10">
          {/* Top measurement labels */}
          <div className="flex mb-3 gap-0">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.3, duration: 0.4 }}
                style={{ flex: layer.flex, minWidth: layer.flex < 1 ? '18px' : undefined }}
                className="text-center"
              >
                <span className="text-[10px] text-[#C9A84C]/70 font-mono tracking-wider">
                  {layer.mm}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Main cross-section */}
          <div className="flex h-48 md:h-64 rounded-sm overflow-hidden border border-[#2A2A2A]">
            {layers.map((layer, i) => (
              <LayerBlock key={layer.num} layer={layer} index={i} />
            ))}
          </div>

          {/* Bottom labels for thin layers */}
          <div className="flex mt-4 gap-0">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.6, duration: 0.4 }}
                style={{ flex: layer.flex, minWidth: layer.flex < 1 ? '18px' : undefined }}
                className="text-center"
              >
                {layer.flex < 1.5 && (
                  <span
                    className="text-[9px] font-medium leading-tight block"
                    style={{ color: layer.color === '#C9A84C' ? '#C9A84C' : '#666' }}
                  >
                    {layer.num}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Layer detail cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-[#1E1E1E] rounded-sm p-4 hover:border-[#2A2A2A] transition-colors"
            >
              <div
                className="w-8 h-1.5 rounded-full mb-3"
                style={{ backgroundColor: layer.color }}
              />
              <div className="text-[#555] text-[10px] font-mono mb-1">{layer.num}</div>
              <div className="text-white text-xs font-semibold mb-1 leading-snug">
                {layer.name}
              </div>
              <div className="text-[#555] text-[10px] leading-snug">{layer.material}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-[#1A1A1A] pt-10"
        >
          <div>
            <p className="text-white font-medium mb-1">
              Готові утеплити ваш фасад за цією технологією?
            </p>
            <p className="text-[#888880] text-sm">
              Безкоштовний виїзд, підбір матеріалу та кошторис.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#C9A84C] text-black px-7 py-3.5 font-bold text-sm rounded-sm hover:bg-[#E8C96A] transition-colors"
          >
            Замовити утеплення
          </a>
        </motion.div>
      </div>
    </section>
  )
}
