import React, {memo, useEffect, useRef, useState} from 'react';
import { Slide } from 'react-awesome-reveal';
import Img3Component from '../Img3/Img3';

export interface IndustriesRow {
  industryInfo: {
    subcategory: string;
    specifics: string;
    description: string;
    metadata: string;
    category: string;
    exampleURL: string;
  };
  index: number;
  key: number;
}
const Card = (props: any) => {
  console.log(props.ref?.current);
  return (
    props.isOpen && (
      <div
        style={{
          // background: 'radial-gradient(rgba(25,25,28,0) 50%,#19191c 80%),conic-gradient(#9c3cf7 0,#19191c 15.2%,#19191c 18.2%,#1e1ae8 20.5%,#19191c 30.2%,#19191c 50%,#0e0ab4 56.5%,#1e1ae8 59.4%,#060551 66.2%,#101057 72.9%,#242473 85.1%,#1e1ae8 89.1%,#0a06b7 90.6%,#19191c 93.7%,#9c3cf7 100%)',
          height: props.height,
          bottom: `${props.ref?.current.bottom}`,
          top: `${props.ref?.current.top}`,
        }}
      >
        <Img3Component minWidth={'100%'} model={props.url}>
          width={'600px'}
        </Img3Component>
      </div>
    )
  );
};

const IndustryRow = (props: IndustriesRow) => {
  const { industryInfo, index } = props;
  const [height, setheight] = useState('150px');
  const ref = useRef<any>();
  console.debug('info', industryInfo);

  useEffect(() => {
    setheight(ref?.current?.style.height);
  }, []);

  return (
    <Slide
      style={{ minWidth: '100%' }}
      triggerOnce={true}
      direction={index % 2 === 0 ? 'left' : 'right'}
      duration={1300}
    >
      <div
        ref={ref}
        style={{ marginTop: '48px', minWidth: '100%', width: '100%' }}
        className="row education"
      >
        <div style={{ color: 'white' }} className="three columns header-col">
          <h1>
            <span style={{ textDecoration: 'underline', color: 'white' }}>
              {industryInfo.category}
            </span>
          </h1>
        </div>

        <div style={{ color: 'white' }} className="nine columns main-col">
          <div className="row item">
            <div style={{ color: 'white' }} className="twelve columns">
              <div style={{ color: 'white' }} key={industryInfo.subcategory}>
                <h3 style={{ color: 'white' }}>{industryInfo.subcategory}</h3>
                <p className="info">
                  {industryInfo.specifics} <span>&bull;</span>
                  <em className="date">{industryInfo.metadata}</em>
                </p>
                <p>{industryInfo.description}</p>
              </div>
            </div>
          </div>
        </div>

        <Card url={industryInfo.exampleURL} isOpen={true} height={height} />
      </div>
    </Slide>
  );
};

export default memo(IndustryRow);
