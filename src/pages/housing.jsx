import { useParams } from 'react-router-dom';
import data from '../data/logements.json';

const Housing = () => {
  const { id } = useParams();
  const housing = data.find((item) => item.id === id);

  const { title, image, host, location, tags, rating } = housing;

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{host}</p>
      <p>{location}</p>
      <p>{tags}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Housing;