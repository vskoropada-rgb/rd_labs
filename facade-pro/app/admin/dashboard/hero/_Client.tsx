'use client'

import { useState, useTransition } from 'react'
import { Check, Loader2, Plus, Trash2 } from 'lucide-react'
import { saveHero } from './actions'
import type { HeroContent } from '@/lib/content'

const inputCls =
  'w-full bg-[#111] border border-[#2A2A2A] rounded-sm px-4 py-3 text-white text-sm placeholder-[#444] focus:border-[#C9A84C]/50 focus:outline-none transition-colors'

export function HeroClient({ initialHero }: { initialHero?: HeroContent }) {
  const defaultHero: HeroContent = initialHero || {
    badge: '',
    headline1: '',
    headline2: '',
    subtitle: '',
    stats: [{ num: '', label: '' }],
  }

  const [form, setForm] = useState(defaultHero)
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  const set = (key: keyof HeroContent, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const setStat = (i: number, key: 'num' | 'label', value: string) =>
    setForm((f) => {
      const stats = [...f.stats]
      stats[i] = { ...stats[i], [key]: value }
      return { ...f, stats }
    })

  const addStat = () =>
    setForm((f) => ({ ...f, stats: [...f.stats, { num: '', label: '' }] }))

  const removeStat = (i: number) =>
    setForm((f) => ({ ...f, stats: f.stats.filter((_, idx) => idx !== i) }))

  function handleSave() {
    startTransition(async () => {
      await saveHero(form)
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    })
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-xl font-bold mb-1">Тексти Hero-секції</h1>
          <p className="text-[#555] text-sm">Заголовок, підзаголовок та статистика на головному екрані</p>
        </div>
        {saved && (
          <span className="flex items-center gap-1.5 text-green-400 text-sm">
            <Check size={14} /> Збережено
          </span>
        )}
      </div>

      <div className="space-y-6">
        <div className="border border-[#1E1E1E] rounded-sm p-6 bg-[#0C0C0C] space-y-5">
          <h2 className="text-white font-semibold text-sm mb-1">Заголовок і текст</h2>

          <div>
            <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">Бейдж (мала плашка зверху)</label>
            <input type="text" value={form.badge} onChange={e => set('badge', e.target.value)}
              placeholder="Фасадні роботи у Львові та по всій Україні" className={inputCls} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">Заголовок (рядок 1)</label>
              <input type="text" value={form.headline1} onChange={e => set('headline1', e.target.value)}
                placeholder="Утеплення фасадів" className={inputCls} />
            </div>
            <div>
              <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">Заголовок (рядок 2 — золото)</label>
              <input type="text" value={form.headline2} onChange={e => set('headline2', e.target.value)}
                placeholder="під ключ" className={inputCls} />
            </div>
          </div>

          <div>
            <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">Підзаголовок</label>
            <textarea rows={3} value={form.subtitle} onChange={e => set('subtitle', e.target.value)}
              placeholder="Замовити утеплення будинку..." className={`${inputCls} resize-none`} />
          </div>
        </div>

        <div className="border border-[#1E1E1E] rounded-sm p-6 bg-[#0C0C0C]">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold text-sm">Статистика (4 блоки знизу)</h2>
            <button onClick={addStat} className="flex items-center gap-1.5 text-xs text-[#C9A84C] hover:text-[#E8C96A] transition-colors">
              <Plus size={13} /> Додати
            </button>
          </div>

          <div className="space-y-3">
            {form.stats.map((stat, i) => (
              <div key={i} className="flex gap-3 items-center">
                <input type="text" value={stat.num} onChange={e => setStat(i, 'num', e.target.value)}
                  placeholder="9+" className={`${inputCls} w-28`} />
                <input type="text" value={stat.label} onChange={e => setStat(i, 'label', e.target.value)}
                  placeholder="Років на ринку" className={inputCls} />
                <button onClick={() => removeStat(i)} className="text-[#444] hover:text-red-400 transition-colors flex-shrink-0">
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={handleSave} disabled={isPending}
        className="mt-6 flex items-center gap-2 bg-[#C9A84C] text-black px-7 py-3.5 font-bold text-sm rounded-sm hover:bg-[#E8C96A] transition-colors disabled:opacity-50">
        {isPending ? <Loader2 size={15} className="animate-spin" /> : <Check size={15} />}
        Зберегти тексти
      </button>
    </div>
  )
}
