import AugmentedRealityEditor from '@/views/Exercises/AugmentedReality/AugmentedRealityEditor.vue'
import AugmentedRealityExercise from '@/views/Exercises/AugmentedReality/AugmentedRealityExercise.vue'

export default [
  {
    path: 'AR',
    components: {
      default: AugmentedRealityExercise,
      module: AugmentedRealityEditor,
    },
  },
  {
    path: 'CV',
    components: {
      default: AugmentedRealityExercise,
    },
  },
]
