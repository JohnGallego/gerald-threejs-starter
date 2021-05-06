import * as THREE from 'three';

/**
 * The camera is how the renderer views the #D scene and knows what to display as the output.
 * There are different types of camera, but the one you'll most liklely want to use is the perspective camera.
 * The perspective camera needs to know what the FOV should be, what the aspect ratio of the view should be,
 * and finally what the camera fustrum both near and far planes. This represents the volume of space that camera 
 * will "see" or render.
 */

const Camera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  return camera;
};

export default Camera;
