import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Img from 'components/img'
import '@google/model-viewer'
import './img3.css'

class Img3Component extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.model.includes('glb')) {
      return (
        <model-viewer
          className={'viewer'}
          quick-look-browsers="safari chrome"
          style={{
            borderRadius: this.props.borderRadius || '',
            height: this.props.height || '500px',
            width: this.props.width || '100%',
            maxWidth: this.props.MaxWidth || '350px',
            margin: 'auto',
            backgroundColor: this.props.backgroundColor || '',
            boxShadow: 'none',
            outline: 'none'
          }}
          src={this.props.model}
          alt="A 3D model"
          ar
          ios-src={this.props.ArFile || 'https://firebasestorage.googleapis.com/v0/b/dc1-ba765.appspot.com/o/hoodieblue.usdz?alt=media&token=4d88ec5a-e019-493d-8487-9f745602cdf9'}
          magic-leap
          ar-scale="auto"
          camera-controls
          background-color={this.props.backgroundColor || ''}>
        </model-viewer>
      )
    } else {
      return (
        <Img
          width={this.props.width || 'auto'}
          objectFit={this.props.objectFit}
          borderRadius={this.props.borderRadius || ''}
          height={this.props.height || '350px'}
          maxHeight={this.props.maxHeight || '500px'}
          fileName={this.props.model}/>)
    }
  }
}

Img3Component.propTypes = {
  model: PropTypes.any,
  ArFile: PropTypes.any
}

export default Img3Component;