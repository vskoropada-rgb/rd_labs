import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'sbdpro2025'
const SESSION_SECRET = process.env.SESSION_SECRET || 'sbdpro_session_key_2025'
const SESSION_COOKIE = 'admin_session'

async function computeToken(): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(SESSION_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(ADMIN_PASSWORD))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin/dashboard')) {
    const session = request.cookies.get(SESSION_COOKIE)
    const expected = await computeToken()
    if (!session || session.value !== expected) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
