import React from 'react'
import caro1 from './caro1.webp'
import caro2 from './caro2.webp'
import caro3 from './caro3.webp'
import Carousel from 'react-bootstrap/Carousel';

function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default BootstrapCarousel;
