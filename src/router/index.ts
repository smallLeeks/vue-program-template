import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../layout/login.vue'),
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../layout/home.vue'),
        },
    ],
})

export default router
