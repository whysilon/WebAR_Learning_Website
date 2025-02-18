<script setup>
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { ref } from 'vue'

const startingCode = ref('App.vue')

const template = ref({
  welcomeSFC: `
<template>
  <canvas ref="bjsCanvas" width="500" height="500" />
<\/template>

<script>
import { ref, onMounted } from "vue";
import { createScene } from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
};
<\/script>
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

const store = useStore({
  mainFile: startingCode,
  template: template,
})
</script>

<template>
  <Repl :editor="CodeMirror" :store="store" />
</template>
