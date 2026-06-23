'use client'

import { useState } from 'react'
import { login } from './actions'

export default function AdminLogin() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const fd = new FormData(e.currentTarget)
    const result = await login(fd)
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="w-10 h-10 bg-[#C9A84C] rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-sm">СБД</span>
          </div>
          <span className="text-white font-semibold text-lg">Адміністратор</span>
        </div>

        <div className="border border-[#2A2A2A] rounded-sm p-8 bg-[#0E0E0E]">
          <h1 className="text-white font-bold text-xl mb-2">Вхід в систему</h1>
          <p className="text-[#888880] text-sm mb-8">Введіть пароль для доступу до панелі</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[#888880] text-xs uppercase tracking-wider mb-2 block">
                Пароль
              </label>
              <input
                name="password"
                type="password"
                required
                autoFocus
                className="w-full bg-[#111] border border-[#2A2A2A] rounded-sm px-4 py-3 text-white placeholder-[#444] focus:border-[#C9A84C]/60 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-900/20 border border-red-800/40 rounded-sm px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C9A84C] text-black py-3.5 font-bold rounded-sm hover:bg-[#E8C96A] transition-colors disabled:opacity-50"
            >
              {loading ? 'Перевірка...' : 'Увійти'}
            </button>
          </form>
        </div>

        <p className="text-[#333] text-xs text-center mt-6">
          СБД ПРО · Система управління сайтом
        </p>
      </div>
    </div>
  )
}
