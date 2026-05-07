import layout from '@/layout/index.vue'

export default [
    {
        path: '/word-book',
        component: layout,
        meta: { requiresAuth: true },
        children: [
            { path: 'index', component: () => import('@/views/WordBook/index.vue') },
        ]
    }
]