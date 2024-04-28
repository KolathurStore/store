import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import CSS for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState([]);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Set the displayed images based on the current index
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const nextNextIndex = (currentIndex + 2) % images.length;
    setDisplayedImages([images[currentIndex], images[nextIndex], images[nextNextIndex]]);
  }, [currentIndex, images]);

  return (
    <div className="carousel-container">
      {displayedImages.map((image, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{ backgroundImage: `url(${image})`, transform: `translateX(-${index * 100}%)` }}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;
