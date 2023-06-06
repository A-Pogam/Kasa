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
  const showArrows = pictures.length > 1; // Vérifie s'il y a plus d'une photo

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      {showArrows && (
        <button className="arrow arrow-prev" onClick={handlePrevSlide}>
          <img src={arrowPreviousImg} alt="Previous" />
        </button>
      )}
      <img src={pictures[currentSlide]} alt={logement.title} />
      {showArrows && (
        <button className="arrow arrow-next" onClick={handleNextSlide}>
          <img src={arrowNextImg} alt="Next" />
        </button>
      )}
      {showArrows && (
        <div className="status">{`${currentSlide + 1}/${pictures.length}`}</div>
      )}
    </div>
  );
};

export default HousingCarousel;
