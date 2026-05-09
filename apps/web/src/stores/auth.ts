import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { loginApi, registerApi, type LoginParams, type RegisterParams, type UserInfo } from '@/apis/user'
import { useUserStore } from '@/stores/user'
import type { Token, WebResultUser } from '@en/common/user'

type LoginPayload =
  | (UserInfo & { token: Token | string; refreshToken?: string })
  | { user: UserInfo; token: Token | string; refreshToken?: string }

const normalizeToken = (token: Token | string, refreshToken?: string): Token => {
  if (typeof token === 'string') {
    return {
      accessToken: token,
      refreshToken: refreshToken || token,
    }
  }
  return token
}

const normalizeUser = (payload: LoginPayload): WebResultUser => {
  if ('user' in payload) {
    return {
      ...payload.user,
      token: normalizeToken(payload.token, payload.refreshToken),
    } as unknown as WebResultUser
  }

  const { token, refreshToken, ...user } = payload
  return {
    ...user,
    token: normalizeToken(token, refreshToken),
  } as unknown as WebResultUser
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<WebResultUser | null>(null)

    const getAccessToken = computed(() => user.value?.token.accessToken)
    const getRefreshToken = computed(() => user.value?.token.refreshToken)

    const persistAuth = (nextUser: WebResultUser) => {
      user.value = nextUser
      useUserStore().setUser(nextUser)
      localStorage.setItem('auth', JSON.stringify({ user: nextUser }))
    }

    const updateToken = (newToken: Token) => {
      if (!user.value) return
      user.value.token = newToken
      useUserStore().setUser(user.value)
      localStorage.setItem('auth', JSON.stringify({ user: user.value }))
    }

    async function login(params: LoginParams) {
      const res = await loginApi(params)
      persistAuth(normalizeUser(res.data as LoginPayload))
    }

    async function register(params: RegisterParams) {
      const res = await registerApi(params)
      persistAuth(normalizeUser(res.data as LoginPayload))
    }

    function restoreFromStorage() {
      if (user.value) {
        useUserStore().setUser(user.value)
        return
      }
      const authRaw = localStorage.getItem('auth')
      if (!authRaw) return
      try {
        const parsed = JSON.parse(authRaw)
        const storedUser = parsed?.user
        if (storedUser?.token?.accessToken) {
          user.value = storedUser
          useUserStore().setUser(storedUser)
        }
      } catch {
        localStorage.removeItem('auth')
      }
    }

    function logout() {
      user.value = null
      useUserStore().logout()
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
    }

    return { user, getAccessToken, getRefreshToken, updateToken, register, login, restoreFromStorage, logout }
  },
  {
    persist: true,
  },
)
