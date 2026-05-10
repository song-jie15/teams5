import { createRouter, createWebHistory } from 'vue-router'
import home from './home/index'
import wordBook from './word-book/index'
import course from './course/index'
import setting from './setting/index'
import { isTokenExpired } from '@/utils/token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home,
    ...wordBook,
    ...course,
    ...setting,
  ]
})

function getTokens(): { accessToken?: string; refreshToken?: string } {
  try {
    const raw = localStorage.getItem('auth')
    if (raw) {
      const parsed = JSON.parse(raw)
      const u = parsed?.user ?? null
      if (u?.token?.accessToken) {
        return { accessToken: u.token.accessToken, refreshToken: u.token.refreshToken }
      }
    }
  } catch {}
  return {}
}

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const { accessToken, refreshToken } = getTokens()

    if (!accessToken || !refreshToken) {
      sessionStorage.setItem('redirectPath', to.fullPath)
      window.dispatchEvent(new CustomEvent('auth:login-required'))
      return { path: '/' }
    }

    if (isTokenExpired(refreshToken)) {
      localStorage.removeItem('auth')
      window.dispatchEvent(new CustomEvent('auth:login-required'))
      return { path: '/' }
    }
  }
})

export default router
