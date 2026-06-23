'use server'

import { revalidatePath } from 'next/cache'
import { updateHero, type HeroContent } from '@/lib/content'

export async function saveHero(hero: HeroContent) {
  await updateHero(hero)
  revalidatePath('/')
  revalidatePath('/admin/dashboard/hero')
}
