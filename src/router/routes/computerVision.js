import ObjectTrackingMenu from '@/views/ComputerVision/Object Tracking/ObjectTrackingMenu.vue'
import ObjectTrackingContent from '@/views/ComputerVision/Object Tracking/ObjectTrackingContent.vue'

export default [
  {
    path: 'CV',
    name: 'ComputerVision',
    children: [
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
