import { useParams } from 'react-router-dom'; // Importation de la fonction useParams depuis le module 'react-router-dom'
import Logements from '../data/logements.json'; // Importation du fichier JSON contenant les données des logements

import HousingCarousel from '../components/housingCarousel'; // Importation du composant HousingCarousel
import HousingId from '../components/housingId'; // Importation du composant HousingId
import HousingIdcontainer from '../components/housingIdContainer'; 
import Error from '../pages/error';
import Collapse from "../components/Collapse";
import "../styles/pages/housing.scss"

const Housing = () => { // Définition du composant Housing
  const { id } = useParams(); // Extraction du paramètre 'id' de l'URL à l'aide de la fonction useParams
  const housing = Logements.find((item) => item.id === id); // Recherche du logement correspondant à l'ID extrait


  if (!housing) { // Si aucun logement correspondant n'est trouvé
    return <Error />; // Renvoyer le composant Error (page d'erreur)
  }

  const { title, location, host, tags, rating, description, equipments } = housing;   // Déstructuration des propriétés du logement pour une utilisation plus facile

  return (
    <div className="housing">
        <HousingCarousel id={id} /> {/* Composant HousingCarousel avec la propriété 'id' */}
      <div className='test'>
        <HousingId title={title} location={location} tags={tags} /> {/* Composant HousingId avec les propriétés extraites */}
        <HousingIdcontainer rating={rating} host={host}  />  {/* Composant HousingIdcontainer avec les propriétés extraites */}
      </div>
      <div className='description-equipements'>
        <div className='description'>
          <Collapse title="Description" content={<p>{description}</p>} /> {/* Composant Collapse avec le titre "Description" et le contenu de la description */}
        </div>
        <div className='equipements'>
          <Collapse
            title="Équipements"
            content={
              <ul>
                {equipments.map((equipment, index) => ( // La méthode map() est utilisée pour itérer sur chaque élément du tableau 'equipments'
                <li key={index}>{equipment}</li> // Pour chaque élément, un élément <li> est créé avec le contenu de l'équipement et une clé unique 'index'
              ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Housing;
