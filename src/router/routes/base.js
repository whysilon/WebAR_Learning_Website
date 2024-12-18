import BaseLayout from '@/layouts/BaseLayout.vue';
import ModuleLayout from '@/layouts/ModuleLayout.vue';
import HomeView from '@/views/HomeView.vue';
import computerVision from './computerVision';
import augmentedReality from './augmentedReality';

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
        children: [
          ...augmentedReality,
          ...computerVision,
        ],
      },
    ],
  },
]