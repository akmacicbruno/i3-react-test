import React, { useState } from "react";
import Card from "../Card/Card"; // Adjust the path as necessary
import "./style-carousel.css"; // Create a CSS file for carousel styles

const Carousel = ({ airplanes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % airplanes.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + airplanes.length) % airplanes.length
    );
  };

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {airplanes.map((airplane, index) => (
            <Card
              key={index}
              name={airplane.name}
              description={airplane.description}
              imageUrl={airplane.image_url}
            />
          ))}
        </div>

        <button className="carousel-arrow left" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="carousel-arrow right" onClick={handleNext}>
          &#8250;
        </button>

        <div className="carousel-dots">
          {airplanes.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
