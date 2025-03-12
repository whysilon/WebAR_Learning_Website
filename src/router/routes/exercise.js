import AFrameExercise from '@/views/Exercises/AugmentedReality/AFrameExercise.vue'
import ARExerciseStartPage from '@/views/Exercises/AugmentedReality/ARExerciseStartPage.vue'
import ARQuickExample from '@/views/Exercises/AugmentedReality/ARQuickExample.vue'
import FullARExample from '@/views/Exercises/AugmentedReality/FullARExample.vue'
import CVExerciseStartPage from '@/views/Exercises/ComputerVision/CVExerciseStartPage.vue'
import CVQuickExample from '@/views/Exercises/ComputerVision/CVSobelExercise.vue'

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
          default: ARQuickExample,
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
    children: [
      {
        path: 'home',
        components: {
          default: CVExerciseStartPage,
        },
      },
      {
        path: '1',
        components: {
          default: CVQuickExample,
        }
      }
    ],
  },
]
