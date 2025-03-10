<script setup>
import { Image } from 'primevue';
import AREditorTemplate from './template/AREditorTemplate.vue'

const firstStep = `
<!-- This is the first scene we will create, just a plane and a box on top of it -->
<a-scene>
  <!-- You can change the color and other properties -->
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-box position="0 0.5 -3" rotation="0 0 0" color="#4CC3D9"></a-box>
</a-scene>
`

const firstARScene = `
<a-scene mindar-image="imageTargetSrc: /src/assets/full_logo.mind;" 
color-space="sRGB" 
renderer="colorManagement: true, physicallyCorrectLights" 
vr-mode-ui="enabled: false" 
device-orientation-permission-ui="enabled: false">
  <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
  <!-- This is the code from above, feel free to copy the entire block and overwrite the code below -->
  <!-- Replace from here -->
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-box position="0 0.5 -3" rotation="0 0 0" color="#4CC3D9"></a-box>
  <!-- Replace until here -->
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
  <AREditorTemplate :placeholder="firstStep" :iframeId="`FirstStep`"/>
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
  <div class="container">
    <div class="image-box">
      <Image src="/src/assets/low_contrast.png" alt="Low Contrast Image" width="50%" preview />
      <p>Low Contrast Image</p>
    </div>
    <div class="image-box">
      <Image src="/src/assets/high_contrast.png" alt="High Contrast Image" width="50%" preview />
      <p>High Contrast Image</p>
    </div>
  </div>
<p>
    With a good image, you would be able to get a more sparse and distributed feature map, which will contain the "interesting" points of the image which the algorithm
    would use to identify whether the image is in the camera or not. For the same two images, these are their feature maps. The amount of red circles (please click to enlarge) in the feature map is correlated to how
    "interesting" the image is and whether the algorithm could find points which it can realistically track the image with. 
</p>
<div class="container">
    <div class="image-box">
      <Image src="/src/assets/low_contrast_feature_map.png" alt="Low Contrast Feature Map" width="50%" preview />
      <p>Low Contrast Feature Map</p>
    </div>
    <div class="image-box">
      <Image src="/src/assets/high_contrast_feature_map.png" alt="High Contrast Featire Map" width="50%" preview />
      <p>High Contrast Feature Map</p>
    </div>
</div>
<p>
  You can continue to play around with your own images over at
    <a href="https://hiukim.github.io/mind-ar-js-doc/quick-start/compile">MindAR</a> where they will explain more on how it works and how you can compile your own image to the .mind file.
  Another website that I recommend to guide you to choose a better image is <a href="https://developer.vuforia.com/library/vuforia-engine/images-and-objects/image-targets/best-practices/best-practices-designing-and-developing-image-based-targets/">
    vuforia's best practices</a> on designing and developing image-based targets.
</p>
<h2>
  Adding our 3D model to the scene
</h2>
<p>
  With the image, we can now test our whether the image can be detected and tracked by our camera. First lets initialise the scene along with the special HTML tags that MindAR uses.
</p>
<AREditorTemplate :placeholder="firstARScene" :iframeId="`Add3DModel`"/>
<p>
  
</p>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;  
  text-align: center;  
}
</style>