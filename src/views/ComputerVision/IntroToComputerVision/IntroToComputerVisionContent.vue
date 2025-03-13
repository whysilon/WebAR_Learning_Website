<script setup lang="ts">
import { TILES } from '@/assets/files';

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
    For humans, we perceive the environment by using our eyes. This works through the process of
    light hitting surfaces and reflecting the light into our eyes. Our eyes then turn this light
    into electrical signals which will turn the signals into images in our brain. For computers,
    they do not have our eyes nor our processing system, but it works in a similar way. To
    substitute the eyes, computers use cameras to capture the light to turn it to electrical
    signals. The computer then processes the signals to create a format in which it can understand
    and interpret the environment around them. To understand it better, let us assume that we have
    this 4 by 4 grid below:
  </p>
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
    Augmented Reality requires a real-time interaction with the environment. This means that the AR
    requires video processing rather than image processing. In image processing, it is simpler as in
    our previous example, we just need to perform our image processing on this one image. However, a
    video can be seen as a series of frames of images, which means we need to perform our image
    processing on each frame. This is a difficult task as we are not only limited by the amount of
    time we have to process but we would need to understand the environment within each frame and
    how it changes over time. Hence, the question is, how do we track where the virtual objects are
    displayed in the display screen and how do we make sure that these virtual objects are displayed
    with the correct orientation? This is why computer vision concepts such as object tracking and
    localisation are important.
  </p>
</template>
