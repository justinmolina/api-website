import React, {Component} from 'react';
import IndustryRow from './IndustryRow';

const BodyInfo = (props: any) => {
  if (!props.data) return null;
  const {industry} = props.data.summaryInfo

  console.debug(industry)
  return (
    industry.map((industry: any, index: number) =>
      (
        <IndustryRow
          key={index}
          industryInfo={industry}
          index={index}/>
      )
    )
  )
}

export default BodyInfo