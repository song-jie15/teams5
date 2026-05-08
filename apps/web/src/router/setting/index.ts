import layout from '@/layout/index.vue'

export default [
    {
        path: '/setting',
        component: layout,
        meta: { requiresAuth: true },
        children: [
            { path: 'index', component: () => import('@/views/Setting/index.vue') },
        ]
    }
]
