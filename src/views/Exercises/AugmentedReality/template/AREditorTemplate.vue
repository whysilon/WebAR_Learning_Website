<template>
<div id="container">
  <div id="editor">
  <Button @click="runCode">Run Code</Button>
    <code-mirror v-model="props.placeholder" basic :lang="lang" ref="cm" @update:model-value="handleCodeChange" wrap/>
  </div>
  <div>
    <iframe ref="preview"></iframe>
  </div>
</div>
</template>

<script setup>
import { html } from '@codemirror/lang-html';
import { Button } from 'primevue';
import { ref, } from 'vue';
import CodeMirror from 'vue-codemirror6';

const props = defineProps({
  placeholder: String,
})
// Contains code that user is editing and the default code.
const codeValue = ref(props.placeholder || "");
// Contains the required defaults such as <html> tags.
const lang = html();
const cm = ref(null);

function runCode() {
  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "400px";
  const frameContainer = document.querySelector("iframe");
  frameContainer.replaceWith(iframe);
  console.log(frameContainer)
  // Inject code into the iframe
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(`
  <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" \/>
        <script src="https://aframe.io/releases/1.6.0/aframe.min.js"><\/script>
        <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"><\/script>
      <\/head>
      <body>
        ${codeValue.value} <!-- Dynamic User Code -->
      <\/body>
      <\/html>
    `);
  iframeDoc.close();
}

function handleCodeChange(newValue) {
  code.value = newValue;
}
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
#editor {
  width: 50%;
}
#preview {
  width: 50%;
}
</style>