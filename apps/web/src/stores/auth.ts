import { ref } from 'vue'
import { defineStore } from 'pinia'
import { registerApi, loginApi, type RegisterParams, type LoginParams, type UserInfo } from '@/apis/user'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const user = ref<UserInfo | null>(null)

  async function register(params: RegisterParams) {
    const res = await registerApi(params)
    token.value = res.data.token
    user.value = res.data.user
  }

  async function login(params: LoginParams) {
    const res = await loginApi(params)
    token.value = res.data.token
    user.value = res.data.user
  }

  function logout() {
    token.value = ''
    user.value = null
  }

  return { token, user, register, login, logout }
}, {
  persist: true,
})
