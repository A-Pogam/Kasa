import { useParams } from 'react-router-dom';
import Logements from '../data/logements.json';

import HousingCarousel from '../components/housingCarousel';
import HousingId from '../components/housingId';

const Housing = () => {
  const { id } = useParams();
  const housing = Logements.find((item) => item.id === id);

  const { title, cover, host, location, tags, rating } = housing;

  return (
    <div>
      <HousingId title={title} image={cover} host={host} location={location} tags={tags} rating={rating} />
      <HousingCarousel />
    </div>
  );
};

export default Housing;