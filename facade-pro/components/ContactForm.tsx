'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, MapPin, Mail, Send, Clock } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    'w-full bg-[#0E0E0E] border border-[#2A2A2A] rounded-sm px-4 py-3.5 text-white placeholder-[#3A3A3A] focus:border-[#C9A84C]/50 focus:outline-none transition-colors text-sm'

  return (
    <section id="contact" className="bg-[#0A0A0A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            Зв'язок
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Отримати безкоштовний{' '}
            <span className="text-[#C9A84C] italic font-light">кошторис</span>
          </h2>
          <div className="w-14 h-0.5 bg-[#C9A84C] mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-72 border border-[#C9A84C]/25 rounded-sm text-center p-8">
                <div className="w-14 h-14 border border-[#C9A84C]/40 rounded-full flex items-center justify-center mb-5">
                  <span className="text-[#C9A84C] text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">Заявку отримано!</h3>
                <p className="text-[#888880] text-sm">
                  Зв'яжемося з вами протягом 30 хвилин у робочий час.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[#888880] text-xs font-medium mb-2 block tracking-wide uppercase">
                    Ваше ім'я *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Іван Іваненко"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#888880] text-xs font-medium mb-2 block tracking-wide uppercase">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+38 (0__) ___-__-__"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#888880] text-xs font-medium mb-2 block tracking-wide uppercase">
                    Опис об'єкту
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Тип об'єкту, приблизна площа, побажання щодо матеріалів..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] text-black py-4 font-bold rounded-sm hover:bg-[#E8C96A] transition-colors flex items-center justify-center gap-2.5 text-sm"
                >
                  <Send size={16} />
                  Відправити заявку
                </button>
                <p className="text-[#444] text-xs text-center">
                  Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                </p>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-6">Контактна інформація</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: 'Телефон',
                    value: '+38 (000) 000-00-00',
                    href: 'tel:+380000000000',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@sbdpro.ua',
                    href: 'mailto:info@sbdpro.ua',
                  },
                  {
                    icon: MapPin,
                    label: 'Адреса',
                    value: 'м. Львів, вул. Боднарська, 14А',
                    href: null,
                  },
                ].map((item) => {
                  const Wrapper = item.href ? 'a' : 'div'
                  return (
                    <Wrapper
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 border border-[#2A2A2A] rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A84C]/40 transition-colors">
                        <item.icon size={15} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <div className="text-[#555] text-xs mb-0.5">{item.label}</div>
                        <div className="text-white text-sm group-hover:text-[#C9A84C] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>
            </div>

            <div className="border border-[#1E1E1E] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={16} className="text-[#C9A84C]" />
                <span className="text-white font-medium text-sm">Графік роботи</span>
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Пн – Пт', time: '08:00 – 18:00' },
                  { day: 'Субота', time: '09:00 – 15:00' },
                  { day: 'Неділя', time: 'Вихідний' },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between text-sm">
                    <span className="text-[#888880]">{row.day}</span>
                    <span
                      className={
                        row.time === 'Вихідний' ? 'text-[#C9A84C]' : 'text-white'
                      }
                    >
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#C9A84C]/8 border border-[#C9A84C]/20 rounded-sm p-6">
              <p className="text-white font-medium text-sm mb-1.5">
                Безкоштовний виїзд майстра
              </p>
              <p className="text-[#888880] text-xs leading-relaxed">
                Замір та консультація без оплати в межах Львова та Львівської області.
                Потрібно утеплити фасад — просто зателефонуйте.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
