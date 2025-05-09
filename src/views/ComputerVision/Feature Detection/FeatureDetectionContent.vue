<script setup>
import { Card } from 'primevue'
</script>

<template>
  <h1 id="Introduction">Introduction</h1>
  <p>
    Feature detection is about helping the computer find the most "interesting" or "important" parts
    of an image — the areas that stand out visually. A feature can be thought of as a small patch in
    the image that contains useful or unique visual information. For example, in a photo of a cat,
    the ears, eyes, or the tip of the nose might be considered features because they help both us —
    and the computer — recognize the cat. These features are what the computer focuses on next,
    after detecting the edges.
  </p>
  <p>
    While we can naturally spot features — like a cat’s ears or eyes — computers do not “see” images
    the same way we do. So how do they detect features? The idea comes from mimicking how humans
    recognize visual elements. For instance, we identify a cat’s ears not just by their position,
    but by their shape, size, and how they stand out from the rest of the image. Computers use a
    similar approach: algorithms scan for small regions in the image where the pixel values change
    in a noticeable or structured way. These visually distinct patches are called features, and
    detecting them is a key step toward helping the computer understand what it’s looking at.
  </p>
  <h1 id="Why-Feature-Detection?">Why Feature Detection</h1>
  <p>
    Feature detection is crucial in Augmented Reality because it gives the computer a way to
    understand what it’s looking at. Think of it like this: if we only saw numbers or random data
    like a computer does, we wouldn’t be able to recognize or make sense of what’s in an image.
    Feature detection helps the computer focus on the important parts of the image — like the edges
    of objects or specific points that stand out.
  </p>
  <p>
    In AR, feature detection is just the first step. Once the computer identifies these key
    features, it can then move on to tasks like feature matching or feature tracking.
  </p>
  <p>
    Feature Matching is when the computer finds the same feature in different images. For example,
    imagine we have two pictures of a cat. The only difference is that one was taken from the front,
    and the other from the side. The feature detection system can recognize that both images show
    the same cat by matching the key features (like the cat's ears or eyes) in both pictures.
  </p>
  <h1 id="Feature-Detection">Feature Detection</h1>
  <p>In feature detection, there are two main approaches to finding feature points.</p>
  <p>
    One common way to track objects is by first finding features that are easy to follow using
    simple algorithms. This approach works by detecting key features in each image (or video frame)
    first, and then trying to match those features across other images. This is often called a
    "detect-then-track" method. It's especially useful in video tracking applications, where the
    movement between frames is usually smooth and not too unpredictable.
  </p>
  <p>
    The other approach is to detect features separately in each image and then match them using
    something called a feature descriptor. A feature descriptor is a way of describing a feature so
    that it can be recognized regardless of how the image looks — even if it's rotated, scaled, or
    viewed from a different angle. Think of it like a fingerprint: it captures unique details about
    the feature, allowing the computer to recognize and match it across different images.
  </p>
</template>
