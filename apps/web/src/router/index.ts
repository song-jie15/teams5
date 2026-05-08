import { createRouter, createWebHistory } from 'vue-router'
import home from './home/index'
import wordBook from './word-book/index'
import course from './course/index'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home, //主页
    ...wordBook, //词库
    ...course,//课程
  ]
})

<<<<<<< HEAD
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

=======
>>>>>>> 4c73c8495d1a48659a6a13317d34d6ca4a2dc34a
export default router
