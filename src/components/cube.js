import * as THREE from 'three';

/**
 * Our cube entity is a primitive shape.
 * 
 * Most objects that are rendered in the webgl context will require a geometry, which defines the shape/triangles,
 * and a material which defines it's visual properties such as how rough or shiny it's surface or it's texture or map.
 * 
 * Here we contruct the cube by specifying a box geometry, a standard material (which gives us a basic color and reacts 
 * to local lighting) and composing both elements into a mesh.
 * 
 * As you can see I'm actually returning an object here. One property points bakc to the mesh, while the other is a function
 * that we cna clal to update the cube's rotation.
 */

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
