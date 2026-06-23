import { getContent } from '@/lib/content'
import { PortfolioClient } from './_Client'

export default async function PortfolioPage() {
  const content = await getContent()
  return <PortfolioClient initialItems={content.portfolio} />
}
