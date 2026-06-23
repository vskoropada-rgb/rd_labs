'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { validatePassword, createSessionToken, SESSION_COOKIE } from '@/lib/auth'

export async function login(formData: FormData) {
  const password = formData.get('password') as string

  if (!validatePassword(password)) {
    return { error: 'Невірний пароль' }
  }

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  redirect('/admin/dashboard')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
  redirect('/admin')
}
