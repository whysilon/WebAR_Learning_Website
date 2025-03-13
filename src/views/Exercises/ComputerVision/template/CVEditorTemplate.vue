<template>
  <div id="container">
    <div id="editor">
      <Button @click="runCode" label="Run Code" />
      <code-mirror
        v-model="code"
        basic
        :lang="lang"
        ref="cm"
        @update:model-value="handleCodeChange"
        wrap
      />
    </div>
    <div id="preview">
      <iframe :id="iframeId"></iframe>
    </div>
  </div>
</template>

<script setup>
import { javascript } from '@codemirror/lang-javascript'
import { Button } from 'primevue'
import { ref, onMounted } from 'vue'
import CodeMirror from 'vue-codemirror6'

const props = defineProps({
  placeholder: String,
  iframeId: String,
})
// Contains code that user is editing and the default code.
const code = ref('')
const iframeId = ref(props.iframeId)
// Contains the required defaults such as <html> tags.
const lang = javascript()
const cm = ref(null)

onMounted(() => {
  code.value = props.placeholder || ''
})

function runCode() {
  const iframe = document.createElement('iframe')
  iframe.id = iframeId.value
  iframe.style.width = '100%'
  iframe.style.height = '500px'
  const frameContainer = document.querySelector(`iframe#${iframeId.value}`)
  console.log(frameContainer, `iframe#${iframeId.value}`)
  frameContainer.replaceWith(iframe)
  // Inject code into the iframe
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
  console.log(iframeDoc)
  iframeDoc.open()
  iframeDoc.write(`
  <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" \/>
      <\/head>
      <body>
        <script>
                  ${code.value} <!-- Dynamic User Code -->
        <\/script>
      <\/body>
      <\/html>
    `)
  iframeDoc.close()
}

function handleCodeChange(newValue) {
  code.value = newValue
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
