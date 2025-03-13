<template>
  <h1>Sobel Filter</h1>
  <p>
    As discussed in <a href="/docs/CV/object-tracking"> Object Tracking</a>, Sobel filter is a very
    powerful tool to detect and extract edges in an image. This allows many algorithms to track
    objects based on the interesting parts of the image as it is akin to humans recognising objects
    based on their shape.
  </p>
  <p>In this section </p>
  <Button>
    Test Button
  </Button>
  <div style="display: flex; flex-direction: row;">
    <img id="image" :src="NTU_COAT_OF_ARMS"  style="width: 50%; height: 50%;">
    <canvas id="grayscale" style="width: 50%; height: 50%;"></canvas>
  </div>
</template>

<script setup>
import { Button } from 'primevue';
import jsfeat from 'jsfeat';
import {onMounted} from 'vue';
import { NTU_COAT_OF_ARMS } from '@/assets/files';

onMounted(() => {
  let imgElement = document.getElementById('image');
  imgElement.onload = () => {
    const canvas = document.getElementById('grayscale');
    const ctx = canvas.getContext('2d')
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);
    // Grayscaling the image
    let grayImg = new jsfeat.matrix_t(canvas.width, canvas.height, jsfeat.U8C1_t);
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    jsfeat.imgproc.grayscale(imageData.data, canvas.width, canvas.height, grayImg );
    var data_u32 = new Uint32Array(imageData.data.buffer)
    var alpha = (0xff << 24);
    var i = grayImg.cols*grayImg.rows, pix = 0;
    // while(--i >= 0) {
    //     pix = grayImg.data[i];
    //     data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
    // }
    // ctx.putImageData(imageData, 0, 0)

    // Sobel Filter Image
    let sobelMat = new jsfeat.matrix_t(canvas.width, canvas.height, jsfeat.U8C1_t)
    jsfeat.imgproc.sobel_derivatives(grayImg, sobelMat)
    console.log(sobelMat)

    var i = sobelMat.cols*sobelMat.rows, pix = 0;
    while(--i >= 0) {
        pix = sobelMat.data[i];
        data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
    }
    ctx.putImageData(imageData, 0, 0)

  }

})
</script>