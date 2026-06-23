import { getContent } from '@/lib/content'
import { ContactClient } from './_Client'

export default async function ContactPage() {
  const content = await getContent()
  return <ContactClient initialContact={content.contact} />
}
