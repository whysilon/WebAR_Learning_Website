<script setup>
import { Repl, useStore } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import { ref } from 'vue'

const startingCode = ref("App.vue");

const template = ref({
    welcomeSFC: `
    <script setup>
    import { ref } from 'vue'

    const msg = ref('Hello Vue!')
    <\/script>

    <template>
    <h1>{{ msg }}</h1>
    <\/template>
    `,
    newSFC: `
    <script setup>
    import { ref } from 'vue'

    const msg = ref('Hello Vue!asdads')
    <\/script>

    <template>
    <h1>{{ msg }}</h1>
    <\/template>
    `
});

const store = useStore(
    {
        mainFile: startingCode,
        template: template
    }
)


</script>

<template>
  <Repl 
  :editor="CodeMirror"
  :store="store"
   />
</template>