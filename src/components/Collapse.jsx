import arrowUpImg from '../assets/arrowUp.png';
import arrowDownImg from '../assets/arrowDown.png';
import React, { useState } from 'react'; // Importation de React et de la fonction useState

const HousingCollapse = ({ title, content }) => { // Définition du composant HousingCollapse avec les attributs title et content
  const [isOpen, setIsOpen] = useState(false); // Utilisation de useState pour gérer l'état de l'ouverture/fermeture du collapse, ce qui signifie que le collapse est initialement fermé ( Au départ, l'état isOpen est initialisé à false, ce qui signifie que le collapse est initialement fermé)

  const toggleCollapse = () => { // Fonction pour basculer l'état du collapse
    setIsOpen(!isOpen); // Inversion de la valeur actuelle de isOpen à chaque appel de la fonction, À chaque appel de cette fonction, elle inverse la valeur actuelle de isOpen. Si isOpen est true, elle le met à false, et vice versa
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}> {/* Conteneur principal du collapse avec une classe 'collapse' et 'open' si isOpen est true */}
      <div className="collapse-header" onClick={toggleCollapse}> {/* En-tête du collapse avec un gestionnaire d'événement onClick qui appelle la fonction toggleCollapse */}
        <h2>{title}</h2> {/* Titre du collapse */}
        <img
          src={isOpen ? arrowDownImg : arrowUpImg} /* Image de la flèche vers le bas si isOpen est true, sinon image de la flèche vers le haut */
          alt={isOpen ? 'Arrow Down' : 'Arrow Up'} /* Texte alternatif de l'image en fonction de l'état d'ouverture du collapse */
          className={`collapse-icon ${isOpen ? 'open' : ''}`} /* Classe 'collapse-icon' avec 'open' si isOpen est true */
        />
      </div>
      {isOpen && (
        <div className="collapse-content"> {/* Contenu du collapse, affiché uniquement si isOpen est true */}
          {content} {/* Contenu dynamique du collapse */}
        </div>
      )}
    </div>
  );
};

export default HousingCollapse;
