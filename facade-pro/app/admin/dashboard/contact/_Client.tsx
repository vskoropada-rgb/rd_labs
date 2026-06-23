'use client'

import { useState, useTransition } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { saveContact } from './actions'
import type { ContactInfo } from '@/lib/content'

const inputCls =
  'w-full bg-[#111] border border-[#2A2A2A] rounded-sm px-4 py-3 text-white text-sm placeholder-[#444] focus:border-[#C9A84C]/50 focus:outline-none transition-colors'

export function ContactClient({
  initialContact,
}: {
  initialContact?: ContactInfo
}) {
  const defaultContact: ContactInfo = initialContact || {
    phone: '',
    email: '',
    address: '',
    hours: { weekdays: '', saturday: '', sunday: '' },
  }

  const [form, setForm] = useState(defaultContact)
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  const set = (key: keyof ContactInfo, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))
  const setHours = (key: keyof ContactInfo['hours'], value: string) =>
    setForm((f) => ({ ...f, hours: { ...f.hours, [key]: value } }))

  function handleSave() {
    startTransition(async () => {
      await saveContact(form)
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    })
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-xl font-bold mb-1">Контактні дані</h1>
          <p className="text-[#555] text-sm">Ці дані відображаються в секції &quot;Контакти&quot; на сайті</p>
        </div>
        {saved && (
          <span className="flex items-center gap-1.5 text-green-400 text-sm">
            <Check size={14} /> Збережено
          </span>
        )}
      </div>

      <div className="border border-[#1E1E1E] rounded-sm p-6 bg-[#0C0C0C] space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { key: 'phone', label: 'Телефон', placeholder: '+38 (000) 000-00-00', type: 'tel' },
            { key: 'email', label: 'Email', placeholder: 'info@sbdpro.ua', type: 'email' },
          ].map(({ key, label, placeholder, type }) => (
            <div key={key}>
              <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">{label}</label>
              <input
                type={type}
                value={form[key as keyof ContactInfo] as string}
                onChange={(e) => set(key as keyof ContactInfo, e.target.value)}
                placeholder={placeholder}
                className={inputCls}
              />
            </div>
          ))}
        </div>

        <div>
          <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">Адреса</label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => set('address', e.target.value)}
            placeholder="м. Львів, вул. Боднарська, 14А"
            className={inputCls}
          />
        </div>

        <div>
          <label className="text-[#888880] text-xs uppercase tracking-wider mb-4 block">Графік роботи</label>
          <div className="space-y-3">
            {[
              { key: 'weekdays', label: 'Пн – Пт' },
              { key: 'saturday', label: 'Субота' },
              { key: 'sunday', label: 'Неділя' },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center gap-4">
                <span className="text-[#555] text-sm w-20">{label}</span>
                <input
                  type="text"
                  value={form.hours[key as keyof ContactInfo['hours']]}
                  onChange={(e) => setHours(key as keyof ContactInfo['hours'], e.target.value)}
                  placeholder={key === 'sunday' ? 'Вихідний' : '08:00 – 18:00'}
                  className={`${inputCls} flex-1`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={isPending}
        className="mt-6 flex items-center gap-2 bg-[#C9A84C] text-black px-7 py-3.5 font-bold text-sm rounded-sm hover:bg-[#E8C96A] transition-colors disabled:opacity-50"
      >
        {isPending ? <Loader2 size={15} className="animate-spin" /> : <Check size={15} />}
        Зберегти контакти
      </button>
    </div>
  )
}
