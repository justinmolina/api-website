import React, {useRef} from 'react'

const ParallaxContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null)
    return(
    <div id={'parallaxContainer'} ref={containerRef}>
      <ParallaxContainer/>
    </div>)
}
export default ParallaxContainer