import { serverApi } from '..'
import type { Response } from '..'

export interface UserInfo {
  id: string
  name: string
  phone: string
  email?: string | null
  avatar?: string | null
  wordNumber: number
  dayNumber: number
  createdAt: string
  updatedAt: string
  lastLoginAt?: string | null
}

export interface RegisterParams {
  name: string
  phone: string
  email?: string
  password: string
}

export interface LoginParams {
  phone: string
  password: string
}

export interface AuthResult {
  user: UserInfo
  token: string
}

export const registerApi = (data: RegisterParams) => {
  return serverApi.post<any, Response<AuthResult>>('/user', data)
}

export const loginApi = (data: LoginParams) => {
  return serverApi.post<any, Response<AuthResult>>('/auth/login', data)
}
