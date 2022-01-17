import React, {useEffect} from 'react'
import '@google/model-viewer'

const Img3Component = (props) => {
  const modelViewerColor = document.querySelector('model-viewer#color');

  let colorControls =  document.querySelector('#color-controls') || undefined
  if(colorControls) {
    colorControls.addEventListener('click', (event) => {

      const colorString = event?.target?.dataset?.color;

      if (!colorString) {
        return;
      }

      const color = colorString.split(',')
        .map((numberString) => parseFloat(numberString));

      console.log('Changing color to: ', color);
      const [material] = modelViewerColor?.model.materials;
      material.pbrMetallicRoughness.setBaseColorFactor(color);
    })
  }

  if (props.model && props.model.includes('glb')) {
    return (
    // @ts-ignore
      <model-viewer
        className={'viewer'}
        zoom={false}
        quick-look-browsers="safari chrome"
        width={ props.width || '100%'}
        style={{
          borderRadius: props.borderRadius || '',
          height: props.height || '500px',
          width: props.width || '100%',
          maxWidth: props.MaxWidth || '1000px',
          margin: 'auto',
          backgroundColor: props.backgroundColor || '',
          boxShadow: 'none',
          outline: 'none'
        }}
        src={props.model}
        alt="A 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        ios-src={props.ArFile || 'https://firebasestorage.googleapis.com/v0/b/dc1-ba765.appspot.com/o/hoodieblue.usdz?alt=media&token=4d88ec5a-e019-493d-8487-9f745602cdf9'}
        magic-leap
        ar-scale="auto"
        camera-controls
        background-color={props.backgroundColor || ''}>
        {/*<div className="controls">*/}
        {/*  <button data-color="1,0,0,1">Red</button>*/}
        {/*  <button data-color="0,1,0,1">Green</button>*/}
        {/*  <button data-color="0,0,1,1">Blue</button>*/}
        {/*</div>*/}
      </model-viewer>
    )
  } else {
    return (
      <></>)
  }
}


export default Img3Component;