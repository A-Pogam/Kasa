import React, { useState } from 'react';
import data from '../data/logements.json';
import arrowNextImg from '../assets/arrowNext.png';
import arrowPreviousImg from '../assets/arrowPrevious.png';

const HousingCarousel = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return null; // Gérer le cas où l'ID n'est pas trouvé
  }

  const pictures = logement.pictures;

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      <button className="arrow arrow-prev" onClick={handlePrevSlide}>
        <img src={arrowPreviousImg} alt="Previous" />
      </button>
      <img src={pictures[currentSlide]} alt={logement.title} />
      <button className="arrow arrow-next" onClick={handleNextSlide}>
        <img src={arrowNextImg} alt="Next" />
      </button>
      <div className="status">{`${currentSlide + 1}/${pictures.length}`}</div>
    </div>
  );
};

export default HousingCarousel;
