import { useParams } from 'react-router-dom';
import Logements from '../data/logements.json';

import HousingCarousel from '../components/housingCarousel';
import HousingId from '../components/housingId';

const Housing = () => {
  const { id } = useParams();
  const housing = Logements.find((item) => item.id === id);

  const { title, picture, name, location } = housing;

  return (
    <div>
      <HousingCarousel />
      <HousingId title={title} image={picture} host={name} location={location} />
    </div>
  );
};

export default Housing;