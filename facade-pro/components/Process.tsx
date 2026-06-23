'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Заявка',
    desc: 'Залишаєте заявку на сайті або телефонуєте — відповідаємо протягом 30 хвилин у робочий час.',
  },
  {
    num: '02',
    title: 'Виїзд і замір',
    desc: 'Безкоштовний виїзд майстра на об\'єкт у Львові та Львівській області. Точний замір і консультація.',
  },
  {
    num: '03',
    title: 'Кошторис',
    desc: 'Детальний кошторис з вартістю матеріалів і робіт — без прихованих доплат і "сюрпризів".',
  },
  {
    num: '04',
    title: 'Договір',
    desc: 'Підписуємо договір із фіксованою ціною, переліком робіт і чіткими строками виконання.',
  },
  {
    num: '05',
    title: 'Виконання робіт',
    desc: 'Наша бригада виконує всі роботи у встановлені терміни. Регулярно звітуємо про прогрес.',
  },
  {
    num: '06',
    title: 'Здача та гарантія',
    desc: 'Підписуємо акт виконаних робіт. Надаємо гарантійний талон на 5 років.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#080808] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            Як ми працюємо
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Процес роботи
          </h2>
          <div className="w-14 h-0.5 bg-[#C9A84C] mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative border-l border-[#C9A84C]/20 pl-6"
            >
              <div className="text-5xl font-bold text-[#C9A84C]/12 leading-none mb-3 -ml-1 select-none">
                {step.num}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-[#888880] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
