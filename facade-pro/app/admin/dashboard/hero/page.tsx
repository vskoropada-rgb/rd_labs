import { getContent } from '@/lib/content'
import { HeroClient } from './_Client'

export default async function HeroPage() {
  const content = await getContent()
  return <HeroClient initialHero={content.hero} />
}
