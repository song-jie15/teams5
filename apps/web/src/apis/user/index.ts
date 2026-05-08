import { serverApi } from '..'
import type { Response } from '..'
import type { WebResultUser, ResultUser } from '@en/common/user'

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

export interface ChangePasswordParams {
    oldPassword: string
    newPassword: string
}

export const registerApi = (data: RegisterParams) =>
    serverApi.post<any, Response<WebResultUser>>('/user/register', data)

export const loginApi = (data: LoginParams) =>
    serverApi.post<any, Response<WebResultUser>>('/auth/login', data)

export const getProfileApi = () =>
    serverApi.get<any, Response<ResultUser>>('/user/profile')

export const updateProfileApi = (data: UpdateProfileParams) =>
    serverApi.patch<any, Response<ResultUser>>('/user/profile', data)

export const changePasswordApi = (data: ChangePasswordParams) =>
    serverApi.post<any, Response<null>>('/user/change-password', data)
