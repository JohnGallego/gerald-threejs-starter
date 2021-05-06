import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Cube from './components/cube';
import Camera from './components/camera';
import PointLight from './components/point-light';

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = Camera();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);

const cube = Cube();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const pointLight = PointLight();

scene.add(pointLight);
scene.add(ambientLight);
scene.add(cube.mesh);

document.body.appendChild(renderer.domElement);

const animate = function () {
  requestAnimationFrame(animate);

  controls.update();
  cube.update();

  renderer.render(scene, camera);
};

animate();
