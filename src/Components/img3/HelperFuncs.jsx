import * as THREE from 'three'
export function setBackground(color, scene){
if (color === "cubemap"){

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
            
           scene.background = bg
          })}
    
        if(color === 'transparent'){   
            
         }
         else if (color){
          scene.background = new THREE.Color(this.props.color)
         }
         else {
              scene.background = new THREE.Color('#f2f2f2')
       
         }
        }
      
export const MAP_NAMES = [
    'map',
    'aoMap',
    'emissiveMap',
    'glossinessMap',
    'metalnessMap',
    'normalMap',
    'roughnessMap',
    'specularMap',
  ];
        


 
   export function exposureChange(e){
      
      var val = e.target.value
    //  this.animate()
      this.setState({
      exposure : val
     })
     this.renderer.toneMappingExposure = this.state.exposure;
    
     
    }
    
    export function ambientChange(e,lights){
      var val = e.target.value
      // this.animate()
     
      this.setState({
      ambientIntensity : val
     })
     lights[0].intensity = this.state.ambientIntensity;
    
    }

    export function directChange(e,lights){
      var val = e.target.value
      // this.animate()
      this.setState({
      directIntensity : val
     })
     lights[1].intensity = this.state.directIntensity;
    
    }