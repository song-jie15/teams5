import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { WebResultUser, ResultUser, Token } from '@en/common/user'
import { registerApi, loginApi, getProfileApi, updateProfileApi, changePasswordApi, type RegisterParams, type LoginParams, type UpdateProfileParams, type ChangePasswordParams } from '@/apis/user'

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

  async function fetchProfile() {
    const res = await getProfileApi()
    if (res.success && user.value) {
      Object.assign(user.value, res.data)
    }
  }

  async function updateProfile(params: UpdateProfileParams) {
    const res = await updateProfileApi(params)
    if (res.success && user.value) {
      Object.assign(user.value, res.data)
    }
  }

  async function changePassword(params: ChangePasswordParams) {
    await changePasswordApi(params)
  }

  function logout() {
    user.value = null
  }

  return { user, getAccessToken, getRefreshToken, updateToken, register, login, fetchProfile, updateProfile, changePassword, logout }
}, {
  persist: true,
})
