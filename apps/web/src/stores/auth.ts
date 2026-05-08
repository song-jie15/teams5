import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { registerApi, loginApi, type RegisterParams, type LoginParams, type UserInfo } from '@/apis/user'
import { useUserStore } from '@/stores/user'
import type { WebResultUser } from '@en/common/user'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<WebResultUser | null>(null)

  const getAccessToken = computed(() => user.value?.token.accessToken)
  const getRefreshToken = computed(() => user.value?.token.refreshToken)

  const updateToken = (newToken: Token) => {
    if (user.value) {
      user.value.token = newToken
    }
  }

  function syncUserStore(userInfo: UserInfo, accessToken: string) {
    const userStore = useUserStore()
    userStore.setUser({
      ...userInfo,
      token: {
        accessToken,
        refreshToken: accessToken,
      },
    } as unknown as WebResultUser)
  }

  async function register(params: RegisterParams) {
    const res = await registerApi(params)
    token.value = res.data.token
    user.value = res.data.user
    syncUserStore(res.data.user, res.data.token)
  }

  async function login(params: LoginParams) {
    const res = await loginApi(params)
    token.value = res.data.token
    user.value = res.data.user
    syncUserStore(res.data.user, res.data.token)
  }

  function logout() {
    user.value = null
    useUserStore().logout()
  }

  return { user, getAccessToken, getRefreshToken, updateToken, register, login, fetchProfile, updateProfile, changePassword, logout }
}, {
  persist: true,
})
