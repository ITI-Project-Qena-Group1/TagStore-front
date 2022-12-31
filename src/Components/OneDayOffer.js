import React, { useRef, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const OneDayOffer = (props) => {
        
  return (
    <div className='container p-0 mb-2 rounded bg-light'>

    <Carousel
    // indicators={false}
    controls={false} 
    fade>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-bottom"
          src={props.imgSource[0]}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-bottom"
          src={props.imgSource[1]}
          alt="Second slide"
        />

      </Carousel.Item>

    </Carousel>

    </div>

)
}
