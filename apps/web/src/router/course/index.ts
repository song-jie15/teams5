import type { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'

const courseRoutes: RouteRecordRaw[] = [
  {
    path: '/courses',
    component: layout,
    children: [
      { path: 'index', component: () => import('@/views/Course/index.vue') }
    ]
  }
]

export default courseRoutes