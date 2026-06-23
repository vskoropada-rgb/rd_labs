import crypto from 'crypto'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'sbdpro2025'
const SESSION_SECRET = process.env.SESSION_SECRET || 'sbdpro_session_key_2025'

export const SESSION_COOKIE = 'admin_session'

export function createSessionToken(): string {
  return crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(ADMIN_PASSWORD)
    .digest('hex')
}

export function validatePassword(input: string): boolean {
  return input === ADMIN_PASSWORD
}

export function isValidToken(token: string): boolean {
  return token === createSessionToken()
}
