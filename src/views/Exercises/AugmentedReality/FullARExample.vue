<script setup>
import AREditorTemplate from './template/AREditorTemplate.vue'

const firstStep = `
<!-- This is the first scene we will create, just a plane and a box on top of it -->
<a-scene>
  <!-- You can change the color as needed in the properties -->
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-box position="0 0.5 -3" rotation="0 0 0" color="#4CC3D9"></a-box>
</a-scene>
`
</script>

<template>
  <h1>Full AR Example with A-FRAME</h1>
  <h2>
    First Steps
  </h2>
  <p>
    We will be walking through step by step how to create a full AR app using MindAR and A-FRAME.
    First of all, we want to create a simple scene. Let us start with initialising the scene and
    adding a simple box to it.
  </p>
  <AREditorTemplate :placeholder="firstStep" />
  <p>
    Although it looks really plain now with the white background, but this is the start of what we would like to display in real life. 
    We will be adding more entities to the scene to make it more interesting.
  </p>
  <h2>
    Choosing a right image
  </h2>
  <p>
    With MindAR, they utilise NFT to identify the image. Any image is possible, but using images with high contrast will be better for detection. For example, the image
    below on the left is an example of an image with poor contrast while the image on the right is an image with good contrast.
  </p>
  <div style="display: flex; justify-content: space-around;">
    <img src="@/assets/images/low_contrast.png" alt="Low contrast image" />
    <img src="@/assets/images/high_contrast.png" alt="High contrast image" />
  </div>
</template>
