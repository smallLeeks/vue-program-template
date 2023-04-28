import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../features/Home/routes/index.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../features/About/routes/index.vue'),
        },
    ],
});

export default router;
