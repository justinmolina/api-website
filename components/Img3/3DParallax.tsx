import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TorusGeometry,
  MeshStandardMaterial,
  Mesh,
  PointLight,
  AmbientLight,
  SphereGeometry,
  MathUtils,
  TextureLoader,
  BoxGeometry,
  MeshBasicMaterial,
  PointLightHelper,
  GridHelper,
  ObjectLoader,
  AnimationMixer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  Collada,
  ColladaLoader,
} from 'three/examples/jsm/loaders/ColladaLoader';

const image = require('./jeff.png');
let gltfLoader = new GLTFLoader();
let colladaLoader = new ColladaLoader();

const ParallaxBackground = () => {
  const scene: Scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  let modelId: number = -1;

  const renderer = new WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight * 2);

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onWindowResize, false);

  camera.position.setZ(30);
  camera.position.setX(-3);

  renderer.render(scene, camera);

  // Torus

  const geometry = new TorusGeometry(10, 3, 16, 100);
  const material = new MeshStandardMaterial({ color: 0xff6347 });
  const torus = new Mesh(geometry, material);
  let mixer: AnimationMixer;
  let loadedModel: any = undefined;
  let clipAction: any;
  const [modelLoaded, setModelLoaded] = React.useState(false);

  colladaLoader.load(
    'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/3D%20STORE%2FWalking%202.dae?alt=media&token=d1ce0a06-2dab-4099-8a06-e34f21a17ad3',
    (model) => {
      model.scene.scale.x = 0.05;
      model.scene.scale.y = 0.05;
      model.scene.scale.z = 0.05;
      model.scene.position.z = -7;
      model.scene.position.y = -5;
      modelId = model.scene.id;
      loadedModel = model;
      scene.add(model.scene);
      setModelLoaded(true)
    },
  );
  // Lights

  const pointLight = new PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  if(loadedModel !== undefined) {
    let mixer2 = new AnimationMixer(loadedModel?.scene);
    let action = mixer2.clipAction(loadedModel?.scene.animations[0]);
    action.play();
  }

  const ambientLight = new AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);
  scene.add(torus);
  console.log('scs', scene)
  // Helpers

  const lightHelper = new PointLightHelper(pointLight);
  const gridHelper = new GridHelper(200, 50);
  scene.add(lightHelper, gridHelper);

  // const controls = new OrbitControls(camera, renderer.domElement);

  function addStar() {
    const geometry = new SphereGeometry(0.25, 24, 24);
    const material = new MeshStandardMaterial({ color: 0xffffff });
    const star = new Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill(5)
      .map(() => MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  Array(200).fill(5).forEach(addStar);

  // Background
  const spaceTexture = new TextureLoader().load('space.jpg');
  scene.background = spaceTexture;

  // Avatar
  const jeffTexture = new TextureLoader().load(image);

  const moonTexture = new TextureLoader().load('moon.jpg');
  const normalTexture = new TextureLoader().load('normal.jpg');

  const moon = new Mesh(
    new SphereGeometry(3, 32, 32),
    new MeshStandardMaterial({
      map: moonTexture,
      normalMap: normalTexture,
    })
  );

  scene.add(moon);

  moon.position.z = 30;
  moon.position.setX(-10);

  // Scroll Animation

  function playAnimation(){
    let model = scene.getObjectById(modelId);

  }
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }

  document.body.onscroll = moveCamera;
  moveCamera();

  // Animation Loop

  function animate() {
    requestAnimationFrame(animate);
    if (clipAction) {
      clipAction.play();
    }
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    moon.rotation.x += 0.005;

    // controls.update();

    renderer.render(scene, camera);
  }

  animate();

  return <> </>;
};

export default ParallaxBackground;
