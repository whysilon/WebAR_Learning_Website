<script setup>
import { Card, Image } from 'primevue'
</script>

<template>
  <h1 id="Introduction-to-AR">Introduction to Augmented Reality</h1>
  <p>
    The most famous application of Augmented Reality (AR) is probably Pokemon Go, where you could
    catch the pokemon in "real life"
  </p>
  <div style="text-align: center">
    <Image src="/src/assets/picture.png" alt="Pokemon Go" />
    <p>Gameplay of Pokemon Go</p>
  </div>
  <h2 id="Definition-of-AR">Definition of AR</h2>
  <p>
    What is Augmented Reality? As the term suggests, it involves enhancing the physical environment
    in some way. < AR Definition > It involves three main characteristics [1]:
  </p>
  <Card>
    <template #title> Characteristics of AR </template>
    <template #content>
      <ul>
        <li>Real and virtual objects exists simultaneously</li>
        <li>The environment can be interacted with in real time</li>
        <li>
          Real and virtual objects interact and respond together to changes in the environment
        </li>
      </ul>
    </template>
  </Card>
  <h2 id="History-of-AR">History of AR</h2>
</template>
