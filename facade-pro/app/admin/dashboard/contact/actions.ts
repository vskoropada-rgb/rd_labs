'use server'

import { revalidatePath } from 'next/cache'
import { updateContact, type ContactInfo } from '@/lib/content'

export async function saveContact(contact: ContactInfo) {
  await updateContact(contact)
  revalidatePath('/')
  revalidatePath('/admin/dashboard/contact')
}
