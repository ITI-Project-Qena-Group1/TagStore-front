import React, { useRef, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const OneDayOffer = () => {
        
  return (
    <div className='container p-0 my-2 rounded p-1 bg-light'>

    <Carousel
    // indicators={false}
    controls={false} 
    fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eg.jumia.is/cms/Dec-22/1-DAY-OFFER/Dec-1st/1168x384__-EN_copy.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eg.jumia.is/cms/Dec-22/Pay-App/INSTL/1168_x_384_en_-(1).jpg"
          alt="Second slide"
        />

      </Carousel.Item>

    </Carousel>

    </div>

)
}
