import ObjectTrackingMenu from '@/views/ComputerVision/Object Tracking/ObjectTrackingMenu.vue'
import ObjectTrackingContent from '@/views/ComputerVision/Object Tracking/ObjectTrackingContent.vue'
import IntroToComputerVisionMenu from '@/views/ComputerVision/IntroToComputerVision/IntroToComputerVisionMenu.vue'
import IntroToComputerVisionContent from '@/views/ComputerVision/IntroToComputerVision/IntroToComputerVisionContent.vue'

export default [
  {
    path: 'CV',
    name: 'ComputerVision',
    children: [
      {
        path: 'intro-to-computer-vision',
        components: {
          default: IntroToComputerVisionMenu,
          module: IntroToComputerVisionContent,
        },
      },
      {
        path: 'object-tracking',
        components: {
          default: ObjectTrackingMenu,
          module: ObjectTrackingContent,
        },
      },
    ],
  },
]
