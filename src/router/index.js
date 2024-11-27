import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import AboutView from '@/views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Base',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'About',
          component: AboutView,
        },
      ],
    },
  ],
})

export default router
