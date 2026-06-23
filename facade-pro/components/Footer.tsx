export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060606] border-t border-[#151515] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C9A84C] rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-black font-bold text-xs">СБД</span>
            </div>
            <span className="text-white font-medium text-sm">
              Світ Будівництва і Дизайну <span className="text-[#C9A84C]">ПРО</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Послуги', href: '#services' },
              { label: 'Портфоліо', href: '#portfolio' },
              { label: 'Про нас', href: '#about' },
              { label: 'Процес', href: '#process' },
              { label: 'Контакти', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#555] hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-[#333] text-xs">
            © {year} СБД ПРО. Всі права захищено.
          </p>
        </div>
      </div>
    </footer>
  )
}
