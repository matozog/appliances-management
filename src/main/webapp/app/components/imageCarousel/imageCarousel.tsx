import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './imageCarousel.scss';

import React, { FC } from 'react';

import { Carousel } from 'react-responsive-carousel';

interface IImageCarouselProps {
  carouselItems: JSX.Element[];
}

const ImageCarousel: FC<IImageCarouselProps> = ({ carouselItems }) => {
  return (
    <Carousel className="h-100" showThumbs={false} useKeyboardArrows>
      {carouselItems}
    </Carousel>
  );
};

export default ImageCarousel;
