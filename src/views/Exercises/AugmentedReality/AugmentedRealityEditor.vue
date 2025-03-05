<script setup>
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { ref } from 'vue'

const startingCode = ref('App.vue')

const template = ref({
  welcomeSFC: `
<script setup>
  import * as THREE from 'three';
        import { MindARThree } from 'mindar-image-three';
        const mindarThree = new MindARThree({
    container: document.querySelector("#container"),
    imageTargetSrc: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/card-example/card.mind"
        });
        const {renderer, scene, camera} = mindarThree;
        const anchor = mindarThree.addAnchor(0);
        const geometry = new THREE.PlaneGeometry(1, 0.55);
        const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
        const plane = new THREE.Mesh( geometry, material );
        anchor.group.add(plane);
        const start = async() => {
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
        }
        const startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", () => {
    start();
        });
        stopButton.addEventListener("click", () => {
    mindarThree.stop();
    mindarThree.renderer.setAnimationLoop(null);
        });
<\/script>

<template>
  <div id="control">
      <button id="startButton">Start</button>
      <button id="stopButton">Stop</button>
    </div>
    <div id="container">
    </div>
  </template>
    `,
  newSFC: `
    <script setup>
    import { ref } from 'vue'

    const msg = ref('Hello Vue!asdads')
    <\/script>a

    <template>
    <h1>{{ msg }}</h1>
    <\/template>
    `,
})

const importMap = ref({
  "imports": {
    "vue": "https://cdn.jsdelivr.net/npm/@vue/runtime-dom@3.5.13/dist/runtime-dom.esm-browser.js",
    "vue/server-renderer": "https://cdn.jsdelivr.net/npm/@vue/server-renderer@3.5.13/dist/server-renderer.esm-browser.js",
    "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
	  "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/",
    "mindar-image-three":"https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-three.prod.js"
  }
})
const store = useStore({
  mainFile: startingCode,
  template: template,
  builtinImportMap: importMap,
  
})
console.log(store)
</script>

<template>
  <Repl :editor="CodeMirror" :store="store" />
  <Button @click="console.log(store)">Log Store</Button>
</template>
