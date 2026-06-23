'use server'

import { revalidatePath } from 'next/cache'
import { getContent, updatePortfolio, type PortfolioItem } from '@/lib/content'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import crypto from 'crypto'

export async function savePortfolio(items: PortfolioItem[]) {
  await updatePortfolio(items)
  revalidatePath('/')
  revalidatePath('/admin/dashboard/portfolio')
}

export async function uploadPhoto(formData: FormData): Promise<{ url: string } | { error: string }> {
  const file = formData.get('file') as File
  if (!file || !file.size) return { error: 'Файл не вибрано' }

  const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
  if (!allowed.includes(file.type)) return { error: 'Дозволено тільки JPG, PNG, WebP' }

  if (file.size > 5 * 1024 * 1024) return { error: 'Максимальний розмір файлу — 5 МБ' }

  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
  const name = `${crypto.randomUUID()}.${ext}`
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')

  await mkdir(uploadDir, { recursive: true })
  const buffer = Buffer.from(await file.arrayBuffer())
  await writeFile(path.join(uploadDir, name), buffer)

  return { url: `/uploads/${name}` }
}

export async function deleteProject(id: string) {
  const content = await getContent()
  content.portfolio = content.portfolio.filter((p) => p.id !== id)
  await updatePortfolio(content.portfolio)
  revalidatePath('/')
  revalidatePath('/admin/dashboard/portfolio')
}
