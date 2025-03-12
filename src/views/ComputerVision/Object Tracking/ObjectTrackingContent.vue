<script setup>
import { Image } from 'primevue'
</script>

<template>
  <div>
    <h1 id="Introduction">Introduction</h1>
    <p>
      Tracking refers to real-time determination of the physical attributes of the real environment.
      For AR, tracking is important as we need to constantly monitor the points of reference are the
      same in the real world and the virtual world. For example, in the use of fiducial markers, we
      need to ensure that the camera is able to keep track of the marker in order to display the
      virtual object on top of it. This is such that when the environment changes (e.g. movement of
      the camera or objects), the virtual object can react to changes to the real world.
    </p>
    <h1 id="Important-Terms">Important Terms</h1>
    <p>
      Within AR, there are three important terms that are used widely for tracking. These are:
      Tracking, Calibration, and Registration.
    </p>
    <Card>
      <template #content>
        <ul>
          <li>
            <strong>Tracking:</strong> This term can be defined as keeping tabs on a particular
            object's position. In an AR context, we can define it as knowing the relative position
            of the object in relation to the AR system.
          </li>
          <li>
            <strong>Calibration:</strong> This term refers to adjusting measurements by comparing
            two different measurements made by two different devices. It is akin to calibrating a
            weighing scale. Sometimes, the display on the scale would be off centered and you would
            need re-calibrate it by resetting it on a flat surface.
          </li>
          <li>
            <strong>Registration:</strong> This term refers to the alignment of virtual objects with
            real-world objects in a shared space. To achieve this, we need a reference that defines
            the positions of all objects, typically represented using coordinate systems for both
            the real and virtual environments. Without proper alignment or "scaling" between these
            coordinate systems, it becomes challenging to accurately determine distances between
            objects, making it difficult to position virtual objects relative to the real world.
          </li>
        </ul>
      </template>
    </Card>
    <p>
      Calibration and Registration are concepts required for object tracking. The sensors in the AR
      system would need to know what is the distance between the camera and the object (calibration)
      and how to align the virtual object with the real object (registration). Hence, it is
      important to keep these terms and how they work in mind as we go in depth to object tracking.
    </p>
    <h1 id="Object-Recognition">Object Recognition</h1>
    <p>
      Before an object can be tracked, the computer must first identify the presence of objects
      within an image. An intuitive way to understand this is by considering how humans perceive
      interesting or distinct elements in a picture. This process of identifying such significant
      features is known as "feature extraction". So continuing with the analogy, our eyes are able
      to filter out the uninteresting background and focus on the object of interest. A computer
      would do this instead with the help of algorithms or filters. A simple example would be an
      edge detection algorithm.
    </p>
    <h2 id="Edge-Detection">Edge Detection</h2>
    <p>
      The idea behind edge detection is to identify the boundaries of objects within an image. This
      is done by detecting sharp changes in intensity in an image. The algorithm we will showcase is
      the Sobel Operator. So in the image below, we have a simple image of NTU's Coat of Arms. To
      simplify the calculations that we will perform, we will convert the image into grayscale.
    </p>
    <div class="container">
      <div class="image-box">
        <Image src="/src/assets/CV/ntu_coat_of_arms.png" alt="Original" width="50%" />
        <p>Original Image</p>
      </div>
      <div class="image-box">
        <Image src="/src/assets/CV/ntu_coat_grayscale.png" alt="Grayscale" width="50%" />
        <p>Grayscale Image</p>
      </div>
    </div>
    <p>
      Remember that a computer sees an image as a matrix of pixels, so in each number and pixel in
      the matrix, it represents the intensity of the pixel. So the more intense the pixel is, the
      brighter it is. Imagine running your hand over a surface with bumps, the bumps represent a
      sharp change of intensity. The same idea can be applied through the use of the Sobel Operator.
      The Sobel Operator is a filter which basically detects the changes in intensity horizontaly
      and vertically. With the following matrix:
    </p>
    <div style="display: flex; justify-content: space-around">
      <table style="border-collapse: collapse; text-align: center; width: 30%; margin: 20px auto">
        <tbody>
          <tr>
            <td style="border: 1px solid black">-1</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">1</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">-2</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">2</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">-1</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">1</td>
          </tr>
        </tbody>
        <caption style="font-weight: bold; margin-bottom: 10px">
          Vertical Sobel Mask
        </caption>
      </table>
      <table style="border-collapse: collapse; text-align: center; width: 30%; margin: 20px auto">
        <caption style="font-weight: bold; margin-bottom: 10px">
          Horizontal Sobel Mask
        </caption>
        <tbody>
          <tr>
            <td style="border: 1px solid black">-1</td>
            <td style="border: 1px solid black">-2</td>
            <td style="border: 1px solid black">-1</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">1</td>
            <td style="border: 1px solid black">2</td>
            <td style="border: 1px solid black">1</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      If we have a 6 by 6 matrix of pixels, we can apply the Sobel Operator to detect the edges in
      this 6 by 6 matrix of pixels. Essentially, what we want to do now is to find the in which the
      intensity changes the most. The Sobel operator helps us to do this by using the kernel (3x3
      matrix) to convolve the image. We want to find the gradient of the pixel intensity in the x
      and y direction and we will then find the absolute magnitude of the gradient by adding the
      x-component and y-component together. The higher this value is, the more likely it is part of
      an edge.
    </p>
    <div style="display: flex; justify-content: space-around">
      <table style="border-collapse: collapse; text-align: center; width: 30%; margin: 20px auto">
        <tbody>
          <tr>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">10</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">0</td>
          </tr>
        </tbody>
        <caption style="font-weight: bold; margin-bottom: 10px">
          Example Matrix
        </caption>
      </table>
      <table style="border-collapse: collapse; text-align: center; width: 30%; margin: 20px auto">
        <tbody>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">-40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
        </tbody>
        <caption style="font-weight: bold; margin-bottom: 10px">
          Result Matrix
        </caption>
      </table>
    </div>
    <p>
      As we can see in the resultant matrix, the convoluted matrix shows the changes in the gradient
      pixels and we can then tell that areas with a high intensity are the regions which have edges.
      The same can be done with the horizontal sobel mask. Below is an example on how it would look
      like when you apply the Sobel Filter in both directions.
    </p>
    <div class="container">
      <div class="image-box">
        <Image
          src="/src/assets/CV/ntu_coat_of_arms.png"
          alt="Edge Detection Example"
          width="50%"
          preview
        />
        <p>Original</p>
      </div>
      <div class="image-box">
        <Image
          src="/src/assets/CV/ntu_coat_sobel.png"
          alt="Edge Detection Example"
          width="50%"
          preview
        />
        <p>Sobel Filter</p>
      </div>
    </div>

    <h1 id="Steps-of-Object-Tracking">Steps of Object Tracking</h1>
    <p>
      So far, what we have discussed is in the context of a single frame of and image. In order to
      track an object, we would need to consider the dynamic changes in the environment. As
      discussed previously, we would need
    </p>
    <p>In a typical object tracking scenario,</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.image-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
