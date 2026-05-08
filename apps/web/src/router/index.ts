import { createRouter, createWebHistory } from 'vue-router'
import home from './home/index'
import wordBook from './word-book/index'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home,
    ...wordBook,
  ]
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const authRaw = localStorage.getItem('auth')
    if (!authRaw) {
      window.dispatchEvent(new CustomEvent('auth:login-required'))
      return { path: '/' }
    }
    try {
      const parsed = JSON.parse(authRaw)
      const hasAccess = parsed?.user?.token?.accessToken || parsed?.token
      if (!hasAccess) {
        window.dispatchEvent(new CustomEvent('auth:login-required'))
        return { path: '/' }
      }
    } catch {
      window.dispatchEvent(new CustomEvent('auth:login-required'))
      return { path: '/' }
    }
  }
})

export default router
