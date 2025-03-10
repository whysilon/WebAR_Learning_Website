import AFrameExercise from '@/views/Exercises/AugmentedReality/AFrameExercise.vue'
import ARExerciseStartPage from '@/views/Exercises/AugmentedReality/ARExerciseStartPage.vue'
import AugmentedRealityExercise from '@/views/Exercises/AugmentedReality/AugmentedRealityExercise.vue'
import FullARExample from '@/views/Exercises/AugmentedReality/FullARExample.vue'

export default [
  {
    path: 'AR',
    children: [
      {
        path: 'home',
        components: {
          default: ARExerciseStartPage,
        },
      },
      {
        path: '1',
        components: {
          default: AugmentedRealityExercise,
        },
      },
      {
        path: '2',
        components: {
          default: AFrameExercise,
        },
      },
      {
        path: '3',
        components: {
          default: FullARExample,
        },
      },
    ],
  },
  {
    path: 'CV',
    components: {
      default: AugmentedRealityExercise,
    },
  },
]
