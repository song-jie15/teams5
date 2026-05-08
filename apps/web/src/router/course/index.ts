import type { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'

const courseRoutes: RouteRecordRaw[] = [
  {
    path: '/courses',
    component: layout,
    children: [
      { path: 'index', component: () => import('@/views/Course/index.vue') },
      { path: 'detail/:id', component: () => import('@/views/Course/detail.vue') }
    ]
  }
]

export default courseRoutes
