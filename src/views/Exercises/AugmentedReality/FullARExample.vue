<script setup>
import { Image } from 'primevue'
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
<a-scene mindar-image="imageTargetSrc: /src/assets/AR/ntu_logo.mind;" 
color-space="sRGB" 
renderer="colorManagement: true, physicallyCorrectLights" 
vr-mode-ui="enabled: false" 
device-orientation-permission-ui="enabled: false">
  <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
  <!-- The reason for having mindar-image-target is for the case that you have multiple targets/images to track -->
  <!-- You can have multiple targets, just add another a-entity with the same code below -->
  <a-entity mindar-image-target="targetIndex: 0">
  <!-- This is the code from above, feel free to copy the entire block above and overwrite the code below -->
  <!-- Replace from here -->
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-box position="0 0.5 -3" rotation="0 0 0" color="#4CC3D9"></a-box>
  <!-- Replace until here -->
  </a-entity>
</a-scene>
`
</script>

<template>
  <h1>Full AR Example with A-FRAME</h1>
  <h2>First Steps</h2>
  <p>
    We will be walking through step by step how to create a full AR app using MindAR and A-FRAME.
    First of all, we want to create a simple scene. Let us start with initialising the scene and
    adding a simple box to it.
  </p>
  <AREditorTemplate :placeholder="firstStep" :iframeId="`FirstStep`" />
  <p>
    Although it looks really plain now with the white background, but this is the start of what we
    would like to display in real life. You can add more entities to the scene to make it more
    interesting.
  </p>
  <h2>Choosing a right image</h2>
  <p>
    With MindAR, they utilise NFT to identify the image. Any image is possible, but using images
    with high contrast will be better for detection. For example, the image below on the left is an
    example of an image with poor contrast while the image on the right is an image with good
    contrast.
  </p>
  <div class="container">
    <div class="image-box">
      <Image src="/src/assets/AR/low_contrast.png" alt="Low Contrast Image" width="50%" preview />
      <p>Low Contrast Image</p>
    </div>
    <div class="image-box">
      <Image src="/src/assets/AR/high_contrast.png" alt="High Contrast Image" width="50%" preview />
      <p>High Contrast Image</p>
    </div>
  </div>
  <p>
    With a good image, you would be able to get a more sparse and distributed feature map, which
    will contain the "interesting" points of the image which the algorithm would use to identify
    whether the image is in the camera or not. For the same two images, these are their feature
    maps. The amount of red circles (please click to enlarge) in the feature map is correlated to
    how "interesting" the image is and whether the algorithm could find points which it can
    realistically track the image with.
  </p>
  <div class="container">
    <div class="image-box">
      <Image
        src="/src/assets/AR/low_contrast_feature_map.png"
        alt="Low Contrast Feature Map"
        width="50%"
        preview
      />
      <p>Low Contrast Feature Map</p>
    </div>
    <div class="image-box">
      <Image
        src="/src/assets/AR/high_contrast_feature_map.png"
        alt="High Contrast Featire Map"
        width="50%"
        preview
      />
      <p>High Contrast Feature Map</p>
    </div>
  </div>
  <p>
    You can continue to play around with your own images over at
    <a href="https://hiukim.github.io/mind-ar-js-doc/quick-start/compile">MindAR</a> where they will
    explain more on how it works and how you can compile your own image to the .mind file using
    their tool. Another website that I recommend to guide you to choose a better image is
    <a
      href="https://developer.vuforia.com/library/vuforia-engine/images-and-objects/image-targets/best-practices/best-practices-designing-and-developing-image-based-targets/"
    >
      vuforia's best practices</a
    >.
  </p>
  <h2>Adding our 3D model to the scene</h2>
  <p>
    With the image, we can now test our whether the image can be detected and tracked by our camera.
    First lets initialise the scene along with the special HTML tags that MindAR uses.
  </p>
  <AREditorTemplate :placeholder="firstARScene" :iframeId="`Add3DModel`" />
  <p>
    By scanning the targeted image, you should be able to see the plane and the box on top of it.
    The important parts of the code are &lt;a-scene&gt; and &lt;a-entity&gt;:
  </p>
  <ul>
    <li>
      <strong>&lt;a-scene&gt;</strong> - Inside this tag, we have the mindar-image property which is
      tied to the path of the .mind file (which is the dissected image) which the algorithm would
      use to track the image. The other properties are not important for now but the gist is that
      they affect how the algorithm perceive the environment. The mindar-image property also
      contains other properties such as filters (which would smoothen the tracking of the image at
      the expense of the delay)
    </li>
    <li>
      <strong>&lt;a-entity&gt;</strong> - This tag is used to define the set of object you would
      like to show when the image is detected. Using the <a>tool</a> provided by MindAR, you can
      compile multiple images into one .mind file. In this case, the targetIndex in
      mindar-image-target would be used to specify which image (which you have compiled) to track
      and display the object that is nested within that a-entity tag.
    </li>
  </ul>
  <h2>Conclusion</h2>
  <p>
    That is all! You have successfully created a simple AR app using MindAR and A-FRAME. You can
    continue to add more objects if you would want to make it more interesting. Simple web-based AR
    apps can be created easily as we see above and you can continue to explore more to make it more
    intersting.
  </p>
  <h2>Useful Links</h2>
  <ul>
    <li>
      <a href="https://hiukim.github.io/mind-ar-js-doc/">MindAR Documentation</a>
    </li>
    <li>
      <a href="https://aframe.io/docs/1.7.0/introduction/">A-FRAME Documentation</a>
    </li>
  </ul>
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
