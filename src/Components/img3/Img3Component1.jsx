/*tslint:disable*/
/*eslint:disable*/
import * as THREE from 'three';
import * as GLTFLoader from 'three-gltf-loader';
import { Object3D } from 'three';


const loadModel = (gltfmodel,scene, camera)=> {

    if (gltfmodel !== undefined || " "){
    
        const gltfloader = new GLTFLoader()
    
        gltfloader.load(gltfmodel, (gltf) => {
    
            var mygeometry = new THREE.Geometry()
    // this.myModel1 = gltf.scene
    // this.state.scene.add(gltf.scene)
    
  var myscene = gltf.scene || gltf.scenes[0]
  
  var index = gltf.scene.children.length - 1
  
  var model = (gltf.scene.children[index])
  model.updateMatrixWorld();
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3()).length();
  const center = box.getCenter(new THREE.Vector3());
//   if (gltf.scene.children[index].geometry.center() !== undefined || 'undefined'){
//   mygeometry = gltf.scene.children[index].geometry.center()
//   }
//     else {
//         model.forEach(
//         model.forEach(scene.add(model))
//         return
//     }

    camera.position.z += size / 3.0;
    camera.position.x = model.position.x 
    camera.position.y = model.position.y 
    
    
    // 

camera.lookAt(center)
  
 
    // 
    
    
    
     
     
  
     
    
    
  

   
    scene.add(model)
   
    
    //  
    // this.camera.position.z = ( Math.pow(distance,2) - (2 * distance) )
   
})

    }

    

}
const traverseMaterials = (object, callback) => {
    object.traverse((node) => {
      if (!node.isMesh) return;
      const materials = Array.isArray(node.material)
        ? node.material
        : [node.material];
      materials.forEach(callback);
    });
  }

export {loadModel, traverseMaterials}



// original goes in img3

// loadModel(gltfmodel){
//     const gltfloader = new GLTFLoader()
//      gltfloader.load(gltfmodel, (gltf) => {
//     var mygeometry = new THREE.Geometry()
//     this.myModel1 = gltf.scene
//     // this.state.scene.add(gltf.scene)
    
//     var box = new THREE.Box3()
//     box.setFromObject(gltf.scene)
  
//     mygeometry = gltf.scene.children[2].geometry.center()
//     // 
//     var bb = mygeometry.boundingBox

//     var centerX = (bb.max.x - bb.min.x)/1.65
//     this.setState({
//       Center: centerX
//     })
 
//     // 
    
//      gltf.scene.position.x = bb.min.x
//      var pivot = new THREE.Group();
//      this.state.scene.add(pivot)
//      this.camera.position.x = bb.min.x + centerX
//      pivot.add(gltf.scene)
   
//      var distance = Math.abs(bb.max.x - bb.min.x)
//     //  
//     this.camera.position.z = ( Math.pow(distance,2) - (2 * distance) )
   
// })

// }