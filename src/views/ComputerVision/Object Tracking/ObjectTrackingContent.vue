<template>
  <div>
    <h1 id="Introduction">Introduction</h1>
    <p>
      Tracking means keeping an eye on the positions of where things are in the real world in real
      time. In AR, tracking is important because we need to make sure what we see in the virtual
      world aligns with the real world. For example, when using fiducial markers (or just easy to
      recognise images), the camera would need to know where to put the virtual object on top of the
      market. That way, if the camera moves, the virtual object is able to stay with the market and
      not follow the camera's movement.
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
            <strong>Tracking:</strong> Keeping track of where something is. In AR, it means knowing
            where an object is compared to the AR system.
          </li>
          <li>
            <strong>Calibration:</strong> Making sure measurements are accurate by comparing them
            with a known standard. It is similar to fixing a weighing scale that is not showing zero
            when there is nothing on it.
          </li>
          <li>
            <strong>Registration:</strong> Lining up virtual objects so they match real-world ones
            in the same space. To do this, we need a common reference point, kind of like using a
            map with coordinates. If the virtual "map" and real "map" do not match up properly,
            things will not be in the right place. This makes it hard to place virtual objects where
            they are supposed to be in the real world.
          </li>
        </ul>
      </template>
    </Card>
    <p>
      Calibration and registration are both key to tracking objects in AR. Calibration helps the
      system figure out how far the object is from the camera, while registration makes sure the
      virtual object is lined up properly with the real one. These two steps work together to make
      AR feel real, so it is important to understand how they work when we dive deeper into object
      tracking.
    </p>
  </div>
</template>
