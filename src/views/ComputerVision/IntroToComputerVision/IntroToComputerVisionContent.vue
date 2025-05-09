<script setup lang="ts">
import { TILES } from '@/assets/files'
</script>

<template>
  <h1 id="Introduction">Introduction</h1>
  <p>
    Have you ever wondered how our eyes perceive the text you are currently reading? How are we able
    to "see" what we are seeing? And the last question is, how do cameras or computers even take
    pictures or videos and convert them into something that they can understand?
  </p>
  <p>
    In this module, we will be introducing the ideas of computer vision and how AR uses it to create
    the magic that we see in our phones and other devices. We will be discussing the different
    methods which computers use to perceive and distinguish the objects and environment around them.
  </p>
  <h1 id="How-Computer-Vision">How does a computer see?</h1>
  <p>
    Humans perceive the environment using our eyes. Light reflects off surfaces and enters our eyes,
    where it is converted into electrical signals. These signals are then processed by our brain to
    form images, allowing us to interpret what we see.
  </p>
  <p>
    Computers, while lacking biological eyes and brains, function in a similar way. Instead of eyes,
    they use cameras to capture light from the environment. This light is also converted into
    electrical signals, which the computer then processes into a digital format it can understand.
  </p>
  <p>To illustrate how a computer interprets visual data, let's consider a simple 4 by 4 grid:</p>
  <div style="text-align: center">
    <Image :src="TILES" alt="4x4 Grid" width="30%" />
    <p>4 by 4 grid</p>
  </div>
  <p>
    Our eyes see this very simply, just a grid of black and white rectangles. However, for a
    computer, it sees this as a 4 by 4 matrix of numbers. Black is represented by 0 and white is
    represented by 1. As computers can only understand 1s and 0s, this format helps to convert the
    image into something that the computer can understand. So in this case, the computer sees the
    image as: (1, 0, 1, 0), (0, 1, 0, 1), (1, 0, 1, 0), (0, 1, 0, 1).
  </p>
  <h1 id="Difficulties-in-AR">Difficulties in Augmented Reality</h1>
  <p>
    Augmented Reality (AR) needs to react to the real world in real time. That means instead of just
    looking at one image, like a photo, AR has to work with video — which is really just lots of
    images (called frames) shown one after another really fast. In a single image, we can easily
    find objects and edges. But with video, the computer has to do that for every frame — and do it
    fast enough to keep up as things move or change. That’s much harder. So the big question
    becomes: how do we keep track of where the virtual objects should go on the screen? And how do
    we make sure they stay in the right place and at the right angle, even when the camera moves or
    the real world shifts? That’s why we need tools from computer vision — especially object
    tracking and localisation — to make AR work smoothly.
  </p>
</template>
