import Link from 'next/link'
import { logout } from '../actions'
import { LayoutDashboard, Images, Phone, Type, LogOut } from 'lucide-react'

const nav = [
  { href: '/admin/dashboard', label: 'Огляд', icon: LayoutDashboard },
  { href: '/admin/dashboard/portfolio', label: 'Портфоліо', icon: Images },
  { href: '/admin/dashboard/contact', label: 'Контакти', icon: Phone },
  { href: '/admin/dashboard/hero', label: 'Тексти Hero', icon: Type },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080808] flex">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 border-r border-[#1E1E1E] flex flex-col">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-[#1E1E1E]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-xs">СБД</span>
            </div>
            <span className="text-white font-medium text-sm leading-tight">
              Адмін панель
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-[#888880] hover:text-white hover:bg-[#141414] transition-all text-sm group"
            >
              <item.icon size={16} className="group-hover:text-[#C9A84C] transition-colors" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-[#1E1E1E] space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-[#555] hover:text-white transition-colors text-xs"
          >
            ↗ Переглянути сайт
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-[#888880] hover:text-red-400 hover:bg-red-900/10 transition-all text-sm"
            >
              <LogOut size={15} />
              Вийти
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
