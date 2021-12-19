import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import '@google/model-viewer'
import './img3.css'

const Img3Component = (props) => {
   // useEffect(() => {
   //     alert("hello")
   // })
        if (props.model && props.model.includes('glb')) {
            return (
                <model-viewer
                    className={'viewer'}
                    quick-look-browsers="safari chrome"
                    style={{
                        borderRadius: props.borderRadius || '',
                        height: props.height || '500px',
                        width: props.width || '100%',
                        maxWidth: props.MaxWidth || '350px',
                        margin: 'auto',
                        backgroundColor: props.backgroundColor || '',
                        boxShadow: 'none',
                        outline: 'none'
                    }}
                    src={props.model}
                    alt="A 3D model"
                    ar
                    ios-src={props.ArFile || 'https://firebasestorage.googleapis.com/v0/b/dc1-ba765.appspot.com/o/hoodieblue.usdz?alt=media&token=4d88ec5a-e019-493d-8487-9f745602cdf9'}
                    magic-leap
                    ar-scale="auto"
                    camera-controls
                    background-color={props.backgroundColor || ""}>
                </model-viewer>
            )
        } else {
            return (
                <></>)
        }
}


export default Img3Component;