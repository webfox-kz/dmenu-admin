import type UserRole from '@/interfaces/user-role.interface'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export interface JwtPayload {
  id: string
  role: UserRole
  iat: number
  exp: number
}

export function setToken(token: string): void {
  Cookies.set('token', token)
}

export function getToken(): string | null {
  const token = Cookies.get('token')

  if (token) return token

  return null
}

export function removeToken(): void {
  Cookies.remove('token')
}

export function decodeToken(): JwtPayload | null {
  const token = getToken()

  if (!token) return null

  return jwtDecode<JwtPayload>(token)
}

export function isTokenValid(): boolean {
  const token = decodeToken()

  if (!token) return false

  return Date.now() < token.exp * 1000
}
