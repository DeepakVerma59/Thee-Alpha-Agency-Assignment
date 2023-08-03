const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

camera.position.z = 5;
const ambientLight = new THREE.DirectionalLight(0xffffff, 1);
ambientLight.position.set(2,2,5) // Soft white light
scene.add(ambientLight);

const loader = new THREE.GLTFLoader();
let model;
loader.load(
  'assests/moon.gltf',
  (gltf) => {
    console.log(gltf)
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5)
    scene.add(model);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  (error) => {
    console.error('Error loading glTF model:', error);
  }
);

loader.load(
  'assests/brain left.gltf',
  (gltf) => {
    console.log(gltf)
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5)
    scene.add(model);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  (error) => {
    console.error('Error loading glTF model:', error);
  }
);
loader.load(
  'assests/brain right.gltf',
  (gltf) => {
    console.log(gltf)
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5)
    scene.add(model);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  (error) => {
    console.error('Error loading glTF model:', error);
  }
);

loader.load(
  'assests/gong.gltf',
  (gltf) => {
    console.log(gltf)
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5)
    scene.add(model);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  (error) => {
    console.error('Error loading glTF model:', error);
  }
);

loader.load(
  'assests/heart shape.gltf',
  (gltf) => {
    console.log(gltf)
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5)
    scene.add(model);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  (error) => {
    console.error('Error loading glTF model:', error);
  }
);


function animate() {
  requestAnimationFrame(animate);
  // Add any animations or interactions here if needed
  renderer.render(scene, camera);
}
animate();
