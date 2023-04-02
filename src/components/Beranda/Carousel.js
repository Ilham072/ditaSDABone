import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import image1 from './../../image/image1.png';
import './Carousel.css';
const images = [
  <img src={image1} />,
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={
              "carousel-image " +
              (index === currentImage ? "carousel-image-active" : "")
            }
            src={image1}
            alt=""
          />
        ))}
      </div>
      <div className="carousel-nav">
        <button onClick={prevImage}>&lt;</button>
        {images.map((image, index) => (
          <button
            key={index}
            className={
              "carousel-nav-dot " +
              (index === currentImage ? "carousel-nav-dot-active" : "")
            }
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;