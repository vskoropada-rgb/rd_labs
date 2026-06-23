import fs from 'fs/promises'
import path from 'path'

const DATA_PATH = path.join(process.cwd(), 'data', 'content.json')

export interface PortfolioItem {
  id: string
  title: string
  type: string
  area: string
  material: string
  photo: string
  alt: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}

export interface HeroContent {
  badge: string
  headline1: string
  headline2: string
  subtitle: string
  stats: { num: string; label: string }[]
}

export interface Testimonial {
  id: string
  name: string
  location: string
  project: string
  text: string
  stars: number
}

export interface SiteContent {
  hero: HeroContent
  portfolio: PortfolioItem[]
  contact: ContactInfo
  testimonials: Testimonial[]
}

export async function getContent(): Promise<SiteContent> {
  const raw = await fs.readFile(DATA_PATH, 'utf-8')
  return JSON.parse(raw)
}

export async function saveContent(content: SiteContent): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(content, null, 2), 'utf-8')
}

export async function updatePortfolio(items: PortfolioItem[]): Promise<void> {
  const content = await getContent()
  content.portfolio = items
  await saveContent(content)
}

export async function updateContact(contact: ContactInfo): Promise<void> {
  const content = await getContent()
  content.contact = contact
  await saveContent(content)
}

export async function updateHero(hero: HeroContent): Promise<void> {
  const content = await getContent()
  content.hero = hero
  await saveContent(content)
}

export async function updateTestimonials(testimonials: Testimonial[]): Promise<void> {
  const content = await getContent()
  content.testimonials = testimonials
  await saveContent(content)
}
