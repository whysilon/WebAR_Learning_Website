import { createRouter, createWebHistory } from 'vue-router';
import baseRoutes from './routes/base';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...baseRoutes,
  ],
});

export default router;