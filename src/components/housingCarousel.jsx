import React, { useState } from 'react';
import data from '../data/logements.json';

const HousingCarrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carrousel">
      <button className="arrow arrow-prev" onClick={handlePrevSlide}>
        &#60;
      </button>
      <img src={data[currentSlide].image} alt={data[currentSlide].title} />
      <button className="arrow arrow-next" onClick={handleNextSlide}>
        &#62;
      </button>
      <div className="status">{`${currentSlide + 1}/${data.length}`}</div>
    </div>
  );
};

export default HousingCarrousel;
