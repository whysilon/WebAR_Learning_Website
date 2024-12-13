import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import IntroMenu from '@/views/AugmentedReality/Introduction/IntroMenu.vue'
import ModuleLayout from '@/layouts/ModuleLayout.vue'
import IntroContent from '@/views/AugmentedReality/Introduction/IntroContent.vue'
import TypesMenu from '@/views/AugmentedReality/Types/TypesMenu.vue'
import TypesContent from '@/views/AugmentedReality/Types/TypesContent.vue'
import ObjectTrackingMenu from '@/views/ComputerVision/Object Tracking/ObjectTrackingMenu.vue'
import ObjectTrackingContent from '@/views/ComputerVision/Object Tracking/ObjectTrackingContent.vue'

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
              path: 'intro-to-AR',
              components: {
                default: IntroMenu,
                module: IntroContent
              }
            },
            {
              path: 'types-of-AR',
              components: {
                default: TypesMenu,
                module: TypesContent
              }
            },
          ]
        },
        {
          path: 'CV',
          name: 'ComputerVision',
          component: ModuleLayout,
          children: [
            {
              path: 'object-tracking',
              components: {
                default: ObjectTrackingMenu,
                module: ObjectTrackingContent
              }
        }
      ],
    },
  ],
})

export default router
