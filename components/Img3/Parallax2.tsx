import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GUI } from 'dat.gui'

const scene = new THREE.Scene()

const light1 = new THREE.PointLight(0xffffff, 2)
light1.position.set(2.5, 2.5, 2.5)
scene.add(light1)

const light2 = new THREE.PointLight(0xffffff, 2)
light2.position.set(-2.5, 2.5, 2.5)
scene.add(light2)

var background = new THREE.CubeTextureLoader()

let nx= 'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/nx.png?alt=media&token=d7ec1682-4a8a-4323-98e7-05c1f97393c9'
let ny= 'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/py.png?alt=media&token=9b3fc0ef-4437-4a57-af8c-5d6509f79768'
let nz= 'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/nz.png?alt=media&token=28dc1bed-cb11-4431-9f9a-c8ca4f527538'
let px= 'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/px.png?alt=media&token=0944e588-0348-47f9-b10c-50bd4e18c036'
let py= 'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/ny.png?alt=media&token=4414d213-ec6b-4c69-bcf7-2bac093cac9b'
let pz= 'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/pz.png?alt=media&token=c90a4a7c-0c2a-4eb1-ba28-db471b4be795'


background.load( [
  px,
  nx,
  py,
  ny,
  pz,
  nz
], (bg) => {
  scene.background = bg
}, ()=> {}, 
(error)=>{ console.log(error) })


const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
)
camera.position.set(0.8, 1.4, 1.0)

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg')
})
renderer.setSize(window.innerWidth, window.innerHeight * 2)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)

let mixer: THREE.AnimationMixer
let modelReady = false
const animationActions: THREE.AnimationAction[] = []
let activeAction: THREE.AnimationAction
let lastAction: THREE.AnimationAction
const gltfLoader = new GLTFLoader()

gltfLoader.load(
  'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/strut.glb?alt=media&token=9e1d3eca-ac9d-4f8a-91b9-a29c1bb14c86',
  (gltf) => {
    // gltf.scene.scale.set(.01, .01, .01)

    mixer = new THREE.AnimationMixer(gltf.scene)

    const animationAction = mixer.clipAction((gltf as any).animations[0])
    animationActions.push(animationAction)
    animationsFolder.add(animations, 'default')
    activeAction = animationActions[0]


    scene.add(gltf.scene)
    camera.lookAt(gltf.scene.position)
    //add an animation from another file
    gltfLoader.load(
      'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/slowwalk.glb?alt=media&token=0b891fde-eff6-40bf-a51d-6affd046e86a',
      (gltf) => {
        console.log('loaded samba')
        const animationAction = mixer.clipAction(
          (gltf as any).animations[0]
        )
        animationActions.push(animationAction)
        animationsFolder.add(animations, 'samba')

        //add an animation from another file
        gltfLoader.load(
          'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/slowwalk.glb?alt=media&token=0b891fde-eff6-40bf-a51d-6affd046e86a',
          (gltf) => {
            console.log('loaded bellydance')
            const animationAction = mixer.clipAction(
              (gltf as any).animations[0]
            )
            animationActions.push(animationAction)
            animationsFolder.add(animations, 'bellydance')

            //add an animation from another file
            gltfLoader.load(
              'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/slowwalk.glb?alt=media&token=0b891fde-eff6-40bf-a51d-6affd046e86a',
              (gltf) => {
                console.log('loaded goofyrunning');
                (gltf as any).animations[0].tracks.shift() //delete the specific track that moves the object forward while running
                const animationAction = mixer.clipAction(
                  (gltf as any).animations[0]
                )
                animationActions.push(animationAction)
                animationsFolder.add(animations, 'goofyrunning')

                modelReady = true
              },
              (xhr) => {
                console.log(
                  (xhr.loaded / xhr.total) * 100 + '% loaded'
                )
              },
              (error) => {
                console.log(error)
              }
            )
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          },
          (error) => {
            console.log(error)
          }
        )
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log(error)
      }
    )
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  (error) => {
    console.log(error)
  }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * 0.01;
  camera.position.x = t * -.05;
  camera.rotation.y = t * 15.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

const animations = {
  default: function () {
    setAction(animationActions[0])
  },
  samba: function () {
    setAction(animationActions[1])
  },
  bellydance: function () {
    setAction(animationActions[2])
  },
  goofyrunning: function () {
    setAction(animationActions[3])
  }
}

const setAction = (toAction: THREE.AnimationAction) => {
  if (toAction != activeAction) {
    lastAction = activeAction
    activeAction = toAction
    //lastAction.stop()
    lastAction.fadeOut(1)
    activeAction.reset()
    activeAction.fadeIn(1)
    activeAction.play()
  }
}

const gui = new GUI()
const animationsFolder = gui.addFolder('Animations')
animationsFolder.open()

const clock = new THREE.Clock()

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  controls.enabled = true;
  // controls.enableZoom= false;
  if (modelReady) mixer.update(clock.getDelta());
  render();
}

function render() {
  renderer.render(scene, camera)
}

animate()