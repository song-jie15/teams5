import { createRouter, createWebHistory } from 'vue-router'
import home from './home/index'
import wordBook from './word-book/index'
import course from './course/index'
import setting from './setting/index'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home,
    ...wordBook,
    ...course,
    ...setting,
  ]
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const authRaw = localStorage.getItem('auth')
    if (!authRaw) {
      sessionStorage.setItem('redirectPath', to.fullPath)
      window.dispatchEvent(new CustomEvent('auth:login-required'))
      return { path: '/' }
    }
    try {
      const parsed = JSON.parse(authRaw)
      const hasAccess = parsed?.user?.token?.accessToken || parsed?.token
      if (!hasAccess) {
        sessionStorage.setItem('redirectPath', to.fullPath)
        window.dispatchEvent(new CustomEvent('auth:login-required'))
        return { path: '/' }
      }
    } catch {
      sessionStorage.setItem('redirectPath', to.fullPath)
      window.dispatchEvent(new CustomEvent('auth:login-required'))
      return { path: '/' }
    }
  }
})

export default router
