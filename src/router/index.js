import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import OptionView from '@/views/ComputerVision/OptionView.vue'
import ARMenu from '@/views/AugmentedReality/Module1/ARMenu.vue'
import ModuleLayout from '@/layouts/ModuleLayout.vue'

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
          path: 'docs',
          name: 'Document',
          component: ModuleLayout,
          children: [
            { 
              path: 'AR',
              components: {
                default: ARMenu,
                helper: OptionView
              }
            }
          ]
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
