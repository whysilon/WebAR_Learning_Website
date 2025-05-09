import EdgeDetectionMenu from '@/views/ComputerVision/Edge Detection/EdgeDetectionMenu.vue'
import EdgeDetectionContent from '@/views/ComputerVision/Edge Detection/EdgeDetectionContent.vue'
import IntroToComputerVisionMenu from '@/views/ComputerVision/IntroToComputerVision/IntroToComputerVisionMenu.vue'
import IntroToComputerVisionContent from '@/views/ComputerVision/IntroToComputerVision/IntroToComputerVisionContent.vue'
import ObjectTrackingMenu from '@/views/ComputerVision/Object Tracking/ObjectTrackingMenu.vue'
import ObjectTrackingContent from '@/views/ComputerVision/Object Tracking/ObjectTrackingContent.vue'
import FeatureDetectionMenu from '@/views/ComputerVision/Feature Detection/FeatureDetectionMenu.vue'
import FeatureDetectionContent from '@/views/ComputerVision/Feature Detection/FeatureDetectionContent.vue'

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
        path: 'edge-detection',
        components: {
          default: EdgeDetectionMenu,
          module: EdgeDetectionContent,
        },
      },
      {
        path: 'feature-detection',
        components: {
          default: FeatureDetectionMenu,
          module: FeatureDetectionContent,
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
