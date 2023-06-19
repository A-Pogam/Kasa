import { Link } from 'react-router-dom'; // Importation de la fonction Link depuis le module 'react-router-dom'

const Card = ({ id, title, image, text }) => { // Définition du composant Card avec les attributs id, title, image et text
  return (
    <div className="card"> {/* Conteneur principal du composant Card */}
      <Link to={`/housing/${id}`} className="card-link"> {/* Composant Link pour créer un lien vers la page de détails du logement */}
        <div className="image-container"> {/* Conteneur pour l'image de la carte */}
          <div className="gradient-overlay"></div> {/* Overlay de dégradé sur l'image */}
          <img src={image} alt={title} className="small-image" /> {/* Image avec l'attribut src pour l'URL de l'image et l'attribut alt pour le texte alternatif */}
          <div className="card-text">{title}</div> {/* Titre de la carte */}
        </div>
      </Link>
    </div>
  );
};

export default Card; // Exportation du composant Card par défaut
