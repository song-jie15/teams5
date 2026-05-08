import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { WebResultUser, Token } from '@en/common/user'
import { registerApi, loginApi, type RegisterParams, type LoginParams } from '@/apis/user'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<WebResultUser | null>(null)

  const getAccessToken = computed(() => user.value?.token.accessToken)
  const getRefreshToken = computed(() => user.value?.token.refreshToken)

  const updateToken = (newToken: Token) => {
    if (user.value) {
      user.value.token = newToken
    }
  }

  async function register(params: RegisterParams) {
    const res = await registerApi(params)
    user.value = res.data
  }

  async function login(params: LoginParams) {
    const res = await loginApi(params)
    user.value = res.data
  }

  function logout() {
    user.value = null
  }

  return { user, getAccessToken, getRefreshToken, updateToken, register, login, logout }
}, {
  persist: true,
})
