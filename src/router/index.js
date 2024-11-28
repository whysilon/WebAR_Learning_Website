import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import OptionView from '@/views/ComputerVision/OptionView.vue'
import ModuleLayout from '@/layouts/ModuleLayout.vue'
import ARExample from '@/views/AugmentedReality/ARExample.vue'

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
          path: 'option:id',
          name: 'Option',
          component: ARExample,
        },
        {
          path: 'item:id',
          name: 'Item',
          component: OptionView
        }
      ],
    },
  ],
})

export default router
