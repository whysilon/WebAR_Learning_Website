<template>
  <div>
    <h1 id="Introduction">Introduction</h1>
    <p>
      According  to [], tracking refers to real-time determination of the physical attributes of the real environment.
      For AR, tracking is important as we need to constantly monitor the points of reference are the same in the real world
      and the virtual world. For example, in the use of fiducial markers, we need to ensure that the camera is able to keep track 
      of the marker in order to display the virtual object on top of it. This is such that when the environment changes (e.g. 
      movement of the camera or objects), the virtual object can react to changes to the real world. 
    </p>
    <h1 id="Important-Terms">Important Terms</h1>
    <p>
      Within AR, there are three important terms that are used widely for tracking. These are:
      Tracking, Calibration, and Registration.
    </p>
    <Card>
      <template #content>
        <ul>
          <li><strong>Tracking:</strong> This term can be defined as keeping tabs on a particular object's position. In an AR context,
          we can define it as knowing the relative position of the object in relation to the AR system. </li>
          <li><strong>Calibration:</strong> This term refers to adjusting measurements by comparing two different measurements made by two different devices. It is akin
          to calibrating a weighing scale. Sometimes, the display on the scale would be off centered and you would need re-calibrate it by resetting it on a flat surface.</li>
          <li><strong>Registration:</strong> This term refers to the alignment of virtual objects with real-world objects in a shared space. 
            To achieve this, we need a reference that defines the positions of all objects, typically represented using coordinate systems 
            for both the real and virtual environments. Without proper alignment or "scaling" between these coordinate systems, it becomes 
            challenging to accurately determine distances between objects, making it difficult to position virtual objects relative to the real world.</li>
        </ul>
      </template>
    </Card>
  <p> Calibration and Registration are concepts required for object tracking. The sensors in the AR system would need to know what is the distance between the camera and 
    the object (calibration) and how to align the virtual object with the real object (registration). Hence, it is important to keep these terms and how they work in mind as
    we go in depth to object tracking.
  </p>
  <h1 id="Object-Recognition">Object Recognition</h1>
  <p>
    Before an object can be tracked, the computer must first identify the presence of objects within an image. An intuitive way to understand this is by considering how humans perceive interesting or distinct elements in a picture. 
    This process of identifying such significant features is known as "feature extraction".
  </p>
  <h1 id="Steps-of-Object-Tracking">Steps of Object Tracking</h1>
  <p>
    So far, what we have discussed is in the context of a single frame of and image. In order to track an object, we would need to consider the dynamic changes in the environment.
    As discussed previously, we would need 
  </p>
  <p>
    In a typical object tracking scenario, 
  </p>
  </div>
</template>
