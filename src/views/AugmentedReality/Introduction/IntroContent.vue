<script setup>
import { Card, Image } from 'primevue'
</script>

<template>
  <h1 id="Introduction-to-AR">Introduction to Augmented Reality</h1>
  <p>
    Imagine walking through your neighborhood, phone in hand, when suddenly a Pikachu appears in the
    bushes. You throw a Poké Ball, and just like that, you're immersed in a new world layered on top
    of the real one. This is augmented reality (AR) at work—blurring the line between the physical
    and the digital. But how does it really work?
  </p>
  <div style="text-align: center">
    <Image src="/src/assets/picture.png" alt="Pokemon Go" />
    <p>Gameplay of Pokemon Go</p>
  </div>
  <p></p>
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
  <p>
    The very first example of AR is the Sensorama of 1957 which was created by Morton Heilig. It is
    a machine which includes a display, fans, smell generators and stereo speakers. It aimed to
    target the different senses to give the user a more immersive experience.
  </p>
  <p>
    In 1966, the development of the first head-mounted display system for AR started. It was
    jokingly coined as the "Sword of Damocles" as it seemed like one with the wires hanging over the
    user. The prototype was finished in 1968 by Ivan Sutherland and his team of students, Bob
    Sproull, Quintin Foster and Danny Cohen. The "Sword of Damocles" was very basic, the virtual
    environment only contained simple wireframe rooms. With a stereoscopic display, the user could
    move his head around and the virtual environment would be displayed accordingly.
  </p>
  <p>
    In 1975, Myron Kueger created Videoplace. Videoplace superimposes computer graphics onto the
    real environment with the use of projectors, cameras and screens. The cameras will pick up the
    movement of the user and the computer graphics will react accordingly. For example, there is a
    CRITTER mode where there is a small creature in the virtual environment that reacts to the real
    human user in the Videoplace. More on the example can be seen in
    <a href="https://youtu.be/dmmxVA5xhuo?t=132">this video.</a>
  </p>
  <p>
    In 1992, Louis B. Rosenberg created the Virtual Fixtures system. The device was used for
    training the US Air Force. The system overlayed virtual information on to the user's perspective
    to aid the user in performing the task at hand. This increased the performance of the user as
    compared to the traditional methods of training.
  </p>
  <p>
    In 1999, ARToolKit was created. It was created by Hirokazu Kato and was released to the public
    in 2001. The technology behind the ARToolKit is the usage of markers to keep track of the
    position of the viewpoint and the virtual objects in relation to the marker. This marker is
    known as a fiducial marker, which looks like the image below.
  </p>
  <div style="text-align: center">
    <Image src="/src/assets/picture.png" alt="Hiro Marker" />
    <p>Hiro Marker</p>
  </div>
  <p>
    Skipping forward to 2016, Pokemon Go was released. Developed by Niantic, it is probably the most
    famous example of AR. In its first week, it became the most downloaded app on the App Store.
    Niantic used the GPS information of the player to position the player on the map in which the
    player can walk towards the Pokemon in the map to engage the Pokemon. When engaging with the
    Pokemon, the player is able to turn on the AR mode which will cause the Pokemon to appear in the
    real world through the camera of the phone.
  </p>
  <p>
    This is just a brief history of AR, there are many more examples of AR that have been developed
    over the years.
  </p>
  <h2 id="References">References</h2>
  <ol style="list-style-type: none">
    <li>[1] Lorem</li>
    <li>[2] Ipsum</li>
    <li>[3] Dolor</li>
  </ol>
</template>
