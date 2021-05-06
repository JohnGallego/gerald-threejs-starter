import * as THREE from 'three';

const Cube = () => {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ metalness: 0, roughness: 0.5 });
  const cube = new THREE.Mesh(geometry, material);

  return {
    mesh: cube,
    update: () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    },
  };
};

export default Cube;
