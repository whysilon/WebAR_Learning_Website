<script setup>
import AREditorTemplate from './template/AREditorTemplate.vue'

const code = `
    <!-- A-Frame Scene, this initialises -->
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
`
</script>

<template>
  <h1>A-FRAME Explainer</h1>
  <p>
    A-FRAME is a web framework that is mainly used for building 3D models in a web environment. It
    is kind of like Unity but for the web. It uses HTML as its foundation and uses an entity-based
    system to create complex 3D models. There is no hassle, only using the script given and their
    corresponding &lt;a-&gt; tags.
  </p>
  <p>
    Below is a very simple example of how A-FRAME works. The most important part of the code is the
    &lt;a-scene&gt; tag. This tag is the main container for all the 3D objects that you want to
    display. The other tags are the objects that you want to put into that scene.
  </p>
  <AREditorTemplate :placeholder="code" />
  <p>
    The code will create a scene with a box, a sphere, and lastly a cylinder. The objects are sit
    nicely on top of the plane that is also defined within the code. The sky is also created,
    painting the "background" sky blue.
  </p>
  <p>
    A-Frame is a simple yet powerful tool to quickly get started in developing AR applications. The
    simple syntax (due to HTML) makes it easy to understand and use. Let us walk through a very
    simple way to create a house in A-FRAME and display it in real life in the next exercise.
  </p>
</template>
