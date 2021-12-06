/*tslint:disable*/
/*eslint:disable*/
import * as React from 'react';
import * as THREE from 'three';
import VisibilitySensor from "react-visibility-sensor";
// import * as GLTFLoader from 'three-gltf-loader';
import * as GLTFLoader from 'three-gltf-loader';
import {traverseMaterials} from './Img3Component1'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
var OrbitControls = require('three-orbitcontrols')

const MAP_NAMES = [
  'map',
  'aoMap',
  'emissiveMap',
  'glossinessMap',
  'metalnessMap',
  'normalMap',
  'roughnessMap',
  'specularMap',
];

class Scene extends React.Component {
  styles={
    sliderdiv:{
      float: 'left'
    }
  }

  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.onChange = this.onChange.bind(this)
    this.exposureChange = this.exposureChange.bind(this)
    this.ambientChange = this.ambientChange.bind(this)
    this.directChange = this.directChange.bind(this)
    this.gammaChange = this.gammaChange.bind(this)
    this.animate = this.animate.bind(this)
    this.stop = this.stop.bind(this)
    this.onhover = this.onhover.bind(this)
    this.Leave= this.Leave.bind(this)
    this.ToggleWireframe = this.ToggleWireframe.bind(this)
    this.ToggleAutoRotate = this.ToggleAutoRotate.bind(this)
    this.init = this.init.bind(this)

  this.state = {
  scene: new THREE.Scene(),
  addLights: true,
  Onhover: false,
  Center : 0,
  model: this.props.model,
  wireframe : false,
  directColor: 0xFFFFFF,
  exposure: this.props.exposure || .7,
  ambientIntensity: this.props.aintensity || .3,
  directIntensity: this.props.dIntensity || 0.8 * Math.PI, // TODO(#116)
  autorotate : false,
  visible : this.props.visible || false,
  gamma: this.props.gamma || false,
  editMenu : this.props.edit || false,
  hasloaded: false,
  shouldAnimate : false,
  map : this.props.map || 'alps'

}  
  }

  componentDidMount() {
    this.init()
  }

  init(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight


    const camera = new THREE.PerspectiveCamera(
      75,
      width/ height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const material = new THREE.MeshBasicMaterial({ color: 'orange' })
    const light = new THREE.AmbientLight();
    const axis = new THREE.AxesHelper(5)
    const controls = new OrbitControls(camera);
    controls.screenSpacePanning = true;
    var object = new THREE.Object3D()
    if (this.state.scene.children.length > 1){
       object = this.state.scene.children[1]
       
    }
  
    // var controls = new this.THREE.OrbitControls(camera)
    axis.position.x = 2.7
    axis.position.y = 4.5
    this.lights = [];
    // axis.position.z = 8.3

    light.intensity = .7;
    this.state.scene.add(light)
    this.state.scene.add(camera)
   
    // camera.rotation.x = -.7
    
    //^^ was 4
    // scene.add(cube)
   if (this.props.color === "cubemap"){

var background = new THREE.CubeTextureLoader()
     
var path =  './assets/cubemap/'
var loc = this.state.map
var ext = this.props.ext || '.jpg'
var nx= require('./assets/cubemap/'+ loc+ '/nx' + ext)
var ny= require('./assets/cubemap/'+ loc+ '/ny' + ext)
var nz= require('./assets/cubemap/'+ loc+ '/nz' + ext)
var px= require('./assets/cubemap/'+ loc+ '/px' + ext)
var py= require('./assets/cubemap/'+ loc+ '/py' + ext)
var pz= require('./assets/cubemap/'+ loc+ '/pz' + ext)


     background.load( [
       px,
       nx,
        py,
        ny,
        pz,
        nz
      ], (bg) => {
        
        this.state.scene.background = bg
      })}

    if(this.props.color === 'transparent'){   
        
     }
     else if (this.props.color){
      this.state.scene.background = new THREE.Color(this.props.color)
     }
     else {
           this.state.scene.background = new THREE.Color('#f2f2f2')
   
     }
  


    renderer.setSize(width, height)
    // renderer.setClearColor('red')
    renderer.physicallyCorrectLights = true;
    renderer.gammaOutput = this.props.gamma
    renderer.gammaFactor = 2.2;
    renderer.toneMappingExposure = this.state.exposure;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setScissorTest = true
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.controls = controls
    this.controls.enabled = false
    this.controls.autoRotate = this.props.rotate || this.state.autorotate
    this.controls.autoRotateSpeed = 4.5
    
    // if (this.state.visible){
    // this.loadModel(this.props.model,this.state.scene,this.camera);
    // }
    // this.animate();


    this.mount.appendChild(this.renderer.domElement)
      window.addEventListener('resize', ()=>{
     this.resize()
    })
    window.addEventListener('fullscreenhange', ()=>{
      var width = this.mount.clientWidth + 5
      var height = this.mount.clientHeight
      this.renderer.setSize(width,height)
    })
    this.mount.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, false)

    this.mount.addEventListener('wheel', (e) => {
      e.preventDefault()
  }, {passive: false})
    
 
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
   
  }
  
  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }
  resize () {

    var myclientHeight = this.mount.clientHeight;
    var myclientWidth = this.mount.clientWidth;

    this.camera.aspect = myclientWidth / myclientHeight;
    this.camera.updateProjectionMatrix();
    // this.background.style({aspect: this.camera.aspect});
    this.renderer.setSize(myclientWidth, myclientHeight);
    // this.start()

  }

  onhover(){
   this.setState({
     Onhover: true
   })
  //  this.animate()
   this.controls.enabled = true;
  //  const controls = new OrbitControls(this.camera);
  //  this.controls = controls;
  //  
  //  this.controls.target = this.state.scene.children[1].position
  }

  ToggleWireframe(){

    traverseMaterials(this.state.scene.children[1], (material) => {
      this.setState(prevState => ({
        wireframe: !prevState.wireframe
      }));
      material.wireframe = this.state.wireframe;
    });
   
  }

  ToggleAutoRotate(){

      this.setState(prevState => ({
        autorotate: !prevState.autorotate
      }));
     this.controls.autoRotate = this.state.autorotate
     this.controls.autoRotateSpeed = 7
  }
  
  Leave(){
    this.setState({
      Onhover: false
    })
    this.controls.enabled = false;
    // this.stop()
  }

  // original goes here


  animate() {
  
    this.frameId = window.requestAnimationFrame(this.animate)
    this.controls.update();
    this.renderScene()
  }
  
  updateTextureEncoding (object) {
    const encoding = THREE.sRGBEncoding
    traverseMaterials(object, (material) => {
      if (material.map) material.map.encoding = encoding;
      if (material.emissiveMap) material.emissiveMap.encoding = encoding;
      if (material.map || material.emissiveMap) material.needsUpdate = true;
    });
  }


  renderScene() {// get the element that is a place holder for where we want to
    // draw the scene
    var element = this.state.scene.userData.element;

    // get its position relative to the page's viewport
    var rect = this.mount.getBoundingClientRect();

    // check if it's offscreen. If so skip it
    if (this.state.visible === false) {
       
      return; // it's off screen

    }

    // set the viewport
    var width = (rect.right - rect.left);
    var height = rect.bottom - rect.top;
    var left = rect.left;
    var bottom = this.renderer.domElement.clientHeight - rect.bottom;
    // this.renderer.setViewport( 0, bottom, width ,this.mount.clientHeight);
    // this.renderer.setScissor( left, bottom, width , height);

    // var camera = this.state.scene.userData.camera;

    //camera.aspect = width / height; // not changing in this example
    //camera.updateProjectionMatrix();

    //scene.userData.controls.update();

    this.renderer.render( this.state.scene, this.camera );
    
  }

 loadModel = (gltfmodel,scene, camera)=> {

    if (gltfmodel !== undefined || " "){
    
        const gltfloader = new GLTFLoader()
    
        gltfloader.load(gltfmodel, (gltf) => {
    
   var mygeometry = new THREE.Geometry()
 
  var myscene = gltf.scene || gltf.scenes[0]
  this.myscene = myscene
  this.setContent(myscene)
  this.resize()
  this.setState({
    hasloaded: true
  })
  // 

},function ( xhr ) {

  // 

},
// called when loading has errors
function ( error ) {

  

})
    }
}

setContent ( object ) {

  // this.clear();

  object.updateMatrixWorld();
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3()).length();
  const center = box.getCenter(new THREE.Vector3());

  this.controls.reset();

  object.position.x += (object.position.x - center.x);
  object.position.y += (object.position.y - center.y);
  object.position.z += (object.position.z - center.z);
  this.controls.maxDistance = size * 10;
  this.camera.near = size / 100;
  this.camera.far = size * 100;
  this.camera.updateProjectionMatrix();

  
   this.camera.position.copy(center);
    this.camera.position.x += size / 2.0;
    this.camera.position.y += size / 5.0;
    this.camera.position.z += size / 12.334;
    this.camera.lookAt(center);

  

  // this.setCamera(this.camera);

  // this.controls.saveState();

//   this.state.scene.add(object);
  this.content = object;
  this.state.addLights = true;
  this.addLights();
  this.updateTextureEncoding(this.content);
  // this.setCamera(this.camera)
  this.start()

}

addLights () {
  const state = this.state;
if(this.lights.length <= 2){
    const hemiLight = new THREE.HemisphereLight();
    hemiLight.name = 'hemi_light';
    this.state.scene.add(hemiLight);
    this.lights.push(hemiLight);
   
  

  const light1  = new THREE.AmbientLight(state.ambientColor, state.ambientIntensity);
  light1.name = 'ambient_light';
  this.camera.add( light1 );

  const light2  = new THREE.DirectionalLight(state.directColor, state.directIntensity);
  light2.position.set(0.5, 0, 0.866); // ~60º
  light2.name = 'main_light';
  this.camera.add( light2 );
  // 
  this.lights.push(light1, light2);
}
}

 /**
   * @param {string} name
   */
setCamera ( name ) {
  if (name === this.camera) {
    // this.controls.enabled = true;
    this.activeCamera = this.defaultCamera;
  } else {
    this.controls.enabled = false;
    this.content.traverse((node) => {
      if (node.isCamera && node.name === name) {
        this.activeCamera = node;
      }
    });
  }
}

onChange(isVisible) {
  this.setState({visible: isVisible});
if(isVisible){
  this.loadModel(this.props.model,this.state.scene,this.camera);
}else{
  this.clear()
}
}
exposureChange(e){
  
  var val = e.target.value
//  this.animate()
  this.setState({
  exposure : val
 })
 this.renderer.toneMappingExposure = this.state.exposure;

 
}

ambientChange(e){
  var val = e.target.value
  // this.animate()
 
  this.setState({
  ambientIntensity : val
 })
 this.lights[0].intensity = this.state.ambientIntensity;

}
directChange(e){
  var val = e.target.value
  // this.animate()
  this.setState({
  directIntensity : val
 })
 this.lights[1].intensity = this.state.directIntensity;

}
gammaChange(e){
  var val = e.target.checked
  // this.animate()
  this.setState({
    gamma: val
  })

  this.renderer.gammaOutput = val
  traverseMaterials(this.content, (material) => {
    material.needsUpdate = true;
  });
}

clear () {

  if ( !this.content ) return;

  this.state.scene.remove( this.content );

  // dispose geometry
  this.content.traverse((node) => {

    if ( !node.isMesh ) return;
    
    node.geometry.dispose();
   

  } );

  // dispose textures
  traverseMaterials( this.content, (material) => {

    MAP_NAMES.forEach( (map) => {

      if (material[ map ]) material[ map ].dispose();

    } );

  } );

}
ismobile() {
  if (this.mount.clientWidth < 450){
    return true
  }
  return false
}


  render() {
    this.THREE = THREE;
    const { isVisible } = this.state.visible
    if (this.state.editMenu ===true){
    return (
    <VisibilitySensor onChange= {this.onChange} partialVisibility={false} >
    <div> 
      <div style={{display:'inline-block'}}>
      <div style={this.styles.sliderdiv}>
        exposure
        <input type='range' min='.1' max='2' step='.1' value={this.state.exposure} onChange={this.exposureChange}>
      </input>  
      </div>
      <div style={this.styles.sliderdiv}>
        direct
        <input type='range' min='.1' max='5' step='.1' onChange={this.directChange}>
      </input>  
      </div>
      <div style={this.styles.sliderdiv}>
        ambient
        <input type='range' min='.1' max='2' step='.1' onChange={this.ambientChange}>
      </input>  
      </div>
      <div style={this.styles.sliderdiv}>
        gamma
        <input type='checkbox' min='.1' max='2' step='.1' onChange={this.gammaChange}>
      </input>  
      </div>
      </div>

    <div
         style={{  width: this.props.width || '100%', 
         height: this.props.height || '450px', 
        borderStyle: 'solid',
        borderWidth: '0px'}}
        model = {this.props.model}
        ref={(mount) => {this.mount = mount }}
        onMouseOver={this.onhover}
        onMouseLeave={this.Leave}
        onTouchStart={this.onhover}
        onTouchEnd={this.Leave}
        onDoubleClick={this.ToggleAutoRotate}
      > 
            
      </div>
    </div>   
     </VisibilitySensor>
 
  );
    }
    else {
      return(
        <VisibilitySensor onChange= {this.onChange} partialVisibility={this.props.partial || false} >

        <div
        style={{  width: this.props.width || '100%', 
        height: this.props.height || '450px', 
       borderStyle: 'solid',
       borderWidth: '0px'}}
       model = {this.props.model}
       ref={(mount) => {this.mount = mount }}
       onMouseOver={this.onhover}
       onMouseLeave={this.Leave}
       onTouchStart={this.onhover}
       onTouchEnd={this.Leave}
       onDoubleClick={this.ToggleAutoRotate}
     > 
     {/* <button onClick={()=>{this.renderer.forceContextLoss()}}>contentloss</button>
     <button onClick={this.init}>init</button> */}

     </div>
 </VisibilitySensor>
      )
    }
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  
}


const mapStateToProps = state =>{
  const uid = state.getIn(['authorize', 'uid'])
  const user = state.getIn(['user', 'info', uid], {})
  const renderer = state.getIn(['storerenderer'])
  return{
    ownerDisplayName: user.fullName || '',
    user : user,
    renderer : renderer
  }
}

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Scene)

// export default Scene


