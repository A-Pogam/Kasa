import { useParams } from 'react-router-dom';
import Logements from '../data/logements.json';

import HousingCarousel from '../components/housingCarousel';
import HousingId from '../components/housingId';
import Error from '../pages/error';
import HousingRating from '../components/housingRating';
import Collapse from "../components/collapse";  
import "../styles/pages/housing.scss"

const Housing = () => {
  const { id } = useParams();
  const housing = Logements.find((item) => item.id === id);

  if (!housing) {
    return <Error />;
  }

  const { title, location, host, tags, rating, description, equipments } = housing;

  return (
    <div className="housing">
      <HousingCarousel id={id} />
      <HousingId title={title} location={location} host={host} />
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <HousingRating rating={rating} />
      <Collapse title="Description" content={<p>{description}</p>} />
      <Collapse
        title="Équipements"
        content={
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        }
      />
    </div>
  );
};

export default Housing;
