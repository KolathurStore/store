import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Slider = ({ images,urls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <Link to ="/Stationery">
      <div
        className="slider-inner"
        style={{ transform: `translatex(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        
        ))}
      </div>
      </Link>

    </div>
  );
};

export default Slider;
