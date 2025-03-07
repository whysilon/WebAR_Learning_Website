<script setup>
import AREditorTemplate from '@/views/Exercises/AugmentedReality/template/AREditorTemplate.vue'
import { Button } from 'primevue';
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const code = ref(`
    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.png" />
        <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
      <\/a-assets>
      <a-camera position="0 0 0" look-controls="enabled: false"><\/a-camera>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"><\/a-plane>
        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"\/>
      <\/a-entity>
    <\/a-scene>
`)

</script>

<template>
  <h1>Quick Example</h1>
  <p>
    In this code, we will be running using <a href="https://hiukim.github.io/mind-ar-js-doc/">Mind AR</a> to do our simple AR exercise. In the enclosed example, this is a very simple example
    where we use the example given by the library just as a quick explainer and example
  </p>
  <p>
    The example is purely in HTML and uses A-FRAME to display the "augmented" part of the experience. By using your webcam and scanning the image below after you run the code, a special object created by the 
    original author will be displayed.
  </p>
  <h2> Natural Feature Tracking (NFT)</h2>
  <p>
    For a more expansive explanation on the technology used, please look at the section on <a href="/docs/CV/natural-feature-tracking">Natural Feature Tracking (NFT)</a>. As a quick summary,
    NFT enables tracking and overlaying virtual content onto real-world objects in a markerless fashion. This means that the object does not require a special marker to be displayed
    but rather relies on the "natural" features of the environment to track and display the object. NFT usually uses algorithms such as Scale-Invariant Feature Transform (SIFT) 
    or Speeded-up Robust Features (SURF) to detect the natural environment.
  </p>
  <div id="code-editor">
    <h2>Code snippet</h2>
    <AREditorTemplate :placeholder="code"/>
  </div>
  <h2> Explanation </h2> 
  <p>
    So in the example shown, we have a very simple example of how MindAR works. It requires a special file that is basically a "dissection" of the image that it is finding. This
    allows the website to understand, identify and track the image. The 3D Model is then displayed within the a-scene tag, in this case on top of the object.  MindAR in this case is 
    in charge of tracking and visbility and repositioning of the object (a-entity).
  </p>
  <Button asChild v-slot="slotProps">
    <RouterLink :class="slotProps.class" to="/exercises/AR/2">Next Page</RouterLink>
  </Button>
</template>

<style scoped>
  #code-editor {
    display: flex;
    flex-direction: column;
  }
</style>
