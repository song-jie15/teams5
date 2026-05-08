import { serverApi } from '..'
import type { Response } from '..'
import type { WebResultUser } from '@en/common/user'

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

export const registerApi = (data: RegisterParams) =>
    serverApi.post<any, Response<WebResultUser>>('/user/register', data)

export const loginApi = (data: LoginParams) =>
    serverApi.post<any, Response<WebResultUser>>('/auth/login', data)
