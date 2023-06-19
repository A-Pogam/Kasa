import React, { useState } from 'react'; // Importation de React et useState depuis le module 'react'
import data from '../data/logements.json'; // Importation des données des logements depuis un fichier JSON
import arrowNextImg from '../assets/arrowNext.png'; // Importation de l'image de la flèche suivante depuis les ressources
import arrowPreviousImg from '../assets/arrowPrevious.png'; // Importation de l'image de la flèche précédente depuis les ressources

const HousingCarousel = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Utilisation de useState pour gérer l'état du slide courant
  const logement = data.find((item) => item.id === id); // Recherche du logement correspondant à l'ID

  if (!logement) {
    return null; // Si aucun logement n'est trouvé, retourner null (ne rien afficher)
  }

  const pictures = logement.pictures; // Récupération des images du logement
  const showArrows = pictures.length > 1; // Vérification s'il y a plus d'une photo pour afficher les flèches de navigation

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1)); // Gestion du clic sur la flèche précédente pour passer au slide précédent
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1)); // Gestion du clic sur la flèche suivante pour passer au slide suivant
  };

  return (
    <div className="carousel">
      {showArrows && (
        <button className="arrow arrow-prev" onClick={handlePrevSlide}>
          <img src={arrowPreviousImg} alt="Previous" /> {/* Affichage de l'image de la flèche précédente */}
        </button>
      )}
      <img className="carousel-image" src={pictures[currentSlide]} alt={logement.title} /> {/* Affichage de l'image du slide courant */}
      {showArrows && (
        <button className="arrow arrow-next" onClick={handleNextSlide}>
          <img src={arrowNextImg} alt="Next" /> {/* Affichage de l'image de la flèche suivante */}
        </button>
      )}
      {showArrows && (
        <div className="status">{`${currentSlide + 1}/${pictures.length}`}</div> /* Affichage du statut du slide courant */
      )}
    </div>
  );
};

export default HousingCarousel; // Exportation du composant HousingCarousel par défaut
