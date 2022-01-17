import React, {useEffect, useRef, useState} from 'react';
import {Slide} from 'react-awesome-reveal';
import Img3Component from '../Img3/Img3';

export interface IndustriesRow {
  industryInfo: {
    school: string,
    degree: string,
    description: string,
    graduated: string,
    category: string
  }
  index: number;
  key: number
}
const Card = (props: any) => {
  console.log(props.ref?.current)
  return(
    props.isOpen &&
    <div style={{
      // background: 'radial-gradient(rgba(25,25,28,0) 50%,#19191c 80%),conic-gradient(#9c3cf7 0,#19191c 15.2%,#19191c 18.2%,#1e1ae8 20.5%,#19191c 30.2%,#19191c 50%,#0e0ab4 56.5%,#1e1ae8 59.4%,#060551 66.2%,#101057 72.9%,#242473 85.1%,#1e1ae8 89.1%,#0a06b7 90.6%,#19191c 93.7%,#9c3cf7 100%)',
      height: props.height,
      bottom: `${props.ref?.current.bottom}`,
      top: `${props.ref?.current.top}`
    }}>
      <Slide direction={'up'}>
        <Img3Component
          model={props.url}>
          width={'600px'}
        </Img3Component>
      </Slide>
    </div>
  )
}

const IndustryRow = (props: IndustriesRow) => {
  const {industryInfo, index} = props;
  const [height, setheight] = useState('150px')
  const ref = useRef<any>()
  const [isCardOpen, setCardOpen] = useState(false)
  console.debug('info',industryInfo)
  const direction = index % 2 === 0 ? 'left' : 'right';
  
  useEffect(() => {
    setheight(ref?.current?.style.height)
  },[ ref.current ])
  return (
    <Slide direction={direction} duration={1300}>
      <div ref={ref} 
        style={{marginTop: '48px'}} 
        className="row education">

        <div className="three columns header-col">
          <h1>
            <span style={{textDecoration: 'underline'}}>{industryInfo.category}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div key={industryInfo.school}>
                <h3>{industryInfo.school}</h3>
                <p className="info">
                  {industryInfo.degree} <span>&bull;</span>
                  <em className="date">{industryInfo.graduated}</em>
                </p>
                <p>{industryInfo.description}</p>
              </div>
            </div>
            {/*<button onClick={() => { setCardOpen(!isCardOpen) }}>*/}
            {/*  Open*/}
            {/*</button>*/}
          </div>
        </div>
        
        <Card
          url={'https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/Models%2Ftesla2.glb?alt=media&token=4ae3a9a8-54ea-430e-ac01-51d2b2b1c395'}
          isOpen={true}
          height={height}
        />
      </div>
    </Slide>
  )
}

export default IndustryRow;