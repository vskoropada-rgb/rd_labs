import { getContent } from '@/lib/content'
import { Images, Phone, FileText, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default async function Dashboard() {
  const content = await getContent()

  const cards = [
    {
      title: 'Проєктів у портфоліо',
      value: content.portfolio.length,
      sub: 'Фото та описи об\'єктів',
      icon: Images,
      href: '/admin/dashboard/portfolio',
      color: '#C9A84C',
    },
    {
      title: 'Відгуків клієнтів',
      value: content.testimonials.length,
      sub: 'Оцінки та коментарі',
      icon: FileText,
      href: '/admin/dashboard/portfolio',
      color: '#6A9A7A',
    },
    {
      title: 'Контактні дані',
      value: content.contact.phone,
      sub: 'Телефон, email, адреса',
      icon: Phone,
      href: '/admin/dashboard/contact',
      color: '#7A8AAA',
    },
  ]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-white text-2xl font-bold mb-1">Панель керування</h1>
        <p className="text-[#555] text-sm">Управляйте контентом сайту СБД ПРО</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="border border-[#1E1E1E] rounded-sm p-6 hover:border-[#2A2A2A] transition-colors bg-[#0C0C0C] group"
          >
            <div className="flex items-start justify-between mb-4">
              <card.icon size={20} style={{ color: card.color }} />
              <ExternalLink size={14} className="text-[#333] group-hover:text-[#555] transition-colors" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{card.value}</div>
            <div className="text-white text-sm font-medium mb-0.5">{card.title}</div>
            <div className="text-[#555] text-xs">{card.sub}</div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="border border-[#1E1E1E] rounded-sm p-6 bg-[#0C0C0C]">
        <h2 className="text-white font-semibold mb-5 text-sm">Швидкі дії</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/dashboard/portfolio"
            className="bg-[#C9A84C] text-black px-5 py-2.5 text-sm font-bold rounded-sm hover:bg-[#E8C96A] transition-colors"
          >
            + Додати проєкт
          </Link>
          <Link
            href="/admin/dashboard/contact"
            className="border border-[#2A2A2A] text-[#888880] px-5 py-2.5 text-sm rounded-sm hover:border-[#C9A84C]/40 hover:text-white transition-colors"
          >
            Редагувати контакти
          </Link>
          <Link
            href="/admin/dashboard/hero"
            className="border border-[#2A2A2A] text-[#888880] px-5 py-2.5 text-sm rounded-sm hover:border-[#C9A84C]/40 hover:text-white transition-colors"
          >
            Змінити тексти
          </Link>
          <Link
            href="/"
            target="_blank"
            className="border border-[#2A2A2A] text-[#555] px-5 py-2.5 text-sm rounded-sm hover:text-white transition-colors"
          >
            ↗ Відкрити сайт
          </Link>
        </div>
      </div>
    </div>
  )
}
