import { useParams } from 'react-router-dom';
import Logements from '../data/logements.json';

import HousingCarousel from '../components/housingCarousel';
import HousingId from '../components/housingId';
import HousingIdcontainer from '../components/housingIdContainer';
import Error from '../pages/error';
import Collapse from "../components/Collapse";
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
      <div className='test'>
        <HousingId title={title} location={location} tags={tags} />
        <HousingIdcontainer host={host} rating={rating} />
      </div>
      {/* <div className="tags-and-rating-container">
        <div className='rating-container'>
          <HousingRating rating={rating} />
        </div>
      </div> */}
      <div className='description-equipements'>
        <div className='description'>
          <Collapse title="Description" content={<p>{description}</p>} />
        </div>
        <div className='equipements'>
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
      </div>
    </div>
  );
};

export default Housing;
