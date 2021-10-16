import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import React from 'react';

const ImageCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
