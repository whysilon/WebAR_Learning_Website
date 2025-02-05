import BaseLayout from '@/layouts/BaseLayout.vue'
import ModuleLayout from '@/layouts/ModuleLayout.vue'
import HomeView from '@/views/HomeView.vue'
import computerVision from './computerVision'
import augmentedReality from './augmentedReality'
import TestingView from '@/views/TestingView.vue'
import ExerciseLayout from '@/layouts/ExerciseLayout.vue'

export default [
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
        children: [...augmentedReality, ...computerVision],
      },
      {
        path: 'exercise',
        name: 'Exercise',
        component: ExerciseLayout,
      },
      {
        path:'testing',
        name:'testing',
        component: TestingView,
      },
    ],
  },
]
