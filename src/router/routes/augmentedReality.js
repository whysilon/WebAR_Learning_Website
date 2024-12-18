import IntroMenu from '@/views/AugmentedReality/Introduction/IntroMenu.vue';
import IntroContent from '@/views/AugmentedReality/Introduction/IntroContent.vue';
import TypesMenu from '@/views/AugmentedReality/Types/TypesMenu.vue';
import TypesContent from '@/views/AugmentedReality/Types/TypesContent.vue';

export default [
  {
    path: 'AR',
    name: 'AugmentedReality',
    children: [
      {
        path: 'intro-to-AR',
        components: {
          default: IntroMenu,
          module: IntroContent,
        },
      },
      {
        path: 'types-of-AR',
        components: {
          default: TypesMenu,
          module: TypesContent,
        },
      },
    ],
  },
];