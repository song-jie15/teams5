import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
export const timeout = 50000
export const serverApi = axios.create({
    baseURL: '/api/v1',
    timeout,
})

serverApi.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('auth')
            window.dispatchEvent(new CustomEvent('auth:unauthorized'))
        }
        return Promise.reject(error)
    }
)

serverApi.interceptors.request.use((config) => {
    const authRaw = localStorage.getItem('auth')
    if (authRaw) {
        try {
            const parsed = JSON.parse(authRaw)
            if (parsed.token) {
                config.headers.Authorization = `Bearer ${parsed.token}`
            }
        } catch {}
    }
    return config
})

export const aiApi = axios.create({
    baseURL: '/api/ai/v1',
    timeout,
})

aiApi.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('auth')
            window.dispatchEvent(new CustomEvent('auth:unauthorized'))
        }
        return Promise.reject(error)
    }
)

aiApi.interceptors.request.use((config) => {
    const authRaw = localStorage.getItem('auth')
    if (authRaw) {
        try {
            const parsed = JSON.parse(authRaw)
            if (parsed.token) {
                config.headers.Authorization = `Bearer ${parsed.token}`
            }
        } catch {}
    }
    return config
})

export interface Response<T = any> {
    timestamp: string,
    path: string,
    message: string,
    code: number,
    success: boolean,
    data: T
}
