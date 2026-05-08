import { serverApi } from '..'
import type { Response } from '..'
import type { AvatarResult, UserUpdate } from '@en/common/user'

export interface UserInfo {
  id: string
  name: string
  phone: string
  email?: string | null
  address?: string | null
  avatar?: string | null
  bio?: string | null
  isTimingTask: boolean
  timingTaskTime: string
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

export interface UpdateProfileParams {
    name?: string
    email?: string
    avatar?: string
}

export const registerApi = (data: RegisterParams) => {
  return serverApi.post<any, Response<AuthResult>>('/user/register', data)
}

export const loginApi = (data: LoginParams) => {
  return serverApi.post<any, Response<AuthResult>>('/auth/login', data)
}

export const uploadAvatar = (data: FormData) => {
  return serverApi.post<any, Response<AvatarResult>>('/user/upload-avatar', data)
}

export const updateUser = (data: UserUpdate) => {
  return serverApi.post<any, Response<UserUpdate>>('/user/update-user', data)
}
