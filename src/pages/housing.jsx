import { useParams } from 'react-router-dom';
import Logements from '../data/logements.json';

import HousingCarousel from '../components/housingCarousel';
import HousingId from '../components/housingId';
import Error from '../pages/error';

const Housing = () => {
  const { id } = useParams();
  const housing = Logements.find((item) => item.id === id);

  if (!housing) {
    return <Error />;
  }

  const { title, location, host } = housing;

  return (
    <div>
      <HousingCarousel id={id} />
      <HousingId title={title} location={location} host={host} />
    </div>
  );
};

export default Housing;
