import Banner from "../components/banner"; // Importation du composant Banner
import homeBannerImg from "../assets/bannerHome.webp"; // Importation de l'image de la bannière depuis les ressources
import data from '../data/logements.json'; // Importation du fichier JSON contenant les données des logements
import { Link } from 'react-router-dom'; // Importation de la fonction Link depuis le module 'react-router-dom'
import '../styles/pages/home.scss'; // Importation du fichier de styles home.scss

const Home = () => { // Définition du composant Home
  return (
    <div className="home"> {/* Conteneur principal du composant */}
      <Banner imgSrc={homeBannerImg} alt="Bannière Accueil" text="Chez vous, partout et ailleurs" /> {/* Composant Banner avec les attributs imgSrc, alt et text */}
      <div className="card-container"> {/* Conteneur pour les cartes de logement */}
        {data.map((logement) => ( // Utilisation de la méthode map() pour itérer sur chaque élément du tableau 'data' (logements)
          <div key={logement.id}> {/* Chaque carte doit avoir une clé unique, dans ce cas l'ID du logement est utilisé */}
            <Link to={`/housing/${logement.id}`} className="card"> {/* Composant Link pour créer un lien vers la page de détails du logement */}
              <div className="image-container"> {/* Conteneur pour l'image de la carte */}
                <div className="gradient-overlay"></div> {/* Overlay de dégradé sur l'image */}
                <img src={logement.cover} alt={logement.title} className="small-image" /> {/* Image de couverture du logement */}
                <div className="card-text">{logement.title}</div> {/* Titre du logement */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; // Exportation du composant Home par défaut
