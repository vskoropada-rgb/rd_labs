'use client'

import { motion } from 'framer-motion'
import { Award, Clock3, BadgeCheck, Users, Truck, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Сертифіковані матеріали',
    desc: 'Ceresit, Knauf, Weber, Baumit — лише перевірені бренди з офіційними сертифікатами.',
  },
  {
    icon: Clock3,
    title: 'Дотримання термінів',
    desc: 'Строки виконання прописуємо в договорі і дотримуємося їх без виправдань.',
  },
  {
    icon: BadgeCheck,
    title: 'Фіксована ціна',
    desc: 'Вартість зазначається в кошторисі і не змінюється в процесі — жодних доплат.',
  },
  {
    icon: Users,
    title: 'Власна бригада',
    desc: 'Всі роботи виконують наші штатні майстри без залучення субпідрядників.',
  },
  {
    icon: Truck,
    title: 'Безкоштовна доставка',
    desc: 'Доставляємо матеріали на об\'єкт власним транспортом у межах Львівської області.',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантія 5 років',
    desc: 'Надаємо офіційну гарантію на всі виконані фасадні та штукатурні роботи.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="bg-[#0F0F0F] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left text block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
              Чому обирають нас
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              9 років робимо
              <br />
              <span className="text-[#C9A84C] italic font-light">якісно</span>
            </h2>
            <p className="text-[#888880] text-lg leading-relaxed mb-4">
              Ми — команда досвідчених майстрів фасадних робіт у Львові та по всій Україні.
              За 9 років реалізували понад 200 проєктів: від приватних котеджів до великих
              житлових комплексів і комерційних будівель.
            </p>
            <p className="text-[#888880] text-lg leading-relaxed mb-10">
              Знаємо, як потрібно утеплити будинок правильно — підбираємо матеріал
              залежно від типу стін, клімату та бюджету.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#C9A84C] text-black px-8 py-4 font-bold rounded-sm hover:bg-[#E8C96A] transition-colors"
            >
              Замовити консультацію
            </a>
          </motion.div>

          {/* Right reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-4 border border-[#1E1E1E] rounded-sm p-5 hover:border-[#C9A84C]/25 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 border border-[#C9A84C]/25 rounded-sm flex items-center justify-center mt-0.5">
                  <reason.icon size={17} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1.5">{reason.title}</h4>
                  <p className="text-[#888880] text-xs leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
