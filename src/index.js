/**
 * Here we are importing all of the required entities for our main animation loop.
 * We need to import three js as a library.
 * We are importing some default orbit controls that allow us to orbit around the scene.
 * And then we're importing some custom components we are building in seprate modules that we then add to the scene.
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Cube from './components/cube';
import Camera from './components/camera';
import PointLight from './components/point-light';

/**
 * Here we are setting up the very basics. In three js we always need a renderer, a scene, and a camera.
 * 
 * The renderer provides us with the webgl context we need to display our scene on a canvas element in the HTMl DOM.
 * The scene is a repository of eveyr element that makes up the 3D view.
 * The camera tells the renderer what to draw on screen given a FOV, locaitona nd orientation.
 */
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = Camera();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * These are the custom primitive types we are using for our little exmaple scene. 
 * A spinning cube and both an ambient and a point light.
 * An ambient light illuminates all objects equally from all angles.
 * A point light acts like a candle or light bulb. It illuminates objects from the light's point position up to a certain distance away.
 * It's important to note than Ambient light does not cast shadows. So to see some of the 3D detail of an object you'll need a point or 
 * directional or spot light for best viewing. Try to comment out the line 'scene.add(pointLight);'. you will see that there no longer is 
 * self shadowing on the cube.
 */
const cube = Cube();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const pointLight = PointLight();

scene.add(ambientLight);
scene.add(pointLight);
scene.add(cube.mesh);

/**
 * This is our recursive animation loop. Here we make sure to run an optimized loop by calling requestAnimationFrame. this makes sure the 
 * browser optimizes our loop to run as fast as possible. 
 * 
 * In the loop we update the controls, and our cube entity by claling their respective update functions, the  render the updated scene.
 */
const animate = function () {
  requestAnimationFrame(animate);

  controls.update();
  cube.update();

  renderer.render(scene, camera);
};

document.body.appendChild(renderer.domElement);
animate();
