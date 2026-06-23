'use client'

import { useState, useTransition, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Plus, Pencil, Trash2, Upload, X, Check, Loader2 } from 'lucide-react'
import { savePortfolio, uploadPhoto, deleteProject } from './actions'
import type { PortfolioItem } from '@/lib/content'

const TYPES = ['Приватні будинки', 'ЖК та ОСББ', 'Комерційні']

const emptyItem = (): PortfolioItem => ({
  id: crypto.randomUUID(),
  title: '',
  type: 'Приватні будинки',
  area: '',
  material: '',
  photo: '',
  alt: '',
})

function PhotoUploader({
  value,
  onChange,
}: {
  value: string
  onChange: (url: string) => void
}) {
  const [uploading, setUploading] = useState(false)
  const [err, setErr] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setErr('')
    const fd = new FormData()
    fd.append('file', file)
    const res = await uploadPhoto(fd)
    setUploading(false)
    if ('error' in res) { setErr(res.error); return }
    onChange(res.url)
  }

  return (
    <div className="space-y-3">
      <label className="text-[#888880] text-xs uppercase tracking-wider block">Фото</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://... або завантажте файл →"
          className="flex-1 bg-[#111] border border-[#2A2A2A] rounded-sm px-3 py-2.5 text-white text-sm placeholder-[#444] focus:border-[#C9A84C]/50 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 border border-[#2A2A2A] px-3 py-2.5 text-sm text-[#888880] hover:text-white hover:border-[#C9A84C]/40 rounded-sm transition-colors disabled:opacity-50"
        >
          {uploading ? <Loader2 size={15} className="animate-spin" /> : <Upload size={15} />}
          {uploading ? 'Завантаження...' : 'Завантажити'}
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>
      {err && <p className="text-red-400 text-xs">{err}</p>}
      {value && (
        <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-[#2A2A2A] bg-[#111]">
          <Image src={value} alt="preview" fill className="object-cover" unoptimized={value.startsWith('/')} />
        </div>
      )}
    </div>
  )
}

function Modal({
  item,
  onSave,
  onClose,
}: {
  item: PortfolioItem
  onSave: (item: PortfolioItem) => void
  onClose: () => void
}) {
  const [form, setForm] = useState(item)
  const set = (k: keyof PortfolioItem, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const inputCls =
    'w-full bg-[#111] border border-[#2A2A2A] rounded-sm px-3 py-2.5 text-white text-sm placeholder-[#444] focus:border-[#C9A84C]/50 focus:outline-none'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="w-full max-w-lg bg-[#0E0E0E] border border-[#2A2A2A] rounded-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E1E1E]">
          <h2 className="text-white font-semibold">
            {item.title ? 'Редагувати проєкт' : 'Новий проєкт'}
          </h2>
          <button onClick={onClose} className="text-[#555] hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {[
            { key: 'title', label: 'Назва проєкту', placeholder: 'Котедж у Брюховичах' },
            { key: 'area', label: 'Площа', placeholder: '380 м²' },
            { key: 'material', label: 'Матеріал', placeholder: 'Мінвата 150 мм' },
            { key: 'alt', label: 'Alt текст (SEO)', placeholder: 'Опис фото для пошукових систем' },
          ].map(({ key, label, placeholder }) => (
            <div key={key}>
              <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">{label}</label>
              <input
                type="text"
                value={form[key as keyof PortfolioItem] as string}
                onChange={(e) => set(key as keyof PortfolioItem, e.target.value)}
                placeholder={placeholder}
                className={inputCls}
              />
            </div>
          ))}

          <div>
            <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">Категорія</label>
            <select
              value={form.type}
              onChange={(e) => set('type', e.target.value)}
              className={inputCls}
            >
              {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <PhotoUploader value={form.photo} onChange={(url) => set('photo', url)} />
        </div>

        <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#1E1E1E]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm border border-[#2A2A2A] text-[#888880] hover:text-white rounded-sm transition-colors"
          >
            Скасувати
          </button>
          <button
            onClick={() => { if (form.title && form.photo) onSave(form) }}
            disabled={!form.title || !form.photo}
            className="flex items-center gap-2 px-5 py-2.5 text-sm bg-[#C9A84C] text-black font-bold rounded-sm hover:bg-[#E8C96A] transition-colors disabled:opacity-40"
          >
            <Check size={15} />
            Зберегти
          </button>
        </div>
      </div>
    </div>
  )
}

export function PortfolioClient({
  initialItems,
}: {
  initialItems?: PortfolioItem[]
}) {
  const [items, setItems] = useState<PortfolioItem[]>(initialItems || [])
  const [modal, setModal] = useState<PortfolioItem | null>(null)
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  // Load items from server on mount if not provided
  useEffect(() => {
    if (!initialItems) {
      fetch('/api/content').then(r => r.json()).then(d => setItems(d.portfolio || []))
    }
  }, [initialItems])

  function handleSave(updated: PortfolioItem) {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === updated.id)
      if (idx >= 0) { const n = [...prev]; n[idx] = updated; return n }
      return [...prev, updated]
    })
    setModal(null)
  }

  function handleDelete(id: string) {
    if (!confirm('Видалити цей проєкт?')) return
    startTransition(async () => {
      await deleteProject(id)
      setItems((prev) => prev.filter((i) => i.id !== id))
    })
  }

  function handleSaveAll() {
    startTransition(async () => {
      await savePortfolio(items)
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    })
  }

  return (
    <div className="p-8">
      {modal && (
        <Modal item={modal} onSave={handleSave} onClose={() => setModal(null)} />
      )}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-xl font-bold mb-1">Портфоліо</h1>
          <p className="text-[#555] text-sm">Фото та описи виконаних проєктів</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="flex items-center gap-1.5 text-green-400 text-sm">
              <Check size={14} /> Збережено
            </span>
          )}
          <button
            onClick={() => setModal(emptyItem())}
            className="flex items-center gap-2 bg-[#C9A84C] text-black px-4 py-2.5 text-sm font-bold rounded-sm hover:bg-[#E8C96A] transition-colors"
          >
            <Plus size={15} /> Додати проєкт
          </button>
          <button
            onClick={handleSaveAll}
            disabled={isPending}
            className="flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] px-4 py-2.5 text-sm rounded-sm hover:bg-[#C9A84C]/8 transition-colors disabled:opacity-50"
          >
            {isPending ? <Loader2 size={14} className="animate-spin" /> : null}
            Зберегти всі зміни
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-[#1E1E1E] rounded-sm overflow-hidden bg-[#0C0C0C] group"
          >
            <div className="relative aspect-video bg-[#111]">
              {item.photo ? (
                <Image
                  src={item.photo}
                  alt={item.alt || item.title}
                  fill
                  className="object-cover"
                  unoptimized={item.photo.startsWith('/')}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[#333] text-xs">
                  Немає фото
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="text-[#C9A84C] text-[10px] uppercase tracking-wider mb-1">{item.type}</div>
              <div className="text-white font-medium text-sm mb-1">{item.title || '—'}</div>
              <div className="text-[#555] text-xs">{item.area} · {item.material}</div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setModal(item)}
                  className="flex items-center gap-1.5 text-xs border border-[#2A2A2A] px-3 py-1.5 text-[#888880] hover:text-white rounded-sm transition-colors"
                >
                  <Pencil size={12} /> Редагувати
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={isPending}
                  className="flex items-center gap-1.5 text-xs border border-[#2A2A2A] px-3 py-1.5 text-[#888880] hover:text-red-400 hover:border-red-800/40 rounded-sm transition-colors"
                >
                  <Trash2 size={12} /> Видалити
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-20 border border-[#1E1E1E] rounded-sm">
          <div className="text-[#333] text-4xl mb-4">📷</div>
          <p className="text-[#555] text-sm mb-4">Портфоліо порожнє</p>
          <button
            onClick={() => setModal(emptyItem())}
            className="bg-[#C9A84C] text-black px-5 py-2.5 text-sm font-bold rounded-sm hover:bg-[#E8C96A] transition-colors"
          >
            + Додати перший проєкт
          </button>
        </div>
      )}
    </div>
  )
}
