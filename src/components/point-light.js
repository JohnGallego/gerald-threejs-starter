import * as THREE from 'three';

const PointLight = () => {
  const pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.set( 1, 0.75, 0.5 );

  return pointLight;
};

export default PointLight;
