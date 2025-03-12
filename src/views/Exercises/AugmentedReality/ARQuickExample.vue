<script setup>
import AREditorTemplate from '@/views/Exercises/AugmentedReality/template/AREditorTemplate.vue'
import { Button, Image } from 'primevue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const code = ref(`
<a-scene mindar-image="imageTargetSrc: /src/assets/AR/ntu_logo.mind;" 
color-space="sRGB" 
renderer="colorManagement: true, physicallyCorrectLights" 
vr-mode-ui="enabled: false" 
device-orientation-permission-ui="enabled: false">
  <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
  <a-entity mindar-image-target="targetIndex: 0">
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-box position="0 0.5 -3" rotation="0 0 0" color="#4CC3D9"></a-box>
  </a-entity>
</a-scene>
`)
</script>

<template>
  <h1>Quick Example</h1>
  <p>
    In this code, we will be running using
    <a href="https://hiukim.github.io/mind-ar-js-doc/">Mind AR</a> to do our simple AR exercise. In
    the enclosed example, this is a very simple example where we use the example given by the
    library just as a quick explainer and example. 
  </p>
  <p>
    The example is purely in HTML and uses A-FRAME to display the "augmented" part of the
    experience. By using your webcam and scanning the image below after you run the code, a special
    object created by the original author will be displayed.
  </p>
  <h2>Natural Feature Tracking (NFT)</h2>
  <p>
    For a more expansive explanation on the technology used, please look at the section on
    <a href="/docs/CV/natural-feature-tracking">Natural Feature Tracking (NFT)</a>. As a quick
    summary, NFT enables tracking and overlaying virtual content onto real-world objects in a
    markerless fashion. This means that the object does not require a special marker to be displayed
    but rather relies on the "natural" features of the environment to track and display the object.
    NFT usually uses algorithms such as Scale-Invariant Feature Transform (SIFT) or Speeded-up
    Robust Features (SURF) to detect the natural environment.
  </p>
  <div id="code-editor">
    <h2>Code snippet</h2>
    <AREditorTemplate :placeholder="code" :iframeId="`quickExample`" />
  </div>
  <div class="image-box">
      <Image src="/src/assets/AR/high_contrast.png" alt="High Contrast Image" width="50%" />
      <p>Image to scan</p>
  </div>
  <h2>Explanation</h2>
  <p>
    So in the example shown, we have a very simple example of how MindAR works. It requires a
    special file that is basically a "dissection" of the image that it is finding. This allows the
    website to understand, identify and track the image. The 3D Model is then displayed within the
    a-scene tag, in this case on top of the object. MindAR in this case is in charge of tracking and
    visbility and repositioning of the object (a-entity).
  </p>
  <Button asChild v-slot="slotProps">
    <RouterLink :class="slotProps.class" to="/exercise/AR/2">Next Page</RouterLink>
  </Button>
</template>

<style scoped>
#code-editor {
  display: flex;
  flex-direction: column;
}
.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
