<script setup>
import { Image } from 'primevue'
import { NTU_COAT_OF_ARMS, NTU_COAT_GRAYSCALE, NTU_COAT_SOBEL } from '@/assets/files'
</script>

<template>
  <div>
    <h1 id="Introduction">Introduction</h1>
    <p>
      As discussed in the previous section on feature detection, we want to identify the most
      interesting parts of an image — its features. In many drawings or photographs — like those of
      faces, houses, or mountains — the defining parts of the image are often the lines and
      boundaries where colors or textures change. These boundaries are known as edges, and detecting
      them is a crucial first step in image analysis. Edge detection algorithms help the computer
      find the outlines of objects, making it easier to later identify and focus on specific
      features in the image.
    </p>
    <h1 id="Edge-Detection">Edge Detection</h1>
    <p>
      Edge detection is about finding the outlines of objects in an image. It works by looking for
      areas where the colours or brightness change sharply. One common way to do it is with the
      Sobel Operator. In the example below, we will use NTU's coat of arms to show how edge
      detection works. To simplify the process, the image is turned into grayscale (black and white)
      so we are dealing with the brightness (or intensity) of the pixels instead.
    </p>
    <div class="container">
      <div class="image-box">
        <Image :src="NTU_COAT_OF_ARMS" alt="Original" width="50%" />
        <p>Original Image</p>
      </div>
      <div class="image-box">
        <Image :src="NTU_COAT_GRAYSCALE" alt="Grayscale" width="50%" />
        <p>Grayscale Image</p>
      </div>
    </div>
    <p>
      Remember, a computer sees an image as a grid of tiny squares called pixels, each pixel has a
      number showing how bright it is, the higher the number, the brighter the pixel. Sobel operator
      works with the gradient of the image, or the change in intensity in the image itself. Imagine
      running you hand over a surface with bumps, each bump represents a sharp change of intensity.
      Sobel operator helps the computer feel these "bumps" by checking for sharp changes in
      intensities horizontally and vertically with the following matrix:
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
      Let's say we have a 6 x 6 grid of pixels, each pixel with a brightness value. Applying the
      Sobel Operator over this grid to find the areas which the brightness changes the most. This is
      done by sliding the small 3 x 3 Sobel matrix over the grid, calculating how much the
      brightness changes in the x and y directions. After that, we will combine both results to get
      the gradient magnitude. The bigger this value is, the more likely it is that we've found an
      edge.
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
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
          <tr>
            <td style="border: 1px solid black">0</td>
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">40</td>
            <td style="border: 1px solid black">0</td>
          </tr>
        </tbody>
        <caption style="font-weight: bold; margin-bottom: 10px">
          Result Matrix
        </caption>
      </table>
    </div>
    <p>
      In the resultant matrix, we can see where the biggest changes in brightness occured, which
      would be the edges in the image. This would be in the middle of the example matrix, where
      brightness changes from 10 to 0. When Sobel Operator is applied to an actual image, the image
      below is an example of how it would look like.
    </p>
    <div class="container">
      <div class="image-box">
        <Image :src="NTU_COAT_OF_ARMS" alt="Edge Detection Example" width="50%" preview />
        <p>Original</p>
      </div>
      <div class="image-box">
        <Image :src="NTU_COAT_SOBEL" alt="Sobel Filter" width="50%" preview />
        <p>Sobel Filter</p>
      </div>
    </div>
    <h1 id="Conclusion">Conclusion</h1>
    <p>
      In summary, object recognition starts by helping computers see images as more than just a grid
      of pixels — it is about finding patterns and structure. One important technique is edge
      detection, like the Sobel Operator, which highlights where brightness changes sharply. These
      edges often mark the boundaries of objects, making it easier for the computer to focus on what
      matters.
    </p>
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
