import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
export const timeout = 50000
let isRefreshing = false
let requestQueue: ((newAccessToken: string) => void)[] = []

export const serverApi = axios.create({
    baseURL: '/api/v1',
    timeout,
})

serverApi.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (error: AxiosError) => {
        if (error.code === 'ERR_NETWORK') {
            ElMessage.error('网络连接失败,请重试')
            return Promise.reject(error)
        }
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

serverApi.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    async (error: AxiosError) => {
        if (error.response?.status !== 401) {
            return Promise.reject(error)
        }

        const authStore = useAuthStore()
        const accessToken = authStore.getAccessToken
        const refreshToken = authStore.getRefreshToken
        const originalRequest = error.config as any

        if (!accessToken || !refreshToken) {
            authStore.logout()
            router.replace('/')
            return Promise.reject(error)
        }

        if (isRefreshing) {
            return new Promise((resolve) => {
                requestQueue.push((newAccessToken: string) => {
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                    resolve(serverApi(originalRequest))
                })
            })
        }

        isRefreshing = true
        try {
            const newToken = await refreshTokenApi({ refreshToken })
            if (newToken.success) {
                authStore.updateToken(newToken.data)
            } else {
                authStore.logout()
                router.replace('/')
                return Promise.reject(error)
            }
            const newAccessToken = newToken.data.accessToken
            requestQueue.forEach(callback => callback(newAccessToken))
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
            return serverApi(originalRequest)
        } catch {
            authStore.logout()
            router.replace('/')
            return Promise.reject(error)
        } finally {
            requestQueue = []
            isRefreshing = false
        }
    }
)

export const aiApi = axios.create({
    baseURL: '/api/ai/v1',
    timeout,
})

aiApi.interceptors.response.use(
    (res: AxiosResponse) => res.data,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            const authStore = useAuthStore()
            authStore.logout()
            window.dispatchEvent(new CustomEvent('auth:login-required'))
        }
        return Promise.reject(error)
    }
)
aiApi.interceptors.response.use(res=>{
    return res.data
})
export const avatarUrl = '/api/v1'
export interface Response<T = any> {
    timestamp: string
    path: string
    message: string
    code: number
    success: boolean
    data: T
}