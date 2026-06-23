'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Layers3, Wrench, PaintBucket, Ruler } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Утеплення приватних будинків',
    description:
      'Комплексне утеплення фасаду приватного будинку під ключ. Мінвата, пінопласт, EPS — підберемо оптимальний матеріал.',
    tag: 'Популярне',
  },
  {
    icon: Building2,
    title: 'Утеплення ОСББ і багатоповерхівок',
    description:
      'Фасадні роботи на житлових комплексах. Висотні роботи, риштування, документація для ОСББ.',
    tag: null,
  },
  {
    icon: Layers3,
    title: 'Декоративна штукатурка',
    description:
      'Нанесення декоративних штукатурок: "короїд", "шуба", венеційська, структурна. Широка палітра кольорів.',
    tag: null,
  },
  {
    icon: Wrench,
    title: 'Ремонт та відновлення фасаду',
    description:
      'Усунення тріщин, відшарувань, відновлення пошкодженого утеплювача. Часткові та повні ремонтні роботи.',
    tag: null,
  },
  {
    icon: PaintBucket,
    title: 'Фарбування фасаду',
    description:
      'Захисне та декоративне фарбування якісними матеріалами Ceresit, Weber, Baumit з довготривалим ефектом.',
    tag: null,
  },
  {
    icon: Ruler,
    title: 'Кошторис і проєктування',
    description:
      'Безкоштовний виїзд майстра, точний замір та детальний розрахунок вартості матеріалів і робіт.',
    tag: 'Безкоштовно',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            Наші послуги
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Що ми робимо
          </h2>
          <p className="text-[#888880] text-lg max-w-xl">
            Повний цикл фасадних робіт — від першого дзвінка до гарантійного обслуговування.
          </p>
          <div className="w-14 h-0.5 bg-[#C9A84C] mt-6" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className="group relative border border-[#1E1E1E] rounded-sm p-8 hover:border-[#C9A84C]/35 transition-all duration-300 hover:bg-[#0E0E0E] cursor-default"
            >
              {service.tag && (
                <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-wider uppercase bg-[#C9A84C]/15 text-[#C9A84C] px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="w-11 h-11 border border-[#C9A84C]/25 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/8 group-hover:border-[#C9A84C]/50 transition-all">
                <service.icon size={20} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-white font-semibold text-[17px] mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#888880] text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
